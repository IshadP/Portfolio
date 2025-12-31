"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { CardItem } from "./mobile-card-stack";

export default function DesktopCardFan({ items }: { items: CardItem[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeNoLinkId, setActiveNoLinkId] = useState<string | number | null>(null);

    // Base overlap spacing
    const spacing = -25;

    return (
        // 'justify-center' ensures the whole fan is centered in the parent
        <div className="flex flex-nowrap justify-center items-center py-18 w-full">
            <div data-layer="Frame 130" className="absolute top-4 px-4 py-2  rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden ">
                <div data-layer="Other work" className=" justify-start text-btn-primary-text text-lg font-semibold tracking-tighter font-serif leading-5">Other work</div>
            </div>

            {items.map((item, index) => {
                // Deterministic rotation pattern: -3, -1, 1, 3...
                const rotation = (index % 2 === 0 ? -1 : 1) * ((index % 3) + 1);
                const isActive = hoveredIndex === index;
                const isAnyActive = hoveredIndex !== null;

                const handleCardClick = () => {
                    if (!item.href) {
                        setActiveNoLinkId(item.id);
                        setTimeout(() => setActiveNoLinkId(null), 2000);
                    }
                };


                const cardContent = (
                    <motion.div
                        key={item.id}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}

                        initial={{
                            rotate: rotation,
                            zIndex: index,
                            filter: "brightness(1) blur(0px)",
                            // Apply negative margin to everything except the first item
                            marginLeft: index === 0 ? 0 : spacing
                        }}

                        animate={{
                            // Straighten up (0 deg) if active
                            rotate: isActive ? 0 : rotation,
                            // Scale up significantly
                            scale: isActive ? 1.3 : 1,
                            // Pop to front
                            zIndex: isActive ? 100 : index,
                            // Lift up slightly
                            y: isActive ? 30 : 0,
                            // Ensure no horizontal offset when active so it centers perfectly
                            x: isActive ? 0 : 0,

                            // Dim others
                            filter: isAnyActive && !isActive
                                ? "brightness(1) grayscale(0) blur(0px)"
                                : "brightness(1) grayscale(0) blur(0px)",
                            marginLeft: index === 0 ? 0 : spacing
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        onClick={handleCardClick}
                        className="relative h-64 w-48 shrink-0 cursor-pointer transform-gpu origin-bottom z-10"
                    >
                        <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-surface">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                placeholder={typeof item.image !== 'string' ? "blur" : "empty"}
                                sizes="300px"
                                priority={index < 4}
                            />

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isActive ? 1 : 0 }}
                                className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-black/90 via-black/30 to-transparent p-4"
                            >
                                <span className="font-bold text-white text-xl text-center drop-shadow-lg">
                                    {item.title}
                                </span>
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {activeNoLinkId === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: -1 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -1 }}
                                    className="absolute top-full mt-1 left-1/2 rounded-full -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-1 whitespace-nowrap z-50 pointer-events-none font-medium text-center"
                                >
                                    Oops no links!
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );

                if (item.href) {
                    return (
                        <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="contents">
                            {cardContent}
                        </a>
                    );
                }

                return cardContent;
            })}
        </div>
    );
}