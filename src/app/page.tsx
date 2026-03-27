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
                        <Hatching />

                        {/* Experience Section */}
                        <Experience />

                        {/* Hatching */}
                        <Hatching />

                        <div className="w-full flex flex-col  border border-border-default max-w-[1024px] overflow-hidden">
                                <div className="p-6">
                                <p className="font-label-lg-mono text-text-muted">Person behind the designs</p>
                                </div>
                                <div className="flex md:flex-row flex-col border-t border-border-default">
                                    <div className="w-full md:w-1/2 flex flex-col gap-4 border-r border-border-default p-6 font-body-md text-text-muted">
                                        <p>Hello, I'm Ishad,</p>
                                        <p>Currently in Senior Year of B.Tech in Computer Science and Engineering at Government College of Engineering, Nagpur.</p>
                                        <p>My first introduction to design was in 6th grade when I wondered "Why do these cars look so good?".</p>
                                        <p>Fast forward to my second year, I picked up designing again to answer a single question "How should this app look and feel?".</p>
                                        <p> I have been designig ever since. But I go back to development once in a while just for fun.</p>
                                        <p>PS: About us page coming soon!</p>
                                    </div>
                                    <div className="w-full md:w-1/2 relative min-h-[500px]">
                                        <Image 
                                            src="/Photo.jpg" 
                                            alt="Photo" 
                                            fill 
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px" 
                                            priority
                                            className="object-cover image-rendering-high-quality" 
                                        />
                                    </div>
                                </div>
                            </div>
                        

                        <Hatching />

                        {/* Footer */}
                        <Footer />
                    </motion.div>
                </FadeIn>
            </div>
        </div>
    );
}
