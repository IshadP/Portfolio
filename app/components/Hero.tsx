"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ReadCvLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Hero() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <section className="sticky top-0 z-0 flex flex-col px-2 md:py-16 min-h-[54vh] items-center justify-center opacity-0"></section>;
    }

    return (
        <section className="sticky top-0 z-0 flex flex-col px-2 md:py-16 min-h-[54vh] items-center justify-center">
            <motion.div
                className="flex flex-col items-center justify-center w-full max-w-(--max-content-width) mx-auto px-2"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {pathname === "/" && (
                    <p className="font-(family-name:--font-geist) font-semibold text-[48px] md:text-[64px] leading-[1.04] text-[#333] tracking-[-2px]">
                        Engineer turned Product Designer, designing experiences and building them with code.
                    </p>
                )}

                {pathname === "/ai-experiments" && (
                    <div className="flex items-center gap-4">
                        <div className="relative w-[53px] h-[53px] shrink-0 -rotate-45">
                            <Image src="/assets/dark-star.svg" alt="Dark Star" width={54} height={54} style={{ transform: "rotate(45deg)" }} />
                        </div>
                        <p className="font-(family-name:--font-geist) font-semibold text-[40px] md:text-[64px] leading-[1.04] text-[#333] tracking-[-2px]">
                            AI Experiments
                        </p>
                    </div>
                )}

                {pathname === "/resume" && (
                    <div className="flex items-center gap-4">
                        <ReadCvLogo size={64} color="#333" />
                        <p className="font-(family-name:--font-geist) font-semibold text-[40px] md:text-[64px] leading-[1.04] text-[#333] tracking-[-2px]">
                            Resume
                        </p>
                    </div>
                )}

                {pathname === "/printhub" && (
                    <div className="flex items-center gap-4">
                        <div className="relative shrink-0 rounded-full overflow-hidden -rotate-45">
                            <Image src="/assets/printhub/printhub-avatar.svg" alt="Printhub" width={64} height={64} style={{ transform: "rotate(45deg)" }} />
                        </div>
                        <p className="font-(family-name:--font-geist) font-semibold text-[40px] md:text-[64px] leading-[1.04] text-[#333] tracking-[-2px]">
                            Printhub
                        </p>
                    </div>
                )}

                {pathname === "/youtube" && (
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden -rotate-45 ">
                            <Image src="/assets/youtube/ytlogo.jpg" alt="YouTube" fill className="object-contain" style={{ transform: "rotate(45deg)" }} />
                        </div>
                        <p className="font-(family-name:--font-geist) font-semibold text-[40px] md:text-[64px] leading-[1.04] text-[#333] tracking-[-2px]">
                            YouTube
                        </p>
                    </div>
                )}
            </motion.div>
        </section>
    );
}

