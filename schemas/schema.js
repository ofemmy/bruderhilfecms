// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import project from "./projects";
import route from "./route";
import section from "./section";
import siteSettings from "./siteSettings";
import page from "./page";
import cta from "./objects/cta";
import hero from "./objects/hero";
import sectionItem from "./objects/sectionItem";
import leaders from "./team";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "myproject",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    project,
    route,
    cta,
    sectionItem,
    page,
    section,
    siteSettings,
    hero,
    leaders,
  ]),
});
