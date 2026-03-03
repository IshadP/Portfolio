"use client"

import React from "react";
import Image from "next/image";
import Badge from "../../components/case-study/Badge";
import GrayBox from "../../components/case-study/GrayBox";
import ProConCard from "../../components/case-study/ProConCard";
import { Heading, BodyText } from "./YoutubeCaseStudyUI";

const A = "/assets/youtube";

export default function UserStorySection() {
    return (
        <section className="flex flex-col gap-8 md:gap-16 w-full pt-16">
            {/* --- User Story 1 (Yash) --- */}
            <div className="flex flex-col gap-8 md:gap-12 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex self-start">
                        <Badge variant="blue" icon="target">User Story 1</Badge>
                    </div>
                    <Heading>Yash can’t find the relevant results!</Heading>
                    <BodyText>
                        Yash has been preparing for upcoming exams and wants to learn about python lists. He tries to search, but the results are either not video or too old. So he uses filters.
                    </BodyText>
                </div>

                {/* Applying Filters */}
                <GrayBox title="Applying Filters" className="flex flex-col gap-8 p-8 md:p-6">
                    <div className="flex flex-wrap gap-0 items-center justify-center">
                        {[1, 2, 3, 4].map((i) => (
                            <React.Fragment key={i}>
                                <div className="relative w-[120px] md:w-[200px] aspect-218/485 rounded-xl overflow-hidden shadow-lg shrink-0">
                                    <Image src={`${A}/UseCase1-$0${i}.png`} alt={`Applying Filters Step ${i}`} fill sizes="(max-width: 768px) 120px, 200px" className="object-cover" />
                                </div>
                                {i < 4 && (
                                    <div className="hidden lg:block relative w-[44px] h-[19px] shrink-0">
                                        <Image src={`${A}/arrow.svg`} alt="arrow" fill sizes="44px" className="object-contain" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </GrayBox>

                <div className="flex flex-col gap-6 w-full">
                    <BodyText>
                        As he observes old videos, he is frustrated but he discovers “date” filter in filter bar.
                    </BodyText>
                </div>

                {/* Finding the video */}
                <GrayBox title="Finding the video" className="flex flex-col gap-8 p-8 md:p-6">
                    <div className="flex flex-wrap gap-0 items-center justify-center">
                        {[5, 6, 7, 8].map((i) => (
                            <React.Fragment key={i}>
                                <div className="relative w-[120px] md:w-[200px] aspect-218/485 rounded-xl overflow-hidden shadow-lg shrink-0">
                                    <Image src={`${A}/UseCase1-$0${i}.png`} alt={`Finding Video Step ${i}`} fill sizes="(max-width: 768px) 120px, 200px" className="object-cover" />
                                </div>
                                {i < 8 && (
                                    <div className="hidden lg:block relative w-[44px] h-[19px] shrink-0">
                                        <Image src={`${A}/arrow.svg`} alt="arrow" fill sizes="44px" className="object-contain" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </GrayBox>
            </div>

            {/* --- User Story 2 (Laxmi) --- */}
            <div className="flex flex-col gap-8 md:gap-12 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex self-start">
                        <Badge variant="blue" icon="target">User Story 2</Badge>
                    </div>
                    <Heading>Saving Laxmi from missing Livestreams</Heading>
                    <BodyText>
                        Laxmi wanted to see Figma Config but forgot it was today. She opens YouTube to casually watch something. Let’s see what happens
                    </BodyText>
                </div>

                {/* Live Stream Pills */}
                <GrayBox title="Live Stream Pills" className="flex flex-col gap-8 p-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        <div className="flex flex-col md:flex-row lg:flex-col gap-6 shrink-0 items-center">

                            <div className="relative w-[180px] md:w-[218px] aspect-218/485 rounded-xl overflow-hidden shadow-lg">
                                <Image src={`${A}/UseCase2-01.png`} alt="Live Stream Pill 1" fill sizes="(max-width: 768px) 180px, 218px" className="object-cover" />
                            </div>

                            <div className="relative w-[180px] md:w-[218px] aspect-218/485 rounded-xl overflow-hidden shadow-lg">
                                <Image src={`${A}/UseCase2-02.png`} alt="Live Stream Pill 2" fill sizes="(max-width: 768px) 180px, 218px" className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 flex-1 max-w-[500px]">
                            <ProConCard variant="insight">
                                Laxmi notices that the multiple channels are live and remembers about Figma Config.
                            </ProConCard>

                            <ProConCard variant="insight">
                                She quickly clicks on the “Live streams for you” section and starts browsing through the list of live streams.
                            </ProConCard>
                            <ProConCard variant="insight">
                                She finds Figma Config, taps on it, which directly leads her to the stream.
                            </ProConCard>
                        </div>
                    </div>
                </GrayBox>

                <div className="flex flex-col gap-6 w-full">
                    <BodyText>
                        This way YouTube live stream helps user to find their favourite livestreams faster.
                    </BodyText>
                </div>
            </div>
        </section>
    );
}
