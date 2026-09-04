'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, LockKeyhole, Menu, X } from 'lucide-react';

const navItems = [
  ['Lösungen', '#loesungen'],
  ['Private AI', '#private-ai'],
  ['Wie wir arbeiten', '#arbeitsweise'],
  ['Gigatop', '#gigatop'],
] as const;

const proofSteps = [
  ['01', 'Signal', 'Technisches Dokument geöffnet', 'Websignal · heute, 09:42'],
  ['02', 'Research', 'Öffentliche Quellen geprüft', '2 relevante Quellen'],
  ['03', 'CRM-Kontext', 'Account und Rollen abgeglichen', 'CRM · zuletzt aktualisiert heute'],
  ['04', 'Evidenz', 'Drei Quellen tragen den nächsten Schritt', 'Quellenabdeckung vollständig'],
  ['05', 'Empfehlung', 'Technische Discovery vorbereiten', 'Keine automatische Kontaktaufnahme'],
] as const;

const solutions = [
  {
    id: 'agents',
    number: '01',
    title: 'AI Agents',
    summary: 'Agenten recherchieren, verbinden Kontext und bereiten Handlungen vor. Innerhalb klarer Rechte.',
    question: 'Welcher Account braucht heute Aufmerksamkeit?',
    rows: [['Signal', 'Dokument wurde erneut geöffnet'], ['Evidenz', 'Research und CRM abgeglichen'], ['Human Gate', 'Meetingvorbereitung wartet']],
  },
  {
    id: 'knowledge',
    number: '02',
    title: 'Company Knowledge AI',
    summary: 'Unternehmenswissen wird auffindbar, vergleichbar und mit seiner Quelle beantwortet.',
    question: 'Was wissen wir bereits zu diesem Thema?',
    rows: [['Frage', 'Technische Lieferfähigkeit 2026'], ['Evidenz', '3 Dokumente und 2 Besitzer'], ['Antwort', 'Quelle und Konflikt sichtbar']],
  },
  {
    id: 'documents',
    number: '03',
    title: 'Dokumente & Workflows',
    summary: 'Dokumente werden erfasst, geprüft und an bestehende Abläufe übergeben. Ausnahmen bleiben sichtbar.',
    question: 'Was ist vollständig und was braucht Prüfung?',
    rows: [['Eingang', 'Vertrag 2026-041'], ['Ausnahme', 'Zahlungsziel braucht Prüfung'], ['Human Gate', 'ERP-Export wartet']],
  },
] as const;

function Wordmark({ light = false }: { light?: boolean }) {
  return <a className={`wordmark ${light ? 'wordmark-light' : ''}`} href="#top" aria-label="Gigatop Startseite">GIGATOP<span>·</span></a>;
}

function ActionLink({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <a className={`action-link ${className}`} href="#kontakt"><span>{children}</span><ArrowUpRight aria-hidden="true" /></a>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return <header className={`site-nav ${open ? 'nav-open' : ''}`}>
    <Wordmark light />
    <nav id="primary-navigation" aria-label="Hauptnavigation">
      {navItems.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <ActionLink className="nav-action">AI-Potenzial klären</ActionLink>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Navigation schliessen' : 'Navigation öffnen'} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
  </header>;
}

function LocalBoundary() {
  return <div className="local-boundary" aria-label="Local Boundary: Unternehmensdaten fliessen zu Gigatop AI und bleiben vor jeder Handlung unter menschlicher Kontrolle">
    <span className="boundary-name">LOCAL BOUNDARY</span>
    <span className="corner corner-nw" aria-hidden="true" /><span className="corner corner-ne" aria-hidden="true" /><span className="corner corner-sw" aria-hidden="true" /><span className="corner corner-se" aria-hidden="true" />
    <div className="boundary-axis" aria-hidden="true"><i /><i /><i /></div>
    <div className="boundary-source">
      <span>Unternehmensdaten</span>
      <strong>CRM · DOKUMENTE · ERP</strong>
    </div>
    <div className="boundary-intelligence">
      <span className="g-mark">G</span>
      <div><strong>Gigatop AI</strong><small>Modelle · Wissen · Agenten</small></div>
    </div>
    <div className="boundary-gate">
      <span>Human Gate</span>
      <strong>Sie entscheiden</strong>
    </div>
    <span className="boundary-state">SYSTEM BEREIT</span>
  </div>;
}

function Hero() {
  return <section className="scene hero" id="top" aria-labelledby="hero-title">
    <Navigation />
    <div className="hero-copy">
      <p className="eyebrow">PRIVATE AI · SWITZERLAND</p>
      <h1 id="hero-title">Ihre Daten.<br />Ein klarer Raum.</h1>
      <p className="hero-lead">Gigatop macht Ihr Unternehmenswissen mit lokaler AI handlungsfähig. Quellen bleiben sichtbar, Handlungen unter Ihrer Kontrolle.</p>
      <ActionLink>AI-Potenzial klären</ActionLink>
    </div>
    <LocalBoundary />
  </section>;
}

function BusinessReality() {
  const sources = [
    ['CRM', 'Kundenkontext'], ['SharePoint', 'Teamwissen'], ['Dokumente', 'Verträge & Berichte'],
    ['E-Mail', 'Entscheidungen'], ['ERP', 'Operative Daten'], ['Datenbanken', 'Historie'],
  ];
  return <section className="scene reality" id="realitaet" aria-labelledby="reality-title">
    <div className="section-copy reality-copy">
      <h2 id="reality-title">Ihr Wissen ist da.<br />Aber noch nicht verbunden.</h2>
      <p>Gigatop legt eine intelligente Schicht über bestehende Systeme. Die Quellen bleiben, wo sie hingehören.</p>
    </div>
    <div className="fragment-field" aria-label="Verteilte Unternehmensquellen werden durch die Gigatop Intelligence Layer verbunden">
      <div className="source-field">
        {sources.map(([name, detail], index) => <div className={`source-row source-row-${index + 1}`} key={name}><span>{name}</span><small>{detail}</small><i aria-hidden="true" /></div>)}
      </div>
      <div className="intelligence-spine">
        <span>GIGATOP</span>
        <strong>Intelligence<br />Layer</strong>
        <small>über Ihren Systemen</small>
      </div>
      <div className="joined-outcome"><span>Eine Frage</span><strong>Eine belegte Antwort</strong><small>mit Quelle und Zuständigkeit</small></div>
    </div>
  </section>;
}

function ProductProof() {
  const [approved, setApproved] = useState(false);
  return <section className={`scene product-proof ${approved ? 'is-approved' : ''}`} id="produkt" aria-labelledby="proof-title">
    <div className="proof-intro">
      <h2 id="proof-title">Jeder Schritt zeigt,<br />warum er folgt.</h2>
      <p>Signal, Kontext und Evidenz bleiben mit der Empfehlung verbunden. Erst dann entscheidet ein Mensch.</p>
      <div className="proof-question"><span>Aktuelle Frage</span><strong>Was hat sich bei diesem Account verändert?</strong><small>LÖSUNGSBLUEPRINT · DEMO-DATEN</small></div>
    </div>
    <div className="evidence-system">
      <ol className="evidence-line">
        {proofSteps.map(([number, title, detail, source]) => <li key={number}>
          <span>{number}</span><div><strong>{title}</strong><p>{detail}</p><small>{source}</small></div>
        </li>)}
        <li className="approval-step">
          <span>06</span>
          <div><strong>{approved ? 'Menschlich freigegeben' : 'Menschliche Freigabe'}</strong><p>{approved ? 'Meetingvorbereitung wurde autorisiert.' : 'Die Empfehlung wartet. Keine Aktion wurde ausgeführt.'}</p><small>{approved ? 'AUDIT · FREIGABE ERFASST' : 'HUMAN GATE · AKTION GESPERRT'}</small></div>
        </li>
      </ol>
      <button className="human-gate" type="button" aria-label={approved ? 'Autorisiert – Meeting wird vorbereitet' : 'Meeting vorbereiten – Freigabe erforderlich'} onClick={() => setApproved(true)} disabled={approved}>
        <span className="gate-icon">{approved ? <Check aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}</span>
        <span><small>{approved ? 'AUTORISIERT' : 'FREIGABE ERFORDERLICH'}</small><strong>{approved ? 'Meeting wird vorbereitet' : 'Meeting vorbereiten'}</strong></span>
        {!approved && <ArrowUpRight aria-hidden="true" />}
      </button>
      <span className="sr-only" role="status" aria-live="polite">{approved ? 'Autorisiert – Meeting wird vorbereitet' : ''}</span>
    </div>
  </section>;
}

function PrivateAI() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.28 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className={`scene private-ai ${visible ? 'is-visible' : ''}`} id="private-ai" aria-labelledby="private-title">
    <div className="technical-threshold" aria-hidden="true"><span /></div>
    <div className="private-heading">
      <h2 id="private-title">Private AI ist keine<br />Behauptung. Es ist Architektur.</h2>
      <p>Sie wählen Modelle, Dienste und Grenzen. Gigatop macht diese Entscheidungen im System sichtbar.</p>
    </div>
    <div className="architecture-field" aria-label="Private AI Architektur von den Systemen über die lokale Intelligenz bis zur menschlichen Freigabe">
      <span className="architecture-label">LOCAL BOUNDARY</span>
      <div className="architecture-row row-systems"><span>Ihre Systeme</span><strong>CRM · Wissen · Dokumente · Prozesse</strong></div>
      <div className="architecture-row row-layer"><span>Gigatop Intelligence Layer</span><strong>Verbindet Kontext, Rechte und Evidenz</strong></div>
      <div className="architecture-row row-engine"><span>Lokale Intelligenz</span><strong>Modelle · Agenten · Wissenszugriff</strong></div>
      <div className="architecture-row row-control"><span>Menschliche Kontrolle</span><strong>Prüfen · Entscheiden · Freigeben</strong></div>
      <div className="architecture-trace" aria-hidden="true"><i /><i /><i /></div>
    </div>
    <div className="outside-services"><span>Optionale externe Dienste</span><small>bewusst ausserhalb der Boundary</small></div>
  </section>;
}

function Solutions() {
  const [activeId, setActiveId] = useState('agents');
  const active = solutions.find((solution) => solution.id === activeId) ?? solutions[0];
  return <section className="scene solutions" id="loesungen" aria-labelledby="solutions-title">
    <div className="solutions-heading">
      <h2 id="solutions-title">Drei Wege zu<br />funktionierender AI.</h2>
      <p>Nicht drei Produkte. Drei Ausgangspunkte für ein System, das zu Ihrem Unternehmen passt.</p>
    </div>
    <div className="solution-selector" aria-label="Ausgewählte Lösungen">
      {solutions.map((solution) => <button type="button" aria-pressed={active.id === solution.id} onClick={() => setActiveId(solution.id)} key={solution.id}><span>{solution.number}</span><strong>{solution.title}</strong><ArrowUpRight aria-hidden="true" /></button>)}
    </div>
    <div className="solution-stage" aria-live="polite" aria-label={`${active.title}: Lösungsblueprint mit Demo-Daten`}>
      <small className="solution-demo">LÖSUNGSBLUEPRINT · DEMO-DATEN</small>
      <p>{active.summary}</p>
      <div className="solution-question"><span>Geschäftsfrage</span><strong>{active.question}</strong></div>
      <div className="solution-flow">{active.rows.map(([label, value], index) => <div key={label}><span>{String(index + 1).padStart(2, '0')}</span><small>{label}</small><strong>{value}</strong></div>)}</div>
      <div className="solution-boundary"><span>LOCAL BOUNDARY</span><small>Evidenz bleibt am Ergebnis</small></div>
    </div>
  </section>;
}

function Infrastructure() {
  return <section className="scene infrastructure" id="infrastruktur" aria-labelledby="infra-title">
    <div className="infra-copy">
      <h2 id="infra-title">Diese Intelligenz<br />hat einen physischen Ort.</h2>
      <p>Gigatop entwickelt und betreibt AI-Systeme auf lokaler NVIDIA GB10 Infrastruktur.</p>
    </div>
    <figure className="hardware-figure hardware-fallback">
      <div className="hardware-light" aria-hidden="true" />
      <div className="compute-place" role="img" aria-label="Technische Darstellung eines lokalen GB10 Rechensystems innerhalb einer kontrollierten Systemgrenze">
        <span>LOCAL COMPUTE BOUNDARY</span>
        <strong>GB10</strong>
        <div><i />NVIDIA Grace Blackwell</div>
        <div><i />128 GB Unified Memory</div>
        <div><i />Lokale Modellinferenz</div>
      </div>
      <figcaption>TECHNISCHE REFERENZ · KEIN PRODUKTBILD</figcaption>
    </figure>
    <div className="facts-line" aria-label="Verifizierte technische Fakten">
      <div><strong>GB10</strong><span>Grace Blackwell</span><small>lokal auditiert</small></div>
      <div><strong>128 GB</strong><span>Unified Memory</span><small>Hardware-Spezifikation</small></div>
      <div><strong>Qwen</strong><span>Lokale Inferenz</span><small>GPU-beschleunigt</small></div>
    </div>
  </section>;
}

function HowWeBuild() {
  const steps = ['Entdecken', 'Bauen', 'Verbinden', 'Betreiben'];
  return <section className="scene build-method" id="arbeitsweise" aria-labelledby="build-title">
    <div className="method-heading">
      <h2 id="build-title">Wir bauen Systeme,<br />die arbeiten.</h2>
      <p>Nicht nur Strategien. Ein konkreter Prozess wird früh sichtbar und in Ihrer Umgebung belastbar gemacht.</p>
    </div>
    <ol className="method-line">{steps.map((title) => <li key={title}><strong>{title}</strong></li>)}</ol>
    <aside className="gigatop-proof" id="gigatop">
      <div className="gigatop-proof-copy"><p>Gigatop als Beleg</p><h3>Wir bauen Gigatop mit derselben lokalen AI, die wir für Unternehmen entwickeln.</h3><div><span>Qwen prüft lokal</span><span>Hermes orchestriert Workflows</span><span>Creative OS verbindet Evidenz und Review</span></div></div>
      <figure><img src="/assets/visual-critic-ui.png" width="1440" height="1000" loading="lazy" decoding="async" alt="Gigatop Visual Critic in einem geprüften Demo-Systemzustand mit lokaler Bildprüfung" /><figcaption><span>GIGATOP SYSTEMZUSTAND</span><small>VISUAL CRITIC · DEMO-DATEN · HUMAN REVIEW</small></figcaption></figure>
    </aside>
  </section>;
}

function FinalCTA() {
  return <section className="scene final-cta" id="kontakt" aria-labelledby="cta-title">
    <div className="cta-rule" aria-label="Ihre Systeme werden durch Gigatop AI mit Ihrer Freigabe verbunden"><span className="cta-input">Ihre Systeme</span><i>G</i><b aria-hidden="true" /><span className="cta-output">Ihre Freigabe</span></div>
    <div className="cta-content">
      <h2 id="cta-title">Wo würde AI in Ihrem Unternehmen den grössten Unterschied machen?</h2>
      <p>Ein konkretes AI-Potenzial. Ein klarer nächster Schritt. Persönlich und diskret.</p>
      <a className="action-link final-action" aria-label="AI-Potenzial in einem persönlichen Gespräch klären" href="mailto:top@gigatop.io?subject=AI-Potenzial%20klären"><span>AI-Potenzial klären</span><ArrowUpRight aria-hidden="true" /></a>
      <small>Persönliches Gespräch · keine automatische Analyse</small>
    </div>
    <footer><Wordmark /><span>Private AI · Switzerland</span><span>Deutsch <b>DE</b> / EN</span></footer>
  </section>;
}

export function HomepageV3() {
  return <main><Hero /><BusinessReality /><ProductProof /><PrivateAI /><Solutions /><Infrastructure /><HowWeBuild /><FinalCTA /></main>;
}
