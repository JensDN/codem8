import { c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_DJkfMIdL.mjs';
import { $ as $$StarlightPage } from '../chunks/StarlightPage_hBovIcPG.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const BentoGrid = ({
  children,
  className
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      ),
      children
    }
  );
};
const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      className
    ),
    children: [
      /* @__PURE__ */ jsx("div", { children: background }),
      /* @__PURE__ */ jsxs("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground", children: name }),
        /* @__PURE__ */ jsx("p", { className: "max-w-lg text-white", children: description })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          ),
          children: /* @__PURE__ */ jsx(Button, { variant: "ghost", asChild: true, size: "sm", className: "pointer-events-auto", children: /* @__PURE__ */ jsxs("a", { href, children: [
            cta,
            /* @__PURE__ */ jsx(ArrowRightIcon, { className: "ml-2 h-4 w-4" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" })
    ]
  },
  name
);

const nonGramRef = new Proxy({"src":"/_astro/non-gram.DaaGa_pp.jpeg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jensdn/projecten/codem8/src/assets/projects-cards/non-gram.jpeg";
							}
							
							return target[name];
						}
					});

const features = [
  {
    name: "NONO VS GRAM",
    description: "A Nonogram versus game",
    href: "/",
    cta: "Learn more",
    background: /* @__PURE__ */ jsx("img", { className: "absolute opacity-50", alt: "", src: nonGramRef.src }),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 text-black"
  }
];
function ProjectsIndex() {
  return /* @__PURE__ */ jsx(BentoGrid, { className: "lg:grid-rows-3", children: features.map((feature) => /* @__PURE__ */ jsx(BentoCard, { ...feature }, feature.name)) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const PROJECTS_PAGE_PROPS = {
    frontmatter: {
      title: "Projects"
    }
  };
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": PROJECTS_PAGE_PROPS.frontmatter, "hasSidebar": false, "headings": [] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectsIndex", ProjectsIndex, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/projects", "client:component-export": "ProjectsIndex" })} ` })}`;
}, "/home/jensdn/projecten/codem8/src/pages/projects/index.astro", void 0);

const $$file = "/home/jensdn/projecten/codem8/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
