"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

// SectionLabel displays a small monospace uppercase category/tag label for a section.
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-label-md-mono text-text-muted w-full py-2 px-4">
      {children}
    </div>
  );
}

// BodyText renders a standard body paragraph with a muted gray text color, supporting inline span highlights.
export function BodyText({ children, pad = false }: { children: ReactNode; pad?: boolean }) {
  const padClass = pad ? "px-4" : "";
  return (
    <div className={`font-body-sm text-text-muted w-full mx-auto [&_span]:text-text-primary [&_span]:font-semibold ${padClass}`}>
      {children}
    </div>
  );
}

export function Body({ children }: { children: ReactNode; }) {
  return (
    <div className={`font-body-sm text-text-muted w-full md:w-content mx-auto [&_span]:text-text-primary [&_span]:font-semibold px-4`}>
      {children}
    </div>
  );
}

// Heading renders a semantic h2 section heading styled for case studies.
export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className=" font-h3 md:font-h2 text-text-primary w-full ">
      {children}
    </h2>
  );
}

// SubHeading renders a semantic h3 sub-heading styled for secondary groups.
export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-h4 md:font-h3 text-text-primary w-full ">
      {children}
    </h3>
  );
}

// SubHeadingSection wraps a subheading and body text together in a centered layout.
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
    <h1 className="font-h3 md:font-h1 px-6 text-text-primary w-full my-2 md:my-6">
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
export function Section({ id, gap, children }: { id?: string; gap?: string; children: ReactNode }) {
  return (
    <section id={id} className={`flex flex-col ${gap || ""}`}>
      {children}
    </section>
  );
}

// ponytail: min 5 max 7 media, min 1 max 3 results — enforced via tuple type
type HighlightMedia = { src: string; caption: string; type?: "image" | "video" };
type HighlightResult = { label: string; value: string };

// CaseHighlights displays a prominent card listing case study metrics, results, and design screens.
export function CaseHighlights({
  title,
  images,
  results,
}: {
  title: string;
  images: [HighlightMedia, HighlightMedia, HighlightMedia, HighlightMedia, HighlightMedia, HighlightMedia?, HighlightMedia?];
  results: [HighlightResult, HighlightResult?, HighlightResult?];
}) {
  return (
    <section className="w-full md:rounded-2xl bg-bg-default border border-outline md:p-4 flex flex-col gap-2 overflow-hidden">
      {/* Title */}
      <div className=" flex flex-col gap-4 px-8 py-4">
        <p className="font-label-md-mono text-primary ">Highlights</p>
        <p className="font-h2 text-text-primary">{title}</p>
      </div>

      {/* Image slots */}
      {images.map((img, i) => {
        if (!img) return null;
        return (
          <div key={i} className="flex flex-col items-end gap-1 pb-4">
            <div className="w-full md:rounded-2xl overflow-hidden aspect-video relative bg-success">
              {img.type === "video" ? (
                <video src={img.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <Image src={img.src} alt={img.caption} fill className="object-cover" />
              )}
            </div>
            <div className="flex items-center gap-0.5">
              <span className="font-label-sm-mono text-text-muted font-semibold">
                {String(i + 1).padStart(2, "0")}:
              </span>
              <span className="font-label-sm-mono md:px-8 text-text-muted">{img.caption}</span>
            </div>
          </div>
        );
      })}

      {/* Results */}
      <div className="border-t border-b border-white py-4 md:px-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <p className="font-h3 text-text-primary md:px-4">Result</p>
        <div className="rounded-2xl flex flex-col gap-3 overflow-hidden">
          {results.map((result, i) => {
            if (!result) return null;
            return (
              <div key={i} className="bg-success-bg px-4 py-3 flex flex-col">
                <span className="font-body-lg text-success-fg">{result.label}</span>
                <span className="font-h2 text-success-fg">{result.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



// Grid renders a responsive layout grid with configurable column counts.
export function Grid({ cols = 2, children }: { cols?: number; children: ReactNode }) {
  const colsClass = cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-6 w-full max-w-5xl`}>
      {children}
    </div>
  );
}

// ProjectMeta displays project details such as role, team, and duration.
export function ProjectMeta({
  role,
  team,
  duration,
}: {
  role: string;
  team: string;
  duration: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-t border-border-default gap-8 md:gap-24 px-8 md:px-12 w-full">
      <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
        <p className="font-label-lg-mono text-text-muted">Role</p>
        <p className="font-label-lg text-text-primary">{role}</p>
      </div>
      <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
        <p className="font-label-lg-mono text-text-muted">Team</p>
        <p className="font-label-lg text-text-primary">{team}</p>
      </div>
      <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
        <p className="font-label-lg-mono text-text-muted">Duration</p>
        <p className="font-label-lg text-text-primary">{duration}</p>
      </div>
    </div>
  );
}



// New Clean Semantic Image Components
// DisplayImage renders a layout-constrained, responsive Next.js image component.
// DisplayImage renders a layout-constrained, responsive Next.js image component.
export function DisplayImage({
  src,
  alt = "Case Study Image",
  fit = "contain",
  card = false,
}: {
  src: string;
  alt?: string;
  fit?: "cover" | "contain";
  card?: boolean;
}) {
  const fitClass = fit === "cover" ? "object-cover" : "object-contain";
  const cardClass = card ? "md:rounded-2xl" : "";
  return (
    <div className="w-full md:w-content mx-auto flex flex-col gap-2">
      <div className={`relative w-full aspect-video ${cardClass} overflow-hidden bg-bg-subtle`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={fitClass}
        />
      </div>
      {alt && (
        <div className="flex items-end justify-end w-full gap-1 px-2 font-label-md-mono text-text-muted">
          <span className="[counter-increment:image-counter] before:content-[counter(image-counter,decimal-leading-zero)_':'] " />
          <span>{alt}</span>
        </div>
      )}
    </div>
  );
}


// Hero renders the main introductory hero section of a case study with overview data.
export function Hero({
  title,
  image1,
  image2,
  role,
  team,
  duration,
  overview,
}: {
  title: string;
  image1: string;
  image2: string;
  role: string;
  team: string;
  duration: string;
  overview: string;
}) {
  return (
    <section id="hero" className=" mt-4 flex flex-col justify-start items-center gap-6 w-full [counter-reset:image-counter]">
      <div className="w-full md:w-content px-6 md:px-32 flex flex-col justify-start items-center">
        <Heading>
          {title}
        </Heading>
      </div>

      <div className="w-full md:w-content aspect-video  relative md:rounded-2xl flex flex-col justify-start items-center gap-2 overflow-hidden">
        <div className="">
          <Image
            src={image1}
            alt="Hero Background Image"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className=" w-full md:w-content px-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full flex flex-col justify-start col-span-1 items-start gap-2">
          <div className="w-full flex flex-col justify-center items-start">
            <span className="font-body-sm text-text-muted">Role</span>
            <span className="font-label-sm-mono text-text-primary">{role}</span>
          </div>
          <div className="w-full flex flex-col justify-center items-start">
            <span className="font-body-sm text-text-muted">Team</span>
            <span className="font-label-sm-mono text-text-primary">{team}</span>
          </div>
          <div className="w-full flex flex-col justify-center items-start">
            <span className="font-body-sm text-text-muted">Duration</span>
            <span className="font-label-sm-mono text-text-primary">{duration}</span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start col-span-1 items-start gap-4">
          <h3 className="font-h3 text-text-primary">Overview</h3>
          <BodyText>
            {overview}
          </BodyText>
        </div>
      </div>
    </section>
  );
}

// ContextSection displays a section with a label, heading, and paragraphs in either row (grid) or column layout.
export function ContextSection({
  label,
  heading,
  paragraphs = [],
  layout = "row",
}: {
  label?: string;
  heading: string;
  paragraphs?: string[];
  layout?: "row" | "col";
}) {
  const containerClass =
    layout === "row"
      ? "grid grid-cols-1 md:grid-cols-3 gap-4"
      : "flex flex-col gap-4";

  return (
    <div className="w-full md:w-content mx-auto flex flex-col justify-start items-start">
      {/* Optional Top Label */}
      {label && (
        <SectionLabel>
          {label}
        </SectionLabel>
      )}

      {/* Main Container */}
      <div className={`self-stretch px-4 w-full ${containerClass}`}>
        {/* Heading Container */}
        <div className={layout === "row" ? "col-span-1 inline-flex justify-start items-start" : "w-full"}>
          <SubHeading>
            {heading}
          </SubHeading>
        </div>

        {/* Paragraphs Container */}
        <div className={layout === "row" ? "col-span-2 flex flex-col justify-center items-start gap-2" : "w-full flex flex-col justify-start items-start gap-4"}>
          {paragraphs.map((text, index) => (
            <BodyText key={index}>
              {text}
            </BodyText>
          ))}
        </div>
      </div>
    </div>
  );
}

// DecisionHeading renders a header for design decision sections with a label and paragraphs.
export function DecisionHeading({
  decisionNumber,
  heading,
  paragraphs = [],
}: {
  decisionNumber?: number | string;
  heading: string;
  paragraphs?: string[];
}) {
  return (
    <div className="flex flex-col gap-4 w-full md:w-content mx-auto px-4">
      {decisionNumber && <SectionLabel>Decision {decisionNumber}</SectionLabel>}
      <Heading>{heading}</Heading>
      {paragraphs.map((para, index) => (
        <BodyText key={index}>{para}</BodyText>
      ))}
    </div>
  );
}

type CardProps = {
  type?: "normal" | "info" | "success" | "fail";
  children: ReactNode;
};

// Card displays a status container supporting variants (normal, info, success, fail) with corresponding icons.
export function Card({ type = "normal", children }: CardProps) {
  const styles = {
    normal: "bg-bg-default border border-outline text-text-primary",
    info: "bg-info-bg text-info-fg",
    success: "bg-success-bg text-success-fg",
    fail: "bg-fail-bg text-fail-fg",
  };

  const iconNames: Record<string, string | null> = {
    normal: null,
    info: "info",
    success: "check_circle",
    fail: "cancel",
  };

  const iconName = iconNames[type];

  return (
    <div className={`flex flex-row items-center gap-2 px-4 py-2 rounded-lg w-full ${styles[type]}`}>
      {iconName && <Icon name={iconName} size={24} className="shrink-0" />}
      <div className="font-body-sm">{children}</div>
    </div>
  );
}

type ComparisonColumn = {
  image: string;
  imageAlt?: string;
  label?: string;
  subheading?: string;
  body?: string | string[];
  cards?: {
    type: "normal" | "info" | "success" | "fail";
    text: string;
  }[];
};

type OptionComparisonProps = {
  columns: ComparisonColumn[];
  layout?: "cover" | "centered";
};

// OptionComparison displays side-by-side comparison blocks with configurable images, layout variants, and either status cards or text descriptions.
export function OptionComparison({ columns, layout = "centered" }: OptionComparisonProps) {
  const images = columns.filter(col => col.image);
  const hasOnlyOneImage = images.length === 1;

  if (hasOnlyOneImage && columns.length > 1) {
    const imageCol = images[0];
    const rightColumns = columns.filter(col => col !== imageCol);
    const rightColsClass = rightColumns.length >= 2 ? "md:grid-cols-2" : "grid-cols-1";

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-content mx-auto px-4 items-start">
        {/* Left Side: Single Image */}
        <div className="flex flex-col w-full gap-4">
          {layout === "cover" ? (
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-bg-subtle">
              <Image
                src={imageCol.image!}
                alt={imageCol.imageAlt || "Comparison Image"}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-3/2 rounded-2xl overflow-hidden bg-bg-subtle flex flex-col justify-center items-center p-2">
              {imageCol.label && (
                <div className="font-label-sm-mono w-full text-text-muted text-start p-2">
                  {imageCol.label}
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={imageCol.image!}
                  alt={imageCol.imageAlt || imageCol.label || "Comparison Image"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Cards / Texts */}
        <div className={`grid grid-cols-1 ${rightColsClass} gap-4 w-full`}>
          {rightColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 w-full">
              {col.subheading && <SubHeading>{col.subheading}</SubHeading>}
              {col.cards && col.cards.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {col.label && <div className="font-label-sm-mono text-text-muted">{col.label}</div>}
                  {col.cards.map((card, cardIdx) => (
                    <Card key={cardIdx} type={card.type}>
                      {card.text}
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-start items-start">
                  {col.label && <div className="font-label-sm-mono text-text-muted">{col.label}</div>}
                  {col.body && (
                    Array.isArray(col.body) ? (
                      col.body.map((text, idx) => (
                        <BodyText key={idx}>{text}</BodyText>
                      ))
                    ) : (
                      <BodyText>{col.body}</BodyText>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Standard multi-image grid layout
  const colsClass = columns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-6 w-full md:w-content mx-auto px-4`}>
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="flex flex-col w-full gap-4">
          {/* Image & Label container */}
          {col.image && (
            layout === "cover" ? (
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-bg-subtle">
                <Image
                  src={col.image}
                  alt={col.imageAlt || "Comparison Image"}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-bg-subtle flex flex-col justify-center items-center px-4 py-2">
                {col.label && (
                  <div className="font-label-sm-mono w-full text-text-muted text-start py-2">
                    {col.label}
                  </div>
                )}
                <div className="relative w-full h-full">
                  <Image
                    src={col.image}
                    alt={col.imageAlt || col.label || "Comparison Image"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )
          )}

          {/* Cards OR Text Content */}
          {col.cards && col.cards.length > 0 ? (
            <div className="flex flex-col gap-2">
              {col.cards.map((card, cardIdx) => (
                <Card key={cardIdx} type={card.type}>
                  {card.text}
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2 justify-start items-start">
              {col.subheading && <SubHeading>{col.subheading}</SubHeading>}
              {col.body && (
                Array.isArray(col.body) ? (
                  col.body.map((text, idx) => (
                    <BodyText key={idx}>
                      {text}
                    </BodyText>
                  ))
                ) : (
                  <BodyText>
                    {col.body}
                  </BodyText>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

