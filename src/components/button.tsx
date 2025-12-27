"use client";

import { motion } from "motion/react"
import Link from "next/link";
import { ReactNode } from "react";

// 1. Create a Motion-enabled Link component
const MotionLink = motion(Link);

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;         // New: Optional link field
  onClick?: () => void;  // Optional click handler
  className?: string;    // Allow external styling overrides
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {

  // 2. Define colors for each variant (Outer Base, Border, Inner Surface, Text)
  // These use the semantic names we defined in tailwind.config.ts
  const variants = {
    primary: {
      outer: "bg-btn-primary-base outline-btn-primary-border",
      inner: "bg-btn-primary-surface text-btn-primary-text",
    },
    secondary: {
      outer: "bg-btn-secondary-base outline-btn-secondary-border",
      inner: "bg-btn-secondary-surface text-btn-secondary-text",
    },
    tertiary: {
      outer: "bg-btn-tertiary-base outline-btn-tertiary-border",
      inner: "bg-btn-tertiary-surface text-btn-tertiary-text",
    },
  };

  const currentVariant = variants[variant];

  // 3. Common container styles shared by both Button and Link
  const containerClasses = `
    relative group outline outline-1 outline-offset-[-1px] 
    px-0.5 pt-0.5 pb-1.5 rounded-xl flex-col inline-flex justify-start items-start gap-2 overflow-hidden
    ${currentVariant.outer} 
    ${className}
  `;

  // 4. Common animation props
  const animationProps = {
    whileTap: { scale: 0.96, y: 1 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  // 5. Inner Content (The face of the button)
  const content = (
    <div className={`
      self-stretch flex-1 p-2 rounded-[10px] inline-flex justify-center items-center gap-2 overflow-hidden w-full
      font-medium font-sans text-base
      ${currentVariant.inner}
    `}>
      {children}
    </div>
  );

  // 6. Conditional Rendering
  if (href) {
    return (
      <MotionLink
        href={href}
        {...animationProps}
        className={containerClasses}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...animationProps}
      className={containerClasses}
    >
      {content}
    </motion.button>
  );
}