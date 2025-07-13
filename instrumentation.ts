import { registerOTel } from "@vercel/otel";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";

export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.OTEL_EXPORTER_OTLP_ENDPOINT &&
    process.env.OTEL_EXPORTER_OTLP_PROTOCOL
  ) {
    registerOTel({
      serviceName: "panszelescik",
      spanProcessors: [new BatchSpanProcessor(new OTLPTraceExporter())],
    });
  }
}
