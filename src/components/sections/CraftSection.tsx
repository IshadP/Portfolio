import React from "react";
import { Card } from "../ui/CraftCard";

import { CRAFT_ITEMS } from "@/data/craft";

export const CraftSection = () => {
    return (
        <section className="w-content flex mt-8 flex-col items-start gap-4">
            {/* Section Header */}
            <p className="px-4 pt-4 w-full pb-2 border-b border-outline font-label-md-mono text-text-muted">Craft</p>

            {/* Cards Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {CRAFT_ITEMS.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        tags={item.tags}
                        image={item.image}
                        component={item.component}
                    />
                ))}
            </div>
        </section>
    );
};
