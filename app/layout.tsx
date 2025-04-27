import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Ibra Cart Eco Temp",
  description: "Ibrahim - The Coder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}