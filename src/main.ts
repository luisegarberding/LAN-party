import "./style.css";
import {
  LANGUAGES,
  translations,
  getInitialLang,
  setLang,
  langDir,
  type LangCode,
} from "./i18n";
import { mountChatbot, setChatbotLang, openChatbot } from "./chatbot";

const advantageImages = [
  "/advantage-1.png",
  "/advantage-2.png",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
];

const root = document.querySelector<HTMLDivElement>("#app");
if (!root) throw new Error("Missing #app root");

let currentLang: LangCode = getInitialLang();
let coachEscBound = false;

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineFormat(value: string): string {
  return escape(value).replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function render(lang: LangCode): void {
  const t = translations[lang];
  const dir = langDir(lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = dir;

  const langOptions = LANGUAGES.map(
    (l) =>
      `<option value="${l.code}"${l.code === lang ? " selected" : ""}>${escape(l.label)}</option>`,
  ).join("");

  root!.innerHTML = `
    <header class="site-header">
      <div class="header-utility">
        <div class="container">
          <ul class="utility-bar" role="list">
            <li>
              <button type="button" class="utility-link" id="ask-trumpf">
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2z"/>
                </svg>
                ${escape(t.nav.askTrumpf)}
              </button>
            </li>
            <li>
              <button type="button" class="utility-link utility-link--mock" aria-label="${escape(t.nav.search)}" data-mock>
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path fill="none" stroke="currentColor" stroke-width="2" d="M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm5 11l5 5"/>
                </svg>
                ${escape(t.nav.search)}
              </button>
            </li>
            <li>
              <a href="#contact" class="utility-link" data-mock>
                ${escape(t.nav.contact)}
              </a>
            </li>
            <li class="utility-lang">
              <span class="lang-globe" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 0c3 3 3 15 0 18M3 12h18M12 3c-3 3-3 15 0 18"/>
                </svg>
              </span>
              <label class="lang-switcher" aria-label="${escape(t.switcher.label)}">
                <span class="sr-only">${escape(t.switcher.label)}</span>
                <select id="lang-select">
                  ${langOptions}
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div class="header-main">
        <div class="container">
          <a class="logo" href="/" aria-label="TRUMPF">
            <span class="logo-mark"></span>
            TRUMPF
          </a>
          <nav class="nav-primary" aria-label="Primary">
            <a href="#" data-mock>${escape(t.nav.products)}</a>
            <a href="#" data-mock>${escape(t.nav.solutions)}</a>
            <a href="#" data-mock>${escape(t.nav.company)}</a>
            <a href="#" data-mock>${escape(t.nav.sustainability)}</a>
            <a href="#" data-mock>${escape(t.nav.newsroom)}</a>
            <a href="#" data-mock>${escape(t.nav.career)}</a>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <div class="container">
          <span class="eyebrow">${escape(t.hero.eyebrow)}</span>
          <h1 id="hero-title">${escape(t.hero.title)}</h1>
          <p class="lead">${escape(t.hero.lead)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="mailto:info@de.trumpf.com">${escape(t.hero.ctaPrimary)}</a>
            <a class="btn btn-dark" href="https://www.trumpf.info/fsbpmj" target="_blank" rel="noopener">
              ${escape(t.hero.ctaSecondary)}
            </a>
          </div>
        </div>
        <div class="discover-badge" aria-hidden="true">${escape(t.hero.badge)}</div>
      </section>

      <section id="audiences" class="audiences" aria-labelledby="audiences-title">
        <div class="container">
          <div class="section-head">
            <h2 id="audiences-title">${escape(t.audiences.title)}</h2>
            <p>${escape(t.audiences.subtitle)}</p>
          </div>
          <div class="audience-grid">
            <a class="audience-card audience-card--blue" href="/customers.html">
              <svg class="audience-icon" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="16" r="7" fill="none" stroke="currentColor" stroke-width="2.5"/>
                <path d="M10 40c2-7 8-11 14-11s12 4 14 11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
              <h3>${escape(t.audiences.customers.label)}</h3>
              <p>${escape(t.audiences.customers.tagline)}</p>
              <span class="audience-arrow" aria-hidden="true">→</span>
            </a>

            <a class="audience-card audience-card--lime" href="/product-managers.html">
              <svg class="audience-icon" viewBox="0 0 48 48" aria-hidden="true">
                <rect x="8" y="8" width="32" height="32" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>
                <path d="M14 18h8v18h-8zM26 14h8v22h-8z" fill="currentColor"/>
              </svg>
              <h3>${escape(t.audiences.productManagers.label)}</h3>
              <p>${escape(t.audiences.productManagers.tagline)}</p>
              <span class="audience-arrow" aria-hidden="true">→</span>
            </a>

            <a class="audience-card audience-card--navy" href="/engineers.html">
              <svg class="audience-icon" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M32 8a8 8 0 0 1 5 14l8 8-5 5-8-8a8 8 0 0 1-11-11l5 5 3-3-5-5a8 8 0 0 1 8-5z" fill="currentColor"/>
              </svg>
              <h3>${escape(t.audiences.engineers.label)}</h3>
              <p>${escape(t.audiences.engineers.tagline)}</p>
              <span class="audience-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="advantages" class="advantages" aria-labelledby="advantages-title">
        <div class="container">
          <div class="section-head">
            <h2 id="advantages-title">${escape(t.advantages.title)}</h2>
            <p>${escape(t.advantages.subtitle)}</p>
          </div>
          <div class="cards">
            ${t.advantages.items
              .map((a, i) => {
                const isCoach = i === 2;
                const cardClass = isCoach ? "card card--feature" : "card";
                const interactiveAttrs = isCoach
                  ? `data-feature="coach" role="button" tabindex="0" aria-haspopup="dialog" aria-controls="coach-modal" aria-label="${escape(a.title)} — ${escape(t.coach.askButton)}"`
                  : "";
                const mediaBg = isCoach
                  ? "/coach.png"
                  : advantageImages[i];
                const badge = isCoach
                  ? `<span class="card-badge">${escape(t.coach.badge)}</span>`
                  : "";
                return `
              <article class="${cardClass}" ${interactiveAttrs}>
                <div class="card-media" style="background-image:url('${mediaBg}')">${badge}</div>
                <div class="card-body">
                  <h3>${escape(a.title)}</h3>
                  <p>${inlineFormat(a.body)}</p>
                  ${
                    isCoach && a.cta
                      ? `<button type="button" class="card-cta" data-feature="coach" aria-controls="coach-modal">
                          ${escape(a.cta)}
                          <span aria-hidden="true">→</span>
                        </button>`
                      : ""
                  }
                </div>
              </article>`;
              })
              .join("")}
          </div>
        </div>
      </section>

      <section id="how" class="steps" aria-labelledby="how-title">
        <div class="container">
          <div class="section-head">
            <h2 id="how-title">${escape(t.how.title)}</h2>
            <p>${escape(t.how.subtitle)}</p>
          </div>
          <div class="steps-grid">
            ${t.how.steps
              .map(
                (s) => `
              <div class="step">
                <div class="step-number">${escape(s.index)}</div>
                <h3>${escape(s.title)}</h3>
                <p>${escape(s.body)}</p>
              </div>`,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section id="contact" class="cta" aria-labelledby="cta-title">
        <div class="container">
          <h2 id="cta-title">${escape(t.cta.title)}</h2>
          <a class="btn btn-primary" href="mailto:info@de.trumpf.com">${escape(t.cta.button)}</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <div>© ${new Date().getFullYear()} ${escape(t.footer.copy)}</div>
        <div>
          <a href="https://www.trumpf.com" target="_blank" rel="noopener">www.trumpf.com</a>
        </div>
      </div>
    </footer>

    <div class="coach-modal" id="coach-modal" hidden aria-hidden="true">
      <div class="coach-modal__backdrop" data-coach-close></div>
      <div class="coach-modal__panel" role="dialog" aria-modal="true" aria-labelledby="coach-modal-title">
        <button type="button" class="coach-modal__close" data-coach-close aria-label="${escape(t.coach.closeButton)}">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div class="coach-modal__header">
          <span class="coach-modal__badge">${escape(t.coach.badge)}</span>
          <span class="coach-modal__eyebrow">${escape(t.coach.eyebrow)}</span>
          <h2 id="coach-modal-title">${escape(t.coach.title)}</h2>
          <p class="coach-modal__lead">${inlineFormat(t.coach.lead)}</p>
        </div>

        <ul class="coach-modal__bullets">
          ${t.coach.bullets
            .map(
              (b) => `<li>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="m9 16.17-3.88-3.88L3.7 13.7 9 19l11-11-1.41-1.41z"/>
                </svg>
                <span>${inlineFormat(b)}</span>
              </li>`,
            )
            .join("")}
        </ul>

        <div class="coach-modal__try">
          <div class="coach-modal__try-label">${escape(t.coach.tryAsking)}</div>
          <div class="coach-modal__suggestions">
            ${t.coach.suggestions
              .map(
                (s) =>
                  `<button type="button" class="coach-chip" data-coach-suggestion="${escape(s)}">${escape(s)}</button>`,
              )
              .join("")}
          </div>
        </div>

        <div class="coach-modal__actions">
          <button type="button" class="btn btn-primary" id="coach-ask">${escape(t.coach.askButton)}</button>
          <button type="button" class="btn btn-ghost" data-coach-close>${escape(t.coach.closeButton)}</button>
        </div>
      </div>
    </div>
  `;

  const select = root!.querySelector<HTMLSelectElement>("#lang-select");
  select?.addEventListener("change", (e) => {
    const code = (e.target as HTMLSelectElement).value as LangCode;
    currentLang = code;
    setLang(code);
    render(code);
    setChatbotLang(code);
  });

  root!.querySelector<HTMLButtonElement>("#ask-trumpf")?.addEventListener(
    "click",
    () => openChatbot(),
  );

  root!.querySelectorAll<HTMLElement>("[data-mock]").forEach((el) => {
    el.addEventListener("click", (e) => e.preventDefault());
  });

  const modal = document.getElementById("coach-modal");
  const openCoachModal = (): void => {
    if (!modal) return;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("coach-modal-open");
    setTimeout(
      () => modal.querySelector<HTMLButtonElement>("#coach-ask")?.focus(),
      50,
    );
  };
  const closeCoachModal = (): void => {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("coach-modal-open");
  };

  root!.querySelectorAll<HTMLElement>('[data-feature="coach"]').forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openCoachModal();
    });
    el.addEventListener("keydown", (e) => {
      const key = (e as KeyboardEvent).key;
      if (key === "Enter" || key === " ") {
        e.preventDefault();
        openCoachModal();
      }
    });
  });

  modal?.querySelectorAll<HTMLElement>("[data-coach-close]").forEach((el) => {
    el.addEventListener("click", () => closeCoachModal());
  });

  modal
    ?.querySelectorAll<HTMLButtonElement>("[data-coach-suggestion]")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.dataset.coachSuggestion?.trim() ?? "";
        closeCoachModal();
        openChatbot(text);
      });
    });

  modal
    ?.querySelector<HTMLButtonElement>("#coach-ask")
    ?.addEventListener("click", () => {
      closeCoachModal();
      openChatbot();
    });

  if (!coachEscBound) {
    coachEscBound = true;
    document.addEventListener("keydown", (e) => {
      const m = document.getElementById("coach-modal");
      if (e.key === "Escape" && m && !m.hidden) {
        m.hidden = true;
        m.setAttribute("aria-hidden", "true");
        document.body.classList.remove("coach-modal-open");
      }
    });
  }
}

render(currentLang);
mountChatbot(currentLang);
