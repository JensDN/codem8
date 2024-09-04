import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, d as renderSlot } from './astro/server_DJkfMIdL.mjs';
import { u as unionType, h as booleanType, a as stringType, o as objectType, n as numberType, v as enumType, r as recordType, w as undefinedType, x as lazyType, d as dateType, y as literalType, e as preprocessType, s as starlightConfig } from './content_BP_MmZgA.mjs';
import { I as Icons, h as BadgeConfigSchema, s as stripLeadingAndTrailingSlashes, H as HeadConfigSchema, i as urlToSlug, j as slugToLocaleData, k as getSidebar, u as useTranslations, l as getPrevNextLinks, m as getSiteTitle, n as getSiteTitleHref, o as getToC, p as parseWithFriendlyErrors, $ as $$Page } from './route-data_DWFEsdpu.mjs';

const PrevNextLinkConfigSchema = () => unionType([
  booleanType(),
  stringType(),
  objectType({
    /** The navigation link URL. */
    link: stringType().optional(),
    /** The navigation link text. */
    label: stringType().optional()
  }).strict()
]).optional();

const defaults = { minHeadingLevel: 2, maxHeadingLevel: 3 };
const TableOfContentsSchema = () => unionType([
  objectType({
    /** The level to start including headings at in the table of contents. Default: 2. */
    minHeadingLevel: numberType().int().min(1).max(6).optional().default(2),
    /** The level to stop including headings at in the table of contents. Default: 3. */
    maxHeadingLevel: numberType().int().min(1).max(6).optional().default(3)
  }),
  booleanType().transform((enabled) => enabled ? defaults : false)
]).default(defaults).refine((toc) => toc ? toc.minHeadingLevel <= toc.maxHeadingLevel : true, {
  message: "minHeadingLevel must be less than or equal to maxHeadingLevel"
});

const iconNames = Object.keys(Icons);
const HeroSchema = ({ image }) => objectType({
  /**
   * The large title text to show. If not provided, will default to the top-level `title`.
   * Can include HTML.
   */
  title: stringType().optional(),
  /**
   * A short bit of text about your project.
   * Will be displayed in a smaller size below the title.
   */
  tagline: stringType().optional(),
  /** The image to use in the hero. You can provide either a relative `file` path or raw `html`. */
  image: unionType([
    objectType({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: stringType().default(""),
      /** Relative path to an image file in your repo, e.g. `../../assets/hero.png`. */
      file: image()
    }),
    objectType({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: stringType().default(""),
      /** Relative path to an image file in your repo to use in dark mode, e.g. `../../assets/hero-dark.png`. */
      dark: image(),
      /** Relative path to an image file in your repo to use in light mode, e.g. `../../assets/hero-light.png`. */
      light: image()
    }),
    objectType({
      /** Raw HTML string instead of an image file. Useful for inline SVGs or more complex hero content. */
      html: stringType()
    }).transform(({ html }) => ({ html, alt: "" }))
  ]).optional(),
  /** An array of call-to-action links displayed at the bottom of the hero. */
  actions: objectType({
    /** Text label displayed in the link. */
    text: stringType(),
    /** Value for the link’s `href` attribute, e.g. `/page` or `https://mysite.com`. */
    link: stringType(),
    /** Button style to use. One of `primary`, `secondary`, or `minimal` (the default). */
    variant: enumType(["primary", "secondary", "minimal"]).default("minimal"),
    /**
     * An optional icon to display alongside the link text.
     * Can be an inline `<svg>` or the name of one of Starlight’s built-in icons.
     */
    icon: unionType([enumType(iconNames), stringType().startsWith("<svg")]).transform((icon) => {
      const parsedIcon = enumType(iconNames).safeParse(icon);
      return parsedIcon.success ? { type: "icon", name: parsedIcon.data } : { type: "raw", html: icon };
    }).optional(),
    /** HTML attributes to add to the link */
    attrs: recordType(unionType([stringType(), numberType(), booleanType()])).optional()
  }).array().default([])
});

const SidebarBaseSchema = objectType({
  /** The visible label for this item in the sidebar. */
  label: stringType(),
  /** Translations of the `label` for each supported language. */
  translations: recordType(stringType()).default({}),
  /** Adds a badge to the link item */
  badge: BadgeConfigSchema()
});
const SidebarGroupSchema = SidebarBaseSchema.extend({
  /** Whether this item should be collapsed by default. */
  collapsed: booleanType().default(false)
});
const linkHTMLAttributesSchema = recordType(
  unionType([stringType(), numberType(), booleanType(), undefinedType()])
);
const SidebarLinkItemHTMLAttributesSchema = () => linkHTMLAttributesSchema.default({});
const SidebarLinkItemSchema = SidebarBaseSchema.extend({
  /** The link to this item’s content. Can be a relative link to local files or the full URL of an external page. */
  link: stringType(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
}).strict();
const AutoSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Enable autogenerating a sidebar category from a specific docs directory. */
  autogenerate: objectType({
    /** The directory to generate sidebar items for. */
    directory: stringType().transform(stripLeadingAndTrailingSlashes),
    /**
     * Whether the autogenerated subgroups should be collapsed by default.
     * Defaults to the `AutoSidebarGroup` `collapsed` value.
     */
    collapsed: booleanType().optional()
    // TODO: not supported by Docusaurus but would be good to have
    /** How many directories deep to include from this directory in the sidebar. Default: `Infinity`. */
    // depth: z.number().optional(),
  })
}).strict();
const ManualSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Array of links and subcategories to display in this category. */
  items: lazyType(
    () => unionType([
      SidebarLinkItemSchema,
      ManualSidebarGroupSchema,
      AutoSidebarGroupSchema,
      InternalSidebarLinkItemSchema,
      InternalSidebarLinkItemShorthandSchema
    ]).array()
  )
}).strict();
const InternalSidebarLinkItemSchema = SidebarBaseSchema.partial({ label: true }).extend({
  /** The link to this item’s content. Must be a slug of a Content Collection entry. */
  slug: stringType(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
});
const InternalSidebarLinkItemShorthandSchema = stringType().transform((slug) => InternalSidebarLinkItemSchema.parse({ slug }));
unionType([
  SidebarLinkItemSchema,
  ManualSidebarGroupSchema,
  AutoSidebarGroupSchema,
  InternalSidebarLinkItemSchema,
  InternalSidebarLinkItemShorthandSchema
]);

const StarlightFrontmatterSchema = (context) => objectType({
  /** The title of the current page. Required. */
  title: stringType(),
  /**
   * A short description of the current page’s content. Optional, but recommended.
   * A good description is 150–160 characters long and outlines the key content
   * of the page in a clear and engaging way.
   */
  description: stringType().optional(),
  /**
   * Custom URL where a reader can edit this page.
   * Overrides the `editLink.baseUrl` global config if set.
   *
   * Can also be set to `false` to disable showing an edit link on this page.
   */
  editUrl: unionType([stringType().url(), booleanType()]).optional().default(true),
  /** Set custom `<head>` tags just for this page. */
  head: HeadConfigSchema(),
  /** Override global table of contents configuration for this page. */
  tableOfContents: TableOfContentsSchema().optional(),
  /**
   * Set the layout style for this page.
   * Can be `'doc'` (the default) or `'splash'` for a wider layout without any sidebars.
   */
  template: enumType(["doc", "splash"]).default("doc"),
  /** Display a hero section on this page. */
  hero: HeroSchema(context).optional(),
  /**
   * The last update date of the current page.
   * Overrides the `lastUpdated` global config or the date generated from the Git history.
   */
  lastUpdated: unionType([dateType(), booleanType()]).optional(),
  /**
   * The previous navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  prev: PrevNextLinkConfigSchema(),
  /**
   * The next navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  next: PrevNextLinkConfigSchema(),
  sidebar: objectType({
    /**
     * The order of this page in the navigation.
     * Pages are sorted by this value in ascending order. Then by slug.
     * If not provided, pages will be sorted alphabetically by slug.
     * If two pages have the same order value, they will be sorted alphabetically by slug.
     */
    order: numberType().optional(),
    /**
     * The label for this page in the navigation.
     * Defaults to the page `title` if not set.
     */
    label: stringType().optional(),
    /**
     * Prevents this page from being included in autogenerated sidebar groups.
     */
    hidden: booleanType().default(false),
    /**
     * Adds a badge to the sidebar link.
     * Can be a string or an object with a variant and text.
     * Variants include 'note', 'tip', 'caution', 'danger', 'success', and 'default'.
     * Passing only a string defaults to the 'default' variant which uses the site accent color.
     */
    badge: BadgeConfigSchema(),
    /** HTML attributes to add to the sidebar link. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
  }).default({}),
  /** Display an announcement banner at the top of this page. */
  banner: objectType({
    /** The content of the banner. Supports HTML syntax. */
    content: stringType()
  }).optional(),
  /** Pagefind indexing for this page - set to false to disable. */
  pagefind: booleanType().default(true),
  /**
   * Indicates that this page is a draft and will not be included in production builds.
   * Note that the page will still be available when running Astro in development mode.
   */
  draft: booleanType().default(false)
});
function docsSchema(...args) {
  const [options = {}] = args;
  const { extend } = options;
  return (context) => {
    const UserSchema = typeof extend === "function" ? extend(context) : extend;
    return UserSchema ? StarlightFrontmatterSchema(context).and(UserSchema) : StarlightFrontmatterSchema(context);
  };
}

const StarlightPageFrontmatterSchema = async (context) => {
  const userDocsSchema = await getUserDocsSchema();
  const schema = typeof userDocsSchema === "function" ? userDocsSchema(context) : userDocsSchema;
  return schema.transform((frontmatter) => {
    const { editUrl, sidebar, ...others } = frontmatter;
    const pageEditUrl = editUrl === void 0 || editUrl === true ? false : editUrl;
    return { ...others, editUrl: pageEditUrl };
  });
};
const LinkSchema = objectType({
  /** @deprecated Specifying `type` is no longer required. */
  type: literalType("link").default("link"),
  label: stringType(),
  href: stringType(),
  isCurrent: booleanType().default(false),
  badge: BadgeConfigSchema(),
  attrs: SidebarLinkItemHTMLAttributesSchema()
}).transform((item) => ({ badge: void 0, ...item }));
const LinkGroupBase = objectType({
  /** @deprecated Specifying `type` is no longer required. */
  type: literalType("group").default("group"),
  label: stringType(),
  collapsed: booleanType().default(false),
  badge: BadgeConfigSchema()
});
const LinkGroupSchema = preprocessType(
  // Map `items` to `entries` as expected by the `SidebarEntry` type.
  (arg) => {
    if (arg && typeof arg === "object" && "items" in arg) {
      const { items, ...rest } = arg;
      return { ...rest, entries: items };
    }
    return arg;
  },
  LinkGroupBase.extend({
    entries: lazyType(() => unionType([LinkSchema, LinkGroupSchema]).array())
  }).transform((item) => ({ badge: void 0, ...item }))
);
const StarlightPageSidebarSchema = unionType([LinkSchema, LinkGroupSchema]).array();
const normalizeSidebarProp = (sidebarProp) => {
  return parseWithFriendlyErrors(
    StarlightPageSidebarSchema,
    sidebarProp,
    "Invalid sidebar prop passed to the `<StarlightPage/>` component."
  );
};
async function generateStarlightPageRouteData({
  props,
  url
}) {
  const { isFallback, frontmatter, ...routeProps } = props;
  const slug = urlToSlug(url);
  const pageFrontmatter = await getStarlightPageFrontmatter(frontmatter);
  const id = `${stripLeadingAndTrailingSlashes(slug)}.md`;
  const localeData = slugToLocaleData(slug);
  const sidebar = props.sidebar ? normalizeSidebarProp(props.sidebar) : getSidebar(url.pathname, localeData.locale);
  const headings = props.headings ?? [];
  const pageDocsEntry = {
    id,
    slug,
    body: "",
    collection: "docs",
    data: {
      ...pageFrontmatter,
      sidebar: {
        attrs: {},
        hidden: false
      }
    }
  };
  const entry = pageDocsEntry;
  const entryMeta = {
    dir: props.dir ?? localeData.dir,
    lang: props.lang ?? localeData.lang,
    locale: localeData.locale
  };
  const editUrl = pageFrontmatter.editUrl ? new URL(pageFrontmatter.editUrl) : void 0;
  const lastUpdated = pageFrontmatter.lastUpdated instanceof Date ? pageFrontmatter.lastUpdated : void 0;
  const routeData = {
    ...routeProps,
    ...localeData,
    id,
    editUrl,
    entry,
    entryMeta,
    hasSidebar: props.hasSidebar ?? entry.data.template !== "splash",
    headings,
    labels: useTranslations(localeData.locale).all(),
    lastUpdated,
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    sidebar,
    siteTitle: getSiteTitle(localeData.lang),
    siteTitleHref: getSiteTitleHref(localeData.locale),
    slug,
    toc: getToC({
      ...routeProps,
      ...localeData,
      entry,
      entryMeta,
      headings,
      id,
      locale: localeData.locale,
      slug
    })
  };
  if (isFallback) {
    routeData.isFallback = true;
  }
  return routeData;
}
async function getStarlightPageFrontmatter(frontmatter) {
  const schema = await StarlightPageFrontmatterSchema({
    image: () => objectType({
      src: stringType(),
      width: numberType(),
      height: numberType(),
      format: unionType([
        literalType("png"),
        literalType("jpg"),
        literalType("jpeg"),
        literalType("tiff"),
        literalType("webp"),
        literalType("gif"),
        literalType("svg"),
        literalType("avif")
      ])
    })
  });
  return parseWithFriendlyErrors(
    schema,
    frontmatter,
    "Invalid frontmatter props passed to the `<StarlightPage/>` component."
  );
}
async function getUserDocsSchema() {
  const userCollections = (await import('./collection-config_CgiF4iVI.mjs')).collections;
  return userCollections?.docs.schema ?? docsSchema();
}

const $$Astro = createAstro("https://jensdn.github.io");
const $$StarlightPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StarlightPage;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...await generateStarlightPageRouteData({ props: Astro2.props, url: Astro2.url }) }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/jensdn/projecten/codem8/node_modules/.pnpm/@astrojs+starlight@0.25.5_astro@4.13.3_typescript@5.5.4_/node_modules/@astrojs/starlight/components/StarlightPage.astro", void 0);

export { $$StarlightPage as $, docsSchema as d };
