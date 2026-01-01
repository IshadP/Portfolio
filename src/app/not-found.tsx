"use client";

import { motion } from "motion/react";
import Button from "@/components/button";
;

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
            >
                <h1 className="text-3xl font-normal text-[#FD6C3D] italic font-serif tracking-tight md:text-9xl">
                    Whoopsies!
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 flex flex-col items-center"
            >
                <p className="mb-8 max-w-md text-3xl font-semibold text-[#E2AB61]">
                    Nothing found here...yet
                </p>

                <Button href="/" variant="secondary">
                    Go Back to Home
                </Button>
            </motion.div>

            {/* Decorative background element */}
            <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center opacity-20">
                <div className="h-[50vh] w-full rounded-full bg-linear-to-tr from-surface to-background" />
            </div>
        </div>
    );
}
