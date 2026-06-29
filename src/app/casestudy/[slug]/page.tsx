// ponytail: minimum viable dynamic route — fs discovery + dynamic MDX import
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const CASE_STUDIES_DIR = path.join(process.cwd(), "src/data/casestudies");

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fs
    .readdirSync(CASE_STUDIES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => ({ slug: d.name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const mod = await import(`@/data/casestudies/${slug}/page.mdx`);
    return mod.metadata ?? { title: slug };
  } catch {
    return { title: slug };
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  try {
    const { default: Content } = await import(
      `@/data/casestudies/${slug}/page.mdx`
    );
    return <Content />;
  } catch {
    notFound();
  }
}
