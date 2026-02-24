export default function ProConCard({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "pro" | "con";
}) {
    const bg = variant === "pro" ? "bg-[var(--cs-green-light)]" : "bg-[var(--cs-red-light)]";
    const text = variant === "pro" ? "text-[var(--cs-green-dark)]" : "text-[var(--cs-red-dark)]";
    return (
        <div className={`${bg} flex items-center justify-center overflow-hidden px-4 py-4 md:py-4 rounded-2xl md:rounded-4 w-full`}>
            <p className={`${text} font-(family-name:--font-geist) font-medium leading-normal text-base md:text-xl tracking-[-0.2px]`}>
                {children}
            </p>
        </div>
    );
}
