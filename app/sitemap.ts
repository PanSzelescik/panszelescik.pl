import type { MetadataRoute } from "next";
import link from "@/app/lib/link";

const lastModified = new Date();

export const dynamic = "force-static";
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date();

  return [
    {
      url: link("/"),
      lastModified,
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
