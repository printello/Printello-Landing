import type { Metadata } from "next";
import { Jost, Figtree } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], weight: ["700"], variable: "--font-jost" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-figtree" });

export const metadata: Metadata = {
  title: "Printello | Custom Printing & Apparel",
  description: "DTF gang sheets, custom printed apparel and bulk apparel catalogue. Contact Printello on WhatsApp or email.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
