import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECT_ITEMS } from "@/data/project";
import Divider from "@/components/ui/Divider";

export const ProjectsSection = () => {
  return (
    <>
      <p className="px-4 pt-4 pb-2 border-b border-outline font-label-md-mono text-text-muted">Case Studies</p>
      <div className="flex flex-col gap-4">
        {PROJECT_ITEMS.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>

    </>
  );
};
