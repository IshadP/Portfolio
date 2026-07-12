"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { m } from "framer-motion";
import Email from "../ui/Email";
import { AsciiEngineer, AsciiDesigner } from "../ui/AsciiText";
import FadeIn from "../ui/FadeIn";

// const heroRoutes: Record<
//   string,
//   {
//     title: string;
//     icon?: React.ReactNode;
//     iconClass?: string;
//   }
// > = {
//   "/experiments": {
//     title: "Experiments",
//     icon: <Image src="/star.svg" alt="Dark Star" width={54} height={54} quality={90} />,
//     iconClass: "flex justify-center items-center w-16 h-16",
//   },
//   "/about": {
//     title: "Started from cars, Ended In Products",
//   },
// };

// Lean animation preset
const fadeInUp = {
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
} as const;

export default function Hero() {

  return (
    <section id="Hero" className="sticky top-20 w-full md:w-content px-4 md:px-0 z-0 flex justify-center py-4 md:py-24 overflow-hidden">
      <div className="flex flex-col items-start w-full max-w-(--width-content) md:px-3 gap-8">

          <div className="flex flex-col md:gap-10 gap-4 w-full">
            {/* Introduction and Headline */}
            <m.div
              className="flex flex-col gap-4 mb-4 md:mb-0 w-full @container"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="font-mono-lg  text-text-muted">
                Hello, I'm Ishad
              </h3>
              <h1 className="font-h1-display text-primary w-full overflow-visible">
                <AsciiEngineer className="h-[8.8cqw] w-auto max-w-none" aria-label="Engineer Turned" />
              </h1>
              <h1 className="font-h1-display text-primary w-full">
                <AsciiDesigner className="h-[8.8cqw] w-auto" aria-label="Product Designer" />
              </h1>
            </m.div>

            {/* Sub-context description paragraphs */}
          <FadeIn>
            <div className="flex flex-col md:gap-4 gap-4 font-mono-lg  text-text-muted">
              <p>
                Designing at <span className="text-text-primary">Grid Insight</span> in Nagpur, India.
              </p>
              <p>
                I ship end-to-end, creating apps with Flutter and web interactions with Framer Motion and TailwindCSS.
              </p>
              <div className="flex md:flex-row flex-col ">
                <p>Want to work together or chat?</p>
                <div className="flex flex-row">
                  <p>Email me at</p>
                  <Email textStyle="mono" size="small" />
                </div>
              </div>
            </div>
          </FadeIn>

          </div>
      </div>
    </section>
  );
}
