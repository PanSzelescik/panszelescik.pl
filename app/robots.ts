import type { MetadataRoute } from "next";
import link from "@/app/lib/link";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cdn-cgi/", "/api/"],
    },
    sitemap: link("sitemap.xml"),
  };
}
