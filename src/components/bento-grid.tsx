import { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
    number?: number;
    id?: string;
    title?: string;
}

export default function BentoGrid({ children, className = "", number = 2, id, title }: BentoGridProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <h2 className="text-4xl leading-10 italic tracking-[-0.0625rem]  font-serif text-text-on-primary">{title}</h2>
            <div
                className={`
        grid w-full gap-4 sm:grid-cols-4 grid-col
        ${className} grid-cols-${number}
      `}
                id={id}
            >

                {children}
            </div>
        </div>
    );
}