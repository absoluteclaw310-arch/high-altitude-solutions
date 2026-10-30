import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
