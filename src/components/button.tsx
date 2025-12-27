import * as Icons from "@phosphor-icons/react";
import { motion, HTMLMotionProps } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

const MotionLink = motion.create(Link);

// 1. Types: Strictly 3 variants
export type ButtonVariant = "primary" | "secondary" | "tertiary";

// Helper to render icon from name or ReactNode
const renderIcon = (icon: ReactNode | string) => {
  if (typeof icon === "string") {
    const IconComponent = (Icons as Record<string, any>)[icon];
    if (IconComponent) {
      return <IconComponent size={20} weight="bold" />;
    }
    console.warn(`Icon "${icon}" not found in @phosphor-icons/react`);
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
  ...props
}: ButtonProps) {

  // 2. Styles Mapping
  const variants = {
    primary: "bg-btn-primary-base outline-btn-primary-border text-btn-primary-text hover:brightness-110",
    secondary: "bg-btn-secondary-base outline-btn-secondary-border text-btn-secondary-text hover:brightness-105",
    tertiary: "bg-btn-tertiary-base outline-btn-tertiary-border text-btn-tertiary-text hover:brightness-110",
    linkedin: "bg-[#024F79] outline-[#00456A] text-white hover:brightness-105",
    twitter: "bg-[#272727] outline-[#000000] text-white hover:brightness-105",
    email: "bg-[#BAC0B5] outline-[#1e1e1e] text-black hover:brightness-105",
  };

  const surfaceVariants = {
    primary: "bg-btn-primary-surface",
    secondary: "bg-btn-secondary-surface",
    tertiary: "bg-btn-tertiary-surface",
    linkedin: "bg-[#0073B1]",
    twitter: "bg-[#474747]",
    email: "bg-[#ffffff]",
  };



  // 3. Base Classes
  const baseClasses = ` group
    outline outline-1 px-0.5 pt-0.5 pb-1.5 rounded-xl 
    items-center justify-center font-medium font-sans
    transition-all overflow-hidden 
    disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
    ${variants[variant]}  
    ${fullWidth ? "w-full" : "w-full md:w-auto"}
    ${className}
  `;

  // 4. Animation Props
  const animationProps = {
    whileTap: { paddingBottom: "0.125rem", marginTop: "0.250rem" },
    transition: { duration: 0, type: "tween" as const, bounce: 0 },
  };

  // 5. Inner Content
  const content = (
    <div className={`flex items-center gap-2 justify-center p-3 rounded-[10px] ${surfaceVariants[variant]}`}>
      {leftIcon && (
        <span className="flex items-center justify-center ">{renderIcon(leftIcon)}</span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex items-center justify-center group-hover:rotate-45 transition-all">{renderIcon(rightIcon)}</span>
      )}
    </div>
  );

  // 6. Render as Link or Button
  if (href && !disabled) {
    const isExternal = href.startsWith("http") || href.startsWith("https");
    const isMailto = href.startsWith("mailto:");

    return (
      <MotionLink
        href={href}
        {...animationProps}
        className={baseClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      {...props}
      disabled={disabled}
      {...animationProps}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}