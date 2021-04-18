export default {
  title: "Section Item",
  name: "sectionItem",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
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
      title: "Call To Action",
      name: "cta",
      type: "cta",
    },
  ],
};

// export default {
//   title: "Page Item",
//   name: "pageItem",
//   type: "document",
//   fields: [
//     { title: "Title", name: "title", type: "string" },
//     { title: "Feature Image", name: "featureImage", type: "image" },
//     {
//       title: "Paragraphs",
//       name: "paragraphs",
//       type: "array",
//       of: [{ type: "text" }],
//     },
//     {
//       title: "Call To Action",
//       name: "cta",
//       type: "cta",
//     },
//   ],
// };
