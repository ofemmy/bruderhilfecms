import S from "@sanity/desk-tool/structure-builder";
import { SettingsSVG } from "./svgs/SettingsSVG";
const hiddenDocTypes = (listItem) =>
  !["siteSettings"].includes(listItem.getId());
export default () =>
  S.list()
    .title("Site")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(SettingsSVG)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      //   S.listItem()
      //     .title("Routes")
      //     .schemaType("route")
      //     .child(S.documentTypeList("route").title("Routes")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
