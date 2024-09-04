import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CTrPk4u9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/projects.astro.mjs');
const _page3 = () => import('./pages/_prefix_/rss.xml.astro.mjs');
const _page4 = () => import('./pages/_prefix_/tags/_tag_.astro.mjs');
const _page5 = () => import('./pages/_prefix_/_---page_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const _page7 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.13.3_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@astrojs+starlight@0.25.5_astro@4.13.3_typescript@5.5.4_/node_modules/@astrojs/starlight/404.astro", _page1],
    ["src/pages/projects/index.astro", _page2],
    ["node_modules/.pnpm/starlight-blog@0.12.0_@astrojs+starlight@0.25.5_astro@4.13.3_typescript@5.5.4___astro@4.13.3_typescript@5.5.4_/node_modules/starlight-blog/routes/rss.xml.ts", _page3],
    ["node_modules/.pnpm/starlight-blog@0.12.0_@astrojs+starlight@0.25.5_astro@4.13.3_typescript@5.5.4___astro@4.13.3_typescript@5.5.4_/node_modules/starlight-blog/routes/Tags.astro", _page4],
    ["node_modules/.pnpm/starlight-blog@0.12.0_@astrojs+starlight@0.25.5_astro@4.13.3_typescript@5.5.4___astro@4.13.3_typescript@5.5.4_/node_modules/starlight-blog/routes/Blog.astro", _page5],
    ["src/pages/index.astro", _page6],
    ["node_modules/.pnpm/@astrojs+starlight@0.25.5_astro@4.13.3_typescript@5.5.4_/node_modules/@astrojs/starlight/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "fe559760-9d8a-463f-bb3b-a8f0678f8902"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
