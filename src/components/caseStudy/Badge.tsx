"use client";

import { XIcon, TargetIcon, CheckIcon } from "@phosphor-icons/react";

// Define the 3 variants
type BadgeVariant = "error" | "info" | "success" ;

export default function Badge({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: BadgeVariant;
}) {
    // 1. Map colors to variants
    const colors: Record<BadgeVariant, string> = {
        error: "bg-bg-red text-text-red",
        info: "bg-bg-blue text-text-blue",
        success: "bg-bg-green text-text-green",
    };

    // 2. Map icons to variants
    const icons: Record<BadgeVariant, React.ReactNode> = {
        error: <XIcon size={20} weight="bold" />,
        info: <TargetIcon size={20} weight="bold" />,
        success: <CheckIcon size={20} weight="bold" />,
    };

    return (
        <div className={`${colors[variant]} flex w-fit items-center gap-2 rounded-lg p-2`}>
            {icons[variant]}
            <p className="font-label-md">
                {children}
            </p>
        </div>
    );
}