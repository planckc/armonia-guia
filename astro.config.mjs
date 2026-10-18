// La guía pública de ArmonIA. El contenido NO se escribe aquí: lo copia `kb-publica/publicar.mjs` desde el repo
// privado, solo lo firmado y con el guardián en verde. Lo que se cambie a mano en src/content/docs se pisa.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://armonia.3spark.net',
  // Las direcciones de siempre (01-antes-de-empezar.html): ya van en correos y en la extensión.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [starlight({
    title: 'Guía de ArmonIA',
    defaultLocale: 'root',
    locales: { root: { label: 'Español', lang: 'es' } },
    favicon: '/favicon.ico',
    head: [
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
      { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
    ],
    customCss: ['./src/acento.css'],
  })],
});
