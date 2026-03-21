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
        variant === "insight" ? "bg-bg-default border-2 border-border-default" : 
        variant === "fact" ? "bg-neutral-20" :
        ""; // normal variant

    // Determine text style based on variant
    const text = 
        variant === "pro" ? "text-status-success-fg text-body" : 
        variant === "con" ? "text-text-red text-body" : 
        variant === "fact" ? "text-text-primary text-body-sm" :
        "text-text-primary text-body-sm"; // normal and insight sum up here

    return (
        <div className={`${bg} flex items-start overflow-hidden px-6 py-4 rounded-xl w-full ${!full ? "md:max-w-[456px]" : ""}`}>
            <p className={`${text}`}>
                {children}
            </p>
        </div>
    );
}
