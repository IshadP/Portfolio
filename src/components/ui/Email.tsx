"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import CopyIcon from "../icons/copyIcon";
import CopyIconSuccess from "../icons/copyIconSuccess";
import Link from "next/link";

const EMAIL = "ispande16@gmail.com";
const springTransition = { type: "spring", stiffness: 500, damping: 30 } as const;

interface EmailProps {
  layout?: "desktop" | "mobile";
  className?: string;
  type?: "hidelabel" | "showlabel"
  size?: "small" | "large"
}

export default function Email({
  layout = "desktop",
  className = "",
  type = "showlabel",
  size = "small",
}: EmailProps) {
  const [copied, setCopied] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable) {
        return;
      }
      if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'c') {
        setIsPressed((prev) => {
          if (prev) {
            copy();
          }
          return false;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [copy]);

  if (layout === "mobile") {
    return (
      <div className={`flex items-center justify-between gap-2 py-2 ${className}`}>
        <div className="border-b-2 border-dotted border-text-muted flex items-center">
          <Link
            href={`mailto:${EMAIL}`}
            className="font-label-lg text-text-primary no-underline"
          >
            {EMAIL}
          </Link>
        </div>
        <motion.button
          onClick={copy}
          className="relative inline-flex cursor-pointer items-center justify-center text-text-primary bg-transparent border-none p-0 outline-none"
          variants={{ rest: { y: 0 }, pressed: { y: 3 } }}
          initial="rest"
          animate={isPressed ? "pressed" : "rest"}
          whileTap="pressed"
          transition={springTransition}
          title={copied ? "Copied!" : "Copy Email"}
          aria-label={copied ? "Email Copied" : "Copy Email"}
        >
          {copied ? (
            <CopyIconSuccess size={20} iconColor="var(--color-success)" checkColor="var(--color-on-surface)" />
          ) : (
            <CopyIcon size={20} iconColor="currentColor" letterColor="currentColor" />
          )}
        </motion.button>
      </div>
    );
  }

  const isLarge = size === "large";
  const showLabel = type === "showlabel";
  const textClass = isLarge ? "font-body-lg" : "font-body-sm";
  const iconSize = isLarge ? 24 : 20;

  return (
    <div className={`flex items-center gap-1 ${showLabel ? "px-4 py-4" : "p-0 ml-1.5"} ${className}`}>
      {showLabel && (
        <span className="font-body-sm text-text-muted ">Let's Talk &#8594;</span>
      )}
      <div className="border-b-2 border-dotted border-text-muted flex items-center">
        <a
          href={`mailto:${EMAIL}`}
          className={`${textClass} text-text-primary no-underline`}
        >
          {EMAIL}
        </a>
      </div>
      <motion.button
        onClick={copy}
        className="relative inline-flex cursor-pointer items-center justify-center text-text-primary bg-transparent border-none p-0 outline-none"
        variants={{ rest: { y: 0 }, pressed: { y: 3 } }}
        initial="rest"
        animate={isPressed ? "pressed" : "rest"}
        whileTap="pressed"
        transition={springTransition}
        title={copied ? "Copied!" : "Copy Email (C)"}
        aria-label={copied ? "Email Copied" : "Copy Email"}
      >
        {copied ? (
          <CopyIconSuccess size={iconSize} iconColor="var(--color-success)" checkColor="var(--color-on-surface)" />
        ) : (
          <CopyIcon size={iconSize} iconColor="currentColor" letterColor="currentColor" />
        )}
      </motion.button>
    </div>
  );
}
