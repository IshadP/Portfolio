"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ReadCvLogoIcon, Copy, Check } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Email from "./Email";
import { AsciiEngineer, AsciiDesigner } from "./AsciiText";

// Clean, subtle animation configurations matching your style
const parentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} as const;

const childVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

const heroRoutes: Record<
  string,
  {
    title: string;
    icon?: React.ReactNode;
    iconClass?: string;
  }
> = {
  "/experiments": {
    title: "Experiments",
    icon: <Image src="/star.svg" alt="Dark Star" width={54} height={54} quality={90} />,
    iconClass: "flex justify-center items-center w-16 h-16",
  },
  "/about": {
    title: "Started from cars, Ended In Products",
  },
};

// Isolated Email Component with interactive feedback
function EmailComponent({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email text", err);
    }
  };

  return (
    <div className="flex items-center gap-2 group">
      <a
        href={`mailto:${email}`}
        className="text-text-primary underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors"
      >
        {email}
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy email address"
        className="p-1 rounded text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
      >
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
      </button>
    </div>
  );
}

export default function Hero() {
  const pathname = usePathname();
  const currentRoute = heroRoutes[pathname];

  return (
    <section className="sticky top-[80px] z-0 w-full flex justify-center py-4 md:py-24 ">
      <motion.div
        className="flex flex-col items-start w-full max-w-(--width-content) md:px-3 gap-8"
        initial="initial"
        animate="animate"
        variants={parentVariants}
      >
        {pathname === "/" ? (
          <div className="flex flex-col md:gap-10  gap-4 w-full">
            {/* Introduction and Headline */}
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-4 mb-4 md:mb-0 w-full"
            >
              <h1 className="font-h1-display text-primary w-full">
                <AsciiEngineer className="w-full h-auto" aria-label="Engineer Turned" />
              </h1>
              <h1 className="font-h1-display text-primary w-full">
                <AsciiDesigner className="w-full h-auto" aria-label="Product Designer" />
              </h1>
            </motion.div>

            {/* Sub-context description paragraphs */}
            <motion.div
              variants={childVariants}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0) rotate(0.001deg)",
                backfaceVisibility: "hidden",
              }}
              className="flex flex-col md:gap-4 gap-2 font-body-lg text-text-muted"
            >
              <p>
                Designing at <span className="text-text-primary">Grid Insight</span> in Nagpur, India.
              </p>
              <p>
                I ship end-to-end, creating apps with Flutter and web interactions with Framer Motion and TailwindCSS.
              </p>
            </motion.div>

            {/* Call to Action with Custom Email Component */}
            <motion.div
              variants={childVariants}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0) rotate(0.001deg)",
                backfaceVisibility: "hidden",
              }}
              className="flex flex-wrap items-center font-body-lg text-text-muted md:mt-4"
            >
              <span>Want to work together or chat? Email me at</span>
              <Email type="hidelabel" size="large" />
            </motion.div>
          </div>
        ) : (
          /* Fallback view for auxiliary routes mapped in heroRoutes */
          currentRoute && (
            <motion.div
              key={pathname}
              variants={childVariants}
              style={{ willChange: "transform, opacity" }}
              className="flex items-center w-full justify-center gap-4 py-12"
            >
              {currentRoute.icon && (
                <div className={`relative overflow-hidden ${currentRoute.iconClass}`}>
                  {currentRoute.icon}
                </div>
              )}
              <p className="font-h1">
                {currentRoute.title}
              </p>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
}