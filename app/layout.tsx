import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import type { ReactNode } from "react";
import Analytics from "@/app/lib/analytics/Analytics";

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
  authors: [
    {
      name: "PanSzelescik",
    },
  ],
  openGraph: {
    title: "PanSzelescik",
    description: "Developer from Poland",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "PanSzelescik.pl",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/icon.png`,
        width: 1200,
        height: 1200,
        alt: "PanSzelescik",
      },
    ],
  },
  twitter: {
    site: "@PanSzelescik",
    siteId: "911164970339110912",
    creator: "@PanSzelescik",
    creatorId: "911164970339110912",
    card: "summary_large_image",
    title: "PanSzelescik",
    description: "Developer from Poland",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/icon.png`,
        width: 1200,
        height: 1200,
        alt: "PanSzelescik",
      },
    ],
  },
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
