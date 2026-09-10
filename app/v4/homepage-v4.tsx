'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, LockKeyhole, Check } from 'lucide-react';

// ─── Image paths (ComfyUI generated) ───
const HERO_IMAGE = '/assets/v4/hero-data-flow.png';
const PROOF_IMAGE = '/assets/v4/proof-evidence-chain.png';
const INFRA_IMAGE = '/assets/v4/infra-hardware.jpg';

/* ─── Navigation ─── */
const navItems = [
  ['Lösungen', '#loesungen'],
  ['Private AI', '#private-ai'],
  ['Wie wir arbeiten', '#arbeitsweise'],
  ['Gigatop', '#gigatop'],
] as const;

function Wordmark({ light = false }: { light?: boolean }) {
  return <a className="wordmark" href="#top" aria-label="Gigatop Startseite">{light ? 'GIGATOP' : 'GIGATOP'}</a>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className={`v4-nav ${open ? 'v4-nav-open' : ''}`}>
      <div className="v4-nav-inner">
        <Wordmark light />
        <nav id="primary-navigation" aria-label="Hauptnavigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="v4-cta-sm">AI-Potenzial klären <ArrowUpRight size={14} /></a>
        <button
          className="v4-menu-toggle"
          type="button"
          aria-expanded={open ? 'true' : 'false'}
          aria-controls="primary-navigation"
          aria-label="Navigation öffnen"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}

/* ─── Scroll Reveal ─── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  useEffect(() => {
    if (reduced || !ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('v4-reveal-active'); obs.disconnect(); } },
      { threshold: 0.15 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <div ref={ref} className="v4-reveal" style={reduced ? undefined : { transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Hero Scene ─── */
function HeroScene() {
  return (
    <section className="v4-scene v4-hero" id="top" aria-labelledby="hero-title">
      {/* Hero Visual — real ComfyUI image */}
      <figure className="v4-hero-visual">
        <img
          src={HERO_IMAGE}
          alt="Abstrakte Visualisierung der lokalen Daten-Grenze: Unternehmensdaten fließen durch die Local Boundary zur Gigatop AI, Human Gate kontrolliert jede Aktion"
          loading="eager"
          fetchPriority="high"
          width={1280}
          height={720}
        />
        <figcaption className="v4-visual-label">
          <span>LOCAL BOUNDARY</span>
          <small>Generatives Konzept · Keine reale Aufnahme</small>
        </figcaption>
      </figure>

      {/* Hero Content */}
      <div className="v4-hero-content">
        <h1 id="hero-title">
          Ihre Daten.
          <br />
          <span className="v4-hero-accent">Ein klarer Raum.</span>
        </h1>
        <p className="v4-hero-lead">
          Gigatop macht Ihr Unternehmenswissen mit lokaler AI handlungsfähig. Quellen bleiben sichtbar, Handlungen unter Ihrer Kontrolle.
        </p>
        <a href="#kontakt" className="v4-cta">
          <span>AI-Potenzial klären</span>
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Local Boundary — simplified from V3 */}
      <div className="v4-boundary" aria-label="Local Boundary: Unternehmensdaten fliessen zu Gigatop AI und bleiben vor jeder Handlung unter menschlicher Kontrolle">
        <span className="v4-boundary-label">LOCAL BOUNDARY</span>
        <div className="v4-boundary-axis" aria-hidden="true">
          <i className="v4-axis-dot v4-axis-top"></i>
          <i className="v4-axis-dot v4-axis-mid"></i>
          <i className="v4-axis-dot v4-axis-bot"></i>
        </div>
        <div className="v4-boundary-col v4-boundary-source">
          <span>Unternehmensdaten</span>
          <strong>CRM · DOKUMENTE · ERP</strong>
        </div>
        <div className="v4-boundary-col v4-boundary-ai">
          <span className="v4-g-mark">G</span>
          <div>
            <strong>Gigatop AI</strong>
            <small>Modelle · Wissen · Agenten</small>
          </div>
        </div>
        <div className="v4-boundary-col v4-boundary-gate">
          <span>Human Gate</span>
          <strong>Sie entscheiden</strong>
        </div>
        <span className="v4-boundary-state">SYSTEM BEREIT</span>
      </div>
    </section>
  );
}

/* ─── Reality Scene ─── */
function RealityScene() {
  const sources = [
    { name: 'CRM', label: 'Kundenkontext' },
    { name: 'SharePoint', label: 'Teamwissen' },
    { name: 'Dokumente', label: 'Verträge & Berichte' },
    { name: 'E-Mail', label: 'Entscheidungen' },
    { name: 'ERP', label: 'Operative Daten' },
    { name: 'Datenbanken', label: 'Historie' },
  ];

  return (
    <section className="v4-scene v4-reality" id="realitaet" aria-labelledby="reality-title">
      <div className="v4-reality-grid">
        <div className="v4-reality-copy">
          <Reveal>
            <h2 id="reality-title">Ihr Wissen ist da.<br />Aber noch nicht verbunden.</h2>
            <p>Gigatop legt eine intelligente Schicht über bestehende Systeme. Die Quellen bleiben, wo sie hingehören.</p>
          </Reveal>
        </div>
        <div className="v4-reality-visual" aria-label="Verteilte Unternehmensquellen werden durch die Gigatop Intelligence Layer verbunden">
          <div className="v4-fragments">
            {sources.map((s, i) => (
              <div className="v4-source-node" key={s.name} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="v4-source-name">{s.name}</span>
                <small>{s.label}</small>
                <i className="v4-source-line" aria-hidden="true"></i>
              </div>
            ))}
            <div className="v4-spine">
              <span>GIGATOP</span>
              <strong>Intelligence<br />Layer</strong>
              <small>über Ihren Systemen</small>
            </div>
            <div className="v4-joined">
              <span>Eine Frage</span>
              <strong>Eine belegte Antwort</strong>
              <small>mehr mit Quelle und Zuständigkeit</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Proof Scene ─── */
function ProofScene() {
  const steps = [
    { num: '01', title: 'Signal', desc: 'Technisches Dokument geöffnet', meta: 'Websignal · heute, 09:42' },
    { num: '02', title: 'Research', desc: 'Öffentliche Quellen geprüft', meta: '2 relevante Quellen' },
    { num: '03', title: 'CRM-Kontext', desc: 'Account und Rollen abgeglichen', meta: 'CRM · zuletzt aktualisiert heute' },
    { num: '04', title: 'Evidenz', desc: 'Drei Quellen tragen den nächsten Schritt', meta: 'Quellenabdeckung vollständig' },
    { num: '05', title: 'Empfehlung', desc: 'Technische Discovery vorbereiten', meta: 'Keine automatische Kontaktaufnahme' },
    { num: '06', title: 'Menschliche Freigabe', desc: 'Die Empfehlung wartet. Keine Aktion wurde ausgeführt.', meta: 'HUMAN GATE · AKTION GESPERRT' },
  ];

  return (
    <section className="v4-scene v4-proof" id="produkt" aria-labelledby="proof-title">
      <div className="v4-proof-grid">
        <div className="v4-proof-copy">
          <Reveal>
            <h2 id="proof-title">Jeder Schritt zeigt,<br />warum er folgt.</h2>
            <p>Signal, Kontext und Evidenz bleiben mit der Empfehlung verbunden. Erst dann entscheidet ein Mensch.</p>
            <div className="v4-proof-question">
              <span>Aktuelle Frage</span>
              <strong>Was hat sich bei diesem Account verändert?</strong>
              <small>LÖSUNGSBLUEPRINT · DEMO-DATEN</small>
            </div>
          </Reveal>
        </div>

        {/* Evidence Visual — real ComfyUI image */}
        <figure className="v4-proof-visual">
          <img
            src={PROOF_IMAGE}
            alt="Abstrakte Visualisierung einer Evidenzkette: Vom Signal über Research und CRM-Kontext bis zur menschlichen Freigabe"
            loading="lazy"
            width={1280}
            height={720}
          />
          <figcaption className="v4-visual-label">
            <span>EVIDENZ KETTE</span>
            <small>Generatives Konzept · Keine reale Aufnahme</small>
          </figcaption>
        </figure>

        {/* Evidence Line — preserved from V3 */}
        <div className="v4-proof-evidence" aria-label="Evidenzkette vom Signal zur menschlichen Freigabe">
          <ol className="v4-evidence-line">
            {steps.map((s, i) => (
              <li key={s.num} className={s.num === '06' ? 'v4-approval' : ''}>
                <span>{s.num}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                  <small>{s.meta}</small>
                </div>
              </li>
            ))}
          </ol>

          <button className="v4-human-gate" type="button" aria-label="Freigabe erforderlich">
            <span className="v4-gate-icon">
              <LockKeyhole size={16} />
            </span>
            <span>
              <small>FREIGABE ERFORDERLICH</small>
              <strong>Meeting vorbereiten</strong>
            </span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Private AI Scene ─── */
function PrivateAIScene() {
  const layers = [
    { from: 'Ihre Systeme', to: 'CRM · Wissen · Dokumente · Prozesse' },
    { from: 'Gigatop Intelligence Layer', to: 'Verbindet Kontext, Rechte und Evidenz' },
    { from: 'Lokale Intelligenz', to: 'Modelle · Agenten · Wissenszugriff' },
    { from: 'Menschliche Kontrolle', to: 'Prüfen · Entscheiden · Freigeben' },
  ];

  return (
    <section className="v4-scene v4-private-ai" id="private-ai" aria-labelledby="private-title">
      <div className="v4-threshold" aria-hidden="true"></div>
      <div className="v4-private-grid">
        <div className="v4-private-copy">
          <Reveal>
            <h2 id="private-title">Private AI ist keine<br />Behauptung. Es ist Architektur.</h2>
            <p>Sie wählen Modelle, Dienste und Grenzen. Gigatop macht diese Entscheidungen im System sichtbar.</p>
          </Reveal>
        </div>

        <div className="v4-architecture" aria-label="Private AI Architektur von den Systemen über die lokale Intelligenz bis zur menschlichen Freigabe">
          <span className="v4-arch-label">LOCAL BOUNDARY</span>
          {layers.map((l, i) => (
            <div className="v4-arch-row" key={i}>
              <span>{l.from}</span>
              <strong>{l.to}</strong>
            </div>
          ))}
          <div className="v4-arch-trace" aria-hidden="true">
            <i className="v4-trace-dot"></i>
            <i className="v4-trace-dot"></i>
            <i className="v4-trace-dot"></i>
          </div>
        </div>
      </div>

      <aside className="v4-outside" aria-label="Optionale externe Dienste sind bewusst ausserhalb der Boundary">
        <span>Optionale externe Dienste</span>
        <small>bewusst ausserhalb der Boundary</small>
      </aside>
    </section>
  );
}

/* ─── Solutions Scene ─── */
function SolutionsScene() {
  const solutions = [
    {
      title: 'AI Agents',
      desc: 'Agenten recherchieren, verbinden Kontext und bereiten Handlungen vor. Innerhalb klarer Rechte.',
      question: { from: 'Geschäftsfrage', to: 'Welcher Account braucht heute Aufmerksamkeit?' },
      flow: [
        { type: 'Signal', text: 'Dokument wurde erneut geöffnet' },
        { type: 'Evidenz', text: 'Research und CRM abgeglichen' },
        { type: 'Human Gate', text: 'Meetingvorbereitung wartet' },
      ],
    },
    {
      title: 'Company Knowledge AI',
      desc: 'Ihr gesamtes Unternehmenswissen, verbunden und durchsuchbar. Mit Nachweis und Quellen.',
      question: { from: 'Geschäftsfrage', to: 'Welche Risiken gibt es in diesem Vertrag?' },
      flow: [
        { type: 'Suche', text: 'Vertragsklausel identifiziert' },
        { type: 'Evidenz', text: 'Vergleich mit 12 früheren Verträgen' },
        { type: 'Human Gate', text: 'Risikobewertung wartet' },
      ],
    },
    {
      title: 'Dokumente & Workflows',
      desc: 'Dokumente werden nicht nur erstellt — sie werden geprüft, verbunden und nachverfolgbar.',
      question: { from: 'Geschäftsfrage', to: 'Wurde die Compliance-Prüfung abgeschlossen?' },
      flow: [
        { type: 'Signal', text: 'Dokument wurde geändert' },
        { type: 'Evidenz', text: 'Alle Dependencies geprüft' },
        { type: 'Human Gate', text: 'Freigabe für Veröffentlichung' },
      ],
    },
  ];

  return (
    <section className="v4-scene v4-solutions" id="loesungen" aria-labelledby="solutions-title">
      <div className="v4-solutions-grid">
        <div className="v4-solutions-copy">
          <Reveal>
            <h2 id="solutions-title">Drei Wege zu<br />funktionierender AI.</h2>
            <p>Nicht drei Produkte. Drei Ausgangspunkte für ein System, das zu Ihrem Unternehmen passt.</p>
          </Reveal>
        </div>

        <div className="v4-solutions-content">
          {/* Tabs */}
          <div className="v4-solution-tabs" role="tablist" aria-label="Ausgewählte Lösungen">
            {solutions.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === 0 ? 'true' : 'false'}
                className={i === 0 ? 'v4-sol-tab-active' : ''}
                onClick={() => {/* Tab switch would go here */ }}
              >
                <strong>{s.title}</strong>
              </button>
            ))}
          </div>

          {/* Active Solution (tab 0) */}
          <div className="v4-solution-stage" aria-label="AI Agents: Lösungsblueprint mit Demo-Daten">
            <div className="v4-solution-body">
              <small>LÖSUNGSBLUEPRINT · DEMO-DATEN</small>
              <p>{solutions[0].desc}</p>
              <div className="v4-solution-q">
                <span>{solutions[0].question.from}</span>
                <strong>{solutions[0].question.to}</strong>
              </div>
            </div>

            <div className="v4-solution-flow">
              {solutions[0].flow.map((f, i) => (
                <div key={i} style={{ transitionDelay: `${i * 120}ms` }}>
                  <small>{f.type}</small>
                  <strong>{f.text}</strong>
                  {i < 2 && <i className="v4-flow-line" aria-hidden="true"></i>}
                </div>
              ))}
              <div className="v4-solution-boundary">
                <span>LOCAL BOUNDARY</span>
                <small>Evidenz bleibt am Ergebnis</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Infrastructure Scene ─── */
function InfraScene() {
  return (
    <section className="v4-scene v4-infra" id="infrastruktur" aria-labelledby="infra-title">
      <div className="v4-infra-copy">
        <Reveal>
          <h2 id="infra-title">Diese Intelligenz<br />hat einen physischen Ort.</h2>
          <p>Gigatop entwickelt und betreibt AI-Systeme auf lokaler NVIDIA GB10 Infrastruktur.</p>
        </Reveal>
      </div>

      {/* Hardware Visual — real ComfyUI image */}
      <figure className="v4-hardware">
        <div className="v4-hardware-frame">
          <img
            src={INFRA_IMAGE}
            alt="Lokale NVIDIA GB10 Infrastruktur: ein physischer Rechenort für lokale KI-Inferenz innerhalb der Systemgrenze"
            loading="lazy"
            width={1280}
            height={720}
          />
          <span className="v4-hardware-label">LOCAL COMPUTE BOUNDARY</span>
          <strong className="v4-hardware-glyph">GB10</strong>
        </div>
        <figcaption>TECHNISCHE REFERENZ · KEIN PRODUKTBILD</figcaption>
      </figure>

      <div className="v4-infra-facts" aria-label="Verifizierte technische Fakten">
        <div>
          <strong>GB10</strong>
          <span>Grace Blackwell</span>
          <small>lokal auditiert</small>
        </div>
        <div>
          <strong>128 GB</strong>
          <span>Unified Memory</span>
          <small>Hardware-Spezifikation</small>
        </div>
        <div>
          <strong>Qwen</strong>
          <span>Lokale Inferenz</span>
          <small>GPU-beschleunigt</small>
        </div>
      </div>
    </section>
  );
}

/* ─── Build Scene ─── */
function BuildScene() {
  const steps = [
    { num: '01', title: 'Entdecken' },
    { num: '02', title: 'Bauen' },
    { num: '03', title: 'Verbinden' },
    { num: '04', title: 'Betreiben' },
  ];

  return (
    <section className="v4-scene v4-build" id="arbeitsweise" aria-labelledby="build-title">
      <div className="v4-build-grid">
        <div className="v4-build-copy">
          <Reveal>
            <h2 id="build-title">Wir bauen Systeme,<br />die arbeiten.</h2>
            <p>Nicht nur Strategien. Ein konkreter Prozess wird früh sichtbar und in Ihrer Umgebung belastbar gemacht.</p>
          </Reveal>
        </div>

        <div className="v4-build-steps" aria-label="Gigatop Prozess">
          {steps.map((s, i) => (
            <div className="v4-step" key={s.num} style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="v4-step-number">{s.num}</span>
              <strong>{s.title}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="v4-gigatop-proof" id="gigatop" aria-label="Gigatop Systemzustand — Visual Critic Demo">
        <div className="v4-proof-copy">
          <p>Gigatop als Beleg</p>
          <h3>Wir bauen Gigatop mit derselben lokalen AI, die wir für Unternehmen entwickeln.</h3>
          <div>
            <span>Qwen prüft lokal</span>
            <span>Hermes orchestriert Workflows</span>
            <span>Creative OS verbindet Evidenz und Review</span>
          </div>
        </div>
        <figure>
          <img src="/assets/visual-critic-ui.png" width="1440" height="1000" loading="lazy" decoding="async" alt="Gigatop Visual Critic in einem geprüften Demo-Systemzustand mit lokaler Bildprüfung" />
          <figcaption>
            <span>GIGATOP SYSTEMZUSTAND</span>
            <small>VISUAL CRITIC · DEMO-DATEN · HUMAN REVIEW</small>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ─── CTA Scene ─── */
function CtaScene() {
  return (
    <section className="v4-scene v4-cta" id="kontakt" aria-labelledby="cta-title">
      <div className="v4-cta-rule" aria-label="Ihre Systeme werden durch Gigatop AI mit Ihrer Freigabe verbunden">
        <span className="v4-cta-input">Ihre Systeme</span>
        <i className="v4-cta-g" aria-hidden="true">G</i>
        <b className="v4-cta-line" aria-hidden="true"></b>
        <span className="v4-cta-output">Ihre Freigabe</span>
      </div>

      <div className="v4-cta-content">
        <Reveal>
          <h2 id="cta-title">Wo würde AI in Ihrem Unternehmen den grössten Unterschied machen?</h2>
          <p>Ein konkretes AI-Potenzial. Ein klarer nächster Schritt. Persönlich und diskret.</p>
          <a href="mailto:top@gigatop.io?subject=AI-Potenzial%20klären" className="v4-cta v4-cta-final" aria-label="AI-Potenzial in einem persönlichen Gespräch klären">
            <span>AI-Potenzial klären</span>
            <ArrowUpRight size={18} />
          </a>
          <small>Persönliches Gespräch · keine automatische Analyse</small>
        </Reveal>
      </div>

      <footer className="v4-footer">
        <Wordmark light />
        <span>Private AI · Switzerland</span>
        <span>Deutsch <b>DE</b> / <b>EN</b></span>
      </footer>
    </section>
  );
}

/* ─── Main Component ─── */
export function HomepageV4() {
  return (
    <>
      <Navigation />
      <main>
        <HeroScene />
        <RealityScene />
        <ProofScene />
        <PrivateAIScene />
        <SolutionsScene />
        <InfraScene />
        <BuildScene />
        <CtaScene />
      </main>
    </>
  );
}