"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import dynamic from "next/dynamic";
import Hatching from "@/components/Hatching";

// Dynamically import the viewer to avoid SSR issues with pdfjs
const ResumeViewer = dynamic(() => import("@/components/ResumeViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-bg-subtle rounded-2xl animate-pulse flex items-center justify-center">
      <p className="text-code text-text-secondary">Initializing PDF Viewer...</p>
    </div>
  ),
});

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen items-center relative bg-bg-subtle px-6">
      <div className="w-full flex flex-col justify-center max-w-[1024px] z-1 @container">
        {/* Hero Background */}
        <Hero />

        {/* Content wrapper */}
        <FadeIn className="w-full flex justify-center ">
          <motion.div className="flex max-w-[1024px] w-full flex-col bg-bg-subtle rounded-lg pb-16 relative">
            
            {/* Top Gradient Fade Overlay */}
            <div className="sticky top-0 inset-x-0 w-full h-32 bg-linear-to-b from-bg-subtle from-20% to-transparent to-100% pointer-events-none z-40 -mb-32"></div>

            <Navbar />
            
            <Hatching />

            <div className="w-full border-x border-t border-border-default overflow-hidden flex flex-col items-center">
              <ResumeViewer />
            </div>

            <Hatching />

            <Footer />
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
