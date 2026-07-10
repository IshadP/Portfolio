"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import CopyIcon from "../icons/copyIcon";
import CopyIconSuccess from "../icons/copyIconSuccess";

const EMAIL = "ispande16@gmail.com";
const COPY_FEEDBACK_MS = 2000;
const springTransition = { type: "spring", stiffness: 500, damping: 30 } as const;

type TextStyle = "body" | "mono";
type Size = "small" | "large";

interface EmailProps {
  className?: string;
  showLabel?: boolean;
  textStyle?: TextStyle;
  size?: Size;
}

const TEXT_CLASSES: Record<TextStyle, Record<Size, string>> = {
  body: { small: "font-body-sm", large: "font-body-lg" },
  mono: { small: "font-mono-sm", large: "font-mono-lg" },
};

const ICON_SIZES: Record<Size, number> = { small: 20, large: 24 };

export default function Email({
  className = "",
  showLabel = false,
  textStyle = "body",
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
    setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable) {
        return;
      }
      if (e.key.toLowerCase() === "c" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "c") {
        setIsPressed((prev) => {
          if (prev) copy();
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

  const textClass = TEXT_CLASSES[textStyle][size];
  const iconSize = ICON_SIZES[size];

  return (
    <div className={`flex items-center gap-2 ${showLabel ? "px-4 py-4" : "p-0 ml-1.5"} ${className}`}>
      {showLabel && (
        <span className={`${textClass} text-text-muted`}>Let&apos;s Talk &#8594;</span>
      )}
      <div className="border-b-2 border-dotted border-text-muted flex items-center">
        <a href={`mailto:${EMAIL}`} className={`${textClass} text-text-primary no-underline`}>
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
