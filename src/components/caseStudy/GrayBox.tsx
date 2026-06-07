import React from "react";

interface GrayBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  square?: boolean;
  t?: boolean;
  b?: boolean;
  r?: boolean;
  l?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  layout?: "centered" | "row" | "col" | "none";
  gap?: "none" | "sm" | "md" | "lg";
}

export default function GrayBox({
  title,
  children,
  className = "",
  innerClassName = "",
  square = false,
  t = false,
  b = false,
  r = false,
  l = false,
  padding = "md",
  layout = "centered",
  gap = "none",
}: GrayBoxProps) {
  const paddingMap = {
    none: "p-0",
    sm: "p-4 md:p-6",
    md: "p-6 md:p-8",
    lg: "p-6 md:p-12 lg:p-16",
  };

  const layoutMap = {
    centered: "flex flex-col items-center justify-center text-center",
    row: "flex flex-col lg:flex-row items-center justify-center",
    col: "flex flex-col items-start justify-center",
    none: "",
  };

  const gapMap = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6 lg:gap-8",
    lg: "gap-8 lg:gap-12",
  };

  return (
    <div
      className={`bg-neutral-200/50 w-full md:max-w-5xl border-border-default overflow-hidden flex flex-col ${t ? "border-t" : ""} ${b ? "border-b" : ""} ${r ? "border-r" : ""} ${l ? "border-l" : ""} ${square ? "aspect-square" : ""} ${className}`}
    >
      {title && (
        <div className={`px-4 pt-4 md:px-6 md:pt-6 ${padding === "none" ? "pb-4 md:pb-6" : ""}`}>
          <p className="font-label-md-mono text-text-muted font-semibold">
            {title}
          </p>
        </div>
      )}
      <div
        className={`w-full flex-grow ${paddingMap[padding]} ${layoutMap[layout]} ${gapMap[gap]} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
