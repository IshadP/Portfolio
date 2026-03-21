"use client";

import { useState, useEffect, useRef } from "react";
import { WarningDiamond, List, X, CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CopyEmailButton from "./CopyEmailButton";

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

    // Map path slugs to display names
    const projectNames: Record<string, string> = {
        "/printhub": "PrintHub",
        "/youtube": "YouTube",
    };

    const isProjectPage = projectNames[pathname] !== undefined;
    const projectName = projectNames[pathname] || "";

    // Derive the current page label from navLinks
    const currentPageLabel =
        navLinks.find((link) => link.href === pathname)?.label ?? (isProjectPage ? projectName : "Home");

    return (
        <nav className="sticky top-0 z-90 flex flex-col bg-bg-default p-4 rounded-3xl">
            <div className="flex items-center justify-between w-full max-w-[1024px]">
                {/* Mobile Nav */}
                <div className="flex flex-1 items-center md:hidden w-full relative h-10">
                    {isProjectPage ? (
                        <>
                            {/* Left: Back Arrow */}
                            <Link href="/" className="absolute left-0 z-20 p-2 -ml-2">
                                <CaretLeft size={24} color="#000" weight="bold" />
                            </Link>
                            {/* Center: Project Name */}
                            <div className="absolute inset-x-0 flex justify-center pointer-events-none">
                                <span className="text-label-lg text-text-primary self-center">
                                    {projectName}
                                </span>
                            </div>
                            {/* Right: Menu Toggle */}
                            <button
                                onClick={() => setMenuOpen((prev) => !prev)}
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                className="absolute right-0 z-20 cursor-pointer bg-transparent border-none p-2 -mr-2 flex items-center justify-center"
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
                                            <X size={28} color="#000" weight="regular" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="open"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <List size={28} color="#000" weight="regular" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
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
                            <span className="text-label-lg text-text-primary">
                                {currentPageLabel}
                            </span>
                        </div>
                    )}
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden flex-1 items-center gap-2 md:flex h-11">
                    {isProjectPage ? (
                        <Link
                            href="/"
                            className="flex h-full items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-10 transition-colors no-underline group"
                        >
                            <CaretLeft size={20} color="#000" weight="bold" className="transition-transform group-hover:-translate-x-1" />
                            <span className="text-label-lg text-text-primary">
                                Back to Home
                            </span>
                        </Link>
                    ) : (
                        navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`flex h-full items-center justify-center overflow-hidden px-3 py-2 rounded-full transition-colors ${isActive ? "bg-neutral-10" : "hover:bg-neutral-10"
                                        } no-underline`}
                                >
                                    <span className="text-label-lg text-text-primary ">
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })
                    )}
                </div>

                {/* Center Icon (Warning Diamond) — Mobile: click-to-expand + auto-close; Desktop: hover-to-expand */}
                {/* <div className="flex flex-none items-center justify-center">
                    <div className="relative flex items-center justify-center px-4 py-2 gap-4 rounded-4xl bg-[#dbffbc] w-full h-full">
                        <motion.p
                            className="font-sans font-medium not-italic text-[#46781a] text-md whitespace-nowrap"
                        >
                            Open to Opportunities
                        </motion.p>
                    </div>
                </div> */}

                {/* Email (hidden on mobile) */}
                <div className="hidden flex-1 justify-end md:flex">
                    <div className="flex gap-1 items-center justify-center overflow-hidden p-2 rounded-sm">
                        <span className="text-label-lg text-text-disabled ">
                            Let’s Talk
                        </span>
                        <span className="text-label-lg text-text-disabled ">
                            →
                        </span>
                        <div className="border-text-primary border-b-2 border-dashed flex items-center justify-center">
                            <a
                                href="mailto:ispande16@gmail.com"
                                className="text-label-lg text-text-primary no-underline"
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
                        <div className="flex flex-col gap-1 pt-4 pb-2 border-b border-neutral-30">
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`flex items-center rounded-xl px-4 py-3 no-underline transition-colors duration-200 ${isActive
                                            ? "bg-neutral-20 text-text-primary"
                                            : "text-text-disabled hover:bg-neutral-10 hover:text-text-primary"
                                            }`}
                                    >
                                        <span className="text-label-lg text-text-primary">
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}

                            {/* Mobile email link */}

                        </div>
                        <div className="flex gap-1 items-start justify-start overflow-hidden p-2 rounded-sm pt-4">
                            <span className="text-label-lg text-text-disabled ">
                                Let’s Talk
                            </span>
                            <span className="text-label-lg text-text-disabled ">
                                →
                            </span>
                            <div className=" flex gap-2">
                                <a
                                    href="mailto:ispande16@gmail.com"
                                    className="text-label-lg text-text-primary border-text-primary border-b border-dashed"
                                >
                                    ispande16@gmail.com
                                </a>
                                <CopyEmailButton iconSize={20} color="var(--color-text-primary)" />
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
