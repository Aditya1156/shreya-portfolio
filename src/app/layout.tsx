import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreya-sawarn.vercel.app"),
  title: "Shreya Sawarn — Software Engineer",
  description:
    "Software engineer focused on backend and full-stack development. REST APIs, authentication, and dependable database work — built across two internships and competitive programming.",
  keywords: [
    "Shreya Sawarn",
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Shreya Sawarn" }],
  openGraph: {
    title: "Shreya Sawarn — Software Engineer",
    description:
      "Backend & full-stack developer. REST APIs, authentication, and dependable database work.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
