"use client"

import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import FadeIn from "../../components/FadeIn";
import Badge from "../../components/caseStudy/Badge";
import GrayBox from "../../components/caseStudy/GrayBox";
import ProConCard from "../../components/caseStudy/ProConCard";

// ──────────────────────────────────────────────────────────────────────────────
// ── Shared UI Components (extracted from YoutubeCaseStudyUI.tsx) ──
// ──────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-body-mono sm:font-label-lg text-text-tertiary w-full max-w-[1024px] mx-auto">
            {children}
        </p>
    );
}

function BodyText({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-body text-text-primary w-full max-w-[1024px] mx-auto">
            {children}
        </p>
    );
}

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-h2 text-text-primary w-full max-w-[1024px] mx-auto">
            {children}
        </p>
    );
}

function Title({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-h1 text-text-primary w-full max-w-[1024px] mx-auto">
            {children}
        </p>
    );
}

function ActionIndicator({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white border-2 border-[#F94412] px-4 py-2 rounded-full inline-flex self-center z-20">
            <p className="font-geist font-medium text-black text-[12px] md:text-[14px]">
                {children}
            </p>
        </div>
    );
}

const A = "/youtube";

export default function YouTubeCaseStudy() {
    return (
        <div className="bg-bg-primary relative">
            {/* ── Hero Background ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn className="w-full flex justify-center z-10">
                <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-[1024px] flex-col gap-8 px-4 pb-32">
                    {/* ── Navbar ── */}
                    <Navbar />

                    <div className="flex flex-col gap-8 md:gap-12 w-full min-h-[50vh]">
                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        {/* ── 01. HERO SECTION ──                                           */}
                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        <section className="flex flex-col gap-6 text-left" id="hero">
                            <Title>
                                Enhancing YouTube Search for Intent based search results.
                            </Title>

                            <div className="flex flex-col gap-6 w-full max-w-[1024px] mx-auto">
                                <div className="relative w-full aspect-850/500 flex gap-4 p-12 rounded-4xl items-center justify-center border-3 border-outline-primary overflow-hidden bg-bg-primary ">
                                    <div className="relative w-[25%] aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                                        <Image src={`${A}/TitleImg-01.png`} alt="UI Screenshot 1" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                                    </div>
                                    <div className="relative w-[25%]  aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                                        <Image src={`${A}/TitleImg-03.png`} alt="UI Screenshot 3" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                                    </div>
                                    <div className="relative w-[25%] aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                                        <Image src={`${A}/TitleImg-04.png`} alt="UI Screenshot 4" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                                    </div>
                                    <div className="relative w-[25%] aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                                        <Image src={`${A}/TitleImg-02.png`} alt="UI Screenshot 2" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 md:gap-12 w-full pt-4">
                                    <div className="flex flex-col gap-3 flex-1">
                                        <SectionLabel>Role</SectionLabel>
                                        <BodyText>Product Designer</BodyText>
                                    </div>
                                    <div className="flex flex-col gap-3 flex-1">
                                        <SectionLabel>Duration</SectionLabel>
                                        <BodyText>5-6 weeks</BodyText>
                                    </div>
                                    <div className="flex flex-col gap-3 flex-1">
                                        <SectionLabel>Type</SectionLabel>
                                        <BodyText>Conceptual Project</BodyText>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        {/* ── 02. CONTEXT & PROBLEM ──                                      */}
                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        <section className="flex flex-col gap-12 md:gap-24" id="context">
                            <section className="flex flex-col gap-6 md:gap-12 w-full">
                                <div className="flex flex-col w-full">
                                    <SectionLabel>Context</SectionLabel>
                                    <div className="flex flex-col gap-3 mt-3">
                                        <Heading>Youtube is go to platform for video.</Heading>
                                        <BodyText>
                                            YouTube is a go-to platform for video content, but its search experience often falls short. <span className="font-bold">When trying to find a specific video, people have to enter specific keywords, scroll for long periods of time and enter multiple queries.</span> This inspired me to work on a month-long project to improve YouTube's search experience, aiming to help users find relevant content faster and tailor results to their intent without changing how the algorithm woks!
                                        </BodyText>
                                    </div>
                                </div>
                            </section>

                            <section className="flex flex-col gap-8 items-start w-full">
                                <div className="flex flex-col gap-3 items-start w-full">
                                    <Badge variant="red" icon="warning">Problem</Badge>
                                    <div className="flex flex-col gap-5">
                                        <Heading>I noticed user had hard time trying to find a video</Heading>
                                        <BodyText>
                                            The YouTube search experience was very primitive. Users had no guidance on how to find things. This experience overwhelmed users because of suggestions that felt disconnected; there were no visible filters, and people had to scroll endlessly to find content that they wanted. The biggest hurdle was to understand user intent and build an experience around it to ensure an increase in user satisfaction and trust on the platform.
                                        </BodyText>
                                    </div>
                                </div>

                                <GrayBox className="flex flex-col md:flex-row p-4 md:p-12 gap-8 md:gap-16">
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
                        </section>

                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        {/* ── 03. USER FLOW JOURNEY ──                                      */}
                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        <section className="flex flex-col gap-8 md:gap-12 w-full pt-16">
                            <div className="flex flex-col gap-5 w-full items-start max-w-[1024px] self-center">
                                <Heading>How new YouTube search helps users to find a video with less effort</Heading>
                                <BodyText>
                                    Aman, a product designer, was leaving his office when he overheard his friends talking about a new Figma feature. It sounded exciting, but during his ride home he forgot what it was about. Later that evening, when he finally sat down to relax, he opened the YouTube to wind down. Let’s follow his journey of discovering through YouTube Search.
                                </BodyText>
                            </div>

                            <div className="flex flex-col items-center w-full max-w-[1024px] mx-auto gap-0 relative pt-12">
                                {/* --- Step 1 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            Aman opens YouTube. He notices a banner on top, which indicates that Figma is streaming. This reminds him of the buzz his friends where talking about. Curious he clicks on search to find what the new feature is.
                                        </p>
                                    </div>
                                    <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                        <Image src={`${A}/FlowImg-01.png`} alt="Discovery Banner" fill sizes="245px" className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <ProConCard variant="insight">If Aman wants to watch Live Stream, he can just open the video with a single click.</ProConCard>
                                            <ProConCard variant="fact">According to survey, 14 out of 20 people’s algorithm didn’t surface live streams in there feed due to which they missed it, causing frustration and sense of loss in users.</ProConCard>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] bg-linear-to-b from-[#F94412] to-transparent opacity-20"></div>
                                    {/* Vertical Dotted Line simulation with SVG */}
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                                        ))}
                                    </div>
                                    <ActionIndicator>User taps on Search Icon</ActionIndicator>
                                </div>

                                {/* --- Step 2 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            Aman opens the search page, pauses for a moment and glances down to see if anything is useful
                                        </p>
                                    </div>
                                    <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                        <Image src={`${A}/FlowImg-02.png`} alt="Search Options" fill sizes="245px" className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <ProConCard variant="insight">Continue watching allows Aman to view video he left without explicitly going to history to see them or recall their titles.</ProConCard>
                                            <ProConCard variant="fact">A high percentage of “history” visits are due as people want to watch something they left earlier.</ProConCard>
                                            <ProConCard variant="insight">Sections such as “Continue watching” and “Past searches” allow him to skim sections without wasting time reading content, if not required.</ProConCard>
                                            <ProConCard variant="insight">I decided keep the “Past searches” a part of new experience as many users still used it to find videos from a few searches ago.</ProConCard>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                                        ))}
                                    </div>
                                    <ActionIndicator>Aman starts typing the phrase</ActionIndicator>
                                </div>

                                {/* --- Step 3 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            Focused on typing the phrase, he is unsure whether it will provide correct result or not. So he glances down....
                                        </p>
                                    </div>
                                    <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                        <Image src={`${A}/FlowImg-03.png`} alt="Predictive Suggestions" fill sizes="245px" className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-8 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <div className="flex flex-col gap-4">
                                                <ProConCard variant="insight">While typing, Aman can go through suggestion to see if they can be of many help.</ProConCard>
                                                <ProConCard variant="fact">While suggestion weren’t much helpful on face value, according to users they helped them remember what they already have seen!</ProConCard>
                                            </div>
                                            <div className="flex flex-col gap-4 pt-4">
                                                <ProConCard variant="insight">Video cards can provide quick access to that video, if users find what they require.</ProConCard>
                                                <ProConCard variant="fact">During user testing, a side effect of this card was that user were using it to evaluate their current query and modify it as per needed.</ProConCard>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                                        ))}
                                    </div>
                                    <ActionIndicator>User starts typing the new phrase</ActionIndicator>
                                </div>

                                {/* --- Step 4 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            He notices the results aren’t what he required, so he start to type a more specific query until he gets the right results.
                                        </p>
                                    </div>
                                    <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                        <Image src={`${A}/FlowImg-04.png`} alt="Refining Query" fill sizes="245px" className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <ProConCard variant="insight">Only 2-3 videos ensure that the users don’t get too overwhelmed while scanning for results.</ProConCard>
                                            <ProConCard variant="fact">This avoid choice overload in users mind, reducing cognitive load and helping user to make choices faster.</ProConCard>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                                        ))}
                                    </div>
                                    <ActionIndicator>Aman clicks Enter</ActionIndicator>
                                </div>

                                {/* --- Step 5 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            As soon as he clicks the search button, a list of shorts appear. He is quickly frustrated as he wants to watch a deep dive. So he attempt to change the query, just then he notices “Type” filter below search bar...
                                        </p>
                                    </div>
                                    <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                        <Image src={`${A}/FlowImg-05.png`} alt="Filter bar" fill sizes="245px" className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <ProConCard variant="insight">Filters have arrow to indicate multiple options are present, this is inline with Jakob’s law.</ProConCard>
                                            <ProConCard variant="insight">Allowing the other filter to bleed in was a choice to indicate that the list is horizontally scrollable.</ProConCard>
                                            <ProConCard variant="insight">Placing filters close to search helps user understand that they help in searching subconsciously due to Law of common Regions induced by Law of Proximity.</ProConCard>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                                        ))}
                                    </div>
                                    <ActionIndicator>Aman clicks on “Type” Filter</ActionIndicator>
                                </div>

                                {/* --- Step 6 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            He clicks on “Type,” and a bottom sheet appears; it has many options. He scans from top to bottom & finds “Videos.” Happy, he chooses to apply the filter.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                            <Image src={`${A}/FlowImg-06.png`} alt="Filter Selection" fill sizes="245px" className="object-cover" />
                                        </div>
                                        <div className="bg-white rounded-full p-2 shadow-md border border-outline-primary z-10 -my-6">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="relative w-[210px] aspect-210/460 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                            <Image src={`${A}/FlowImg-07.png`} alt="Filter Bottom Sheet" fill sizes="210px" className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <ProConCard variant="insight">Bottom sheet ensure that choosing a option is near the thumb of the user and keeps the UI predictable</ProConCard>
                                            <ProConCard variant="insight">Colour of button changes to help user understand that the state of the filter has changed.</ProConCard>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                                        ))}
                                    </div>
                                    <ActionIndicator>Aman sees results and decides to swipe for “unwatched” Filter</ActionIndicator>
                                </div>

                                {/* --- Step 7 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            He has searched for glass effects before, so he only wants to see videos that he hasn’t seen yet. He notices that filters are scrollable, so he scrolls and finds “Unwatched.”
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                            <Image src={`${A}/FlowImg-08.png`} alt="Previous View" fill sizes="245px" className="object-cover" />
                                        </div>
                                        <div className="bg-white rounded-full p-2 shadow-md border border-outline-primary z-10 -my-6">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="relative w-[210px] aspect-210/460 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                            <Image src={`${A}/FlowImg-09.png`} alt="Filtered Results" fill sizes="210px" className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <ProConCard variant="insight">Changing appearance of option ensures user knows that it is active.</ProConCard>
                                            <ProConCard variant="fact">During user interviews, I noticed that many people often forgot which filters they had applied, or whether those filters were still active. To make sure the system clearly reflects user actions, filters are now shown in a different state when applied.</ProConCard>
                                            <ProConCard variant="insight">The “Filter” button hides, advance filters, allowing user to only user filter that are most important. This hides complexity allowing faster decision making.</ProConCard>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
                                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                                        ))}
                                    </div>
                                    <ActionIndicator>Aman clicks on unwatched</ActionIndicator>
                                </div>

                                {/* --- Step 8 --- */}
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative pb-24">
                                    <div className="flex w-full justify-center lg:justify-end">
                                        <p className="font-h4 text-[#306192] leading-tight w-full lg:max-w-[320px] text-center lg:text-right">
                                            Finally, Aman has the result he wants, satisfied he open the second video to watch it!
                                        </p>
                                    </div>
                                    <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-outline-primary">
                                        <Image src={`${A}/FlowImg-10.png`} alt="Final Satisfaction" fill sizes="245px" className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 w-full justify-center lg:justify-start">
                                        <div className="flex flex-col gap-4 lg:max-w-[320px]">
                                            <ProConCard variant="insight">The label shows which option is active, so users do not have to remember their last choice and can stay aware of the system state.</ProConCard>
                                            <ProConCard variant="insight">The ‘x’ button signals that tapping it will remove the applied filter, changing the state back to inactive.</ProConCard>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <BodyText>
                                The new design helped Aman to find the content he required without need of extensive scrolling. Redesigning this journey was riddled with lot of questions and based on deep understanding of user behaviour. Many decision were taken based on what users said and did, Let’s view some of them below.
                            </BodyText>
                        </section>

                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        {/* ── 04. DESIGN DECISIONS ──                                       */}
                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        <section className="flex flex-col gap-4 md:gap-12 w-full pt-16">
                            <Heading>Decisions that reshaped the YouTube experience.</Heading>
                            {/* --- Decision 1 --- */}
                            <div className="flex flex-col gap-6 w-full">
                                <div className="flex flex-col gap-3 w-full">
                                    <div className="flex self-start">
                                        <Badge variant="blue" icon="target">Decision 1</Badge>
                                    </div>
                                    <Heading>How I accounted for user intent in order to customise search for them</Heading>
                                    <BodyText>
                                        I noticed something interesting: people spent less than two seconds on this page. Why? Because they start typing as soon as they enter the page. There are two actions that users perform—either they type the phrase to search or they select from past searches. But this page was the effective start of a journey, yet it lacked basic assistance to help users.
                                    </BodyText>
                                </div>

                                <GrayBox title="Initial Idea" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                                        <div className="flex flex-col gap-6 w-full lg:w-[220px]">
                                            <ProConCard variant="insight">Many users expressed that they remember/judge a video by visual detail. So I decided to keep thumbnails to help them.</ProConCard>
                                            <ProConCard variant="insight">While showcasing the wireframes, many people asked, "How will I know what this is?" This feedback made me change my decision and include the section on the page.</ProConCard>
                                        </div>
                                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                                            <Image src={`${A}/Decision1-01.png`} alt="Initial Wireframe" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                                        </div>
                                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                                            <Image src={`${A}/Decision1-02.png`} alt="Initial UI Mockup" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-6 w-full lg:w-[220px]">
                                            <ProConCard variant="insight">Placing the option at the top made it easier for people to spot while scanning. F-shaped reading patterns increase the chances of noticing sections at the top.</ProConCard>
                                            <ProConCard variant="insight">Providing only 2-3 choices helps users to make decisions faster.</ProConCard>
                                            <ProConCard variant="insight">While talking to users, some mentioned they rely on past searches to find videos. I kept the section to ensure they wouldn't feel confused.</ProConCard>
                                        </div>
                                    </div>
                                    <p className="text-label-md text-text-secondary text-center">Initially I started with an assumption that users want to find new content</p>
                                </GrayBox>

                                <div className="flex flex-col gap-3 w-full">
                                    <BodyText>
                                        But when I spoke to multiple users, I found a pattern: users arrived on this page with an intent—to find something. While I expected the "Trending" section to help users, after understanding this, "Trending" seemed to severely distract them.
                                    </BodyText>
                                    <BodyText>
                                        A few new ideas surfaced: "Continue Watching," "Live," and "Watch Later"
                                    </BodyText>
                                </div>

                                <GrayBox title="First Iteration" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                                            <Image src={`${A}/Decision1-03.png`} alt="First Iteration" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-6 max-w-[400px]">
                                            <ProConCard variant="insight">The system helps users find remaining tasks, supporting the "Recognition rather than recall" principle. People don't have to remember what they left incomplete.</ProConCard>
                                            <ProConCard variant="insight">Users mentioned that time was an important factor. I added a "Time Left" label to help them quickly decide which videos they could watch now.</ProConCard>
                                            <ProConCard variant="insight">Top 90% of videos have attractive thumbnails. Showing them helps users remember not just the video but "why" they were watching it.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>

                                <div className="flex flex-col gap-6 w-full">
                                    <BodyText>While conducting tests, users actively noticed and interacted with the new "Continue watching," which helped them reach their result faster.</BodyText>
                                </div>

                                <GrayBox title="Second Iteration" className="flex flex-col gap-6 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                                            <Image src={`${A}/Decision1-05.png`} alt="Second Iteration" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-6 max-w-[400px]">
                                            <ProConCard variant="insight">Showing History above was an assumption I made thinking users would be focused on the search bar, so keeping it close would help them notice it.</ProConCard>
                                            <ProConCard variant="insight">As people might have more history, I added a "Show More" option to see more videos related to the search from history.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>

                                <div className="flex flex-col gap-5 w-full">
                                    <p className="font-h3 text-text-primary">
                                        One day, I was talking to a user, and she asked two questions that changed my course:
                                    </p>
                                    <ul className="list-disc pl-3 flex flex-col gap-3">
                                        <li className="font-body text-text-primary">"What if I am a new user or I don't have history related to the topic?"</li>
                                        <li className="font-body text-text-primary">"Why place the history section on top when all other apps like Spotify have suggestions at the bottom?"</li>
                                    </ul>
                                    <BodyText>So I visited Spotify and I found something very useful!</BodyText>
                                </div>
                                
                                <div className="flex flex-col gap-6">
                                <div className="flex self-start">
                                    <Badge variant="green" icon="check">Final Design</Badge>
                                </div>

                                <GrayBox title="Music Platforms" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-12 items-cente justify-center">
                                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                                            <Image src={`${A}/Decision1-06.png`} alt="Spotify Analysis" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-6 max-w-[400px]">
                                            <ProConCard variant="insight">Not only was the section below the text suggestions, but it shows video suggestions based on query, not just history!</ProConCard>
                                            <div className="flex flex-col gap-4">
                                                <p className="text-label-lg font-bold text-text-secondary">Why text suggestions on top?</p>
                                                <BodyText><span className="font-bold">User expectation</span>: Users expect text suggestions near the search bar as they type. It also <span className="font-bold">helps with query refinement</span>, finishing typing faster.</BodyText>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <p className="text-label-lg font-bold text-text-secondary">Why not history?</p>
                                                <BodyText>Current user intent is stronger than past searches. Users are on the search page to find something "now" that might be different from history.</BodyText>
                                            </div>
                                        </div>
                                    </div>
                                </GrayBox>

                                <GrayBox title="Translation to Youtube" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                        <div className="flex flex-col gap-6 max-w-[400px]">
                                            <ProConCard variant="insight">The suggestion just below the search bar helps users understand relationship to the query, following the Law of Common Regions.</ProConCard>
                                            <ProConCard variant="insight">Video suggestions based on user query and preferences help users adjust their query accordingly.</ProConCard>
                                        </div>
                                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                                            <Image src={`${A}/Decision1-07.png`} alt="Final Translated Design" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                                        </div>
                                    </div>
                                </GrayBox>
                                

                                <BodyText>Choosing this new layout seemed to help users subconsciously. While my user testing couldn't reveal a significant effect immediately, I believe on a larger scale this pattern reflects a major shift in user thinking.</BodyText>
                               </div> 
                            </div>
                            

                            {/* --- Decision 2 --- */}
                            <div className="flex flex-col gap-6 w-full">
                                <div className="flex flex-col gap-3 w-full">
                                    <div className="flex self-start">
                                        <Badge variant="blue" icon="target">Decision 2</Badge>
                                    </div>
                                    <Heading>Why I had to iterate on video card more than 3 times.</Heading>
                                    <BodyText>Before moving forward, let’s see what current YouTube offers.</BodyText>
                                </div>

                                <GrayBox title="Current Design" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                        <div className="flex flex-col gap-4 w-full lg:w-[400px]">
                                            <div className="relative aspect-400/42 rounded-lg overflow-hidden">
                                                <Image src={`${A}/Decision2-01.png`} alt="Current Search Card 1" fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" />
                                            </div>
                                            <div className="relative aspect-400/42 rounded-lg overflow-hidden">
                                                <Image src={`${A}/Decision2-02.png`} alt="Current Search Card 2" fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" />
                                            </div>
                                            <div className="relative aspect-400/42 rounded-lg overflow-hidden">
                                                <Image src={`${A}/Decision2-03.png`} alt="Current Search Card 3" fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6 flex-1">
                                            <ProConCard variant="insight">Text here shows what will be searched, the arrow indicates it leads to a new page, and the magnifying glass indicates that it is a suggestion.</ProConCard>
                                            <ProConCard variant="insight">The small thumbnail image helps users remember what they were searching for or even identify the specific video.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>

                                <div className="flex flex-col gap-3 w-full">
                                    <BodyText>
                                        These cards are designed to help users find what they’re looking for while searching, but many people tend to overlook them. <span className="font-bold">I noticed that people often had a fixed mindset—if one card felt unhelpful, they assumed the rest would be too.</span> This was because the cards seemed too similar to each other.
                                    </BodyText>
                                    <BodyText>
                                        If a user is trying to recall something from a past search and everything looks identical, it becomes overwhelming and frustrating because they can’t quickly find what they need.
                                    </BodyText>
                                </div>

                                <GrayBox title="Wireframes" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                        <div className="flex flex-col gap-6 max-w-[400px]">
                                            <ProConCard variant="insight">Many users remembered a video by its thumbnail, so I decided to incorporate it more prominently in the card design.</ProConCard>
                                        </div>
                                        <div className="flex flex-col gap-6 w-full lg:w-[400px]">
                                            <div className="relative w-full aspect-400/100 rounded-lg overflow-hidden shadow-lg">
                                                <Image src={`${A}/Decision2-04.png`} alt="Wireframe 1" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                                            </div>
                                            <div className="relative w-full aspect-400/150 rounded-lg overflow-hidden shadow-lg">
                                                <Image src={`${A}/Decision2-05.png`} alt="Wireframe 2" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </GrayBox>

                                <div className="flex flex-col gap-3 w-full">
                                    <BodyText>After talking to users, I found they made judgments about watching a video based on various factors such as Views, Time Left, Creator, etc. The challenge was how to show all this information without overwhelming them!</BodyText>
                                    <BodyText>Creator name, thumbnail, and title had to be there always; I decided to use other elements based on context!</BodyText>
                                </div>

                                <GrayBox title="First Iteration" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                            <div className="flex flex-col gap-6 max-w-[400px]">
                                                <ProConCard variant="insight">Giving the video card a lighter background helped users understand it was clickable, like a button.</ProConCard>
                                            </div>
                                            <div className="relative w-full lg:w-[500px] aspect-500/170 rounded-xl overflow-hidden shadow-md">
                                                <Image src={`${A}/Decision2-06.png`} alt="First Iteration UI A" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                            <div className="flex flex-col gap-6 max-w-[400px]">
                                                <ProConCard variant="insight">Information on the card, such as "Live" and "New Video," changes based on the specific context of the video.</ProConCard>
                                            </div>
                                            <div className="relative w-full lg:w-[500px] aspect-500/170 rounded-xl overflow-hidden shadow-md">
                                                <Image src={`${A}/Decision2-07.png`} alt="First Iteration UI B" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </GrayBox>

                                <BodyText>Space between the cards gave each of them their own identity and distinction. I presented these cards to users again, but they were still confused. Why? It took too much time to understand the card. The reason? All the information felt "scattered" according to users.</BodyText>

                                <div className="flex self-start">
                                    <Badge variant="green" icon="check">Final Design</Badge>
                                </div>

                                <GrayBox title="Final Design" className="flex flex-col gap-8 p-8 md:p-4">
                                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                        <div className="relative w-full lg:w-[500px] aspect-500/100 rounded-xl overflow-hidden shadow-xl">
                                            <Image src={`${A}/Decision2-08.png`} alt="Final Video Card Design" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-6 max-w-[400px]">
                                            <ProConCard variant="insight">I dug deeper and found that users had to move their attention from left to right constantly. I changed the location of the thumbnail to align everything, and that fixed it!</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>

                                <BodyText>While this card version didn’t show all information at once, it had enough to help users make a decision and move forward quickly.</BodyText>
                            </div>
                        </section>

                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        {/* ── 05. USER STORIES ──                                           */}
                        {/* ────────────────────────────────────────────────────────────────────────────── */}

                        <section className="flex flex-col gap-12 w-full pt-16">
                            <Heading>How users search better using new experience.</Heading>
                            <div className="flex flex-col gap-6 w-full">
                                <div className="flex flex-col gap-3 w-full">
                                    <div className="flex self-start">
                                        <Badge variant="blue" icon="target">User Story 1</Badge>
                                    </div>
                                    <Heading>Yash can’t find the relevant results!</Heading>
                                    <BodyText>Yash has been preparing for upcoming exams and wants to learn about python lists. He tries to search, but the results are either not video or too old. So he uses filters.</BodyText>
                                </div>

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
                                    <BodyText>As he observes old videos, he is frustrated but he discovers “date” filter in filter bar.</BodyText>
                                </div>

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

                            <div className="flex flex-col gap-8 md:gap-12 w-full">
                                <div className="flex flex-col gap-3 w-full">
                                    <div className="flex self-start">
                                        <Badge variant="blue" icon="target">User Story 2</Badge>
                                    </div>
                                    <Heading>Saving Laxmi from missing Livestreams</Heading>
                                    <BodyText>Laxmi wanted to see Figma Config but forgot it was today. She opens YouTube to casually watch something. Let’s see what happens</BodyText>
                                </div>

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
                                            <ProConCard variant="insight">Laxmi notices that the multiple channels are live and remembers about Figma Config.</ProConCard>
                                            <ProConCard variant="insight">She quickly clicks on the “Live streams for you” section and starts browsing through the list of live streams.</ProConCard>
                                            <ProConCard variant="insight">She finds Figma Config, taps on it, which directly leads her to the stream.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>

                                <div className="flex flex-col gap-6 w-full">
                                    <BodyText>This way YouTube live stream helps user to find their favourite livestreams faster.</BodyText>
                                </div>
                            </div>
                        </section>

                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        {/* ── 06. FINAL REFLECTIONS ──                                      */}
                        {/* ────────────────────────────────────────────────────────────────────────────── */}
                        <section className="flex flex-col gap-12 w-full pt-16">
                            <div className="flex flex-col gap-8 md:gap-12 w-full">
                                <div className="flex flex-col gap-3 w-full">
                                    <SectionLabel>Building Scalable UI using style guide</SectionLabel>
                                    <div className="relative w-full aspect-1078/640 rounded-2xl overflow-hidden shadow-xl border border-outline-primary bg-white mt-1">
                                        <Image src={`${A}/UI-01.png`} alt="UI Style Guide" fill sizes="100vw" className="object-cover" />
                                    </div>
                                    <BodyText>I created a small style guide that was accompanied by Google’s Material Design Library in order to build the UI that suites YouTube.</BodyText>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-8 items-center bg-bg-secondary p-8 rounded-3xl overflow-hidden">
                                        <div className="relative w-full lg:w-[400px] aspect-372/52 rounded-xl overflow-hidden shadow-md">
                                            <Image src={`${A}/UI-02.png`} alt="Auto Layout Card Example" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <BodyText>I used auto layout extensively to ensure consistency throughout various screen sizes. Autolayout made sure that the overall structure of the card was maintained while giving it flexibility to change the size. Moreover, using limits for width in combination with trim text helped me to make all the cards look consistent even with varying degrees of text quantity.</BodyText>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <div className="relative w-full aspect-1037/105 rounded-xl overflow-hidden shadow-sm border border-outline-primary bg-white">
                                        <Image src={`${A}/UI-03.png`} alt="Pill States" fill sizes="100vw" className="object-contain px-4" />
                                    </div>
                                    <BodyText>As each pill button has various states, I used components to implement them, with clearly defined properties. Using components, I created various states in which the search bar and filter bar could exist.</BodyText>

                                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center pt-4">
                                        <div className="relative w-full lg:w-[450px] aspect-426/453 rounded-2xl overflow-hidden shadow-lg border border-outline-primary bg-white">
                                            <Image src={`${A}/UI-04.png`} alt="Component Properties A" fill sizes="(max-width: 768px) 100vw, 450px" className="object-cover" />
                                        </div>
                                        <div className="relative w-full lg:w-[450px] aspect-429/456 rounded-2xl overflow-hidden shadow-lg border border-outline-primary bg-white">
                                            <Image src={`${A}/UI-05.png`} alt="Component Properties B" fill sizes="(max-width: 768px) 100vw, 450px" className="object-cover" />
                                        </div>
                                    </div>
                                    <BodyText>Clear nomenclature in components allowed me to implement the same component in various scenarios, saving hours of duplicate work.</BodyText>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-full">
                                <Title>Future Scope of improving search</Title>
                                <div className="flex flex-col gap-3">
                                    <BodyText>AI-assisted search can make discovery faster and more intent-driven. Predictive suggestions could anticipate queries, while adaptive filters refine results using viewing behavior, preferences, and context.</BodyText>
                                    <BodyText>The current filter system can be strengthened with advanced options such as duration, creator type, language, and recency. This allows users to narrow results quickly when the goal is specific.</BodyText>
                                    <BodyText>For power users, rapid access to history would significantly improve retrieval. Keyboard shortcuts or search modifiers like “:h” could instantly surface past searches and watched videos, reducing repetition and accelerating repeat tasks.</BodyText>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-full">
                                <Title>Main takeaways</Title>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-h4 font-bold text-text-primary">Intent-Driven Problem Solving</p>
                                        <BodyText>Usually I found myself struggling to find the why’s behind the actions of the user, during this project I understood that the “Why” is always fuelled by user’s intent and need. Understanding intent was the key to effective problem solving for users.</BodyText>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-h4 font-bold text-text-primary">Theme-Based Context</p>
                                        <BodyText>A big mindset shift for me was moving away from sticking rigidly to a set of questions. In the past, that approach rarely gave me deep insights. Here, by focusing on themes instead of fixed questions, I was able to uncover deeper pain points more naturally.</BodyText>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-h4 font-bold text-text-primary">Validating Early</p>
                                        <BodyText>I always thought jumping to UI directly will give me more ideas and various cases, but in this project when I clearly wrote my hypothesis and sketched my ideas, I understood their importance and how validating ideas as wireframe is more economical and efficient as a designer.</BodyText>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <Title>Thank you!</Title>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* ── Footer ── */}
                    <Footer />
                </div>
            </FadeIn>
        </div>
    );
}
