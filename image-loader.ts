const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareImageLoader({
  src,
  width,
  quality,
  format,
}: {
  src: string;
  width: number;
  quality?: number;
  format?: "auto" | "avif" | "webp" | "jpeg" | "baseline-jpeg" | "json";
}) {
  const params = [
    `width=${width}`,
    `quality=${quality || 75}`,
    `format=${format || "auto"}`,
    "onerror=redirect",
  ];
  if (process.env.NODE_ENV === "development") {
    // Serve the original image when using `next dev`
    return `${src}?${params.join("&")}`;
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
