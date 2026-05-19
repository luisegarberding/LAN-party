import "./style.css";
import { translations, getInitialLang, langDir, type LangCode } from "./i18n";

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const svg = (path: string) =>
  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;

const icon = {
  box: svg(`<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>`),
  parts: svg(`<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`),
  euro: svg(`<path d="M18 5a8 8 0 1 0 0 14"/><path d="M4 10h11"/><path d="M4 14h11"/>`),
  repeat: svg(`<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>`),
  machine: svg(`<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01"/><path d="M7 17h.01"/>`),
  leaf: svg(`<path d="M21 3c-7 0-13 6-13 13a5 5 0 0 0 5 5c7 0 13-6 13-13V3h-5z"/><path d="M3 21c4-8 9-12 18-13"/>`),
  ruler: svg(`<path d="M3 21h18"/><path d="M7 21V11"/><path d="M11 21V13"/><path d="M15 21V9"/><path d="M19 21V15"/>`),
  clock: svg(`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`),
};

const piecesData = [620, 712, 805, 778, 690, 0, 0, 824, 911, 967, 880, 1010, 1078, 1145];
const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const issuesData = [
  { color: "var(--trumpf-blue)", pct: 42, key: "burr" },
  { color: "#8a9400", pct: 35, key: "roughness" },
  { color: "#1f3a52", pct: 23, key: "beam" },
] as const;

function barChart(): string {
  const max = Math.max(...piecesData);
  const bars = piecesData
    .map((v, i) => {
      const h = max === 0 ? 0 : (v / max) * 100;
      const dim = v === 0 ? " is-zero" : "";
      return `
        <div class="bar-col${dim}">
          <div class="bar-track">
            <div class="bar-value" style="height:${h}%" data-value="${v}"></div>
          </div>
          <div class="bar-label">${dayLabels[i]}</div>
        </div>`;
    })
    .join("");
  return `<div class="bar-chart" role="img" aria-label="Parts per day">${bars}</div>`;
}

function donutChart(labels: { burr: string; roughness: string; beam: string }): string {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const segments = issuesData
    .map((seg) => {
      const length = (seg.pct / 100) * circumference;
      const dash = `${length} ${circumference - length}`;
      const dashOffset = -offset;
      offset += length;
      return `<circle r="${radius}" cx="60" cy="60" fill="transparent" stroke="${seg.color}" stroke-width="16" stroke-dasharray="${dash}" stroke-dashoffset="${dashOffset}" transform="rotate(-90 60 60)"></circle>`;
    })
    .join("");

  const legend = issuesData
    .map(
      (seg) => `
      <li>
        <span class="legend-swatch" style="background:${seg.color}"></span>
        <span class="legend-label">${escape(labels[seg.key])}</span>
        <span class="legend-pct">${seg.pct}%</span>
      </li>`,
    )
    .join("");

  return `
    <div class="donut-wrap">
      <svg viewBox="0 0 120 120" width="160" height="160" class="donut-svg">
        ${segments}
        <text x="60" y="58" text-anchor="middle" class="donut-center-big">1 247</text>
        <text x="60" y="76" text-anchor="middle" class="donut-center-small">Total</text>
      </svg>
      <ul class="donut-legend">${legend}</ul>
    </div>
  `;
}

function render(): void {
  const lang: LangCode = getInitialLang();
  const t = translations[lang];
  const p = t.pmPage;

  document.documentElement.lang = lang;
  document.documentElement.dir = langDir(lang);
  document.title = `${t.subpages.productManagers} — TRUMPF Cutting Assistant`;

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

    <main class="dashboard">
      <section class="dash-hero">
        <div class="container">
          <div class="dash-hero-row">
            <div>
              <span class="eyebrow eyebrow--ink">${escape(p.eyebrow)}</span>
              <h1 class="subpage-title">${escape(t.subpages.productManagers)}</h1>
              <p class="dash-subtitle">${escape(p.subtitle)}</p>
            </div>
            <div class="dash-range">
              <span class="pulse-dot"></span>
              ${escape(p.timeRange)}
            </div>
          </div>
        </div>
      </section>

      <section class="dash-section">
        <div class="container">
          <div class="kpi-grid">
            ${kpi(icon.box, p.kpis.materialSaved, "1 247 kg", "+12 %", p.vsLastWeek, "lime")}
            ${kpi(icon.parts, p.kpis.pieces, "12 453", "+8 %", p.vsLastWeek, "blue")}
            ${kpi(icon.euro, p.kpis.costSavings, "€ 18 420", "+15 %", p.vsLastWeek, "navy")}
            ${kpi(icon.repeat, p.kpis.avgIterations, "2,3", "−18 %", p.vsLastWeek, "blue", true)}
            ${kpi(icon.machine, p.kpis.machinesOnline, "4 / 5", "", "", "navy")}
            ${kpi(icon.leaf, p.kpis.co2Saved, "312 kg", "+9 %", p.vsLastWeek, "lime")}
            ${kpi(icon.ruler, p.kpis.avgRoughness, "22 µm", "−6 %", p.vsLastWeek, "blue", true)}
            ${kpi(icon.clock, p.kpis.setupTime, "−34 %", "", p.vsLastWeek, "lime")}
          </div>
        </div>
      </section>

      <section class="dash-section">
        <div class="container">
          <div class="dash-grid-2">
            <div class="dash-card">
              <div class="dash-card-head">
                <div>
                  <h3>${escape(p.pieces.title)}</h3>
                  <p>${escape(p.pieces.subtitle)}</p>
                </div>
              </div>
              ${barChart()}
            </div>

            <div class="dash-card">
              <div class="dash-card-head">
                <div>
                  <h3>${escape(p.issues.title)}</h3>
                  <p>${escape(p.issues.subtitle)}</p>
                </div>
              </div>
              ${donutChart({
                burr: p.issues.burr,
                roughness: p.issues.roughness,
                beam: p.issues.beam,
              })}
            </div>
          </div>
        </div>
      </section>

      <section class="dash-section">
        <div class="container">
          <div class="dash-grid-2 dash-grid-2--asymmetric">
            <div class="dash-card current-machine">
              <div class="dash-card-head">
                <div>
                  <h3>${escape(p.current.title)}</h3>
                  <p><span class="status-dot status-dot--green"></span>Live</p>
                </div>
              </div>
              <div class="current-grid">
                <div>
                  <div class="cm-label">${escape(p.current.material)}</div>
                  <div class="cm-value">Mild Steel S235JR</div>
                </div>
                <div>
                  <div class="cm-label">${escape(p.current.thickness)}</div>
                  <div class="cm-value">8 mm</div>
                </div>
                <div>
                  <div class="cm-label">${escape(p.current.gas)}</div>
                  <div class="cm-value">N₂</div>
                </div>
                <div>
                  <div class="cm-label">${escape(p.current.sheet)}</div>
                  <div class="cm-value">1500 × 3000 mm</div>
                </div>
                <div>
                  <div class="cm-label">${escape(p.current.mode)}</div>
                  <div class="cm-value"><span class="badge badge--lime">AI</span> Highspeed</div>
                </div>
                <div>
                  <div class="cm-label">${escape(p.current.eta)}</div>
                  <div class="cm-value">14:32</div>
                </div>
              </div>
              <div class="cm-progress">
                <div class="cm-progress-label">
                  <span>${escape(p.current.progress)}</span>
                  <span>72 %</span>
                </div>
                <div class="cm-progress-bar">
                  <div class="cm-progress-fill" style="width:72%"></div>
                </div>
              </div>
            </div>

            <div class="dash-card activity-feed">
              <div class="dash-card-head">
                <div>
                  <h3>${escape(p.activity.title)}</h3>
                </div>
              </div>
              <ul class="feed">
                ${p.activity.items
                  .map(
                    (item, i) => `
                    <li>
                      <span class="feed-time">${["3 min", "12 min", "27 min", "1 h", "2 h"][i] ?? ""}</span>
                      <span class="feed-text">${escape(item)}</span>
                    </li>`,
                  )
                  .join("")}
              </ul>
            </div>
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
}

function kpi(
  icon: string,
  label: string,
  value: string,
  delta: string,
  deltaLabel: string,
  accent: "blue" | "lime" | "navy",
  inverseDelta = false,
): string {
  const positive = inverseDelta ? delta.startsWith("−") : delta.startsWith("+");
  const deltaCls = delta ? (positive ? "delta-up" : "delta-down") : "";
  return `
    <div class="kpi-tile kpi-tile--${accent}">
      <div class="kpi-icon">${icon}</div>
      <div class="kpi-content">
        <div class="kpi-label">${escape(label)}</div>
        <div class="kpi-value">${escape(value)}</div>
        ${
          delta
            ? `<div class="kpi-delta ${deltaCls}">${escape(delta)} <span>${escape(deltaLabel)}</span></div>`
            : ""
        }
      </div>
    </div>
  `;
}

render();
