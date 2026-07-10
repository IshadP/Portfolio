import { ProjectCardProps } from "@/components/ui/ProjectCard";

export interface ProjectItem extends ProjectCardProps {
  slug: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "How redesigned UX reduced task completion time",
    description: "Redesigned the main checkout flow to optimise user intent.",
    projectType: "mobile",
    slug: "Printhub",
    href: "https://www.behance.net/gallery/239087477/Revamping-Printhub-for-efficiency-and-trust",
    bgImage: "/cards/bg.webp",
    showcaseMedia: [
      { type: "image", src: "/cards/Print1-01.webp" },
      { type: "image", src: "/cards/Print1-02.webp" },
      { type: "image", src: "/cards/Print1-03.webp" },
    ],
  },
  {
    title: "How redesigned Search help user search faster in Youtube",
    description: "Rethought the search experience to better surface user intent.",
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
