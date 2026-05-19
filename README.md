# TRUMPF Cutting Assistant — Landing Page

A multilingual landing page for the TRUMPF [Cutting Assistant](https://www.trumpf.com/) with an integrated chatbot (`Ask TRUMPF` / `Frag TRUMPF`) that only answers questions about TRUMPF and the Cutting Assistant.

Built for the Women of Tech 2026 Hackathon at TRUMPF, Ditzingen.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## What's inside

- **7 languages**: German, English, Spanish, French, Russian, Arabic (RTL), Hindi
- **TRUMPF brand styling**: blue `#0079c1` + lime `#c8d400`, Inter font
- **Scope-locked chatbot**: refuses anything not about TRUMPF / Cutting Assistant
- **Mobile responsive** with breakpoints at 720 and 480 px
- **Cross-browser**: tested on Chrome and Firefox

## How the chatbot works

The chatbot has **four upstreams** and picks the first one that is configured:

| Priority | Provider | Free? | Notes |
|----------|----------|-------|-------|
| 1 | Google Gemini 2.5 Flash | yes | best multilingual quality, recommended |
| 2 | Groq Llama 3.3 70B | yes | fastest; drop-in OpenAI-compatible |
| 3 | OpenRouter `gemini-2.0-flash-exp:free` | yes | fallback aggregator |
| 4 | **Offline rule-based** | always | no key, no internet — uses [`src/chatbot-kb.ts`](src/chatbot-kb.ts) |

The browser only ever talks to `/api/chat`. That endpoint is implemented in [`vite.config.ts`](vite.config.ts) as a Vite middleware so **your API key never leaves the dev server**. If all cloud providers fail (or none is configured), it falls back to the offline answerer automatically — the chatbot always responds.

When the offline answerer is in use, a small lime "Demo mode" chip appears next to the chatbot title, so judges can see what's powering it.

### Get a free Gemini key in 1 minute

1. Open <https://aistudio.google.com/apikey>
2. Sign in with any Google account
3. Click **Create API key** → **Create API key in new project**
4. Copy the key
5. Create a `.env` file in the repo root (or copy [`.env.example`](.env.example)):

   ```bash
   GEMINI_API_KEY=your_key_here
   ```

6. Restart `npm run dev`

You can also set `GROQ_API_KEY` ([console.groq.com/keys](https://console.groq.com/keys)) or `OPENROUTER_API_KEY` ([openrouter.ai/keys](https://openrouter.ai/keys)) as backups. Whichever you set, the proxy will use Gemini first, then Groq, then OpenRouter, then offline.

### Knowledge base

The offline answerer and the LLM grounding context both read from [`src/chatbot-kb.ts`](src/chatbot-kb.ts), which is curated by hand from the official [`TRUMPF-Cutting-Assistant-flyer-EN.pdf`](TRUMPF-Cutting-Assistant-flyer-EN.pdf). Update facts there in one place and the bot stays consistent across providers.

### Scope locking

The cloud providers receive the strict system prompt defined in [`src/chatbot.ts`](src/chatbot.ts) — they will refuse any off-topic question politely and in the user's language. The offline answerer is scope-locked by construction: it only returns entries from the KB, and refuses anything that doesn't hit a TRUMPF / laser-cutting keyword.

## Project layout

```
LAN-party/
├── index.html                  # Vite entry (main landing page)
├── customers.html              # /customers subpage
├── product-managers.html       # /product-managers subpage
├── engineers.html              # /engineers subpage
├── vite.config.ts              # Multi-page build + multi-provider /api/chat proxy
├── .env.example                # All three provider key slots
├── public/
│   ├── hero.png                # Hero image
│   ├── advantage-1.png         # Advantage tile imagery
│   └── advantage-2.png
├── src/
│   ├── main.ts                 # Main landing page renderer
│   ├── subpage.ts              # Shared subpage shell
│   ├── customers.ts            # Customer-audience page
│   ├── product-managers.ts     # Production-manager dashboard page
│   ├── engineers.ts            # Engineer FAQ/contact page
│   ├── chatbot.ts              # Chatbot UI + Cutting Coach system prompt
│   ├── chatbot-kb.ts           # Curated TRUMPF facts (offline + grounding)
│   ├── i18n.ts                 # 7-language translations
│   └── style.css               # TRUMPF brand styling
└── TRUMPF-Cutting-Assistant-flyer-EN.pdf
```

## Build for production

```bash
npm run build
npm run preview
```

The static bundle lands in `dist/` and can be deployed to any CDN. Note: the `/api/chat` proxy only runs in `npm run dev` / `npm run preview`. For production hosting under trumpf.com, the proxy logic in [`vite.config.ts`](vite.config.ts) needs to be reimplemented as a server-side function (Cloudflare Worker, Vercel function, etc.) — the same provider order can be ported verbatim.
