"use client";

import { useState } from "react";
import { WarningDiamond, List, X } from "@phosphor-icons/react";
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

    // Derive the current page label from navLinks
    const currentPageLabel =
        navLinks.find((link) => link.href === pathname)?.label ?? "Home";

    return (
        <nav className="sticky top-0 z-50 flex flex-col border-t border-border-secondary bg-bg-primary px-(--spacing-nav-px) py-(--spacing-nav-py) md:px-0">
            <div className="flex items-center justify-between">
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
                    <span className="font-(family-name:--font-geist) text-[16px] font-medium leading-normal text-text-secondary">
                        {currentPageLabel}
                    </span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden flex-1 items-center gap-4 md:flex">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className="group inline-flex items-start overflow-hidden p-(--spacing-icon-border) no-underline"
                            >
                                <div className="flex items-center justify-center gap-(--spacing-icon-gap) overflow-hidden rounded-(--radius-nav-item) p-(--spacing-icon-padding)">
                                    <span
                                        className={`relative font-(family-name:--font-geist) font-medium leading-normal text-lg text-text-primary after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-text-primary after:transition-all after:duration-300 after:ease-out ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Center Icon (Warning Diamond) - Expandable on hover */}
                <div className="flex flex-none items-center justify-center">
                    <motion.div
                        className="flex items-center justify-center overflow-hidden rounded-[25px] bg-[#dbffbc] cursor-pointer"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={{
                            rest: { width: "40px", height: "40px", padding: "8px" },
                            hover: { width: "208px", height: "40px", padding: "8px" }
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <div className="flex items-center gap-[4px] min-w-max">
                            <motion.div
                                variants={{
                                    rest: { rotate: 0 },
                                    hover: { rotate: 360 }
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <WarningDiamond size={24} color="#46781a" weight="regular" />
                            </motion.div>
                            <motion.p
                                className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#46781a] text-[16px] whitespace-nowrap"
                                variants={{
                                    rest: { opacity: 0, x: -10, display: "none" },
                                    hover: { opacity: 1, x: 0, display: "block" }
                                }}
                                transition={{ duration: 0.2, delay: 0.05 }}
                            >
                                Open to Opportunities
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                {/* Email (hidden on mobile) */}
                <div className="hidden flex-1 justify-end md:flex">
                    <div className="inline-flex items-start overflow-hidden p-(--spacing-icon-border)">
                        <div className="flex items-center justify-center gap-(--spacing-icon-gap) overflow-hidden rounded-(--radius-nav-item) p-(--spacing-icon-padding)">
                            <span className="font-(family-name:--font-geist) text-lg font-medium leading-normal text-text-secondary">
                                Let's Talk
                            </span>
                            <span className="font-(family-name:--font-geist) text-lg font-medium leading-normal text-text-secondary">
                                →
                            </span>
                            <a
                                href="mailto:ispande16@gmail.com"
                                className="font-(family-name:--font-geist) text-lg font-medium leading-normal text-text-primary underline decoration-dotted underline-offset-[20%]"
                            >
                                ispande16@gmail.com
                            </a>
                            <CopyEmailButton iconSize={20} color="#b7b7b7" />
                        </div>
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
                        className="overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-1 pt-4 pb-2">
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`flex items-center rounded-xl px-4 py-3 no-underline transition-colors duration-200 ${isActive
                                                ? "bg-[#f0f0f0] text-text-primary"
                                                : "text-text-tertiary hover:bg-[#f8f8f8] hover:text-text-primary"
                                            }`}
                                    >
                                        <span className="font-(family-name:--font-geist) text-[18px] font-medium">
                                            {item.label}
                                        </span>
                                    </a>
                                );
                            })}

                            {/* Mobile email link */}
                            <div className="mt-2 border-t border-border-primary pt-3 px-4">
                                <a
                                    href="mailto:ispande16@gmail.com"
                                    className="font-(family-name:--font-geist) text-[16px] font-medium text-text-tertiary underline decoration-dotted underline-offset-4"
                                >
                                    ispande16@gmail.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
