import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://panszelescik.pl',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}