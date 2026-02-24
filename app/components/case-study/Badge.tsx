"use client";

import { WarningCircleIcon, TargetIcon, XIcon, CheckIcon } from "@phosphor-icons/react";

export default function Badge({
    children,
    variant,
    icon,
}: {
    children: React.ReactNode;
    variant: "red" | "blue" | "green";
    icon?: "warning" | "target" | "close" | "check";
}) {
    const colors = {
        red: "bg-[var(--cs-red-light)] text-[var(--cs-red-dark)]",
        blue: "bg-[var(--cs-blue-badge)] text-[var(--cs-blue-dark)]",
        green: "bg-[var(--cs-green-light)] text-[var(--cs-green-dark)]",
    };

    const iconMap = {
        warning: <WarningCircleIcon size={24} weight="bold" />,
        target: <TargetIcon size={24} weight="bold" />,
        close: <XIcon size={24} weight="bold" />,
        check: <CheckIcon size={24} weight="bold" />,
    };

    return (
        <div className={`${colors[variant]} inline-flex items-center gap-2 rounded-lg p-2`}>
            {icon && iconMap[icon]}
            <p className="font-(family-name:--font-geist) font-semibold leading-[1.16] text-lg md:text-xl tracking-[-0.24px]">
                {children}
            </p>
        </div>
    );
}
