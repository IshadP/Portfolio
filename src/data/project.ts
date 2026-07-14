import { ProjectCardProps } from "@/components/ui/ProjectCard";

export interface ProjectItem extends ProjectCardProps {
  slug: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "How redesigned UX reduces Task Completion Time by 30%",
    description: "Redesigned the main checkout flow to optimise user intent, reducing task completion time from 1m 24s to 58s",
    projectType: "mobile",
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
    title: "How redesigned search help user find videos faster",
    description: "Rethought the search experience to work hand in hand with how user thinks.",
    projectType: "mobile",
    slug: "Youtube",
    href: "https://www.behance.net/gallery/232680953/Enhancing-YouTube-Search-for-a-Smarter-User-Experience",
    bgImage: "/cards/bg2.webp",
    showcaseMedia: [
      { type: "image", src: "/cards/Youtube1-01.webp" },
      { type: "image", src: "/cards/Youtube1-02.webp" },
      { type: "image", src: "/cards/Youtube1-03.webp" },
    ],
  }
];
