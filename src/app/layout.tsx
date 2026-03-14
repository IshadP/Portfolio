import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ishad Pande — Product Designer",
    template: "%s | Ishad Pande",
  },
  description:
    "The portfolio of Ishad Pande, a product designer crafting thoughtful digital experiences. Case studies in UX, UI, and product design.",
  keywords: [
    "product designer",
    "UX designer",
    "UI designer",
    "portfolio",
    "case study",
    "Ishad Pande",
  ],
  authors: [{ name: "Ishad Pande" }],
  creator: "Ishad Pande",
  metadataBase: new URL("https://ishadpande.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ishadpande.com",
    siteName: "Ishad Pande",
    title: "Ishad Pande — Product Designer",
    description:
      "The portfolio of Ishad Pande, a product designer crafting thoughtful digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ishad Pande — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishad Pande — Product Designer",
    description:
      "The portfolio of Ishad Pande, a product designer crafting thoughtful digital experiences.",
    images: ["/og-image.png"],
    creator: "@ishadpande",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="grow">
          {children}
        </main>
        <div className="w-full mt-auto">
          <Image 
            src="/minecraft-landscape.png" 
            alt="Minecraft Landscape" 
            width={1920} 
            height={200} 
            quality={90}
            className="w-full h-auto block"
          />
        </div>
      </body>
    </html>
  );
}
