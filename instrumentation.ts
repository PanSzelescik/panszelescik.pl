import { registerOTel } from "@vercel/otel";

export function register() {
  if (process.env.OTEL_EXPORTER_OTLP_ENDPOINT && process.env.OTEL_EXPORTER_OTLP_PROTOCOL) {
    registerOTel({ serviceName: "panszelescik" });
  }
}
