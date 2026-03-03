"use client";

import dynamic from "next/dynamic";
import { ArrowDown } from "@phosphor-icons/react";
import Hero from "../components/Hero";
import FadeIn from "../components/FadeIn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
    ssr: false,
    loading: () => (
        <div className="w-full rounded-4xl border-3 border-outline-primary overflow-hidden bg-white flex items-center justify-center p-4 md:p-8 py-20">
            <p className="text-lg text-text-tertiary animate-pulse">
                Loading resume…
            </p>
        </div>
    ),
});

const RESUME_URL = "/assets/resume.pdf";

export default function ResumePage() {
    return (
        <div className="bg-bg-primary relative">
            {/* ── Hero Section ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn>
                <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-8 px-4 pb-32">

                    {/* ── Navbar ── */}
                    <Navbar />

                    {/* ── Download Button ── */}
                    <div className="flex items-center justify-center w-full pt-4">
                        <a
                            href={RESUME_URL}
                            download
                            className="inline-flex items-center gap-3 rounded-full bg-bg-primary px-8 py-4 text-lg font-semibold text-text-primary transition-all duration-300 hover:bg-[#333] hover:text-white hover:border-[#333] active:scale-95"
                        >
                            <ArrowDown size={22} weight="bold" />
                            Download Resume
                        </a>
                    </div>

                    {/* ── PDF Viewer ── */}
                    <PdfViewer fileUrl={RESUME_URL} />

                    {/* ── Footer ── */}
                    <Footer />

                </div>
            </FadeIn>
        </div>
    );
}
