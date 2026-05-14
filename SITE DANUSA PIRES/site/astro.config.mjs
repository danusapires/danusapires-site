import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.danusapires.com.br',
  integrations: [sitemap()],
});
