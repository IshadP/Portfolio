import { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export default function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div
            className={`
        grid w-full grid-cols-2 gap-4 sm:grid-cols-4
        ${className}
      `}
        >
            {children}
        </div>
    );
}