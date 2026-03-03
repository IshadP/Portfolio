export default function ProConCard({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "pro" | "con" | "insight";
}) {
    const bg = variant === "pro" ? "bg-bg-green" : variant === "con" ? "bg-bg-red" : "bg-bg-gray";
    const text = variant === "pro" ? "text-text-green" : variant === "con" ? "text-text-red" : "text-text-primary";
    return (
        <div className={`${bg} flex items-start overflow-hidden px-4 py-4 md:py-4 rounded-lg md:rounded-xl w-full`}>
            <p className={`${text} text-label-lg-mobile sm:text-label-lg`}>
                {children}
            </p>
        </div>
    );
}
