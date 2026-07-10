import React from "react";
import { Icon } from "../ui/Icon";

interface ExperienceItemProps {
    role: string;
    company: string;
    description?: string;
    duration: string;
    icon?: string;
}

const ExperienceItem = ({ role, company, description, duration, icon = "work" }: ExperienceItemProps) => {
    return (
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-start gap-4 md:gap-12 py-4 border-b border-outline last:border-b-0 group">
            {/* Left Side: Role, Company, Description */}
            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className=" flex flex-col">
                    <span className="font-h4 text-text-primary">{role}</span>
                    <div className="flex items-center">
                        {/*<span className="inline-flex items-center gap-1.5 aspect-square px-2 py-0.5 bg-bg-subtle rounded-md border border-outline">
                        <Icon name={icon} size={12} className="text-text-muted" />
                    </span>*/}
                        <span className="font-mono text-text-muted">{company}</span>
                    </div>
                </div>
                {description && (
                    <p className="text-text-muted font-body-sm leading-relaxed max-w-3xl">
                        {description}
                    </p>
                )}
            </div>

            {/* Right Side: Dates */}
            <div className="flex flex-col justify-start items-start md:items-end shrink-0 md:pt-1.5">
                <span className="text-text-muted font-mono-sm tracking-wider uppercase">
                    {duration}
                </span>
            </div>
        </div>
    );
};

export const Experience = () => {
    const experiences: ExperienceItemProps[] = [
        {
            role: "UX Design Intern",
            company: "Grid Insight, Napgur",
            duration: "May 2026 - Present",
            icon: "energy_solar",
            description: "Designing the product experience for Volt, a B2B SaaS energy auditing platform. Driving end-to-end UX across complex data workflows, building scalable design systems, and collaborating closely with engineers to ship production-ready experiences.",
        },
        {
            role: "UX Design Intern",
            company: "Drona Well Played, Nagpur",
            duration: "Feb 2026 - April 2026",
            icon: "sports_esports",
            description: "Reimagined player analytics for athletes and coaches. Conducted user research, competitor analysis, and translated insights into intuitive product experiences.",
        },
        {
            role: "Freelance Design Consultant",
            company: "Genius Champs Academy, Nagpur",
            duration: "May 2025 - Present",
            icon: "school",
            description: "Providing end-to-end design consultation. Rebranded educational materials, improved student portal interfaces, and designed marketing assets to boost engagement.",
        },
        {
            role: "Design Lead",
            company: "Google Developer Group on Campus, GCEON",
            duration: "Jun 2024 - Jun 2025",
            icon: "code",
            description: "Led a team of designers to organize technical workshops, create promotional assets for flagship events, and designed branding for first hackathon organized by GCEON.",
        },
    ];

    return (
        <section className="w-full flex justify-center py-12 md:py-24">
            <div className="w-full md:w-content flex flex-col">
              <div className="flex flex-row gap-2 w-full  px-4 pb-2 border-b border-outline font-mono-md  text-text-muted">
                <p> &gt; </p>
                <p className="">Experience</p>
              </div>

                <div className="w-full flex flex-col">
                    {experiences.map((exp, idx) => (
                        <ExperienceItem key={idx} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};
