export default {
  title: "Projects",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Project Name",
      name: "projectName",
      type: "string",
      validation: (Rule) => Rule.required("Project title is required"),
    },
    {
      title: "Slug",
      name: "titleSlug",
      type: "slug",
      options: {
        source: "projectName",
        maxLength: 50,
      },
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      description: "Images should not be more than 15.",
    },
  ],
};
