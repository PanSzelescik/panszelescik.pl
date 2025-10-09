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
    inlineCss: true,
    serverActions: {
      allowedOrigins: ["panszelescik.pl"],
    },
  },
  allowedDevOrigins: ["panszelescik.pl", "192.168.1.100"],
  redirects: async () => [
    {
      source: "/niedziela-handlowa/:city",
      destination: "/niedziela-handlowa",
      statusCode: 301,
    },
  ],
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
