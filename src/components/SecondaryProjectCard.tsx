"use client";

import Image from "next/image";
import { motion, scale } from "framer-motion";

const variants = {
    content: {
        rest: { scale: 1 },
        hover: { scale: 0.55 }
    },
    imageLeft: {
        rest: { rotate: 0, x: 0, scale: 1 },
        hover: { rotate: 4, x: -20, scale: 0.5 }
    },
    imageRight: {
        rest: { rotate: 0, x: 0, scale: 1 },
        hover: { rotate: -4, x: 20, scale: 0.55 }
    },
    tooltip: {
        rest: { opacity: 0, scale: 0.95, y: 10 },
        hover: { opacity: 1, scale: 1, y: 0 }
    }
};

const springTransition = { type: "spring", stiffness: 300, damping: 25 } as const;
const tooltipTransition = { type: "spring", stiffness: 400, damping: 25 } as const;

type Props = {
    title?: string;
    description?: string;
    subtitle?: string;
    imageLeft?: string;
    imageRight?: string;
    routeText?: string;
    href?: string;
    hoverLabelBg?: string;
    hoverLabelText?: string;
    side?: "left" | "right";
    className?: string;
};

export default function SecondaryProjectCard({
    title = "redesigned search for user intent",
    description,
    subtitle = "Youtube",
    imageLeft = "/2e9b6401fca89e7b203d8dcd6dfa64d939ba12b4.png",
    imageRight = "/2e9b6401fca89e7b203d8dcd6dfa64d939ba12b4.png",
    routeText = "/YOUTUBE",
    href,
    hoverLabelBg,
    hoverLabelText,
    side = "left",
    className = "",
}: Props) {
    const isExternal = href?.startsWith("http");
    const Wrapper = href ? motion.a : motion.div;
    const wrapperProps = href
        ? { href, ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}) }
        : {};

    const containerVariants = {
        rest:  { 
            backgroundColor: "var(--color-neutral-100)", 
            borderColor: "var(--color-border-default)",
            boxShadow: "inset 0 0 0 0px var(--color-accent-border)"
        },
        hover: { 
            backgroundColor: "var(--color-accent-bg)",   
            borderColor: "var(--color-accent-border)",
            boxShadow: "inset 0 0 0 1.5px var(--color-accent-border)"
        },
    };

    const textPanel = (
        <div className={`col-span-1 self-stretch p-5 flex flex-col justify-between items-start overflow-hidden border-border-default ${
            side === "left" ? "border-r" : "border-l"
        }`}>
            <div className="flex flex-col gap-1 w-full">
                <span className="font-label-lg-mono text-text-muted uppercase">
                    {subtitle}
                </span>
                <p className="font-body-lg-bold text-text-primary">
                    {title}
                </p>
                {description && (
                    <p className="font-label-md-mono text-text-muted">
                        {description}
                    </p>
                )}
            </div>
            
            <div className="w-full">
                <p className="text-code-sm text-text-muted text-xs uppercase opacity-70">
                    {routeText}
                </p>
            </div>
        </div>
    );

    const imagePanel = (
        <div className="col-span-2 self-stretch relative flex items-center justify-center overflow-hidden bg-bg-subtle/50">
            <motion.div
                variants={variants.content}
                transition={springTransition}
                className="relative w-full h-full flex justify-center items-center p-12"
            >
                {/* Left (back) Image */}
                <motion.div
                    variants={variants.imageRight}
                    transition={springTransition}
                    className="absolute w-[80%] aspect-square z-0 overflow-hidden rounded-xl border border-border-default shadow-sm"
                >
                    <Image
                        src={imageRight}
                        alt={`${subtitle} right`}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Right (front) Image */}
                <motion.div
                    variants={variants.imageLeft}
                    transition={springTransition}
                    className="absolute w-[80%] aspect-square z-10 overflow-hidden rounded-xl border border-border-default shadow-md"
                >
                    <Image
                        src={imageLeft}
                        alt={`${subtitle} left`}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </motion.div>
        </div>
    );

    return (
        <Wrapper
            {...wrapperProps}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={containerVariants}
            transition={springTransition}
            className={`w-full max-w-[1024px] h-[400px] rounded-lg border border-border-default grid grid-cols-3 overflow-hidden cursor-pointer ${className}`}
        >
            {side === "left" ? (
                <>
                    {textPanel}
                    {imagePanel}
                </>
            ) : (
                <>
                    {imagePanel}
                    {textPanel}
                </>
            )}
        </Wrapper>
    );
}
