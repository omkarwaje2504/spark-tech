import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sparktech Processes LLP | Edible Oil Extraction & Refinery Equipment",
  description: "Leading manufacturer and exporter of industrial machinery for edible oil extraction, refinery plants, and food processing equipment. A Perfect EPC Project Partner since 2007.",
  keywords: "oil extraction plant, edible oil refinery, solvent extraction, vegetable oil, oil processing equipment, Mumbai, India",
  authors: [{ name: "Sparktech Processes LLP" }],
  icons: {
    icon: "/images/Sparktech logo.png",
    apple: "/images/Sparktech logo.png",
  },
  openGraph: {
    title: "Sparktech Processes LLP | Edible Oil Extraction & Refinery Equipment",
    description: "Leading manufacturer and exporter of industrial machinery for edible oil extraction and refinery plants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
