
import { ProjectsSection } from "@/components/sections/Projects";
import Divider from "@/components/ui/Divider";
import { CraftSection } from "@/components/sections/CraftSection";
import Hero from "@/components/ui/Hero";
import FadeIn from "@/components/ui/FadeIn";
import { Experience } from "@/components/sections/Experience";
import Footer from "@/components/ui/Footer";
import AboutSection from "@/components/sections/Aboutme";
import { ScrollRestoration } from "@/components/ui/ScrollRestoration";


export default function Home() {
  return (
    <div className="flex flex-col items-center w-full relative ">
      <ScrollRestoration />
      <div className="w-full md:w-content flex flex-col gap-0 px-4 md:px-0">
        <Hero />
        <Divider />
        <FadeIn className="relative flex flex-col w-full md:w-content z-10 bg-bg-default gap-6">

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
