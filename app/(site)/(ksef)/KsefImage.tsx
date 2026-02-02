import { Property } from "csstype";

const colorBlue = "#252954";
const colorRed = "#E20E17";

export default async function KsefImage({
  letter,
  backgroundColor = "white",
}: {
  letter: "e" | "y";
  backgroundColor?: Property.BackgroundColor;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor,
        fontFamily: "Montserrat",
        fontSize: 192,
        letterSpacing: "-0.02em",
      }}
    >
      <span style={{ color: colorBlue }}>KS</span>
      <span style={{ color: colorRed }}>{letter}</span>
      <span style={{ color: colorBlue }}>F</span>
    </div>
  );
}
