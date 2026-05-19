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
  nav: { advantages: string; how: string; contact: string };
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
    items: { title: string; body: string }[];
  };
  how: {
    title: string;
    subtitle: string;
    steps: { index: string; title: string; body: string }[];
  };
  cta: { title: string; button: string };
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
  };
};

export const translations: Record<LangCode, Translation> = {
  de: {
    nav: { advantages: "Vorteile", how: "So funktioniert's", contact: "Kontakt" },
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
          title: "Schnelle Prüfung der Schnittkantenqualität",
          body: "Der Handscanner ermöglicht eine objektive Beurteilung der Bauteilqualität. Rauheit und Bartöhe werden in Mikrometern angezeigt.",
        },
      ],
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
    },
  },

  en: {
    nav: { advantages: "Advantages", how: "How it works", contact: "Contact" },
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
          title: "Quick inspection of cutting-edge quality",
          body: "The handheld scanner allows an objective assessment of part quality. The Cutting Assistant displays roughness and burr height in micrometers.",
        },
      ],
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
    },
  },

  es: {
    nav: { advantages: "Ventajas", how: "Cómo funciona", contact: "Contacto" },
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
          title: "Inspección rápida de la calidad del borde",
          body: "El escáner manual permite una evaluación objetiva de la calidad. El Cutting Assistant muestra rugosidad y altura de rebaba en micrómetros.",
        },
      ],
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
    },
  },

  fr: {
    nav: { advantages: "Avantages", how: "Comment ça marche", contact: "Contact" },
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
          title: "Inspection rapide de la qualité du bord",
          body: "Le scanner portatif permet une évaluation objective de la pièce. Rugosité et hauteur de bavure sont affichées en micromètres.",
        },
      ],
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
    },
  },

  ru: {
    nav: { advantages: "Преимущества", how: "Как это работает", contact: "Контакты" },
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
          title: "Быстрая проверка качества кромки",
          body: "Ручной сканер позволяет объективно оценить деталь. Шероховатость и высота грата отображаются в микрометрах.",
        },
      ],
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
    },
  },

  ar: {
    nav: { advantages: "المزايا", how: "كيف يعمل", contact: "اتصل بنا" },
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
          title: "فحص سريع لجودة حافة القطع",
          body: "يتيح الماسح اليدوي تقييماً موضوعياً للقطعة. ويعرض المساعد الخشونة وارتفاع الأشواك بالميكرومتر.",
        },
      ],
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
    },
  },

  hi: {
    nav: { advantages: "लाभ", how: "यह कैसे काम करता है", contact: "संपर्क" },
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
          title: "कटिंग-एज क्वालिटी की त्वरित जाँच",
          body: "हैंडहेल्ड स्कैनर पार्ट क्वालिटी का वस्तुनिष्ठ मूल्यांकन देता है। रफनेस और बर्र-ऊँचाई माइक्रोमीटर में दिखाई जाती हैं।",
        },
      ],
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
