/**
 * @file layout.js
 * @description Defines the global layout structure for the website, including providers and components like LanguageDetector and Toaster.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

import { Inter } from "next/font/google";
import "../styles/globals.css";
import LanguageDetector from "@/components/LanguageDetector/LanguageDetector";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

// Metadata configuration (nice for social sharing)
export const metadata = {
  title: "Mads & Nasim",
  description:
    "Du er invitert til bryllaupet vårt",
  openGraph: {
    title: "Mads & Nasim",
    description:
      "Du er invitert til bryllaupet vårt",
    url: "https://madsognasim.com/",
    siteName: "Mads & Nasim",
    images: [
      {
        url: "https://madsognasim.com/images/og-image.jpg",
        width: 1200,
        height: 600,
        alt: "Mads & Nasim giftar seg",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <body className={inter.className}>
        {/* Component to auto-detect and manage language */}
        <LanguageDetector />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
