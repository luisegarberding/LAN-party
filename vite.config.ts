import { defineConfig, loadEnv, type PluginOption } from "vite";
import type { IncomingMessage, ServerResponse } from "node:http";

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

function chatProxyPlugin(apiKey: string | undefined): PluginOption {
  return {
    name: "chat-proxy",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        if (req.method !== "POST") {
          sendJson(res, 405, { error: "Method Not Allowed" });
          return;
        }
        if (!apiKey) {
          sendJson(res, 500, {
            error:
              "OPENAI_API_KEY is not set. Add it to .env and restart `npm run dev`.",
          });
          return;
        }

        try {
          const body = await readJsonBody<{
            messages?: { role: string; content: string }[];
          }>(req);
          const messages = body.messages ?? [];

          const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              temperature: 0.4,
              max_tokens: 600,
              messages,
            }),
          });

          const data = (await upstream.json()) as {
            choices?: { message?: { content?: string } }[];
            error?: { message?: string };
          };

          if (!upstream.ok) {
            sendJson(res, upstream.status, {
              error: data.error?.message ?? "Upstream error",
            });
            return;
          }

          const reply = data.choices?.[0]?.message?.content ?? "";
          sendJson(res, 200, { reply });
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";
          sendJson(res, 500, { error: message });
        }
      });
    },
  };
}

import { resolve } from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [chatProxyPlugin(env.OPENAI_API_KEY)],
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
