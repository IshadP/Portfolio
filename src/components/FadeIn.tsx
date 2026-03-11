"use client";

import { motion } from "framer-motion";

const fadeInVariants = {
    initial: { opacity: 0, filter: "blur(2px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
} as const;

const fadeInTransition = { duration: 0.5, delay: 0.75, ease: "easeOut" } as const;

export default function FadeIn({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInVariants}
            transition={fadeInTransition}
            className={className}
        >
            {children}
        </motion.div>
    );
}
