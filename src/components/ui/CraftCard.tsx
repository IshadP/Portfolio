"use client";

import React from "react";
import Image from "next/image";
import { TECH_STYLES } from "@/data/craft";

export const Tag = ({ tech }: { tech: string }) => {
  const style = TECH_STYLES[tech] || TECH_STYLES["React"];

  return (
    <div className={`px-2 py-1 rounded-sm flex justify-center items-center gap-2 ${style.bg}`}>
      <span className={`font-label-sm-mono ${style.text}`}>{tech}</span>
    </div>
  );
};

export interface CardProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  image?: string;
  video?: string;
  component?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, tags, image, video, component }) => {
  return (
    <div className="flex-1 pb-4 rounded-lg flex flex-col justify-start items-start gap-3 cursor-[url('/cards/pointinghand.svg')_24_24,pointer] group">
      <div className="relative w-full aspect-square bg-bg-subtle rounded-2xl overflow-hidden">
        {component ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {component}
          </div>
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out"
          />
        ) : image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[0.92]"
          />
        ) : null}
      </div>

      <div className="w-full pl-2 pr-16 flex flex-col justify-center items-start gap-1.5">
        <h3 className="w-full text-text-primary font-h4">{title}</h3>

        {subtitle && (
          <p className="w-full text-text-muted font-body-sm">{subtitle}</p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap justify-start items-start gap-[5px] mt-1">
            {tags.map((tech) => (
              <Tag key={tech} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};