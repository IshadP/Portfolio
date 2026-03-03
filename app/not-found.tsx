"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const springTransition = { type: "spring", stiffness: 200, damping: 25 } as const;

export default function NotFound() {
    return (
        <div className="bg-bg-primary min-h-screen flex flex-col items-center justify-center px-4 gap-8">
            {/* Animated Star */}
            <motion.div
                className="flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/assets/dark-star.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </motion.div>

            {/* 404 Text */}
            <div className="flex flex-col items-center gap-3">
                <h1 className="font-geist font-semibold text-[60px] sm:text-[120px] leading-none tracking-[-4px] text-[#333]">
                    404
                </h1>
                <p className="font-geist-mono text-label-lg-mobile sm:text-label-lg font-medium text-[#757575] text-center max-w-md">
                    This page doesn't exist — yet.
                </p>
            </div>

            {/* Back Home Button */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#333333] px-6 py-3 font-geist text-base font-medium text-white no-underline transition-colors hover:bg-[#111]"
                >
                    ← Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
