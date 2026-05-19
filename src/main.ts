import "./style.css";

type Advantage = {
  title: string;
  body: string;
  image: string;
};

type Step = {
  index: string;
  title: string;
  body: string;
};

const advantages: Advantage[] = [
  {
    title: "Dialog-guided cutting data optimization",
    body: "Even inexperienced users can optimize cutting data like a pro in just a few minutes — saving both time and material costs.",
    image:
      "https://images.unsplash.com/photo-1581091870622-1c6a4e0b1f0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Excellent cutting quality — even in non-laser-grade material",
    body: "The Cutting Assistant suggests suitable optimizations — whether for special materials or materials with fluctuating quality.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quick inspection of cutting-edge quality",
    body: "The handheld scanner allows an objective assessment of part quality. The Cutting Assistant displays roughness and burr height in micrometers.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

const steps: Step[] = [
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
];

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("Missing #app root");

app.innerHTML = `
  <header class="site-header">
    <div class="container">
      <a class="logo" href="#" aria-label="TRUMPF">
        <span class="logo-mark"></span>
        TRUMPF
      </a>
      <nav class="nav" aria-label="Primary">
        <a href="#advantages">Advantages</a>
        <a href="#how">How it works</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <span class="eyebrow">Cutting Assistant</span>
        <h1 id="hero-title">AI-assisted cutting edge optimization</h1>
        <p class="lead">
          AI-based cutting-edge optimization for your 2D laser cutting machine.
          Quickly optimize cutting parameters, save time and material — and
          ensure excellent cutting quality, even with varying material grades.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">Request a demo</a>
          <a class="btn btn-ghost" href="https://www.trumpf.info/fsbpmj" target="_blank" rel="noopener">
            Watch product video
          </a>
        </div>
      </div>
      <div class="discover-badge" aria-hidden="true">
        Discover<br />Now!
      </div>
    </section>

    <section id="advantages" class="advantages" aria-labelledby="advantages-title">
      <div class="container">
        <div class="section-head">
          <h2 id="advantages-title">The advantages at a glance</h2>
          <p>Cutting-edge optimization — in your material, for your employees.</p>
        </div>
        <div class="cards">
          ${advantages
            .map(
              (a) => `
            <article class="card">
              <div class="card-media" style="background-image:url('${a.image}')"></div>
              <div class="card-body">
                <h3>${a.title}</h3>
                <p>${a.body}</p>
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
          <h2 id="how-title">Easy handling, dialog-guided</h2>
          <p>Targeted parameter adjustment based on the specific cutting issue and material.</p>
        </div>
        <div class="steps-grid">
          ${steps
            .map(
              (s) => `
            <div class="step">
              <div class="step-number">${s.index}</div>
              <h3>${s.title}</h3>
              <p>${s.body}</p>
            </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="contact" class="cta" aria-labelledby="cta-title">
      <div class="container">
        <h2 id="cta-title">
          Ready to optimize your cutting parameters?
        </h2>
        <a class="btn btn-primary" href="mailto:info@de.trumpf.com">Talk to sales</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div>© ${new Date().getFullYear()} TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG</div>
      <div>
        <a href="https://www.trumpf.com" target="_blank" rel="noopener">www.trumpf.com</a>
      </div>
    </div>
  </footer>
`;
