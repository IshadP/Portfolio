"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ProjectCardProps } from "../types/project";

/* ── Static Motion Variants ── */
const springTransition = { type: "spring", stiffness: 200, damping: 25 } as const;

const leftPhoneVariants = {
    rest: { x: "0cqw", y: "0cqw", rotate: 0, scale: 1.0, zIndex: 10 },
    hover: { x: "-12cqw", y: "15cqw", rotate: -6, scale: 0.65, zIndex: 30, transition: springTransition },
};

const rightPhoneVariants = {
    rest: { x: "0cqw", y: "0cqw", rotate: 0, scale: 1.0, zIndex: 20, opacity: 1 },
    hover: { x: "12cqw", y: "15cqw", rotate: 6, scale: 0.65, zIndex: 40, opacity: 1, transition: springTransition },
};

const pillVariants = {
    rest: { y: "20cqw", opacity: 0 },
    hover: { y: 0, opacity: 1, transition: springTransition },
};


export default function GreenNavCard({
    title,
    hoverTitleColor = "#183300",
    imageSrc,
    imageAlt = "",
    imageSrcLeft,
    imageSrcRight,
    borderColor = "#688b4b",
    gradientColor = "bg-[radial-gradient(120%_120%_at_50%_100%,#f3faee_0%,#cbe8b4_50%,#a3d779_100%)]",
    maskColor = "from-[#a3d779] via-[#a3d779]",
    href,
}: ProjectCardProps) {
    const leftSrc = imageSrcLeft || imageSrc;
    const rightSrc = imageSrcRight || imageSrc;

    /* ── Dynamic Motion Variants ── */
    const titleVariants = useMemo(() => ({
        rest: { color: "#ffffff" },
        hover: { color: hoverTitleColor, transition: { duration: 0.3 } },
    }), [hoverTitleColor]);


    const Wrapper = href ? motion.a : motion.div;
    const wrapperProps = href
        ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
        : {};

    return (
        <Wrapper
            {...wrapperProps}
            className={`group @container relative block w-full aspect-square h-full overflow-hidden cursor-pointer rounded-4xl border-3 ${borderColor} ${gradientColor}`}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
        >
            <div className="relative z-20 flex h-full w-full flex-col">
                {/* ── Title area ── */}
                <div className="relative z-50 flex items-center justify-center pt-8 px-4">
                    <motion.h2
                        variants={titleVariants}
                        className="max-w-[90cqw] font-semibold text-body-mobile sm:text-body text-white text-center tracking-[-0.02rem] leading-normal whitespace-pre-wrap z-45"
                    >
                        {title}
                    </motion.h2>
                </div>

                {/* ── Phone images area (Must be BEFORE gradient in DOM/z-index to be covered) ── */}
                <div className="relative flex flex-1 items-end h-full justify-center w-full z-10">

                    {/* Left/Main Phone */}
                    <motion.div
                        variants={leftPhoneVariants}
                        className="absolute bottom-[5cqw] w-[72cqw] flex justify-center"
                    >
                        <div className="relative w-full aspect-260/556 rounded-2xl overflow-hidden">
                            <Image
                                src={leftSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </motion.div>

                    {/* Right Phone */}
                    <motion.div
                        variants={rightPhoneVariants}
                        className="absolute bottom-[5cqw] w-[72cqw] overflow-visible flex justify-center"
                    >
                        <div className="relative w-full aspect-260/556 rounded-2xl overflow-hidden">
                            <Image
                                src={rightSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* ── Gradient Overlay for text readability (matches figma to-[rgba(163,215,121,0)]) ── */}
                {/* z-40 ensures it sits OVER the phone images (z-10/20) but under the text (z-50) */}
                <div className={`absolute top-0 left-0 w-full h-64 bg-linear-to-b ${maskColor} to-transparent z-40 pointer-events-none`} />
            </div>

            {/* ── "Click to open" pill ── */}
            <motion.div
                variants={pillVariants}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-bg-primary flex items-center px-4 py-2 rounded-full z-50 shadow-lg"
            >
                <p className="font-semibold leading-normal text-black text-center tracking-[-0.03rem] text-sm whitespace-nowrap">
                    Click to open
                </p>
            </motion.div>
        </Wrapper >
    );
}
