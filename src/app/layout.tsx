import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linden Hollow | Private Country Estate in Ashford Hollow, Vermont",
  description:
    "Linden Hollow is a five bedroom country residence on one and a quarter private acres in Ashford Hollow, Vermont. Listed by Whitman and Co. Estate Partners. Schedule a private viewing today.",
  keywords: [
    "Linden Hollow",
    "Vermont real estate",
    "Ashford Hollow",
    "luxury home",
    "country estate",
    "private residence",
    "Whitman and Co.",
  ],
  authors: [{ name: "Whitman and Co. Estate Partners" }],
  openGraph: {
    title: "Linden Hollow | Private Country Estate",
    description:
      "A five bedroom country residence on 1.2 private acres in Ashford Hollow, Vermont. Listed at $4,850,000.",
    siteName: "Linden Hollow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linden Hollow | Private Country Estate",
    description:
      "A five bedroom country residence on 1.2 private acres in Ashford Hollow, Vermont.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
