import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://PromitMukherjee.github.io"),
  title: "Promit Mukherjee — AI / ML Researcher & Systems Builder",
  description:
    "Portfolio of Promit Mukherjee, AI / ML Researcher & Systems Builder exploring machine learning, computer vision, representation learning, algorithms, and systems.",
  keywords: [
    "Promit Mukherjee",
    "AI ML Researcher",
    "Systems Builder",
    "Computer Vision",
    "Representation Learning",
    "Diabetic Retinopathy AI",
    "Quantum-Inspired Computing",
    "Memory-Efficient Algorithms",
  ],
  authors: [{ name: "Promit Mukherjee" }],
  alternates: {
    canonical: "https://PromitMukherjee.github.io",
  },
  openGraph: {
    title: "Promit Mukherjee — AI / ML Researcher & Systems Builder",
    description:
      "Portfolio of Promit Mukherjee, AI / ML Researcher & Systems Builder exploring machine learning, computer vision, representation learning, algorithms, and systems.",
    url: "https://PromitMukherjee.github.io",
    siteName: "Promit Mukherjee Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile/promit_image.png",
        width: 1200,
        height: 630,
        alt: "Promit Mukherjee — AI / ML Researcher & Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promit Mukherjee — AI / ML Researcher & Systems Builder",
    description:
      "Portfolio of Promit Mukherjee, AI / ML Researcher & Systems Builder exploring machine learning, computer vision, representation learning, algorithms, and systems.",
    images: ["/profile/promit_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-ivory-100 text-espresso-900 font-sans antialiased selection:bg-burgundy-800 selection:text-ivory-50">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
