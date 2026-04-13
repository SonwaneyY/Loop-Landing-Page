# Loop — Illustration Style Guide & Visual Recommendations
*Analysed against Chroma (chroma-anchor-50191106.figma.site). April 2026.*

---

## Part 1 — Chroma Illustration System Analysis

### Visual Language Summary

Chroma uses a **geometric, abstract, minimal** illustration system. No characters. No scenes. No raster images. The entire visual language is built from:

1. CSS-based structural illustrations (orbital rings)
2. Lucide icon library in tinted container badges
3. A custom SVG logo mark
4. Decorative SVG quote marks
5. Radial CSS gradient glows as ambient atmosphere

This is a deliberate choice for a B2B AI product: abstract geometry reads as *systematic* and *intelligent*, not playful or decorative.

---

### What Chroma Has — Catalogued

#### 1. Hero Illustration — CSS Orbital Ring System
Four concentric CSS circles (`border-indigo-500`, `rounded-full`, `absolute`):
- Ring 1: 280×280px
- Ring 2: 420×420px
- Ring 3: 560×560px
- Ring 4: 700×700px

Small glowing dot nodes sit at orbit intersection points (small `w-1.5 h-1.5 rounded-full bg-indigo-400` elements with `animate-pulse`). The headline sits at the centre of the rings, making the text itself feel like the nucleus of a system.

**Why it works for Loop:** The product is literally called Loop — concentric circles are semantically perfect. This is the strongest visual metaphor available.

#### 2. Custom SVG Logo Mark
A 28×28px SVG with three paths:
- Dashed outer ring: `r=12`, `stroke-dasharray="4 2"`, `opacity-40`
- Solid inner circle: `r=7`, `stroke="#818cf8"`
- Arc sweep: `M14 7 A7 7 0 0 1 21 14` — a partial arc showing motion/rotation

Used in the nav. Far more expressive than a static CSS dot.

#### 3. Icon-in-Container System (the core visual workhorse)
Every feature/stage/section uses **Lucide icons inside tinted rounded-xl containers**. The container provides colour context; the icon provides meaning.

| Section | Icon | Container colour | Size |
|---|---|---|---|
| Stage 01 Setup | `book-open` | `bg-indigo-500/10` | `w-10 h-10 rounded-xl` |
| Stage 02 Analyze | `scan-eye` | `bg-blue-500/10` | `w-10 h-10 rounded-xl` |
| Stage 03 Outreach | `send` | `bg-purple-500/10` | `w-10 h-10 rounded-xl` |
| Stage 04 Converses | `messages-square` | `bg-pink-500/10` | `w-10 h-10 rounded-xl` |
| Legal: Encrypted | `lock-keyhole` | `bg-indigo-500/10` | `w-9 h-9 rounded-xl` |
| Legal: Regenerated | `shuffle` | `bg-violet-500/10` | `w-9 h-9 rounded-xl` |
| Legal: Auditable | `file-clock` | `bg-blue-500/10` | `w-9 h-9 rounded-xl` |
| Impact: Brand | `shield` | `bg-violet-500/10` | `w-11 h-11 rounded-xl` |
| Impact: Pipeline | `refresh-cw` | `bg-indigo-500/10` | `w-11 h-11 rounded-xl` |
| Impact: Team | `users` | `bg-blue-500/10` | `w-11 h-11 rounded-xl` |
| Integration: API | `plug-zap` | `bg-indigo-500/10` | `w-10 h-10 rounded-xl` |
| Integration: Setup | `refresh-cw` | `bg-blue-500/10` | `w-10 h-10 rounded-xl` |
| Integration: Scale | `chart-column` | `bg-purple-500/10` | `w-10 h-10 rounded-xl` |

**The pattern:** Each stage/card gets one icon + one colour. Colours rotate across indigo → blue → purple → pink — avoiding monochrome while staying within a cool-tone palette.

#### 4. Decorative Quote SVGs
Custom SVG quotation marks (w-6 h-4) above testimonial quotes. Simple, editorial, adds visual weight to the voices section without competing with the text.

#### 5. Interactive Integration Element
A `plus` icon in a `rounded-full border border-slate-200` circle with `group-hover:border-indigo-300` — used in the integration/ATS section as a connection node visual.

---

### Chroma Illustration Style Properties

| Property | Value |
|---|---|
| **Style** | Geometric, abstract, minimal |
| **Dimensionality** | Flat (2D). No shadows, no 3D. |
| **Stroke weight** | Lucide default: 2px |
| **Corner radius** | Icons: none. Containers: `rounded-xl` (12px). Hero rings: `rounded-full`. |
| **Colour palette** | Indigo, blue, purple, pink (all at 10% bg, 100% icon) |
| **Primary illustration colour** | `#818cf8` (indigo-400), `#a5b4fc` (indigo-300) |
| **Background treatment** | `slate-950` dark sections + radial indigo glow |
| **Characters** | None |
| **Raster images** | None |
| **Animation** | `animate-pulse` on hero dots only |
| **Icon library** | Lucide (open source, MIT) |

---

## Part 2 — Loop Gap Analysis

### Current State

Loop's `index.html` currently has:
- **0 icons** in any section — no Lucide, no custom SVGs
- **CSS dot only** for the `○ loop` wordmark — no proper SVG logo mark
- **Static radial gradients** on hero and insight sections — no geometric illustration
- **Number badges** (01–04) on stage cards, but no icons
- **Text-only cards** throughout — no visual hierarchy between label and content

Every section is currently **text-on-background**. There is no visual layer between copy and container.

### Gap Table

| Visual Element | Chroma | Loop | Gap |
|---|---|---|---|
| Hero orbital illustration | ✓ CSS rings, glowing nodes | Radial gradient glow only | HIGH |
| Logo mark SVG | ✓ Custom dashed arc SVG | CSS dot | MEDIUM |
| Stage card icons | ✓ Lucide in tinted containers | Number badges only | HIGH |
| Feature card icons | ✓ All cards have icons | No icons anywhere | HIGH |
| ATS comparison diagram | ✓ Two-column visual | Text only in insight section | HIGH |
| Testimonial decorators | ✓ Quote mark SVGs | Plain blockquote | LOW |
| Section ambient glow | ✓ Indigo radial on dark sections | ✓ Already present | — |
| Interactive diagram nodes | ✓ Plus icons in circle borders | ATS tag pills (partial) | MEDIUM |

---

## Part 3 — Recommendations

### Recommendation 1 — Hero Orbital Ring System

**Priority: HIGH**
**Where:** `#hero` section, behind all content

The product name is Loop. Four concentric CSS circles centred on the page is the most semantically precise illustration Loop could have. The headline sits at the nucleus. The rings communicate: continuous, automated, always-on.

**Implementation — pure CSS/HTML:**
```html
<!-- Add inside #hero, before .hero-content div -->
<div class="hero-rings" aria-hidden="true">
  <div class="hero-ring ring-1"></div>
  <div class="hero-ring ring-2"></div>
  <div class="hero-ring ring-3"></div>
  <div class="hero-ring ring-4"></div>
  <!-- Orbit nodes -->
  <div class="orbit-node" style="top:6%;left:50%"></div>
  <div class="orbit-node" style="top:50%;right:4%"></div>
  <div class="orbit-node" style="bottom:10%;left:46%"></div>
  <div class="orbit-node orbit-node--coral" style="top:38%;left:5%"></div>
</div>
```

```css
/* Hero rings */
.hero-rings {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;
}

.hero-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(79,70,229,0.2);
}

.ring-1 { width: 300px;  height: 300px; }
.ring-2 { width: 480px;  height: 480px; border-color: rgba(79,70,229,0.15); }
.ring-3 { width: 660px;  height: 660px; border-color: rgba(79,70,229,0.09); }
.ring-4 { width: 840px;  height: 840px; border-color: rgba(79,70,229,0.05); }

.orbit-node {
  position: absolute;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: rgba(79,70,229,0.7);
  transform: translate(-50%, -50%);
}

.orbit-node--coral {
  background: rgba(249,115,22,0.6);
}

@media (prefers-reduced-motion: reduce) {
  .orbit-node { animation: none; }
}

@media (max-width: 640px) {
  .ring-3, .ring-4 { display: none; }
  .ring-1 { width: 260px; height: 260px; }
  .ring-2 { width: 360px; height: 360px; }
}
```

**Notes:**
- Rings are `position: absolute` with the hero as relative parent — already set
- `z-index: 0` keeps rings behind `hero-content` (`z-index: 1` already set)
- Add `animate-pulse` from micro-interactions spec to orbit nodes
- The coral node (one dot in `--coral`) introduces the brand's second colour into the hero — makes the accent colour feel structural

---

### Recommendation 2 — Upgrade the Logo Mark SVG

**Priority: MEDIUM**
**Where:** `.nav-logo` and `.footer-logo`

Replace the CSS `loop-dot` with a proper inline SVG that expresses the Loop concept — a partial arc around an inner circle, matching Chroma's own implementation for this product.

```html
<!-- Replace the <span class="loop-dot"> with: -->
<svg class="loop-mark" viewBox="0 0 28 28" width="22" height="22" fill="none" aria-hidden="true">
  <circle cx="14" cy="14" r="12"
    stroke="#4F46E5" stroke-width="1.5"
    stroke-dasharray="4 2" opacity="0.4"/>
  <circle cx="14" cy="14" r="7"
    stroke="#4F46E5" stroke-width="1.5"/>
  <path d="M14 7 A7 7 0 0 1 21 14"
    stroke="#4F46E5" stroke-width="2"
    stroke-linecap="round"/>
</svg>
```

```css
.loop-mark {
  flex-shrink: 0;
}

/* Footer variant — slightly smaller */
.footer-logo .loop-mark {
  width: 18px;
  height: 18px;
}
```

---

### Recommendation 3 — Icon-in-Container System for All Cards

**Priority: HIGH**
**Where:** Stage cards, Who-cards, Legal cards — every card that currently has only text

**Icon assignments (Loop-specific):**

| Section | Card | Icon | Container colour |
|---|---|---|---|
| How It Works | 01 Training | `database` | `indigo-500/10` |
| How It Works | 02 Evaluation Co-Pilot | `brain-circuit` | `blue-500/10` |
| How It Works | 03 AI Agent | `send` | `violet-500/10` |
| How It Works | 04 Conversation Manager | `messages-square` | `pink-500/10` |
| What Loop Protects | Employer brand | `shield-check` | `indigo-500/10` |
| What Loop Protects | Talent pipeline | `refresh-cw` | `blue-500/10` |
| What Loop Protects | Recruiting team | `users` | `violet-500/10` |
| Legal | Encrypted at source | `lock-keyhole` | `indigo-500/10` |
| Legal | Regenerated, not forwarded | `shuffle` | `violet-500/10` |
| Legal | Auditable by default | `file-clock` | `blue-500/10` |

**Implementation — CSS:**
```css
.card-icon {
  width: 44px; height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.card-icon svg {
  width: 20px;
  height: 20px;
  stroke-width: 1.75;
}

/* Light section icon containers */
.card-icon--indigo { background: rgba(79,70,229,0.08);  color: #4F46E5; }
.card-icon--blue   { background: rgba(59,130,246,0.08); color: #3B82F6; }
.card-icon--violet { background: rgba(139,92,246,0.08); color: #8B5CF6; }
.card-icon--pink   { background: rgba(236,72,153,0.08); color: #EC4899; }

/* Dark section icon containers (legal cards) */
.legal-card .card-icon--indigo { background: rgba(79,70,229,0.12); color: #818cf8; }
.legal-card .card-icon--violet { background: rgba(139,92,246,0.12); color: #a78bfa; }
.legal-card .card-icon--blue   { background: rgba(59,130,246,0.12); color: #60a5fa; }
```

**Implementation — HTML example (stage card):**
```html
<div class="stage-card">
  <div class="card-icon card-icon--indigo">
    <!-- Lucide database icon — paste SVG path inline -->
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  </div>
  <div class="stage-number">01</div>
  <div class="stage-name">Setup</div>
  <div class="stage-title">Training</div>
  <p class="stage-body">...</p>
</div>
```

**Icon source:** https://lucide.dev — all MIT licensed, paste paths directly, no library needed.

---

### Recommendation 4 — ATS vs Loop Visual Comparison Diagram

**Priority: HIGH**
**Where:** Replace the text-heavy insight section body with a two-column visual

Currently the insight section says: *"ATS tools track who moves forward. None of them manage what you leave behind."* — but it's entirely text. Chroma uses a side-by-side comparison table to make this argument visually.

**Implementation — HTML:**
```html
<div class="comparison-grid">
  <div class="comparison-col comparison-col--neutral">
    <div class="comparison-col-header">
      <span class="comparison-label">Your ATS</span>
    </div>
    <ul class="comparison-list">
      <li class="comparison-item comparison-item--check">Candidate tracking & pipeline stages</li>
      <li class="comparison-item comparison-item--check">Interview scheduling & coordination</li>
      <li class="comparison-item comparison-item--check">Offer management & onboarding</li>
      <li class="comparison-item comparison-item--cross">Post-rejection candidate journey</li>
    </ul>
    <p class="comparison-gap">The rejected candidate journey: not covered.</p>
  </div>

  <div class="comparison-col comparison-col--loop">
    <div class="comparison-col-header">
      <span class="comparison-label comparison-label--loop">○ loop</span>
    </div>
    <ul class="comparison-list">
      <li class="comparison-item comparison-item--check">Personalized rejection outreach — automatically</li>
      <li class="comparison-item comparison-item--check">Candidate reply threads managed to closure</li>
      <li class="comparison-item comparison-item--check">Every conversation logged back to your ATS</li>
    </ul>
    <p class="comparison-gap comparison-gap--loop">The gap no other tool touches.</p>
  </div>
</div>
```

**Implementation — CSS:**
```css
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 48px;
  max-width: 760px;
}

.comparison-col {
  border-radius: var(--radius-lg);
  padding: 28px 32px;
}

.comparison-col--neutral {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
}

.comparison-col--loop {
  background: rgba(79,70,229,0.08);
  border: 1px solid rgba(79,70,229,0.25);
}

.comparison-col-header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.comparison-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.comparison-label--loop { color: var(--indigo-light); }

.comparison-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.comparison-item {
  font-size: 14px;
  color: rgba(255,255,255,0.65);
  line-height: 1.5;
  padding-left: 22px;
  position: relative;
}

.comparison-item::before {
  position: absolute;
  left: 0;
  font-weight: 700;
  font-size: 13px;
}

.comparison-item--check::before { content: '✓'; color: var(--success); }
.comparison-item--cross::before { content: '✗'; color: rgba(239,68,68,0.7); }

.comparison-gap {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.35);
  font-style: italic;
}

.comparison-gap--loop { color: rgba(165,180,252,0.7); }

@media (max-width: 640px) {
  .comparison-grid { grid-template-columns: 1fr; }
}
```

---

### Recommendation 5 — Testimonial Quote Decorators

**Priority: LOW**
**Where:** `#voices` quote cards

Add a large decorative SVG quotation mark above each quote — gives the testimonial cards visual weight and editorial character.

```html
<!-- Add at top of each <figure> in #voices -->
<svg class="quote-mark" viewBox="0 0 24 18" fill="none" aria-hidden="true">
  <path d="M0 18V11.1C0 4.95 3.45 1.2 10.35 0L11.7 2.1C8.85 2.85 7.2 4.65 6.75 7.5H10.5V18H0ZM13.5 18V11.1C13.5 4.95 16.95 1.2 23.85 0L25.2 2.1C22.35 2.85 20.7 4.65 20.25 7.5H24V18H13.5Z" fill="currentColor"/>
</svg>
```

```css
.quote-mark {
  width: 20px;
  height: 15px;
  color: var(--indigo);
  opacity: 0.35;
  margin-bottom: 16px;
}
```

---

### Recommendation 6 — Section Divider Illustration (Insight Dark Section)

**Priority: MEDIUM**
**Where:** `#insight` dark section — currently has a coral radial gradient

Add a subtle horizontal grid/circuit line pattern as a background texture to the dark sections — gives them visual depth without competing with the text.

```css
#insight, #legal {
  background-image:
    linear-gradient(rgba(79,70,229,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79,70,229,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

This is a single CSS rule — no images, no extra elements. Creates the "structured system" feeling that matches Loop's B2B positioning.

---

## Part 4 — Illustration Style Specification for Loop

### Defined Style Properties

| Property | Loop Value |
|---|---|
| **Style** | Geometric, abstract, systematic |
| **Dimensionality** | Flat (2D). No shadows, no 3D depth. |
| **Stroke weight** | 1.75px (icons), 1px–1.5px (structural rings) |
| **Corner radius** | Icon containers: 10px. Hero rings: 50% (circles). |
| **Primary illustration colour** | `#4F46E5` indigo — structural elements |
| **Secondary accent** | `#F97316` coral — one orbit node, one highlight |
| **Icon tints** | Indigo, blue, violet, pink — rotating per stage |
| **Background treatment** | Dark sections: radial glow + optional grid texture |
| **Characters** | None — systemic abstraction only |
| **Raster images** | None |
| **Animation** | Pulse on orbit nodes only (see micro-interactions spec) |
| **Icon library** | Lucide (MIT) — paste SVG paths inline, no CDN |

### When to Use Illustration
- **Use:** To represent an abstract process (the loop concept, the orbital rings)
- **Use:** As a category icon for a feature card (icon-in-container)
- **Use:** As a decorative anchor in quote/testimonial cards
- **Do not use:** To illustrate people, characters, or scenes
- **Do not use:** Photography or raster images
- **Do not use:** 3D, gradient-filled icons, or drop shadows on icons

### Icon Colour Assignment Rules
1. Assign colours in the order: indigo → blue → violet → pink (per group of 4 stages)
2. Never use coral/orange for icons — reserve coral for stat callouts and closing statements
3. On dark sections, use the lighter tint variant (`/12` opacity containers, `-300` to `-400` icon colour)
4. Keep containers at exactly 8–12% opacity — never solid colour fills

---

## Part 5 — Prioritised Implementation Checklist

### Do first (copy-paste, no design tools needed)
- [ ] Add hero orbital ring CSS and HTML
- [ ] Add `card-icon` CSS system
- [ ] Add Lucide icons to all 4 stage cards (paste SVG paths from lucide.dev)
- [ ] Add Lucide icons to 3 who-cards (Impact section)
- [ ] Add Lucide icons to 3 legal-cards
- [ ] Upgrade `.loop-dot` to SVG logo mark in nav and footer

### Do second (requires layout changes)
- [ ] Add ATS vs Loop comparison grid to insight section
- [ ] Add quote mark SVGs to testimonial cards
- [ ] Add Lucide icons to 3 ATS integration cards

### Do third (polish)
- [ ] Add grid texture to dark sections (`#insight`, `#legal`)
- [ ] Add coral orbit node to hero rings
- [ ] Add `animate-pulse` to orbit nodes (coordinate with micro-interactions spec)

---

## Appendix — Icon SVG Paths (Lucide, paste-ready)

### `send` (Stage 03 — AI Agent)
```svg
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
<path d="m21.854 2.147-10.94 10.939"/>
```

### `messages-square` (Stage 04 — Conversation Manager)
```svg
<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/>
<path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
```

### `lock-keyhole` (Legal — Encrypted)
```svg
<circle cx="12" cy="16" r="1"/>
<rect x="3" y="10" width="18" height="12" rx="2"/>
<path d="M7 10V7a5 5 0 0 1 10 0v3"/>
```

### `shuffle` (Legal — Regenerated)
```svg
<path d="m18 14 4 4-4 4"/>
<path d="m18 2 4 4-4 4"/>
<path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/>
<path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/>
<path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>
```

### `file-clock` (Legal — Auditable)
```svg
<path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/>
<path d="M14 2v4a2 2 0 0 0 2 2h4"/>
<circle cx="8" cy="16" r="6"/>
<path d="M9.5 17.5 8 16.25V14"/>
```

### `shield-check` (Impact — Employer Brand)
```svg
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
<path d="m9 12 2 2 4-4"/>
```

### `refresh-cw` (Impact — Talent Pipeline)
```svg
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
<path d="M21 3v5h-5"/>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
<path d="M8 16H3v5"/>
```

### `users` (Impact — Recruiting Team)
```svg
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
<circle cx="9" cy="7" r="4"/>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
```

### `plug-zap` (ATS Integration)
```svg
<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4z"/>
<path d="m2 22 3-3"/>
<path d="M7.5 13.5 10 11"/>
<path d="M10.5 16.5 13 14"/>
<path d="m18 3-4 4h6l-4 4"/>
```

### `chart-column` (ATS Integration — Scale)
```svg
<path d="M3 3v16a2 2 0 0 0 2 2h16"/>
<path d="M18 17V9"/>
<path d="M13 17V5"/>
<path d="M8 17v-3"/>
```

*All paths require `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"` on the parent `<svg>`.*
