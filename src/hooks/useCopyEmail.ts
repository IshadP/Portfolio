import { useState, useCallback } from "react";

export function useCopyEmail(email: string = "ispande16@gmail.com") {
    const [copied, setCopied] = useState(false);

    const copy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            return true;
        } catch {
            const ta = document.createElement("textarea");
            ta.value = email;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            return true;
        }
    }, [email]);

    return { copied, copy, setCopied };
}
