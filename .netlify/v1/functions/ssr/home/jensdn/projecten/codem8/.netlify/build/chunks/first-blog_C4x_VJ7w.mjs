import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DJkfMIdL.mjs';
import 'clsx';

const html = "<h2 id=\"hello\">Hello</h2>\n<p>Hello world!</p>";

				const frontmatter = {"title":"My first blog post","date":"2023-07-24T00:00:00.000Z"};
				const file = "/home/jensdn/projecten/codem8/src/content/docs/blog/first-blog.md";
				const url = undefined;
				function rawContent() {
					return "\n## Hello\n\nHello world!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"hello","text":"Hello"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
