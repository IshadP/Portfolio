import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Copy, Check } from "@phosphor-icons/react";
import { useEmailShortcut } from "../hooks/useEmailShortcut";

export default function Footer() {
    const variants: Variants = {
        rest: {
            y: 0,
            rotate: '0deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            rotate: '8deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        hover1: {
            y: -5,
            rotate: '-8deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        hover2: {
            y: -5,
            rotate: '12deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };
    const { isPressed, copied, copy } = useEmailShortcut();
    const springTransition = { type: "spring", stiffness: 500, damping: 30 } as const;

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return (
        <footer className="w-full flex flex-col items-center">
            {/* Nav style footer block */}
            <div className="w-full max-w-[1024px] h-fit bg-bg-subtle border border-border-default inline-flex md:flex-row flex-col justify-between items-center">
                {/* Social Links */}
                <div className="px-6 flex justify-start items-center gap-6 py-4">
                    <motion.a
                        initial="rest"
                        whileHover="hover"
                        variants={variants}
                        href="https://x.com/ishadpande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden"
                    >
                        <Image src="/x.png" alt="X" width={40} height={40} quality={90} className="block" />
                    </motion.a>
                    <motion.a
                        initial="rest"
                        whileHover="hover1"
                        variants={variants}
                        href="https://www.linkedin.com/in/ishadpande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden"
                    >
                        <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} quality={90} className="block" />
                    </motion.a>
                    <motion.a
                        initial="rest"
                        whileHover="hover2"
                        variants={variants}
                        href="https://www.behance.net/ishadpande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden"
                    >
                        <Image src="/behance.png" alt="Behance" width={40} height={40} quality={90} className="block" />
                    </motion.a>
                </div>

                {/* Email CTA */}
                <div className="md:px-6 px-2 flex justify-start w-full items-center gap-8 overflow-hidden">                    {/* Desktop Email row */}
                    <div className="hidden md:flex items-center gap-1 opacity-100 mix-blend-normal">
                        <span className="font-label-lg text-text-disabled">Let&apos;s Talk</span>
                        <span className="font-label-lg text-text-disabled">→</span>
                        
                        <div className="border-b-2 border-text-secondary flex justify-center items-center gap-2">
                            <a href="mailto:ispande16@gmail.com" className="font-label-lg text-text-secondary no-underline">
                                ispande16@gmail.com
                            </a>
                        </div>
                        <motion.button
                            onClick={copy}
                            className="bg-border-strong rounded-md flex overflow-hidden ml-1 cursor-pointer"
                            variants={{
                                rest: { paddingBottom: "3px", marginTop: "0px" },
                                pressed: { paddingBottom: "0px", marginTop: "3px" }
                            }}
                            initial="rest"
                            animate={isPressed ? "pressed" : "rest"}
                            whileTap="pressed"
                            transition={springTransition}
                            title={copied ? "Copied!" : "Copy Email (C)"}
                        >
                            <div className={`h-[22px] px-2 rounded-xs outline-1 outline-border-strong flex justify-center items-center ${copied ? "bg-green-100" : "bg-bg-subtle"}`}>
                                <span className={`font-label-sm uppercase leading-none flex items-center justify-center gap-1 ${copied ? "text-green-800" : "text-text-primary"}`}>
                                    {copied ? <Check size={12} weight="bold" /> : "c"}
                                </span>
                            </div>
                        </motion.button>
                    </div>

                    {/* Mobile Email row (Full width) */}
                    <div className="md:hidden mt-4 border-t border-border-default flex items-center justify-between h-16  p-4 w-full">
                        <div className="border-b-2 border-dotted border-text-secondary flex items-center">
                            <a href="mailto:ispande16@gmail.com" className="font-label-lg text-text-secondary no-underline">
                                ispande16@gmail.com
                            </a>
                        </div>

                        {/* 3D padding/margin swap button */}
                        <motion.button
                            variants={{
                                rest: { paddingBottom: "3px", marginTop: "0px" },
                                pressed: { paddingBottom: "0px", marginTop: "3px" }
                            }}
                            initial="rest"
                            animate={isPressed ? "pressed" : "rest"}
                            whileTap="pressed"
                            onClick={copy}
                            transition={springTransition}
                            className="bg-border-strong rounded-md flex overflow-hidden cursor-pointer"
                            title={copied ? "Copied!" : "Copy Email"}
                        >
                            <div className={`h-[24px] px-2 rounded-xs outline-1 outline-border-strong flex justify-center items-center ${copied ? "bg-green-300" : "bg-bg-subtle"}`}>
                                <span className={`font-label-sm uppercase leading-none flex items-center justify-center ${copied ? "text-green-800" : "text-text-primary"}`}>
                                    {copied ? <Check size={12} weight="bold" /> : "Copy"}
                                </span>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Thanks for visiting block */}
            <div className="w-full max-w-[1024px] h-96 relative border-l border-r border-border-default overflow-hidden rounded-bl-lg rounded-br-lg bg-bg-subtle">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-text-disabled text-3xl md:text-6xl font-bold font-caveat">Thanks for visiting. </span>
                    <span className="text-[#eab308] text-3xl md:text-6xl font-bold font-caveat">Have a great day!</span>
                </div>
            </div>
        </footer>
    );
}


