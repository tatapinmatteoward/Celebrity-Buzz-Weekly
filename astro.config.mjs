import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://celebrity-buzz-weekly.pages.dev',
  build: {
    format: 'directory'
  }
});
