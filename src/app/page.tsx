"use client"

import Image from "next/image";
import InteractionCard from "../components/InteractionCard";
import FeatureCard from "../components/FeatureCard";
import AboutCard from "../components/AboutCard";
import AiExperimentCard from "../components/AiExperimentCard";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center relative px-6">
      <div className="w-full flex justify-center max-w-[1024px] @container">
        {/* {Hero - Fixed in Background} */}
        <Hero />

        {/* Content wrapper that scrolls over the hero */}
        <FadeIn className="w-full flex justify-center z-10">
          <motion.div className="flex mt-[40vh] max-w-[1024px] w-full flex-col bg-bg-primary gap-6">
            <Navbar />
            <div className="grid w-full grid-cols-1 gap-2 is:grid-cols-2 pb-6" id="projects">
              {/* Left Column */}
              <div className="flex h-full flex-col gap-2">
                <AboutCard />
                <InteractionCard
                  title="redesigned search for user intent"
                  subtitle="Youtube"
                  imageCenter="/cards/Printhub1-01.png"
                  imageLeft="/cards/Printhub1-02.png"
                  imageRight="/cards/Printhub1-03.png"
                  routeText="/YOUTUBE"
                  href="/youtube"
                />

                {/* AiExperiment Card - Desktop */}
                <div className="hidden flex-1 md:flex md:min-h-0">
                  <AiExperimentCard />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex h-full flex-col gap-2">
                <InteractionCard
                  title="reduced task completion time by 30%"
                  subtitle="Printhub"
                  imageCenter="/cards/Printhub1-01.png"
                  imageLeft="/cards/Printhub1-02.png"
                  imageRight="/cards/Printhub1-03.png"
                  routeText="/PRINTHUB"
                  href="/printhub"
                />

                <FeatureCard
                  title="improved FTE while retaining habits"
                  subtitle="Printhub"
                  imageLeft="/cards/Printhub2-01.png"
                  imageRight="/cards/Printhub2-02.png"
                  routeText="/PRINTHUB"
                  href="/printhub"
                />
              </div>

              {/* AiExperiment Card - Mobile Only (Bottom of List) */}
              <div className="flex min-h-[150px] flex-1 md:hidden">
                <AiExperimentCard className="w-full" />
              </div>
            </div>

            <div className="">
              <Footer />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
