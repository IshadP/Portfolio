"use client";

import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import StarCard from "./components/StarCard";
import SqrProjectCard from "./components/SqrProjectCard";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="bg-bg-primary relative">
      {/* ── Hero Section ── */}
      <Hero />

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-6 px-4 pt-8">
        {/* ── Navbar ── */}
        <Navbar />

        {/* ── Cards Masonry Grid ── */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2" id="projects">
          {/* Left Column */}
          <div className="flex h-full flex-col gap-6">
            {/* Bio Card */}
            <div className="flex flex-col items-center overflow-hidden rounded-(--radius-card) border-2 border-border-primary bg-bg-primary p-8">
              <div className="flex w-full flex-col items-center justify-center gap-[16px]">
                <div className="w-full font-(family-name:--font-geist-mono) text-[16px] md:text-[20px] font-medium leading-[1.336] text-text-primary">
                  <p>
                    I have experience of building for efficiency and usability, catering both business and users.
                  </p>
                  <br />
                  <p>
                    Using AI tools I ship these experiences quickly, instead of static mockups.
                  </p>
                </div>
                <div className="flex w-full items-center gap-1">
                  <p className="font-(family-name:--font-geist-mono) text-[16px] md:text-[20px] font-medium leading-[1.336] text-text-primary">
                    Find me on
                  </p>
                  <a href="https://x.com/ishadpande" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
                      <Image src="/assets/X.png" alt="X" width={32} height={32} />
                    </span>
                  </a>
                  <p className="font-(family-name:--font-geist-mono) text-[16px] md:text-[20px] font-medium leading-[1.336] text-text-primary">
                    ,
                  </p>
                  <a href="https://www.linkedin.com/in/ishadpande" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
                      <Image src="/assets/LinkedIn.png" alt="LinkedIn" width={32} height={32} />
                    </span>
                  </a>
                  <p className="font-(family-name:--font-geist-mono) text-[16px] md:text-[20px] font-medium leading-[1.336] text-text-primary">
                    or
                  </p>
                  <a href="https://www.behance.net/ishadpande" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
                      <Image src="/assets/Behance.png" alt="Behance" width={32} height={32} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Green Project Card (tall) */}
            <div className="min-h-125">
              <ProjectCard
                gradientColor="gradient-red"
                borderColor="border-[#d34949]"
                titleColor="#ffffff"
                hoverTitleColor="#4a1010"
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
                borderColor="border-[#688b4b]"
                titleColor="#ffffff"
                title="Improved flow speed by 30% though better List cards in PrintHub"
                imageSrc="/assets/printhub-screenshot.png"
                imageSrcRight="/assets/printhub-right.png"
                imageSrcLeft="/assets/printhub-left.png"
                imageAlt="PrintHub List Cards"
                href="https://www.behance.net/gallery/239087477/Printhub"
              />
            </div>

            {/* Green Nav Card */}
            <div className="md:aspect-square">
              <SqrProjectCard
                borderColor="border-[#688b4b]"
                gradientColor="gradient-green"
                maskColor="from-[#a3d779] via-[#a3d779]"
                title="Improved navigation by prioritising user habits over standards in PrintHub"
                imageSrc="/assets/printhub-screenshot.png"
                imageSrcLeft="/assets/printhub-left.png"
                imageAlt="PrintHub Navigation"
                href="https://www.behance.net/gallery/239087477/Printhub"
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
            <p className="font-(family-name:--font-geist-mono) text-[16px] md:text-[24px] font-bold leading-normal tracking-[-0.48px] text-text-secondary">
              Experience
            </p>
          </div>

          {/* Experience Item 1 */}
          <div className="flex w-full flex-col items-start justify-between gap-1 md:gap-2 border-b border-border-tertiary py-[8px] md:py-[16px] sm:flex-row sm:items-center">
            <div className="flex flex-col items-start leading-normal sm:w-(--card-width)">
              <p className="w-full font-(family-name:--font-geist) text-[24px] leading-tight font-semibold tracking-[-0.5px] text-text-primary">
                Freelance Design Consultant
              </p>
              <p className="w-full font-(family-name:--font-geist) text-[16px] font-medium text-text-tertiary">
                Genius Champs Academy, Nagpur
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-(family-name:--font-geist) text-[16px] md:text-[20px] font-medium leading-normal tracking-[-0.4px] text-text-tertiary">
                May 2025 - Present
              </p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="flex w-full flex-col items-start justify-between gap-1 md:gap-2 py-[8px] md:py-[16px] sm:flex-row sm:items-center">
            <div className="flex flex-col items-start leading-normal sm:w-(--card-width)">
              <p className="w-full font-(family-name:--font-geist) text-[24px] font-semibold tracking-[-0.5px] text-[#4c4a4a]">
                Design Lead
              </p>
              <p className="w-full font-(family-name:--font-geist) text-[16px] font-medium text-[#686868]">
                Google Developer Group on Campus, GCEON
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-(family-name:--font-geist) text-[16px] md:text-[20px] font-medium leading-normal tracking-[-0.4px] text-[#686868]">
                Jun 2024 - Jun 2025
              </p>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <Footer />
      </div>

      {/* ── Bottom Landscape Image ── */}
      <div className="relative w-full h-[405px] overflow-hidden">
        <Image
          src="/assets/minecraft-landscape.png"
          alt="Minecraft landscape"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
