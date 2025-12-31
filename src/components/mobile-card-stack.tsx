"use client";

import { motion, useMotionValue, useTransform, PanInfo, animate } from "motion/react";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export interface CardItem {
    id: string | number;
    title: string;
    image: StaticImageData | string;
    href?: string;
}

export default function MobileCardStack({ items }: { items: CardItem[] }) {
    const [cards, setCards] = useState(items);

    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacity = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);

    function handleDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
        const swipeThreshold = 50; // Smaller threshold feels more responsive

        if (Math.abs(info.offset.x) > swipeThreshold) {
            // 1. Determine direction (left or right)
            const direction = info.offset.x > 0 ? 1 : -1;
            const targetX = direction * 500; // Fly off screen

            // 2. Animate the motion value manually before state update
            animate(x, targetX, { duration: 0.2 }).then(() => {
                // 3. Update state (Move front to back)
                setCards((currentCards) => {
                    const newOrder = [...currentCards];
                    const frontCard = newOrder.shift();
                    if (frontCard) newOrder.push(frontCard);
                    return newOrder;
                });

                // 4. Reset x to 0 instantly for the NEW front card
                // Since state updated, 'x' now applies to the new card at index 0.
                x.set(0);
            });
        } else {
            // If swipe wasn't strong enough, snap back to center
            animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
        }
    }

    return (
        <div className="relative h-80 w-full flex items-center justify-center overflow-hidden pb-4">
            {cards.slice(0, 3).map((item, index) => {
                const isFront = index === 0;

                return (
                    <motion.div
                        key={item.id}
                        layoutId={String(item.id)} // Handles smooth layout transitions for Z-index/Scale
                        drag={isFront ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}

                        style={{
                            // Only the front card listens to the 'x' motion value
                            x: isFront ? x : 0,
                            rotate: isFront ? rotate : 0,
                            opacity: isFront ? opacity : 1,
                            zIndex: cards.length - index,
                        }}

                        animate={{
                            // Cards behind scale down and move down
                            scale: 1 - index * 0.05,
                            y: index * 15,
                            // Fade out cards deeper in the stack
                            opacity: index > 1 ? 0.8 : 1
                        }}

                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute h-64 w-48 rounded-2xl shadow-xl overflow-hidden  bg-white touch-none"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover pointer-events-none"
                            placeholder={typeof item.image !== "string" ? "blur" : "empty"}
                            sizes="(max-width: 768px) 200px"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-black/60 to-transparent p-4">
                            <span className="font-bold text-white text-center drop-shadow-md">
                                {item.title}
                            </span>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}