import type { NextConfig } from "next";
//import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  generateEtags: true,
  output: "standalone",
  typedRoutes: true,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["panszelescik.pl"],
    },
    reactCompiler: true,
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

export default nextConfig;

/*const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);*/
