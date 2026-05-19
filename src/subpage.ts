import "./style.css";
import { translations, getInitialLang, langDir, type LangCode } from "./i18n";

type Audience = "customers" | "productManagers" | "engineers";

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render(audience: Audience): void {
  const lang: LangCode = getInitialLang();
  const t = translations[lang];
  const title = t.subpages[audience];

  document.documentElement.lang = lang;
  document.documentElement.dir = langDir(lang);
  document.title = `${title} — TRUMPF Cutting Assistant`;

  const root = document.querySelector<HTMLDivElement>("#app");
  if (!root) throw new Error("Missing #app root");

  root.innerHTML = `
    <header class="site-header">
      <div class="header-utility">
        <div class="container">
          <ul class="utility-bar" role="list">
            <li>
              <a href="/" class="utility-link">
                <span aria-hidden="true">←</span> ${escape(t.subpages.back)}
              </a>
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

    <main class="subpage">
      <div class="container">
        <span class="eyebrow eyebrow--ink">${escape(t.hero.eyebrow)}</span>
        <h1 class="subpage-title">${escape(title)}</h1>
      </div>
    </main>

    <footer class="site-footer">
      <div class="container">
        <div>© ${new Date().getFullYear()} ${escape(t.footer.copy)}</div>
        <div><a href="https://www.trumpf.com" target="_blank" rel="noopener">www.trumpf.com</a></div>
      </div>
    </footer>
  `;
}

const audienceAttr = document.body.dataset.audience as Audience | undefined;
if (audienceAttr) {
  render(audienceAttr);
  document.querySelectorAll<HTMLElement>("[data-mock]").forEach((el) => {
    el.addEventListener("click", (e) => e.preventDefault());
  });
}
