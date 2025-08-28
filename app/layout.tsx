import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import type { ReactNode } from "react";
import Analytics from "@/app/lib/analytics/Analytics";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
    { media: "(prefers-color-scheme: light)", color: "#E5E5E5" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
    url: baseUrl,
    siteName: "PanSzelescik.pl",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: `${baseUrl}/icon.png`,
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
        url: `${baseUrl}/icon.png`,
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
    <head>
      <meta name="apple-mobile-web-app-title" content="PanSzelescik" />
    </head>
      <body className={`${nunito.className} antialiased transition-colors motion-reduce:transition-none`}>
        {children}
        <Script src="/sw-registration.js" />
        <Analytics />
      </body>
    </html>
  );
}
