"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCardProps } from "../types/project";

/* ── Motion Variants ── */
const springTransition = { type: "spring", stiffness: 300, damping: 25 } as const;
const tooltipTransition = { type: "spring", stiffness: 400, damping: 25 } as const;

const variants = {
    left: {
        rest: { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 },
        hover: { x: "-25%", y: "0%", rotate: -6.77, opacity: 1, scale: 0.69 }
    },
    right: {
        rest: { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 },
        hover: { x: "25%", y: "0%", rotate: 6.77, opacity: 1, scale: 0.69 }
    },
    center: {
        rest: { x: 0, y: 0, scale: 1 },
        hover: { x: 0, y: 0, scale: 0.75 }
    },
    tooltip: {
        rest: { opacity: 0, scale: 0.95, y: 10 },
        hover: { opacity: 1, scale: 1, y: 0 }
    }
};

export default function ProjectCard({
    title,
    subtitle = "Project",
    imageCenter,
    imageAlt = "",
    imageLeft,
    imageRight,
    className,
    href,
    routeText = "/VIEW-PROJECT",
    variant = "three-pages",
    hoverLabelBg,
    hoverLabelText,
}: ProjectCardProps & { subtitle?: string; routeText?: string }) {

    const leftSrc = imageLeft || imageCenter;
    const rightSrc = imageRight || imageCenter;

    const labelVariants = {
        rest: {
            backgroundColor: "var(--color-bg-secondary)",
            color: "var(--color-text-primary)",
        },
        hover: {
            backgroundColor: hoverLabelBg || "var(-color--bg-secondary)",
            color: hoverLabelText || "var(--color-text-primary)",
        },
    };

    const isExternal = href?.startsWith("http");
    const Wrapper = href ? motion.a : motion.div;
    const wrapperProps = href
        ? { href, ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}) }
        : {};

    return (
        <Wrapper
            {...wrapperProps}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`bg-bg-primary border-outline-primary group @container relative flex flex-col items-center justify-between overflow-hidden p-4 md:rounded-3xl rounded-2xl w-full md:aspect-2/3 aspect-200/330 cursor-pointer border-2 ${className || ""}`}
        >
            {/* ── Top Header ── */}
            <div className="flex items-start justify-between w-full z-10 shrink-0 gap-2 pointer-events-none">
                <motion.div
                    variants={labelVariants}
                    transition={springTransition}
                    className="flex items-start justify-center px-3 py-2 md:rounded-xl rounded-lg overflow-hidden"
                >
                    <p className="font-card-mono text-xs md:text-sm" style={{ color: "inherit" }}>
                        {title}
                    </p>
                </motion.div>
                <motion.div
                    variants={labelVariants}
                    transition={springTransition}
                    className="flex items-center justify-end px-3 py-2 md:rounded-xl rounded-lg"
                >
                    <p className="font-card-mono text-xs md:text-sm" style={{ color: "inherit" }}>
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* ── Image Container (The Phone Stack) ── */}
            <div className="w-[85cqw] aspect-495/712 flex items-center justify-center relative overflow-visible pointer-events-none">

                {/* Left Image */}
                <motion.div
                    variants={variants.left}
                    transition={springTransition}
                    className="absolute inset-x-8 inset-y-4 z-0"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={leftSrc}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    variants={variants.right}
                    transition={springTransition}
                    className="absolute inset-x-8 inset-y-4 z-0"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={rightSrc}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                {/* Center Image */}
                {variant === "three-pages" && (
                    <motion.div
                        variants={variants.center}
                        transition={springTransition}
                        className="relative z-10 size-full"
                    >
                        <Image
                            src={imageCenter}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                )}
            </div>

            {/* ── Hover Tooltip ── */}
            <motion.div
                variants={variants.tooltip}
                transition={tooltipTransition}
                className="absolute left-1/2 -translate-x-1/2 bottom-[5%] bg-bg-primary flex items-center overflow-hidden px-3 py-2 rounded-full shadow-lg z-20 pointer-events-none"
            >
                <p className="font-card-mono text-text-primary whitespace-nowrap">
                    CLICK TO OPEN
                </p>
            </motion.div>

            {/* ── Bottom Route Text ── */}
            <div className="w-full flex justify-end shrink-0 z-10 pointer-events-none">
                <p className="font-label-mono text-text-primary text-xs whitespace-nowrap uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    {routeText}
                </p>
            </div>
        </Wrapper>
    );
}