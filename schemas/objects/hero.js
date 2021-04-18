export default {
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    { name: "heading", type: "string", title: "Heading" },
    { name: "tagline", type: "string", title: "Tagline" },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
      options: { hotspot: true },
    },
    {
      name: "ctas",
      type: "array",
      of: [{ title: "Call to action", type: "cta" }],
    },
  ],
  preview: {
    select: { title: "heading", media: "backgroundImage" },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero Section",
        media,
      };
    },
  },
};
