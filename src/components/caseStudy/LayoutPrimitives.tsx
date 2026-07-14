"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { m, useReducedMotion } from "framer-motion";

// SectionLabel displays a small monospace uppercase category/tag label for a section.
export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex flex-row gap-2 w-full px-4 pb-2 border-b border-outline font-mono-md  text-text-muted">
      <p> &gt; </p>
      <p className="">{label}</p>
    </div>
  );
}

// BodyText renders a standard body paragraph with a muted gray text color, supporting inline span highlights.
export function BodyText({ children, pad = false }: { children: ReactNode; pad?: boolean }) {
  const padClass = pad ? "pr-4" : "";
  return (
    <div className={`font-body-md text-text-muted w-full mx-auto [&_span]:text-text-primary ${padClass}`}>
      {children}
    </div>
  );
}

// Heading renders a semantic h2 section heading styled for case studies.
export function Heading({ label }: { label: string }) {
  return (
    <h1 className="font-h1 text-text-primary w-full ">
      {label}
    </h1>
  );
}

// SubHeading renders a semantic h3 sub-heading styled for secondary groups.
export function SubHeading({ label }: { label: string }) {
  return (
    <h3 className="font-h3 text-text-primary w-full pr-4">
      {label}
    </h3>
  );
}

// =========================================
// Section with title, heading & Bodytext
// =========================================
export function SubHeadingSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full md:w-content mx-auto flex flex-col gap-2 px-4">
      <h3 className="font-h4 md:font-h3 text-text-primary w-full">{title}</h3>
      <div className="font-body-sm text-text-muted w-full [&_span]:text-text-primary [&_span]:font-semibold">
        {children}
      </div>
    </div>
  );
}

// Title renders the main page header h1 element.
export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-h2 md:font-h1 px-6 text-text-primary w-full my-2 md:my-6">
      {children}
    </h1>
  );
}

// Divider renders a horizontal rule separating content blocks.
export function Divider({ type = "normal" }: { type?: "section" | "normal" }) {
  const borderClass = type === "section" ? "border-text-muted" : "border-outline";
  return <div className={` w-full md:w-content mx-auto border-t ${borderClass} h-1`} />;
}

// Section wraps content in a semantic section tag with spacing.
export function Section({ id, children }: { id?: string; children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.section
      id={id}
      className="case-study-section flex flex-col md:p-20 gap-18"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
    >
      {children}
    </m.section>
  );
}

export function SubSection({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className={`flex flex-col gap-12`}>
      {children}
    </section>
  );
}

// ContentSection renders a structured content section with optional section label, heading, and paragraphs.
interface ContentSectionProps {
  sectionLabel?: string;
  heading?: string;
  content?: ReactNode[];
  children?: ReactNode; // The Slot
}

export function ContentSection({
  sectionLabel,
  heading,
  content = [],
  children,
}: ContentSectionProps) {
  return (
    <section className="flex flex-col w-full">
      {/* Conditionally render SectionLabel based on rule 1 */}
      {sectionLabel && (
        <div className="mb-8">
          <SectionLabel label={sectionLabel} />
        </div>
      )}

      {/* 1x3 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 px-4 w-full">

        {/* Left Column: Takes 1 column if present */}
        {heading && (
          <div className="col-span-1">
            <SubHeading label={heading} />
          </div>
        )}

        {/* Right Column: Always spans 2 columns, forced to start at column 2 on desktop */}
        <div className="col-span-1 md:col-span-2 md:col-start-2 flex flex-col gap-6">

          {/* Paragraphs */}
          {content.length > 0 && (
            <div className="flex flex-col gap-4">
              {content.map((item, index) => (
                <BodyText key={index}>{item}</BodyText>
              ))}
            </div>
          )}

          {/* Slot Content */}
          {children && (
            <div className="flex flex-col gap-4 mt-2">
              {children}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

// =========================================
// Card
// =========================================

type InfoVariant = "pro" | "con" | "info" | "fact";

interface InfoCardProps {
  variant: InfoVariant;
  iconName: string;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<InfoVariant, string> = {
  pro: "bg-green-50 text-green-900",
  con: "bg-red-50 text-red-900",
  info: "bg-blue-50 text-blue-900",
  fact: "bg-neutral-50 text-neutral-900",
};

export function InfoCard({
  variant,
  iconName,
  children,
  className = "",
}: InfoCardProps) {
  return (
    <div
      className={`flex w-full items-start gap-3 rounded-lg p-4 ${variantStyles[variant]} ${className}`}
    >
      {/* Since the icon size is 20px and the text line-height is 20px,
        items-start aligns them perfectly without needing manual top margins.
      */}
      <Icon name={iconName} size={20} />

      <p className="font-sans text-[0.9375rem] leading-5 font-medium">
        {children}
      </p>
    </div>
  );
}

// =========================================
// Image Container
// =========================================

interface ImageSectionProps {
  label: string;
  src: string;
  alt?: string;
  leftCards?: ReactNode; // Slot for Pro / Info cards
  rightCards?: ReactNode; // Slot for Con / Fact cards
}

export function ImageSection({
  label,
  src,
  alt = "Case study visual",
  leftCards,
  rightCards,
}: ImageSectionProps) {
  const hasChildren = Boolean(leftCards || rightCards);
  const isVideo = /\.(mp4|webm|mov|ogg)$/i.test(src);

  return (
    <section className="flex flex-col w-full gap-1">
      {/* Rule 1: Label ABOVE if image has children */}
      {hasChildren && (
        <div className="w-full flex justify-end px-4 md:px-0">
          <p className="font-mono-sm text-text-muted">{label}</p>
        </div>
      )}

      {/* The Image/Video Wrapper */}
      <div className="relative w-full aspect-video bg-gray-100 rounded-none md:rounded-2xl overflow-hidden">
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw" // Best practice: gives hints to the browser for optimization
            loading="lazy" // Set to true manually if this image is above the fold
          />
        )}
      </div>

      {/* Rule 2: Label BELOW if image has NO children */}
      {!hasChildren && (
        <div className="w-full flex justify-end px-4 md:px-0">
          <p className="font-mono-sm text-text-muted">{label}</p>
        </div>
      )}

      {/* Rule 3 & 4: Up to 2 divs, fill right first, left hugs content */}
      {hasChildren && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 w-full mt-2 px-4 md:px-0">

          {/* Left Column */}
          <div className="flex flex-col gap-2 rounded-2xl overflow-hidden items-start w-full">
            {leftCards}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-2 rounded-2xl overflow-hidden w-full">
            {rightCards}
          </div>

        </div>
      )}
    </section>
  );
}

// =========================================
// Comparison Section
// =========================================

interface ColumnProps {
  label: string;
  src: string;
  alt?: string;
  cards?: ReactNode; // Slot specifically for this column's cards
}

interface ComparisonSectionProps {
  left: ColumnProps;
  right: ColumnProps;
}

export function ComparisonSection({ left, right }: ComparisonSectionProps) {
  // Helper function to render a column to ensure pixel-perfect consistency
  const renderColumn = (col: ColumnProps) => (
    <div className="flex flex-col w-full gap-2 rounded-none md:rounded-2xl">

      {/* Top Label (Updated to font-mono-sm) */}
      <div className="w-full flex justify-end px-4 md:px-0">
        <p className="font-mono-sm text-text-muted">{col.label}</p>
      </div>

      {/* Square Image Wrapper */}
      <div className="relative w-full aspect-square bg-gray-50 rounded-none md:rounded-2xl overflow-hidden">
        <Image
          src={col.src}
          alt={col.alt || "Comparison visual"}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>

      {/* Cards Stack */}
      {col.cards && (
        <div className="flex flex-col gap-2 rounded-2xl overflow-hidden  w-full px-4 md:px-0">
          {col.cards}
        </div>
      )}
    </div>
  );

  return (
    <section className="px-0 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full ">
      {renderColumn(left)}
      {renderColumn(right)}
    </section>
  );
}

// =========================================
// Hero
// =========================================

export function Hero({
  title,
  image1,
  role,
  team,
  duration,
  overview,
}: {
  title: string;
  image1: string;
  role: string;
  team: string;
  duration: string;
  overview: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      },
    },
  };

  return (
    <m.section
      id="hero"
      className="pt-8 md:pt-12 pb-12 md:pb-20 flex flex-col justify-start items-center gap-6 md:gap-10 w-full [counter-reset:image-counter]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title Area */}
      <m.div
        className="w-full md:w-content px-6 md:px-12 flex flex-col justify-start items-center"
        variants={childVariants}
      >
        <h1 className="font-h1 text-text-primary text-center w-full">
          {title}
        </h1>
      </m.div>

      {/* Image Container */}
      <m.div
        className="w-full md:w-content aspect-[960/553] relative md:rounded-2xl overflow-hidden bg-bg-subtle flex flex-col justify-start items-center"
        variants={childVariants}
      >
        <Image
          src={image1}
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
      </m.div>

      {/* Details Grid */}
      <m.div
        className="w-full md:w-content px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mt-4"
        variants={childVariants}
      >
        {/* Meta Info (Role, Team, Duration) - 1/3 width */}
        <div className="col-span-1 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-body-sm text-text-muted">Role</span>
            <span className="font-mono-sm text-text-primary">{role}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-body-sm text-text-muted">Team</span>
            <span className="font-mono-sm text-text-primary">{team}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-body-sm text-text-muted">Duration</span>
            <span className="font-mono-sm text-text-primary">{duration}</span>
          </div>
        </div>

        {/* Overview - 2/3 width */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <h2 className="font-h2 text-text-primary">Overview</h2>
          <div className="flex flex-col gap-4 font-body-md text-text-primary leading-[1.55]">
            {overview.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </m.div>
    </m.section>
  );
}

// =========================================
// Skip section
// =========================================

interface SkipBannerProps {
  /** The ID of the section to scroll to (without the #) */
  targetId?: string;
}

export function SkipBanner({ targetId = "decisions" }: SkipBannerProps) {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate offset if you have a sticky header, otherwise just smooth scroll
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex items-center justify-between bg-blue-50 rounded-lg px-6 py-5 md:px-8 md:py-6">

      <p className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tight">
        Short on time?
      </p>

      <button
        onClick={handleScroll}
        className="
          bg-[#2244B8] text-white font-mono-sm md:font-mono-md px-6 py-3 rounded-lg
          border border-[#112363]
          shadow-[0_4px_0_0_#112363]
          active:shadow-[0_0px_0_0_#112363] active:translate-y-[4px]
          transition-all duration-75 ease-in-out
          select-none
        "
        aria-label="Skip to decisions section"
      >
        Skip to Decisions
      </button>

    </div>
  );
}

// =========================================
// Callout
// =========================================


interface CalloutProps {
  label: string;
  iconName: string;
  bgColorClass: string; // e.g., "bg-[#eaf7e3]" or "bg-green-50"
  textColorClass: string; // e.g., "text-[#548a43]" or "text-green-800"
  children: ReactNode;
  className?: string;
}

export function Callout({
  label,
  iconName,
  bgColorClass,
  textColorClass,
  children,
  className = "",
}: CalloutProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>

      {/* Top Tab */}
      {/* self-start prevents the tab from stretching full width */}
      <div
        className={`self-start ml-6 inline-flex items-center gap-2 px-6 pt-2  rounded-t-3xl ${bgColorClass} ${textColorClass}`}
      >
        <Icon name={iconName} size={20} />
        <span className="font-semibold font-sans text-[15px] leading-tight tracking-wide">
          {label}
        </span>
      </div>

      {/* Main Body */}
      {/* rounded-tl-none ensures it perfectly flush-joins with the tab above it */}
      <div
        className={`w-full px-6 py-8 md:px-6 md:py-10 rounded-3xl ${bgColorClass} `}
      >
        <div className={`font-sans text-2xl md:text-[32px] font-semibold leading-snug md:leading-[36px] m-0 ${textColorClass}`}>
          {children}
        </div>
      </div>

    </div>
  );
}

// =========================================
// Miscellaneous Components
// =========================================

interface CaseStatsProps {
  labels: string[];
  values: (string | string[])[];
}

export function CaseStats({ labels, values }: CaseStatsProps) {
  return (
    <div className="self-stretch inline-flex justify-start items-start gap-2 w-full">
      {labels.map((label, idx) => {
        const val = values[idx];
        const isArray = Array.isArray(val);
        const hasTransition = isArray && val.length === 2;
        const displayVal1 = isArray ? val[0] : val;
        const displayVal2 = hasTransition ? val[1] : undefined;

        return (
          <div
            key={idx}
            className="flex-1 py-4 rounded-2xl inline-flex flex-col justify-start items-start"
          >
            <div className="flex flex-col lg:flex-row items-center gap-2 text-red-500 text-2xl font-semibold font-mono leading-7">
              <span>{displayVal1}</span>
              {hasTransition && (
                <>
                  <Icon name="arrow_forward" size={24} className="text-red-500 rotate-90 lg:rotate-0" />
                  <span>{displayVal2}</span>
                </>
              )}
            </div>
            <div className="justify-start text-text-muted text-base font-medium font-sans leading-6 mt-1">
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface KeyPointsProps {
  items: [string, string][];
}

export function KeyPoints({ items }: KeyPointsProps) {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-2 w-full">
      {items.map(([title, description], idx) => (
        <div
          key={idx}
          className="self-stretch p-4 bg-[#f9f9f9] rounded-2xl flex flex-col justify-start items-start gap-1 w-full"
        >
          <div className="self-stretch justify-start text-text-primary text-xl font-semibold font-sans leading-7">
            {title}
          </div>
          <div className="self-stretch justify-start text-text-muted text-base font-medium font-sans leading-6">
            {description}
          </div>
        </div>
      ))}
    </div>
  );
}



//-----------------------------------------------------------
