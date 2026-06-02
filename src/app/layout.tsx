import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter_Tight({
  variable: "--font-display",
  display: "swap"
});

// const generalSans = localFont({
//   src: "../../public/fonts/GeneralSans-Variable.woff2",
//   variable: "--font-display",
//   display: "swap",
// });

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
    title: "Ishad Pande",
    description:
      "The portfolio of Ishad Pande, a product designer who can code.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} $ antialiased flex flex-col min-h-screen`}
      >
        <main className="grow bg-bg-subtle">{children}</main>
        <p className="text-center bg-bg-subtle font-label-lg-mono text-text-muted p-8"> Designed and built by Ishad Pande</p>
      </body>
    </html>
  );
}
