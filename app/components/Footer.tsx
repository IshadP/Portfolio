"use client"

import CopyEmailButton from "./CopyEmailButton";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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

    return (
        <footer className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-18 py-6 sm:py-0 w-full gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-4 pr-4 text-label-lg-mobile sm:text-label-lg text-text-primary">
                <motion.a
                    initial="rest"
                    whileHover="hover"
                    variants={variants}
                    href="https://x.com/ishadpande"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                    <span className="flex h-10 w-10 md:h-auto md:w-auto items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/assets/X.png" alt="X" width={40} height={40} className="block" />
                    </span>
                </motion.a>
                <motion.a
                    initial="rest"
                    whileHover="hover1"
                    variants={variants}
                    href="https://www.linkedin.com/in/ishadpande"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                    <span className="flex h-10 w-10 md:h-auto md:w-auto items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/assets/LinkedIn.png" alt="LinkedIn" width={40} height={40} className="block" />
                    </span>
                </motion.a>
                <motion.a
                    initial="rest"
                    whileHover="hover2"
                    variants={variants}
                    href="https://www.behance.net/ishadpande"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                    <span className="flex h-10 w-10 md:h-auto md:w-auto items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/assets/Behance.png" alt="Behance" width={40} height={40} className="block" />
                    </span>
                </motion.a>
            </div>

            {/* Email CTA */}
            <div className="flex items-center overflow-hidden md:px-4 py-4 ">
                <div className="flex items-center gap-2 justify-center overflow-hidden p-2 flex-wrap">
                    <span className="text-label-md-mobile sm:text-label-lg text-text-tertiary">
                        Let’s Talk
                    </span>
                    <span className="text-label-md-mobile sm:text-label-lg text-text-tertiary">
                        →
                    </span>
                    <a
                        href="mailto:ispande16@gmail.com"
                        className="text-label-md-mobile sm:text-label-lg text-text-primary border-b-2 border-dashed border-text-primary no-underline"
                    >
                        ispande16@gmail.com
                    </a>
                    <CopyEmailButton
                        iconSize={24}
                    />
                </div>
            </div>
        </footer>
    );
}
