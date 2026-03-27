"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ReadCvLogoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const heroVariants = {
    initial: { opacity: 0, y: 40, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
} as const;

const heroTransition = { duration: 0.6, ease: "easeOut" } as const;

export default function Hero() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <section className="fixed top-0 left-0 w-full flex justify-center z-1 min-h-[20vh] items-center opacity-0"></section>;
    }

    return (
        <section className="sticky top-0 left-0 w-full flex justify-center z-0 pb-32 items-center">
            <motion.div
                className="flex flex-col md:h-96 h-64 items-start gap-24 justify-center w-full max-w-[1024px] px-3"
                initial="initial"
                animate="animate"
                variants={heroVariants}
                transition={heroTransition}
            >
                {pathname === "/" && (
                    <div className="font-hero flex flex-col gap-24">
                        <div className="w-full flex flex-row justify-between items-center font-label-lg-mono text-text-disabled">
                            <p>Ishad Pande</p>
                            <p>Nagpur, India</p>
                        </div>
                        Engineer turned Product Designer, designing experiences and building them with code.
                    </div>
                )}

                {pathname === "/experiments" && (
                    <div className="flex items-center w-full justify-center gap-4">
                        <div className="relative w-16 h-16 overflow-hidden">
                            <Image src="/star.svg" alt="Dark Star" width={54} height={54} quality={90} />
                        </div>
                        <p className="font-display font-semibold tracking-tight text-text-primary text-4xl md:text-6xl">
                            AI Experiments
                        </p>
                    </div>
                )}

                {pathname === "/resume" && (
                    <div className="flex items-center w-full justify-center gap-4">
                        <ReadCvLogoIcon size={64} className="text-text-primary" />
                        <p className="font-sans font-semibold tracking-tight text-text-primary text-4xl md:text-6xl">
                            Resume
                        </p>
                    </div>
                )}

                {pathname === "/printhub" && (
                    <div className="flex items-center w-full justify-center gap-4">
                        <div className="relative shrink-0 rounded-full overflow-hidden">
                            <Image src="/printhub-icon.svg" alt="Printhub" width={64} height={64} quality={90} />
                        </div>
                        <p className="font-display font-semibold tracking-tight text-text-primary text-4xl md:text-6xl">
                            Printhub
                        </p>
                    </div>
                )}

                {pathname === "/youtube" && (
                    <div className="flex items-center w-full justify-center gap-4">
                        <div className="relative w-16 h-16 overflow-hidden ">
                            <Image src="/youtube-icon.svg" alt="YouTube" fill quality={90} className="object-contain" />
                        </div>
                        <p className="font-display font-semibold tracking-tight text-text-primary text-4xl md:text-6xl">
                            YouTube
                        </p>
                    </div>
                )}
            </motion.div>
        </section>
    );
}
