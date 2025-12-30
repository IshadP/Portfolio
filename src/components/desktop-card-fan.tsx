"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
// Import types from mobile component or shared file
import { CardItem } from "./mobile-card-stack";

export default function DesktopCardFan({ items }: { items: CardItem[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Base overlap spacing
    const spacing = -25;

    return (
        // 'justify-center' ensures the whole fan is centered in the parent
        <div className="flex flex-nowrap justify-center items-center py-16 w-full h-[400px]">
            {items.map((item, index) => {
                // Deterministic rotation pattern: -3, -1, 1, 3...
                const rotation = (index % 2 === 0 ? -1 : 1) * ((index % 3) + 1);
                const isActive = hoveredIndex === index;
                const isAnyActive = hoveredIndex !== null;

                return (
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
                                ? "brightness(0.5) grayscale(0.5) blur(2px)"
                                : "brightness(1) grayscale(0) blur(0px)",
                            marginLeft: index === 0 ? 0 : spacing
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="relative h-64 w-48 shrink-0 cursor-pointer rounded-2xl shadow-2xl overflow-hidden bg-white transform-gpu origin-bottom"
                    >
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
                            className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4"
                        >
                            <span className="font-bold text-white text-xl text-center drop-shadow-lg">
                                {item.title}
                            </span>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}