import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://jensdn.github.io',
  output: 'server',
  adapter: netlify(),
  integrations: [starlight({
    title: 'CODEM8',
    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg',
    },
    plugins: [starlightBlog()],
    components: {
      // Override the default `Header` component.
      Header: './src/components/Header.astro'
    },
    social: {
      github: 'https://github.com/JensDN'
    },
    customCss: [
    // Fontsource files for to regular and semi-bold font weights.
    '@fontsource-variable/fira-code',
    // Path to Custom base styles
    './src/styles/custom.css',
    // Path to Tailwind base styles:
    './src/styles/tailwind.css']
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  }), react()]
});