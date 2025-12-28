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


export default function Home() {
  return (
    <main className="min-h-screen bg-background flex justify-center items-center relative flex-col w-full">
      <div className=" top-0 left-0 absolute justify-center items-center h-[50vh] w-full z-0 bg-linear-to-b from-[#ffffff] to-[#F8F5F1] "></div>
      <div className="sticky top-0 z-50 w-full flex justify-center sm:py-4">
        <NavBar />
      </div>
      <div className="max-w-5xl w-full justify-center items-center flex flex-col z-2 p-4 md:p-8 " >
        <div className="flex flex-col justify-center items-center z-10 sm:h-[50vh]">
          <h1 className="text-8xl font-bold leading-[100%] sm:p-6 p-6 pt-20 tracking-[-0.24rem] text-center">Ishad Pande</h1>
          <div className="flex gap-2 flex-col w-full justify-center items-center sm:flex-row pb-16">
            <Button variant="primary" href="mailto:ispande16@gmail.com" rightIcon="ArrowUpRightIcon">Let&apos;s Talk</Button>
            <Button variant="secondary" href="/resume">View Resume</Button>
            <Button variant="outline" href="#curated-projects" leftIcon="CaretDownIcon">Jump to projects</Button>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <BentoGrid>
            <BentoCard colSpan={2} rowSpan={1} className="bg-surface">
              <div className="h-full flex items-center text-text-500 justify-center font-medium text-3xl p-6">
                <TextHighlight
                  text="A product designer who codes, designing digital interfaces and bringing them to life through hands-on prototypes."
                  highlight="product designer"
                  className="text-2xl md:text-3xl"
                />
              </div>
            </BentoCard>

            <BentoCard colSpan={2} rowSpan={1} className="bg-surface">
              <div className="h-full">
                <LocationMap />
              </div>
            </BentoCard>
          </BentoGrid>

          <div id="curated-projects" className="flex flex-col gap-4 scroll-mt-24">
            <h2 className="text-4xl font-bold tracking-[-0.0675rem] text-text-on-primary">curated projects</h2>
            <BentoGrid>
              <BentoCard colSpan={2} rowSpan={2} className="bg-surface" whileHover={{ boxShadow: "0px 0px 44px 0px rgba(34,197,94,0.5)", scale: 1.02, }}>
                <Image src={project1} alt="Screenshot of Ishad Pande's first curated project" fill className="object-cover object-center" />
              </BentoCard>

              <BentoCard colSpan={2} rowSpan={2} className="bg-surface" whileHover={{ scale: 1.02, boxShadow: "0px 0px 44px 0px rgba(249,115,22,0.5)" }}>
                <Image src={project2} alt="Screenshot of Ishad Pande's second curated project" fill className="object-cover object-center" />
              </BentoCard>
            </BentoGrid>
          </div>
        </div>


      </div>
      <footer className="relative w-full flex flex-col items-center pt-20">
        <div className="flex flex-col justify-center items-center text-center w-full gap-8">
          <div className="w-[50%] flex flex-col justify-center items-center">
            <h2 className="font-medium md:text-6xl text-5xl tracking-[-0.0675rem] whitespace-nowrap">Let&apos;s Connect</h2>
            <p className="font-medium md:text-4xl text-2xl whitespace-nowrap tracking-[-0.0675rem]">for cool ideas and opportunities</p>
          </div>
          <div className="flex gap-2 flex-col sm:flex-row lg:w-[50%] w-full md:px-6 px-4">
            <Button variant="linkedin" href="https://www.linkedin.com/in/ishadpande/" fullWidth>Linkedin</Button>
            <Button variant="twitter" href="https://twitter.com/ishadpande" fullWidth>Twitter</Button>
            <Button variant="email" href="mailto:ispande16@gmail.com" fullWidth >Email</Button>
          </div>
        </div>

        <div className="relative w-full h-[30vh] sm:h-[50vh] mt-10">
          <Image
            src={footer}
            alt="Footer"
            fill
            className="object-cover object-bottom w-full"
          />
        </div>
      </footer>
    </main >
  );
}