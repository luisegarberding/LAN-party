// Curated knowledge base for the TRUMPF Cutting Assistant chatbot.
// Facts here are extracted from the official flyer
// (TRUMPF-Cutting-Assistant-flyer-EN.pdf) and the public product pages on
// trumpf.com. Used by:
//   - the offline rule-based answerer (when no API key is present)
//   - prompt augmentation for cloud LLM providers (kept consistent)
//
// Keep entries short, factual, and quotable. Do NOT invent facts here.

export type KbEntry = {
  id: string;
  keywords: string[];
  answer: string;
};

export const CUTTING_ASSISTANT_FACTS: KbEntry[] = [
  {
    id: "what-is",
    keywords: [
      "what",
      "what is",
      "describe",
      "overview",
      "cutting assistant",
      "ca",
      "schnittkanten",
      "schnittkanten-optimierung",
      "produkt",
    ],
    answer:
      "The TRUMPF Cutting Assistant is an AI-based cutting-edge optimization tool for 2D laser cutting machines. " +
      "Even inexperienced users can optimize cutting data in minutes via a guided dialog: scan the cutting edge with " +
      "a handheld scanner, select the laser technology table and the cutting issue (e.g. burrs, roughness, beam " +
      "interruption), and the system iteratively suggests improved parameters.",
  },
  {
    id: "ai-mode",
    keywords: [
      "ai mode",
      "ai",
      "ki",
      "ki-modus",
      "artificial intelligence",
      "model",
      "modell",
      "machine learning",
    ],
    answer:
      "AI mode uses the handheld scanner to measure burr height and roughness in micrometers, then a trained AI " +
      "model recommends parameter changes (speed, gas pressure, focal position, laser power). " +
      "AI mode currently supports Mild Steel with Nitrogen at 5–15 mm (Highspeed and MD5). " +
      "Mild Steel Oxygen and Stainless Steel Nitrogen will be added to AI mode from March 2026.",
  },
  {
    id: "bandwidth-mode",
    keywords: [
      "bandwidth",
      "bandbreite",
      "bandbreitenmodus",
      "test parts",
      "test cuts",
      "test series",
      "non scannable",
      "cannot scan",
    ],
    answer:
      "Bandwidth mode cuts a small series of test parts so you can pick the best one. It also works when the " +
      "cutting edge cannot be scanned. Bandwidth mode covers a broad range: Mild Steel (Nitrogen, Mixed Gas, " +
      "Oxygen, Air), Stainless Steel Nitrogen, and Aluminum (Nitrogen, Gas mix, Oxygen, Air) — typically 1–40 mm " +
      "depending on material and gas.",
  },
  {
    id: "workflow",
    keywords: [
      "how",
      "workflow",
      "steps",
      "process",
      "procedure",
      "ablauf",
      "vorgehen",
      "use",
      "operate",
    ],
    answer:
      "The workflow is dialog-guided in three steps:\n" +
      "01 Scan the cutting edge with the handheld scanner.\n" +
      "02 Pick the Laser Technology Table (LTT) and the cutting issue (burrs, roughness, beam interruption…).\n" +
      "03 Iterative optimization in AI mode (model-based recommendations) or Bandwidth mode (test-part series). " +
      "Typically a handful of iterations is enough to reach excellent edge quality.",
  },
  {
    id: "materials",
    keywords: [
      "material",
      "mild steel",
      "stainless",
      "aluminum",
      "aluminium",
      "edelstahl",
      "baustahl",
      "edelmetall",
      "thickness",
      "dicke",
      "stahl",
    ],
    answer:
      "Supported materials depend on the mode.\n" +
      "AI mode: Mild Steel + Nitrogen, 5–15 mm (Highspeed and MD5). Mild Steel + Oxygen and Stainless Steel + " +
      "Nitrogen are added in March 2026.\n" +
      "Bandwidth mode: Mild Steel (N₂ / mixed gas / O₂ / air), Stainless Steel + N₂, Aluminum (N₂ / mix / O₂ / air), " +
      "1–40 mm depending on material and gas.",
  },
  {
    id: "scanner",
    keywords: [
      "scanner",
      "handheld",
      "handscanner",
      "measure",
      "burr",
      "grat",
      "rauheit",
      "roughness",
      "micrometer",
      "mikrometer",
    ],
    answer:
      "The handheld scanner enables an objective assessment of cutting-edge quality: it measures burr height and " +
      "roughness in micrometers. This removes guesswork — different operators get the same reading on the same " +
      "part, which makes the Cutting Assistant's AI recommendations reliable and reproducible.",
  },
  {
    id: "benefits",
    keywords: [
      "benefit",
      "benefits",
      "advantage",
      "advantages",
      "vorteil",
      "vorteile",
      "why",
      "value",
      "roi",
    ],
    answer:
      "Key benefits:\n" +
      "• Even inexperienced users optimize cutting data like pros in minutes.\n" +
      "• Saves time and material — fewer trial cuts, less scrap.\n" +
      "• Excellent cutting quality even on non-laser-grade or fluctuating material.\n" +
      "• Objective edge-quality assessment via the handheld scanner.\n" +
      "• Self-improving: the model gets better as more real-world cuts are processed.",
  },
  {
    id: "no-expertise",
    keywords: [
      "expert",
      "expertise",
      "skilled",
      "no programming",
      "training",
      "beginner",
      "anfänger",
      "ungelernt",
      "novice",
      "learn",
    ],
    answer:
      "You don't need to be a laser-cutting expert or a programmer. The Cutting Assistant guides you through a " +
      "simple dialog, so semi-skilled operators can produce high-quality cuts without years of process know-how — " +
      "which directly helps with the industry-wide skilled-worker shortage.",
  },
  {
    id: "compatible-machines",
    keywords: [
      "machine",
      "trulaser",
      "compatible",
      "compatibility",
      "kompatibel",
      "maschine",
      "available on",
      "supported",
      "2d",
    ],
    answer:
      "The Cutting Assistant is designed for TRUMPF 2D laser cutting machines (TruLaser series). " +
      "Compatibility and availability depend on machine generation and configuration — please contact TRUMPF sales " +
      "(info@de.trumpf.com, +49 7156 303-0) to confirm for your specific machine.",
  },
  {
    id: "languages",
    keywords: [
      "language",
      "languages",
      "sprache",
      "sprachen",
      "translate",
      "i18n",
      "multilingual",
    ],
    answer:
      "This landing page is available in 7 languages: German, English, Spanish, French, Russian, Arabic, and " +
      "Hindi. Use the language switcher in the top-right corner of the page (Arabic is rendered right-to-left).",
  },
  {
    id: "video",
    keywords: [
      "video",
      "demo video",
      "show",
      "watch",
      "produktvideo",
      "youtube",
    ],
    answer:
      "You can watch the official Cutting Assistant product video here: https://www.trumpf.info/fsbpmj",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "kontakt",
      "sales",
      "vertrieb",
      "support",
      "service",
      "phone",
      "telefon",
      "email",
      "ditzingen",
      "address",
      "buy",
      "kaufen",
      "request",
      "demo",
    ],
    answer:
      "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG\n" +
      "Johann-Maus-Straße 2, 71254 Ditzingen, Germany\n" +
      "Phone: +49 (0) 7156 303-0\n" +
      "Email: info@de.trumpf.com\n" +
      "Web: https://www.trumpf.com",
  },
  {
    id: "trumpf-company",
    keywords: [
      "trumpf",
      "company",
      "unternehmen",
      "history",
      "geschichte",
      "about",
      "who",
      "founded",
      "headquarter",
      "hauptsitz",
    ],
    answer:
      "TRUMPF is a German high-tech company specializing in machine tools, laser technology, and electronics for " +
      "industrial manufacturing. Headquarters: Johann-Maus-Straße 2, 71254 Ditzingen, Germany. " +
      "TRUMPF supplies sheet-metal processors worldwide with machines, lasers, software and Smart Factory solutions.",
  },
  {
    id: "data-security",
    keywords: [
      "data",
      "privacy",
      "security",
      "daten",
      "datenschutz",
      "anonym",
      "anonymous",
      "share",
      "expertise",
    ],
    answer:
      "Your expertise stays yours. Data used to continuously improve the AI is anonymised, and TRUMPF treats " +
      "customer process know-how as confidential.",
  },
  {
    id: "updates",
    keywords: [
      "update",
      "updates",
      "version",
      "new version",
      "neue version",
      "improvement",
      "online update",
    ],
    answer:
      "TRUMPF provides regular online updates that extend supported materials and improve the AI model. For " +
      "example, Mild Steel Oxygen and Stainless Steel Nitrogen come to AI mode in March 2026.",
  },
  {
    id: "cutting-coach",
    keywords: [
      "coach",
      "cutting coach",
      "why",
      "explain",
      "reason",
      "warum",
      "begründung",
      "erklär",
      "teach",
      "training",
      "learn",
      "understand",
    ],
    answer:
      "Cutting Coach is a proposed new mode of the Cutting Assistant. Instead of only telling the operator WHAT " +
      "to change, it explains WHY in plain language — connecting parameter changes (speed, gas pressure, focal " +
      "position, laser power) to the underlying physics (melt ejection, kerf width, drag lines, oxide layer). " +
      "Operators don't just get a recommendation — they build real process know-how, step by step. " +
      "This directly addresses the skilled-worker shortage in sheet-metal processing.",
  },
  {
    id: "gas-pressure-burr",
    keywords: [
      "gas pressure",
      "gasdruck",
      "pressure",
      "druck",
      "burr formation",
      "burr",
      "gratbildung",
      "grat",
      "n2",
      "nitrogen",
      "o2",
      "oxygen",
      "stickstoff",
      "sauerstoff",
    ],
    answer:
      "Gas pressure controls how forcefully molten material is blown out of the kerf. Too low — the melt " +
      "freezes onto the underside as a visible burr. Too high — the gas turbulence widens the kerf and roughens " +
      "the edge. The Cutting Assistant tunes pressure together with speed and focal position so the melt is " +
      "ejected cleanly without disturbing the cut front. Nitrogen (N₂) gives oxide-free, clean edges for " +
      "stainless steel and aluminium; oxygen (O₂) burns mild steel for higher cutting speed.",
  },
  {
    id: "cleaner-stainless",
    keywords: [
      "stainless",
      "edelstahl",
      "stainless steel",
      "clean edge",
      "saubere kante",
      "saubere kanten",
      "cleaner",
      "shiny",
      "oxide",
    ],
    answer:
      "For clean, oxide-free edges on stainless steel, use Nitrogen (N₂) as the assist gas and let the Cutting " +
      "Assistant tune pressure, focal position and speed together. In AI mode, Stainless Steel + Nitrogen will be " +
      "supported from March 2026. Until then, Bandwidth mode already covers Stainless Steel + Nitrogen across a " +
      "wide thickness range — typically with just a small series of test parts.",
  },
  {
    id: "sustainability",
    keywords: [
      "sustainability",
      "nachhaltigkeit",
      "co2",
      "co₂",
      "carbon",
      "energy",
      "energie",
      "scrap",
      "ausschuss",
      "green",
      "environment",
      "umwelt",
      "save",
      "savings",
      "saving",
      "einsparung",
    ],
    answer:
      "The proposed Sustainability Twin gives every shift a live readout of energy used, scrap avoided and CO₂ " +
      "emissions saved — per operator, per machine, per job. Because the Cutting Assistant already reaches a good " +
      "part faster (fewer trial cuts, less wasted sheet), the savings are real and measurable. Typical targets " +
      "discussed in the feature pitch: −18% scrap per job, −12% energy per good part.",
  },
];

// Lower-case keyword/score scan. Returns the best entry or null if none matched.
export function scoreOfflineAnswer(question: string): KbEntry | null {
  const q = question.toLowerCase();
  let best: KbEntry | null = null;
  let bestScore = 0;
  for (const entry of CUTTING_ASSISTANT_FACTS) {
    let score = 0;
    for (const k of entry.keywords) {
      const needle = k.toLowerCase();
      if (q.includes(needle)) score += needle.length; // longer matches weigh more
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best;
}

// Hard scope guard for the offline answerer: only respond if at least one
// TRUMPF / cutting-assistant / laser-cutting topical keyword is present.
const SCOPE_KEYWORDS = [
  "trumpf",
  "cutting",
  "cut",
  "assistant",
  "laser",
  "schneid",
  "schnitt",
  "burr",
  "grat",
  "rauheit",
  "roughness",
  "scan",
  "trulaser",
  "bandwidth",
  "bandbreite",
  "stahl",
  "steel",
  "aluminum",
  "aluminium",
  "stainless",
  "edelstahl",
  "ditzingen",
  "machine",
  "maschine",
  "parameter",
  "gas",
  "nitrogen",
  "stickstoff",
  "oxygen",
  "sauerstoff",
  "kerf",
  "scanner",
  "handscanner",
  "ki",
  "ai",
  "produktvideo",
  "trumpf.com",
  "coach",
  "sustainability",
  "nachhaltigkeit",
  "co2",
  "scrap",
  "ausschuss",
  "energy",
  "energie",
  "edge",
  "kante",
];

export function isInScope(question: string): boolean {
  const q = question.toLowerCase();
  return SCOPE_KEYWORDS.some((k) => q.includes(k));
}

// Per-language polite refusal for the offline answerer. The cloud LLMs handle
// their own refusals via the system prompt; this is only used by the offline
// fallback when the question is out of scope.
export const OFFLINE_OUT_OF_SCOPE: Record<string, string> = {
  de:
    "Ich bin der TRUMPF-Assistent und beantworte ausschließlich Fragen zu TRUMPF und zum Cutting Assistant. " +
    "Wie kann ich Ihnen dazu helfen?",
  en:
    "I'm the TRUMPF assistant and can only answer questions about TRUMPF and the Cutting Assistant. " +
    "How can I help you with that?",
  es:
    "Soy el asistente de TRUMPF y solo respondo preguntas sobre TRUMPF y el Cutting Assistant. " +
    "¿En qué puedo ayudarle?",
  fr:
    "Je suis l'assistant TRUMPF et je ne réponds qu'aux questions sur TRUMPF et le Cutting Assistant. " +
    "Comment puis-je vous aider à ce sujet ?",
  ru:
    "Я ассистент TRUMPF и отвечаю только на вопросы о TRUMPF и Cutting Assistant. " +
    "Чем могу помочь?",
  ar:
    "أنا مساعد TRUMPF وأجيب فقط على الأسئلة المتعلقة بشركة TRUMPF و Cutting Assistant. " +
    "كيف يمكنني مساعدتك في ذلك؟",
  hi:
    "मैं TRUMPF सहायक हूँ और केवल TRUMPF एवं Cutting Assistant से जुड़े सवालों के उत्तर देता हूँ। " +
    "मैं आपकी इसमें कैसे मदद कर सकता हूँ?",
};

// Builds a single string of all KB facts. Used as extra grounding context
// when calling cloud LLMs (Gemini/Groq/OpenRouter) so they don't invent facts.
export function buildKnowledgeContext(): string {
  return CUTTING_ASSISTANT_FACTS
    .map((e) => `- [${e.id}] ${e.answer.replace(/\n/g, " ")}`)
    .join("\n");
}

// Detects a likely language from the user message using simple unicode-range
// heuristics. Falls back to "en". Used only by the offline answerer to pick
// the right refusal string — the cloud LLMs do their own detection.
export function guessLang(text: string): keyof typeof OFFLINE_OUT_OF_SCOPE {
  if (/[\u0600-\u06ff]/.test(text)) return "ar"; // Arabic
  if (/[\u0900-\u097f]/.test(text)) return "hi"; // Devanagari (Hindi)
  if (/[\u0400-\u04ff]/.test(text)) return "ru"; // Cyrillic
  // Latin-script heuristics
  const t = text.toLowerCase();
  if (/\b(der|die|das|und|nicht|ist|für|kann|ich|wie|was|sie|ihnen)\b/.test(t))
    return "de";
  if (/\b(que|qué|cómo|para|sobre|usted|por|con|gracias)\b/.test(t)) return "es";
  if (/\b(que|comment|pour|avec|merci|bonjour|vous|votre)\b/.test(t)) return "fr";
  return "en";
}
