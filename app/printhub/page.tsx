import Link from "next/link";

export default function PrintHubPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(104,139,75,0.08)_0%,transparent_70%)] pointer-events-none" />

            {/* Back link */}
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm font-medium no-underline group"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:-translate-x-0.5 transition-transform"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Home
            </Link>

            {/* Phone Frame */}
            <div className="phone-frame">
                {/* Notch */}
                <div className="phone-notch">
                    <div className="phone-camera" />
                </div>

                {/* Side buttons */}
                <div className="phone-button-silent" />
                <div className="phone-button-volup" />
                <div className="phone-button-voldown" />
                <div className="phone-button-power" />

                {/* Screen */}
                <div className="phone-screen">
                    <iframe
                        src="https://printproto.vercel.app/"
                        title="PrintHub Prototype"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                    />
                </div>
            </div>

            {/* Label */}
            <p className="mt-8 text-muted text-sm font-medium tracking-wide">
                PrintHub — Interactive Prototype
            </p>
        </div>
    );
}
