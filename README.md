# Four Dragons Inc. Go (演劇) — Founder Library

A dragon-gaming entertainment empire's founding-document web experience built on **Atatakasa (温かさ)** — warmth, dignity, and a creator-first culture.

A single-page, fully responsive static site presenting the Founder's Vision, the Four Pillars, the Corporate Constitution, the Culture Book, the Atatakasa Aikido philosophy, and the Creative Philosophy of Four Dragons Inc. Go.

- **Website:** `index.html`
- **Styling:** `style.css` (design tokens, theme system, layout, components, responsive rules)
- **Logic:** `script.js` (theme, navbar position, language i18n, mobile drawer, scroll-spy, persistence)
- **Assets:** `assets/`

---

## Content Sections

| # | Section | Purpose |
|---|---------|---------|
| 00 | **Hero** | Full-viewport hero with animated glow, pulsing emblem, founder name, and CTAs |
| 01 | **Founder Vision** | Why Four Dragons exists; Vision / Mission / Motto triad; CEO mindset |
| 02 | **The Four Pillars** | Champion the Mission · Be a Host · Embrace the Adventure · Be a Cereal Entrepreneur |
| 03 | **Constitution** | Ten non-negotiable articles (dignity, character over skill, zero corruption, creator freedom, etc.) |
| 04 | **Culture** | Value chips (Kindness, Respect, Passion, …) · Rejected behaviors · Positive reframe |
| 05 | **Atatakasa Aikido** | 温かさ philosophy · optional weekend program · Open Sensei policy · Weekend Ukemi protocol |
| 06 | **Creative Philosophy** | "No deadlines. Just great work." — the Leonardo da Vinci proof |
| — | **Footer** | Emblem · location · founder · auto-updating copyright year |

---

## UI Features

### Theme System
- **Dark** (default): deep navy-black surfaces with high-contrast white text.
- **Light**: clean off-white surfaces with dark navy text.
- Segmented control (radiogroup) in the navbar footer.
- Single-icon toggle on the mobile bar (sun/moon swap).
- Selection persisted in `localStorage` (`fourDragons.theme`); system `prefers-color-scheme` respected on first load.

### Navigation
- **Repositionable navbar:** `Top` (sticky bar), `Left` sidebar, or `Right` sidebar — switchable from the navbar footer and persisted (`fourDragons.navPosition`).
- **Scroll-spy** highlights the active section via `IntersectionObserver` (`rootMargin: -45% 0px -50% 0px`).
- **Below 960px** the navbar becomes a drawer with:
  - Burger toggle that morphs into an ✕ when open
  - Brand block on the left, theme toggle on the right
  - Backdrop scrim
  - Close on link click, scrim click, `Escape` key, or window resize past 960px

### Language / i18n
- Bilingual toggle: **EN** ↔ **日本語** (Japanese).
- Toggle is a pill switch with a sliding thumb styled in the brand gradient.
- All content sections, navbar labels, and settings labels are translated through `data-i18n-key` attributes resolved from an inline translation table.
- Selection persisted (`fourDragons.language`).
- Default: English. Japanese translations include `温かさ`, `演劇`, `Walang sapilitan` and other culturally specific phrases preserved verbatim.

### Hero
- Animated dual-radial gradient glow that drifts on a 16s loop.
- Emblem with pulsing shadow alternating between dragon-blue and dragon-red.
- Gradient-clipped headline.
- Two CTAs — primary (blue→red gradient, glowing) and ghost (surface card).

### Components
- **Skip link** for keyboard users (jumps to `#main`).
- **Triad cards** — 3-column grid with hover lift and dragon-blue border highlight.
- **Pillars** — 4-column numbered grid (`01–04`) with a soft blue→red gradient overlay on hover.
- **Constitution articles** — vertical `Art. N` label rendered with `writing-mode: vertical-rl`; first article is title-only, the rest include a body paragraph.
- **Chip lists** — rounded pill values.
- **Reject list** — strike-through with red decoration.
- **Statements** — blockquotes with a thick blue left border.
- **Mindset block** — full gradient background card for the "I work for them" quote.
- **Subheads** — dashed top-border divider.
- **Footer** — emblem, location, founder, and auto-filled current year.

### Typography
- **Cinzel** (Google Fonts) for display and body text, with Japanese serif fallbacks (`Hiragino Mincho ProN`, `Yu Mincho`).
- Smooth scrolling on `<html>`; disabled when `prefers-reduced-motion: reduce` is set.

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<blockquote>`, `<ol>`, `<ul>`).
- `aria-label`, `aria-expanded`, `aria-controls`, `role="radiogroup"`, `role="radio"`, `aria-checked`, `role="switch"` on all interactive controls.
- `:focus-visible` outlines in `--dragon-blue` with offset.
- `aria-hidden="true"` on decorative glow.
- Right-to-left reverse alignment for nav links when the navbar is docked on the right.

### Misc Behaviors
- `contextmenu` is suppressed site-wide (anti-copy deterrent).
- Copyright year in the footer is filled dynamically at runtime.

---

## Design System

### Brand Colors
Only two brand accents are used; everything else is neutral black/white shades:

--dragon-blue   #0703fc
--dragon-red    #fc0303
```

Derived tokens:
- `--dragon-blue-soft` / `--dragon-red-soft` — translucent surfaces (16% alpha).
- `--dragon-blue-glow` / `--dragon-red-glow` — glows (55% alpha).
- Display font: `Cinzel`. Body font stack: `Cinzel, Hiragino Mincho ProN, Yu Mincho, serif`.

### Theme Token Map

| Token | Dark | Light |
|-------|------|-------|
| `--bg` | `#050414` | `#f6f6fc` |
| `--bg-alt` | `#08071e` | `#eeeef9` |
| `--surface` | `#0d0c26` | `#ffffff` |
| `--surface-2` | `#121032` | `#f0f0fa` |
| `--text` | `#f4f4fb` | `#0a0a1a` |

### Radii & Motion
- `--radius-s: 8px`, `--radius-m: 16px`, `--radius-l: 28px`.
- `--ease: cubic-bezier(.22,1,.36,1)` — used for transitions throughout.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| **≥ 960px** | Top navbar with centered links and full grid layouts (Top / Left / Right per user setting). |
| **< 960px**  | Navbar becomes a left- or right-side drawer (depending on chosen side) toggled from the mobile top bar. |
| **< 860px**  | Triads and Pillars collapse to a single column. Section padding tightens. |
| **< 520px**  | Body font scales down to 16.5px; hero emblem and padding shrink. |

---

## Persistence (localStorage keys)

| Key | Stored value | Default |
|-----|--------------|---------|
| `fourDragons.theme` | `dark` \| `light` | `prefers-color-scheme` (light/dark) |
| `fourDragons.navPosition` | `top` \| `left` \| `right` | `top` |
| `fourDragons.language` | `en` \| `ja` | `en` |

All storage access is wrapped in `safeGet` / `safeSet` so the site still works in privacy-restricted browsers.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Single-page markup and content with `data-i18n-key` hooks on every translatable string |
| `style.css` | Design tokens, theme system, layout, components, responsive rules |
| `script.js` | Theme toggle, navbar position, EN/JA language, mobile drawer, scroll-spy, persistence |
| `assets/app_icon.png` | Emblem used in hero, navbar brand, mobile brand, and footer |
| `assets/company_logo.png` | Dragon-head logo (32×32 favicon, 192×192 favicon) |
| `assets/favicon-32.png` | Favicon (32×32) |
| `assets/favicon-192.png` | Favicon (192×192) |
| `assets/favicon-512.png` | Favicon (512×512) |
| `assets/apple-touch-icon.png` | iOS home-screen icon |

---

## Local Development

This is a pure static site — no build step required.

1. Open `index.html` directly in a browser, **or**
2. Serve the folder with any static server, e.g.:
   ```sh
   npx serve .
   # or
   python -m http.server 8000
   ```

Then visit the printed URL. Theme, navbar position, and language are persisted across reloads via `localStorage`.

---

## License

© Four Dragons Inc. Go — All rights reserved.