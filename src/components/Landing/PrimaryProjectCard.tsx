"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCardProps } from "../../types/project";
import { ArrowUpRight } from "@phosphor-icons/react";

/* ── Motion config ── */
const spring = { type: "spring", stiffness: 300, damping: 25 } as const;

/* Image fan-out variants (hover) */
const imgVariants = {
    left: {
        rest: { x: 0, y: 0, rotate: 0, scale: 0.95, zIndex: 1 },
        hover: { x: "-55%", y: 0, rotate: -8, scale: 0.75, zIndex: 1 },
    },
    right: {
        rest: { x: 0, y: 0, rotate: 0, scale: 0.95, zIndex: 1 },
        hover: { x: "55%", y: 0, rotate: 8, scale: 0.75, zIndex: 1 },
    },
    center: {
        rest: { x: 0, y: 0, rotate: 0, scale: 0.95, zIndex: 10 },
        hover: { x: 0, y: 0, rotate: 0, scale: 0.85, zIndex: 10 },
    },
};

export default function PrimaryProjectCard({
    title,
    description,
    slug = "/PROJECT",
    ctaText = "View Case Study",
    imageCenter,
    imageAlt = "",
    imageLeft,
    imageRight,
    className,
    href,
    side = "left",
}: ProjectCardProps) {
    const leftSrc = imageLeft || imageCenter;
    const rightSrc = imageRight || imageCenter;

    const isExternal = href?.startsWith("http");
    const Wrapper = href ? motion.a : motion.div;
    const wrapperProps = href
        ? { href, ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}) }
        : {};

    /* ── Color variants driven by Framer Motion ── */
    const containerVariants = {
        rest: {
            backgroundColor: "var(--color-neutral-100)",
            borderColor: "var(--color-neutral-300)",
            boxShadow: "inset 0 0 0 0px var(--color-accent-border)"
        },
        hover: {
            backgroundColor: "var(--color-accent-bg)",
            borderColor: "var(--color-accent-border)",
            boxShadow: "inset 0 0 0 1px var(--color-accent-border)"
        },
    };

    const projectNameVariants = {
        rest: { color: "var(--color-neutral-500)" },
        hover: { color: "var(--color-accent-border)" }, /* blue-800 */
    };

    const titleVariants = {
        rest: { color: "var(--color-neutral-750)" },
        hover: { color: "var(--color-accent-fg)" }, /* blue-900 */
    };

    const descVariants = {
        rest: { color: "var(--color-neutral-500)" },
        hover: { color: "var(--color-accent-border)" }, /* blue-800 */
    };

    const slugVariants = {
        rest: { color: "var(--color-neutral-500)" },
        hover: { color: "var(--color-accent-border)" }, /* blue-600 */
    };


    const ctaWrapperVariants = {
        rest: {
            paddingBottom: "0.375rem",
            marginTop: "0rem"
        },
        tap: {
            paddingBottom: "0rem",
            marginTop: "0.375rem"
        },
    };

    const dividerVariants = {
        rest: { borderColor: "var(--color-neutral-300)" },
        hover: { borderColor: "var(--color-accent-border)" },
    };

    const iconPlaceholderSm = {
        rest: { color: "var(--color-neutral-500)" },
        hover: { color: "var(--color-accent-border)" },
    };

    /* ── Shared sub-components ── */
    const headerRow = (
        <div className="inline-flex justify-between items-center w-full">
            <motion.span
                variants={projectNameVariants}
                transition={spring}
                className="font-label-lg-mono md:font-label-md-mono"
            >
                {slug.replace(/^\//, "")}
            </motion.span>
            <div className="flex items-center gap-2">
                <motion.div variants={iconPlaceholderSm} transition={spring}>
                    <ArrowUpRight className="size-5 md:size-[18px]" weight="bold" />
                </motion.div>
            </div>
        </div>
    );

    const contentBox = (
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <motion.p
                    variants={titleVariants}
                    transition={spring}
                    className="font-body-md-bold md:font-body-lg-bold self-stretch"
                >
                    {title}
                </motion.p>
                {description && (
                    <motion.p
                        variants={descVariants}
                        transition={spring}
                        className="font-label-md-mono self-stretch"
                    >
                        {description}
                    </motion.p>
                )}
            </div>

            {/* CTA button (keyboard-key style) */}
            <motion.div variants={ctaWrapperVariants} transition={spring} className="w-full px-0.5 pt-0.5 bg-blue-950 rounded-sm flex ">
                <motion.div transition={spring} className="self-stretch w-full p-2 bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2 overflow-hidden">
                    <span className="font-label-sm-mono text-neutral-100">{ctaText}</span>
                </motion.div>
            </motion.div>
        </div>
    );

    const textPanelDesktop = (
        <motion.div
            variants={dividerVariants}
            transition={spring}
            className={`hidden md:flex col-span-1 self-stretch p-6 md:p-8 flex-col justify-between items-start overflow-hidden ${side === "left" ? "border-r" : "border-l"}`}
            style={{ borderColor: "var(--color-neutral-300)" }}
        >
            {headerRow}
            {contentBox}
        </motion.div>
    );

    const imagePanel = (
        <div className="col-span-2 self-stretch relative flex justify-center items-center overflow-hidden md:bg-none min-h-[350px] md:min-h-0 py-10 md:py-0">
            <div className="relative w-full max-w-[200px] md:max-w-[280px] aspect-252/537 flex justify-center items-center z-10">

                {/* Left image */}
                <motion.div
                    variants={imgVariants.left}
                    transition={spring}
                    className="absolute inset-0 origin-center"
                >
                    <Image src={leftSrc} alt="" fill sizes="(max-width: 768px) 200px, 280px" quality={90} className="object-contain" priority />
                </motion.div>

                {/* Right image */}
                <motion.div
                    variants={imgVariants.right}
                    transition={spring}
                    className="absolute inset-0 origin-center"
                >
                    <Image src={rightSrc} alt="" fill sizes="(max-width: 768px) 200px, 280px" quality={90} className="object-contain" priority />
                </motion.div>

                {/* Center image */}
                <motion.div
                    variants={imgVariants.center}
                    transition={spring}
                    className="absolute inset-0 origin-center"
                >
                    <Image src={imageCenter} alt={imageAlt} fill sizes="(max-width: 768px) 200px, 280px" quality={90} className="object-contain" priority />
                </motion.div>
            </div>

            {/* Slug label */}
            <motion.span
                variants={slugVariants}
                transition={spring}
                className={`hidden md:block absolute top-4 ${side === "left" ? "right-4" : "left-4"} font-label-sm-mono z-20`}
            >
                {slug}
            </motion.span>
        </div>
    );

    return (
        <Wrapper
            {...wrapperProps}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate="rest"
            className={`w-full max-w-[1024px] flex flex-col md:grid md:grid-cols-3 md:h-[600px] rounded-lg border border-border-default overflow-hidden cursor-pointer ${className || ""}`}
            variants={containerVariants}
            transition={spring}
        >
            {/* MOBILE ONLY: Header Top */}
            <motion.div variants={dividerVariants} transition={spring} className="md:hidden w-full border-b flex p-4" style={{ borderColor: 'var(--color-neutral-300)' }}>
                {headerRow}
            </motion.div>

            {/* Desktop alignment logic */}
            {side === "left" ? (
                <>
                    {textPanelDesktop}
                    {imagePanel}
                </>
            ) : (
                <>
                    {imagePanel}
                    {textPanelDesktop}
                </>
            )}

            {/* MOBILE ONLY: Footer Content */}
            <motion.div variants={dividerVariants} transition={spring} className="md:hidden w-full border-t flex p-4 relative z-20" style={{ borderColor: 'var(--color-neutral-300)' }}>
                {contentBox}
            </motion.div>
        </Wrapper>
    );
}