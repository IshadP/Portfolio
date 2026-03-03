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
        red: "bg-bg-red text-text-red",
        blue: "bg-bg-blue text-text-blue",
        green: "bg-bg-green text-text-green",
    };

    const iconMap = {
        warning: <WarningCircleIcon size={24} weight="bold" />,
        target: <TargetIcon size={24} weight="bold" />,
        close: <XIcon size={24} weight="bold" />,
        check: <CheckIcon size={24} weight="bold" />,
    };

    return (
        <div className={`${colors[variant]} flex items-center gap-2 rounded-lg p-2`}>
            {icon && iconMap[icon]}
            <p className="font-geist font-semibold leading-[1.16] text-label-lg-mobile sm:text-label-lg tracking-[-0.24px]">
                {children}
            </p>
        </div>
    );
}
