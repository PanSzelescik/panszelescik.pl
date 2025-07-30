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
  }
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
