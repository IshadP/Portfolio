"use client";

import { useState } from "react";
import {
  ListIcon,
  XIcon,
  CaretLeftIcon,
  CheckIcon,
  CopySimpleIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEmailShortcut } from "../hooks/useEmailShortcut";

const navLinks = [
  { label: "Designs", href: "/" },
  { label: "Experiments", href: "/experiments" },
  { label: "Resume", href: "/resume" },
];

const springTransition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
} as const;

function MenuToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={isOpen ? "close" : "open"}
        initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        {isOpen ? (
          <XIcon size={28} className="text-text-primary" weight="regular" />
        ) : (
          <ListIcon size={28} className="text-text-primary" weight="regular" />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function EmailCopiedTooltip({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none absolute bottom-full left-1/2 z-100 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-green-100 border border-border-default px-2 py-1 font-label-sm normal-case text-green-800"
          role="status"
          aria-live="polite"
        >
          Email copied
        </motion.span>
      )}
    </AnimatePresence>
  );
}

function EmailTooltip({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none absolute bottom-full left-1/2 z-100 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-bg-subtle border border-border-default px-2 py-1 font-label-sm normal-case text-text-primary"
          role="status"
          aria-live="polite"
        >
          C to copy
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailTooltipVisible, setEmailTooltipVisible] = useState(false);

  const projectNames: Record<string, string> = {
    "/printhub": "PrintHub",
    "/youtube": "YouTube",
  };

  const isProjectPage = projectNames[pathname] !== undefined;
  const projectName = projectNames[pathname] || "";
  const currentPageLabel =
    navLinks.find((link) => link.href === pathname)?.label ??
    (isProjectPage ? projectName : "Home");

  const { isPressed, copied, copy } = useEmailShortcut();

  return (
    <nav className="sticky top-4 z-90 flex flex-col items-center w-full">
      {/* ── Desktop Tab-Strip Nav ── */}
      <div className="hidden md:flex items-stretch justify-between w-full max-w-5xl h-16 bg-surface-light rounded-tl-lg rounded-tr-lg border border-border-default">
        {/* Left: Tab Links */}
        <div className="flex items-stretch rounded-tl-lg overflow-hidden">
          {isProjectPage ? (
            <Link
              href="/"
              className="group flex items-center gap-2 self-stretch px-6 py-2 border-r border-border-default no-underline hover:bg-bg-muted transition-colors"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                <CaretLeftIcon
                  size={18}
                  weight="bold"
                  className="text-text-secondary"
                />
              </span>
              <span className="font-label-lg text-text-secondary">
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
                  className={`self-stretch px-6 py-2 border-r border-border-default flex items-center justify-center overflow-hidden no-underline ${
                    isActive
                      ? "bg-active-bg"
                      : "bg-surface-light hover:bg-bg-muted transition-colors"
                  }`}
                >
                  <span
                    className={`font-label-lg ${isActive ? "text-active-fg" : "text-text-secondary"}`}
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
          <div className="self-stretch px-6 py-2 flex items-center gap-1">
            <span className="font-label-lg text-text-disabled">
              Let&apos;s Talk
            </span>
            <span className="font-label-lg text-text-disabled">→</span>
            <div className="border-b-2 border-dotted border-text-secondary flex items-center">
              <a
                href="mailto:ispande16@gmail.com"
                className="font-label-lg text-text-secondary no-underline"
              >
                ispande16@gmail.com
              </a>
            </div>
            <motion.button
              onClick={copy}
              onMouseEnter={() => setEmailTooltipVisible(true)}
              onMouseLeave={() => setEmailTooltipVisible(false)}
              onFocus={() => setEmailTooltipVisible(true)}
              onBlur={() => setEmailTooltipVisible(false)}
              className="relative ml-1 inline-flex cursor-pointer items-center justify-center text-text-primary"
              variants={{ rest: { y: 0 }, pressed: { y: 3 } }}
              initial="rest"
              animate={isPressed ? "pressed" : "rest"}
              whileTap="pressed"
              transition={springTransition}
              title={copied ? "Copied!" : "Copy Email (C)"}
              aria-label={copied ? "Email Copied" : "Copy Email"}
            >
              <EmailTooltip visible={emailTooltipVisible && !copied} />
              <EmailCopiedTooltip visible={copied} />
              {copied ? (
                <CheckIcon size={20} weight="bold" />
              ) : (
                <CopySimpleIcon size={20} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Mobile Nav Container ── */}
      <div className="flex flex-col md:hidden w-full bg-surface-light rounded-tl-lg rounded-tr-lg border border-border-default overflow-hidden">
        <button
          className="flex items-center justify-between w-full h-16 px-4 cursor-pointer border-none bg-transparent text-left"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {isProjectPage ? (
            <>
              <Link
                href="/"
                className="z-20 p-2 -ml-2"
                onClick={(e) => e.stopPropagation()}
              >
                <CaretLeftIcon
                  size={24}
                  weight="bold"
                  className="text-text-primary"
                />
              </Link>
              <div className="absolute inset-x-0 flex justify-center pointer-events-none">
                <span className="font-label-md-mono text-text-primary">
                  {projectName}
                </span>
              </div>
              <div className="z-20 p-2 -mr-2">
                <MenuToggleIcon isOpen={menuOpen} />
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2 pointer-events-none">
              <MenuToggleIcon isOpen={menuOpen} />
              <span className="font-label-lg text-text-primary">
                {currentPageLabel}
              </span>
            </div>
          )}
        </button>

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
                      className={`flex items-center no-underline p-4 border-b border-border-default ${
                        isActive
                          ? "bg-active-bg text-active-fg"
                          : "text-text-secondary hover:text-text-primary transition-colors"
                      }`}
                    >
                      <span className="font-label-lg">{item.label}</span>
                    </Link>
                  );
                })}

                {/* Email + Copy (Mobile) */}
                <div className="mt-4 border-t border-border-default flex items-center justify-between p-4">
                  <div className="border-b-2 border-dotted border-text-secondary flex items-center">
                    <a
                      href="mailto:ispande16@gmail.com"
                      className="font-label-lg text-text-secondary no-underline"
                    >
                      ispande16@gmail.com
                    </a>
                  </div>
                  <motion.button
                    onClick={copy}
                    className="relative"
                    variants={{
                      rest: { paddingBottom: "3px", marginTop: "0px" },
                      pressed: { paddingBottom: "0px", marginTop: "3px" },
                    }}
                    initial="rest"
                    animate={isPressed ? "pressed" : "rest"}
                    whileTap="pressed"
                    transition={springTransition}
                    title={copied ? "Copied!" : "Copy Email"}
                    aria-label={copied ? "Email Copied" : "Copy Email"}
                  >
                    <EmailCopiedTooltip visible={copied} />
                    <div
                      className={`h-[22px] px-2 rounded-xs outline-1 outline-border-strong flex justify-center items-center ${copied ? "bg-green-300" : "bg-bg-subtle"}`}
                    >
                      <span
                        className={`font-label-sm uppercase leading-none flex items-center justify-center ${copied ? "text-green-800" : "text-text-primary"}`}
                      >
                        {copied ? (
                          <CheckIcon size={12} weight="bold" />
                        ) : (
                          "Copy"
                        )}
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
