import type { MetadataRoute } from "next";
import link from "@/app/lib/link";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date();

  return [
    {
      url: link("/"),
      lastModified: date,
      priority: 1,
    },
    {
      url: link("niedziela-handlowa"),
      lastModified: date,
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
