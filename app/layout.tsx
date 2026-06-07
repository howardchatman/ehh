import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Echoing Holistic Health™ — Healing Water™ | Sea Moss Hydration Houston",
  description:
    "Sea moss-powered functional hydration crafted with alkaline water, fresh fruit, and real ingredients. Houston delivery available. Healing Water™ by Echoing Holistic Health™.",
  keywords: [
    "Sea Moss Water Houston",
    "Sea Moss Drinks Houston",
    "Functional Hydration",
    "Hydration Drinks Houston",
    "Sea Moss Beverage",
    "Wellness Drinks Houston",
    "Alkaline Hydration",
    "Sea Moss Wellness",
  ],
  openGraph: {
    title: "Echoing Holistic Health™ — Healing Water™",
    description: "Hydration. Wellness. Abundance. From the Source to the Body™.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${inter.variable} h-full`}
      style={
        {
          "--font-serif": "var(--font-bodoni), var(--font-cormorant), Georgia, serif",
          "--font-sans": "var(--font-inter), system-ui, sans-serif",
        } as React.CSSProperties
      }
    >
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
