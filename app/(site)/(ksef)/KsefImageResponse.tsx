import { ImageResponse } from "next/og";
import KsefImage from "@/app/(site)/(ksef)/KsefImage";

const font = fetch(new URL("./Montserrat-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function KsefImageResponse({ letter }: { letter: "e" | "y" }) {
  const fontData = await font;

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
