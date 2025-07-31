import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "standalone",
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["panszelescik.pl"],
    },
  },
  allowedDevOrigins: ["panszelescik.pl", "192.168.1.100"],
  headers: async () => [
    {
      source: "/service-worker.js",
      headers: [
        {
          key: "Content-Type",
          value: "application/javascript; charset=utf-8",
        },
        {
          key: "Cache-Control",
          value: "no-cache, no-store, must-revalidate",
        },
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'; script-src 'self'",
        },
      ],
    },
  ],
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
