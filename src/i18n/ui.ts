/**
 * Copy dictionary.
 *
 * English is the source of truth and the default locale; every key must exist
 * in both languages. `TranslationKey` is derived from the English object, so a
 * missing or misspelled Spanish key is a type error rather than a silent
 * fallback at runtime.
 *
 * Grows one section at a time as the page is built.
 */

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** Short labels for the nav language toggle. */
export const langLabels: Record<Lang, string> = {
  en: 'EN',
  es: 'ES',
};

const en = {
  // -- Document / SEO -------------------------------------------------------
  'meta.title': 'Framewise — See every frame. Control every moment.',
  'meta.description':
    'A Chrome and Edge extension for frame-by-frame video control: step one frame at a time, change playback speed, pop out a floating window, capture the current frame and boost volume past 100%.',
  'meta.ogAlt': 'Framewise — frame-by-frame video control for Chrome and Edge',

  // -- Header ---------------------------------------------------------------
  'nav.skipToContent': 'Skip to content',
  'nav.home': 'Framewise — home',
  'nav.cta': 'Add to Chrome',
  'nav.language': 'Language',
  'nav.sections': 'Sections',

  // -- Section rail ---------------------------------------------------------
  // Labels for the segmented progress bar. Keyed by the `data-section` value on
  // each top-level block of <main>.
  'section.overview': 'Overview',
  'section.problem': 'The problem',
  'section.features': 'Features',
  'section.included': 'Also included',
  'section.cta': 'Get Framewise',

  // -- Hero -----------------------------------------------------------------
  'hero.eyebrow': 'For Chrome & Edge',
  'hero.headline.line1': 'See every frame.',
  'hero.headline.line2': 'Control every moment.',
  'hero.subhead':
    "Slow down the moment you need, skip the ones you don't, and capture exactly what's on screen — on any video, anywhere in the browser.",
  'hero.cta.primary': 'Add to Chrome',
  // Jumps to the real feature demos below, not a canned preview — see it in
  // action means actually using it.
  'hero.cta.secondary': 'See it in action',
  // Counterweight to the "Read and change all your data on all websites"
  // permission warning the Web Store shows at install — Framewise needs host
  // access on every site to find video players. This is the one claim on the
  // page doing real work, so it must stay factually true.
  'hero.meta': 'Nothing leaves your browser',

  // -- Comparison -----------------------------------------------------------
  'compare.eyebrow': 'The problem',
  'compare.without': 'Without Framewise',
  'compare.with': 'With Framewise',
  'compare.row1.without':
    'You rewatch the same five seconds guessing where the moment is.',
  'compare.row1.with': 'You land on the exact frame you meant to.',
  'compare.row2.without': 'Slow motion means squinting through a blurry drag.',
  'compare.row2.with': 'Every speed, held or toggled, stays sharp.',
  'compare.row3.without': "The moment's gone before you can grab it.",
  'compare.row3.with': 'Capture it, float it, keep working around it.',

  // -- Feature 01 — frame navigation ----------------------------------------
  'f1.label': 'Frame navigation',
  'f1.title': 'Step through one frame at a time.',
  'f1.body':
    'Navigate frame by frame with a key press, or hold to step continuously — find the exact instant, every time.',
  'f1.video.label': 'Frame navigation demo',
  'f1.frame': 'Frame',
  'f1.play': 'Play',
  'f1.pause': 'Pause',
  'f1.prevFrame': 'Previous frame',
  'f1.nextFrame': 'Next frame',

  // -- Feature 02 — playback speed ------------------------------------------
  'f2.label': 'Playback speed',
  'f2.title': 'Any speed, without the choppiness.',
  'f2.body':
    'Jump between speed presets instantly, from frame-precise slow motion to fast previews — smooth at every setting.',
  'f2.stat1.label': 'Default range',
  'f2.stat1.value': '0.25×–4×',
  'f2.stat1.caption': 'Out of the box',
  'f2.stat2.label': 'Configurable limit',
  'f2.stat2.value': '×∞',
  'f2.stat2.caption': 'Set any speed you want',
  'f2.video.label': 'Playback speed demo',
  'f2.speedGroup': 'Playback speed',

  // -- Feature 03 — floating controls ---------------------------------------
  'f3.label': 'Floating controls',
  'f3.title': 'Keep the video where you need it.',
  'f3.body':
    'Pop any video into a floating, draggable window — or native Picture-in-Picture — and keep working around it.',
  'f3.video.label': 'Floating controls demo',
  'f3.pip.enter': 'Pop out',
  'f3.pip.exit': 'Bring back',
  'f3.pip.unsupported': "This browser doesn't support Picture-in-Picture.",

  // -- Feature 04 — screenshot capture --------------------------------------
  'f4.label': 'Screenshot capture',
  'f4.title': "Capture exactly what's on screen.",
  'f4.body':
    'One key saves the current frame — full resolution, no cropping, no guesswork.',
  'f4.video.label': 'Screenshot capture demo',
  'f4.capture.button': 'Capture frame',
  'f4.record.start': 'Record clip',
  'f4.record.stop': 'Stop recording',
  'f4.record.indicator': 'Recording',
  'f4.panel.label': 'Capture result',
  'f4.panel.empty': 'Your captures will appear here.',
  'f4.panel.frame': 'Frame captured',
  'f4.panel.clip': 'Clip recorded',
  'f4.panel.download': 'Download',

  // -- Feature 05 — volume amplification ------------------------------------
  'f5.label': 'Volume amplification',
  'f5.title': 'Volume, without limits.',
  'f5.body':
    "Boost any video's volume as far as you like — 300% by default, or dial it past that with no upper limit — independently for every video.",
  'f5.video.label': 'Volume amplification demo',
  'f5.presetGroup': 'Volume level',
  'f5.custom.label': 'Custom',
  'f5.custom.placeholder': '%',
  'f5.custom.apply': 'Set',
  'f5.stat.value': '×3',
  'f5.stat.caption': 'Default maximum — customizable up to ×∞',

  // -- Mini-feature grid ----------------------------------------------------
  'grid.eyebrow': 'Also included',
  'grid.fps.title': 'Automatic FPS detection',
  'grid.fps.body': "Framewise detects each video's frame rate automatically.",
  'grid.shortcuts.title': 'Per-site shortcuts',
  'grid.shortcuts.body':
    'Set different keyboard shortcuts for different sites.',
  'grid.selection.title': 'Manual video selection',
  'grid.selection.body': 'Multiple videos on a page? Pick the one you mean.',
  'grid.detection.title': 'Robust HTML5 detection',
  'grid.detection.body': 'Finds video players other extensions miss.',
  'grid.persist.title': 'Per-site memory',
  'grid.persist.body':
    'Your last speed and volume settings, remembered per site.',
  'grid.privacy.title': 'Fully local',
  'grid.privacy.body':
    'Everything runs on-device — nothing is ever sent anywhere.',

  // -- Use-case pills -------------------------------------------------------
  'pills.intro': "Wherever there's a video, there's a frame worth catching.",
  'pills.list': 'Use cases',
  'pills.anime': 'Anime',
  'pills.editing': 'Video editing',
  'pills.gameplay': 'Gameplay analysis',
  'pills.sports': 'Sports',
  'pills.study': 'Study',
  'pills.streaming': 'Streaming',
  'pills.tutorials': 'Tutorials',
  'pills.music': 'Music videos',
  'pills.lectures': 'Lectures',
  'pills.concerts': 'Live concerts',

  // -- Closing CTA ----------------------------------------------------------
  'cta.title': 'Every frame, under your control.',
  'cta.button': 'Add to Chrome',
  'cta.meta': 'Also available for Edge',

  // -- Footer ---------------------------------------------------------------
  'footer.copyright': '© Framewise',
  'footer.links': 'Footer',
  'footer.github': 'GitHub',
  'footer.chrome': 'Chrome Web Store',
  'footer.edge': 'Edge Add-ons',

  // -- Shared ---------------------------------------------------------------
  'media.placeholder': 'Placeholder',
} as const;

export type TranslationKey = keyof typeof en;

const es: Record<TranslationKey, string> = {
  // -- Document / SEO -------------------------------------------------------
  'meta.title': 'Framewise — Ve cada fotograma. Controla cada momento.',
  'meta.description':
    'Extensión para Chrome y Edge de control de vídeo fotograma a fotograma: avanza de uno en uno, cambia la velocidad, saca una ventana flotante, captura el fotograma actual y sube el volumen por encima del 100 %.',
  'meta.ogAlt':
    'Framewise — control de vídeo fotograma a fotograma para Chrome y Edge',

  // -- Header ---------------------------------------------------------------
  'nav.skipToContent': 'Saltar al contenido',
  'nav.home': 'Framewise — inicio',
  'nav.cta': 'Añadir a Chrome',
  'nav.language': 'Idioma',
  'nav.sections': 'Secciones',

  // -- Section rail ---------------------------------------------------------
  'section.overview': 'Presentación',
  'section.problem': 'El problema',
  'section.features': 'Funciones',
  'section.included': 'También incluido',
  'section.cta': 'Consigue Framewise',

  // -- Hero -----------------------------------------------------------------
  'hero.eyebrow': 'Para Chrome y Edge',
  'hero.headline.line1': 'Ve cada fotograma.',
  'hero.headline.line2': 'Controla cada momento.',
  'hero.subhead':
    'Ralentiza el momento que necesitas, sáltate los que no, y captura exactamente lo que hay en pantalla — en cualquier vídeo, en cualquier parte del navegador.',
  'hero.cta.primary': 'Añadir a Chrome',
  'hero.cta.secondary': 'Verlo en acción',
  'hero.meta': 'Nada sale de tu navegador',

  // -- Comparison -----------------------------------------------------------
  'compare.eyebrow': 'El problema',
  'compare.without': 'Sin Framewise',
  'compare.with': 'Con Framewise',
  'compare.row1.without':
    'Repites los mismos cinco segundos adivinando dónde está el momento.',
  'compare.row1.with': 'Caes en el fotograma exacto que buscabas.',
  'compare.row2.without':
    'La cámara lenta se convierte en forzar la vista sobre un arrastre borroso.',
  'compare.row2.with': 'Cada velocidad, mantenida o fijada, se ve nítida.',
  'compare.row3.without': 'El momento se va antes de que puedas capturarlo.',
  'compare.row3.with': 'Captúralo, sácalo en flotante y sigue trabajando.',

  // -- Feature 01 — frame navigation ----------------------------------------
  'f1.label': 'Navegación por fotogramas',
  'f1.title': 'Avanza fotograma a fotograma.',
  'f1.body':
    'Navega fotograma a fotograma con una tecla, o mantenla pulsada para avanzar en continuo — encuentra el instante exacto, siempre.',
  'f1.video.label': 'Demo de navegación por fotogramas',
  'f1.frame': 'Fotograma',
  'f1.play': 'Reproducir',
  'f1.pause': 'Pausar',
  'f1.prevFrame': 'Fotograma anterior',
  'f1.nextFrame': 'Fotograma siguiente',

  // -- Feature 02 — playback speed ------------------------------------------
  'f2.label': 'Velocidad de reproducción',
  'f2.title': 'Cualquier velocidad, sin tirones.',
  'f2.body':
    'Salta entre velocidades al instante, de la cámara lenta precisa al fotograma a las vistas rápidas — fluido en cualquier ajuste.',
  'f2.stat1.label': 'Rango por defecto',
  'f2.stat1.value': '0.25×–4×',
  'f2.stat1.caption': 'De serie',
  'f2.stat2.label': 'Límite configurable',
  'f2.stat2.value': '×∞',
  'f2.stat2.caption': 'Ajusta la velocidad que quieras',
  'f2.video.label': 'Demo de velocidad de reproducción',
  'f2.speedGroup': 'Velocidad de reproducción',

  // -- Feature 03 — floating controls ---------------------------------------
  'f3.label': 'Controles flotantes',
  'f3.title': 'Ten el vídeo donde lo necesitas.',
  'f3.body':
    'Saca cualquier vídeo a una ventana flotante y arrastrable — o al Picture-in-Picture nativo — y sigue trabajando a su alrededor.',
  'f3.video.label': 'Demo de controles flotantes',
  'f3.pip.enter': 'Sacar ventana',
  'f3.pip.exit': 'Traer de vuelta',
  'f3.pip.unsupported': 'Este navegador no admite Picture-in-Picture.',

  // -- Feature 04 — screenshot capture --------------------------------------
  'f4.label': 'Captura de pantalla',
  'f4.title': 'Captura exactamente lo que hay en pantalla.',
  'f4.body':
    'Una tecla guarda el fotograma actual — a resolución completa, sin recortes ni conjeturas.',
  'f4.video.label': 'Demo de captura de pantalla',
  'f4.capture.button': 'Capturar fotograma',
  'f4.record.start': 'Grabar clip',
  'f4.record.stop': 'Detener grabación',
  'f4.record.indicator': 'Grabando',
  'f4.panel.label': 'Resultado de la captura',
  'f4.panel.empty': 'Tus capturas aparecerán aquí.',
  'f4.panel.frame': 'Fotograma capturado',
  'f4.panel.clip': 'Clip grabado',
  'f4.panel.download': 'Descargar',

  // -- Feature 05 — volume amplification ------------------------------------
  'f5.label': 'Amplificación de volumen',
  'f5.title': 'Volumen, sin límites.',
  'f5.body':
    'Sube el volumen de cualquier vídeo tanto como quieras — 300 % por defecto, o más allá sin límite superior — de forma independiente para cada vídeo.',
  'f5.video.label': 'Demo de amplificación de volumen',
  'f5.presetGroup': 'Nivel de volumen',
  'f5.custom.label': 'Personalizado',
  'f5.custom.placeholder': '%',
  'f5.custom.apply': 'Fijar',
  'f5.stat.value': '×3',
  'f5.stat.caption': 'Máximo por defecto — configurable hasta ×∞',

  // -- Mini-feature grid ----------------------------------------------------
  'grid.eyebrow': 'También incluido',
  'grid.fps.title': 'Detección automática de FPS',
  'grid.fps.body':
    'Framewise detecta la velocidad de fotogramas de cada vídeo automáticamente.',
  'grid.shortcuts.title': 'Atajos por sitio',
  'grid.shortcuts.body':
    'Configura atajos de teclado distintos para cada sitio.',
  'grid.selection.title': 'Selección manual de vídeo',
  'grid.selection.body': '¿Varios vídeos en una página? Elige el que quieres.',
  'grid.detection.title': 'Detección HTML5 robusta',
  'grid.detection.body':
    'Encuentra reproductores que otras extensiones no ven.',
  'grid.persist.title': 'Memoria por sitio',
  'grid.persist.body':
    'Tu última velocidad y volumen, recordados para cada sitio.',
  'grid.privacy.title': 'Totalmente local',
  'grid.privacy.body':
    'Todo se ejecuta en tu dispositivo — nada sale nunca de él.',

  // -- Use-case pills -------------------------------------------------------
  'pills.intro':
    'Donde hay un vídeo, hay un fotograma que merece la pena capturar.',
  'pills.list': 'Casos de uso',
  'pills.anime': 'Anime',
  'pills.editing': 'Edición de vídeo',
  'pills.gameplay': 'Análisis de gameplay',
  'pills.sports': 'Deportes',
  'pills.study': 'Estudio',
  'pills.streaming': 'Streaming',
  'pills.tutorials': 'Tutoriales',
  'pills.music': 'Vídeos musicales',
  'pills.lectures': 'Clases grabadas',
  'pills.concerts': 'Conciertos en directo',

  // -- Closing CTA ----------------------------------------------------------
  'cta.title': 'Cada fotograma, bajo tu control.',
  'cta.button': 'Añadir a Chrome',
  'cta.meta': 'También disponible para Edge',

  // -- Footer ---------------------------------------------------------------
  'footer.copyright': '© Framewise',
  'footer.links': 'Pie de página',
  'footer.github': 'GitHub',
  'footer.chrome': 'Chrome Web Store',
  'footer.edge': 'Edge Add-ons',

  // -- Shared ---------------------------------------------------------------
  'media.placeholder': 'Marcador de posición',
};

export const ui: Record<Lang, Record<TranslationKey, string>> = { en, es };

/**
 * External destinations. Not translated — same URLs in every locale.
 * TODO: swap in the real store listings once the extension is published.
 */
export const links = {
  chrome: 'https://chromewebstore.google.com/',
  edge: 'https://microsoftedge.microsoft.com/addons',
  github: 'https://github.com/Zulaa9/framewise-web',
} as const;
