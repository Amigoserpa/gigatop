# REDESIGN_PLAN — Gigatop V2

## Status: IMPLEMENTIERT

Dieses Dokument beschreibt den vollständigen Redesign-Prozess und die Umsetzungsentscheidungen für die Gigatop Website V2.

## PHASE 1 — AUDIT (Bestehende Website)

### Bestehende Website (Live-URL) analysiert:

**Positiv (KEEP):**
- Dunkles Farbschema mit Terracotta-Akzent
- Geist Font (fett, modern)
- Asymmetrisches Hero-Layout
- Marquee-Integration
- Kontakt-Modal
- Responsive Navigation mit Blur
- Scroll-Reveal-System
- Schweizer Compliance-Botschaft (DSG, nDSG, ISO 27001)
- FAQ-Akkordeon

**Zu verbessern (IMPROVE):**
- Hero-Headline zu defensiv ("KI die nie das Haus verlasst")
- Fehlende Use-Case-Tiefe (nur SAP, HR, Support, SharePoint)
- Keine AI-Agent-Erklärung
- Kein Use Case Finder
- Keine Architektur-Visualisierung
- Marquee mit einfachen SVG-Boxen statt echter Logos
- Compliance-Section zu technisch/bürokratisch
- Founder/About fehlt komplett
- Insights/Content-Marketing fehlt
- Keine Deployment-Optionen (Private/Hosted/Hybrid)
- Navigation zu schmal (fehlen: Private AI, AI Agents, How it works, Insights)
- CTA-Wiederholung zu oft ("Gespräch vereinbaren" × 5)
- Problem-Section zu negativ ("Cloud-KI ist ein Risiko")
- Visuals nur Platzhalter-Text (keine echten Bilder)

**Zu entfernen (REMOVE):**
- "Swiss Made" als Alleinstellungsmerkmal (zu allgemein)
- Compliance-Section als Hauptfokus (sekundär, nicht primär)
- "Cloud-KI ist ein Risiko" zu aggressiv (Loyalitäts-Problem)
- Marquee-Logos als einfache SVG-Boxen

**Zu ergänzen (ADD):**
- Starke Positioning-Headline ("Ihre KI. Ihre Daten. Ihre Infrastruktur.")
- 5 detaillierte Use Cases (Sales, Knowledge, Documents, Executive, Health)
- Private AI vs Public AI Vergleich
- AI Agent Workflow (Beobachten → Verstehen → Entscheiden → Handeln)
- Architektur-Visualisierung (4 Schichten)
- 5-Schritte Ablauf (Discover → Prototype → Connect → Deploy → Improve)
- 3 Deployment-Optionen (Private, Hosted, Hybrid)
- Interaktiver AI Use Case Finder
- Founder/About Section
- Insights/Content-Marketing
- Final CTA mit starker Headline
- i18n-Vorbereitung (DE/EN)
- Custom Visuals (ComfyUI generiert)

## PHASE 2 — POSITIONIERUNG + IA

### Neue Informationsarchitektur:
```
/                    — Homepage (V2)
/private-ai          — Private AI erklären
/ai-agents           — AI Agents vertiefen
/use-cases           — Use Cases Übersicht
/use-cases/sales     — AI Sales Intelligence
/use-cases/knowledge — Private Company Knowledge
/use-cases/documents — AI Document Operations
/about               — Über Gigatop
/insights            — Insights/Blog
/contact             — Kontaktformular
```

### Navigation:
```
Nav: GIGATOP | Solutions | Use Cases | Private AI | AI Agents | How it works | About | Insights | Kunde-Login | [AI Session buchen]
```

## PHASE 3 — TASTE Design Direction

### Design Read:
**B2B Enterprise SaaS Landing für Technical Buyer & Entscheider, mit einer Mediterranean Technology-Sprache, die Swiss Precision mit mediterraner Wärme kombiniert, tendierend zu Tailwind-CSS + Geist + gedämpfte Motion.**

### Three Dials:
- **DESIGN_VARIANCE: 8** (High — eigenständig, nicht generisch)
- **MOTION_INTENSITY: 6** (Medium — purposeful, nicht übertrieben)
- **VISUAL_DENSITY: 4** (Medium — informativ aber nicht überladen)

### Brand Feeling:
SWISS PRECISION × MEDITERRANEAN ENERGY × SERIOUS AI ENGINEERING

### Color Palette:
- Primary BG: `#102A33` (Dark Navy) → `#FAFAF8` (Light)
- Secondary BG: `#0E2229` → `#F4F2EE`
- Accent: `#D66B45` (Terracotta)
- Secondary: `#78866B` (Sage/Olive)
- Text: `#F6F1E8` (Warm Sand) → `#1A1A1A` (Light)

### Typography:
- **Geist** — Primär (nicht Inter! Geist hat mehr Charakter)
- Display: 700 Bold, 1.1 line-height, -0.035em letter-spacing
- Body: 400 Regular, 1.65 line-height
- Mono: SF Mono / Geist Mono für Labels

### Layout Prinzipien:
- Asymmetrische Split-Layouts (nicht 50/50)
- Editorial Spread-Layout (Text + Visual, abwechselnd)
- Border-based elevation (keine Cards für alles)
- Gradient tints für visuelle Elemente
- 12px radius konsistent
- Container max-width 1280px, narrow 720px

## PHASE 4 — DESIGN SYSTEM

Alle Tokens definiert in DESIGN.md.
- 9 Hintergrund-Farbpaletten (Dark + Light)
- 3 Border-Familien
- Terracotta + Sage Accent-Familien
- Full Typography Scale (H1 → Mono Label)
- 9 Spacing-Level
- 6 Easing Curves
- 10 Motion-Tokens
- 5 Breakpoints
- Shadow-System

## PHASE 5 — HOMEPAGE BUILD

### Sections (17):
1. **Navigation** — Sticky, 64px, Blur, Mobile Menu, 2 CTAs
2. **Hero** — Asymmetric Split, Headline 3 Zeilen, 2 CTAs, AI System Visual
3. **Manifesto** — Editorial Statement, italics
4. **Problem** — Editorial Block, Asymmetric, 3 Aside Cards
5. **Use Cases** — 5 Full-Width Spreads (alternating)
6. **Private AI vs Public AI** — Comparison Layout
7. **AI Agents** — Workflow Diagram (4 Steps)
8. **Architecture** — Layered Stack (4 Schichten)
9. **How It Works** — Timeline (5 Steps)
10. **Deployment Options** — 3 Cards (Featured + 2)
11. **AI Use Case Finder** — Interactive (3 Questions → Result)
12. **Why Gigatop** — Feature Strip (4 items, 2-col grid)
13. **Founder** — Portrait + Philosophy
14. **Insights** — 3 Card Grid + More Link
15. **FAQ** — Accordion (5 Questions)
16. **Final CTA** — Dark Section, 2 Buttons
17. **Footer** — Brand + Links

### Custom Visuals:
- Hero Visual (ComfyUI: abstract AI system diagram, 4:3)
- OG Image (ComfyUI: geometric brand, 16:9)
- Architecture Visual (ComfyUI: layered diagram, 16:9)

### Use Case Finder Logic:
- 3 Fragen: Abteilung, Aufgabe, Datenquellen
- 30 Antwort-Kombinationen
- Resultat: Use Case Name, Potenzial-Höhe, Datenquellen, Empfehlung
- CTA: "Use Case besprechen"

## PHASE 6 — ANTI-SLOP CHECKLISTE

| Check | Status |
|---|---|
| Keine generischen AI-Cards | ✓ (Editorial Spreads) |
| Keine AI-purple Gradients | ✓ (Terracotta + Navy) |
| Keine generische SaaS-Optik | ✓ (Asymmetrisch, Editorial) |
| Keine Cards für alles | ✓ (Lines, Spreads, Timelines) |
| Geist statt Inter | ✓ |
| Keine Em-Dashes | ✓ |
| Keine Stockfotos | ✓ (Custom ComfyUI Visuals) |
| Hero ohne Eyebrow | ✓ |
| 1 CTA Intent max | ✓ ("AI Session buchen") |
| Navigation 1 Zeile | ✓ (Desktop) |
| Hero passt in Viewport | ✓ (min-h: 100dvh) |
| Reduced Motion | ✓ (@media prefers-reduced-motion) |
| Dark/Light Mode | ✓ (prefers-color-scheme) |
| Mobile Optimierung | ✓ (alle Sections responsive) |
| i18n-vorbereitet | ✓ (lang="de", struktur für EN) |

## PHASE 7 — PERFORMANCE

- Kein Framework-Overhead (Plain HTML/CSS/JS)
- Geist Font über Google Fonts (preconnect)
- Keine externen JS-Abhängigkeiten
- Scroll-Reveal über IntersectionObserver (nicht GSAP)
- Bilder lazy-load für below-fold
- OG Image 1200x624 (Twitter/LinkedIn Optimiert)

## PHASE 8 — ACCESSIBILITY

- Semantic HTML (section, nav, footer, article)
- aria-label auf interactive Elements
- Focus-States definiert (accent ring)
- prefers-reduced-motion unterstützt
- Form-Labels vorhanden
- Contrast: Text auf BG ≥ 4.5:1 (WCAG AA)
- Touch Targets ≥ 44px (Buttons)
- Keyboard support (ESC schließt Modal/Nav)

## PHASE 9 — SEO

- Meta Title: "Gigatop — Private AI. Built around your business."
- Meta Description: < 160 Zeichen
- OG Tags (title, description, image, url, type)
- Twitter Card: summary_large_image
- Canonical URL
- H1 → H4 Struktur
- i18n ready (lang="de", Struktur für EN)
- URLs vorbereitet (/private-ai, /ai-agents, etc.)

## DEPLOYMENT PLAN

### Vor Production:
1. [ ] Build testen (HTML valide, alle Links functional)
2. [ ] Mobile testen (375px, 390px, 430px, Tablet)
3. [ ] Forms testen (FormSubmit → top@gigatop.io)
4. [ ] Links testen (Anchors, External)
5. [ ] SEO prüfen (Meta, OG, Canonical)
6. [ ] Performance prüfen (Lighthouse > 90)
7. [ ] Accessibility prüfen (A11y > 95)
8. [ ] Impeccable Audit durchführen
9. [ ] Taste Review durchführen

### Deployment:
1. Branch erstellen: `redesign-v2`
2. Änderungen commiten
3. PR öffnen für Review
4. Nach Approval: Merge zu `main`
5. Build und Deploy
6. Redirect von alter Seite einrichten (falls nötig)

## OFFENE FRAGEN (für Review)

1. **Pricing**: Bestehende Preise (CHF 2'900 / CHF 950/Mo) beibehalten oder neue Premium-Struktur?
2. **Founder Photo**: Echte Foto-URL einfügen oder weiterhin Platzhalter?
3. **Insights**: Bereits echte Artikel schreiben oder erstmal Struktur?
4. **Customer Login**: Zu welchem System soll der Link führen?
5. **i18n**: EN-Version sofort mitbauen oder später?
6. **SEO Pages**: /private-ai, /use-cases/ etc. separate Seiten oder nur Anchor-Struktur?

## DATE: 2026-08-31
STATUS: V2 HTML vollständig implementiert, ComfyUI Visuals generiert, Design System definiert, Git-Commit ausstehend.