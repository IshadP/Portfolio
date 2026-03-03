"use client"

import React from "react";
import Image from "next/image";
import GrayBox from "../../components/case-study/GrayBox";
import { Heading, BodyText, SectionLabel, Title } from "./YoutubeCaseStudyUI";

const A = "/assets/youtube";

export default function YoutubeFinalReflections() {
    return (
        <section className="flex flex-col gap-12 md:gap-24 w-full pt-16">
            {/* --- Style Guide & UI Building --- */}
            <div className="flex flex-col gap-8 md:gap-12 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <SectionLabel>Building Scalable UI using style guide</SectionLabel>
                    <div className="relative w-full aspect-1078/640 rounded-2xl overflow-hidden shadow-xl border border-outline-primary bg-white">
                        <Image src={`${A}/UI-01.png`} alt="UI Style Guide" fill sizes="100vw" className="object-cover" />
                    </div>
                    <BodyText>
                        I created a small style guide that was accompanied by Google’s Material Design Library in order to build the UI that suites YouTube.
                    </BodyText>
                </div>

                {/* Auto Layout & Consistency */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-8 items-center bg-bg-secondary p-8 rounded-3xl overflow-hidden">
                        <div className="relative w-full lg:w-[400px] aspect-372/52 rounded-xl overflow-hidden shadow-md">
                            <Image src={`${A}/UI-02.png`} alt="Auto Layout Card Example" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                        </div>
                        <div className="flex-1">
                            <BodyText>
                                I used auto layout extensively to ensure consistency throughout various screen sizes. Autolayout made sure that the overall structure of the card was maintained while giving it flexibility to change the size. Moreover, using limits for width in combination with trim text helped me to make all the cards look consistent even with varying degrees of text quantity.
                            </BodyText>
                        </div>
                    </div>
                </div>

                {/* Component States */}
                <div className="flex flex-col gap-8">
                    <div className="relative w-full aspect-1037/105 rounded-xl overflow-hidden shadow-sm border border-outline-primary bg-white">
                        <Image src={`${A}/UI-03.png`} alt="Pill States" fill sizes="100vw" className="object-contain px-4" />
                    </div>
                    <BodyText>
                        As each pill button has various states, I used components to implement them, with clearly defined properties. Using components, I created various states in which the search bar and filter bar could exist.
                    </BodyText>

                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center pt-4">
                        <div className="relative w-full lg:w-[450px] aspect-426/453 rounded-2xl overflow-hidden shadow-lg border border-outline-primary bg-white">
                            <Image src={`${A}/UI-04.png`} alt="Component Properties A" fill sizes="(max-width: 768px) 100vw, 450px" className="object-cover" />
                        </div>
                        <div className="relative w-full lg:w-[450px] aspect-429/456 rounded-2xl overflow-hidden shadow-lg border border-outline-primary bg-white">
                            <Image src={`${A}/UI-05.png`} alt="Component Properties B" fill sizes="(max-width: 768px) 100vw, 450px" className="object-cover" />
                        </div>
                    </div>
                    <BodyText>
                        Clear nomenclature in components allowed me to implement the same component in various scenarios, saving hours of duplicate work.
                    </BodyText>
                </div>
            </div>

            {/* --- Future Scope --- */}
            <div className="flex flex-col gap-8 w-full">
                <Title>Future Scope of improving search</Title>
                <div className="flex flex-col gap-6">
                    <BodyText>
                        AI-assisted search can make discovery faster and more intent-driven. Predictive suggestions could anticipate queries, while adaptive filters refine results using viewing behavior, preferences, and context.
                    </BodyText>
                    <BodyText>
                        The current filter system can be strengthened with advanced options such as duration, creator type, language, and recency. This allows users to narrow results quickly when the goal is specific.
                    </BodyText>
                    <BodyText>
                        For power users, rapid access to history would significantly improve retrieval. Keyboard shortcuts or search modifiers like “:h” could instantly surface past searches and watched videos, reducing repetition and accelerating repeat tasks.
                    </BodyText>
                </div>
            </div>

            {/* --- Main Takeaways --- */}
            <div className="flex flex-col gap-8 w-full">
                <Title>Main takeaways</Title>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="text-h4 font-bold text-text-primary">Intent-Driven Problem Solving</p>
                        <BodyText>
                            Usually I found myself struggling to find the why’s behind the actions of the user, during this project I understood that the “Why” is always fuelled by user’s intent and need. Understanding intent was the key to effective problem solving for users.
                        </BodyText>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-h4 font-bold text-text-primary">Theme-Based Context</p>
                        <BodyText>
                            A big mindset shift for me was moving away from sticking rigidly to a set of questions. In the past, that approach rarely gave me deep insights. Here, by focusing on themes instead of fixed questions, I was able to uncover deeper pain points more naturally.
                        </BodyText>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-h4 font-bold text-text-primary">Validating Early</p>
                        <BodyText>
                            I always thought jumping to UI directly will give me more ideas and various cases, but in this project when I clearly wrote my hypothesis and sketched my ideas, I understood their importance and how validating ideas as wireframe is more economical and efficient as a designer.
                        </BodyText>
                    </div>
                    <Title>Thank you!</Title>
                </div>
            </div>

        </section>
    );
}
