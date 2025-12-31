import { ArrowUpRightIcon, CaretDownIcon, CaretLeftIcon, DownloadIcon } from "@phosphor-icons/react";
import { motion, HTMLMotionProps, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { ReactNode } from "react";

const MotionLink = motion.create(Link);

// 1. Types: Strictly 3 variants
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "linkedin" | "twitter" | "email" | "outline";

// Map available icons for string lookup
const IconMap: Record<string, any> = {
  ArrowUpRightIcon,
  CaretDownIcon,
  CaretLeftIcon,
  DownloadIcon,
};

// Helper to render icon from name or ReactNode
const renderIcon = (icon: ReactNode | string) => {
  if (typeof icon === "string") {
    const IconComponent = IconMap[icon];
    if (IconComponent) {
      return <IconComponent size={20} weight="bold" />;
    }
    console.warn(`Icon "${icon}" not found in IconMap`);
    return null;
  }
  return icon;
};

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  leftIcon?: ReactNode | string;
  rightIcon?: ReactNode | string;
  className?: string;
  fullWidth?: boolean;
  isOnlyIcon?: boolean;
  copyText?: string;
}

// Combine with standard button props (excluding isLoading)
type ButtonProps = BaseProps & HTMLMotionProps<"button">;

export default function Button({
  children,
  className = "",
  variant = "primary",
  href,
  leftIcon,
  rightIcon,
  disabled,
  fullWidth = false,
  isOnlyIcon: isOnlyIconProp,
  copyText,
  ...props
}: ButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  // 2. Styles Mapping
  const variants = {
    primary: "bg-btn-primary-base outline-btn-primary-border text-btn-primary-text hover:brightness-110 outline outline-1",
    secondary: "bg-btn-secondary-base outline-btn-secondary-border text-btn-secondary-text hover:brightness-105 outline outline-1",
    tertiary: "bg-btn-tertiary-base outline-btn-tertiary-border text-btn-tertiary-text hover:brightness-110 outline outline-1",
    linkedin: "bg-[#024F79] outline-[#00456A] text-surface hover:brightness-110 outline outline-1",
    twitter: "bg-[#272727] outline-[#000000] text-surface hover:brightness-110 outline outline-1",
    email: "bg-[#BAC0B5] outline-[#1e1e1e] text-on-surface hover:brightness-90 outline outline-1",
    outline: "font-semibold text-btn-primary-text hover:brightness-110 sm:hidden block"
  };

  const surfaceVariants = {
    primary: "bg-btn-primary-surface",
    secondary: "bg-btn-secondary-surface",
    tertiary: "bg-btn-tertiary-surface",
    linkedin: "bg-[#0073B1]",
    twitter: "bg-[#474747]",
    email: "bg-[#ffffff]",
    outline: ""
  };



  // 3. Base Classes
  const baseClasses = ` group
     px-0.5 pt-0.5 pb-1.5 rounded-xl 
    items-center justify-center font-medium
    transition-all 
    disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed ${variant === "outline" ? "shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)]" : "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
    ${variants[variant]}  
    ${fullWidth ? "w-full" : "w-full md:w-auto"}
    ${className}
  `;

  // 4. Animation Props
  const animationProps = {
    whileTap: { paddingBottom: "0.125rem", marginTop: "0.250rem", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.25)" },
    transition: { duration: 0, type: "tween" as const, bounce: 0 },
  };

  const isIconOnly = isOnlyIconProp || (!children && (leftIcon || rightIcon));

  // 5. Inner Content
  const content = (
    <div className={`
      flex items-center justify-center rounded-[0.625rem] ${surfaceVariants[variant]}
      ${isIconOnly ? "p-3" : "p-3 gap-2"}
    `}>
      {leftIcon && (
        <span className="flex items-center justify-center ">{renderIcon(leftIcon)}</span>
      )}

      {children && <span>{children}</span>}

      {rightIcon && (
        <span className="flex items-center justify-center group-hover:rotate-45 transition-all">{renderIcon(rightIcon)}</span>
      )}
    </div>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (copyText) {
      e.preventDefault();
      navigator.clipboard.writeText(copyText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }

    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
    if (props.onClick) {
      props.onClick(e as any);
    }
  };

  // 6. Render as Link or Button
  const Component = (href && !disabled) ? MotionLink : motion.button;
  const isExternal = href && (href.startsWith("http") || href.startsWith("https"));

  // Extra props for link behavior
  const linkProps = (href && !disabled) ? {
    href,
    ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})
  } : {
    disabled, // motion.button accepts disabled
    type: props.type || "button", // Default to button type if not specified
  };

  return (
    <Component
      {...props as any} // Cast to any to suppress TS union complexity
      {...linkProps}
      {...animationProps}
      onClick={handleClick}
      className={baseClasses}
    >
      {content}
      <AnimatePresence>
        {isCopied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-md whitespace-nowrap z-100 pointer-events-none sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-full sm:mt-2 sm:bottom-auto sm:mb-0"
          >
            {/* Standardized message */}
            Email Copied
          </motion.div>
        )}
      </AnimatePresence>
    </Component>
  );
}