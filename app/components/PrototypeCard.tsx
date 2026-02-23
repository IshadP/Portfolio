"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface PrototypeCardProps {
    title: string;
    imageSrc: string;
    imageAlt?: string;
    href?: string;
}

const springTransition = { type: "spring", stiffness: 200, damping: 25 } as const;

const pillVariants = {
    rest: { y: "20cqw", opacity: 0 },
    hover: { y: 0, opacity: 1, transition: springTransition },
};

export default function PrototypeCard({
    title,
    imageSrc,
    imageAlt = "",
    href,
}: PrototypeCardProps) {

    const Wrapper = href ? motion.a : motion.div;
    const wrapperProps = href
        ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
        : {};

    return (
        <Wrapper
            {...wrapperProps}
            className="group @container relative block w-full aspect-square md:aspect-2/3 h-full overflow-hidden cursor-pointer rounded-(--radius-card) bg-bg-primary border-3 border-border-card"
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
        >
            <div className="relative z-20 flex h-full flex-col">
                {/* ── Title area ── */}
                <div className="relative z-40 flex items-center justify-center pt-[33px] px-4">
                    <h2
                        className="max-w-[354px] font-(family-name:--font-geist) font-semibold text-[28px] text-text-brand-green text-center tracking-[-1px] leading-normal whitespace-pre-wrap"
                    >
                        {title}
                    </h2>
                </div>

                {/* ── Phone Image ── */}
                <div className="relative flex flex-1 items-end justify-center pt-8 overflow-hidden z-10 w-full h-full">
                    <div className="relative w-[333px] h-[710px] top-[40px]">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </div>
            </div>

            {/* ── "Click to open" pill ── */}
            <motion.div
                variants={pillVariants}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#ffffff] flex items-center px-4 py-2 rounded-full z-50 shadow-lg border border-border-primary"
            >
                <p className="font-semibold font-(family-name:--font-geist) leading-normal text-[#000000] text-center tracking-[-0.03rem] text-sm whitespace-nowrap">
                    Click to open
                </p>
            </motion.div>
        </Wrapper>
    );
}
