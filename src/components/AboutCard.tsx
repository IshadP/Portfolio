"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const iconVariants = {
    x: {
        rest: { rotate: -3, y: 0 },
        hover: { rotate: 5, y: -5, scale: 1.1 }
    },
    linkedin: {
        rest: { rotate: 6, y: 0 },
        hover: { rotate: -2, y: -5, scale: 1.1 }
    },
    behance: {
        rest: { rotate: -2, y: 0 },
        hover: { rotate: 4, y: -5, scale: 1.1 }
    }
};

const springTransition = { type: "spring", stiffness: 400, damping: 15 } as const;

type Props = {
    className?: string;
};

export default function AboutCard({ className = "" }: Props) {
    return (
        <div className={`flex flex-col items-center overflow-hidden md:rounded-3xl rounded-2xl gap-4 border-2 border-outline-primary bg-bg-primary p-4 md:p-8 h-fit w-full @container ${className}`}>
            <div className="w-full text-text-primary">
                <p className="font-body-mono text-text-primary">
                    I have experience of building for efficiency and usability, catering both business and users.
                </p>
                <br />
                <p className="font-body-mono font-medium tracking-tight">
                    Using AI tools I ship these experiences quickly, instead of static mockups.
                </p>
            </div>
            <div className="flex w-full items-center gap-1">
                <p className="font-body-mono text-text-primary pr-2">
                    Find me on
                </p>
                <motion.a
                    initial="rest"
                    whileHover="hover"
                    variants={iconVariants.x}
                    transition={springTransition}
                    href="https://x.com/ishadpande" target="_blank" rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden flex-none cursor-pointer"
                >
                    <Image
                        alt="X (Twitter) Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                        src="/4d6de0825a1efd7faa2cfae4ab00b2d51aa658bc.png"
                    />
                </motion.a>
                <p className="font-body-mono text-text-primary px-1">
                    ,
                </p>
                <motion.a
                    initial="rest"
                    whileHover="hover"
                    variants={iconVariants.linkedin}
                    transition={springTransition}
                    href="https://www.linkedin.com/in/ishadpande" target="_blank" rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden flex-none cursor-pointer"
                >
                    <Image
                        alt="LinkedIn Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                        src="/e0cc2e914fa7b5966325148cd0167788b43f943e.png"
                    />
                </motion.a>
                <p className="font-body-mono text-text-primary px-1">
                    or
                </p>
                <motion.a
                    initial="rest"
                    whileHover="hover"
                    variants={iconVariants.behance}
                    transition={springTransition}
                    href="https://www.behance.net/ishadpande" target="_blank" rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden flex-none cursor-pointer"
                >
                    <Image
                        alt="Behance Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                        src="/559ca3cb0193459fc6ee1ea77998a33c2d802145.png"
                    />
                </motion.a>
            </div>
        </div>
    );
}
