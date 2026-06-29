"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title?: string;
  description?: string;
  href?: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
  className?: string;
  bgImage?: string;
  showcaseMedia?: Array<{ type: "image" | "video"; src: string }>;
}

const PhoneMockup: React.FC<{
  src: string;
  type: "image" | "video";
  index: number;
  isParentHovered: boolean;
}> = ({ src, type, index, isParentHovered }) => {
  // Stagger positions slightly on hover for depth effect
  const yOffset = index === 1 ? 0 : 0;
  const hoverY = index === 1 ? -12 : -12;

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{
        y: isParentHovered ? hoverY : yOffset,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.05,
      }}
      className="relative h-[98%] aspect-202/431"
      style={{ willChange: "transform" }}
    >

      {/* Screen Inner Content */}
      <div className="relative w-full h-full overflow-hidden ">
        {type === "video" ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt="Mobile screen preview"
            fill
            sizes="(max-width: 640px) 33vw, 250px"
            className="object-cover w-full h-full"
            priority
          />
        )}
      </div>
    </motion.div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Reduced Task Completion Time by 30% on Printhub",
  description = "Redesigned the main checkout flow to optimise user intent.",
  href = "#",
  mediaType = "image",
  mediaSrc = "/cards/ph1.webp",
  className = "",
  bgImage,
  showcaseMedia,
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovering, setIsHovering] = useState(false);


  const hasShowcase = bgImage && showcaseMedia && showcaseMedia.length >= 3;

  return (
    <Link
      href={href}
      ref={cardRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}

      className={`group relative block w-full cursor-pointer transition-colors rounded-2xl ${className}`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {/* Custom Floating Cursor Label */}
      <div className="absolute inset-0 z-0 bg-transparent group-hover:bg-bg-subtle transition-colors duration-300 rounded-3xl pointer-events-none scale-[1.02]" />

      <div className="relative z-10 flex flex-col p-4 justify-between gap-12 md:flex-row md:items-start">
        <h2 className="max-w-xl font-h3 text-text-primary">
          {title}
        </h2>
        <p className="max-w-xs font-label-md-mono text-text-muted md:text-right">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-4">
        {/* Top Section - Title & Description */}

        {/* Media Section */}
        {hasShowcase ? (
          <div className="relative z-10 w-full overflow-hidden rounded-2xl aspect-[16/10] flex items-center justify-center p-4 sm:p-8 md:p-0">
            <Image
              src={bgImage}
              alt={title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-60"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            {/* Soft dark/light overlay to make mockups pop */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

            {/* Phones grid overlay */}
            <div className="relative z-20 w-full h-full flex flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8">
              {showcaseMedia.slice(0, 3).map((item, idx) => (
                <PhoneMockup
                  key={idx}
                  src={item.src}
                  type={item.type}
                  index={idx}
                  isParentHovered={isHovering}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative z-10 w-full overflow-hidden rounded-[24px] bg-gray-100 aspect-[4/3] md:aspect-[16/10]">
            {mediaType === "video" ? (
              <video
                src={mediaSrc}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <Image
                src={mediaSrc}
                alt={title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            )}
          </div>
        )}



      </div>
    </Link>
  );
};

export default ProjectCard;