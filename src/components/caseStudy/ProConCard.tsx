export default function ProConCard({
    children,
    variant = "normal",
    full = false,
}: {
    children: React.ReactNode;
    variant?: "pro" | "con" | "insight" | "fact" | "normal";
    full?: boolean;
}) {
    // Determine background color based on variant
    const bg = 
        variant === "pro" ? "bg-status-success-bg" : 
        variant === "con" ? "bg-status-error-bg" : 
        variant === "insight" ? "bg-bg-default border border-border-default" : 
        variant === "fact" ? "bg-neutral-200" :
        ""; // normal variant

    // Determine text style based on variant
    const text = 
        variant === "pro" ? "text-status-success-fg font-body-sm" : 
        variant === "con" ? "text-text-red font-body-sm" : 
        variant === "fact" ? "text-text-primary font-body-xs" :
        "text-text-primary font-body-sm"; // normal and insight sum up here

    return (
        <div className={`${bg} flex items-start overflow-hidden px-6 py-4 rounded-sm w-full ${!full ? "md:max-w-[456px]" : ""}`}>
            <p className={`${text}`}>
                {children}
            </p>
        </div>
    );
}
