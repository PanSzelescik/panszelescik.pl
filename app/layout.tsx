import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Analytics from "@/app/lib/Analytics";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#181818" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "PanSzelescik",
  description: "Developer from Poland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
