"use client";

import { HouseIcon, PuzzlePieceIcon, MailboxIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            href: "/",
            Icon: HouseIcon,
            // Fixed width: w-20 (80px)
            wrapperClass: "w-20 pl-0.5 pt-0.5 pb-1.5 rounded-l-xl",
            innerClass: "rounded-l-[10px]",
        },
        {
            name: "Projects",
            href: "/projects",
            Icon: PuzzlePieceIcon,
            // Fixed width: w-24 (96px)
            wrapperClass: "w-24 pt-0.5 pb-1.5",
            innerClass: "",
        },
        {
            name: "Contact me",
            href: "/contact",
            Icon: MailboxIcon,
            // Fixed width: w-32 (128px)
            wrapperClass: "w-32 pr-0.5 pt-0.5 pb-1.5 rounded-r-xl",
            innerClass: "rounded-r-[10px]",
        },
    ];

    return (
        <div className="inline-flex items-center justify-center w-full">
            {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        // 1. Group for hover states
                        // 2. Base styles: bg-btn-secondary-base
                        // 3. Hover styles: bg-btn-hover-base, outline, outline-color
                        className={`
              group relative flex flex-col items-start justify-start overflow-hidden
              bg-btn-secondary-base w-40 hover:z-10
              hover:bg-btn-secondary-hover-base 
              hover:outline hover:outline-btn-secondary-hover
              transition-colors duration-100
              ${item.wrapperClass}
            `}
                    >
                        <div
                            className={`
                flex h-full items-center justify-center gap-1 self-stretch bg-white p-4 transition-colors 
                ${item.innerClass}
              `}
                        >
                            <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden">
                                {/* Regular Icon (Black/Default) */}
                                <item.Icon
                                    size={24}
                                    weight="regular"
                                    className="absolute text-black transition-opacity duration-200 group-hover:opacity-0"
                                />

                                {/* Hover Icon (Orange/Accent) */}
                                <item.Icon
                                    size={24}
                                    weight="fill"
                                    className="absolute text-btn-secondary-hover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                />
                            </span>

                            <span className="font-sans text-base font-medium leading-4 text-black transition-colors group-hover:text-btn-secondary-hover">
                                {item.name}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}