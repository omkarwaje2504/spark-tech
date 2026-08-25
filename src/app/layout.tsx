import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
// import StickyCTA from "@/components/StickyCTA";
import Header from "@/components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SPARKTECH Processes LLP | Edible Oil Extraction & Refinery Equipment",
  description:
    "Leading manufacturer and exporter of industrial machinery for edible oil extraction, refinery plants, and food processing equipment. A Perfect EPC Project Partner since 2007.",
  keywords:
    "oil extraction plant, edible oil refinery, solvent extraction, vegetable oil, oil processing equipment, Mumbai, India",
  authors: [{ name: "SPARKTECH Processes LLP" }],
  icons: {
    icon: "/images/SPARKTECH logo.png",
    apple: "/images/SPARKTECH logo.png",
  },
  openGraph: {
    title:
      "SPARKTECH Processes LLP | Edible Oil Extraction & Refinery Equipment",
    description:
      "Leading manufacturer and exporter of industrial machinery for edible oil extraction and refinery plants.",
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
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="SPARKTECH" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        {children}
        <div>
          <WhatsAppFloat />
          {/* <StickyCTA /> */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
