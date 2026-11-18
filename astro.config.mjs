// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nrllhud27-wq.github.io',
  integrations: [sitemap()],
});