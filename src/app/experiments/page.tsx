"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import SecondaryProjectCard from "@/components/Landing/SecondaryProjectCard";
import BuildingWithAiCard from "@/components/BuildingWithAiCard";
import Hatching from "@/components/Hatching";

export default function AiExperimentsPage() {
  return (
    <div className="flex flex-col min-h-screen items-center relative px-6">
      <div className="w-full flex flex-col justify-center max-w-[1024px] @container">
        {/* Hero Background */}
        <Hero />

        {/* Content wrapper */}
        <FadeIn className="w-full flex justify-center z-10">
          <motion.div className="flex max-w-[1024px] w-full flex-col bg-bg-subtle">
            {/* Top Gradient Fade Overlay */}
            <div className="sticky top-0 inset-x-0 w-full h-32 bg-linear-to-b from-bg-subtle from-20% to-transparent to-100% pointer-events-none z-40 -mb-32"></div>

            <Navbar />

            <Hatching />
            <div className="flex flex-col">
              <div className="grid w-full grid-cols-1 md:grid-cols-2" id="experiments">
                <SecondaryProjectCard
                  title="Prototype for User Testing"
                  slug="Printhub"
                  imageCenter="/cards/Print1-01.png"
                  imageLeft="/cards/Print1-02.png"
                  imageRight="/cards/Print1-03.png"
                  ctaText="View Live"
                  href="https://printproto.vercel.app/"
                  variant="two-pages"
                />

                <SecondaryProjectCard
                  title="Retro Pomodoro App"
                  slug="POMDOM"
                  imageCenter="/cards/pomdom-screenshot.png"
                  imageLeft="/cards/pomdom-screenshot.png"
                  imageRight="/cards/pomdom-screenshot.png"
                  ctaText="View Github"
                  href="https://github.com/IshadP/Pomdom"
                  variant="two-pages"
                />

                {/* <PrimaryProjectCard
                  title="Intelligent Layout Systems"
                  subtitle="Research"
                  imageCenter="/cards/Printhub1-03.png"
                  imageLeft="/cards/Printhub2-01.png"
                  imageRight="/cards/Printhub2-02.png"
                  routeText="/RESEARCH"
                  href="#"
                  variant="two-pages"
                /> */}
              </div>

              <BuildingWithAiCard />
            </div>

            <Footer />
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
