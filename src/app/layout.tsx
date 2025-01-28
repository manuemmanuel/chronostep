import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: [
    {
      path: '../fonts/ClashDisplay-Variable.ttf',
      style: 'normal',
    }
  ],
  variable: '--font-clash-display'
})

export const metadata: Metadata = {
  title: "chronostep",
  description: "Ecommerce store for Chronostep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} antialiased`}>
      <body className="font-clash-display">
        {children}
      </body>
    </html>
  );
}
