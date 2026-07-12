"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

interface ShowcaseItem {
  type: "image" | "video";
  src: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  bgImage: string;
  showcaseMedia: ShowcaseItem[];
  /** mobile = 3 phone mockups, web = 1 screen mockup */
  projectType: "mobile" | "web";
  className?: string;
}

function PhoneMockup({
  item,
  isHovering,
  index,
}: {
  item: ShowcaseItem;
  isHovering: boolean;
  index: number;
}) {
  return (
    <m.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: isHovering ? -12 : 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: isHovering ? index * 0.08 : 0,
      }}
      className="relative md:h-[80%] h-full aspect-202/431"
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={item.src}
          alt="Mobile screen preview"
          fill
          sizes="(max-width: 640px) 33vw, 250px"
          className="object-cover"
        />
      )}
    </m.div>
  );
}

export default function ProjectCard({
  title,
  description,
  href,
  bgImage,
  showcaseMedia,
  projectType,
  className = "",
}: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const isExternal = href.startsWith("http");
  const mockupCount = projectType === "mobile" ? 3 : 1;

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`group relative flex flex-col gap-3 py-2 md:p-2 w-full cursor-pointer rounded-2xl transition-colors ${className}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div className="absolute inset-0 z-0 bg-transparent group-hover:bg-bg-subtle transition-colors duration-300 rounded-2xl pointer-events-none" />

      <div className="relative z-10 w-full overflow-hidden md:rounded-2xl aspect-4/3 md:aspect-[16/10] flex items-center justify-center p-8 md:p-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        <div className="relative z-20 w-full h-full flex flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8">
          {showcaseMedia.slice(0, mockupCount).map((item, idx) => (
            <PhoneMockup key={idx} item={item} isHovering={isHovering} index={idx} />
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between px-4 md:px-0 items-center">
        <div className="relative z-10 flex flex-col px md:px-4 gap-2 md:gap-0">
          <h3 className="font-h3 text-text-primary w-full">{title}</h3>
          <p className="font-body-md hidden md:block text-text-muted">{description}</p>
        </div>
        
        <Icon
          name="arrow_right_alt"
          size={32}
          className="text-text-muted group-hover:text-text-primary  group-hover:-rotate-45 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
          fill={false}
          />
        </div>
    </Link>
  );
}
