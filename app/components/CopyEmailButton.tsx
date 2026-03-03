"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "@phosphor-icons/react";

export default function CopyEmailButton({
    iconSize = 18,
    color = "currentColor",
}: {
    iconSize?: number;
    color?: string;
}) {
    const [copied, setCopied] = useState(false);

    const onCopySuccess = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("ispande16@gmail.com");
            onCopySuccess();
        } catch {
            const ta = document.createElement("textarea");
            ta.value = "ispande16@gmail.com";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            onCopySuccess();
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
                <CheckIcon size={iconSize} className="text-text-primary" weight="bold" />
            ) : (
                <CopyIcon size={iconSize} className="text-text-primary" weight="regular" />
            )}
        </button>
    );
}
