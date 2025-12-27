"use client"
import BentoGrid from "../components/bento-grid";
import BentoCard from "../components/bento-card";
import Button from "../components/button";
import TextHighlight from "../components/text-highlight";
import LocationMap from "../components/location-map";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import Image from "next/image";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex justify-center relative">
      <div className="absolute justify-center items-center h-[50vh] w-full z-0 bg-linear-to-b from-[#ffffff] to-[#F8F5F1] "></div>
      <div className="max-w-5xl w-full flex flex-col z-2 p-4 md:p-8">
        <NavBar />
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <h1 className="text-8xl font-bold leading-[100%] p-6 tracking-[-0.24rem]">Ishad Pande</h1>
          <div className="flex gap-2 flex-col sm:flex-row pb-16">
            <Button variant="primary" href="mailto:ispande16@gmail.com" rightIcon="ArrowUpRightIcon">Let's Talk</Button>
            <Button variant="secondary">View Resume</Button>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <BentoGrid>
            <BentoCard colSpan={2} rowSpan={1} className="bg-white">
              <div className="h-full flex items-center text-text-500 justify-center font-medium text-3xl p-6">
                <TextHighlight
                  text="A product designer who codes, designing digital interfaces and bringing them to life through hands-on prototypes."
                  highlight="product designer"
                  className="text-2xl md:text-3xl"
                />
              </div>
            </BentoCard>

            <BentoCard colSpan={2} rowSpan={1} className="bg-white">
              <div className="h-full">
                <LocationMap />
              </div>
            </BentoCard>
          </BentoGrid>

          <div className="flex flex-col gap-4">
            <div className="text-4xl font-bold tracking-[-0.0675rem] text-text-on-primary">curated projects</div>
            <BentoGrid>
              <BentoCard colSpan={2} rowSpan={2} className="bg-white" whileHover={{ boxShadow: "0px 0px 44px 0px rgba(34,197,94,0.5)", scale: 1.02, }}>
                <Image src={project1} alt="Project 1" fill className="object-cover object-center" />
              </BentoCard>

              <BentoCard colSpan={2} rowSpan={2} className="bg-white" whileHover={{ scale: 1.02, boxShadow: "0px 0px 44px 0px rgba(249,115,22,0.5)" }}>
                <Image src={project2} alt="Project 2" fill className="object-cover object-center" />
              </BentoCard>
            </BentoGrid>
          </div>
        </div>

      </div>
    </main >
  );
}