import { ImageResponse } from "next/og";
import KsefImage from "@/app/(site)/(ksef)/KsefImage";

export default async function KsefImageResponse({
  letter,
  requestUrl,
}: {
  letter: "e" | "y";
  requestUrl: string;
}) {
  const fontData = await fetch(
    new URL("/fonts/Montserrat-Bold.ttf", requestUrl),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(<KsefImage letter={letter} />, {
    width: 512,
    height: 512,
    fonts: [
      {
        name: "Montserrat",
        data: fontData,
        style: "normal",
        weight: 700,
      },
    ],
  });
}
