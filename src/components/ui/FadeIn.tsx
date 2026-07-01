export default function FadeIn({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`animate-fade-in ${className}`}>
            {children}
        </div>
    );
}