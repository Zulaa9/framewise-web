# Framewise — Design tokens

Extracted from `Framewise Landing (standalone).html` (Claude Design export).
Canonical source of truth: [`src/styles/global.css`](src/styles/global.css) — this file is the human-readable summary.

The export had no CSS variables and no classes: every value was an inline style
inside a bundled template. All values below were pulled from that template.

---

## 1. Colour

### Core

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#17181b` | Page background |
| `--color-well` | `#131418` | Recessed band: the hero demo shelf (darker than the page) |
| `--color-surface` | `#1b1c1f` | Raised bands: comparison, mini-feature grid, final CTA |

Three depth levels, not two. `--color-well` sits *below* the page background and
holds the hero product shot; `--color-surface` sits *above* it and holds the
explanatory sections. The demo band is the only boundary on the page drawn with
a hard rule — everywhere else the bands fade in and out (see `BandEdges.astro`).
| `--color-ink` | `#eeece9` | Primary foreground, primary button fill |
| `--color-accent` | `#e8637a` | Logo mark, status dots, "WITH FRAMEWISE" bullet |

The export exposed the accent as an editable prop with four presets. All four are
kept as tokens so the whole page can be re-themed from one variable:

`#e8637a` (default) · `#5b8def` · `#3fb88a` · `#d99a4e`

### Foreground ramp

Tints of `#eeece9` over `#17181b`. Contrast measured against the page background.

| Token | Alpha | Ratio | Used for |
|---|---|---|---|
| `--color-ink` | 1.0 | 14.6:1 | Headings, "with" column |
| `--color-ink-strong` | 0.7 | 8.3:1 | Category pills, footer mark |
| `--color-ink-muted` | 0.6 | 6.2:1 | Feature paragraphs, hero subhead |
| `--color-ink-subtle` | 0.5 | 4.7:1 | Comparison "without" column, grid card body |
| `--color-ink-faint` | 0.6 | 6.2:1 | Mono eyebrows, meta lines |
| `--color-numeral` | 0.16 | — | Large decorative `01`–`05` |

### Hairlines

| Token | Value | Used for |
|---|---|---|
| `--color-line` | `rgb(255 255 255 / 0.1)` | Media frames, pills |
| `--color-line-soft` | `rgb(255 255 255 / 0.07)` | Band top/bottom borders, grid dividers |
| `--color-line-strong` | `rgb(255 255 255 / 0.14)` | Secondary button, media chips |
| `--color-line-hover` | `rgb(255 255 255 / 0.32)` | Hover state on outlined controls |
| `--color-line-compare` | `rgb(255 255 255 / 0.12)` | Comparison row dividers |

### Overlay chrome

| Token | Value | Used for |
|---|---|---|
| `--color-chip` | `rgb(23 24 27 / 0.85)` | Key/speed chips over media |
| `--color-chip-soft` | `rgb(23 24 27 / 0.78)` | Hero "FRAME 0143" chip |
| `--color-nav` | `rgb(20 20 22 / 0.7)` | Nav background once scrolled (+ `blur(14px)`) |
| `--color-fill-subtle` | `rgb(255 255 255 / 0.03)` | Volume scale track |
| `--color-fill-ghost` | `rgb(255 255 255 / 0.018)` | Feature 03 panel |

---

## 2. Typography

**Geist** (body) and **Geist Mono** (labels, numerals, chips) — both self-hosted
via `@fontsource-variable/*`, no Google Fonts request at runtime.

> The export embedded static faces at 400/500/600, but its markup asks for
> `font-weight: 560` on every heading and `600` on mono numerals. Static faces
> can't render 560. Using the **variable** builds (wght 100–900) so 560 is a
> real weight rather than a browser-synthesised approximation.

| Weight | Where |
|---|---|
| 400 | Body copy, paragraphs |
| 500 | Buttons, wordmark, eyebrows, card titles |
| 560 | `h1`, `h2`, `h3` |
| 600 | Mono numerals (`01`–`05`, `×4`, `×3`) |

### Scale

Fluid `clamp()` — the low end is the mobile value, the high end is the exact
value from the export (which was desktop-only).

| Token | Mobile → Desktop | Used for |
|---|---|---|
| `--text-display` | 44 → **92px** | Hero `h1` |
| `--text-figure` | 56 → **88px** | Section numbers `01`–`05` |
| `--text-stat-lg` | 48 → **64px** | `×3` volume stat |
| `--text-h2` | 32 → **48px** | Final CTA heading |
| `--text-h3-lg` | 28 → **44px** | Feature 01 & 05 headings |
| `--text-stat` | 36 → **44px** | `×4`, `×∞` speed stats |
| `--text-h3` | 26 → **38px** | Feature 02, 03, 04 headings |
| `--text-lead` | 17 → **20px** | Hero subhead |

| Token | Fixed | Used for |
|---|---|---|
| `--text-body-lg` | 18px | Comparison rows, pills intro |
| `--text-body` | 17px | Feature paragraphs |
| `--text-ui` | 15px | Buttons, wordmark |
| `--text-sm` | 14px | Grid card body, footer |
| `--text-ui-sm` | 13.5px | Nav button |
| `--text-xs` | 13px | Media chips |
| `--text-label` | 12.5px | Mono eyebrows |
| `--text-label-sm` | 11.5px | Grid card index |

### Line height

`1.04` display · `1.15` cta · `1.16` heading · `1.5` intro · `1.55` row ·
`1.6` lead · `1.65` body

### Letter spacing

`-0.03em` display · `-0.02em` headings + numerals · `-0.01em` wordmark ·
`0.03em` chips · `0.05em` column labels · `0.08em` section labels ·
`0.1em` eyebrows

---

## 3. Radius

| Token | px | Used for |
|---|---|---|
| `--radius-chip` | 7 | Media chips |
| `--radius-btn` | 8 | Nav button |
| `--radius-cta` | 10 | Primary CTA |
| `--radius-shot` | 16 | Screenshot frame |
| `--radius-pip` | 18 | Floating-window frame |
| `--radius-media-sm` | 20 | Speed media |
| `--radius-media` | 22 | Feature / volume media |
| `--radius-hero` | 24 | Hero media |
| `--radius-panel` | 28 | Feature 03 panel |
| `--radius-pill` | 100 | Category pills, volume scale |

> Named semantically rather than `sm`/`md`/`lg`/`xl` on purpose: those would
> silently redefine Tailwind's own `rounded-sm`…`rounded-3xl` and make
> `rounded-sm` mean 16px instead of 2px.

Small decorative radii in the logo mark (2, 5, 6px) stay inline — they're part of
the mark, not a reusable token.

---

## 4. Elevation

Every shadow is a single large, heavily-offset ambient drop — no layered stacks.

| Token | Value |
|---|---|
| `--shadow-hero` | `0 100px 160px -60px rgb(0 0 0 / 0.7)` |
| `--shadow-feature` | `0 90px 140px -60px rgb(0 0 0 / 0.65)` |
| `--shadow-volume` | `0 90px 140px -60px rgb(0 0 0 / 0.6)` |
| `--shadow-frame` | `0 60px 100px -40px rgb(0 0 0 / 0.55)` |
| `--shadow-frame-sm` | `0 50px 90px -30px rgb(0 0 0 / 0.55)` |

---

## 5. Spacing

The export sits on a 4px grid, so Tailwind's default scale covers component-level
spacing (`gap-3` = 12px, `p-11` = 44px, etc.). Only the large section rhythm gets
named tokens, because those are the values that need to collapse hard on mobile:

| Token | Mobile → Desktop | Used for |
|---|---|---|
| `--spacing-band` | 80 → **180px** | Band vertical padding |
| `--spacing-band-lg` | 96 → **240px** | Final CTA |
| `--spacing-feature` | 96 → **220px** | Gap between feature blocks |

Recurring component values from the export:
`4 · 6 · 7 · 9 · 10 · 11 · 12 · 13 · 18 · 20 · 22 · 24 · 26 · 28 · 32 · 36 · 40 · 44 · 48 · 52 · 56 · 64 · 72`

Nav height is a fixed **76px**, nav gutter **52px** at desktop.

---

## 6. Content widths

| Token | px | Used for |
|---|---|---|
| `--container-copy` | 640 | Centred copy blocks |
| `--container-compare` | 880 | Comparison table |
| `--container-headline` | 920 | Hero `h1` |
| `--container-grid` | 980 | Mini-feature grid |
| `--container-page` | 1240 | Main feature column |
| `--container-wide` | 1400 | Volume media |
| `--container-showcase` | 1600 | Feature 01 media |

> Not `prose`/`full`: Tailwind ships static `max-w-prose` (65ch) and
> `max-w-full` (100%) that a `--container-*` token can never override.

---

## 7. Motion

| Behaviour | Value |
|---|---|
| Scroll reveal | `opacity 0→1`, `translateY(14px)→0`, `0.6s ease-out`, IO threshold `0.16` |
| Hero entrance | `translateY(18px)→0`, `0.9s var(--ease-out-expo)` |
| Nav on scroll | `0.4s ease`, triggers past `scrollY > 40` |
| Hover states | `0.2s ease` |
| Status dot | `fw-pulse` — opacity `1 → 0.3 → 1`, `2.2s ease-in-out infinite` |

`--ease-out-expo` = `cubic-bezier(0.16, 1, 0.3, 1)`

All of the above is disabled under `prefers-reduced-motion: reduce`.

---

## 8. Deliberate deviations from the export

Four are the changes you asked for; two are accessibility fixes.

| # | Token | Export | Now | Why |
|---|---|---|---|---|
| 1 | `--color-numeral` | `0.07` | **`0.16`** | Your request — `01`–`05` were invisible against the dark background. |
| 2 | `--color-line-compare` | `0.06` | **`0.12`** | Your request — comparison table contrast. |
| 3 | Hero top padding | `240px` | **`--spacing-band-lg`** (96px mobile) | Your request — kill the dead scroll before the headline. |
| 4 | Hero media top gap | `120px` | **~48px mobile**, 120px desktop | Same reason. |
| 5 | `--color-ink-faint` | `0.36`–`0.42` | **`0.6`** | **A11y** — 3.0:1–3.7:1 at 12.5px failed WCAG AA. Now 6.2:1. |
| 6 | `--color-ink-muted` | `0.55`/`0.58` | **`0.6`** | **A11y** — consolidates two near-identical values and clears AA with margin. |

Everything else is a faithful 1:1 port.

---

## 9. Resolved questions

1. **Mixed languages.** Resolved by the i18n layer (`src/i18n/ui.ts`) — every
   string now has a real English and Spanish version, selected per route.
2. **Speed copy mismatch.** Resolved against the extension's actual limits.
   Speed has a real hardcoded ceiling (`SPEED_MAX = 16` in `settings.js`,
   enforced everywhere including on JSON import), so the stat block reads
   `0.1×–4×` default range and `×16` configurable ceiling — both real,
   product-enforced numbers. Volume has no such constant: `volumeMax` is a
   plain configurable setting with no upper-bound validation anywhere in the
   code, so `×∞` for the volume stat is accurate, not aspirational — don't
   confuse it with the `1000` currently sitting in the Options page input,
   which is just that field's default value, not a technical ceiling.
3. **Accent.** Settled on `#e8637a` — matches the extension's own
   `--color-accent` exactly (see `popup.css`/`options.css`).
