export const LANGUAGES = [
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

export type Translation = {
  nav: {
    advantages: string;
    how: string;
    contact: string;
    askTrumpf: string;
    search: string;
    products: string;
    solutions: string;
    company: string;
    sustainability: string;
    newsroom: string;
    career: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  advantages: {
    title: string;
    subtitle: string;
    items: { title: string; body: string; cta?: string }[];
  };
  coach: {
    badge: string;
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
    tryAsking: string;
    suggestions: string[];
    askButton: string;
    closeButton: string;
  };
  how: {
    title: string;
    subtitle: string;
    steps: { index: string; title: string; body: string }[];
  };
  cta: { title: string; button: string };
  audiences: {
    title: string;
    subtitle: string;
    customers: { label: string; tagline: string };
    productManagers: { label: string; tagline: string };
    engineers: { label: string; tagline: string };
  };
  subpages: {
    customers: string;
    productManagers: string;
    engineers: string;
    back: string;
  };
  customersPage: {
    eyebrow: string;
    subtitle: string;
    advantagesTitle: string;
    advantagesBody: string;
    kpisTitle: string;
    kpisBody: string;
    ctaTitle: string;
    ctaChat: string;
    ctaContact: string;
    anim: {
      scanning: string;
      roughness: string;
      burr: string;
      recommendation: string;
      feedAdjust: string;
      optimized: string;
    };
  };
  engineersPage: {
    eyebrow: string;
    subtitle: string;
    guideTitle: string;
    guideSubtitle: string;
    steps: { title: string; body: string }[];
    faqTitle: string;
    faqSubtitle: string;
    faqs: { q: string; a: string }[];
    contactTitle: string;
    contactSubtitle: string;
    contactCompany: string;
    contactAddress: string;
    contactPhone: string;
    contactFax: string;
    contactEmail: string;
    contactHours: string;
    contactHoursValue: string;
    hotlineTitle: string;
    hotlineDesc: string;
    hotlineButton: string;
  };
  pmPage: {
    eyebrow: string;
    subtitle: string;
    timeRange: string;
    vsLastWeek: string;
    kpis: {
      materialSaved: string;
      pieces: string;
      costSavings: string;
      avgIterations: string;
      machinesOnline: string;
      co2Saved: string;
      avgRoughness: string;
      setupTime: string;
    };
    pieces: { title: string; subtitle: string };
    issues: {
      title: string;
      subtitle: string;
      burr: string;
      roughness: string;
      beam: string;
    };
    current: {
      title: string;
      material: string;
      thickness: string;
      gas: string;
      sheet: string;
      mode: string;
      progress: string;
      eta: string;
    };
    activity: {
      title: string;
      items: string[];
    };
  };
  footer: { copy: string };
  switcher: { label: string };
  chatbot: {
    title: string;
    welcome: string[];
    disclaimer: string;
    placeholder: string;
    send: string;
    reset: string;
    close: string;
    launcher: string;
    typing: string;
    error: string;
    demoMode: string;
    quickRepliesLabel: string;
    quickReplies: string[];
  };
};

export const translations: Record<LangCode, Translation> = {
  de: {
    nav: {
      advantages: "Vorteile",
      how: "So funktioniert's",
      contact: "Kontakt",
      askTrumpf: "Frag TRUMPF",
      search: "Suche",
      products: "Produkte",
      solutions: "Lösungen",
      company: "Unternehmen",
      sustainability: "Nachhaltigkeit",
      newsroom: "Newsroom",
      career: "Karriere",
    },
    hero: {
      eyebrow: "Cutting Assistant",
      title: "KI-gestützte Schnittkanten-Optimierung",
      lead:
        "KI-basierte Schnittkanten-Optimierung für Ihre 2D-Laserschneidanlage. Optimieren Sie Schnittparameter schnell, sparen Sie Zeit und Material — für exzellente Schnittqualität, auch bei schwankender Materialqualität.",
      ctaPrimary: "Demo anfragen",
      ctaSecondary: "Produktvideo ansehen",
      badge: "Jetzt entdecken!",
    },
    advantages: {
      title: "Die Vorteile auf einen Blick",
      subtitle: "Schnittkanten-Optimierung — in Ihrem Material, für Ihre Mitarbeiter.",
      items: [
        {
          title: "Dialoggeführte Schnittdatenoptimierung",
          body: "Auch unerfahrene Anwender optimieren Schnittdaten in wenigen Minuten wie Profis — das spart Zeit und Materialkosten.",
        },
        {
          title: "Exzellente Schnittqualität — auch bei nicht-lasertauglichem Material",
          body: "Der Cutting Assistant schlägt passende Optimierungen vor — ob für Sondermaterialien oder Materialien mit schwankender Qualität.",
        },
        {
          title: "Cutting Coach — Ihr KI-Lehrmodus",
          body: "Nicht nur bessere Schnitte — besseres Verständnis. Der Coach erklärt, *warum* jede Parameteränderung wirkt, und macht so jeden Bediener mit der Zeit zum Experten.",
          cta: "Mehr erfahren",
        },
      ],
    },
    coach: {
      badge: "NEU",
      eyebrow: "Kommt als Nächstes",
      title: "Cutting Coach",
      lead: "Der Cutting Assistant sagt Ihnen, *was* Sie ändern sollen. Der Cutting Coach erklärt, *warum* — so wächst das Know-how Ihres Teams mit jedem Schnitt.",
      bullets: [
        "Physik in einfachen Worten: Fokuslage, Gasdruck, Geschwindigkeit, Schmelzaustreibung",
        "Audit-Trail: jede Parameteränderung verknüpft mit einem messbaren Fehler",
        "Sustainability Twin: Ausschuss, Energie und CO₂-Einsparungen pro Schicht verfolgen",
        "Wissensaufbau im Betrieb — auch wenn die erfahrene Bedienerin im Urlaub ist",
      ],
      tryAsking: "Fragen Sie den Coach:",
      suggestions: [
        "Warum ist die Fokuslage beim Schneiden von 8 mm Baustahl wichtig?",
        "Wie erreiche ich eine sauberere Kante bei Edelstahl?",
        "Wie reduziert der Cutting Assistant Ausschuss und CO₂?",
      ],
      askButton: "Coach fragen",
      closeButton: "Schließen",
    },
    how: {
      title: "Einfache Bedienung, dialoggeführt",
      subtitle: "Gezielte Parameteranpassung anhand Schnittproblem und Material.",
      steps: [
        {
          index: "01 Start",
          title: "Schnittkante scannen",
          body: "Mit dem Handscanner den aktuellen Zustand der Schnittkante objektiv erfassen.",
        },
        {
          index: "02 Schnittproblem wählen",
          title: "Lasertechnologie-Tabelle auswählen",
          body: "Wählen Sie aus typischen Schnittproblemen wie Grat, Rauheit oder Strahlabriss.",
        },
        {
          index: "03 Iterative Optimierung",
          title: "KI- oder Bandbreitenmodus",
          body: "KI-Modus: Grat-/Rauheitsmessung mit modellbasierten Empfehlungen. Bandbreitenmodus: Schneiden einer Testteilreihe.",
        },
      ],
    },
    cta: {
      title: "Bereit, Ihre Schnittparameter zu optimieren?",
      button: "Vertrieb kontaktieren",
    },
    audiences: {
      title: "Für wen ist der Cutting Assistant?",
      subtitle: "Wählen Sie Ihre Rolle — wir zeigen, was für Sie relevant ist.",
      customers: {
        label: "Neue Kunden",
        tagline: "Verstehen Sie, was der Cutting Assistant für Ihre Fertigung leisten kann.",
      },
      productManagers: {
        label: "Produktmanager",
        tagline: "Roadmap, Marktpotenzial und Einordnung im TRUMPF-Portfolio.",
      },
      engineers: {
        label: "Anwender & Techniker",
        tagline: "Tiefere Workflows, Materialspektrum und Best Practices im Alltag.",
      },
    },
    subpages: {
      customers: "Für neue Kunden",
      productManagers: "Für Produktmanager",
      engineers: "Für Anwender & Techniker",
      back: "Zurück zur Startseite",
    },
    customersPage: {
      eyebrow: "Cutting Assistant für Sie",
      subtitle:
        "KI-gestützte Schnittkanten-Optimierung — schnell verständlich erklärt.",
      advantagesTitle: "Ihre Vorteile auf einen Blick",
      advantagesBody:
        "Mit dem Cutting Assistant optimieren Sie Schneidparameter schnell und einfach, erhalten KI-gestützte Empfehlungen, sparen Zeit und Materialkosten und erzielen exzellente Schnittqualität — auch bei schwankender Materialgüte. Möchten Sie weitere Details oder haben Sie noch Fragen?",
      kpisTitle: "Konkrete KPIs",
      kpisBody:
        "Konkrete KPIs beim Einsatz des Cutting Assistant sind: Reduzierung der Einrichtzeit, Senkung der Materialkosten, Steigerung der Schnittqualität und Minimierung von Nacharbeit durch KI-gestützte, objektive Parameterempfehlungen. Details finden Sie im Cutting Assistant Flyer. Haben Sie weitere Fragen oder wünschen Sie Feedback zu geben?",
      ctaTitle: "Bereit für den nächsten Schritt?",
      ctaChat: "Frag TRUMPF",
      ctaContact: "Vertrieb kontaktieren",
      anim: {
        scanning: "Schnittkante wird gescannt…",
        roughness: "Rauheit Ra",
        burr: "Bartöhe",
        recommendation: "KI-Empfehlung",
        feedAdjust: "Vorschub –2 %",
        optimized: "Optimiert",
      },
    },
    engineersPage: {
      eyebrow: "Cutting Assistant · Anwendung",
      subtitle: "Schritt-für-Schritt-Anleitung, FAQs und direkter Draht zum Service.",
      guideTitle: "So setzen Sie den Cutting Assistant ein",
      guideSubtitle: "Vom Scan bis zur freigegebenen Parameteranpassung.",
      steps: [
        { title: "Testteil vorbereiten", body: "Schneiden Sie ein Bauteil mit den aktuellen Parametern aus Ihrer Laser-Technologie-Tabelle (LTT)." },
        { title: "Cutting Assistant öffnen", body: "Starten Sie die Funktion direkt am Maschinen-HMI über das Menü „Cutting Assistant“." },
        { title: "Schnittkante scannen", body: "Mit dem Handscanner über die Schnittkante fahren — Bartöhe und Rauheit werden in µm gemessen." },
        { title: "LTT & Schnittproblem wählen", body: "Wählen Sie die passende Lasertechnologie-Tabelle und das Schnittproblem (Grat, Rauheit, Strahlabriss …)." },
        { title: "KI- oder Bandbreitenmodus", body: "KI-Modus für unterstützte Materialien — sonst Bandbreitenmodus mit einer Testteilreihe." },
        { title: "Empfehlung übernehmen", body: "Vorgeschlagene Parameter prüfen, in der Tabelle übernehmen und Serienteil schneiden." },
      ],
      faqTitle: "Häufige Fragen",
      faqSubtitle: "Die wichtigsten Antworten für Anwender und Techniker.",
      faqs: [
        { q: "Welche Materialien und Blechdicken werden unterstützt?", a: "KI-Modus aktuell: Mild Steel mit Stickstoff (5–15 mm, Highspeed und MD5). Bandbreitenmodus deckt darüber hinaus Mild Steel (N₂, Mixed Gas, O₂, Air), Edelstahl N₂ und Aluminium in unterschiedlichen Gasen ab — 1–40 mm je nach Materialkombination." },
        { q: "Wann nutze ich KI-Modus, wann Bandbreitenmodus?", a: "KI-Modus, wenn die Schnittkante scanbar und das Material unterstützt ist — schnellste Optimierung. Bandbreitenmodus, wenn die Kante nicht gescannt werden kann oder die Kombination außerhalb des KI-Spektrums liegt." },
        { q: "Wie lange dauert eine Optimierung?", a: "Typisch wenige Minuten: Scan + Empfehlung im KI-Modus dauert <1 min pro Iteration. Im Bandbreitenmodus sind 4–8 Testteile üblich." },
        { q: "Funktioniert der Cutting Assistant auf Bestandsmaschinen?", a: "Ja, der Cutting Assistant ist als Software-Funktion für unterstützte 2D-Laserschneidanlagen verfügbar. Ihr TRUMPF-Service prüft die Voraussetzungen Ihrer Maschine." },
        { q: "Was tun, wenn die Schnittkante nicht scanbar ist?", a: "Nutzen Sie den Bandbreitenmodus: dort schneiden Sie eine Reihe Testteile, und der Assistant leitet daraus die Parameterempfehlung ab." },
      ],
      contactTitle: "Customer Support",
      contactSubtitle: "Direkter Draht zum TRUMPF Service.",
      contactCompany: "Firma",
      contactAddress: "Adresse",
      contactPhone: "Telefon",
      contactFax: "Fax",
      contactEmail: "E-Mail",
      contactHours: "Servicezeiten",
      contactHoursValue: "Mo–Fr · 07:00–18:00 (MEZ)",
      hotlineTitle: "Schneller Kontakt zur Service-Hotline",
      hotlineDesc: "Unsere Anwendungstechniker beantworten Ihre Fragen zum Cutting Assistant und zur Schnittparameter-Optimierung.",
      hotlineButton: "Jetzt anrufen",
    },
    pmPage: {
      eyebrow: "Product Manager Dashboard",
      subtitle: "Live-Kennzahlen aus dem Einsatz des Cutting Assistant.",
      timeRange: "Letzte 14 Tage",
      vsLastWeek: "ggü. Vorwoche",
      kpis: {
        materialSaved: "Material gespart",
        pieces: "Geschnittene Teile",
        costSavings: "Kostenersparnis",
        avgIterations: "Ø Iterationen",
        machinesOnline: "Maschinen online",
        co2Saved: "CO₂ eingespart",
        avgRoughness: "Ø Rauheit Ra",
        setupTime: "Rüstzeit",
      },
      pieces: {
        title: "Geschnittene Teile pro Tag",
        subtitle: "Über alle aktiven Maschinen",
      },
      issues: {
        title: "Schnittprobleme — Verteilung",
        subtitle: "Vom Cutting Assistant erkannt",
        burr: "Grat",
        roughness: "Rauheit",
        beam: "Strahlabriss",
      },
      current: {
        title: "Aktuelle Maschine · TruLaser 5030",
        material: "Material",
        thickness: "Blechdicke",
        gas: "Schneidgas",
        sheet: "Tafelformat",
        mode: "Modus",
        progress: "Fortschritt",
        eta: "Voraussichtlich fertig",
      },
      activity: {
        title: "Letzte Aktivitäten",
        items: [
          "Cutting Assistant: Vorschub von 18 m/min auf 17,6 m/min korrigiert (Job #4821)",
          "Materialwechsel: Edelstahl 1.4301 → Baustahl S235JR",
          "KI-Modus aktiviert für Mild Steel N₂ 8 mm",
          "Bartöhe unter 50 µm — Parameter freigegeben",
          "Bandbreitenmodus: 6 Testteile geschnitten",
        ],
      },
    },
    footer: { copy: "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG" },
    switcher: { label: "Sprache" },
    chatbot: {
      title: "Frag TRUMPF",
      welcome: [
        "Willkommen bei „Frag TRUMPF“. 👋 Stellen Sie uns gerne Fragen rund um den Cutting Assistant und TRUMPF im Allgemeinen. 💡",
        "Hinweis: Die Antworten werden mithilfe von KI generiert und können Fehler enthalten.",
      ],
      disclaimer: "KI-generiert · Bitte wichtige Angaben prüfen",
      placeholder: "Stellen Sie hier Ihre Frage…",
      send: "Senden",
      reset: "Neuer Chat",
      close: "Schließen",
      launcher: "Chat öffnen",
      typing: "tippt…",
      error: "Es gab ein Problem. Bitte versuchen Sie es später erneut.",
      demoMode: "Demo-Modus",
      quickRepliesLabel: "Schnelle Fragen",
      quickReplies: [
        "Was ist der Cutting Assistant?",
        "Welche Materialien werden unterstützt?",
        "Wie funktioniert die KI-Optimierung?",
        "Wie reduziert er Ausschuss und CO₂?",
      ],
    },
  },

  en: {
    nav: {
      advantages: "Advantages",
      how: "How it works",
      contact: "Contact",
      askTrumpf: "Ask TRUMPF",
      search: "Search",
      products: "Products",
      solutions: "Solutions",
      company: "Company",
      sustainability: "Sustainability",
      newsroom: "Newsroom",
      career: "Careers",
    },
    hero: {
      eyebrow: "Cutting Assistant",
      title: "AI-assisted cutting edge optimization",
      lead:
        "AI-based cutting-edge optimization for your 2D laser cutting machine. Quickly optimize cutting parameters, save time and material — and ensure excellent cutting quality, even with varying material grades.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "Watch product video",
      badge: "Discover Now!",
    },
    advantages: {
      title: "The advantages at a glance",
      subtitle: "Cutting-edge optimization — in your material, for your employees.",
      items: [
        {
          title: "Dialog-guided cutting data optimization",
          body: "Even inexperienced users can optimize cutting data like a pro in just a few minutes — saving both time and material costs.",
        },
        {
          title: "Excellent cutting quality — even in non-laser-grade material",
          body: "The Cutting Assistant suggests suitable optimizations — whether for special materials or materials with fluctuating quality.",
        },
        {
          title: "Cutting Coach — your AI teaching mode",
          body: "Not just better cuts — better understanding. The Coach explains *why* each parameter change matters, turning every operator into an expert over time.",
          cta: "Learn more",
        },
      ],
    },
    coach: {
      badge: "NEW",
      eyebrow: "Coming next",
      title: "Cutting Coach",
      lead: "The Cutting Assistant tells you *what* to change. The Cutting Coach explains *why* — so your team grows expertise with every cut.",
      bullets: [
        "Plain-language physics: focus position, gas pressure, speed, melt ejection",
        "Audit trail: every parameter change linked to a measurable defect",
        "Sustainability Twin: track scrap, energy and CO₂ saved per shift",
        "On-the-job training that scales — even when the senior operator is on vacation",
      ],
      tryAsking: "Try asking the Coach:",
      suggestions: [
        "Why does focus position matter when cutting 8 mm mild steel?",
        "How do I get a cleaner edge on stainless steel?",
        "How does the Cutting Assistant reduce scrap and CO₂?",
      ],
      askButton: "Ask the Coach",
      closeButton: "Close",
    },
    how: {
      title: "Easy handling, dialog-guided",
      subtitle: "Targeted parameter adjustment based on the specific cutting issue and material.",
      steps: [
        {
          index: "01 Start",
          title: "Scan the cutting edge",
          body: "Use the handheld scanner to capture the current cutting-edge condition objectively.",
        },
        {
          index: "02 Select cutting issue",
          title: "Pick the laser technology table",
          body: "Choose from common cutting issues such as burrs, roughness, or beam interruption.",
        },
        {
          index: "03 Iterative optimization",
          title: "AI or Bandwidth mode",
          body: "AI mode: burr/roughness measurement with model-based recommendations. Bandwidth mode: cut a series of test parts.",
        },
      ],
    },
    cta: {
      title: "Ready to optimize your cutting parameters?",
      button: "Talk to sales",
    },
    audiences: {
      title: "Who is the Cutting Assistant for?",
      subtitle: "Pick your role — we'll show what's relevant for you.",
      customers: {
        label: "New customers",
        tagline: "Understand what the Cutting Assistant can do for your shop.",
      },
      productManagers: {
        label: "Product managers",
        tagline: "Roadmap, market opportunity, and fit within the TRUMPF portfolio.",
      },
      engineers: {
        label: "Operators & engineers",
        tagline: "Deeper workflows, material spectrum, and day-to-day best practices.",
      },
    },
    subpages: {
      customers: "For new customers",
      productManagers: "For product managers",
      engineers: "For operators & engineers",
      back: "Back to home",
    },
    customersPage: {
      eyebrow: "Cutting Assistant for you",
      subtitle:
        "AI-assisted cutting-edge optimization — explained at a glance.",
      advantagesTitle: "Your benefits at a glance",
      advantagesBody:
        "With the Cutting Assistant you optimize cutting parameters quickly and easily, get AI-based recommendations, save time and material costs, and achieve excellent cutting quality — even with fluctuating material grades. Want to know more or have any questions?",
      kpisTitle: "Concrete KPIs",
      kpisBody:
        "Concrete KPIs when using the Cutting Assistant: reduced setup time, lower material costs, higher cutting quality, and minimized rework thanks to AI-based, objective parameter recommendations. You'll find more in the Cutting Assistant flyer. Any further questions or feedback?",
      ctaTitle: "Ready for the next step?",
      ctaChat: "Ask TRUMPF",
      ctaContact: "Talk to sales",
      anim: {
        scanning: "Scanning cutting edge…",
        roughness: "Roughness Ra",
        burr: "Burr height",
        recommendation: "AI recommendation",
        feedAdjust: "Feed rate −2 %",
        optimized: "Optimized",
      },
    },
    engineersPage: {
      eyebrow: "Cutting Assistant · in practice",
      subtitle: "Step-by-step guide, FAQs and a direct line to service.",
      guideTitle: "How to use the Cutting Assistant",
      guideSubtitle: "From scan to released parameter adjustment.",
      steps: [
        { title: "Prepare a test part", body: "Cut a part using your current Laser Technology Table (LTT) parameters." },
        { title: "Open the Cutting Assistant", body: "Launch the function directly on the machine HMI from the “Cutting Assistant” menu." },
        { title: "Scan the cutting edge", body: "Move the handheld scanner along the edge — burr height and roughness are measured in µm." },
        { title: "Pick LTT & cutting issue", body: "Choose the matching Laser Technology Table and the issue (burr, roughness, beam interruption…)." },
        { title: "AI or Bandwidth mode", body: "AI mode for supported materials; otherwise Bandwidth mode with a series of test parts." },
        { title: "Apply the recommendation", body: "Review the suggested parameters, accept them in the table, and run the production part." },
      ],
      faqTitle: "Frequently asked questions",
      faqSubtitle: "Quick answers for operators and engineers.",
      faqs: [
        { q: "Which materials and thicknesses are supported?", a: "AI mode today: Mild Steel with Nitrogen, 5–15 mm (Highspeed and MD5). Bandwidth mode additionally covers Mild Steel (N₂, Mixed Gas, O₂, Air), Stainless Steel N₂, and Aluminum in different gases — 1–40 mm depending on the combination." },
        { q: "When do I use AI mode vs Bandwidth mode?", a: "AI mode when the cutting edge can be scanned and your material is supported — the fastest optimization. Bandwidth mode when the edge cannot be scanned or the combination is outside the AI spectrum." },
        { q: "How long does an optimization take?", a: "Typically a few minutes: scan + recommendation in AI mode is under a minute per iteration. In Bandwidth mode, 4–8 test parts are common." },
        { q: "Does the Cutting Assistant work on existing machines?", a: "Yes, the Cutting Assistant is available as a software function for supported 2D laser cutting machines. Your TRUMPF Service team verifies the prerequisites for your machine." },
        { q: "What if my cutting edge can't be scanned?", a: "Use Bandwidth mode: cut a series of test parts and the Assistant derives a parameter recommendation from them." },
      ],
      contactTitle: "Customer Support",
      contactSubtitle: "A direct line to TRUMPF Service.",
      contactCompany: "Company",
      contactAddress: "Address",
      contactPhone: "Phone",
      contactFax: "Fax",
      contactEmail: "E-mail",
      contactHours: "Service hours",
      contactHoursValue: "Mon–Fri · 07:00–18:00 (CET)",
      hotlineTitle: "Fast track to the service hotline",
      hotlineDesc: "Our application engineers answer your questions about the Cutting Assistant and parameter optimization.",
      hotlineButton: "Call now",
    },
    pmPage: {
      eyebrow: "Product Manager Dashboard",
      subtitle: "Live performance metrics from the Cutting Assistant fleet.",
      timeRange: "Last 14 days",
      vsLastWeek: "vs last week",
      kpis: {
        materialSaved: "Material saved",
        pieces: "Parts cut",
        costSavings: "Cost savings",
        avgIterations: "Avg. iterations",
        machinesOnline: "Machines online",
        co2Saved: "CO₂ saved",
        avgRoughness: "Avg. roughness Ra",
        setupTime: "Setup time",
      },
      pieces: {
        title: "Parts cut per day",
        subtitle: "Across all active machines",
      },
      issues: {
        title: "Cutting issues — distribution",
        subtitle: "Detected by the Cutting Assistant",
        burr: "Burr",
        roughness: "Roughness",
        beam: "Beam interruption",
      },
      current: {
        title: "Current machine · TruLaser 5030",
        material: "Material",
        thickness: "Sheet thickness",
        gas: "Cutting gas",
        sheet: "Sheet size",
        mode: "Mode",
        progress: "Progress",
        eta: "Estimated completion",
      },
      activity: {
        title: "Recent activity",
        items: [
          "Cutting Assistant: feed rate adjusted 18 → 17.6 m/min (Job #4821)",
          "Material change: Stainless 1.4301 → Mild Steel S235JR",
          "AI mode enabled for Mild Steel N₂ 8 mm",
          "Burr height under 50 µm — parameters released",
          "Bandwidth mode: 6 test parts cut",
        ],
      },
    },
    footer: { copy: "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG" },
    switcher: { label: "Language" },
    chatbot: {
      title: "Ask TRUMPF",
      welcome: [
        "Welcome to “Ask TRUMPF”. 👋 Feel free to ask us anything about the Cutting Assistant or TRUMPF in general. 💡",
        "Note: answers are generated using AI and may contain errors.",
      ],
      disclaimer: "AI-generated · please verify important information",
      placeholder: "Type your question here…",
      send: "Send",
      reset: "New chat",
      close: "Close",
      launcher: "Open chat",
      typing: "typing…",
      error: "Something went wrong. Please try again later.",
      demoMode: "Demo mode",
      quickRepliesLabel: "Quick questions",
      quickReplies: [
        "What is the Cutting Assistant?",
        "Which materials are supported?",
        "How does the AI optimization work?",
        "How does it reduce scrap and CO₂?",
      ],
    },
  },

  es: {
    nav: {
      advantages: "Ventajas",
      how: "Cómo funciona",
      contact: "Contacto",
      askTrumpf: "Pregunta a TRUMPF",
      search: "Buscar",
      products: "Productos",
      solutions: "Soluciones",
      company: "Empresa",
      sustainability: "Sostenibilidad",
      newsroom: "Newsroom",
      career: "Carreras",
    },
    hero: {
      eyebrow: "Cutting Assistant",
      title: "Optimización del borde de corte asistida por IA",
      lead:
        "Optimización del borde de corte basada en IA para su máquina de corte láser 2D. Ajuste los parámetros de corte rápidamente, ahorre tiempo y material — y garantice una excelente calidad de corte, incluso con materiales de calidad variable.",
      ctaPrimary: "Solicitar una demo",
      ctaSecondary: "Ver vídeo del producto",
      badge: "¡Descúbralo!",
    },
    advantages: {
      title: "Las ventajas de un vistazo",
      subtitle: "Optimización del borde de corte — en su material, para sus empleados.",
      items: [
        {
          title: "Optimización de datos de corte guiada por diálogo",
          body: "Incluso usuarios sin experiencia pueden optimizar los datos de corte como un profesional en pocos minutos — ahorrando tiempo y costes de material.",
        },
        {
          title: "Excelente calidad de corte — incluso en material no apto para láser",
          body: "El Cutting Assistant propone optimizaciones adecuadas — ya sea para materiales especiales o de calidad fluctuante.",
        },
        {
          title: "Cutting Coach — su modo de aprendizaje con IA",
          body: "No solo mejores cortes — mejor comprensión. El Coach explica *por qué* importa cada cambio de parámetro, convirtiendo a cada operario en experto con el tiempo.",
          cta: "Saber más",
        },
      ],
    },
    coach: {
      badge: "NUEVO",
      eyebrow: "Próximamente",
      title: "Cutting Coach",
      lead: "El Cutting Assistant le dice *qué* cambiar. El Cutting Coach explica *por qué* — y así su equipo gana experiencia con cada corte.",
      bullets: [
        "Física en lenguaje claro: posición focal, presión de gas, velocidad, expulsión de fusión",
        "Trazabilidad: cada cambio de parámetro vinculado a un defecto medible",
        "Sustainability Twin: rastree desperdicio, energía y CO₂ ahorrados por turno",
        "Formación práctica que escala — incluso cuando el operario senior está de vacaciones",
      ],
      tryAsking: "Pregunte al Coach:",
      suggestions: [
        "¿Por qué importa la posición focal al cortar acero suave de 8 mm?",
        "¿Cómo obtengo un borde más limpio en acero inoxidable?",
        "¿Cómo reduce el Cutting Assistant el desperdicio y el CO₂?",
      ],
      askButton: "Preguntar al Coach",
      closeButton: "Cerrar",
    },
    how: {
      title: "Manejo sencillo y guiado por diálogo",
      subtitle: "Ajuste de parámetros dirigido al problema de corte y al material.",
      steps: [
        {
          index: "01 Inicio",
          title: "Escanear el borde de corte",
          body: "Capture objetivamente el estado actual del borde con el escáner manual.",
        },
        {
          index: "02 Seleccionar el problema",
          title: "Elegir la tabla tecnológica láser",
          body: "Elija entre problemas comunes como rebabas, rugosidad o interrupción del haz.",
        },
        {
          index: "03 Optimización iterativa",
          title: "Modo IA o de banda",
          body: "Modo IA: medición de rebaba/rugosidad con recomendaciones del modelo. Modo banda: una serie de piezas de prueba.",
        },
      ],
    },
    cta: {
      title: "¿Listo para optimizar sus parámetros de corte?",
      button: "Hablar con ventas",
    },
    audiences: {
      title: "¿Para quién es el Cutting Assistant?",
      subtitle: "Elija su rol y le mostraremos lo relevante para usted.",
      customers: {
        label: "Nuevos clientes",
        tagline: "Descubra lo que el Cutting Assistant puede hacer por su taller.",
      },
      productManagers: {
        label: "Gerentes de producto",
        tagline: "Hoja de ruta, oportunidad de mercado y encaje en el portafolio TRUMPF.",
      },
      engineers: {
        label: "Operadores e ingenieros",
        tagline: "Flujos detallados, materiales soportados y buenas prácticas diarias.",
      },
    },
    subpages: {
      customers: "Para nuevos clientes",
      productManagers: "Para gerentes de producto",
      engineers: "Para operadores e ingenieros",
      back: "Volver al inicio",
    },
    customersPage: {
      eyebrow: "Cutting Assistant para usted",
      subtitle:
        "Optimización del borde de corte asistida por IA — explicada de un vistazo.",
      advantagesTitle: "Sus ventajas de un vistazo",
      advantagesBody:
        "Con el Cutting Assistant optimiza los parámetros de corte de forma rápida y sencilla, recibe recomendaciones basadas en IA, ahorra tiempo y costes de material y logra una excelente calidad de corte — incluso con calidad de material variable. ¿Desea más detalles o tiene alguna pregunta?",
      kpisTitle: "KPIs concretos",
      kpisBody:
        "KPIs concretos al usar el Cutting Assistant: reducción del tiempo de preparación, menor coste de material, mayor calidad de corte y minimización del retrabajo gracias a recomendaciones objetivas basadas en IA. Encontrará más detalles en el folleto del Cutting Assistant. ¿Más preguntas o comentarios?",
      ctaTitle: "¿Listo para el siguiente paso?",
      ctaChat: "Pregunta a TRUMPF",
      ctaContact: "Hablar con ventas",
      anim: {
        scanning: "Escaneando el borde…",
        roughness: "Rugosidad Ra",
        burr: "Altura de rebaba",
        recommendation: "Recomendación IA",
        feedAdjust: "Avance −2 %",
        optimized: "Optimizado",
      },
    },
    engineersPage: {
      eyebrow: "Cutting Assistant · en la práctica",
      subtitle: "Guía paso a paso, FAQs y contacto directo con el servicio.",
      guideTitle: "Cómo utilizar el Cutting Assistant",
      guideSubtitle: "Del escaneo a la liberación del parámetro.",
      steps: [
        { title: "Preparar una pieza de prueba", body: "Corte una pieza con los parámetros actuales de su tabla tecnológica láser (LTT)." },
        { title: "Abrir el Cutting Assistant", body: "Inicie la función directamente en el HMI de la máquina, en el menú «Cutting Assistant»." },
        { title: "Escanear el borde", body: "Pase el escáner manual por el borde — la rugosidad y la altura de rebaba se miden en µm." },
        { title: "Seleccionar LTT y problema", body: "Elija la tabla tecnológica láser correspondiente y el problema (rebaba, rugosidad, interrupción del haz…)." },
        { title: "Modo IA o Bandwidth", body: "Modo IA para materiales soportados; si no, modo Bandwidth con piezas de prueba." },
        { title: "Aplicar la recomendación", body: "Revise los parámetros sugeridos, acéptelos en la tabla y produzca la pieza." },
      ],
      faqTitle: "Preguntas frecuentes",
      faqSubtitle: "Respuestas rápidas para operadores e ingenieros.",
      faqs: [
        { q: "¿Qué materiales y espesores se soportan?", a: "Modo IA: acero suave con N₂, 5–15 mm (Highspeed y MD5). Bandwidth cubre además acero suave (N₂, mezcla, O₂, aire), inox N₂ y aluminio en distintos gases — 1–40 mm según combinación." },
        { q: "¿Cuándo uso IA o Bandwidth?", a: "IA cuando el borde puede escanearse y el material está soportado — la opción más rápida. Bandwidth cuando no se puede escanear o la combinación está fuera del espectro IA." },
        { q: "¿Cuánto dura una optimización?", a: "Pocos minutos: escaneo y recomendación IA en <1 min por iteración. En Bandwidth, 4–8 piezas de prueba." },
        { q: "¿Funciona en máquinas existentes?", a: "Sí, es una función de software para máquinas láser 2D compatibles. Su servicio TRUMPF verifica los requisitos." },
        { q: "¿Y si no puedo escanear el borde?", a: "Use el modo Bandwidth: corte una serie de piezas de prueba y el Assistant deriva la recomendación." },
      ],
      contactTitle: "Atención al cliente",
      contactSubtitle: "Línea directa con TRUMPF Service.",
      contactCompany: "Empresa",
      contactAddress: "Dirección",
      contactPhone: "Teléfono",
      contactFax: "Fax",
      contactEmail: "E-mail",
      contactHours: "Horario de servicio",
      contactHoursValue: "Lun–Vie · 07:00–18:00 (CET)",
      hotlineTitle: "Línea directa de servicio",
      hotlineDesc: "Nuestros técnicos responden sus dudas sobre el Cutting Assistant y la optimización de parámetros.",
      hotlineButton: "Llamar ahora",
    },
    pmPage: {
      eyebrow: "Panel para gerentes de producto",
      subtitle: "Métricas en vivo de la flota Cutting Assistant.",
      timeRange: "Últimos 14 días",
      vsLastWeek: "vs. semana anterior",
      kpis: {
        materialSaved: "Material ahorrado",
        pieces: "Piezas cortadas",
        costSavings: "Ahorro de costes",
        avgIterations: "Iteraciones medias",
        machinesOnline: "Máquinas en línea",
        co2Saved: "CO₂ evitado",
        avgRoughness: "Rugosidad Ra media",
        setupTime: "Tiempo de preparación",
      },
      pieces: {
        title: "Piezas cortadas por día",
        subtitle: "Todas las máquinas activas",
      },
      issues: {
        title: "Distribución de incidencias",
        subtitle: "Detectadas por el Cutting Assistant",
        burr: "Rebaba",
        roughness: "Rugosidad",
        beam: "Interrupción del haz",
      },
      current: {
        title: "Máquina activa · TruLaser 5030",
        material: "Material",
        thickness: "Espesor",
        gas: "Gas de corte",
        sheet: "Tamaño chapa",
        mode: "Modo",
        progress: "Progreso",
        eta: "Fin previsto",
      },
      activity: {
        title: "Actividad reciente",
        items: [
          "Cutting Assistant: avance ajustado 18 → 17,6 m/min (Job #4821)",
          "Cambio de material: Inox 1.4301 → Acero S235JR",
          "Modo IA activado para Mild Steel N₂ 8 mm",
          "Altura de rebaba < 50 µm — parámetros aprobados",
          "Modo bandwidth: 6 piezas de prueba cortadas",
        ],
      },
    },
    footer: { copy: "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG" },
    switcher: { label: "Idioma" },
    chatbot: {
      title: "Pregunta a TRUMPF",
      welcome: [
        "Bienvenido a «Pregunta a TRUMPF». 👋 Haga sus preguntas sobre el Cutting Assistant o TRUMPF en general. 💡",
        "Nota: las respuestas se generan con IA y pueden contener errores.",
      ],
      disclaimer: "Generado por IA · verifique la información importante",
      placeholder: "Escriba su pregunta aquí…",
      send: "Enviar",
      reset: "Nuevo chat",
      close: "Cerrar",
      launcher: "Abrir chat",
      typing: "escribiendo…",
      error: "Algo salió mal. Inténtelo de nuevo.",
      demoMode: "Modo demo",
      quickRepliesLabel: "Preguntas rápidas",
      quickReplies: [
        "¿Qué es el Cutting Assistant?",
        "¿Qué materiales son compatibles?",
        "¿Cómo funciona la optimización con IA?",
        "¿Cómo reduce los desechos y el CO₂?",
      ],
    },
  },

  fr: {
    nav: {
      advantages: "Avantages",
      how: "Comment ça marche",
      contact: "Contact",
      askTrumpf: "Demandez à TRUMPF",
      search: "Rechercher",
      products: "Produits",
      solutions: "Solutions",
      company: "Entreprise",
      sustainability: "Durabilité",
      newsroom: "Newsroom",
      career: "Carrières",
    },
    hero: {
      eyebrow: "Cutting Assistant",
      title: "Optimisation du bord de coupe assistée par IA",
      lead:
        "Optimisation du bord de coupe basée sur l'IA pour votre machine de découpe laser 2D. Optimisez rapidement les paramètres de coupe, économisez temps et matière — et garantissez une excellente qualité de coupe, même avec des matériaux variables.",
      ctaPrimary: "Demander une démo",
      ctaSecondary: "Voir la vidéo produit",
      badge: "Découvrez maintenant !",
    },
    advantages: {
      title: "Les avantages en un coup d'œil",
      subtitle: "Optimisation du bord de coupe — dans votre matière, pour vos employés.",
      items: [
        {
          title: "Optimisation des données de coupe guidée par dialogue",
          body: "Même les utilisateurs inexpérimentés optimisent les données de coupe comme des pros en quelques minutes — gagnant temps et matière.",
        },
        {
          title: "Excellente qualité de coupe — même sur matière non-laser",
          body: "Le Cutting Assistant propose des optimisations adaptées — pour des matériaux spéciaux ou à qualité fluctuante.",
        },
        {
          title: "Cutting Coach — votre mode d'apprentissage IA",
          body: "Pas seulement de meilleures coupes — une meilleure compréhension. Le Coach explique *pourquoi* chaque changement de paramètre compte, faisant de chaque opérateur un expert au fil du temps.",
          cta: "En savoir plus",
        },
      ],
    },
    coach: {
      badge: "NOUVEAU",
      eyebrow: "Bientôt disponible",
      title: "Cutting Coach",
      lead: "Le Cutting Assistant vous dit *quoi* changer. Le Cutting Coach explique *pourquoi* — votre équipe gagne en expertise à chaque coupe.",
      bullets: [
        "Physique en langage clair : position focale, pression du gaz, vitesse, éjection du bain de fusion",
        "Traçabilité : chaque changement de paramètre relié à un défaut mesurable",
        "Sustainability Twin : rebuts, énergie et CO₂ économisés par poste",
        "Formation sur le terrain qui passe à l'échelle — même quand l'opérateur senior est en congé",
      ],
      tryAsking: "Demandez au Coach :",
      suggestions: [
        "Pourquoi la position focale est-elle importante pour de l'acier doux de 8 mm ?",
        "Comment obtenir un bord plus net sur de l'inox ?",
        "Comment le Cutting Assistant réduit-il les rebuts et le CO₂ ?",
      ],
      askButton: "Demander au Coach",
      closeButton: "Fermer",
    },
    how: {
      title: "Maniement simple et guidé par dialogue",
      subtitle: "Ajustement ciblé des paramètres selon le problème de coupe et la matière.",
      steps: [
        {
          index: "01 Démarrer",
          title: "Scanner le bord de coupe",
          body: "Saisissez objectivement l'état actuel du bord avec le scanner portatif.",
        },
        {
          index: "02 Choisir le problème",
          title: "Sélectionner la table technologique laser",
          body: "Choisissez parmi des problèmes courants : bavures, rugosité, interruption du faisceau.",
        },
        {
          index: "03 Optimisation itérative",
          title: "Mode IA ou Bandwidth",
          body: "Mode IA : mesure bavure/rugosité avec recommandations du modèle. Mode Bandwidth : série de pièces test.",
        },
      ],
    },
    cta: {
      title: "Prêt à optimiser vos paramètres de coupe ?",
      button: "Parler aux ventes",
    },
    audiences: {
      title: "À qui s'adresse le Cutting Assistant ?",
      subtitle: "Choisissez votre profil — nous afficherons ce qui vous concerne.",
      customers: {
        label: "Nouveaux prospects",
        tagline: "Découvrez ce que le Cutting Assistant peut apporter à votre atelier.",
      },
      productManagers: {
        label: "Chefs de produit",
        tagline: "Feuille de route, opportunité marché et place dans l'offre TRUMPF.",
      },
      engineers: {
        label: "Opérateurs & techniciens",
        tagline: "Workflows détaillés, matériaux supportés et bonnes pratiques au quotidien.",
      },
    },
    subpages: {
      customers: "Pour les nouveaux prospects",
      productManagers: "Pour les chefs de produit",
      engineers: "Pour les opérateurs et techniciens",
      back: "Retour à l'accueil",
    },
    customersPage: {
      eyebrow: "Cutting Assistant pour vous",
      subtitle:
        "Optimisation du bord de coupe assistée par IA — expliquée en un clin d'œil.",
      advantagesTitle: "Vos avantages en un clin d'œil",
      advantagesBody:
        "Avec le Cutting Assistant, vous optimisez les paramètres de coupe rapidement et simplement, recevez des recommandations basées sur l'IA, économisez du temps et des matières et obtenez une excellente qualité de coupe — même avec une qualité de matière variable. Souhaitez-vous plus de détails ou avez-vous des questions ?",
      kpisTitle: "KPIs concrets",
      kpisBody:
        "KPIs concrets lors de l'utilisation du Cutting Assistant : réduction du temps de mise en service, baisse des coûts matière, amélioration de la qualité de coupe et minimisation des reprises grâce aux recommandations objectives de l'IA. Plus de détails dans la fiche produit Cutting Assistant. D'autres questions ou retours ?",
      ctaTitle: "Prêt pour l'étape suivante ?",
      ctaChat: "Demandez à TRUMPF",
      ctaContact: "Parler aux ventes",
      anim: {
        scanning: "Scan du bord de coupe…",
        roughness: "Rugosité Ra",
        burr: "Hauteur de bavure",
        recommendation: "Recommandation IA",
        feedAdjust: "Avance −2 %",
        optimized: "Optimisé",
      },
    },
    engineersPage: {
      eyebrow: "Cutting Assistant · en pratique",
      subtitle: "Guide pas à pas, FAQs et ligne directe avec le service.",
      guideTitle: "Comment utiliser le Cutting Assistant",
      guideSubtitle: "Du scan à la validation des paramètres.",
      steps: [
        { title: "Préparer une pièce test", body: "Découpez une pièce avec les paramètres actuels de votre table technologique laser (LTT)." },
        { title: "Ouvrir le Cutting Assistant", body: "Lancez la fonction directement sur l'IHM machine via le menu « Cutting Assistant »." },
        { title: "Scanner le bord", body: "Passez le scanner portatif sur le bord — bavure et rugosité sont mesurées en µm." },
        { title: "Choisir LTT et problème", body: "Sélectionnez la table laser et le problème (bavure, rugosité, interruption du faisceau…)." },
        { title: "Mode IA ou Bandwidth", body: "Mode IA pour les matières supportées ; sinon Bandwidth avec une série de pièces test." },
        { title: "Appliquer la recommandation", body: "Validez les paramètres proposés, intégrez-les à la table et lancez la série." },
      ],
      faqTitle: "Questions fréquentes",
      faqSubtitle: "Réponses pour opérateurs et techniciens.",
      faqs: [
        { q: "Quels matériaux et épaisseurs sont pris en charge ?", a: "Mode IA aujourd'hui : acier doux avec N₂, 5–15 mm (Highspeed et MD5). Le Bandwidth couvre en plus acier doux (N₂, mix, O₂, air), inox N₂ et aluminium dans plusieurs gaz — 1–40 mm selon la combinaison." },
        { q: "Quand utiliser IA vs Bandwidth ?", a: "IA si le bord est scannable et la matière supportée — le plus rapide. Bandwidth si le bord ne peut pas être scanné ou la combinaison sort du spectre IA." },
        { q: "Combien de temps prend une optimisation ?", a: "Quelques minutes : scan + recommandation en IA <1 min par itération. En Bandwidth, 4–8 pièces test sont courantes." },
        { q: "Fonctionne-t-il sur les machines existantes ?", a: "Oui, c'est une fonction logicielle pour les machines laser 2D compatibles. Votre service TRUMPF vérifie les prérequis." },
        { q: "Que faire si le bord n'est pas scannable ?", a: "Utilisez le mode Bandwidth : découpez une série de pièces test et l'Assistant en déduit la recommandation." },
      ],
      contactTitle: "Support client",
      contactSubtitle: "Ligne directe avec TRUMPF Service.",
      contactCompany: "Société",
      contactAddress: "Adresse",
      contactPhone: "Téléphone",
      contactFax: "Fax",
      contactEmail: "E-mail",
      contactHours: "Horaires service",
      contactHoursValue: "Lun–Ven · 07:00–18:00 (CET)",
      hotlineTitle: "Accès rapide à la hotline service",
      hotlineDesc: "Nos techniciens répondent à vos questions sur le Cutting Assistant et l'optimisation.",
      hotlineButton: "Appeler",
    },
    pmPage: {
      eyebrow: "Tableau de bord chef de produit",
      subtitle: "Indicateurs en direct du parc Cutting Assistant.",
      timeRange: "14 derniers jours",
      vsLastWeek: "vs. semaine passée",
      kpis: {
        materialSaved: "Matière économisée",
        pieces: "Pièces découpées",
        costSavings: "Économies",
        avgIterations: "Itérations moyennes",
        machinesOnline: "Machines en ligne",
        co2Saved: "CO₂ évité",
        avgRoughness: "Rugosité Ra moy.",
        setupTime: "Temps de réglage",
      },
      pieces: {
        title: "Pièces par jour",
        subtitle: "Toutes les machines actives",
      },
      issues: {
        title: "Répartition des défauts",
        subtitle: "Détectés par le Cutting Assistant",
        burr: "Bavure",
        roughness: "Rugosité",
        beam: "Interruption faisceau",
      },
      current: {
        title: "Machine active · TruLaser 5030",
        material: "Matière",
        thickness: "Épaisseur",
        gas: "Gaz de coupe",
        sheet: "Format de tôle",
        mode: "Mode",
        progress: "Avancement",
        eta: "Fin estimée",
      },
      activity: {
        title: "Activité récente",
        items: [
          "Cutting Assistant : avance ajustée 18 → 17,6 m/min (Job #4821)",
          "Changement matière : Inox 1.4301 → Acier S235JR",
          "Mode IA activé pour Mild Steel N₂ 8 mm",
          "Hauteur de bavure < 50 µm — paramètres validés",
          "Mode bandwidth : 6 pièces test découpées",
        ],
      },
    },
    footer: { copy: "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG" },
    switcher: { label: "Langue" },
    chatbot: {
      title: "Demandez à TRUMPF",
      welcome: [
        "Bienvenue sur « Demandez à TRUMPF ». 👋 N'hésitez pas à poser vos questions sur le Cutting Assistant ou TRUMPF en général. 💡",
        "Remarque : les réponses sont générées par IA et peuvent contenir des erreurs.",
      ],
      disclaimer: "Généré par IA · veuillez vérifier les informations importantes",
      placeholder: "Posez votre question ici…",
      send: "Envoyer",
      reset: "Nouveau chat",
      close: "Fermer",
      launcher: "Ouvrir le chat",
      typing: "écrit…",
      error: "Une erreur est survenue. Veuillez réessayer.",
      demoMode: "Mode démo",
      quickRepliesLabel: "Questions rapides",
      quickReplies: [
        "Qu'est-ce que le Cutting Assistant ?",
        "Quels matériaux sont pris en charge ?",
        "Comment fonctionne l'optimisation par IA ?",
        "Comment réduit-il les rebuts et le CO₂ ?",
      ],
    },
  },

  ru: {
    nav: {
      advantages: "Преимущества",
      how: "Как это работает",
      contact: "Контакты",
      askTrumpf: "Спроси TRUMPF",
      search: "Поиск",
      products: "Продукты",
      solutions: "Решения",
      company: "Компания",
      sustainability: "Устойчивое развитие",
      newsroom: "Ньюсрум",
      career: "Карьера",
    },
    hero: {
      eyebrow: "Cutting Assistant",
      title: "Оптимизация кромки реза с помощью ИИ",
      lead:
        "Оптимизация кромки реза на основе ИИ для вашего 2D-лазерного станка. Быстро оптимизируйте параметры реза, экономьте время и материал — и обеспечивайте отличное качество реза даже при колебаниях качества материала.",
      ctaPrimary: "Запросить демо",
      ctaSecondary: "Смотреть видео",
      badge: "Узнайте сейчас!",
    },
    advantages: {
      title: "Преимущества с первого взгляда",
      subtitle: "Оптимизация кромки — в вашем материале, для ваших сотрудников.",
      items: [
        {
          title: "Диалоговая оптимизация параметров реза",
          body: "Даже неопытные пользователи оптимизируют параметры реза как профессионалы за несколько минут — экономя время и материал.",
        },
        {
          title: "Отличное качество реза — даже на нелазерном материале",
          body: "Cutting Assistant предлагает подходящие оптимизации — для спецматериалов или материалов с переменным качеством.",
        },
        {
          title: "Cutting Coach — обучающий режим ИИ",
          body: "Не просто лучшие резы — лучшее понимание. Coach объясняет, *почему* важно каждое изменение параметра, превращая каждого оператора в эксперта со временем.",
          cta: "Узнать больше",
        },
      ],
    },
    coach: {
      badge: "НОВОЕ",
      eyebrow: "Скоро",
      title: "Cutting Coach",
      lead: "Cutting Assistant подсказывает, *что* изменить. Cutting Coach объясняет, *почему* — и ваша команда растёт в экспертизе с каждым резом.",
      bullets: [
        "Физика простыми словами: фокус, давление газа, скорость, выброс расплава",
        "Аудит: каждое изменение параметра связано с измеримым дефектом",
        "Sustainability Twin: отходы, энергия и CO₂ за смену",
        "Обучение на рабочем месте — даже когда старший оператор в отпуске",
      ],
      tryAsking: "Спросите у Coach:",
      suggestions: [
        "Почему важна фокусная позиция при резке 8 мм низкоуглеродистой стали?",
        "Как получить более чистую кромку на нержавейке?",
        "Как Cutting Assistant сокращает отходы и CO₂?",
      ],
      askButton: "Спросить Coach",
      closeButton: "Закрыть",
    },
    how: {
      title: "Простое управление, диалоговое",
      subtitle: "Целенаправленная настройка параметров по дефекту и материалу.",
      steps: [
        {
          index: "01 Старт",
          title: "Сканирование кромки",
          body: "Объективная фиксация состояния кромки с помощью ручного сканера.",
        },
        {
          index: "02 Выбор дефекта",
          title: "Лазерная технологическая таблица",
          body: "Выберите из типичных дефектов: грат, шероховатость, обрыв луча.",
        },
        {
          index: "03 Итеративная оптимизация",
          title: "ИИ или Bandwidth-режим",
          body: "ИИ-режим: измерение грата/шероховатости и рекомендации модели. Bandwidth: серия тестовых деталей.",
        },
      ],
    },
    cta: {
      title: "Готовы оптимизировать параметры реза?",
      button: "Связаться с продажами",
    },
    audiences: {
      title: "Для кого Cutting Assistant?",
      subtitle: "Выберите свою роль — покажем, что важно именно вам.",
      customers: {
        label: "Новые клиенты",
        tagline: "Узнайте, что Cutting Assistant даст вашему производству.",
      },
      productManagers: {
        label: "Продакт-менеджеры",
        tagline: "Дорожная карта, рынок и место в портфеле TRUMPF.",
      },
      engineers: {
        label: "Операторы и инженеры",
        tagline: "Подробные сценарии, материалы и лучшие практики работы.",
      },
    },
    subpages: {
      customers: "Для новых клиентов",
      productManagers: "Для продакт-менеджеров",
      engineers: "Для операторов и инженеров",
      back: "На главную",
    },
    customersPage: {
      eyebrow: "Cutting Assistant для вас",
      subtitle:
        "Оптимизация кромки реза на базе ИИ — кратко и наглядно.",
      advantagesTitle: "Ваши преимущества",
      advantagesBody:
        "С Cutting Assistant вы быстро и просто оптимизируете параметры реза, получаете рекомендации ИИ, экономите время и материал и обеспечиваете отличное качество реза — даже при колебаниях качества материала. Хотите узнать подробнее или задать вопрос?",
      kpisTitle: "Конкретные KPI",
      kpisBody:
        "Конкретные KPI при использовании Cutting Assistant: сокращение времени наладки, снижение затрат на материал, повышение качества реза и минимизация доработок благодаря объективным рекомендациям ИИ. Подробности — в буклете Cutting Assistant. Есть вопросы или отзывы?",
      ctaTitle: "Готовы к следующему шагу?",
      ctaChat: "Спроси TRUMPF",
      ctaContact: "Связаться с продажами",
      anim: {
        scanning: "Сканирование кромки…",
        roughness: "Шероховатость Ra",
        burr: "Высота грата",
        recommendation: "Рекомендация ИИ",
        feedAdjust: "Подача −2 %",
        optimized: "Оптимизировано",
      },
    },
    engineersPage: {
      eyebrow: "Cutting Assistant · на практике",
      subtitle: "Пошаговая инструкция, FAQ и прямая связь со службой.",
      guideTitle: "Как использовать Cutting Assistant",
      guideSubtitle: "От сканирования до утверждения параметров.",
      steps: [
        { title: "Подготовьте тестовую деталь", body: "Вырежьте деталь с текущими параметрами из вашей таблицы LTT." },
        { title: "Откройте Cutting Assistant", body: "Запустите функцию на HMI станка через меню «Cutting Assistant»." },
        { title: "Сканируйте кромку", body: "Проведите ручным сканером по кромке — высота грата и шероховатость в мкм." },
        { title: "LTT и проблема", body: "Выберите подходящую LTT и проблему (грат, шероховатость, обрыв луча…)." },
        { title: "Режим ИИ или Bandwidth", body: "ИИ для поддерживаемых материалов; иначе Bandwidth с серией тестовых деталей." },
        { title: "Применить рекомендацию", body: "Проверьте параметры, примените их в таблице и запустите серию." },
      ],
      faqTitle: "Частые вопросы",
      faqSubtitle: "Краткие ответы для операторов и инженеров.",
      faqs: [
        { q: "Какие материалы и толщины поддерживаются?", a: "Режим ИИ: mild steel с N₂, 5–15 мм (Highspeed и MD5). Bandwidth — дополнительно mild steel (N₂, смесь, O₂, воздух), нержавейка N₂ и алюминий в разных газах — 1–40 мм в зависимости от комбинации." },
        { q: "Когда ИИ, а когда Bandwidth?", a: "ИИ, если кромку можно сканировать и материал поддерживается. Bandwidth — если кромка не сканируется или комбинация вне ИИ-спектра." },
        { q: "Сколько занимает оптимизация?", a: "Обычно несколько минут: ИИ — <1 мин на итерацию. В Bandwidth — 4–8 тестовых деталей." },
        { q: "Работает ли на существующих машинах?", a: "Да, Cutting Assistant — программная функция для совместимых 2D-лазеров. Сервис TRUMPF проверит готовность вашей машины." },
        { q: "Что если кромку нельзя сканировать?", a: "Используйте Bandwidth: серия тестовых деталей, на их основе формируется рекомендация." },
      ],
      contactTitle: "Поддержка клиентов",
      contactSubtitle: "Прямая связь со службой TRUMPF.",
      contactCompany: "Компания",
      contactAddress: "Адрес",
      contactPhone: "Телефон",
      contactFax: "Факс",
      contactEmail: "E-mail",
      contactHours: "Часы работы",
      contactHoursValue: "Пн–Пт · 07:00–18:00 (CET)",
      hotlineTitle: "Быстрая связь с сервисной линией",
      hotlineDesc: "Наши инженеры ответят на вопросы по Cutting Assistant и оптимизации параметров.",
      hotlineButton: "Позвонить",
    },
    pmPage: {
      eyebrow: "Дашборд продакт-менеджера",
      subtitle: "Метрики парка машин с Cutting Assistant в реальном времени.",
      timeRange: "Последние 14 дней",
      vsLastWeek: "vs прошлая неделя",
      kpis: {
        materialSaved: "Экономия материала",
        pieces: "Нарезанных деталей",
        costSavings: "Экономия средств",
        avgIterations: "Ср. итераций",
        machinesOnline: "Машин онлайн",
        co2Saved: "CO₂ сэкономлено",
        avgRoughness: "Ср. шероховатость Ra",
        setupTime: "Время наладки",
      },
      pieces: {
        title: "Деталей в день",
        subtitle: "По всем активным машинам",
      },
      issues: {
        title: "Распределение дефектов",
        subtitle: "Обнаружено Cutting Assistant",
        burr: "Грат",
        roughness: "Шероховатость",
        beam: "Обрыв луча",
      },
      current: {
        title: "Текущая машина · TruLaser 5030",
        material: "Материал",
        thickness: "Толщина",
        gas: "Газ",
        sheet: "Размер листа",
        mode: "Режим",
        progress: "Прогресс",
        eta: "Готовность",
      },
      activity: {
        title: "Последние события",
        items: [
          "Cutting Assistant: подача 18 → 17,6 м/мин (Job #4821)",
          "Смена материала: Нерж. 1.4301 → Сталь S235JR",
          "Активирован ИИ-режим: Mild Steel N₂ 8 мм",
          "Высота грата < 50 мкм — параметры утверждены",
          "Bandwidth-режим: 6 тестовых деталей",
        ],
      },
    },
    footer: { copy: "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG" },
    switcher: { label: "Язык" },
    chatbot: {
      title: "Спроси TRUMPF",
      welcome: [
        "Добро пожаловать в «Спроси TRUMPF». 👋 Задавайте любые вопросы о Cutting Assistant или TRUMPF в целом. 💡",
        "Примечание: ответы сгенерированы ИИ и могут содержать ошибки.",
      ],
      disclaimer: "Сгенерировано ИИ · проверяйте важную информацию",
      placeholder: "Введите ваш вопрос…",
      send: "Отправить",
      reset: "Новый чат",
      close: "Закрыть",
      launcher: "Открыть чат",
      typing: "печатает…",
      error: "Что-то пошло не так. Попробуйте позже.",
      demoMode: "Демо-режим",
      quickRepliesLabel: "Быстрые вопросы",
      quickReplies: [
        "Что такое Cutting Assistant?",
        "Какие материалы поддерживаются?",
        "Как работает оптимизация на ИИ?",
        "Как он снижает отходы и CO₂?",
      ],
    },
  },

  ar: {
    nav: {
      advantages: "المزايا",
      how: "كيف يعمل",
      contact: "اتصل بنا",
      askTrumpf: "اسأل TRUMPF",
      search: "بحث",
      products: "المنتجات",
      solutions: "الحلول",
      company: "الشركة",
      sustainability: "الاستدامة",
      newsroom: "غرفة الأخبار",
      career: "الوظائف",
    },
    hero: {
      eyebrow: "Cutting Assistant",
      title: "تحسين حافة القطع بمساعدة الذكاء الاصطناعي",
      lead:
        "تحسين حافة القطع بناءً على الذكاء الاصطناعي لآلة القطع بالليزر ثنائية الأبعاد. حسِّن معايير القطع بسرعة، ووفِّر الوقت والمواد — مع ضمان جودة قطع ممتازة حتى مع تفاوت جودة المواد.",
      ctaPrimary: "اطلب عرضاً توضيحياً",
      ctaSecondary: "شاهد فيديو المنتج",
      badge: "اكتشفه الآن!",
    },
    advantages: {
      title: "المزايا في لمحة",
      subtitle: "تحسين حافة القطع — في موادك، لموظفيك.",
      items: [
        {
          title: "تحسين بيانات القطع عبر حوار موجَّه",
          body: "حتى المستخدمون عديمو الخبرة يحسنون بيانات القطع كالمحترفين في دقائق — ويوفرون الوقت وتكاليف المواد.",
        },
        {
          title: "جودة قطع ممتازة — حتى للمواد غير المعتمدة لليزر",
          body: "يقترح Cutting Assistant تحسينات مناسبة — للمواد الخاصة أو ذات الجودة المتفاوتة.",
        },
        {
          title: "Cutting Coach — وضع التعلّم بالذكاء الاصطناعي",
          body: "ليس فقط قطعاً أفضل — بل فهماً أعمق. يشرح Coach *لماذا* يهم كل تغيير في الإعدادات، ليحوّل كل مشغّل إلى خبير مع الوقت.",
          cta: "اعرف المزيد",
        },
      ],
    },
    coach: {
      badge: "جديد",
      eyebrow: "قريباً",
      title: "Cutting Coach",
      lead: "Cutting Assistant يخبرك *بما* يجب تغييره. أما Cutting Coach فيشرح *لماذا* — ليكتسب فريقك الخبرة مع كل عملية قطع.",
      bullets: [
        "الفيزياء بلغة بسيطة: موضع البؤرة، ضغط الغاز، السرعة، طرد المنصهر",
        "تتبع التغييرات: كل تعديل مرتبط بعيب قابل للقياس",
        "Sustainability Twin: تتبع النفايات والطاقة وانبعاثات CO₂ لكل وردية",
        "تدريب أثناء العمل قابل للتوسع — حتى عند غياب المشغل الخبير",
      ],
      tryAsking: "اسأل Coach:",
      suggestions: [
        "لماذا يهم موضع البؤرة عند قطع فولاذ طري بسماكة 8 مم؟",
        "كيف أحصل على حافة أنظف على الفولاذ المقاوم للصدأ؟",
        "كيف يقلل Cutting Assistant النفايات وانبعاثات CO₂؟",
      ],
      askButton: "اسأل Coach",
      closeButton: "إغلاق",
    },
    how: {
      title: "تشغيل بسيط وموجَّه بالحوار",
      subtitle: "ضبط معايير مستهدف حسب مشكلة القطع والمادة.",
      steps: [
        {
          index: "01 البدء",
          title: "مسح حافة القطع",
          body: "سجّل حالة الحافة بشكل موضوعي باستخدام الماسح اليدوي.",
        },
        {
          index: "02 اختيار المشكلة",
          title: "اختر جدول تقنية الليزر",
          body: "اختر من مشكلات شائعة مثل الأشواك أو الخشونة أو انقطاع الشعاع.",
        },
        {
          index: "03 تحسين تكراري",
          title: "وضع الذكاء الاصطناعي أو وضع النطاق",
          body: "وضع الذكاء: قياس الأشواك/الخشونة وتوصيات النموذج. وضع النطاق: قطع سلسلة من القطع الاختبارية.",
        },
      ],
    },
    cta: {
      title: "هل أنت مستعد لتحسين معايير القطع؟",
      button: "تحدّث إلى المبيعات",
    },
    audiences: {
      title: "لمن Cutting Assistant؟",
      subtitle: "اختر دورك — وسنعرض ما يهمك.",
      customers: {
        label: "العملاء الجدد",
        tagline: "اكتشف ما يمكن أن يقدمه Cutting Assistant لورشتك.",
      },
      productManagers: {
        label: "مديرو المنتج",
        tagline: "خارطة الطريق وفرصة السوق والمكانة ضمن محفظة TRUMPF.",
      },
      engineers: {
        label: "المشغّلون والمهندسون",
        tagline: "سير عمل تفصيلي ونطاق المواد وأفضل الممارسات اليومية.",
      },
    },
    subpages: {
      customers: "للعملاء الجدد",
      productManagers: "لمديري المنتج",
      engineers: "للمشغّلين والمهندسين",
      back: "العودة إلى الرئيسية",
    },
    customersPage: {
      eyebrow: "Cutting Assistant من أجلك",
      subtitle:
        "تحسين حافة القطع بمساعدة الذكاء الاصطناعي — بلمحة سريعة.",
      advantagesTitle: "مزاياك في لمحة",
      advantagesBody:
        "مع Cutting Assistant تُحسّن معايير القطع بسرعة وسهولة، وتحصل على توصيات بالذكاء الاصطناعي، وتوفر الوقت وتكاليف المواد، وتحقق جودة قطع ممتازة — حتى مع تفاوت جودة المواد. هل تريد المزيد من التفاصيل أو لديك أسئلة؟",
      kpisTitle: "مؤشرات أداء واضحة",
      kpisBody:
        "مؤشرات الأداء عند استخدام Cutting Assistant: تقليل زمن الإعداد، خفض تكاليف المواد، رفع جودة القطع، وتقليل إعادة العمل بفضل التوصيات الموضوعية للذكاء الاصطناعي. تجد التفاصيل في نشرة Cutting Assistant. هل لديك أسئلة أو ملاحظات إضافية؟",
      ctaTitle: "هل أنت مستعد للخطوة التالية؟",
      ctaChat: "اسأل TRUMPF",
      ctaContact: "تحدّث إلى المبيعات",
      anim: {
        scanning: "جارٍ مسح الحافة…",
        roughness: "الخشونة Ra",
        burr: "ارتفاع الشَوك",
        recommendation: "توصية الذكاء الاصطناعي",
        feedAdjust: "التغذية −2 %",
        optimized: "تم التحسين",
      },
    },
    engineersPage: {
      eyebrow: "Cutting Assistant · في الميدان",
      subtitle: "دليل خطوة بخطوة، أسئلة شائعة، وتواصل مباشر مع الخدمة.",
      guideTitle: "كيف تستخدم Cutting Assistant",
      guideSubtitle: "من المسح إلى اعتماد المعايير.",
      steps: [
        { title: "حضّر قطعة اختبار", body: "اقطع قطعة بمعاييرك الحالية من جدول تقنية الليزر (LTT)." },
        { title: "افتح Cutting Assistant", body: "شغّل الوظيفة مباشرة على واجهة الآلة من قائمة «Cutting Assistant»." },
        { title: "امسح حافة القطع", body: "مرّر الماسح اليدوي على الحافة — يُقاس الشَوك والخشونة بالميكرومتر." },
        { title: "اختر LTT والمشكلة", body: "اختر الجدول الملائم ونوع المشكلة (أشواك، خشونة، انقطاع الشعاع…)." },
        { title: "وضع الذكاء أو النطاق", body: "وضع الذكاء للمواد المدعومة؛ وإلا وضع النطاق بسلسلة قطع اختبارية." },
        { title: "اعتمد التوصية", body: "راجع المعايير المقترحة، اعتمدها في الجدول، ثم شغّل القطعة الإنتاجية." },
      ],
      faqTitle: "الأسئلة الشائعة",
      faqSubtitle: "إجابات سريعة للمشغّلين والمهندسين.",
      faqs: [
        { q: "ما المواد والسماكات المدعومة؟", a: "وضع الذكاء حاليًا: فولاذ طري بالنيتروجين 5–15 ملم (Highspeed و MD5). وضع النطاق يغطي أيضًا فولاذ طري (N₂، مزيج، O₂، هواء)، ستانلس N₂، وألمنيوم بغازات مختلفة — 1–40 ملم حسب التوليفة." },
        { q: "متى أستخدم الذكاء ومتى النطاق؟", a: "الذكاء إذا أمكن مسح الحافة والمادة مدعومة — الأسرع. النطاق إذا تعذّر المسح أو خرجت التوليفة عن طيف الذكاء." },
        { q: "كم تستغرق العملية؟", a: "عادةً دقائق: مسح + توصية في الذكاء أقل من دقيقة لكل تكرار. في النطاق 4–8 قطع اختبارية." },
        { q: "هل يعمل على الآلات القائمة؟", a: "نعم، وظيفة برمجية لآلات الليزر ثنائية الأبعاد المدعومة. فريق خدمة TRUMPF يتحقق من الجاهزية." },
        { q: "ماذا لو تعذّر مسح الحافة؟", a: "استخدم وضع النطاق: اقطع سلسلة من القطع الاختبارية وسيستخلص المساعد التوصية منها." },
      ],
      contactTitle: "خدمة العملاء",
      contactSubtitle: "تواصل مباشر مع خدمة TRUMPF.",
      contactCompany: "الشركة",
      contactAddress: "العنوان",
      contactPhone: "الهاتف",
      contactFax: "الفاكس",
      contactEmail: "البريد الإلكتروني",
      contactHours: "ساعات الخدمة",
      contactHoursValue: "الإثنين–الجمعة · 07:00–18:00 (CET)",
      hotlineTitle: "خط ساخن سريع للخدمة",
      hotlineDesc: "يجيب مهندسونا عن أسئلتك حول Cutting Assistant وتحسين المعايير.",
      hotlineButton: "اتصل الآن",
    },
    pmPage: {
      eyebrow: "لوحة مدير المنتج",
      subtitle: "مؤشرات أداء مباشرة من أسطول Cutting Assistant.",
      timeRange: "آخر 14 يومًا",
      vsLastWeek: "مقابل الأسبوع الماضي",
      kpis: {
        materialSaved: "المواد الموفّرة",
        pieces: "القطع المقطوعة",
        costSavings: "وفر التكاليف",
        avgIterations: "متوسط التكرارات",
        machinesOnline: "الآلات المتصلة",
        co2Saved: "CO₂ موفّر",
        avgRoughness: "متوسط Ra",
        setupTime: "زمن الإعداد",
      },
      pieces: {
        title: "القطع المقطوعة يوميًا",
        subtitle: "عبر جميع الآلات النشطة",
      },
      issues: {
        title: "توزّع مشاكل القطع",
        subtitle: "بكشف Cutting Assistant",
        burr: "أشواك",
        roughness: "خشونة",
        beam: "انقطاع الشعاع",
      },
      current: {
        title: "الآلة الحالية · TruLaser 5030",
        material: "المادة",
        thickness: "السماكة",
        gas: "غاز القطع",
        sheet: "مقاس الصفيحة",
        mode: "الوضع",
        progress: "التقدم",
        eta: "الانتهاء المتوقع",
      },
      activity: {
        title: "النشاط الأخير",
        items: [
          "Cutting Assistant: تعديل التغذية 18 ← 17.6 م/د (Job #4821)",
          "تغيير المادة: ستانلس 1.4301 ← فولاذ S235JR",
          "تفعيل وضع الذكاء الاصطناعي: Mild Steel N₂ 8 ملم",
          "ارتفاع الأشواك < 50 ميكرومتر — المعايير معتمدة",
          "وضع النطاق: قطع 6 قطع اختبارية",
        ],
      },
    },
    footer: { copy: "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG" },
    switcher: { label: "اللغة" },
    chatbot: {
      title: "اسأل TRUMPF",
      welcome: [
        "مرحبًا بك في «اسأل TRUMPF». 👋 لا تتردد في طرح أي سؤال حول Cutting Assistant أو TRUMPF بشكل عام. 💡",
        "ملاحظة: تُولَّد الإجابات بواسطة الذكاء الاصطناعي وقد تحتوي على أخطاء.",
      ],
      disclaimer: "تم إنشاؤه بواسطة الذكاء الاصطناعي · يُرجى التحقق من المعلومات الهامة",
      placeholder: "اكتب سؤالك هنا…",
      send: "إرسال",
      reset: "محادثة جديدة",
      close: "إغلاق",
      launcher: "افتح الدردشة",
      typing: "يكتب…",
      error: "حدث خطأ ما. حاول مرة أخرى لاحقًا.",
      demoMode: "وضع تجريبي",
      quickRepliesLabel: "أسئلة سريعة",
      quickReplies: [
        "ما هو Cutting Assistant؟",
        "ما هي المواد المدعومة؟",
        "كيف تعمل عملية التحسين بالذكاء الاصطناعي؟",
        "كيف يقلل النفايات وانبعاثات CO₂؟",
      ],
    },
  },

  hi: {
    nav: {
      advantages: "लाभ",
      how: "यह कैसे काम करता है",
      contact: "संपर्क",
      askTrumpf: "TRUMPF से पूछें",
      search: "खोजें",
      products: "उत्पाद",
      solutions: "समाधान",
      company: "कंपनी",
      sustainability: "सस्टेनेबिलिटी",
      newsroom: "न्यूज़रूम",
      career: "करियर",
    },
    hero: {
      eyebrow: "Cutting Assistant",
      title: "AI-सहायक कटिंग एज ऑप्टिमाइज़ेशन",
      lead:
        "आपकी 2D लेज़र कटिंग मशीन के लिए AI-आधारित कटिंग-एज ऑप्टिमाइज़ेशन। कटिंग पैरामीटर्स को तेज़ी से ऑप्टिमाइज़ करें, समय और सामग्री बचाएँ — और बदलती सामग्री गुणवत्ता पर भी उत्कृष्ट कटिंग सुनिश्चित करें।",
      ctaPrimary: "डेमो का अनुरोध करें",
      ctaSecondary: "उत्पाद वीडियो देखें",
      badge: "अभी देखें!",
    },
    advantages: {
      title: "एक नज़र में फायदे",
      subtitle: "कटिंग-एज ऑप्टिमाइज़ेशन — आपकी सामग्री में, आपके कर्मचारियों के लिए।",
      items: [
        {
          title: "डायलॉग-गाइडेड कटिंग डेटा ऑप्टिमाइज़ेशन",
          body: "अनुभवहीन उपयोगकर्ता भी कुछ ही मिनटों में एक प्रो की तरह कटिंग डेटा ऑप्टिमाइज़ कर सकते हैं — समय और सामग्री दोनों की बचत।",
        },
        {
          title: "उत्कृष्ट कटिंग क्वालिटी — गैर-लेज़र-ग्रेड सामग्री पर भी",
          body: "Cutting Assistant उपयुक्त ऑप्टिमाइज़ेशन सुझाता है — विशेष या उतार-चढ़ाव वाली सामग्री के लिए।",
        },
        {
          title: "Cutting Coach — आपका AI शिक्षण मोड",
          body: "सिर्फ बेहतर कटिंग नहीं — बेहतर समझ। Coach बताता है कि हर पैरामीटर बदलाव *क्यों* मायने रखता है, और हर ऑपरेटर को समय के साथ विशेषज्ञ बनाता है।",
          cta: "और जानें",
        },
      ],
    },
    coach: {
      badge: "नया",
      eyebrow: "जल्द ही",
      title: "Cutting Coach",
      lead: "Cutting Assistant आपको बताता है *क्या* बदलना है। Cutting Coach समझाता है *क्यों* — ताकि हर कटिंग के साथ टीम का ज्ञान बढ़े।",
      bullets: [
        "सरल भाषा में फिज़िक्स: फोकस पोज़िशन, गैस प्रेशर, स्पीड, मेल्ट इजेक्शन",
        "ऑडिट ट्रेल: हर पैरामीटर बदलाव एक मापने योग्य दोष से जुड़ा",
        "Sustainability Twin: प्रति शिफ्ट स्क्रैप, ऊर्जा और CO₂ बचत ट्रैक करें",
        "ऑन-द-जॉब प्रशिक्षण जो स्केल करता है — सीनियर ऑपरेटर की छुट्टी पर भी",
      ],
      tryAsking: "Coach से पूछें:",
      suggestions: [
        "8 mm माइल्ड स्टील काटते समय फोकस पोज़िशन क्यों ज़रूरी है?",
        "स्टेनलेस स्टील पर साफ़ एज कैसे पाएँ?",
        "Cutting Assistant स्क्रैप और CO₂ कैसे कम करता है?",
      ],
      askButton: "Coach से पूछें",
      closeButton: "बंद करें",
    },
    how: {
      title: "सरल संचालन, डायलॉग-गाइडेड",
      subtitle: "विशिष्ट कटिंग समस्या और सामग्री के आधार पर लक्षित पैरामीटर समायोजन।",
      steps: [
        {
          index: "01 शुरुआत",
          title: "कटिंग एज को स्कैन करें",
          body: "हैंडहेल्ड स्कैनर से वर्तमान कटिंग-एज स्थिति को वस्तुनिष्ठ रूप से कैप्चर करें।",
        },
        {
          index: "02 समस्या चुनें",
          title: "लेज़र टेक्नोलॉजी टेबल चुनें",
          body: "बर्र, रफनेस या बीम-इंटरप्शन जैसी आम समस्याओं में से चुनें।",
        },
        {
          index: "03 इटरेटिव ऑप्टिमाइज़ेशन",
          title: "AI या Bandwidth मोड",
          body: "AI मोड: बर्र/रफनेस माप और मॉडल-आधारित अनुशंसा। Bandwidth: टेस्ट पार्ट्स की एक श्रृंखला।",
        },
      ],
    },
    cta: {
      title: "क्या आप अपने कटिंग पैरामीटर्स ऑप्टिमाइज़ करने के लिए तैयार हैं?",
      button: "सेल्स से बात करें",
    },
    audiences: {
      title: "Cutting Assistant किसके लिए है?",
      subtitle: "अपनी भूमिका चुनें — हम वही दिखाएँगे जो आपके लिए ज़रूरी है।",
      customers: {
        label: "नए संभावित ग्राहक",
        tagline: "जानें कि Cutting Assistant आपकी फैक्ट्री के लिए क्या कर सकता है।",
      },
      productManagers: {
        label: "प्रोडक्ट मैनेजर",
        tagline: "रोडमैप, बाज़ार अवसर और TRUMPF पोर्टफोलियो में स्थिति।",
      },
      engineers: {
        label: "ऑपरेटर्स और इंजीनियर",
        tagline: "विस्तृत वर्कफ़्लो, सामग्री समर्थन और रोज़मर्रा की बेस्ट प्रैक्टिस।",
      },
    },
    subpages: {
      customers: "नए संभावित ग्राहकों के लिए",
      productManagers: "प्रोडक्ट मैनेजरों के लिए",
      engineers: "ऑपरेटरों और इंजीनियरों के लिए",
      back: "होम पर वापस",
    },
    customersPage: {
      eyebrow: "आपके लिए Cutting Assistant",
      subtitle: "AI-समर्थित कटिंग एज ऑप्टिमाइज़ेशन — एक नज़र में।",
      advantagesTitle: "एक नज़र में आपके लाभ",
      advantagesBody:
        "Cutting Assistant के साथ आप कटिंग पैरामीटर्स को तेज़ी से और आसानी से ऑप्टिमाइज़ करते हैं, AI-आधारित अनुशंसाएँ पाते हैं, समय और सामग्री लागत बचाते हैं और बेहतरीन कटिंग क्वालिटी पाते हैं — बदलती सामग्री गुणवत्ता में भी। और जानकारी चाहिए या कोई सवाल है?",
      kpisTitle: "ठोस KPIs",
      kpisBody:
        "Cutting Assistant के उपयोग पर ठोस KPIs: सेटअप समय में कमी, सामग्री लागत में कमी, कटिंग क्वालिटी में सुधार और AI-आधारित वस्तुनिष्ठ अनुशंसाओं के कारण पुनःकार्य में कमी। विवरण के लिए Cutting Assistant फ़्लायर देखें। और सवाल या फ़ीडबैक है?",
      ctaTitle: "अगले कदम के लिए तैयार?",
      ctaChat: "TRUMPF से पूछें",
      ctaContact: "सेल्स से बात करें",
      anim: {
        scanning: "कटिंग एज स्कैन हो रहा है…",
        roughness: "रफनेस Ra",
        burr: "बर्र-ऊँचाई",
        recommendation: "AI अनुशंसा",
        feedAdjust: "फीड रेट −2 %",
        optimized: "ऑप्टिमाइज़्ड",
      },
    },
    engineersPage: {
      eyebrow: "Cutting Assistant · व्यवहार में",
      subtitle: "स्टेप-बाय-स्टेप गाइड, FAQs और सेवा से सीधा संपर्क।",
      guideTitle: "Cutting Assistant का उपयोग कैसे करें",
      guideSubtitle: "स्कैन से लेकर पैरामीटर अनुमोदन तक।",
      steps: [
        { title: "टेस्ट पुर्जा तैयार करें", body: "अपनी मौजूदा LTT पैरामीटर्स के साथ एक पुर्जा काटें।" },
        { title: "Cutting Assistant खोलें", body: "मशीन HMI पर «Cutting Assistant» मेनू से फ़ंक्शन शुरू करें।" },
        { title: "एज स्कैन करें", body: "हैंडहेल्ड स्कैनर से एज पर जाएँ — बर्र-ऊँचाई और रफनेस µm में मापी जाती हैं।" },
        { title: "LTT और समस्या चुनें", body: "उपयुक्त लेज़र टेक्नोलॉजी टेबल और समस्या (बर्र, रफनेस, बीम रुकावट…) चुनें।" },
        { title: "AI या Bandwidth मोड", body: "समर्थित सामग्री के लिए AI मोड; अन्यथा Bandwidth मोड में टेस्ट पीस।" },
        { title: "अनुशंसा लागू करें", body: "सुझाए गए पैरामीटर्स की जाँच करें, टेबल में अपनाएँ और प्रोडक्शन पीस काटें।" },
      ],
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faqSubtitle: "ऑपरेटर्स और इंजीनियरों के लिए त्वरित उत्तर।",
      faqs: [
        { q: "कौन-सी सामग्री और मोटाई समर्थित हैं?", a: "AI मोड: माइल्ड स्टील N₂ के साथ 5–15 मिमी (Highspeed और MD5)। Bandwidth: माइल्ड स्टील (N₂, मिश्रण, O₂, हवा), स्टेनलेस N₂ और ऐलुमिनियम विभिन्न गैसों में — संयोजन के अनुसार 1–40 मिमी।" },
        { q: "AI और Bandwidth में से कब क्या चुनें?", a: "AI तब, जब एज स्कैन हो सके और सामग्री समर्थित हो — सबसे तेज़। Bandwidth तब, जब एज स्कैन न हो सके या संयोजन AI दायरे से बाहर हो।" },
        { q: "ऑप्टिमाइज़ेशन में कितना समय लगता है?", a: "आमतौर पर कुछ मिनट: AI में स्कैन + अनुशंसा प्रति इटरेशन <1 मिनट। Bandwidth में 4–8 टेस्ट पीस।" },
        { q: "क्या मौजूदा मशीनों पर काम करता है?", a: "हाँ, यह संगत 2D लेज़र मशीनों के लिए सॉफ़्टवेयर फ़ंक्शन है। TRUMPF सेवा आवश्यकताओं की जाँच करती है।" },
        { q: "यदि एज स्कैन नहीं हो सकती?", a: "Bandwidth मोड का उपयोग करें: टेस्ट पीस की एक श्रृंखला काटें और Assistant उनसे अनुशंसा निकालता है।" },
      ],
      contactTitle: "ग्राहक सहायता",
      contactSubtitle: "TRUMPF सेवा से सीधी पहुँच।",
      contactCompany: "कंपनी",
      contactAddress: "पता",
      contactPhone: "फ़ोन",
      contactFax: "फ़ैक्स",
      contactEmail: "ई-मेल",
      contactHours: "सेवा समय",
      contactHoursValue: "सोम–शुक्र · 07:00–18:00 (CET)",
      hotlineTitle: "सेवा हॉटलाइन से त्वरित संपर्क",
      hotlineDesc: "हमारे इंजीनियर Cutting Assistant और पैरामीटर ऑप्टिमाइज़ेशन पर आपके सवालों का जवाब देते हैं।",
      hotlineButton: "अभी कॉल करें",
    },
    pmPage: {
      eyebrow: "प्रोडक्ट मैनेजर डैशबोर्ड",
      subtitle: "Cutting Assistant फ्लीट का लाइव मेट्रिक्स।",
      timeRange: "पिछले 14 दिन",
      vsLastWeek: "पिछले सप्ताह की तुलना में",
      kpis: {
        materialSaved: "बचाई गई सामग्री",
        pieces: "कटे पुर्जे",
        costSavings: "लागत बचत",
        avgIterations: "औसत इटरेशन",
        machinesOnline: "मशीनें ऑनलाइन",
        co2Saved: "CO₂ बचत",
        avgRoughness: "औसत Ra",
        setupTime: "सेटअप समय",
      },
      pieces: {
        title: "प्रति दिन कटे पुर्जे",
        subtitle: "सभी सक्रिय मशीनों में",
      },
      issues: {
        title: "कटिंग समस्याएँ — वितरण",
        subtitle: "Cutting Assistant द्वारा पहचानी गईं",
        burr: "बर्र",
        roughness: "रफनेस",
        beam: "बीम रुकावट",
      },
      current: {
        title: "वर्तमान मशीन · TruLaser 5030",
        material: "सामग्री",
        thickness: "मोटाई",
        gas: "कटिंग गैस",
        sheet: "शीट साइज़",
        mode: "मोड",
        progress: "प्रगति",
        eta: "अनुमानित पूर्णता",
      },
      activity: {
        title: "हाल की गतिविधि",
        items: [
          "Cutting Assistant: फीड 18 → 17.6 मी/मि (Job #4821)",
          "सामग्री बदली: स्टेनलेस 1.4301 → स्टील S235JR",
          "AI मोड चालू: Mild Steel N₂ 8 मिमी",
          "बर्र-ऊँचाई < 50 µm — पैरामीटर मंज़ूर",
          "Bandwidth मोड: 6 टेस्ट पीस कटे",
        ],
      },
    },
    footer: { copy: "TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG" },
    switcher: { label: "भाषा" },
    chatbot: {
      title: "TRUMPF से पूछें",
      welcome: [
        "“TRUMPF से पूछें” में आपका स्वागत है। 👋 Cutting Assistant या TRUMPF के बारे में कोई भी सवाल पूछें। 💡",
        "नोट: उत्तर AI द्वारा उत्पन्न होते हैं और इनमें त्रुटियाँ हो सकती हैं।",
      ],
      disclaimer: "AI द्वारा निर्मित · कृपया महत्वपूर्ण जानकारी सत्यापित करें",
      placeholder: "अपना सवाल यहाँ लिखें…",
      send: "भेजें",
      reset: "नई चैट",
      close: "बंद करें",
      launcher: "चैट खोलें",
      typing: "लिख रहा है…",
      error: "कुछ गलत हो गया। कृपया बाद में पुनः प्रयास करें।",
      demoMode: "डेमो मोड",
      quickRepliesLabel: "त्वरित प्रश्न",
      quickReplies: [
        "Cutting Assistant क्या है?",
        "कौन-कौन सी सामग्री समर्थित हैं?",
        "AI ऑप्टिमाइज़ेशन कैसे काम करता है?",
        "यह स्क्रैप और CO₂ कैसे कम करता है?",
      ],
    },
  },
};

const STORAGE_KEY = "trumpf.lang";
const DEFAULT_LANG: LangCode = "de";

export function getInitialLang(): LangCode {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && LANGUAGES.some((l) => l.code === stored)) {
    return stored as LangCode;
  }
  return DEFAULT_LANG;
}

export function setLang(code: LangCode): void {
  localStorage.setItem(STORAGE_KEY, code);
}

export function langDir(code: LangCode): "ltr" | "rtl" {
  return LANGUAGES.find((l) => l.code === code)?.dir === "rtl" ? "rtl" : "ltr";
}
