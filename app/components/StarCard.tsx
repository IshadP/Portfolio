"use client";

import { useState, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return (
        <a
            href="/ai-experiments"
            className="block h-full w-full cursor-pointer focus:outline-none"
        >
            <motion.div
                className="border-grey-20 rounded-4xl border-3 overflow-hidden w-full h-full"
                initial={isMobile ? "hover" : "rest"}
                animate={isMobile ? "hover" : undefined}
                whileHover={isMobile ? undefined : "hover"}
                whileFocus={isMobile ? undefined : "hover"}
            >
                <div className="gradient-rainbow overflow-hidden w-full h-full flex flex-row items-center justify-center p-8">
                    <motion.div
                        variants={starVariants}
                        className="flex items-center justify-center rotate-45"
                    >
                        {isMobile ?
                            <Image
                                src="/assets/star.svg"
                                alt="Star icon"
                                width={64}
                                height={64}
                                className="object-contain"
                            /> :
                            <Image
                                src="/assets/star.svg"
                                alt="Star icon"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        }

                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        className="overflow-hidden whitespace-nowrap flex items-center"
                    >
                        <span className="text-h3 text-bg-primary leading-none">
                            AI Experiments
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </a>
    );
}
