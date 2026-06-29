import { ProjectCardProps } from "@/components/ui/ProjectCard";

export interface ProjectItem extends ProjectCardProps {
  slug: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "Reduced Task Completion Time by 30% on Printhub",
    description: "Redesigned the main checkout flow to optimise user intent.",
    slug: "Printhub",
    href: "/casestudy/printhub",
    bgImage: "/cards/bg.webp",
    showcaseMedia: [
      { type: "image", src: "/cards/Print1-01.webp" },
      { type: "image", src: "/cards/Print1-02.webp" },
      { type: "image", src: "/cards/Print1-03.webp" },
    ],
  },
  {
    title: "Redesigned Search for User Intent on Youtube",
    description: "Rethought the search experience to better surface user intent.",
    slug: "Printhub",
    href: "/casestudy/youtube",
    bgImage: "/cards/bg2.webp",
    showcaseMedia: [
      { type: "image", src: "/cards/Youtube1-01.webp" },
      { type: "image", src: "/cards/Youtube1-02.webp" },
      { type: "image", src: "/cards/Youtube1-03.webp" },
    ],
  }
];
