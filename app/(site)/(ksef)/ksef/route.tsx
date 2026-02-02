import KsefImageResponse from "@/app/(site)/(ksef)/KsefImageResponse";

export async function GET(request: Request) {
  return KsefImageResponse({ letter: "e", requestUrl: request.url });
}
