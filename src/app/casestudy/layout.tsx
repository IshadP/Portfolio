// ponytail: promoted from printhub/layout.tsx — shared shell for all case studies
import type { ReactNode } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FadeIn from "@/components/ui/FadeIn";
import Hatching from "@/components/ui/Hatching";
import { CaseStudyIndex } from "@/components/caseStudy/CaseStudyIndex";

export default function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full md:max-w-5xl flex flex-col gap-4">
        {children}
        <Footer />
      </div>
      <CaseStudyIndex />
    </>
  );
}
