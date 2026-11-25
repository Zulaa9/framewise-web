import type { APIRoute } from 'astro';
import { getRelativeLocaleUrl } from 'astro:i18n';

// Sitemap with per-language alternates (hreflang). No extra dependencies.
// Keep ROUTES in sync with src/pages (route '' = home).
const ROUTES = ['', 'privacy'] as const;

export const GET: APIRoute = ({ site }) => {
  const abs = (lang: 'en' | 'es', route: string) => new URL(getRelativeLocaleUrl(lang, route), site).href;
  const urls = ROUTES.flatMap((route) =>
    (['en', 'es'] as const).map((lang) => `  <url>
    <loc>${abs(lang, route)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${abs('en', route)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${abs('es', route)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('en', route)}"/>
  </url>`),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
