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
  title: {
    default: "Ishad Pande | Product Designer & Developer",
    template: "%s | Ishad Pande",
  },
  description: "Personal portfolio of Ishad Pande - A product designer who codes, designing digital interfaces and bringing them to life through hands-on prototypes.",
  keywords: ["Ishad Pande", "Product Designer", "Web Developer", "Nagpur", "Portfolio", "UX/UI Design", "React", "Next.js"],
  authors: [{ name: "Ishad Pande" }],
  creator: "Ishad Pande",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ishadpande.me", // Placeholder - user should update if they have a domain
    title: "Ishad Pande | Product Designer",
    description: "Product designer who codes, specializing in digital interfaces and interactive prototypes.",
    siteName: "Ishad Pande Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishad Pande | Product Designer",
    description: "Product designer who codes, specializing in digital interfaces and interactive prototypes.",
    creator: "@ishadpande",
  },
  robots: {
    index: true,
    follow: true,
  },
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
