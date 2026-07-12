
import { ProjectsSection } from "@/components/sections/Projects";
import Divider from "@/components/ui/Divider";
import { CraftSection } from "@/components/sections/CraftSection";
import Hero from "@/components/sections/Hero";
import FadeIn from "@/components/ui/FadeIn";
import { Experience } from "@/components/sections/Experience";
import Footer from "@/components/ui/Footer";
import AboutSection from "@/components/sections/Aboutme";
import { ScrollRestoration } from "@/components/ui/ScrollRestoration";


export default function Home() {
  return (
    <div className="flex flex-col items-center w-full relative ">
      <ScrollRestoration />
      <div className="w-full flex flex-col  items-center  gap-0 md:px-0">
        <Hero />

        <FadeIn className="relative flex flex-col pt-4 md:pt-0 w-full z-10 bg-bg-default gap-6">

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
