import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Rapid Miles Logistics | Freight, Shipping & Delivery Solutions in Nigeria",
  description:
    "Rapid Miles Logistics connects businesses with fast, reliable, and affordable freight and delivery services in Nigeria. We offer air, sea, and ground logistics tailored to your shipping needs.",
  keywords: [
    "logistics company in Nigeria",
    "freight shipping",
    "ocean freight",
    "air freight",
    "ground transportation",
    "warehousing Nigeria",
    "shipping company Ilorin",
    "fast delivery logistics",
    "supply chain services",
    "cargo transport Nigeria",
  ],
  authors: [{ name: "Rapid Miles Logistics" }],
  creator: "Rapid Miles Logistics",
  applicationName: "Rapid Miles Logistics",
  themeColor: "#0066ff",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title:
      "Rapid Miles Logistics | Freight, Shipping & Delivery Solutions in Nigeria",
    description:
      "Reliable and fast logistics services across Nigeria. Connect your business to the world with Rapid Miles Logistics.",
    url: "https://www.rapidmileslogistics.netlify.app",
    siteName: "Rapid Miles Logistics",
    images: [
      {
        url: "/images/paterner2.jpg",
        width: 1200,
        height: 630,
        alt: "Rapid Miles Logistics Hero Image",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Miles Logistics | Freight, Shipping & Delivery Solutions",
    description:
      "We provide reliable and fast freight, warehousing, and logistics services across Nigeria. Contact us to optimize your supply chain.",
    creator: "@RapidMiles",
    images: ["/images/partner1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
