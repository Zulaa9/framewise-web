// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before deploying.
  // Used for canonical URLs, hreflang and absolute og:image paths.
  site: 'https://framewise.app',

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      // English stays at "/", Spanish lives at "/es/".
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
