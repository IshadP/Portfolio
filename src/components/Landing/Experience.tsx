import React from 'react';

const experiences = [
    {
        title: "UX Design Intern",
        company: "Drona Well Played, Nagpur",
        date: "Feb 2026 - Present",
    },
    {
        title: "Freelance Design Consultant",
        company: "Genius Champs Academy, Nagpur",
        date: "May 2025 - Present",
    },
    {
        title: "Design Lead",
        company: "Google Developer Group on Campus, GCEON",
        date: "Jun 2024 - Jun 2025",
    },
];

export default function Experience() {
    return (
        <section className="w-full max-w-[1024px] mx-auto p-6 bg-bg-subtle border border-border-default flex flex-col md:flex-row justify-start items-start">
            {/* Left Column: Section Title */}
            <div className="w-full md:w-96 shrink-0 flex items-center mb-6 md:mb-0">
                <h2 className="font-label-lg-mono text-text-muted">Experience</h2>
            </div>

            {/* Right Column: Experience List */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6 w-full">
                {experiences.map((exp, index) => (
                    <React.Fragment key={index}>
                        <div className="self-stretch flex flex-col md:flex-row justify-between items-start gap-1 md:gap-4">
                            <div className="flex-1 flex flex-col justify-start items-start gap-1">
                                <h3 className="font-body-lg-bold text-text-primary leading-tight">{exp.title}</h3>
                                <p className="font-label-md text-text-muted">{exp.company}</p>
                            </div>
                            <div className="shrink-0 pt-1">
                                <span className="font-label-md-mono text-text-muted whitespace-nowrap leading-7">{exp.date}</span>
                            </div>
                        </div>
                        {index < experiences.length - 1 && (
                            <div className="self-stretch h-px bg-border-default" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
