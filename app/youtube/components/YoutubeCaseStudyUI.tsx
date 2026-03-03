"use client"

import React from "react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-geist-mono text-label-lg-mobile sm:text-label-lg text-text-tertiary">
            {children}
        </p>
    );
}

export function BodyText({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-body-mobile sm:text-body text-text-primary w-full">
            {children}
        </p>
    );
}

export function Heading({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h3-mobile sm:text-h3 text-text-primary w-full">
            {children}
        </p>
    );
}

export function Title({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h2-mobile sm:text-h2 text-text-primary w-full">
            {children}
        </p>
    );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h4-mobile sm:text-h4 text-text-primary w-full">
            {children}
        </p>
    );
}

export function ActionIndicator({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white border-2 border-[#F94412] px-4 py-2 rounded-full inline-flex self-center">
            <p className="font-geist font-medium text-[#F94412] text-label-md-mobile sm:text-label-md">
                {children}
            </p>
        </div>
    );
}
