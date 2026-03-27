import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Copy, Check } from "@phosphor-icons/react";
import { useEmailShortcut } from "../hooks/useEmailShortcut";

export default function Footer() {
    const variants: Variants = {
        rest: {
            y: 0,
            rotate: '0deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            rotate: '8deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        hover1: {
            y: -5,
            rotate: '-8deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        hover2: {
            y: -5,
            rotate: '12deg',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };
    const { isPressed, copied, copy } = useEmailShortcut();
    const springTransition = { type: "spring", stiffness: 500, damping: 30 } as const;

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return (
        <footer className="w-full flex flex-col items-center">
            {/* Nav style footer block */}
            <div className="w-full max-w-[1024px] h-fit bg-bg-subtle border border-border-default flex md:flex-row flex-col justify-between items-center">
                
                {/* Social Links */}
                <div className="flex w-full md:w-fit justify-start items-stretch border-border-default">
                    {[
                        { 
                            name: "X", 
                            href: "https://x.com/ishadpande", 
                            color: "#000000",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M46.2 9H53.8L37.2 28.1L56.8 54H41.4L29.4 38.3L15.6 54H8L25.8 33.6L7 9H22.8L33.7 23.4L46.2 9ZM43.5 49.4H47.7L20.5 13.3H15.9L43.5 49.4Z" />
                                </svg>
                            )
                        },
                        { 
                            name: "LinkedIn", 
                            href: "https://www.linkedin.com/in/ishadpande", 
                            color: "#0A66C2",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M54.6487 54.5729H45.1964V39.7702C45.1964 36.2404 45.1334 31.6964 40.2803 31.6964C35.3572 31.6964 34.6039 35.5423 34.6039 39.5132V54.5719H25.1516V24.1316H34.2258V28.2916H34.3529C35.261 26.7389 36.5732 25.4616 38.1499 24.5956C39.7265 23.7297 41.5085 23.3077 43.306 23.3744C52.8863 23.3744 54.6527 29.6759 54.6527 37.8738L54.6487 54.5729ZM14.4863 19.9706C13.4014 19.9708 12.3408 19.6493 11.4386 19.0467C10.5365 18.4441 9.83329 17.5876 9.41794 16.5853C9.00259 15.5831 8.89374 14.4802 9.1052 13.4161C9.31666 12.3521 9.83893 11.3746 10.6059 10.6073C11.3729 9.84004 12.3502 9.31744 13.4142 9.10559C14.4782 8.89375 15.5811 9.00218 16.5835 9.41717C17.5859 9.83216 18.4427 10.5351 19.0456 11.437C19.6485 12.339 19.9704 13.3994 19.9706 14.4843C19.9707 15.2047 19.8289 15.918 19.5534 16.5835C19.2779 17.2491 18.874 17.8538 18.3647 18.3633C17.8554 18.8727 17.2508 19.2769 16.5853 19.5527C15.9199 19.8284 15.2066 19.9705 14.4863 19.9706ZM19.2124 54.5729H9.75027V24.1316H19.2124V54.5729Z" />
                                </svg>
                            )
                        },
                        { 
                            name: "Behance", 
                            href: "https://www.behance.net/ishadpande", 
                            color: "#0057FF",
                            icon: (
                                <svg width="24" height="24" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M21.3535 14.0685C22.7929 14.0685 24.2322 14.2054 25.6031 14.4794C26.7683 14.7533 27.865 15.2327 28.8931 15.9175C29.7842 16.6024 30.5381 17.4926 31.0179 18.5199C31.5663 19.8211 31.8404 21.1907 31.7719 22.5604C31.8404 24.067 31.4292 25.5736 30.6752 26.8748C29.8527 28.1075 28.6875 29.0663 27.3852 29.6826C29.2358 30.162 30.8123 31.3262 31.8404 32.8329C32.8686 34.4764 33.3484 36.394 33.3484 38.3115C33.3484 39.8866 33.0742 41.3932 32.3888 42.7629C31.7719 43.9956 30.8808 45.0229 29.8527 45.9131C28.756 46.7349 27.4537 47.3513 26.1514 47.6937C24.7806 48.1046 23.3412 48.2416 21.9018 48.2416H6V14H21.3535V14.0685ZM20.3939 27.9021C21.4905 27.9706 22.6558 27.6281 23.5468 26.9433C24.4379 26.19 24.9177 25.0258 24.7806 23.7931C24.7806 23.1083 24.6435 22.4234 24.3693 21.8071C24.0952 21.3277 23.7524 20.9168 23.2726 20.6429C22.7929 20.3689 22.2445 20.095 21.6962 20.0265C21.0793 19.8895 20.4624 19.8895 19.8455 19.8895H13.1284V27.9021H20.3939ZM20.8051 42.5575C21.4905 42.5575 22.176 42.489 22.7929 42.352C23.4097 42.215 23.9581 41.9411 24.5064 41.5987C24.9862 41.2563 25.3975 40.7769 25.6716 40.229C26.0143 39.5442 26.1514 38.7909 26.0829 38.0376C26.22 36.5994 25.6716 35.2298 24.6435 34.271C23.5468 33.4492 22.2445 33.1068 20.8737 33.1753H13.1284V42.6259H20.8051V42.5575Z" />
                                    <path d="M43.4926 42.4205C44.6578 43.4477 46.1658 43.9956 47.6737 43.9271C48.9075 43.9271 50.0727 43.5847 51.0323 42.8999C51.8548 42.352 52.4031 41.5987 52.7458 40.7084H58.4348C57.8179 43.2423 56.31 45.5022 54.2537 47.0773C52.266 48.447 49.867 49.0634 47.3995 48.9949C45.686 48.9949 43.9724 48.7209 42.3274 48.0361C40.888 47.4198 39.5857 46.5295 38.5576 45.3653C37.5294 44.1326 36.7069 42.7629 36.1586 41.2563C35.5417 39.5442 35.2675 37.7636 35.3361 35.9831C35.3361 34.2025 35.6103 32.4904 36.2271 30.7784C37.8721 25.9845 42.3959 22.7658 47.4681 22.8343C49.3187 22.7658 51.1008 23.2452 52.7458 24.067C54.1852 24.8888 55.4875 25.9845 56.4471 27.3542C57.4067 28.7924 58.1607 30.3675 58.5034 32.0795C58.9146 33.8601 59.0517 35.7776 58.9832 37.6267H41.9847C41.7791 39.3387 42.3274 41.0508 43.4926 42.4205ZM50.8952 29.3402C49.9356 28.3815 48.6333 27.9021 47.2624 27.9706C46.3714 27.9706 45.4803 28.1075 44.7264 28.5184C44.1095 28.8608 43.5612 29.3402 43.0814 29.8881C42.6701 30.4359 42.3959 30.9838 42.1903 31.6686C42.0532 32.2165 41.9161 32.7644 41.9161 33.3122H52.4717C52.3346 31.8741 51.7862 30.5044 50.8952 29.3402Z" />
                                    <path d="M53.7054 16.3284H40.5453V19.6841H53.7054V16.3284Z" />
                                </svg>
                            )
                        },
                    ].map((platform, idx) => (
                        <motion.a
                            key={platform.name}
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-1 md:flex-none md:w-16 h-16 aspect-square items-center justify-center border-r border-border-default no-underline group transition-colors duration-200`}
                            style={{ 
                                backgroundColor: isMobile ? platform.color : "transparent"
                            }}
                            whileHover={{ 
                                backgroundColor: platform.color,
                            }}
                        >
                            <div
                                className={`transition-colors duration-200 ${isMobile ? "text-bg-default" : "group-hover:text-bg-default"}`}
                            >
                                {platform.icon}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Email CTA - DESKTOP ONLY */}
                {/* Added 'hidden md:flex' to ensure this disappears on mobile */}
                <div className="hidden md:flex items-stretch">
                    <div className="self-stretch px-6 py-2 flex items-center gap-1 overflow-hidden">
                        <span className="font-label-lg text-text-disabled">Let&apos;s Talk</span>
                        <span className="font-label-lg text-text-disabled">→</span>

                        <div className="border-b-2 border-dotted border-text-secondary flex items-center">
                            <a href="mailto:ispande16@gmail.com" className="font-label-lg text-text-secondary no-underline">
                                ispande16@gmail.com
                            </a>
                        </div>

                        <motion.button
                            onClick={copy}
                            className="bg-text-primary rounded-xs outline-1 outline-border-strong inline-flex flex-col justify-start items-start ml-1 cursor-pointer"
                            variants={{
                                rest: { paddingBottom: "3px", marginTop: "0px" },
                                pressed: { paddingBottom: "0px", marginTop: "3px" }
                            }}
                            initial="rest"
                            animate={isPressed ? "pressed" : "rest"}
                            whileTap="pressed"
                            transition={springTransition}
                            title={copied ? "Copied!" : "Copy Email (C)"}
                        >
                            <div className={`w-6 h-[22px] rounded-xs flex justify-center items-center ${copied ? "bg-green-100" : "bg-bg-subtle"}`}>
                                <span className={`font-label-sm uppercase leading-none flex items-center justify-center ${copied ? "text-green-800" : "text-text-primary"}`}>
                                    {copied ? <Check size={12} weight="bold" /> : "c"}
                                </span>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Email Row - MOBILE ONLY */}
                <div className="md:hidden border-t border-border-default flex items-center justify-between h-16 p-4 w-full">
                    <div className="border-b-2 border-dotted border-text-secondary flex items-center">
                        <a href="mailto:ispande16@gmail.com" className="font-label-lg text-text-secondary no-underline">
                            ispande16@gmail.com
                        </a>
                    </div>

                    <motion.button
                        variants={{
                            rest: { paddingBottom: "3px", marginTop: "0px" },
                            pressed: { paddingBottom: "0px", marginTop: "3px" }
                        }}
                        initial="rest"
                        animate={isPressed ? "pressed" : "rest"}
                        whileTap="pressed"
                        onClick={copy}
                        transition={springTransition}
                        className="bg-border-strong rounded-md flex overflow-hidden cursor-pointer"
                        title={copied ? "Copied!" : "Copy Email"}
                    >
                        <div className={`h-[24px] px-2 rounded-xs flex justify-center items-center ${copied ? "bg-green-300" : "bg-bg-subtle"}`}>
                            <span className={`font-label-sm uppercase leading-none flex items-center justify-center ${copied ? "text-green-800" : "text-text-primary"}`}>
                                {copied ? <Check size={12} weight="bold" /> : "Copy"}
                            </span>
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Thanks for visiting block */}
            <div className="w-full max-w-[1024px] h-96 relative border-l border-r border-border-default overflow-hidden rounded-bl-lg rounded-br-lg bg-bg-subtle">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-text-disabled text-3xl md:text-6xl font-bold font-caveat">Thanks for visiting. </span>
                    <span className="text-[#eab308] text-3xl md:text-6xl font-bold font-caveat">Have a great day!</span>
                </div>
            </div>
        </footer>
    );
}


