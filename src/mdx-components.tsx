import defaultComponents from "fumadocs-ui/mdx";
import { APIPage } from "fumadocs-openapi/ui";
import { openapi } from "@/lib/source";
import type { MDXComponents } from "mdx/types";
import { Mermaid } from "@/components/mdx/mermaid";
import * as Twoslash from "fumadocs-twoslash/ui";
import * as TabsComponents from "fumadocs-ui/components/tabs";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...Twoslash,
    ...TabsComponents,
    Mermaid,
    APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
    ...components,
  };
}
