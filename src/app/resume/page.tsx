"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import dynamic from "next/dynamic";

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
    <div className="flex flex-col min-h-screen items-center relative px-6">
      <div className="w-full flex justify-center max-w-[1024px] @container">
        {/* Hero Background */}
        <Hero />

        {/* Content wrapper */}
        <FadeIn className="w-full flex justify-center z-10">
          <motion.div className="flex mt-[40vh] max-w-[1024px] w-full flex-col bg-bg-subtle gap-4">
            <Navbar />
            
            <div className="w-full">
              <ResumeViewer />
            </div>

            <Footer />
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
