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
import footer from "../../public/footer.png";
import CardFan from "@/components/card-fan";
import imgProject1 from "../../public/project1.png";
import imgProject2 from "../../public/project2.png";
import imgProject3 from "../../public/project2.png";
import phone from "../../public/phone.png";
import ProjectShowcaseCard from "@/components/project-showcase-card";
import { HeartIcon } from "@phosphor-icons/react";

export default function Home() {
  const fanItems = [
    { id: 1, title: "FinTech App", image: imgProject1 },
    { id: 2, title: "AI Dashboard", image: imgProject2 },
    { id: 3, title: "E-Commerce", image: imgProject3 },
  ];
  return (
    <main className="min-h-screen bg-background flex justify-center items-center relative flex-col w-full">
      <div className=" top-0 left-0 absolute justify-center items-center h-[50vh] w-full z-0 bg-linear-to-b from-[#ffffff] to-[#F8F5F1] "></div>
      {/* <div className="sticky top-0 z-50 w-full flex justify-center sm:py-4">
        <NavBar />
      </div> */}
      <div className="lg:max-w-5xl 6xl:max-w-[80vw] w-full justify-center items-center flex flex-col pt-16 z-2 px-4 gap-8 " >
        <div id="hero" className="flex flex-col justify-center items-center z-10 sm:h-[20vh] w-full">
          <h1 className="text-8xl font-bold leading-[100%] sm:p-6 p-6 pt-20 tracking-[-0.24rem] text-center w-full">Ishad Pande</h1>
          <div className="flex gap-2 flex-col w-full justify-center items-center sm:flex-row pb-16">
            <Button variant="primary" href="mailto:ispande16@gmail.com" rightIcon="ArrowUpRightIcon">Let&apos;s Talk</Button>
            <Button variant="secondary" href="/resume">View Resume</Button>
            <Button variant="outline" href="#curated-projects" leftIcon="CaretDownIcon">Jump to projects</Button>
          </div>
        </div>

        {/* about section */}
        <BentoGrid id="about" className="flex flex-col gap-4 w-full">
          <BentoCard colSpan={2} rowSpan={1} className="bg-surface">
            <div className="h-full flex items-center text-text-500 justify-center font-medium rounded-4xl text-3xl p-6 border border-[#CACACA]">
              <TextHighlight
                text="A product designer who codes, designing digital interfaces and bringing them to life through hands-on prototypes."
                highlight="product designer"
                className="text-2xl md:text-3xl tracking-tight"
              />
            </div>
          </BentoCard>
          <BentoCard colSpan={2} rowSpan={1} className="bg-surface">
            <div className="h-full">
              <LocationMap />
            </div>
          </BentoCard>
        </BentoGrid>

        {/* curated projects section */}
        <BentoGrid title="Selected Work" id="curated-projects" className="flex flex-col gap-4 w-full" >
          <BentoCard colSpan={2} rowSpan={2} className="" whileHover={{ boxShadow: "0px 0px 44px 0px rgba(34,197,94,0.5)", scale: 1.02, }} hasTap>
            <ProjectShowcaseCard
              title="Improving user efficiency by ~30% on Printhub"
              baseColor="#A3D679"
              borderColor="#688B4B"
              screenImages={{
                center: phone,
                left: phone,
                right: phone,
              }}
              href="https://www.behance.net/gallery/239087477/Printhub"
            />
          </BentoCard>
          <BentoCard colSpan={2} rowSpan={2} className="" whileHover={{ scale: 1.02, boxShadow: "0px 0px 44px 0px rgba(249,115,22,0.5)" }} hasTap>
            <ProjectShowcaseCard
              title="Improving user efficiency by ~30% on Printhub"
              baseColor="#AFE682"
              borderColor="#688B4B"
              screenImages={{
                center: phone,
                left: phone,
                right: phone,
              }}
              href="https://www.behance.net/gallery/232680953/Youtube"
            />
          </BentoCard>

          {/* other projects section */}
        </BentoGrid>
        <BentoGrid id="other-projects" className="flex flex-col gap-8 w-full">
          <BentoCard colSpan={4} rowSpan={2} className="border border-[#CACACA]">
            <CardFan items={fanItems} />
          </BentoCard>
        </BentoGrid>

        {/* footer section */}
        <footer className="flex flex-col justify-between items-start w-full gap-4 py-8">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <h2 className="text-8xl font-medium tracking-tight font-serif italic text-on-surface">Let's Connect</h2>
            <p className="text-on-surface text-3xl font-medium tracking-tight whitespace-nowrap">for amazing ideas or just a chat!</p>
          </div>
          <div className="flex flex-row w-full gap-2 m-4">
            <Button variant="linkedin" href="https://linkedin.com/in/ishadpande" fullWidth> LinkedIn</Button>
            <Button variant="twitter" href="https://x.com/ishadpande" fullWidth> Twitter \ x.com</Button>
            <Button variant="email" href="mailto:ispande16@gmail.com" fullWidth>Email</Button>
          </div>
          <h3 className="text-text-on-primary top-10 text-md flex gap-1 font-semibold w-full justify-center items-center text-center">Designed and Developed by Ishad with <span className="text-primary"><HeartIcon size={20} weight="fill" /></span></h3>
        </footer>
        {/* footer image */}
      </div>
      <div className="relative flex justify-center items-center flex-col w-full h-[30vh] sm:h-[50vh] mt-10">
        <Image
          src={footer}
          alt="Footer"
          fill
          className="object-cover object-bottom w-full"
        />
      </div>

    </main >
  );
}