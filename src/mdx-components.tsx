import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import Hatching from "@/components/ui/Hatching";
import {
  SectionLabel,
  BodyText,
  Heading,
  SubHeading,
  SubHeadingSection,
  Title,
  Divider,
  Section,
  SubSection,
  ContentSection,
  ImageSection,
  ComparisonSection,
  Hero,
  SkipBanner,
  Callout,
  CaseStats,
  KeyPoints,
  InfoCard
} from "@/components/caseStudy/LayoutPrimitives";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map standard markdown tags to layout primitives
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <Heading label={children as string} />,
    h3: ({ children }) => <SubHeading label={children as string}/>,
    p: ({ children }) => <BodyText>{children}</BodyText>,
    hr: () => <Divider />,

    // Map custom layout/component blocks for MDX direct usage
    SectionLabel,
    BodyText,
    Heading,
    SubHeading,
    SubHeadingSection,
    Title,
    Divider,
    Section,
    SubSection,
    ContentSection,
    ImageSection,
    ComparisonSection,
    Hero,
    SkipBanner,
    Callout,
    CaseStats,
    KeyPoints,
    Hatching,
    Image,
    Link,
    InfoCard,
    // Allow merging with passed components
    ...components,
  };
}
