"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { ReadCvLogo } from "@phosphor-icons/react";

export default function Hero() {
    const pathname = usePathname();

    return (
        <section className="sticky top-0 z-10 flex flex-col px-2 py-10 md:py-16 min-h-[34vh] items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-(--max-content-width) mx-auto px-2">
                {pathname === "/" && (
                    <p className="font-(family-name:--font-geist) font-semibold text-[40px] md:text-[64px] leading-[1.04] text-[#333] tracking-[-2px]">
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
            </div>
        </section>
    );
}
