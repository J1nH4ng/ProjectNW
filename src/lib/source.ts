import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";
import { createOpenAPI, attachFile } from "fumadocs-openapi/server";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: "/docs",
  pageTree: {
    attachFile,
  },
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const openapi = createOpenAPI({
  // options
});
