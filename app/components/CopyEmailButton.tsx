"use client";

import { useState } from "react";
import { Copy, Check } from "@phosphor-icons/react";

export default function CopyEmailButton({
    iconSize = 18,
    color = "currentColor",
}: {
    iconSize?: number;
    color?: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("ispande16@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback
            const ta = document.createElement("textarea");
            ta.value = "ispande16@gmail.com";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopy}
            aria-label="Copy email address"
            className="relative cursor-pointer inline-flex items-center justify-center"
            title={copied ? "Copied!" : "Copy email"}
        >
            {copied ? (
                <Check size={iconSize} color="#3c7c03" weight="bold" />
            ) : (
                <Copy size={iconSize} color="#1e1e1e" weight="regular" />
            )}
        </button>
    );
}
