import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "jyvylvgo",
  dataset: "production",
  title: "Beauty Clinic Website",
  apiVersion: "2024-08-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
