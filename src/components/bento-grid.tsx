import { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
    number?: number;
}

export default function BentoGrid({ children, className = "", number = 2 }: BentoGridProps) {
    return (
        <div
            className={`
        grid w-full gap-4 sm:grid-cols-4
        ${className} grid-cols-${number}
      `}
        >
            {children}
        </div>
    );
}