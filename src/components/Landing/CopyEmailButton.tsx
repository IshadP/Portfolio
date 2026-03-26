import { useCopyEmail } from "../hooks/useCopyEmail";
import { CopyIcon, CheckIcon } from "@phosphor-icons/react";

export default function CopyEmailButton({
    iconSize = 18,
    color = "currentColor",
}: {
    iconSize?: number;
    color?: string;
}) {
    const { copied, copy } = useCopyEmail();

    return (
        <button
            onClick={copy}
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
