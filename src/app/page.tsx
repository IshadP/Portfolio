"use client"

import Image from "next/image";
import PrimaryProjectCard from "../components/PrimaryProjectCard";
import SecondaryProjectCard from "../components/SecondaryProjectCard";
import AboutCard from "../components/AboutCard";
import AiExperimentCard from "../components/AiExperimentCard";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center relative bg-bg-subtle px-6">
      <div className="w-full flex justify-center max-w-[1024px] z-1 @container">
        {/* {Hero - Fixed in Background} */}
        <Hero />

        {/* Content wrapper that scrolls over the hero */}
        <FadeIn className="w-full flex justify-center z-10 ">
          <motion.div className="flex md:mt-[40vh] mt-[50vh] max-w-[1024px] w-full flex-col bg-bg-subtle gap-4">
            <Navbar />
            <div className="grid w-full grid-cols-1 gap-4 is:grid-cols-2" id="projects">
              {/* Left Column */}
              <div className="flex h-full flex-col gap-4">
                <AboutCard />
                <PrimaryProjectCard
                  title="redesigned search for user intent"
                  subtitle="Youtube"
                  imageCenter="/cards/Youtube1-01.png"
                  imageLeft="/cards/Youtube1-02.png"
                  imageRight="/cards/Youtube1-03.png"
                  routeText="/YOUTUBE"
                  href="/youtube"
                  hoverLabelBg="#ff0000"
                  hoverLabelText="#ffffff"
                />

                {/* AiExperiment Card - Desktop */}
                <div className="hidden flex-1 md:flex md:min-h-0">
                  <AiExperimentCard />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex h-full flex-col gap-4">
                <PrimaryProjectCard
                  title="reduced task completion time by 30%"
                  subtitle="Printhub"
                 imageCenter="/cards/Print1-01.png"
                  imageLeft="/cards/Print1-02.png"
                  imageRight="/cards/Print1-03.png"
                  routeText="/PRINTHUB"
                  href="/printhub"
                  hoverLabelBg="#5CC05E"
                  hoverLabelText="#ffffff"
                />

                <SecondaryProjectCard
                  title="improved FTE while retaining habits"
                  subtitle="Printhub"
                  imageLeft="/cards/Printhub2-01.png"
                  imageRight="/cards/Printhub2-02.png"
                  routeText="/PRINTHUB"
                  href="/printhub"
                  hoverLabelBg="#5CC05E"
                  hoverLabelText="#ffffff"
                />
              </div>

              {/* AiExperiment Card - Mobile Only (Bottom of List) */}
              <div className="flex min-h-[150px] flex-1 md:hidden">
                <AiExperimentCard className="w-full" />
              </div>
            </div>

             <Footer />
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
