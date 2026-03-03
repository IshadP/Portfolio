import React from 'react';

interface GrayBoxProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function GrayBox({ title, children, className = "" }: GrayBoxProps) {
    return (
        <div className={`bg-grey-10 overflow-hidden rounded-3xl md:rounded-4xl w-full ${className}`}>
            {title && (
                <p className="text-label-lg-mobile sm:text-label-lg text-text-secondary p-4 font-semibold">
                    {title}
                </p>
            )}
            {children}
        </div>
    );
}
