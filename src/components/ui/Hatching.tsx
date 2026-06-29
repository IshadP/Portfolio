import React from "react";

interface HatchingProps {
  className?: string;
  height?: string;
  width?: string;
}

const Hatching: React.FC<HatchingProps> = ({ className = "", height = "h-6", width = "w-full" }) => {
  return (
    <div
      className={`relative ${height} ${width} shrink-0 border-x border-outline bg-[repeating-linear-gradient(315deg,var(--color-outline)_0,var(--color-outline)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] ${className}`}
    />
  );
};

export default Hatching;
