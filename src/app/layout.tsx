import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midul-dev.vercel.app"),
  title: "Midul Mahmud | MERN Stack & Full-Stack Web Developer",
  description:
    "Portfolio of Midul Mahmud - MERN Stack & Full-Stack Developer specializing in Next.js, TypeScript, React, Node.js, Express, and MongoDB. Fast, accessible, and scalable web applications.",
  keywords: [
    "Midul Mahmud",
    "MERN Stack Developer",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Frontend Developer",
    "Software Engineer",
    "Dhaka Bangladesh"
  ],
  authors: [{ name: "Midul Mahmud" }],
  openGraph: {
    title: "Midul Mahmud | MERN Stack & Full-Stack Developer",
    description:
      "Crafting high-performance web applications with React, Next.js, TypeScript, Node.js, and MongoDB.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
