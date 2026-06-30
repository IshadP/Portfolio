"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Designs", href: "/" },
  { label: "Craft", href: "/#craft" },
  { label: "About me", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLink = navLinks.find(link => link.href === pathname);
  const currentPageLabel = currentLink ? currentLink.label : pathname?.replace("/", "") || "";

  const isCaseStudy = pathname?.startsWith("/casestudy/");

  if (isCaseStudy) {
    return (
      <nav className="pt-6 pb-4 flex items-center justify-center w-full bg-bg-default">
        <div className="w-content max-w-full px-6 md:px-0 flex items-center justify-between font-mono text-sm">
          <Link
            href="/"
            className="flex items-center font-body-sm gap-2 px-4 py-2 rounded-full no-underline outline-none hover:bg-bg-subtle text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <ArrowLeftIcon className="size-4" weight="bold" />
            <span>Back</span>
          </Link>
          <span className=" font-body-md-mono uppercase text-text-muted">{pathname}</span>
        </div>
      </nav>
    );
  }

  return (
    <nav className="pt-6 pb-4 flex items-center justify-center md:justify-center w-full bg-bg-default px-6 md:px-0 relative z-50">
      {/* Desktop Navigation Links */}
      <div
        className="hidden md:flex gap-2 items-center justify-center"
        onMouseLeave={() => setHoveredPath(null)}
      >
        {navLinks.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredPath === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredPath(item.href)}
              className={`relative px-4 py-2 rounded-full no-underline outline-none hover:bg-bg-subtle duration-200 transition-colors ${isActive ? "bg-primary-muted hover:bg-primary-muted" : ""} ${isActive ? "text-primary hover:text-primary" : "text-text-muted hover:text-text-primary"} `}
            >
              <span
                className="relative z-10 font-body-sm transition-colors duration-200 "
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden w-full justify-between items-center">
        <span className="font-body-sm text-text-primary font-semibold">
          {currentPageLabel}
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-2 rounded-full hover:bg-bg-subtle text-text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-bg-default border-b border-outline shadow-sm flex flex-col p-4 gap-2 md:hidden z-40"
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-4  no-underline font-body-sm transition-colors rounded-full ${isActive ? "bg-primary-muted text-primary" : "text-text-muted hover:bg-bg-subtle hover:text-text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
