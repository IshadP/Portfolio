"use client";

import { m } from "framer-motion";

export default function FadeIn({
    children,
  className = "",
  timerDelay = 0.25,
}: {
    children: React.ReactNode;
    className?: string;
    timerDelay?: number;
}) {
    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: timerDelay, duration: 0.5, ease: "easeOut" }}
            className={className}
        >
            {children}
        </m.div>
    );
}
