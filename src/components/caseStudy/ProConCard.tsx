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
        variant === "pro" ? "bg-bg-green" : 
        variant === "con" ? "bg-bg-red" : 
        variant === "insight" ? "bg-bg-primary border-2 border-outline-primary" : 
        variant === "fact" ? "bg-bg-secondary" :
        ""; // normal variant

    // Determine text style based on variant
    const text = 
        variant === "pro" ? "text-text-green font-label-md sm:font-label-lg" : 
        variant === "con" ? "text-text-red font-label-md sm:font-label-lg" : 
        variant === "fact" ? "text-text-primary font-label-md sm:font-label-lg" :
        "text-text-primary font-label-md sm:font-label-lg"; // normal and insight sum up here

    return (
        <div className={`${bg} flex items-start overflow-hidden px-6 py-4 rounded-lg w-full ${!full ? "md:max-w-[456px]" : ""}`}>
            <p className={`${text}`}>
                {children}
            </p>
        </div>
    );
}
