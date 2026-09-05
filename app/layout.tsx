import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Career Tech Global LLC",
    template: "%s | Career Tech Global LLC",
  },

  description:
    "Career Tech Global LLC helps professionals launch high-paying careers in Artificial Intelligence, Data Science, Cyber Security, Cloud Computing and emerging technologies through industry-focused training and career services.",

  keywords: [
    "Career Tech Global LLC",
    "Artificial Intelligence",
    "Generative AI",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "IT Training",
    "Career Services",
    "Online Tech Courses",
  ],

  authors: [
    {
      name: "Career Tech Global LLC",
    },
  ],

  creator: "Career Tech Global LLC",

  publisher: "Career Tech Global LLC",

  metadataBase: new URL("https://careertechglobal.com"),

  openGraph: {
    title: "Career Tech Global LLC",

    description:
      "Build your future with AI, Data Science & Cyber Security.",

    url: "https://careertechglobal.com",

    siteName: "Career Tech Global LLC",

    locale: "en_US",

    type: "website",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}