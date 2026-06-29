import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import Hatching from "@/components/ui/Hatching";
import {
  BodyText,
  Body,
  Divider,
  Heading,
  SectionLabel,
  SubHeading,
  Title,
  Section,
  Grid,
  ProjectMeta,
  DisplayImage,
  Hero,
  CaseHighlights,
} from "@/components/caseStudy/LayoutPrimitives";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map standard markdown tags to layout primitives
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <Heading>{children}</Heading>,
    h3: ({ children }) => <SubHeading>{children}</SubHeading>,
    p: ({ children }) => <BodyText>{children}</BodyText>,
    hr: () => <Divider />,

    // Map custom layout/component blocks for MDX direct usage
    BodyText,
    Body,
    Hatching,
    SectionLabel,
    Section,
    Grid,
    ProjectMeta,
    Divider,
    Image,
    Link,
    DisplayImage,
    Hero,
    CaseHighlights,

    // Allow merging with passed components
    ...components,
  };
}
