import { defaultLang, ui, type Lang, type TranslationKey } from './ui';

/** Reads the active locale from the URL. Falls back to the default locale. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return segment in ui ? (segment as Lang) : defaultLang;
}

/** Returns a `t('key')` lookup bound to one locale. */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Strips the locale prefix from a pathname, leaving the route that is shared
 * across languages — so the toggle can point at the current page rather than
 * always sending people back to the home page.
 *
 *   /es/pricing  ->  pricing
 *   /pricing     ->  pricing
 *   /es/         ->  ''
 */
export function getRouteFromUrl(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] && segments[0] in ui) segments.shift();
  return segments.join('/');
}
