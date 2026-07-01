import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight, PT_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const ptMono = PT_Mono({
  variable: "--font-d-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ishad Pande",
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
    description: "The portfolio of Ishad Pande, a product designer who can code.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ishad Pande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishad Pande — Product Designer",
    description:
      "The portfolio of Ishad Pande, a product designer crafting thoughtful digital experiences.",
    images: ["/og-image.webp"],
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

// Hoisted out of the component: this object is identical on every render,
// so building it at module scope means it's computed once, not per-request.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ishad Pande",
  url: "https://ishadpande.com",
  image: "https://ishadpande.com/Photo.jpg",
  jobTitle: "Product Designer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Government College of Engineering, Nagpur",
  },
  sameAs: [
    "https://x.com/ishadpande",
    "https://www.linkedin.com/in/ishadpande",
    "https://www.behance.net/ishadpande",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ptMono.variable} antialiased bg-bg-default flex flex-col items-center min-h-screen overflow-x-hidden`}
      >
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>
        <main className="grow w-full flex flex-col justify-center items-center">
          {children}
        </main>
        <p className="text-center font-label-lg-mono text-text-muted md:p-16 p-4">
          Designed and built by Ishad Pande
        </p>
      </body>
    </html>
  );
}