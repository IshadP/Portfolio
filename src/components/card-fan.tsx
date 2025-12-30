"use client";

import { useMediaQuery } from "../hooks/use-media-query";
import DesktopCardFan from "./desktop-card-fan";
import MobileCardStack, { CardItem } from "./mobile-card-stack";
import { useState, useEffect } from "react";

interface CardFanProps {
    items: CardItem[];
    className?: string;
}

export default function CardFan({ items, className = "" }: CardFanProps) {
    // Use the hook to check if screen width is less than md (768px)
    // We default to false (desktop) for server-side rendering to prevent layout shift
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isMounted, setIsMounted] = useState(false);

    // Prevent hydration mismatch by only rendering responsive logic on client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // Render a placeholder or the desktop version initially to avoid flicker
        return <div className={`opacity-0 ${className}`}><DesktopCardFan items={items} /></div>;
    }

    return (
        <div className={className}>
            {isMobile ? (
                <MobileCardStack items={items} />
            ) : (
                <DesktopCardFan items={items} />
            )}
        </div>
    );
}