"use client";

import { motion } from "framer-motion";

export default function BuildingWithAiCard() {
  const steps = [
    {
      title: "1. The Foundation (10%)",
      description: "Every project starts by writing a simple document (a Markdown file) that defines the goals and the technical rules. This gives the AI a clear set of instructions to follow and reduces hallucinations."
    },
    {
      title: "2. The Heavy Lifting (50%)",
      description: "Using Figma MCP allows for quick translation of design to code. This allows the AI to build the main structure and the repetitive parts of the interface quickly."
    },
    {
      title: "3. The Final Polish (40%)",
      description: "This stage involves prompting AI to break parts of the design into components to create a more scalable structure. I also hand-code most interactions here, fine-tuning values until the interaction matches the intended experience."
    }
  ];

  return (
    <div className="bg-bg-default md:p-8 p-6 rounded-[32px] flex flex-col gap-6 w-full">
      <h3 className="text-h3 text-text-primary">
        How I build with AI?
      </h3>
      
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h4 className="text-h4 text-text-primary">
              {step.title}
            </h4>
            <p className="text-body text-text-secondary">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
