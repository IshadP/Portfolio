export default function ProConCard({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "pro" | "con" | "insight" | "fact";
}) {
    const bg = variant === "pro" ? "bg-bg-green" : variant === "con" ? "bg-bg-red" : variant === "insight" ? "bg-bg-primary border-2  border-outline-primary" : "bg-grey-10";
    const text = variant === "pro" ? "text-text-green text-label-lg-mobile sm:text-label-lg" : variant === "con" ? "text-text-red text-label-lg-mobile sm:text-label-lg" : "text-text-primary text-label-md-mobile sm:text-label-md";
    return (
        <div className={`${bg} flex items-start overflow-hidden p-4 rounded-lg md:rounded-xl w-full`}>
            <p className={`${text} `}>
                {children}
            </p>
        </div>
    );
}
