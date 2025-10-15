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
  format?: "auto" | "avif" | "webp | "jpeg" | "baseline-jpeg" | "json";
}) {
  if (process.env.NODE_ENV === "development") {
    return src;
  }
  const params = [`width=${width}`, `quality=${quality || 75}`, `format=${format || "auto"}`, "onerror=redirect"];
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
