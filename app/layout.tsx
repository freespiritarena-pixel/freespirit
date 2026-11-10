import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bodyFont, displayFont, palette, paletteCss } from "@/theme";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Horse Riding Academy in [City, Province]`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "horse riding lessons",
    "riding academy Canada",
    "equestrian lessons for kids",
    "adult riding lessons",
    "hunter jumper training",
    "dressage lessons",
    "summer riding camp",
    "horse boarding",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title: `${site.name}: Where riders find their stride`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: Where riders find their stride`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: palette.navy,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: paletteCss }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
