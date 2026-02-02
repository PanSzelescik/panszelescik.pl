import KsefImageResponse from "@/app/(site)/(ksef)/KsefImageResponse";

export const runtime = "edge";

export async function GET() {
  return KsefImageResponse({ letter: "e" });
}
