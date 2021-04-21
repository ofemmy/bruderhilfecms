import { UserSVG } from "../svgs/UserSVG";

export default {
  title: "Leaders",
  name: "leaders",
  type: "document",
  icon: UserSVG,
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "position", title: "Position", type: "string" },
    { name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] },
    {
      name: "orderNum",
      title: "Ordering Number",
      type: "number",
      description:
        "This field determines the order in which the items are displayed on the front end",
    },
  ],
};
