"use client";

import { useEffect } from "react";
import { ProjectsSection } from "@/components/sections/Projects";
import Divider from "@/components/ui/Divider";
import { CraftSection } from "@/components/sections/CraftSection";
import Hero from "@/components/ui/Hero";
import FadeIn from "@/components/ui/FadeIn";
import { Experience } from "@/components/sections/Experience";
import Footer from "@/components/ui/Footer";
import AboutSection from "@/components/sections/Aboutme";


export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative ">
      <div className="w-content flex flex-col gap-0">
        <Hero />
        <Divider />
        <FadeIn className="relative flex flex-col w-content z-10 bg-bg-default gap-6">

          <ProjectsSection />

          <CraftSection />

          <Experience />

          <AboutSection />

          <Footer />
        </FadeIn>
      </div>
    </div>
  );
}
