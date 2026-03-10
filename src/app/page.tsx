"use client"

import Image from "next/image";
import InteractionCard from "../components/InteractionCard";
import FeatureCard from "../components/FeatureCard";
import AboutCard from "../components/AboutCard";
import AiExperimentCard from "../components/AiExperimentCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justif gap-4 justify-center ">
      <motion.div
        className="w-[1024px] @container flex flex-col gap-4">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2" id="projects">
          {/* Left Column */}
          <div className="flex h-full flex-col gap-4">
            <AboutCard />
            <InteractionCard
              title="redesigned search for user intent"
              subtitle="Youtube"
              imageCenter="/cards/Printhub1-01.png"
              imageLeft="/cards/Printhub1-02.png"
              imageRight="/cards/Printhub1-03.png"
              routeText="/YOUTUBE"
              className="aspect-2/3"
            />

            {/* AiExperiment Card - Desktop */}
            <div className="hidden flex-1 md:flex md:min-h-0">
              <AiExperimentCard />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex h-full flex-col gap-4">
            <InteractionCard
              title="redesigned search for user intent"
              subtitle="Youtube"
              imageCenter="/cards/Printhub1-01.png"
              imageLeft="/cards/Printhub1-02.png"
              imageRight="/cards/Printhub1-03.png"
              routeText="/YOUTUBE"
            />

            <FeatureCard
              title="improved FTE while retaining habits"
              subtitle="Printhub"
              imageLeft="/cards/Printhub2-01.png"
              imageRight="/cards/Printhub2-02.png"
              routeText="/PRINTHUB"
            />
          </div>

          {/* AiExperiment Card - Mobile Only (Bottom of List) */}
          <div className="flex min-h-[150px] flex-1 md:hidden">
            <AiExperimentCard className="w-full" />
          </div>
        </div>
      </motion.div>
    </div>

  );
}
