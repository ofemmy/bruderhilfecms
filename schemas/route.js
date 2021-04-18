import { RouteSVG } from "../svgs/RouteSVG";
export default {
  name: "route",
  type: "document",
  title: "Routes",
  icon: RouteSVG,
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "page",
      type: "reference",
      description: "Select the page that this route should point to",
      to: [
        {
          type: "page",
        },
      ],
    },
    {
      name: "includeInSitemap",
      type: "boolean",
      title: "Include page in sitemap",
      description: "For search engines. Will be added to /sitemap.xml",
    },
    {
      name: "disallowRobots",
      type: "boolean",
      title: "Disallow in robots.txt",
      description: "Hide this route for search engines",
    },
  ],
  preview: {
    select: {
      slug: "slug.current",
      pageTitle: "page.title",
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === "/" ? "/" : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};

// export default {
//   title: "Routes",
//   name: "route",
//   type: "document",
//   fields: [
//     {
//       title: "Route Name",
//       name: "routeName",
//       type: "string",
//     },
//     {
//       title: "Href",
//       name: "href",
//       type: "string",
//     },
//   ],
//   preview: {
//     select: { title: "routeName", subtitle: "href" },
//   },
// };
