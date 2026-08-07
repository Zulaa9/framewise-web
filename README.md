# Framewise — Landing Page

Marketing site for **Framewise**, a Chrome/Edge extension that puts you in full control of any web video: frame-by-frame navigation, speed control, Picture-in-Picture, screenshot & clip capture, and volume amplification beyond the browser's default 100% cap.

**Live site:** [framewise.app](https://framewise.app) *(coming soon)*

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| [Astro](https://astro.build) | 5 | Static-site framework |
| [Tailwind CSS](https://tailwindcss.com) | v4 (CSS-first) | Styling via `@theme` |
| TypeScript | 5 | Type safety |

No UI framework components — everything is vanilla Astro + browser APIs.

---

## Features

Every demo on the page is **real**, not simulated:

- **Frame navigation** — `video.currentTime` steps via keyboard/buttons
- **Speed control** — `video.playbackRate` live slider
- **Floating window (PiP)** — native Picture-in-Picture API
- **Screenshot & clip capture** — `canvas.drawImage()` → real PNG download; `video.captureStream()` + `MediaRecorder` → real WebM download
- **Volume amplification** — Web Audio API `GainNode` up to 300%

Fully bilingual: **English** (`/`) and **Spanish** (`/es/`).

---

## Project Structure

```
src/
├── components/
│   ├── features/          # One component per feature section (01–05)
│   │   ├── FrameNavigation.astro
│   │   ├── SpeedControl.astro
│   │   ├── FloatingControls.astro
│   │   ├── ScreenshotCapture.astro
│   │   └── VolumeAmplification.astro
│   ├── DemoVideo.astro    # Shared base: autoplay on visibility, PiP-aware
│   ├── FeatureSections.astro
│   ├── FeatureGrid.astro
│   ├── Hero.astro
│   ├── Header.astro
│   ├── Footer.astro
│   └── ...
├── i18n/
│   ├── ui.ts              # All translation keys (EN source of truth + ES)
│   └── utils.ts           # getLangFromUrl, useTranslations
├── pages/
│   ├── index.astro        # English route
│   └── es/index.astro     # Spanish route
└── styles/
    └── global.css         # Tailwind @theme token definitions + base styles
public/
└── media/                 # Self-hosted video files (Pexels/Pixabay license)
```

---

## Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build   # Production build → dist/
npm run preview # Preview the built site locally
```

---

## i18n

Translation keys live in [`src/i18n/ui.ts`](src/i18n/ui.ts). The `en` object is the source of truth and the TypeScript `TranslationKey` type is derived from it — adding a key to `en` without adding it to `es` produces a compile error.

---

## Media Licensing

All video files in `public/media/` are sourced from [Pexels](https://www.pexels.com) and [Pixabay](https://pixabay.com) under their respective free-use licenses, which permit commercial use and self-hosting without attribution. See [`public/media/LICENSE.md`](public/media/LICENSE.md) for details.

---

## Deployment

The site is configured for [Netlify](https://netlify.com) (`netlify.toml` included). Any static host that serves a `dist/` folder works — Vercel, Cloudflare Pages, GitHub Pages, etc.

---

## License

MIT — see [LICENSE](LICENSE).
