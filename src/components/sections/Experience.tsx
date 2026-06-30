import React from "react";

interface ExperienceItemProps {
    role: string;
    company: string;
    duration: string;
}

const ExperienceItem = ({ role, company, duration }: ExperienceItemProps) => {
    return (
        <div className="self-stretch flex justify-between items-start gap-4">
            <div className="flex-1 flex flex-col justify-start items-start gap-s2">
                <h3 className="self-stretch text-text-primary font-body-lg">
                    {role}
                </h3>
                <p className="self-stretch text-text-muted font-body-sm">
                    {company}
                </p>
            </div>
            <div className="flex flex-col justify-start items-start">
                <span className="text-text-muted font-label-sm-mono leading-5">
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
            company: "Drona Well Played, Nagpur",
            duration: "May 2026 - Present",
        },
        {
            role: "UX Design Intern",
            company: "Drona Well Played, Nagpur",
            duration: "Feb 2026 - April 2026",
        },
        {
            role: "Freelance Design Consultant",
            company: "Genius Champs Academy, Nagpur",
            duration: "May 2025 - Present",
        },
        {
            role: "Design Lead",
            company: "Google Developer Group on Campus, GCEON",
            duration: "Jun 2024 - Jun 2025",
        },
    ];

    return (
        <div className="self-stretch py-4 border-y border-outline bg-bg-default w-full flex flex-col gap-8 md:gap-0 md:grid grid-cols-3">
            <div className="flex justify-start items-start col-span-1 gap-4">
                <h2 className="text-text-muted font-label-md-mono">
                    Experience
                </h2>
            </div>
            <div className="self-stretch col-span-2 flex flex-col justify-start items-start gap-4">
                {experiences.map((exp, idx) => (
                    <React.Fragment key={idx}>
                        <ExperienceItem {...exp} />
                        {idx < experiences.length - 1 && (
                            <div className="self-stretch h-px bg-outline" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
