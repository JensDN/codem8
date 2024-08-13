import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [starlight({
    title: 'My delightful docs site',
    customCss: [
      // Path to your Tailwind base styles:
      './src/styles/tailwind.css',
    ],
  }), mdx(), sitemap(), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }),]
});