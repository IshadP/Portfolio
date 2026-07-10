import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECT_ITEMS } from "@/data/project";

export const ProjectsSection = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="w-full flex flex-col md:w-content">
      <div className="flex flex-row gap-2 w-full  px-4 pb-2 border-b border-outline font-mono-md  text-text-muted">
        <p> &gt; </p>
        <p className="">Case Studies</p>
      </div>
      <div className="flex flex-col gap-6 md:gap-4">
        {PROJECT_ITEMS.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
        </div>
    </div>
    </div>
  );
};
