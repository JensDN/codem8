import { c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_DJkfMIdL.mjs';
import { $ as $$StarlightPage } from '../chunks/StarlightPage_hBovIcPG.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_QUOTES_URL = "https://zenquotes.io/api/random/";
  async function getapi(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  const quote = await getapi(API_QUOTES_URL);
  const HOME_PAGE_PROPS = {
    frontmatter: {
      title: "home",
      template: "splash",
      hero: {
        title: "Welcome at codem8",
        tagline: `${quote[0].q} -- ${quote[0].a}`,
        image: {
          alt: "codem8 landing picture",
          file: { src: "src/assets/codem8-landing.png", height: 200, width: 200, format: "png" }
        },
        actions: [
          {
            text: "To the blog",
            link: "/blog",
            icon: "right-arrow"
          },
          {
            text: "To my projects",
            link: "/projects",
            icon: "right-arrow"
          }
        ]
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": HOME_PAGE_PROPS.frontmatter })}`;
}, "/home/jensdn/projecten/codem8/src/pages/index.astro", void 0);

const $$file = "/home/jensdn/projecten/codem8/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
