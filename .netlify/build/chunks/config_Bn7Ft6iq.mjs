import { o as objectType, a as stringType, u as unionType, b as arrayType, d as dateType, h as booleanType, J as defineCollection } from './content_BP_MmZgA.mjs';
import { d as docsSchema } from './StarlightPage_hBovIcPG.mjs';
import { g as AstroUserError } from './astro/assets-service_CNprl8SU.mjs';

const blogAuthorSchema = objectType({
  /**
   * The name of the author.
   */
  name: stringType().min(1),
  /**
   * The title of the author.
   */
  title: stringType().optional(),
  /**
   * The URL or path to the author's picture.
   */
  picture: stringType().optional(),
  /**
   * The URL to the author's website.
   */
  url: stringType().url().optional()
});
const blogEntrySchema = ({ image }) => objectType({
  /**
   * The author(s) of the blog post.
   * If not provided, the authors will be inferred from the `authors` configuration option if defined.
   */
  authors: unionType([stringType(), blogAuthorSchema, arrayType(unionType([stringType(), blogAuthorSchema]))]).optional(),
  /**
   * The date of the blog post which must be a valid YAML timestamp.
   * @see https://yaml.org/type/timestamp.html
   */
  date: dateType(),
  /**
   * The excerpt of the blog post used in the blog post list and tags pages.
   * If not provided, the entire blog post content will be rendered.
   */
  excerpt: stringType().optional(),
  /**
   * A list of tags associated with the blog post.
   */
  tags: stringType().array().optional(),
  /**
   * An optional cover image for the blog post.
   */
  cover: unionType([
    objectType({
      /**
       * Alternative text describing the cover image for assistive technologies.
       */
      alt: stringType(),
      /**
       * Relative path to an image file in your project, e.g. `../../assets/cover.png`.
       */
      image: image()
    }),
    objectType({
      /**
       * Alternative text describing the cover image for assistive technologies.
       */
      alt: stringType(),
      /**
       * Relative path to an image file in your project to use in dark mode, e.g. `../../assets/cover-dark.png`.
       */
      dark: image(),
      /**
       * Relative path to an image file in your project to use in light mode, e.g. `../../assets/cover-light.png`.
       */
      light: image()
    })
  ]).optional(),
  /**
   * Defines whether the blog post is featured or not.
   * Featured blog posts are displayed in a dedicated sidebar group above recent blog posts.
   */
  featured: booleanType().optional()
});
function blogSchema(context) {
  if (!context) {
    throw new AstroUserError(
      "Missing blog schema validation context.",
      `You may need to update your content collections configuration in the \`src/content/config.ts\` file and pass the context to the \`blogSchema\` function:

\`docs: defineCollection({ schema: docsSchema({ extend: (context) => blogSchema(context) }) })\`

If you believe this is a bug, please file an issue at https://github.com/HiDeoo/starlight-blog/issues/new/choose`
    );
  }
  return blogEntrySchema(context).partial();
}

const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: (context) => blogSchema(context)
    })
  })
};

export { collections };
