"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import PrimaryProjectCard from "@/components/Landing/PrimaryProjectCard";
import BuildingWithAiCard from "@/components/BuildingWithAiCard";

export default function AiExperimentsPage() {
  return (
    <div className="flex flex-col min-h-screen items-center relative px-6">
      <div className="w-full flex justify-center max-w-[1024px] @container">
        {/* Hero Background */}
        <Hero />

        {/* Content wrapper */}
        <FadeIn className="w-full flex justify-center z-10">
          <motion.div className="flex mt-[40vh] max-w-[1024px] w-full flex-col bg-bg-subtle gap-4">
            <Navbar />

            <div className="flex flex-col gap-4">
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2" id="experiments">
                <PrimaryProjectCard
                  title="Prototype for User Testing"
                  subtitle="Printhub"
                  imageCenter="/cards/Print1-01.png"
                  imageLeft="/cards/Print1-02.png"
                  imageRight="/cards/Print1-03.png"
                  routeText="/PRINTHUB"
                  href="https://printproto.vercel.app/"
                  variant="two-pages"
                />

                <PrimaryProjectCard
                  title="Retro Pomodoro App"
                  subtitle="POMDOM"
                  imageCenter="/cards/Printhub2-01.png"
                  imageLeft="/cards/pomdom-screenshot.png"
                  imageRight="/cards/pomdom-screenshot.png"
                  routeText="/POMDOM"
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
