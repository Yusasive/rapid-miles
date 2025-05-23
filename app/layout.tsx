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
  title: "Rapid Miles Logistics Fast Pickup & Last-Mile Delivery in Ilorin",
  description:
    "Affordable same-day pickup & last-mile delivery in Ilorin! Rapid Miles Logistics offers fast, reliable parcel & e-commerce delivery services across ilorin. ✔ Timely ✔ Secure ✔ Customer-focused.",
  keywords: [
    "logistics company in Ilorin",
    "Last-mile delivery services in Ilorin",
    "Reliable pick-up and delivery company in Ilorin",
    "Same-day parcel delivery Ilorin",
    "Express courier services in Ilorin",
    "Fast package pick-up and drop-off in Ilorin",
    "Affordable last-mile logistics in Ilorin",
    "Door-to-door delivery service in Ilorin",
    "E-commerce delivery solutions in Ilorin",
    "Local dispatch riders in Ilorin",
    "On-demand package delivery in Ilorin",
    "Best last-mile delivery company in Ilorin ",
    "Quick pick-up service for businesses in Ilorin",
    "Same-day grocery delivery Ilorin",
    "Cheapest parcel delivery near me (Ilorin)",
    "Fast document courier service in Ilorin",
    "24/7 pick-up and delivery in ilorin",
    "Reliable dispatch riders in Ilorin",
    "Dispatch service for small businesses in Ilorin",
    "Fragile item pick-up and delivery in Ilorin",
    "Pharmacy/medication delivery in Ilorin",
    "Food and restaurant delivery logistics in Ilorin",
    "Retail goods pick-up and delivery Ilorin",
    "Office supplies delivery service in Ilorin",
    "Bulk item home delivery in ilorin",
    "Fashion & apparel courier service in Ilorin",
    "Electronics safe delivery in Ilorin",
  ],
  authors: [{ name: "Rapid Miles Logistics" }],
  creator: "Rapid Miles Logistics",
  applicationName: "Rapid Miles Logistics",
  themeColor: "#0066ff",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Rapid Miles Logistics Fast Pickup & Last-Mile Delivery in Ilorin",
    description:
      "Affordable same-day pickup & last-mile delivery in Ilorin! Rapid Miles Logistics offers fast, reliable parcel & e-commerce delivery services across ilorin. ✔ Timely ✔ Secure ✔ Customer-focused.",
    url: "https://www.rapidmileslogistics.netlify.app",
    siteName: "Rapid Miles Logistics",
    images: [
      {
        url: "/logo/Logo2.png",
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
    title: "Rapid Miles Logistics Fast Pickup & Last-Mile Delivery in Ilorin",
    description:
      "Affordable same-day pickup & last-mile delivery in Ilorin! Rapid Miles Logistics offers fast, reliable parcel & e-commerce delivery services across ilorin. ✔ Timely ✔ Secure ✔ Customer-focused.",
    creator: "@RapidMiles",
    images: ["/logo/Logo1.png"],
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
