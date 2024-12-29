import type { Metadata } from "next";
import "./globals.css";
import { playFairDisplay } from "./fonts";


export const metadata: Metadata = {
  title: "tienda de ropa",
  description: "alegorica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${playFairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
