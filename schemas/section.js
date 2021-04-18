export default {
  title: "Page Section",
  name: "pageSection",
  type: "document",
  fields: [
    { title: "Section Header Title", name: "sectionTitle", type: "string" },
    {
      title: "Section Feature Image",
      name: "sectionImage",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Children",
      name: "children",
      description: "Add subsections here",
      type: "array",
      of: [{ type: "pageSection" }],
    },
    {
      title: "Call To Action",
      name: "cta",
      type: "cta",
    },
  ],
};
