import "./style.css";
import { translations, getInitialLang, langDir, type LangCode } from "./i18n";
import { mountChatbot, openChatbot } from "./chatbot";

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render(): void {
  const lang: LangCode = getInitialLang();
  const t = translations[lang];
  const c = t.customersPage;

  document.documentElement.lang = lang;
  document.documentElement.dir = langDir(lang);
  document.title = `${t.subpages.customers} — TRUMPF Cutting Assistant`;

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

    <main class="customer-page">
      <section class="customer-hero">
        <div class="container">
          <span class="eyebrow eyebrow--ink">${escape(c.eyebrow)}</span>
          <h1 class="subpage-title">${escape(t.subpages.customers)}</h1>
          <p class="customer-subtitle">${escape(c.subtitle)}</p>
        </div>
      </section>

      <section class="customer-anim-section">
        <div class="container">
          <div class="ad-animation" role="img" aria-label="${escape(c.anim.scanning)}">

            <div class="ad-scanner">
              <div class="ad-scanner-label">01 · ${escape(c.anim.scanning)}</div>
              <div class="ad-sheet-stage">
                <div class="ad-sheet">
                  <div class="ad-sheet-cut"></div>
                </div>
                <div class="ad-laser"></div>
                <div class="ad-scanner-device">
                  <svg viewBox="0 0 64 80" width="56" height="70" aria-hidden="true">
                    <rect x="14" y="4" width="36" height="44" rx="6" fill="#222"/>
                    <rect x="20" y="10" width="24" height="14" rx="2" fill="#c8d400"/>
                    <circle cx="32" cy="32" r="3" fill="#999"/>
                    <rect x="10" y="46" width="44" height="6" rx="2" fill="#3a3a3a"/>
                    <rect x="26" y="52" width="12" height="22" rx="2" fill="#222"/>
                    <rect x="22" y="74" width="20" height="4" rx="2" fill="#111"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="ad-software">
              <div class="ad-software-header">
                <span class="ad-software-mark"></span>
                <span>Cutting Assistant</span>
                <span class="ad-software-dot"></span>
                <span class="ad-software-dot"></span>
                <span class="ad-software-dot"></span>
              </div>

              <div class="ad-software-body">
                <div class="ad-progress">
                  <div class="ad-progress-label">${escape(c.anim.scanning)}</div>
                  <div class="ad-progress-bar"><div class="ad-progress-fill"></div></div>
                </div>

                <div class="ad-stats">
                  <div class="ad-stat ad-stage-2">
                    <div class="ad-stat-label">${escape(c.anim.roughness)}</div>
                    <div class="ad-stat-value"><span class="ad-num">24</span> µm</div>
                  </div>
                  <div class="ad-stat ad-stage-2">
                    <div class="ad-stat-label">${escape(c.anim.burr)}</div>
                    <div class="ad-stat-value"><span class="ad-num">118</span> µm</div>
                  </div>
                </div>

                <div class="ad-recommendation ad-stage-3">
                  <span class="ad-rec-icon">AI</span>
                  <div>
                    <div class="ad-rec-title">${escape(c.anim.recommendation)}</div>
                    <div class="ad-rec-value">${escape(c.anim.feedAdjust)}</div>
                  </div>
                </div>

                <div class="ad-success ad-stage-4">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M5 12l5 5 9-12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>${escape(c.anim.optimized)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="customer-content">
        <div class="container customer-content-grid">
          <article class="customer-block">
            <h2>${escape(c.advantagesTitle)}</h2>
            <p>${escape(c.advantagesBody)}</p>
          </article>
          <article class="customer-block">
            <h2>${escape(c.kpisTitle)}</h2>
            <p>${escape(c.kpisBody)}</p>
          </article>
        </div>
      </section>

      <section class="customer-cta">
        <div class="container">
          <h2>${escape(c.ctaTitle)}</h2>
          <div class="customer-cta-buttons">
            <button type="button" class="btn btn-primary" id="open-chat">
              ${escape(c.ctaChat)}
            </button>
            <a class="btn btn-ghost btn-ghost--light" href="mailto:info@de.trumpf.com">
              ${escape(c.ctaContact)}
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <div>© ${new Date().getFullYear()} ${escape(t.footer.copy)}</div>
        <div><a href="https://www.trumpf.com" target="_blank" rel="noopener">www.trumpf.com</a></div>
      </div>
    </footer>
  `;

  document.querySelectorAll<HTMLElement>("[data-mock]").forEach((el) => {
    el.addEventListener("click", (e) => e.preventDefault());
  });

  document.getElementById("open-chat")?.addEventListener("click", () => {
    openChatbot();
  });
}

render();
mountChatbot(getInitialLang());
