import { defineConfig, loadEnv, type PluginOption } from "vite";
import type { IncomingMessage, ServerResponse } from "node:http";
import { resolve } from "node:path";
import {
  buildKnowledgeContext,
  guessLang,
  isInScope,
  OFFLINE_OUT_OF_SCOPE,
  scoreOfflineAnswer,
} from "./src/chatbot-kb";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

type ProviderResult = {
  reply: string;
  source: "gemini" | "groq" | "openrouter" | "offline";
};

type Env = {
  GEMINI_API_KEY?: string;
  GROQ_API_KEY?: string;
  OPENROUTER_API_KEY?: string;
};

// ---------------------------------------------------------------------------
// Small HTTP helpers
// ---------------------------------------------------------------------------

function readJsonBody<T = unknown>(req: IncomingMessage): Promise<T> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(data || "{}") as T);
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res: ServerResponse, status: number, payload: unknown): void {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function lastUserMessage(messages: ChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return messages[i].content;
  }
  return "";
}

function systemPrompt(messages: ChatMessage[]): string {
  const sys = messages.find((m) => m.role === "system");
  return sys?.content ?? "";
}

// ---------------------------------------------------------------------------
// Provider: Gemini (Google AI Studio, free tier)
//   https://ai.google.dev/gemini-api/docs
// ---------------------------------------------------------------------------

async function callGemini(
  apiKey: string,
  messages: ChatMessage[],
): Promise<string> {
  const sys = systemPrompt(messages);
  const grounding =
    "GROUNDING FACTS (use these — they are authoritative):\n" +
    buildKnowledgeContext();

  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  if (contents.length === 0 || contents[0].role !== "user") {
    contents.unshift({ role: "user", parts: [{ text: "Hello." }] });
  }

  const body = {
    systemInstruction: { parts: [{ text: `${sys}\n\n${grounding}` }] },
    contents,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 600,
    },
  };

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
    encodeURIComponent(apiKey);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
    error?: { message?: string };
  };

  if (!res.ok) {
    throw new Error(`Gemini ${res.status}: ${data.error?.message ?? "error"}`);
  }

  const text = data.candidates?.[0]?.content?.parts
    ?.map((p) => p.text ?? "")
    .join("")
    .trim();

  if (!text) throw new Error("Gemini returned an empty response");
  return text;
}

// ---------------------------------------------------------------------------
// Provider: Groq (OpenAI-compatible, free tier, Llama 3.3 70B)
//   https://console.groq.com/docs
// ---------------------------------------------------------------------------

async function callGroq(
  apiKey: string,
  messages: ChatMessage[],
): Promise<string> {
  const sys = systemPrompt(messages);
  const augmented = sys
    ? [
        {
          role: "system" as const,
          content:
            sys +
            "\n\nGROUNDING FACTS (use these):\n" +
            buildKnowledgeContext(),
        },
        ...messages.filter((m) => m.role !== "system"),
      ]
    : messages;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.4,
      max_tokens: 600,
      messages: augmented,
    }),
  });

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
    error?: { message?: string };
  };

  if (!res.ok) {
    throw new Error(`Groq ${res.status}: ${data.error?.message ?? "error"}`);
  }
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("Groq returned an empty response");
  return text;
}

// ---------------------------------------------------------------------------
// Provider: OpenRouter (free models, OpenAI-compatible)
//   https://openrouter.ai/docs
// ---------------------------------------------------------------------------

async function callOpenRouter(
  apiKey: string,
  messages: ChatMessage[],
): Promise<string> {
  const sys = systemPrompt(messages);
  const augmented = sys
    ? [
        {
          role: "system" as const,
          content:
            sys +
            "\n\nGROUNDING FACTS (use these):\n" +
            buildKnowledgeContext(),
        },
        ...messages.filter((m) => m.role !== "system"),
      ]
    : messages;

  const res = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "TRUMPF Cutting Assistant Landing",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        temperature: 0.4,
        max_tokens: 600,
        messages: augmented,
      }),
    },
  );

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
    error?: { message?: string };
  };

  if (!res.ok) {
    throw new Error(
      `OpenRouter ${res.status}: ${data.error?.message ?? "error"}`,
    );
  }
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("OpenRouter returned an empty response");
  return text;
}

// ---------------------------------------------------------------------------
// Provider: Offline rule-based answerer (always works, no network)
// ---------------------------------------------------------------------------

function callOffline(messages: ChatMessage[]): string {
  const question = lastUserMessage(messages);
  const lang = guessLang(question);

  if (!isInScope(question)) {
    return OFFLINE_OUT_OF_SCOPE[lang] ?? OFFLINE_OUT_OF_SCOPE.en;
  }

  const entry = scoreOfflineAnswer(question);
  if (entry) return entry.answer;

  return (
    "I don't have a specific fact for that question in offline mode. " +
    "For details please contact TRUMPF sales at info@de.trumpf.com or " +
    "+49 (0) 7156 303-0, or watch the product video at " +
    "https://www.trumpf.info/fsbpmj."
  );
}

// ---------------------------------------------------------------------------
// Orchestrator — try providers in priority order, fall back to offline
// ---------------------------------------------------------------------------

async function answer(
  env: Env,
  messages: ChatMessage[],
): Promise<ProviderResult> {
  const errors: string[] = [];

  if (env.GEMINI_API_KEY) {
    try {
      const reply = await callGemini(env.GEMINI_API_KEY, messages);
      return { reply, source: "gemini" };
    } catch (err) {
      errors.push(`gemini: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  if (env.GROQ_API_KEY) {
    try {
      const reply = await callGroq(env.GROQ_API_KEY, messages);
      return { reply, source: "groq" };
    } catch (err) {
      errors.push(`groq: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  if (env.OPENROUTER_API_KEY) {
    try {
      const reply = await callOpenRouter(env.OPENROUTER_API_KEY, messages);
      return { reply, source: "openrouter" };
    } catch (err) {
      errors.push(
        `openrouter: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  if (errors.length > 0) {
    console.warn("[chat-proxy] All cloud providers failed:\n" + errors.join("\n"));
  }

  const reply = callOffline(messages);
  return { reply, source: "offline" };
}

// ---------------------------------------------------------------------------
// Vite middleware plugin
// ---------------------------------------------------------------------------

function chatProxyPlugin(env: Env): PluginOption {
  const configuredProviders = [
    env.GEMINI_API_KEY ? "gemini" : null,
    env.GROQ_API_KEY ? "groq" : null,
    env.OPENROUTER_API_KEY ? "openrouter" : null,
  ].filter(Boolean) as string[];

  if (configuredProviders.length === 0) {
    console.warn(
      "[chat-proxy] No API keys found in .env — chatbot will run in offline " +
        "mode. Add GEMINI_API_KEY (free at https://aistudio.google.com/apikey).",
    );
  } else {
    console.log(
      "[chat-proxy] Configured providers (in order): " +
        configuredProviders.join(" → ") +
        " → offline",
    );
  }

  return {
    name: "chat-proxy",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        if (req.method !== "POST") {
          sendJson(res, 405, { error: "Method Not Allowed" });
          return;
        }

        try {
          const body = await readJsonBody<{ messages?: ChatMessage[] }>(req);
          const messages = body.messages ?? [];

          const result = await answer(env, messages);
          sendJson(res, 200, result);
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";
          try {
            const reply = callOffline([
              { role: "user", content: "What is the Cutting Assistant?" },
            ]);
            sendJson(res, 200, {
              reply,
              source: "offline",
              warning: message,
            });
          } catch {
            sendJson(res, 500, { error: message });
          }
        }
      });
    },
  };
}

// ---------------------------------------------------------------------------
// Vite config
// ---------------------------------------------------------------------------

export default defineConfig(({ mode }) => {
  const loaded = loadEnv(mode, process.cwd(), "");
  const env: Env = {
    GEMINI_API_KEY: loaded.GEMINI_API_KEY,
    GROQ_API_KEY: loaded.GROQ_API_KEY,
    OPENROUTER_API_KEY: loaded.OPENROUTER_API_KEY,
  };
  return {
    plugins: [chatProxyPlugin(env)],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          customers: resolve(__dirname, "customers.html"),
          "product-managers": resolve(__dirname, "product-managers.html"),
          engineers: resolve(__dirname, "engineers.html"),
        },
      },
    },
  };
});
