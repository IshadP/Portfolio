"use client";

import { motion, TargetAndTransition } from "motion/react";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
    className?: string;
    whileHover?: TargetAndTransition;
    hasTap?: boolean;
}

export default function BentoCard({
    children,
    colSpan = 1,
    rowSpan = 1,
    className = "",
    whileHover,
    hasTap = false,
}: BentoCardProps) {

    const colClasses = {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
    };

    const rowClasses = {
        1: "row-span-1",
        2: "row-span-2",
        3: "row-span-3",
        4: "row-span-4",
    };

    const isSquare = (colSpan === 1 && rowSpan === 1) || (colSpan === 2 && rowSpan === 2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={whileHover}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileTap={hasTap ? { scale: 0.98 } : {}}
            className={`
        relative overflow-hidden rounded-4xl
        ${colClasses[colSpan]} 
        ${rowClasses[rowSpan]}
        ${isSquare ? "aspect-square" : `aspect-[${rowSpan}/${colSpan}]`}
        ${className} 
      `}
        >
            <div className="h-full w-full min-h-48 sm:min-h-32">
                {children}
            </div>
        </motion.div>
    );
}