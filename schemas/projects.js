export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Project Name",
      name: "projectName",
      type: "string",
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
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
