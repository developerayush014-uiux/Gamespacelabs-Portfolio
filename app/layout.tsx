import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GameSpace Lab — Engineering Experiences at Scale",
    template: "%s | GameSpace Lab",
  },
  description:
    "Built by engineers from Netflix and Google, GameSpace Lab delivers world-class Android & web solutions to businesses across 200+ countries.",
  keywords: [
    "Android development",
    "web app development",
    "mobile app agency",
    "GameSpace Lab",
    "Netflix engineers",
    "Google engineers",
    "software consulting",
  ],
  openGraph: {
    title: "GameSpace Lab — Engineering Experiences at Scale",
    description:
      "Built by engineers from Netflix and Google. 100+ projects. 200+ countries. Now expanding in India.",
    url: "https://gamespacelab.com",
    siteName: "GameSpace Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameSpace Lab",
    description: "Engineering Experiences at Scale",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-navy-950 text-white antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0d1426",
              color: "#ffffff",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
