"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── Static Motion Variants ── */
const springTransition = { type: "spring", stiffness: 200, damping: 25 } as const;

const starVariants = {
    rest: { rotate: -45, scale: 1 },
    hover: { rotate: -179, scale: 0.47, transition: springTransition }
};

const textVariants = {
    rest: { width: 0, opacity: 0, marginLeft: 0 },
    hover: { width: "auto", opacity: 1, marginLeft: 8, transition: springTransition }
};

export default function StarCard() {

    return (
        <a
            href="#ai-experiments"
            className="block h-full w-full cursor-pointer focus:outline-none"
        >
            {/* Ensure minimal height to show content correctly */}
            <motion.div
                className="bg-bg-tertiary border border-border-primary rounded-(--radius-card) overflow-hidden w-full h-full"
                initial="rest"
                whileHover="hover"
                whileFocus="hover"
            >
                <div className="gradient-rainbow rounded-[calc(var(--radius-card)-0.125rem)] overflow-hidden w-full h-full flex flex-row items-center justify-center p-8">
                    <motion.div
                        variants={starVariants}
                        className="shrink-0 origin-center flex items-center justify-center rotate-45"
                    >
                        <Image
                            src="/assets/star.svg"
                            alt="Star icon"
                            width={54}
                            height={54}
                            className="object-contain"
                        />
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        className="overflow-hidden whitespace-nowrap flex items-center"
                    >
                        <span className="font-semibold text-[28px] text-white tracking-[-1.12px] leading-none">
                            AI Experiments
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </a>
    );
}
