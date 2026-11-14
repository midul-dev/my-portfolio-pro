import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
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
    "Dhaka Bangladesh",
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-sky-500/30 selection:text-sky-400">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
