import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishad Pande",
  description: "Personal Website of Ishad Pande",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${interMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
