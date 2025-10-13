import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MCR Estate Management | Melissa Chatters-Rosario",
  description: "Refined stewardship for exceptional homes. Discretion, precision, and excellence in private estate management by Melissa Chatters-Rosario.",
  keywords: ["estate management", "property management", "luxury homes", "household management", "private estates"],
  authors: [{ name: "Melissa Chatters-Rosario" }],
  openGraph: {
    title: "MCR Estate Management | Melissa Chatters-Rosario",
    description: "Refined stewardship for exceptional homes. Discretion, precision, and excellence in private estate management.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen bg-bgDark text-muted antialiased flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
