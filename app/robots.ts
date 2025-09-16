import type { MetadataRoute } from "next";
import link from "@/app/lib/link";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: link("sitemap.xml"),
  };
}
