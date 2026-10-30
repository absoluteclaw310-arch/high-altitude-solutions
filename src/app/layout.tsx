import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "High Altitude Solutions | Bucket Truck Services",
  description: "Professional bucket truck services for tree trimming, signage installation, and exterior maintenance in Schenectady and the Capital Region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
