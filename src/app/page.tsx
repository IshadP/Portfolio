"use client"
import { motion } from "framer-motion";
import BentoGrid from "../components/bento-grid";
import BentoCard from "../components/bento-card";
import Button from "../components/button";
import TextHighlight from "../components/text-highlight";
import LocationMap from "../components/location-map";
import Image from "next/image";
import footer from "../../public/footer.png";
import CardFan from "@/components/card-fan";
import ProjectShowcaseCard from "@/components/project-showcase-card";
import { HeartIcon } from "@phosphor-icons/react";
import Printhub1 from "../../public/projects/printhub-1.png";
import Printhub2 from "../../public/projects/printhub-2.png";
import Printhub3 from "../../public/projects/printhub-3.png";
import Youtube1 from "../../public/projects/youtube-1.png";
import Youtube2 from "../../public/projects/youtube-2.png";
import Youtube3 from "../../public/projects/youtube-3.png";
import magazine2024 from "../../public/projects/magazine-2024.png";
import gca2025 from "../../public/projects/gca-2025.png";
import schoolbag from "../../public/projects/schoolbag-2023.png";

export default function Home() {
  const fanItems = [
    { id: 1, title: "Schoolbag", image: schoolbag, href: "https://medium.com/@ishadpande16/how-schoolbag-helps-to-organize-learning-materials-735467d8f32c" },
    { id: 2, title: "GCOEN Magazine 2024", image: magazine2024, href: "https://drive.google.com/file/d/1bIAfxQWGKkUwn0CvwdGkTQxOCsILruRH/view?usp=sharing" },
    { id: 3, title: "Genius Champs Academy", image: gca2025 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  } as const;

  return (
    <main className="min-h-screen bg-background flex justify-center items-center relative flex-col w-full">
      <div className="top-0 left-0 absolute justify-center items-center h-[40vh] w-full z-0 bg-linear-to-b from-surface to-background"></div>
      <motion.div
        className="lg:max-w-5xl w-full justify-center items-center flex flex-col pt-16 z-2 px-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div id="hero" variants={itemVariants} className="flex bg-transp flex-col justify-center items-center z-10 gap-8 sm:h-[40vh] w-full">
          <div className="flex flex-col justify-center items-center gap-0">
            <h4 className="lg:text-xl text-2xl font-bold tracking-tight bg-linear-to-b from-[#CDC4B9] to-[#7E7A75] bg-clip-text text-transparent">Hey there, I'm</h4>
            <h1 className="text-8xl font-bold sm:p-6 p-4 tracking-[-0.24rem] leading-[80%] text-center w-full">Ishad Pande</h1>
          </div>
          <div className="flex gap-2 flex-col w-full justify-center items-center sm:flex-row pb-16">
            <Button variant="primary" href="mailto:ispande16@gmail.com" rightIcon="ArrowUpRightIcon" copyText="ispande16@gmail.com">Let&apos;s Talk</Button>
            <Button variant="secondary" href="/resume">View Resume</Button>
            <Button variant="outline" href="#curated-projects" leftIcon="CaretDownIcon">Jump to projects</Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
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
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex flex-col gap-2">
          <BentoGrid title="Selected Work" id="curated-projects" className="flex flex-col gap-4 w-full" >
            <BentoCard colSpan={2} rowSpan={2} whileHover={{ boxShadow: "0px 0px 44px 0px rgba(34,197,94,0.5)", scale: 1.02, }} hasTap>
              <ProjectShowcaseCard
                title="Improving user efficiency by ~30% on Printhub"
                baseColor="#A3D679"
                borderColor="#688B4B"
                screenImages={{
                  center: Printhub1,
                  left: Printhub2,
                  right: Printhub3,
                }}
                href="https://www.behance.net/gallery/239087477/Printhub"
              />
            </BentoCard>
            <BentoCard colSpan={2} rowSpan={2} whileHover={{ scale: 1.02, boxShadow: "0px 0px 44px 0px rgba(249,115,22,0.5)" }} hasTap>
              <ProjectShowcaseCard
                title="User Intent based Search Experience on YouTube"
                baseColor="#D65B5B"
                borderColor="#911818"
                screenImages={{
                  center: Youtube1,
                  left: Youtube2,
                  right: Youtube3,
                }}
                href="https://www.behance.net/gallery/232680953/Youtube"
              />
            </BentoCard>
          </BentoGrid>
          <BentoGrid id="other-projects" className="flex flex-col gap-8 w-full">
            <BentoCard colSpan={4} rowSpan={2} className="border-3 border-[#CACACA] bg-surface">
              <CardFan items={fanItems} />
            </BentoCard>
          </BentoGrid>
        </motion.div>

        <motion.footer variants={itemVariants} className="flex flex-col justify-between items-start w-full gap-4 py-8">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <h2 className="sm:text-8xl text-6xl font-medium tracking-tight font-serif italic text-on-surface">Let's Connect</h2>
            <p className="text-on-surface sm:text-3xl text-2xl font-medium tracking-tight whitespace-nowrap">for amazing ideas or just a chat!</p>
          </div>
          <div className="flex sm:flex-row flex-col w-full justify-center items-center gap-2 my-4">
            <Button variant="linkedin" href="https://linkedin.com/in/ishadpande" fullWidth> LinkedIn</Button>
            <Button variant="twitter" href="https://x.com/ishadpande" fullWidth> Twitter \ x.com</Button>
            <Button variant="email" href="mailto:ispande16@gmail.com" fullWidth copyText="ispande16@gmail.com">Email</Button>
          </div>
          <h3 className="text-text-on-primary top-10 text-md flex gap-1 font-semibold w-full justify-center items-center text-center">Designed and Developed by Ishad with <span className="text-primary"><HeartIcon size={20} weight="fill" /></span></h3>
        </motion.footer>
      </motion.div>

      <div
        className="flex justify-center items-center flex-col w-full sm:h-[20vh] lg:mt-40 mt-30 bg-linear-to-b from-background to-surface"
      >
        <Image
          src={footer}
          alt="Footer"
          fill
          className="object-contain object-bottom w-full"
        />
      </div>
    </main >
  );
}