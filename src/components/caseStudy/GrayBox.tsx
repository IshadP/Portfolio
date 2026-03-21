import React from 'react';

interface GrayBoxProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    square?: boolean;
}

export default function GrayBox({ title, children, className = "", square = false }: GrayBoxProps) {
    return (
        <div className={`bg-bg-default w-full md:max-w-[1024px] overflow-hidden rounded-xl flex flex-col gap-4 items-start justify-between p-4
         ${square ? "aspect-square" : ""}`}>
            {title && (
                <p className="text-label text-text-secondary p-2 font-semibold">
                    {title}
                </p>
            )}
            <div className={`w-full ${className}`}>
            {children}
            </div>
        </div>
    );
}
