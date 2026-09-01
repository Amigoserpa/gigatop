# DESIGN.md — Gigatop V2 Design System

## Design Direction

**Mediterranean Technology**
Swiss precision × Mediterranean energy × AI systems

## Color Tokens

### Primary Backgrounds
| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#102A33` | Main page background (dark), `#FAFAF8` (light) |
| `--bg-secondary` | `#0E2229` | Section backgrounds, alternate areas |
| `--bg-elevated` | `#142C35` | Cards, elevated surfaces |

### Surfaces
| Token | Hex | Usage |
|---|---|---|
| `--surface` | `#183340` | Card backgrounds, inputs |
| `--surface-hover` | `#1D3A48` | Hover states on surfaces |

### Borders
| Token | Hex | Usage |
|---|---|---|
| `--border` | `rgba(240, 235, 226, 0.07)` | Default borders |
| `--border-strong` | `rgba(240, 235, 226, 0.14)` | Stronger borders |
| `--border-accent` | `rgba(214, 107, 69, 0.2)` | Accent borders (CTAs, featured items) |

### Accent — Terracotta
| Token | Hex | Usage |
|---|---|---|
| `--accent` | `#D66B45` | Primary accent, CTA buttons |
| `--accent-hover` | `#E07850` | Hover state |
| `--accent-glow` | `rgba(214, 107, 69, 0.2)` | Shadow/glow effects |
| `--accent-muted` | `rgba(214, 107, 69, 0.08)` | Muted backgrounds |

### Sage / Olive
| Token | Hex | Usage |
|---|---|---|
| `--olive` | `#78866B` | Secondary accent, categories |
| `--olive-glow` | `rgba(120, 134, 107, 0.12)` | Secondary glow |

### Text
| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#F6F1E8` | Headlines, primary text |
| `--text-secondary` | `rgba(246, 241, 232, 0.55)` | Body text, descriptions |
| `--text-tertiary` | `rgba(246, 241, 232, 0.32)` | Captions, timestamps |

### Light Mode (prefers-color-scheme: light)
| Token | Light Value |
|---|---|
| `--bg-primary` | `#FAFAF8` |
| `--bg-secondary` | `#F4F2EE` |
| `--bg-elevated` | `#FFFFFF` |
| `--surface` | `#EDEAE4` |
| `--accent` | `#C4583E` |
| `--text-primary` | `#1A1A1A` |
| `--text-secondary` | `rgba(26, 26, 26, 0.6)` |
| `--border` | `rgba(0, 0, 0, 0.06)` |

## Typography

### Font Stack
```
Geist — Primary sans-serif
SF Mono — Labels, code, mono elements
```

### Scale
| Element | Size | Weight | Line Height |
|---|---|---|---|
| H1 | clamp(2.75rem, 6vw, 5rem) | 700 | 1.05 |
| H2 | clamp(1.75rem, 4vw, 3rem) | 700 | 1.1 |
| H3 | clamp(1.25rem, 2vw, 1.5rem) | 700 | 1.1 |
| H4 | 1.125rem | 600 | 1.1 |
| Body | 1.0625rem | 400 | 1.65 |
| Large | clamp(1.125rem, 1.5vw, 1.25rem) | 400 | 1.6 |
| Label/Mono | 0.75rem | 500 | 1 |

### Typeface Rules
- Display type: Geist Bold 700
- Body: Geist Regular 400
- Mono labels: Geist Mono (fallback: SF Mono)
- Italic accent: `font-style: italic; color: var(--accent); font-weight: 500`
- Letter tracking: `-0.035em` for headlines
- Mono letter tracking: `0.08em` for uppercase labels

## Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | 0.25rem | Tight spacing |
| `--space-sm` | 0.5rem | Small gaps |
| `--space-md` | 1rem | Component spacing |
| `--space-lg` | 1.5rem | Section internal |
| `--space-xl` | 2rem | Container padding |
| `--space-2xl` | 3rem | Section gaps |
| `--space-3xl` | 5rem | Large sections |
| `--space-4xl` | 7rem | Page sections |
| `--space-5xl` | 9rem | Hero/manifesto |

## Radius

| Token | Value |
|---|---|
| `--radius` | 12px |

Rule: Consistent 12px radius on all interactive elements, cards, buttons, modals.

## Shadow System

| Element | Shadow |
|---|---|
| Cards | None (border-based elevation) |
| Hero visual | `0 24px 80px rgba(0, 0, 0, 0.3)` |
| Architecture | `0 32px 100px rgba(0, 0, 0, 0.25)` |
| CTA hover | `0 8px 32px var(--accent-glow)` |
| Button hover | `0 8px 32px var(--accent-glow)` |

## Easing

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | General UI animations |
| `--ease-out-strong` | `cubic-bezier(0.23, 1, 0.32, 1)` | Stronger exits |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | On-screen transitions |

## Motion Tokens

| Element | Duration | Easing | Purpose |
|---|---|---|---|
| Button press | 160ms | ease-out | Tactile feedback |
| Button hover | 200ms | ease-out | State transition |
| Nav hide/show | 200ms | ease-out | Spatial awareness |
| Scroll reveal | 700ms | ease-out | Content discovery |
| Stagger items | 500ms | ease-out | Sequence |
| Modal open | 250ms | ease-out | State transition |
| FAQ toggle | 350ms/250ms | ease-out | Spatial + content |
| Card hover | 200ms | ease-out | Interactive feedback |
| Scroll reveal stagger | 80ms intervals | ease-out | Cascade sequence |
| Reduced motion | 0ms | none | Accessibility |

## Breakpoint Strategy

| Token | Value | Device Class |
|---|---|---|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Laptops, small desktops |
| `xl` | 1280px | Standard desktops |
| `2xl` | 1536px | Wide desktops |

## Layout

### Container
- Max width: 1280px
- Narrow container: 720px (for text-heavy sections)
- Horizontal padding: 32px (2rem)

### Grid Patterns
- Asymmetric split: `1.1fr 0.9fr` or `0.85fr 1.15fr`
- Equal split: `1fr 1fr`
- Single column (mobile): `1fr`

## Icon Rules

- Emoji-based for the V2 prototype (fast, no dependencies)
- Future: Phosphor Icons or HugeIcons for production
- Standard icon size: 24px
- No hand-rolled SVGs in V2 prototype

## Visual Rules

1. No cards for everything. Use spreads, lines, editorial layouts.
2. Accent color only on CTAs, labels, and key highlights.
3. Borders over shadows for elevation.
4. Gradient tints on visual areas only.
5. Mono font for labels, status, technical elements.
6. Sans font for all body and headlines.
7. One theme (dark primary, light secondary via prefers-color-scheme).
8. Reduced motion honored everywhere.
9. No em-dashes. Use commas, periods, or line breaks.
10. Visual density: medium. Premium and informative but not overwhelming.

## Design Patterns Used

### Layout A: Editorial Statement
- Full-width centered text
- No cards
- Italic accent for key words

### Layout B: Asymmetric Problem
- 1.3fr main / 0.7fr asides
- Border-top accent on aside cards

### Layout C: Spread Alternating
- Text + visual on alternating sides
- Gradient tint on visual side

### Layout D: Layered Stack
- Architecture visualization
- Monotonic stack layout

### Layout E: Timeline
- Numbered steps
- Vertical line connector

### Layout F: Comparison
- Side-by-side cards
- Featured card with accent border

### Layout G: Final CTA
- Dark section, centered
- Large typography
- Dual buttons

## Anti-Patterns (Enforced)

- No generic AI-purple gradients
- No card-grid everything
- No glassmorphism
- No robotic stock imagery
- No "Revolutionieren Sie Ihr Business"
- No Inter as default font
- No em-dashes (— or –)
- No fake customer logos
- No AI-slop visuals
- No version labels in hero (V0.6, BETA)
- No scroll cues ("Scroll to explore")
- No decoration text strips at hero bottom
- No section-numbering eyebrows