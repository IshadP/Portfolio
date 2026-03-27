"use client";

import { useState, useEffect, useRef } from "react";
import { WarningDiamond, List, X, CaretLeft, Check } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEmailShortcut } from "../hooks/useEmailShortcut";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Experiments", href: "/experiments" },
    { label: "Resume", href: "/resume" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile vs desktop
    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    // Map path slugs to display names
    const projectNames: Record<string, string> = {
        "/printhub": "PrintHub",
        "/youtube": "YouTube",
    };

    const isProjectPage = projectNames[pathname] !== undefined;
    const projectName = projectNames[pathname] || "";

    const currentPageLabel =
        navLinks.find((link) => link.href === pathname)?.label ?? (isProjectPage ? projectName : "Home");

    const { isPressed, copied, copy } = useEmailShortcut();
    const springTransition = { type: "spring", stiffness: 500, damping: 30 } as const;

    return (
        <nav className="sticky top-4 z-90 flex flex-col items-center w-full">
            {/* ── Desktop Tab-Strip Nav ── */}
            <div className="hidden md:flex items-stretch justify-between w-full max-w-[1024px] h-16 bg-surface-light rounded-tl-lg rounded-tr-lg border border-border-default overflow-hidden">

                {/* Left: Tab Links */}
                <div className="flex items-stretch">
                    {isProjectPage ? (
                        <Link
                            href="/"
                            className="flex items-center gap-2 self-stretch px-6 py-2 border-r border-border-default hover:bg-bg-muted transition-colors no-underline group"
                        >
                            <CaretLeft
                                size={18}
                                weight="bold"
                                className="text-text-secondary transition-transform group-hover:-translate-x-1"
                            />
                            <span className="font-label-lg text-text-secondary">Back to Home</span>
                        </Link>
                    ) : (
                        navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`self-stretch px-6 py-2 border-r border-border-default flex items-center justify-center overflow-hidden no-underline transition-colors ${isActive
                                            ? "bg-active-bg"
                                            : "hover:bg-bg-subtle"
                                        }`}
                                >
                                    <span
                                        className={`font-label-lg ${isActive ? "text-active-fg" : "text-text-secondary"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })
                    )}
                </div>

                {/* Right: Let's Talk + Email + Copy Key */}
                <div className="flex items-stretch">
                    <div className="self-stretch px-6 py-2 flex items-center gap-1 overflow-hidden">
                        {/* "Let's Talk →" muted label */}
                        <span className="font-label-lg text-text-disabled">Let&apos;s Talk</span>
                        <span className="font-label-lg text-text-disabled">→</span>

                        {/* Email with dashed underline */}
                        <div className="border-b-2 border-dotted border-text-secondary flex items-center">
                            <a
                                href="mailto:ispande16@gmail.com"
                                className="font-label-lg text-text-secondary no-underline"
                            >
                                ispande16@gmail.com
                            </a>
                        </div>

                        {/* Keyboard-style copy key */}
                        <motion.button
                            onClick={copy}
                            className="bg-text-primary rounded-xs outline-1 outline-border-strong inline-flex flex-col justify-start items-start ml-1 cursor-pointer"
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
                            <div className={`w-6 h-[22px] rounded-xs outline-1 outline-border-strong flex justify-center items-center ${copied ? "bg-green-100" : "bg-bg-subtle"}`}>
                                <span className={`font-label-sm uppercase leading-none flex items-center justify-center ${copied ? "text-green-800" : "text-text-primary"}`}>
                                    {copied ? <Check size={12} weight="bold" /> : "c"}
                                </span>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Nav Container ── */}
            <div className="flex flex-col md:hidden w-full bg-surface-light rounded-tl-lg rounded-tr-lg border border-border-default overflow-hidden">
                <div 
                    className="flex items-center justify-between w-full h-16 px-4 cursor-pointer"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {isProjectPage ? (
                        <>
                            {/* Back arrow */}
                            <Link href="/" className="z-20 p-2 -ml-2" onClick={(e) => e.stopPropagation()}>
                                <CaretLeft size={24} weight="bold" className="text-text-primary" />
                            </Link>
                            {/* Centered project name */}
                            <div className="absolute inset-x-0 flex justify-center pointer-events-none">
                                <span className="font-label-md-mono text-text-primary">{projectName}</span>
                            </div>
                            {/* Menu toggle */}
                            <button
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                className="z-20 cursor-pointer bg-transparent border-none p-2 -mr-2 flex items-center justify-center pointer-events-none"
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
                                            <X size={28} className="text-text-primary" weight="regular" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="open"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <List size={28} className="text-text-primary" weight="regular" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center gap-2 pointer-events-none">
                            <button
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                className="bg-transparent border-none p-0 flex items-center justify-center pointer-events-none"
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
                                            <X size={28} className="text-text-primary" weight="regular" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="open"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <List size={28} className="text-text-primary" weight="regular" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                            <span className="font-label-lg text-text-primary">
                                {currentPageLabel}
                            </span>
                        </div>
                    )}
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
                            <div className="flex flex-col">
                                {navLinks.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`flex items-center no-underline transition-colors duration-200 p-4 border-b border-border-default  ${isActive
                                                    ? "bg-active-bg text-active-fg"
                                                    : "text-text-secondary hover:text-text-primary"
                                                }`}
                                        >
                                            <span className="font-label-lg">{item.label}</span>
                                        </Link>
                                    );
                                })}

                                {/* Global C to Copy Email Shortcut (Mobile) */}
                                <div className="mt-4 border-t border-border-default flex items-center justify-between p-4">
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
                                        transition={springTransition}
                                        title={copied ? "Copied!" : "Copy Email"}
                                    >
                                    <div className={`h-[22px] px-2 rounded-xs outline-1 outline-border-strong flex justify-center items-center ${copied ? "bg-green-300" : "bg-bg-subtle"}`}>
                                        <span className={`font-label-sm uppercase leading-none flex items-center justify-center ${copied ? "text-green-800" : "text-text-primary"}`}>
                                            {copied ? <Check size={12} weight="bold" /> : "Copy"}
                                            </span>
                                        </div>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
