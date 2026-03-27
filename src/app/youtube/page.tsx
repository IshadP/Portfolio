"use client"

import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import FadeIn from "../../components/FadeIn";
import Badge from "../../components/caseStudy/Badge";
import GrayBox from "../../components/caseStudy/GrayBox";
import ProConCard from "../../components/caseStudy/ProConCard";
import Hatching from "../../components/Hatching";

// ──────────────────────────────────────────────────────────────────────────────
// ── Shared UI Components (standardized) ──
// ──────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-body-mono sm:text-label-lg text-text-disabled w-full">
            {children}
        </p>
    );
}

function BodyText({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-body text-text-secondary w-full">
            {children}
        </p>
    );
}

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h2 text-text-primary w-full">
            {children}
        </p>
    );
}

function Title({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h1 text-text-primary w-full">
            {children}
        </p>
    );
}

function ActionIndicator({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white border-2 border-[#F94412] px-4 py-2 rounded-full inline-flex self-center z-20">
            <p className="font-sans font-medium text-black text-[12px] md:text-[14px]">
                {children}
            </p>
        </div>
    );
}

const A = "/youtube";

export default function YouTubeCaseStudy() {
    return (
        <div className="bg-bg-subtle relative">
            {/* ── Hero Background ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn className="w-full flex justify-center z-10">
                <div className="relative z-10 mx-auto flex w-full bg-bg-subtle max-w-[1024px] flex-col pb-32">
                    {/* Top Gradient Fade Overlay */}
                    <div className="sticky top-0 inset-x-0 w-full h-32 bg-linear-to-b from-bg-subtle from-20% to-transparent to-100% pointer-events-none z-40 -mb-32"></div>

                    {/* ── Navbar ── */}
                    <Navbar />
                    <Hatching height="h-12" />

                    {/* ── Progress Update Section ── */}
                    <section className="flex flex-col border-x border-t border-border-default w-full">
                        <div className="flex flex-col px-6 py-8 gap-6 w-full text-left">
                            <Heading>YouTube Case Study — Building for Intent</Heading>
                            <BodyText>
                                I am currently refactoring this case study to match the new standardized layout. This design deep-dives into intent-based search results and visual assistance in discovery.
                            </BodyText>
                        </div>
                    </section>
                    <div className="border border-border-default h-8 w-full"></div>

                    <Hatching height="h-24" />

                    {/* ── Footer ── */}
                    <Footer />
                </div>
            </FadeIn>
        </div>
    );
}
