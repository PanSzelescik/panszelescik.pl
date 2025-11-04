import type { NextConfig } from "next";
import {
  initOpenNextCloudflareForDev,
  getDeploymentId,
} from "@opennextjs/cloudflare";

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
  },
  bundlePagesRouterDependencies: true,
  deploymentId: getDeploymentId(),
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
