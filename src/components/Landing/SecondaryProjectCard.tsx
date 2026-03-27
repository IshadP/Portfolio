"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCardProps } from "../../types/project";
import { ArrowUpRight } from "@phosphor-icons/react";

/* ── Motion config ── */
const spring = { type: "spring", stiffness: 300, damping: 25 } as const;

/* Image variants (hover) */
const imgVariants = {
    center: {
        rest: { x: 0, y: 0, rotate: 0, scale: 0.95, zIndex: 10 },
        hover: { x: 0, y: 0, rotate: 0, scale: 0.85, zIndex: 10 },
    },
};

export default function SecondaryProjectCard({
    title,
    description,
    slug = "/PROJECT",
    ctaText = "View Case Study",
    imageCenter,
    imageAlt = "",
    className,
    href,
}: ProjectCardProps) {
    const isExternal = href?.startsWith("http");
    const Wrapper = href ? motion.a : motion.div;
    const wrapperProps = href
        ? { href, ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}) }
        : {};

    /* ── Color variants driven by Framer Motion ── */
    const containerVariants = {
        rest: {
            backgroundColor: "var(--color-neutral-100)",
            borderColor: "var(--color-border-default)",
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
        rest: { borderColor: "var(--color-border-default)" },
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
        <div className="self-stretch flex flex-col justify-start items-start gap-4 w-full">
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

    const imagePanel = (
        <div className="w-full relative flex justify-center items-center overflow-hidden py-10 min-h-[300px] flex-1">
            <div className="relative w-full max-w-[200px] md:max-w-[240px] aspect-1/2 flex justify-center items-center z-10">
                <motion.div
                    variants={imgVariants.center}
                    transition={spring}
                    className="absolute inset-0 origin-center"
                >
                    <Image src={imageCenter} alt={imageAlt} fill sizes="(max-width: 768px) 200px, 240px" quality={90} className="object-contain" priority />
                </motion.div>
            </div>
        </div>
    );

    return (
        <Wrapper
            {...wrapperProps}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate="rest"
            className={`flex flex-col border w-full border-border-default overflow-hidden cursor-pointer ${className || ""}`}
            variants={containerVariants}
            transition={spring}
        >
            {/* Header Top */}
            <motion.div variants={dividerVariants} transition={spring} className="w-full border-b flex p-4" style={{ borderColor: 'var(--color-border-default)' }}>
                {headerRow}
            </motion.div>

            {/* Image section in the middle */}
            {imagePanel}

            {/* Footer Content */}
            <motion.div variants={dividerVariants} transition={spring} className="w-full border-t flex p-4 relative z-20" style={{ borderColor: 'var(--color-border-default)' }}>
                {contentBox}
            </motion.div>
        </Wrapper>
    );
}
