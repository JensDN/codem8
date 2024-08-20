import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	site: 'https://jensdn.github.io',
	output: 'server',
	adapter: netlify(),
	integrations: [starlight({
		title: 'CODEM8',
		plugins: [starlightBlog({
			/* sidebar: [
				  {
					  label: 'Guides',
					  items: [
						  // Each item here is one entry in the navigation menu.
						  { label: 'Example Guide', slug: 'guides/example' },
					  ],
				  },
				  {
					  label: 'Reference',
					  autogenerate: { directory: 'reference' },
				  },
			], */
		})],
		social: {
			github: 'https://github.com/JensDN'
		},
		customCss: [
			// Fontsource files for to regular and semi-bold font weights.
			'@fontsource-variable/fira-code',
			// Path to Custom base styles
			'./src/styles/custom.css',
			// Path to Tailwind base styles:
			'./src/styles/tailwind.css'
		]
	}), tailwind({
		// Disable the default base styles:
		applyBaseStyles: false,
	}),]
});