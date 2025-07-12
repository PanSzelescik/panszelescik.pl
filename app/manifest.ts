import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PanSzelescik",
    short_name: "PanSzelescik",
    description: "Fullstack developer from Poland",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    dir: "ltr",
    lang: "pl",
    prefer_related_applications: false,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
