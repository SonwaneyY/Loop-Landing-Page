# Loop — Micro-Interaction Spec & Implementation Plan
*Informed by Chroma (chroma-anchor-50191106.figma.site) motion language.*
*Ready to implement into index.html.*

---

## Motion Principles

- **Easing standard:** `cubic-bezier(0.4, 0, 0.2, 1)` throughout (same as Chroma)
- **Duration range:** 150ms (hover) → 500ms (entrance) → 6000ms (ambient)
- **One-shot rule:** Scroll-triggered entrances fire once per element, never repeat
- **Reduced motion:** Every animation has a `prefers-reduced-motion` kill switch
- **Purpose rule:** Every interaction must serve a function — no decoration for its own sake

---

## Gap Analysis — Chroma vs Loop

| Chroma Pattern | Loop Current State | Priority |
|---|---|---|
| Scroll-triggered section reveals (fade + translate up) | Static — all content visible immediately | HIGH |
| Card hover elevation (`shadow-indigo-500/25` + `translateY`) | Minimal — no lift, no shadow | HIGH |
| Nav scroll-state transition (0.5s cubic-bezier) | No scroll-state change | HIGH |
| `animate-pulse` on hero accent dot | Static indigo dot | MEDIUM |
| Stat number count-up on viewport entry | Static numbers | MEDIUM |
| Staggered card entrance (sequential delay) | Simultaneous appearance | MEDIUM |
| Hero ambient orbital animation | Static radial gradient glow | MEDIUM |
| `group-hover` chaining across parent/child | Isolated hover states only | LOW |

---

## Implementation Priority Order

| # | Interaction | Effort | Impact | Status |
|---|---|---|---|---|
| 1 | Card hover elevation | Low — CSS only | High | Pending |
| 2 | Nav scroll-state | Low — 8 lines JS | High | Pending |
| 3 | ATS tag hover | Low — CSS only | Medium | Pending |
| 4 | Hero dot pulse | Low — CSS keyframe | Medium | Pending |
| 5 | Scroll-triggered entrance | Medium — IntersectionObserver | High | Pending |
| 6 | Stat count-up | Medium — JS | High | Pending |
| 7 | Primary CTA glow pulse | Low — CSS keyframe | Medium | Pending |
| 8 | Hero ambient glow breathe | Low — CSS keyframe | Medium | Pending |
| 9 | Eyebrow clip-path wipe | Medium — CSS + JS | Medium | Pending |

---

## Spec 1 — Hero Eyebrow Dot: Live Indicator Pulse

**Element:** `.hero-eyebrow-dot`
**Trigger:** Page load, continuous loop
**Purpose:** Signals Loop is "live" — active, always-on system. Matches Chroma's `animate-pulse` pattern on accent elements.
**Duration:** 2500ms cycle, infinite
**Easing:** `ease-in-out`

### CSS
```css
@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(79,70,229,0.5); }
  50%       { box-shadow: 0 0 0 8px rgba(79,70,229,0); }
}

.hero-eyebrow-dot {
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hero-eyebrow-dot { animation: none; }
}
```

### Notes
- Add inside the existing `<style>` block, near the `.hero-eyebrow-dot` rule
- The dot is already `width: 6px; height: 6px; background: var(--indigo); border-radius: 50%` — no HTML changes needed

---

## Spec 2 — Hero Background: Ambient Glow Breathe

**Element:** `#hero::before` (the existing radial gradient)
**Trigger:** Page load, continuous loop
**Purpose:** Makes the hero feel alive — the dark background has subtle energy. Very low amplitude so it never fights the headline.
**Duration:** 6000ms, infinite
**Easing:** `ease-in-out`

### CSS
```css
@keyframes glow-breathe {
  0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
  50%       { opacity: 1;   transform: translateX(-50%) scale(1.08); }
}

#hero::before {
  animation: glow-breathe 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  #hero::before { animation: none; opacity: 1; }
}
```

### Notes
- `#hero::before` already has `transform: translateX(-50%)` for centering — the keyframe preserves this
- Scale 1.08 is intentionally subtle — don't increase it

---

## Spec 3 — Scroll-Triggered Section Entrance: Fade Up

**Elements:** `.stat-card`, `.stage-card`, `.who-card`, `.legal-card`, `.pricing-card`, `#voices figure`
**Trigger:** Element enters viewport (`IntersectionObserver`, threshold: 0.15)
**Purpose:** Content feels earned as the reader scrolls — each section reveals with intention
**Duration:** 500ms
**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`
**Stagger:** Cards within a grid get `transition-delay` based on their index (0ms, 80ms, 160ms, 240ms)

### CSS
```css
.stat-card, .stage-card, .who-card, .legal-card, .pricing-card, #voices figure {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 500ms cubic-bezier(0.4,0,0.2,1),
              transform 500ms cubic-bezier(0.4,0,0.2,1);
}

.stat-card.is-visible, .stage-card.is-visible, .who-card.is-visible,
.legal-card.is-visible, .pricing-card.is-visible, #voices figure.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .stat-card, .stage-card, .who-card, .legal-card, .pricing-card, #voices figure {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### JavaScript
```js
// Stagger cards within same parent grid
document.querySelectorAll(
  '.stats-grid, .stages-grid, .who-grid, .legal-grid, .pricing-grid, #voices > div > div'
).forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});

// Observe each card
const revealEls = document.querySelectorAll(
  '.stat-card, .stage-card, .who-card, .legal-card, .pricing-card, #voices figure'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));
```

### Notes
- Add CSS to `<style>` block; add JS to the existing `<script>` block at bottom of body
- `observer.unobserve` ensures one-shot — card never re-animates
- Check `prefers-reduced-motion` before initialising: `if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) { ... }`

---

## Spec 4 — Stat Number Count-Up

**Elements:** `em` tags inside `.stat-number` (61, 72) and `.stat-callout-number` ($5.4M)
**Trigger:** `.stats-grid` enters viewport (threshold: 0.3)
**Purpose:** Makes statistics feel live and earned — numbers that count up carry more weight than static text
**Duration:** 1200ms
**Easing:** Cubic ease-out (fast start, decelerates to final value)

### JavaScript
```js
function countUp(el, target, prefix, suffix, duration) {
  if (!el) return;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
  const statsCountObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stat cards: 61%, 72%
        const statNums = document.querySelectorAll('.stat-number em');
        if (statNums[0]) countUp(statNums[0], 61, '', '', 1200);
        if (statNums[1]) countUp(statNums[1], 72, '', '', 1200);
        // Callout: $5.4M — animate the 5.4
        const callout = document.querySelector('.stat-callout-number');
        if (callout) {
          const calloutStart = performance.now();
          const animateCallout = (now) => {
            const p = Math.min((now - calloutStart) / 1200, 1);
            const e = 1 - Math.pow(1 - p, 3);
            callout.textContent = '$' + (e * 5.4).toFixed(1) + 'M';
            if (p < 1) requestAnimationFrame(animateCallout);
          };
          requestAnimationFrame(animateCallout);
        }
        statsCountObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  statsCountObserver.observe(statsGrid);
}
```

### Notes
- `8–22×` is a range — do not animate, leave static (animating a range looks broken)
- Only fire once (`unobserve` after trigger)
- Guard with `prefers-reduced-motion` check

---

## Spec 5 — Card Hover Elevation

**Elements:** `.stat-card`, `.who-card`, `.pricing-card`, `#voices figure`, `.legal-card`
**Trigger:** `mouseenter` / `mouseleave`
**Purpose:** Cards feel tangible — they lift off the surface when approached, confirming interactivity and adding depth
**Duration:** 200ms
**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

### CSS — Light section cards
```css
.stat-card, .who-card, .pricing-card, #voices figure {
  transition: transform 200ms cubic-bezier(0.4,0,0.2,1),
              box-shadow 200ms cubic-bezier(0.4,0,0.2,1),
              border-color 200ms cubic-bezier(0.4,0,0.2,1);
}

.stat-card:hover, .who-card:hover, .pricing-card:hover, #voices figure:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(79,70,229,0.12);
  border-color: rgba(79,70,229,0.25);
}
```

### CSS — Dark section cards
```css
.legal-card {
  transition: transform 200ms cubic-bezier(0.4,0,0.2,1),
              border-color 200ms cubic-bezier(0.4,0,0.2,1);
}

.legal-card:hover {
  transform: translateY(-3px);
  border-color: rgba(79,70,229,0.5);
}
```

### Notes
- The `.stat-card` already has a `transition` property — merge rather than duplicate
- `.pricing-card.featured` should keep its existing `box-shadow: 0 0 0 3px rgba(79,70,229,0.12)` and layer the hover shadow on top

---

## Spec 6 — Primary CTA: Soft Glow Pulse

**Element:** `.hero-cta-row .btn-primary` (Get Early Access →)
**Trigger:** Page load, 3s delay, continuous. Pauses on hover.
**Purpose:** After the page settles, gently draws the eye to the primary action without being aggressive
**Duration:** 3000ms cycle, infinite
**Easing:** `ease-in-out`

### CSS
```css
@keyframes cta-glow {
  0%, 100% { box-shadow: 0 4px 16px rgba(79,70,229,0.35); }
  50%       { box-shadow: 0 4px 28px rgba(79,70,229,0.65), 0 0 0 6px rgba(79,70,229,0.1); }
}

.hero-cta-row .btn-primary {
  animation: cta-glow 3s ease-in-out infinite;
  animation-delay: 3s;
}

.hero-cta-row .btn-primary:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .hero-cta-row .btn-primary { animation: none; }
}
```

### Notes
- The button already has `box-shadow: 0 4px 16px rgba(79,70,229,0.35)` on hover — the keyframe starts from this same value so there's no pop on loop start

---

## Spec 7 — Nav Scroll-State Transition

**Element:** `nav`
**Trigger:** `window.scroll` — active when `scrollY > 40`
**Purpose:** At the top of the page the nav feels part of the hero. On scroll it solidifies into a stable wayfinding element.
**Duration:** 400ms
**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

### CSS
```css
nav {
  /* Add to existing nav rule — merge with existing transition: */
  transition: background 400ms cubic-bezier(0.4,0,0.2,1),
              box-shadow 400ms cubic-bezier(0.4,0,0.2,1);
}

nav.scrolled {
  background: rgba(10,15,30,0.98);
  box-shadow: 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.35);
}
```

### JavaScript
```js
const mainNav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });
```

### Notes
- `passive: true` on the scroll listener — never blocks scroll
- The nav currently has no transition — this adds one

---

## Spec 8 — ATS Tag Hover

**Element:** `.ats-tag`
**Trigger:** `mouseenter` / `mouseleave`
**Purpose:** Tags feel interactive — confirms they are labels for real integrations, not decorative
**Duration:** 150ms
**Easing:** `ease`

### CSS
```css
.ats-tag {
  transition: background 150ms ease, border-color 150ms ease, color 150ms ease;
  cursor: default;
}

.ats-tag:hover {
  background: var(--indigo-light);
  border-color: rgba(79,70,229,0.3);
  color: var(--indigo);
}
```

---

## Spec 9 — Eyebrow Clip-Path Wipe

**Elements:** `.eyebrow`, `.eyebrow-light` inside sections (not hero)
**Trigger:** Parent section enters viewport
**Purpose:** Editorial entrance — the category label wipes in before the headline appears, establishing reading order
**Duration:** 400ms (eyebrow), headline fades in 100ms after
**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

### CSS
```css
section .eyebrow,
section .eyebrow-light {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 400ms cubic-bezier(0.4,0,0.2,1);
}

section.section-revealed .eyebrow,
section.section-revealed .eyebrow-light {
  clip-path: inset(0 0% 0 0);
}

@media (prefers-reduced-motion: reduce) {
  section .eyebrow,
  section .eyebrow-light {
    clip-path: none;
    transition: none;
  }
}
```

### JavaScript
```js
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-revealed');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(s => sectionObserver.observe(s));
```

---

## Full Implementation Checklist

### CSS additions (add to `<style>` block)
- [ ] `@keyframes pulse-dot` + `.hero-eyebrow-dot` rule
- [ ] `@keyframes glow-breathe` + `#hero::before` animation
- [ ] Entrance animation base states (opacity:0, translateY:24px) for all card types
- [ ] `.is-visible` revealed state for all card types
- [ ] Card hover elevation — light cards
- [ ] Card hover elevation — dark cards (`.legal-card`)
- [ ] `@keyframes cta-glow` + `.hero-cta-row .btn-primary` rule
- [ ] `nav.scrolled` rule + transition added to base `nav`
- [ ] `.ats-tag` hover
- [ ] Eyebrow clip-path base + `.section-revealed` state
- [ ] All `prefers-reduced-motion` kill switches

### JavaScript additions (add to `<script>` block)
- [ ] Nav scroll-state toggle (8 lines)
- [ ] Grid stagger — `transitionDelay` on card children
- [ ] `IntersectionObserver` for card `.is-visible` reveals
- [ ] `IntersectionObserver` for section `.section-revealed` (eyebrow wipe)
- [ ] `countUp()` function + stats observer
- [ ] Wrap all JS animations in `prefers-reduced-motion` check

### prefers-reduced-motion guard pattern
```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // All IntersectionObserver and animation JS goes here
}
```

---

## Easing Reference

| Use case | Value |
|---|---|
| Standard interactions (hover, nav) | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Entrances (elements coming in) | `cubic-bezier(0, 0, 0.2, 1)` — ease-out |
| Exits (elements leaving) | `cubic-bezier(0.4, 0, 1, 1)` — ease-in |
| Ambient / breathing loops | `ease-in-out` |
| Fast hover transitions | `ease` |

## Duration Reference

| Use case | Duration |
|---|---|
| Hover state changes | 150–200ms |
| Nav scroll-state | 400ms |
| Card entrance (fade up) | 500ms |
| Eyebrow wipe | 400ms |
| Stat count-up | 1200ms |
| CTA glow cycle | 3000ms |
| Hero ambient breathe | 6000ms |
