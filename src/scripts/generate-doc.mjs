import { generateFiles } from "fumadocs-openapi";

void generateFiles({
  // the OpenAPI schema
  // For Vercel users, we recommend a URL instead.
  input: ["../../content/docs/openapi/data.yaml"],
  output: "../../content/docs/openapi/",
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
});
