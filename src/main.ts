import "./style.css";
import {
  LANGUAGES,
  translations,
  getInitialLang,
  setLang,
  langDir,
  type LangCode,
} from "./i18n";
import { mountChatbot, setChatbotLang } from "./chatbot";

const advantageImages = [
  "https://images.unsplash.com/photo-1581091870622-1c6a4e0b1f0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
];

const root = document.querySelector<HTMLDivElement>("#app");
if (!root) throw new Error("Missing #app root");

let currentLang: LangCode = getInitialLang();

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
      <div class="container">
        <a class="logo" href="#" aria-label="TRUMPF">
          <span class="logo-mark"></span>
          TRUMPF
        </a>
        <div class="header-right">
          <nav class="nav" aria-label="Primary">
            <a href="#advantages">${escape(t.nav.advantages)}</a>
            <a href="#how">${escape(t.nav.how)}</a>
            <a href="#contact">${escape(t.nav.contact)}</a>
          </nav>
          <label class="lang-switcher" aria-label="${escape(t.switcher.label)}">
            <span class="sr-only">${escape(t.switcher.label)}</span>
            <select id="lang-select">
              ${langOptions}
            </select>
          </label>
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
            <a class="btn btn-primary" href="#contact">${escape(t.hero.ctaPrimary)}</a>
            <a class="btn btn-ghost" href="https://www.trumpf.info/fsbpmj" target="_blank" rel="noopener">
              ${escape(t.hero.ctaSecondary)}
            </a>
          </div>
        </div>
        <div class="discover-badge" aria-hidden="true">${escape(t.hero.badge)}</div>
      </section>

      <section id="advantages" class="advantages" aria-labelledby="advantages-title">
        <div class="container">
          <div class="section-head">
            <h2 id="advantages-title">${escape(t.advantages.title)}</h2>
            <p>${escape(t.advantages.subtitle)}</p>
          </div>
          <div class="cards">
            ${t.advantages.items
              .map(
                (a, i) => `
              <article class="card">
                <div class="card-media" style="background-image:url('${advantageImages[i]}')"></div>
                <div class="card-body">
                  <h3>${escape(a.title)}</h3>
                  <p>${escape(a.body)}</p>
                </div>
              </article>`,
              )
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
  `;

  const select = root!.querySelector<HTMLSelectElement>("#lang-select");
  select?.addEventListener("change", (e) => {
    const code = (e.target as HTMLSelectElement).value as LangCode;
    currentLang = code;
    setLang(code);
    render(code);
    setChatbotLang(code);
  });
}

render(currentLang);
mountChatbot(currentLang);
