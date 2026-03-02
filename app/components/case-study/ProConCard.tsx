export default function ProConCard({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "pro" | "con" | "insight";
}) {
    const bg = variant === "pro" ? "bg-[var(--cs-green-light)]" : variant === "con" ? "bg-[var(--cs-red-light)]" : "bg-[var(--cs-gray-bg)]";
    const text = variant === "pro" ? "text-[var(--cs-green-dark)]" : variant === "con" ? "text-[var(--cs-red-dark)]" : "text-text-primary";
    return (
        <div className={`${bg} flex items-start overflow-hidden px-4 py-4 md:py-4 rounded-lg md:rounded-xl w-full`}>
            <p className={`${text} font-(family-name:--font-geist) font-medium leading-normal text-base md:text-xl tracking-[-0.2px]`}>
                {children}
            </p>
        </div>
    );
}
