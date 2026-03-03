"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ProjectCardProps } from "../types/project";

/* ── Static Motion Variants ── */
const springTransition = { type: "spring", stiffness: 200, damping: 25 } as const;

const centerPhoneVariants = {
    rest: { y: "22cqw", scale: 1, zIndex: 30 },
    hover: { y: "-17cqw", scale: 0.70, zIndex: 30, transition: springTransition },
};

const leftPhoneVariants = {
    rest: { x: "0cqw", y: "0cqw", rotate: 0, scale: 1, zIndex: 20, opacity: 1 },
    hover: { x: "-24cqw", y: "-26cqw", rotate: -5, scale: 0.75, zIndex: 20, opacity: 1, transition: springTransition },
};

const rightPhoneVariants = {
    rest: { x: "0cqw", y: "0cqw", rotate: 0, scale: 1, zIndex: 20, opacity: 1 },
    hover: { x: "24cqw", y: "-26cqw", rotate: 5, scale: 0.75, zIndex: 20, opacity: 1, transition: springTransition },
};

const pillVariants = {
    rest: { y: "20cqw", opacity: 0 },
    hover: { y: 0, opacity: 1, transition: springTransition },
};


export default function ProjectCard({
    title,
    imageSrc,
    imageAlt = "",
    imageSrcLeft,
    imageSrcRight,
    gradientColor = "bg-gray-800",
    titleColor = "#ffffff",
    hoverTitleColor = "#183300",
    borderColor = "border-border-primary",
    href,
}: ProjectCardProps) {
    const leftSrc = imageSrcLeft || imageSrc;
    const rightSrc = imageSrcRight || imageSrc;

    /* ── Dynamic Motion Variants ── */
    const titleVariants = useMemo(() => ({
        rest: { color: titleColor },
        hover: { color: hoverTitleColor, transition: { duration: 0.3 } },
    }), [titleColor, hoverTitleColor]);

    const isExternal = href?.startsWith("http");
    const Wrapper = href ? motion.a : motion.div;
    const wrapperProps = href
        ? { href, ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}) }
        : {};

    return (
        <Wrapper
            {...wrapperProps}
            className={`group @container relative block w-full h-full aspect-2/3 overflow-hidden cursor-pointer rounded-4xl border-3 ${borderColor} ${gradientColor}`}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
        >
            {/* Static inner border */}

            {/* Content layer */}
            <div className="relative z-20 flex h-full flex-col">
                {/* ── Title area ── */}
                <div className="relative z-40 flex items-center justify-center pt-8 px-4">
                    <motion.h2
                        variants={titleVariants}
                        className="max-w-[90cqw] font-medium text-h4-mobile sm:text-h4 text-white text-center whitespace-pre-wrap"
                    >
                        {title}
                    </motion.h2>
                </div>

                {/* ── Phone images area ── */}
                <div className="relative flex flex-1 items-end justify-center isolate">
                    {/* Left phone */}
                    <motion.div
                        variants={leftPhoneVariants}
                        className="absolute bottom-0 w-[56cqw] origin-bottom-right"
                    >
                        <div className="overflow-hidden rounded-2xl aspect-260/556">
                            <Image
                                src={leftSrc}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right phone */}
                    <motion.div
                        variants={rightPhoneVariants}
                        className="absolute bottom-0 w-[56cqw] origin-bottom-left"
                    >
                        <div className="overflow-hidden rounded-2xl aspect-260/556">
                            <Image
                                src={rightSrc}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Center phone */}
                    <motion.div
                        variants={centerPhoneVariants}
                        className="absolute bottom-0 w-[68cqw] origin-bottom"
                    >
                        <div className="overflow-hidden aspect-260/556">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── "Click to open" pill ── */}
            <motion.div
                variants={pillVariants}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-bg-primary flex items-center px-4 py-2 rounded-full z-50 shadow-lg"
            >
                <p className="font-semibold leading-normal text-text-primary text-center tracking-tight text-sm whitespace-nowrap">
                    Click to open
                </p>
            </motion.div>
        </Wrapper>
    );
}
