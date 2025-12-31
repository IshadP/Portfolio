"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);
    return matches;
}

interface ProjectShowcaseCardProps {
    title: string;
    baseColor: string;
    borderColor: string;
    screenImages: {
        center: StaticImageData | string;
        left: StaticImageData | string;
        right: StaticImageData | string;
    };
    phoneVariant?: 'android' | 'ios';
    href?: string;
}

export default function ProjectShowcaseCard({
    title,
    baseColor,
    borderColor,
    screenImages,
    phoneVariant = 'android',
    href = "#",
}: ProjectShowcaseCardProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [isHovered, setHovered] = useState(false);

    const aspectRatioMap = {
        android: "aspect-[452/964]",
        ios: "aspect-[176/382]",
    };
    const phoneAspectRatio = aspectRatioMap[phoneVariant];

    const springTransition = { type: "spring", stiffness: 200, damping: 25 } as const;

    const centerPhoneVariants = {
        rest: {
            y: "85%",
            scale: 1.4,
            zIndex: 30
        },
        hover: {
            y: "20%",
            scale: 0.9,
            zIndex: 30,
            transition: springTransition
        },
    };

    const leftPhoneVariants = {
        rest: {
            x: "0",
            y: "40%",
            rotate: 0,
            scale: 0.9,
            zIndex: 20,
            opacity: 1
        },
        hover: {
            x: "-30%",
            y: "20%",
            rotate: -9.24,
            scale: 0.95,
            zIndex: 20,
            opacity: 1,
            transition: springTransition
        },
    };

    const rightPhoneVariants = {
        rest: {
            x: "0%",
            y: "40%",
            rotate: 0,
            scale: 0.9,
            zIndex: 20,
            opacity: 1
        },
        hover: {
            x: "30%",
            y: "20%",
            rotate: 9.24,
            scale: 0.95,
            zIndex: 20,
            opacity: 1,
            transition: springTransition
        },
    };

    const titleVariants = {
        rest: { y: 0, scale: 1 },
        hover: { y: -15, scale: 0.8, transition: { duration: 0.3 } }
    };
    const buttonVariants = {
        rest: { width: "auto", right: 5, top: 5, borderRadius: "5rem", backgroundColor: "rgba(255,255,255,0.5)" },
        hover: { width: "auto", right: 20, top: 20, borderRadius: "0.5rem", backgroundColor: "#ffffff" },
    };

    const borderVariants = {
        rest: { top: 0, right: 0, bottom: 0, left: 0, borderRadius: "2rem" },
        hover: { top: 12, right: 12, bottom: 12, left: 12, borderRadius: "1.5rem", transition: { duration: 0.3 } }
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            className={`group relative block aspect-square h-full p-2 w-full overflow-hidden cursor-pointer outline-none ring-0`}
            style={{
                backgroundColor: baseColor.replace(/"/g, ''),
            }}
            initial="rest"
            animate={isDesktop && isHovered ? "hover" : "rest"}
            onHoverStart={() => isDesktop && setHovered(true)}
            onHoverEnd={() => isDesktop && setHovered(false)}
        >
            <motion.div
                variants={borderVariants}
                className="absolute border-3 pointer-events-none z-10"
                style={{ borderColor: borderColor, }}
            />

            <motion.div className="relative z-20 flex h-full flex-col p-0">
                <div className="relative z-40 mb-4 flex items-center justify-center md:mb-8 h-[30%]">
                    <motion.h2
                        variants={titleVariants}
                        className="max-w-[80%] text-2xl font-semibold leading-tighter tracking-tight text-center text-white md:text-3xl lg:text-3xl"
                    >
                        {title}
                    </motion.h2>

                    <motion.div
                        variants={buttonVariants}
                        className="absolute flex h-10 w-10 items-center justify-center overflow-hidden backdrop-blur-sm shrink-0"
                    >
                        <div className="flex items-center gap-2 px-1">
                            <div className="flex h-8 w-8 items-center rounded-full justify-center bg-white ">
                                <ArrowUpRightIcon size={20} weight="bold" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative flex flex-1 items-end justify-center isolate pb-6">
                    <motion.div
                        variants={leftPhoneVariants}
                        className="absolute bottom-0 w-[48%] origin-bottom-right"
                    >
                        <div className={`overflow-hidden rounded-4xl shadow-2xl ${phoneAspectRatio}`}>
                            <Image src={screenImages.left} alt="Left" fill className="object-contain" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={rightPhoneVariants}
                        className="absolute bottom-0 w-[48%] origin-bottom-left"
                    >
                        <div className={`overflow-hidden rounded-4xl  shadow-2xl ${phoneAspectRatio}`}>
                            <Image src={screenImages.right} alt="Right" fill className="object-cover" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={centerPhoneVariants}
                        className="absolute bottom-0 w-[52%] origin-bottom"
                    >
                        <div className={`overflow-hidden rounded-[2.25rem]    shadow-xl ${phoneAspectRatio}`}>
                            <Image src={screenImages.center} alt="Center" fill className="object-cover" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.a>
    );
}