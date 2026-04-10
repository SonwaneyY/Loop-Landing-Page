# Loop — Landing Page

Marketing landing page for **Loop**, an AI-powered CRM that manages the candidate rejection journey for recruiting teams. Built as part of a capstone project at Parsons School of Design, The New School (MS Strategic Design & Management, 2026).

---

## What Loop Is

Loop integrates with ATS platforms as an intelligence layer — not a replacement — handling all post-rejection candidate communication autonomously after the first human decision.

**North Star:** *Automate the administrative, not the evaluative.*

Loop never makes hiring decisions. It handles what happens after one is made.

---

## The Page

A standalone, single-file landing page built without frameworks or build tools. Designed to validate the business model through early access signups.

**Live:** [loophiring.com](https://loophiring.com) *(coming soon)*

### Sections

- Hero with gradient glow + ATS trust bar
- Problem narrative — capacity framing, not cultural critique
- Stats with count-up animation on scroll
- Insight — where the ATS gap lives
- How It Works — 4-stage activation model
- Product demo — typewriter simulation of a Loop-generated rejection email
- Legal compliance — AEDT, encryption, auditability
- Before / After comparison
- Impact — what Loop protects
- Research voices — quotes from 7 months of primary interviews
- ATS integrations
- Early access form (Formspree)

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS with custom properties |
| Behaviour | Vanilla JS — IntersectionObserver, async fetch |
| Font | Inter (Google Fonts) |
| Form | Formspree |
| Icons | Lucide (SVG, inline) |
| Server | Node.js static file server (`server.cjs`) |

No framework. No build step. No dependencies to install.

---

## Running Locally

```bash
node server.cjs
