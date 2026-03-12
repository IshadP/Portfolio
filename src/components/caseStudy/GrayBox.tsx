import React from 'react';

interface GrayBoxProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function GrayBox({ title, children, className = "" }: GrayBoxProps) {
    return (
        <div className={`bg-bg-secondary w-full md:max-w-[1024px] overflow-hidden rounded-3xl md:rounded-4xl mx-auto ${className}`}>
            {title && (
                <p className="font-label-md sm:font-label-lg text-text-secondary p-2 font-semibold">
                    {title}
                </p>
            )}
            {children}
        </div>
    );
}
