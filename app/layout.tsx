import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Promit Mukherjee — AI Researcher & Systems Builder",
    description:
      "Exploring how intelligent systems can learn, reason, and operate across healthcare, biology, and large-scale computing.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile/promit_image.png",
        width: 1200,
        height: 630,
        alt: "Promit Mukherjee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promit Mukherjee — AI Researcher & Systems Builder",
    description:
      "Exploring how intelligent systems can learn, reason, and operate across healthcare, biology, and large-scale computing.",
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
        {children}
      </body>
    </html>
  );
}
