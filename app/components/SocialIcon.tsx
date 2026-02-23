import Link from "next/link";

interface SocialIconProps {
    href: string;
    ariaLabel: string;
    children: React.ReactNode;
}

export default function SocialIcon({
    href,
    ariaLabel,
    children,
}: SocialIconProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="flex items-center justify-center w-[40px] h-[40px] rounded-full text-muted hover:text-nav-text transition-colors duration-200"
        >
            {children}
        </Link>
    );
}
