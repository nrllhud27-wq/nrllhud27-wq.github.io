// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nrllhud27-wq.github.io',
  integrations: [sitemap()],
  redirects: {
    '/contact': { status: 301, destination: '/#contact' },
    '/projects/data-analytics': { status: 301, destination: '/projects#data-analyst' },
    '/projects/data-science': { status: 301, destination: '/projects#data-science' },
    '/projects/machine-learning': { status: 301, destination: '/projects#machine-learning' },
  },
});