"use client";

import { useState, useEffect, useRef } from "react";
import { WarningDiamond, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CopyEmailButton from "./CopyEmailButton";
import Footer from "./Footer";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "AI Experiments", href: "/ai-experiments" },
    { label: "Resume", href: "/resume" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [diamondOpen, setDiamondOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Detect mobile vs desktop (matches Tailwind md: breakpoint at 768px)
    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    // Auto-close the diamond after 2 seconds (mobile only)
    useEffect(() => {
        if (diamondOpen && isMobile) {
            timerRef.current = setTimeout(() => {
                setDiamondOpen(false);
            }, 2000);
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [diamondOpen, isMobile]);

    // Derive the current page label from navLinks
    const currentPageLabel =
        navLinks.find((link) => link.href === pathname)?.label ?? "Home";

    return (
        <nav className="sticky top-0 z-90 flex flex-col border-t border-outline-primary bg-bg-primary py-3">
            <div className="flex items-center justify-between w-full max-w-[1024px]">
                {/* Mobile Nav (Hamburger + Current Page Label) */}
                <div className="flex flex-1 items-center gap-2 md:hidden">
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="cursor-pointer bg-transparent border-none p-0 flex items-center justify-center"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {menuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <X size={32} color="#000" weight="regular" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <List size={32} color="#000" weight="regular" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                    <span className="font-label-lg text-text-primary">
                        {currentPageLabel}
                    </span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden flex-1 items-center gap-2 md:flex h-11">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex h-full items-center justify-center overflow-hidden px-3 py-2 rounded-full transition-colors ${isActive ? "bg-grey-10" : "hover:bg-grey-10"
                                    } no-underline`}
                            >
                                <span className="font-label-md text-text-primary ">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Center Icon (Warning Diamond) — Mobile: click-to-expand + auto-close; Desktop: hover-to-expand */}
                {/* <div className="flex flex-none items-center justify-center">
                    <div className="relative flex items-center justify-center px-4 py-2 gap-4 rounded-4xl bg-[#dbffbc] w-full h-full">
                        <motion.p
                            className="font-geist font-medium not-italic text-[#46781a] text-md whitespace-nowrap"
                        >
                            Open to Opportunities
                        </motion.p>
                    </div>
                </div> */}

                {/* Email (hidden on mobile) */}
                <div className="hidden flex-1 justify-end md:flex">
                    <div className="flex gap-1 items-center justify-center overflow-hidden p-2 rounded-sm">
                        <span className="font-label-md text-text-tertiary ">
                            Let’s Talk
                        </span>
                        <span className="font-label-md text-text-tertiary ">
                            →
                        </span>
                        <div className="border-text-primary border-b-2 border-dashed flex items-center justify-center">
                            <a
                                href="mailto:ispande16@gmail.com"
                                className="font-label-md text-text-primary no-underline"
                            >
                                ispande16@gmail.com
                            </a>
                        </div>
                        <CopyEmailButton iconSize={20} color="var(--color-text-primary)" />
                    </div>
                </div>
            </div>

            {/* ── Mobile Dropdown Menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden md:hidden z-60"
                    >
                        <div className="flex flex-col gap-1 pt-4 pb-2 border-b border-grey-30">
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`flex items-center rounded-xl px-4 py-3 no-underline transition-colors duration-200 ${isActive
                                            ? "bg-grey-20 text-text-primary"
                                            : "text-text-tertiary hover:bg-grey-10 hover:text-text-primary"
                                            }`}
                                    >
                                        <span className="font-label-lg text-text-primary">
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}

                            {/* Mobile email link */}

                        </div>
                        <div className="flex gap-1 items-start justify-start overflow-hidden p-2 rounded-sm pt-4">
                            <span className="font-label-md text-text-tertiary ">
                                Let’s Talk
                            </span>
                            <span className="font-label-md text-text-tertiary ">
                                →
                            </span>
                            <div className=" flex gap-2">
                                <a
                                    href="mailto:ispande16@gmail.com"
                                    className="font-label-md text-text-primary border-text-primary border-b border-dashed"
                                >
                                    ispande16@gmail.com
                                </a>
                                <CopyEmailButton iconSize={20} color="var(--color-text-primary)" />
                            </div>

                        </div>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
