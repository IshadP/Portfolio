"use client";


interface TextHighlightProps {
    text: string;
    highlight: string;
    className?: string;
}

export default function TextHighlight({ text, highlight, className = "" }: TextHighlightProps) {
    // Split text but keep the delimiter (the highlight phrase)
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
        <p className={`font-medium ${className}`}>
            {parts.map((part, index) => {
                const isHighlight = part.toLowerCase() === highlight.toLowerCase();

                return (
                    <span
                        key={index}
                        className={
                            isHighlight
                                ? "text-on-surface font-medium" // Bright and Bold
                                : "text-text-500" // Dimmed
                        }
                    >
                        {part}
                    </span>
                );
            })}
        </p>
    );
}
