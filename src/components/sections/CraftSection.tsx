import React from "react";
import { Card } from "../ui/CraftCard";

import { CRAFT_ITEMS } from "@/data/craft";

export const CraftSection = () => {
    return (
        <section id="craft" className="w-full flex justify-center">
        {/* Section Header */}
        <div className="w-full md:w-content flex flex-col gap-4">
            <div className="w-full flex flex-row gap-2 px-4 pb-2 border-b border-outline font-mono-md  text-text-muted">
              <p> &gt; </p>
              <p className="">Craft</p>
            </div>
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
                        link={item.link}
                    />
                ))}
          </div>
        </div>
        </section>
    );
};
