"use client";

import Image from "next/image";
import { motion, scale } from "framer-motion";

const variants = {
    content: {
        rest: { scale: 1 },
        hover: { scale: 0.95 }
    },
    imageLeft: {
        rest: { rotate: 0, x: 0, scale: 1 },
        hover: { rotate: 4, x: -20, scale: 0.95 }
    },
    imageRight: {
        rest: { rotate: 0, x: 0, scale: 1 },
        hover: { rotate: -4, x: 20, scale: 0.95 }
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
    subtitle?: string;
    imageLeft?: string;
    imageRight?: string;
    routeText?: string;
};

export default function FeatureCard({
    title = "redesigned search for user intent",
    subtitle = "Youtube",
    imageLeft = "/2e9b6401fca89e7b203d8dcd6dfa64d939ba12b4.png",
    imageRight = "/2e9b6401fca89e7b203d8dcd6dfa64d939ba12b4.png",
    routeText = "/YOUTUBE",
}: Props) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="bg-bg-primary border-2 border-outline-primary flex flex-col items-center justify-between overflow-hidden p-4 relative rounded-3xl w-full aspect-square group cursor-pointer @container"
        >
            {/* Top Header */}
            <div className="flex gap-4 sm:gap-8 items-start justify-between w-full">
                <div className="bg-bg-secondary px-3 py-2 rounded-xl">
                    <p className="font-card-mono text-text-primary">
                        {title}
                    </p>
                </div>
                <div className="bg-bg-secondary flex items-center justify-center px-3 py-2 rounded-xl">
                    <p className="font-card-mono text-text-primary whitespace-nowrap">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Image Container */}
            <div className="flex items-start justify-center overflow-hidden relative w-full h-full">
                <motion.div
                    variants={variants.content}
                    transition={springTransition}
                    className="relative w-full h-full flex justify-center items-start"
                >
                    {/* Left Image */}
                    <motion.div
                        variants={variants.imageRight}
                        transition={springTransition}
                        className="absolute w-[60cqw] aspect-280/344 z-0"
                    >
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-bg-primary to-transparent z-10 pointer-events-none" />
                        <Image
                            src={imageRight}
                            alt={`${subtitle} left`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        variants={variants.imageLeft}
                        transition={springTransition}
                        className="absolute w-[60cqw] aspect-280/344 z-10"
                    >
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-bg-primary to-transparent z-10 pointer-events-none" />
                        <Image
                            src={imageLeft}
                            alt={`${subtitle} right`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Top Gradient - Outside the motion div so it stays fixed while image scales */}

            </div>

            {/* Hover Tooltip - Click to open */}
            <motion.div
                variants={variants.tooltip}
                transition={tooltipTransition}
                className="absolute left-1/2 -translate-x-1/2 bottom-[5%] bg-bg-primary flex items-center overflow-hidden px-3 py-2 rounded-full shadow-lg z-20 pointer-events-none"
            >
                <p className="font-card-mono text-text-primary whitespace-nowrap">
                    CLICK TO OPEN
                </p>
            </motion.div>

            {/* Route Text */}
            <div className="w-full flex justify-end shrink-0 z-10">
                <p className="font-label-mono text-text-primary text-xs whitespace-nowrap uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    {routeText}
                </p>
            </div>
        </motion.div>
    );
}
