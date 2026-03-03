"use client"

import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import StarCard from "./components/StarCard";
import SqrProjectCard from "./components/SqrProjectCard";
import Hero from "./components/Hero";
import FadeIn from "./components/FadeIn";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { motion, Variants } from "framer-motion";


export default function Home() {

  const variants: Variants = {
    rest: {
      y: 0,
      rotate: '0deg',
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      rotate: '8deg',
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    hover1: {
      y: -5,
      rotate: '-8deg',
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    hover2: {
      y: -5,
      rotate: '12deg',
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-bg-primary relative">
      {/* ── Hero Section ── */}
      <Hero />

      {/* ── Main Content ── */}
      <FadeIn>
        <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-6 px-4">
          {/* ── Navbar ── */}
          <Navbar />

          {/* ── Cards Masonry Grid ── */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2" id="projects">


            {/* Left Column */}
            <div className="flex h-full flex-col gap-6">



              {/* Bio Card */}
              <div className="flex flex-col items-center overflow-hidden rounded-4xl gap-4 border-2 border-outline-primary bg-bg-primary p-8">
                <div className="w-full font-geist-mono text-label-md-mobile sm:text-label-lg text-text-primary">
                  <p>
                    I have experience of building for efficiency and usability, catering both business and users.
                  </p>
                  <br />
                  <p>
                    Using AI tools I ship these experiences quickly, instead of static mockups.
                  </p>
                </div>
                <div className="flex w-full items-center gap-1">
                  <p className="font-geist-mono text-label-md-mobile sm:text-label-lg text-text-primary pr-2">
                    Find me on
                  </p>
                  <motion.a
                    initial="rest"
                    whileHover="hover"
                    variants={variants}
                    href="https://x.com/ishadpande" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden rotate-2">
                      <Image src="/assets/X.png" alt="X" width={32} height={32} />
                    </span>
                  </motion.a>
                  <p className="font-geist-mono text-label-md-mobile sm:text-label-lg text-text-primary">
                    ,
                  </p>
                  <motion.a
                    initial="rest"
                    whileHover="hover1"
                    variants={variants}
                    href="https://www.linkedin.com/in/ishadpande" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden -rotate-2">
                      <Image src="/assets/LinkedIn.png" alt="LinkedIn" width={32} height={32} />
                    </span>
                  </motion.a>
                  <p className="font-geist-mono text-label-md-mobile sm:text-label-lg text-text-primary">
                    or
                  </p>
                  <motion.a
                    initial="rest"
                    whileHover="hover2"
                    variants={variants}
                    href="https://www.behance.net/ishadpande" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden not-last rotate-3">
                      <Image src="/assets/Behance.png" alt="Behance" width={32} height={32} />
                    </span>
                  </motion.a>
                </div>
              </div>




              {/* Green Project Card (tall) */}
              <div className="min-h-125">
                <ProjectCard
                  gradientColor="gradient-red"
                  borderColor="border-project-youtube-border"
                  titleColor="var(--color-bg-primary)"
                  hoverTitleColor="var(--color-project-youtube-hover)"
                  title="Improved Youtube Search Experience to Cater to User Intent"
                  imageSrc="/assets/youtube-center.png"
                  imageSrcLeft="/assets/youtube-left.png"
                  imageSrcRight="/assets/youtube-right.png"
                  imageAlt="Youtube Project"
                  href="https://www.behance.net/gallery/232680953/Youtube"
                />
              </div>

              {/* Rainbow Star Card - Desktop (Bottom of Left Column) */}
              <div className="hidden flex-1 md:flex md:min-h-0">
                <StarCard />
              </div>
            </div>


            {/* Right Column */}
            <div className="flex h-full flex-col gap-(--grid-gap)">
              {/* Red Project Card (tall) */}
              <div className="min-h-125 h-full">
                <ProjectCard
                  gradientColor="gradient-green"
                  borderColor="border-project-printhub-border"
                  titleColor="var(--color-bg-primary)"
                  title="Improved flow speed by 30% though better List cards in PrintHub"
                  imageSrc="/assets/printhub-screenshot.png"
                  imageSrcRight="/assets/printhub-right.png"
                  imageSrcLeft="/assets/printhub-left.png"
                  imageAlt="PrintHub List Cards"
                  href="/printhub"
                />
              </div>

              {/* Green Nav Card */}
              <div className="md:aspect-square">
                <SqrProjectCard
                  borderColor="border-project-printhub-border"
                  gradientColor="gradient-green"
                  maskColor="from-project-printhub-mask via-project-printhub-mask"
                  title="Improved navigation by prioritising user habits over standards in PrintHub"
                  imageSrc="/assets/printhub-screenshot.png"
                  imageSrcLeft="/assets/printhub-left.png"
                  imageAlt="PrintHub Navigation"
                  href="/printhub"
                />
              </div>
            </div>

            {/* Rainbow Star Card - Mobile Only (Bottom of List) */}
            <div className="flex min-h-[150px] flex-1 md:hidden">
              <StarCard />
            </div>
          </div>

          {/* ── Experience Section ── */}
          <section className="flex w-full flex-col items-center justify-center rounded-(--radius-card) px-4 pb-4">
            {/* Title */}
            <div className="flex w-full items-center justify-start py-4 md:py-[8px]">
              <p className="text-h2-mono-mobile sm:text-h2-mono font-geist-mono text-text-tertiary">
                Experience
              </p>
            </div>

            {/* Experience Item 1 */}
            <div className="flex w-full flex-col items-start justify-between gap-1 md:gap-2 border-b border-outline-primary py-[8px] md:py-4 sm:flex-row sm:items-center">
              <div className="flex flex-col items-start leading-normal sm:w-(--card-width)">
                <p className="w-full text-h4-mobile sm:text-h4 text-text-primary">
                  Freelance Design Consultant
                </p>
                <p className="w-full text-label-md-mobile sm:text-label-md text-text-secondary">
                  Genius Champs Academy, Nagpur
                </p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-nav-text-mobile sm:text-nav-text text-text-secondary">
                  May 2025 - Present
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex w-full flex-col items-start justify-between gap-1 md:gap-2 py-[8px] md:py-[16px] sm:flex-row sm:items-center">
              <div className="flex flex-col items-start leading-normal sm:w-(--card-width)">
                <p className="w-full text-h4-mobile sm:text-h4 text-text-primary">
                  Design Lead
                </p>
                <p className="w-full text-label-md-mobile sm:text-label-md text-text-secondary">
                  Google Developer Group on Campus, GCEON
                </p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-nav-text-mobile sm:text-nav-text text-text-secondary">
                  Jun 2024 - Jun 2025
                </p>
              </div>
            </div>
          </section>

          {/* ── Footer ── */}
          <Footer />

        </div>
      </FadeIn>
    </div>
  );
}
