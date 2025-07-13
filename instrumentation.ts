export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.OTEL_EXPORTER_OTLP_ENDPOINT &&
    process.env.OTEL_EXPORTER_OTLP_PROTOCOL
  ) {
    // @ts-expect-error TS5097
    await import("./instrumentation.node.ts");
  }
}
