export default {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    { title: "Page Title", name: "title", type: "string" },
    {
      title: "Page Sections",
      name: "sections",
      type: "array",
      of: [
        { type: "hero" },
        {
          type: "reference",
          to: [
            { type: "project", title: "Projects" },
            { type: "pageSection", title: "Page section" },
          ],
        },
      ],
    },
  ],
};
