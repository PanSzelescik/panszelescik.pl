import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  generateEtags: true,
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["date-fns-tz"],
    optimizeServerReact: true,
  },
  redirects: async () => [
    {
      source: "/niedziela-handlowa/:city",
      destination: "/niedziela-handlowa",
      statusCode: 301,
    },
  ],
};

export default nextConfig;
