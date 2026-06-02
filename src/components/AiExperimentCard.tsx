"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Motion Variants ── */
const springTransition = { type: "spring", stiffness: 300, damping: 25 } as const;

const variants = {
    star: {
        rest: { rotate: 0 },
        hover: { rotate: -179, transition: springTransition }
    },
    overlay: {
        rest: { opacity: 0.9 },
        hover: { opacity: 1 },
    },
    label: {
        rest: { opacity: 0.7 },
        hover: { opacity: 1 },
    },

};

type Props = {
    routeText?: string;
    title?: string;
    className?: string;
};

export default function AiExperimentCard({
    routeText = "/AI-EXPERIMENTS",
    className = ""
}: Props) {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
    );

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return (
        <a
            href="/ai-experiments"
            className={`block h-full w-full cursor-pointer focus:outline-none ${className}`}
        >
            <motion.div
                className="bg-bg-default flex flex-col items-center justify-between overflow-hidden p-4 relative rounded-3xl w-full h-full @container"
                initial={isMobile ? "hover" : "rest"}
                animate={isMobile ? "hover" : "rest"}
                whileHover={isMobile ? undefined : "hover"}
            >

                {/* ── Center Content (Rainbow Area) ── */}
                <div className="flex-1 w-full flex items-center justify-center relative my-4">
                    <motion.div
                        variants={variants.overlay}
                        transition={springTransition}
                        className="absolute inset-0 rounded-2xl bg-linear-to-br from-red-400 via-green-300 to-blue-500"
                    />

                    <div className="relative z-10 flex flex-row items-center justify-center ">
                        <motion.div
                            variants={variants.star}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src="/cards/star.svg"
                                alt="Star icon"
                                width={64}
                                height={64}
                                quality={90}
                                className="object-contain"
                            />
                        </motion.div>


                    </div>
                </div>

                {/* ── Bottom Route Text ── */}
                <div className="w-full flex justify-end shrink-0 z-10">
                    <motion.p
                        variants={variants.label}
                        transition={springTransition}
                        className="text-code-sm text-text-primary text-xs whitespace-nowrap uppercase"
                    >
                        {routeText}
                    </motion.p>
                </div>

                {/* Subtle Hover Overlay */}
            </motion.div>
        </a>
    );
}
