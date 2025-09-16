import type { MetadataRoute } from "next";
import link from "@/app/lib/link";

const lastModified = new Date();

export const dynamic = "force-static";
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: link("/"),
      lastModified,
      priority: 1,
    },
    {
      url: link("niedziela-handlowa"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
