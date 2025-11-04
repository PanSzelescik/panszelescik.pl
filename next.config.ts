import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  generateEtags: true,
  output: "standalone",
  typedRoutes: true,
  reactCompiler: true,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
    optimizePackageImports: ["date-fns-tz"],
  },
  bundlePagesRouterDependencies: true,
  redirects: async () => [
    {
      source: "/niedziela-handlowa/:city",
      destination: "/niedziela-handlowa",
      statusCode: 301,
    },
  ],
};

export default nextConfig;

initOpenNextCloudflareForDev();
