import React from 'react';

interface GrayBoxProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    square?: boolean;
    t?: boolean; 
    b?: boolean;
    r?: boolean;
    l?: boolean;
}

export default function GrayBox({ title, children, className = "", square = false, t = false, b = false, r = false, l = false }: GrayBoxProps) {
    return (
        <div className={`bg-neutral-200/50 w-full md:max-w-[1024px] ${t ? "border-t" : ""} ${b ? "border-b" : ""} ${r ? "border-r" : ""} ${l ? "border-l" : ""} border-border-default overflow-hidden  flex flex-col gap-4 items-start justify-between p-4
         ${square ? "aspect-square" : ""}`}>
            {title && (
                <p className="font-label-md-mono text-text-muted p-2 font-semibold">
                    {title}
                </p>
            )}
            <div className={`w-full ${className}`}>
            {children}
            </div>
        </div>
    );
}
