import "./style.css";
import { translations, getInitialLang, langDir, type LangCode } from "./i18n";

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
  const e = t.engineersPage;

  document.documentElement.lang = lang;
  document.documentElement.dir = langDir(lang);
  document.title = `${t.subpages.engineers} — TRUMPF Cutting Assistant`;

  const root = document.querySelector<HTMLDivElement>("#app");
  if (!root) throw new Error("Missing #app root");

  const stepsHtml = e.steps
    .map(
      (s, i) => `
        <li class="step-item">
          <div class="step-number-circle">${String(i + 1).padStart(2, "0")}</div>
          <div class="step-content">
            <h3>${escape(s.title)}</h3>
            <p>${escape(s.body)}</p>
          </div>
        </li>`,
    )
    .join("");

  const faqsHtml = e.faqs
    .map(
      (f, i) => `
      <details class="faq-item" ${i === 0 ? "open" : ""}>
        <summary>
          <span class="faq-q">${escape(f.q)}</span>
          <span class="faq-toggle" aria-hidden="true">+</span>
        </summary>
        <div class="faq-a">${escape(f.a)}</div>
      </details>`,
    )
    .join("");

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

    <main class="engineers-page">
      <section class="engineers-hero">
        <div class="container">
          <span class="eyebrow eyebrow--ink">${escape(e.eyebrow)}</span>
          <h1 class="subpage-title">${escape(t.subpages.engineers)}</h1>
          <p class="engineers-subtitle">${escape(e.subtitle)}</p>
        </div>
      </section>

      <section class="engineers-section">
        <div class="container">
          <div class="section-head">
            <h2>${escape(e.guideTitle)}</h2>
            <p>${escape(e.guideSubtitle)}</p>
          </div>
          <ol class="steps-list">${stepsHtml}</ol>
        </div>
      </section>

      <section class="engineers-section engineers-section--alt">
        <div class="container">
          <div class="section-head">
            <h2>${escape(e.faqTitle)}</h2>
            <p>${escape(e.faqSubtitle)}</p>
          </div>
          <div class="faq-list">${faqsHtml}</div>
        </div>
      </section>

      <section class="engineers-section">
        <div class="container">
          <div class="section-head">
            <h2>${escape(e.contactTitle)}</h2>
            <p>${escape(e.contactSubtitle)}</p>
          </div>

          <div class="contact-grid">
            <div class="contact-card">
              <svg viewBox="0 0 24 24" width="22" height="22" class="contact-icon"><path fill="currentColor" d="M3 7h18v12H3zM3 7l9 6 9-6"/></svg>
              <div>
                <div class="contact-label">${escape(e.contactCompany)}</div>
                <div class="contact-value">TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG</div>
              </div>
            </div>
            <div class="contact-card">
              <svg viewBox="0 0 24 24" width="22" height="22" class="contact-icon"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
              <div>
                <div class="contact-label">${escape(e.contactAddress)}</div>
                <div class="contact-value">Johann-Maus-Straße 2<br/>71254 Ditzingen · Germany</div>
              </div>
            </div>
            <div class="contact-card">
              <svg viewBox="0 0 24 24" width="22" height="22" class="contact-icon"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z"/></svg>
              <div>
                <div class="contact-label">${escape(e.contactPhone)}</div>
                <a class="contact-value contact-link" href="tel:+4971563030">+49 7156 303-0</a>
              </div>
            </div>
            <div class="contact-card">
              <svg viewBox="0 0 24 24" width="22" height="22" class="contact-icon"><path fill="currentColor" d="M19 8h-1V6h-2v2H8V6H6v2H5a2 2 0 0 0-2 2v9h18v-9a2 2 0 0 0-2-2zM7 17H5v-2h2v2zm12 0H9v-5h10v5z"/></svg>
              <div>
                <div class="contact-label">${escape(e.contactFax)}</div>
                <div class="contact-value">+49 7156 303-30309</div>
              </div>
            </div>
            <div class="contact-card">
              <svg viewBox="0 0 24 24" width="22" height="22" class="contact-icon"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5L4 6h16zM4 18V8l8 5 8-5v10H4z"/></svg>
              <div>
                <div class="contact-label">${escape(e.contactEmail)}</div>
                <a class="contact-value contact-link" href="mailto:info@de.trumpf.com">info@de.trumpf.com</a>
              </div>
            </div>
            <div class="contact-card">
              <svg viewBox="0 0 24 24" width="22" height="22" class="contact-icon"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5v-2h3V7h2v6z"/></svg>
              <div>
                <div class="contact-label">${escape(e.contactHours)}</div>
                <div class="contact-value">${escape(e.contactHoursValue)}</div>
              </div>
            </div>
          </div>

          <div class="hotline-card">
            <div>
              <h3>${escape(e.hotlineTitle)}</h3>
              <p>${escape(e.hotlineDesc)}</p>
            </div>
            <a class="btn btn-primary" href="tel:+4971563030">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z"/></svg>
              ${escape(e.hotlineButton)}
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
    el.addEventListener("click", (ev) => ev.preventDefault());
  });
}

render();
