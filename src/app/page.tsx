"use client"

import Image from "next/image";
import PrimaryProjectCard from "../components/Landing/PrimaryProjectCard";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import Experience from "@/components/Landing/Experience";
import Hatching from "@/components/Hatching";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center relative bg-bg-subtle px-6">
            <div className="w-full flex flex-col justify-center max-w-[1024px] z-1 @container">
                {/* {Hero - Fixed in Background} */}
                <Hero />


                {/* Content wrapper that scrolls over the hero */}
                <FadeIn className="w-full flex justify-center ">
                    <motion.div className="flex max-w-[1024px] w-full flex-col bg-bg-subtle rounded-lg pb-16 relative">

                        {/* Top Gradient Fade Overlay */}
                        <div className="sticky top-0 inset-x-0 w-full h-32 bg-linear-to-b from-bg-subtle from-20% to-transparent to-100% pointer-events-none z-40 -mb-32"></div>

                        <Navbar />

                        {/* Hatching */}
                        <Hatching />

                        {/* Projects Section */}
                        <div className="w-full flex flex-col border border-border-default max-w-[1024px] overflow-hidden">
                            <PrimaryProjectCard
                                title="Reduced Task Completion Time by 30% on Printhub"
                                description="Redesigned the main checkout flow to optimise user intent."
                                slug="/PRINTHUB"
                                ctaText="View Case Study"
                                imageCenter="/cards/Print1-01.png"
                                imageLeft="/cards/Print1-02.png"
                                imageRight="/cards/Print1-03.png"
                                href="/printhub"
                                side="left"
                                className="rounded-none! outline-0! border-0!"
                            />

                            {/* Internal layout separator */}
                            <div className="w-full h-10 border-t border-b border-border-default flex justify-between items-center">
                                <div className="flex-1 h-full p-2 border-r border-border-default" />
                                <div className="flex-1 h-full p-2" />
                                <div className="flex-1 h-full p-2 border-l border-border-default" />
                            </div>

                            <PrimaryProjectCard
                                title="Redesigned Search for User Intent on Youtube"
                                description="Rethought the search experience to better surface user intent."
                                slug="/YOUTUBE"
                                ctaText="View Case Study"
                                imageCenter="/cards/Youtube1-01.png"
                                imageLeft="/cards/Youtube1-02.png"
                                imageRight="/cards/Youtube1-03.png"
                                href="/youtube"
                                side="right"
                                className="rounded-none! outline-0! border-0!"
                            />
                        </div>

                        {/* Hatching */}
                        <div className="relative h-6 w-full border-x border-border-default bg-[image:repeating-linear-gradient(315deg,_var(--color-border-default)_0,_var(--color-border-default)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></div>

                        {/* Experience Section */}
                        <Experience />

                        {/* Hatching */}
                        <Hatching />

                        {/* Footer */}
                        <Footer />
                    </motion.div>
                </FadeIn>
            </div>
        </div>
    );
}
