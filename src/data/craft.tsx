import React from "react";
import DepthStack from "../experiments/DepthStack"

export interface CraftItem {
    title: string;
    subtitle?: string;
    tags: string[];
    image?: string;
    component?: React.ReactNode;
}

export const CRAFT_ITEMS: CraftItem[] = [
    {
        title: "Linear's Website Fig 0.4",
        tags: ["React", "Framer Motion", "GSAP"],
        component: <DepthStack />,
    },
    {
        title: "Design System Tokens",
        tags: ["Tailwind", "React"],
        image: "/cards/pomdom.webp",
    },
];

export const TECH_STYLES: Record<string, { bg: string; text: string }> = {
    "React": { bg: "bg-[#E6E6E6]", text: "text-[#666666]" },
    "Framer Motion": { bg: "bg-[#CCE3FF]", text: "text-[#293DBD]" },
    "Tailwind": { bg: "bg-[#CFFFCC]", text: "text-[#2C9F58]" },
    "GSAP": { bg: "bg-[#FFE4CC]", text: "text-[#A0622C]" },
};
