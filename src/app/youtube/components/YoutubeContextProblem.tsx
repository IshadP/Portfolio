"use client"

import Image from "next/image";
import Badge from "../../components/case-study/Badge";
import GrayBox from "../../components/case-study/GrayBox";
import ProConCard from "../../components/case-study/ProConCard";
import { SectionLabel, Heading, BodyText } from "./YoutubeCaseStudyUI";

const A = "/assets/youtube";

export default function YoutubeContextProblem() {
    return (
        <div className="flex flex-col gap-12 md:gap-24">
            {/* ── Context ── */}
            <section className="flex flex-col gap-6 md:gap-12 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <SectionLabel>Context</SectionLabel>
                    <Heading>Youtube is go to platform for video.</Heading>
                    <BodyText>
                        YouTube is a go-to platform for video content, but its search experience often falls short. <span className="font-bold">When trying to find a specific video, people have to enter specific keywords, scroll for long periods of time and enter multiple queries.</span> This inspired me to work on a month-long project to improve YouTube's search experience, aiming to help users find relevant content faster and tailor results to their intent without changing how the algorithm woks!
                    </BodyText>
                </div>
            </section>

            {/* ── Problem ── */}
            <section className="flex flex-col gap-8 items-start w-full">
                <div className="flex flex-col gap-4 items-start w-full">
                    <Badge variant="red" icon="warning">Problem</Badge>
                    <Heading>I noticed user had hard time trying to find a video</Heading>
                    <BodyText>
                        The YouTube search experience was very primitive. Users had no guidance on how to find things. This experience overwhelmed users because of suggestions that felt disconnected; there were no visible filters, and people had to scroll endlessly to find content that they wanted. The biggest hurdle was to understand user intent and build an experience around it to ensure an increase in user satisfaction and trust on the platform.
                    </BodyText>
                </div>

                {/* Annotated Problem screenshots */}
                <GrayBox className="flex flex-col md:flex-row p-4 md:p-12 gap-8 md:gap-16">
                    {/* Left Screenshot (Initial Search) */}
                    <div className="flex flex-col gap-6  items-center w-full h-full">
                        <div className="relative w-[180px] md:w-[245px] left-[0%] aspect-245/544 rounded-lg overflow-hidden border-2 border-outline-primary shadow-md">
                            <Image src={`${A}/problem-1.png`} alt="Initial Search UI" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <ProConCard variant="con">System forces user to search a query in order to see results</ProConCard>
                            <ProConCard variant="con">No feedback is provided by system, in form of videos, to user for typing the correct query</ProConCard>
                            <ProConCard variant="con">With the mic icon relocated, users may feel locked into typing and unaware that voice input is still an option.</ProConCard>
                        </div>
                    </div>

                    {/* Right Screenshot (Search results with hidden filters) */}
                    <div className="flex flex-col gap-6  items-center w-full h-full">
                        <div className="relative w-[180px] md:w-[245px] left-[0%] aspect-245/544 rounded-lg overflow-hidden border-2 border-outline-primary shadow-md">
                            <Image src={`${A}/problem-2.png`} alt="Search Results UI" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <ProConCard variant="con">Filters are hidden deep inside the UI, resulting in many people not knowing about them.</ProConCard>
                            <ProConCard variant="con">System doesn’t recognise the user’s choices of filters, thus frustrating them</ProConCard>
                        </div>
                    </div>
                </GrayBox>
            </section>
        </div>
    );
}
