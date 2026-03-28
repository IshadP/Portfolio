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
import Hatching from "../../components/Hatching";

// ──────────────────────────────────────────────────────────────────────────────
// ── Shared UI Components (Aligned with Printhub Pattern) ──
// ──────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-label-lg-mono text-text-disabled w-full max-w-[1024px]">
            {children}
        </p>
    );
}

function BodyText({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-body-sm text-text-secondary w-full max-w-[1024px]">
            {children}
        </p>
    );
}

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-h2 text-text-primary w-full max-w-[1024px]">
            {children}
        </p>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-h3 text-text-primary w-full max-w-[1024px]">
            {children}
        </p>
    );
}

function Title({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-h2 px-6 text-text-primary w-full max-w-[1024px]">
            {children}
        </p>
    );
}

function Divider() {
    return (
        <div className="border-x border-border-default h-8 w-full"></div>
    );
}

function ActionIndicator({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center py-12 relative w-full h-[140px] lg:h-[180px]">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] h-full flex flex-col gap-2 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-full h-2 bg-[#F94412] shrink-0 opacity-40"></div>
                ))}
            </div>
            <div className="bg-white border-2 border-[#F94412] px-4 py-2 rounded-full inline-flex self-center z-20">
                <p className="font-sans font-medium text-black text-[12px] md:text-[14px]">
                    {children}
                </p>
            </div>
        </div>
    );
}

/* ── Journey Step Component (Printhub-style Abstracted for YouTube) ── */
function JourneyStep({
    narrative,
    screen,
    children
}: {
    narrative: string;
    screen: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-center w-full group">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative max-w-[1078px]">
                {/* Left Side: Narrative */}
                <div className="flex w-full justify-center lg:justify-end lg:pt-12">
                    <div className="flex flex-col gap-4 w-full lg:max-w-[320px]">
                        <p className="font-h4 text-[#306192] leading-tight text-center lg:text-right">
                            {narrative}
                        </p>
                    </div>
                </div>

                {/* Center: Mobile Screen */}
                <div className="relative z-10 flex justify-center">
                    <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-border-default bg-white">
                        <Image src={`/youtube/${screen}`} alt="Flow Step" fill sizes="245px" quality={100} className="object-cover" />
                    </div>
                </div>

                {/* Right Side: Insights */}
                <div className="flex flex-col gap-6 md:gap-4 lg:max-w-[320px] w-full justify-center lg:justify-start items-center lg:pt-12">
                    <div className="flex flex-col gap-4 w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

const A = "/youtube";

export default function YouTubeCaseStudy() {
    return (
        <div className="bg-bg-subtle relative">
            {/* ── Hero Background ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn className="w-full flex justify-center z-10">
                <div className="relative z-10 mx-auto flex w-full bg-bg-subtle max-w-[1024px] flex-col px-4">
                    {/* Top Gradient Fade Overlay */}
                    <div className="sticky top-0 inset-x-0 w-full h-32 bg-linear-to-b from-bg-subtle from-20% to-transparent to-100% pointer-events-none z-40 -mb-32"></div>

                    {/* ── Navbar ── */}
                    <Navbar />

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 01. HERO SECTION ──                                                         */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col border-x border-t border-b border-border-default w-full">
                        <div className="px-2 py-8">
                            <Title>Enhancing YouTube Search for Intent based search results.</Title>
                        </div>

                        <div className="border-t border-border-default overflow-hidden p-0 w-full">
                            <div className="bg-bg-subtle flex flex-col border-b border-border-default md:flex-row items-center justify-center p-8 md:p-12">
                                <div className="relative w-full aspect-850/500 overflow-visible  flex items-center justify-center">
                                    <Image src={`${A}/hero.png`} alt="UI Screenshot 1" fill sizes="(max-width: 1200px) 100vw, 850px" quality={100} className="object-cover" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-8 md:gap-24 px-8 md:px-12">
                                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                                    <p className="font-label-lg-mono text-text-muted">Role</p>
                                    <p className="font-label-lg text-text-primary">Product Designer</p>
                                </div>
                                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                                    <p className="font-label-lg-mono text-text-muted">Duration</p>
                                    <p className="font-label-lg text-text-primary">5-6 weeks</p>
                                </div>
                                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                                    <p className="font-label-lg-mono text-text-muted">Type</p>
                                    <p className="font-label-lg text-text-primary">Conceptual Project</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Divider  />

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 02. CONTEXT & PROBLEM ──                                                    */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col border-x border-t border-border-default w-full">
                        <div className="flex flex-col px-6 py-4 gap-5 w-full">
                            <SectionLabel>Context</SectionLabel>
                            <SubHeading>Youtube is the go to platform for video.</SubHeading>
                            <BodyText>
                                YouTube is a go-to platform for video content, but its search experience often falls short. <span className="font-bold">When trying to find a specific video, people have to enter specific keywords, scroll for long periods of time and enter multiple queries.</span> This inspired me to work on a month-long project to improve YouTube's search experience, aiming to help users find relevant content faster and tailor results to their intent without changing how the algorithm works!
                            </BodyText>
                        </div>
                    </section>

                    <Divider />

                    <section className="flex flex-col border-x border-t border-b border-border-default w-full">
                        <div className="flex flex-col px-6 py-4 gap-5 w-full">
                            <div className="flex self-start">
                                <Badge variant="error">Problem</Badge>
                            </div>
                            <SubHeading>I noticed users had a hard time trying to find a video</SubHeading>
                            <BodyText>
                                The YouTube search experience was very primitive. Users had no guidance on how to find things. This experience overwhelmed users because of suggestions that felt disconnected; there were no visible filters, and people had to scroll endlessly to find content that they wanted. The biggest hurdle was to understand user intent and build an experience around it to ensure an increase in user satisfaction and trust on the platform.
                            </BodyText>
                        </div>

                        <div className="flex flex-col md:flex-row border-t gap-2 border-border-default">
                            {/* --- Problem 1 --- */}
                            <div className="flex flex-col border-b md:border-b-0 md:border-r border-border-default flex-1">
                                <GrayBox title="Current Search Experience" className="flex w-full justify-center items-center py-8" b>
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-lg overflow-hidden shadow-md">
                                        <Image src={`${A}/Problem-01.png`} alt="Initial Search UI" fill sizes="(max-width: 768px) 180px, 245px" quality={100} className="object-cover" />
                                    </div>
                                </GrayBox>
                                <div className="flex flex-col gap-3 px-6 py-4">
                                    <ProConCard variant="con" full>System forces user to search a query in order to see results</ProConCard>
                                    <ProConCard variant="con" full>No feedback is provided by system, in form of videos, to user for typing the correct query</ProConCard>
                                    <ProConCard variant="con" full>With the mic icon relocated, users may feel locked into typing and unaware that voice input is still an option.</ProConCard>
                                </div>
                            </div>

                            

                            {/* --- Problem 2 --- */}
                            <div className="flex flex-col flex-1 md:border-b-0 md:border-l border-border-default">
                                <GrayBox title="Search Results" className="flex w-full justify-center items-center py-8" b>
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-lg overflow-hidden shadow-md">
                                        <Image src={`${A}/Problem-02.png`} alt="Search Results UI" fill sizes="(max-width: 768px) 180px, 245px" quality={100} className="object-cover" />
                                    </div>
                                </GrayBox>
                                <div className="flex flex-col gap-3 px-6 py-4">
                                    <ProConCard variant="con" full>Filters are hidden deep inside the UI, resulting in many people not knowing about them.</ProConCard>
                                    <ProConCard variant="con" full>System doesn’t recognise the user’s choices of filters, thus frustrating them</ProConCard>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Hatching height="h-12"/>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 03. USER FLOW JOURNEY ──                                                    */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col border-x border-t border-b border-border-default gap-16 w-full pt-8 pb-8">
                        <div className="flex flex-col gap-8 px-6 py-4 w-full">
                            <Heading>How new YouTube search helps users to find a video with less effort</Heading>
                            <BodyText>
                                Aman, a product designer, was leaving his office when he overheard his friends talking about a new Figma feature. It sounded exciting, but during his ride home he forgot what it was about. Later that evening, when he finally sat down to relax, he opened the YouTube to wind down. Let’s follow his journey of discovering through YouTube Search.
                            </BodyText>
                        </div>

                        <div className="flex flex-col px-8 items-center w-full">
                            {/* --- Step 1 --- */}
                            <JourneyStep
                                narrative="Aman opens YouTube. He notices a banner on top, which indicates that Figma is streaming. This reminds him of the buzz his friends where talking about. Curious he clicks on search to find what the new feature is."
                                screen="FlowImg-01.png"
                            >
                                <ProConCard variant="insight">If Aman wants to watch Live Stream, he can just open the video with a single click.</ProConCard>
                                <ProConCard variant="fact">According to survey, 14 out of 20 people’s algorithm didn’t surface live streams in there feed due to which they missed it, causing frustration and sense of loss in users.</ProConCard>
                            </JourneyStep>

                            <ActionIndicator>User taps on Search Icon</ActionIndicator>

                            {/* --- Step 2 --- */}
                            <JourneyStep
                                narrative="Aman opens the search page, pauses for a moment and glances down to see if anything is useful"
                                screen="FlowImg-02.png"
                            >
                                <ProConCard variant="insight">Continue watching allows Aman to view video he left without explicitly going to history to see them or recall their titles.</ProConCard>
                                <ProConCard variant="fact">A high percentage of “history” visits are due as people want to watch something they left earlier.</ProConCard>
                                <ProConCard variant="insight">Sections such as “Continue watching” and “Past searches” allow him to skim sections without wasting time reading content, if not required.</ProConCard>
                                <ProConCard variant="insight">I decided keep the “Past searches” a part of new experience as many users still used it to find videos from a few searches ago.</ProConCard>
                            </JourneyStep>

                            <ActionIndicator>Aman starts typing the phrase</ActionIndicator>

                            {/* --- Step 3 --- */}
                            <JourneyStep
                                narrative="Focused on typing the phrase, he is unsure whether it will provide correct result or not. So he glances down...."
                                screen="FlowImg-03.png"
                            >
                                <ProConCard variant="insight">While typing, Aman can go through suggestion to see if they can be of many help.</ProConCard>
                                <ProConCard variant="fact">While suggestion weren’t much helpful on face value, according to users they helped them remember what they already have seen!</ProConCard>
                                <ProConCard variant="insight">Video cards can provide quick access to that video, if users find what they require.</ProConCard>
                                <ProConCard variant="fact">During user testing, a side effect of this card was that user were using it to evaluate their current query and modify it as per needed.</ProConCard>
                            </JourneyStep>

                            <ActionIndicator>User starts typing the new phrase</ActionIndicator>

                            {/* --- Step 4 --- */}
                            <JourneyStep
                                narrative="He notices the results aren’t what he required, so he start to type a more specific query until he gets the right results."
                                screen="FlowImg-04.png"
                            >
                                <ProConCard variant="insight">Only 2-3 videos ensure that the users don’t get too overwhelmed while scanning for results.</ProConCard>
                                <ProConCard variant="fact">This avoid choice overload in users mind, reducing cognitive load and helping user to make choices faster.</ProConCard>
                            </JourneyStep>

                            <ActionIndicator>Aman clicks Enter</ActionIndicator>

                            {/* --- Step 5 --- */}
                            <JourneyStep
                                narrative="As soon as he clicks the search button, a list of shorts appear. He is quickly frustrated as he wants to watch a deep dive. So he attempt to change the query, just then he notices “Type” filter below search bar..."
                                screen="FlowImg-05.png"
                            >
                                <ProConCard variant="insight">Filters have arrow to indicate multiple options are present, this is inline with Jakob’s law.</ProConCard>
                                <ProConCard variant="insight">Allowing the other filter to bleed in was a choice to indicate that the list is horizontally scrollable.</ProConCard>
                                <ProConCard variant="insight">Placing filters close to search helps user understand that they help in searching subconsciously due to Law of common Regions induced by Law of Proximity.</ProConCard>
                            </JourneyStep>

                            <ActionIndicator>Aman clicks on “Type” Filter</ActionIndicator>

                            {/* --- Step 6 (Custom render due to bottom sheet) --- */}
                            <div className="flex flex-col items-center w-full group">
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative max-w-[1078px]">
                                    <div className="flex w-full justify-center lg:justify-end lg:pt-12">
                                        <div className="flex flex-col gap-4 w-full lg:max-w-[320px]">
                                            <p className="font-h4 text-[#306192] leading-tight text-center lg:text-right">
                                                He clicks on “Type,” and a bottom sheet appears; it has many options. He scans from top to bottom & finds “Videos.” Happy, he chooses to apply the filter.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                                        <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-border-default bg-white">
                                            <Image src={`${A}/FlowImg-06.png`} alt="Filter Selection" fill sizes="245px" quality={100} className="object-cover" />
                                        </div>
                                        <div className="bg-white rounded-full p-2 shadow-md border border-border-default z-10 -my-6">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="relative w-[210px] aspect-210/460 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-border-default bg-white">
                                            <Image src={`${A}/FlowImg-07.png`} alt="Filter Bottom Sheet" fill sizes="210px" quality={100} className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 md:gap-4 lg:max-w-[320px] w-full justify-center lg:justify-start items-center lg:pt-12">
                                        <div className="flex flex-col gap-4 w-full">
                                            <ProConCard variant="insight">Bottom sheet ensure that choosing a option is near the thumb of the user and keeps the UI predictable</ProConCard>
                                            <ProConCard variant="insight">Colour of button changes to help user understand that the state of the filter has changed.</ProConCard>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ActionIndicator>Aman sees results and decides to swipe for “unwatched” Filter</ActionIndicator>

                            {/* --- Step 7 (Custom render) --- */}
                            <div className="flex flex-col items-center w-full group">
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_245px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative max-w-[1078px]">
                                    <div className="flex w-full justify-center lg:justify-end lg:pt-12">
                                        <div className="flex flex-col gap-4 w-full lg:max-w-[320px]">
                                            <p className="font-h4 text-[#306192] leading-tight text-center lg:text-right">
                                                He has searched for glass effects before, so he only wants to see videos that he hasn’t seen yet. He notices that filters are scrollable, so he scrolls and finds “Unwatched.”
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                                        <div className="relative w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-border-default bg-white">
                                            <Image src={`${A}/FlowImg-08.png`} alt="Previous View" fill sizes="245px" quality={100} className="object-cover" />
                                        </div>
                                        <div className="bg-white rounded-full p-2 shadow-md border border-border-default z-10 -my-6">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="relative w-[210px] aspect-210/460 rounded-xl overflow-hidden shrink-0 shadow-2xl border border-border-default bg-white">
                                            <Image src={`${A}/FlowImg-09.png`} alt="Filtered Results" fill sizes="210px" quality={100} className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 md:gap-4 lg:max-w-[320px] w-full justify-center lg:justify-start items-center lg:pt-12">
                                        <div className="flex flex-col gap-4 w-full">
                                            <ProConCard variant="insight">Changing appearance of option ensures user knows that it is active.</ProConCard>
                                            <ProConCard variant="fact">During user interviews, I noticed that many people often forgot which filters they had applied, or whether those filters were still active. To make sure the system clearly reflects user actions, filters are now shown in a different state when applied.</ProConCard>
                                            <ProConCard variant="insight">The “Filter” button hides, advance filters, allowing user to only user filter that are most important. This hides complexity allowing faster decision making.</ProConCard>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ActionIndicator>Aman clicks on unwatched</ActionIndicator>

                            {/* --- Step 8 --- */}
                            <JourneyStep
                                narrative="Finally, Aman has the result he wants, satisfied he open the second video to watch it!"
                                screen="FlowImg-10.png"
                            >
                                <ProConCard variant="insight">The label shows which option is active, so users do not have to remember their last choice and can stay aware of the system state.</ProConCard>
                                <ProConCard variant="insight">The ‘x’ button signals that tapping it will remove the applied filter, changing the state back to inactive.</ProConCard>
                            </JourneyStep>
                        </div>
                    </section>

                    <Hatching height="h-12" />

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 04. DESIGN DECISIONS ──                                                     */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col border-x border-t border-border-default w-full">
                        <div className="flex flex-col px-6 py-4 gap-5 w-full">
                            <Heading>Decisions that reshaped the YouTube experience.</Heading>
                        </div>
                    </section>

                    {/* Decision 1 */}
                    <section className="flex flex-col border-x border-t border-b border-border-default w-full">
                        <div className="flex flex-col px-6 py-8 gap-6 w-full border-b border-border-default"> 
                            <div className="flex flex-col gap-5"> 
                                <div className="flex flex-col gap-3"> 
                                    <div className="flex self-start">
                                        <Badge variant="info">Decision 1</Badge>
                                    </div>
                                    <Heading>How I accounted for user intent in order to customise search for them</Heading>
                                </div>
                                <BodyText>
                                    I noticed something interesting: people spent less than two seconds on this page. Why? Because they start typing as soon as they enter the page. There are two actions that users perform—either they type the phrase to search or they select from past searches. But this page was the effective start of a journey, yet it lacked basic assistance to help users.
                                </BodyText>
                            </div>
                        </div>

                        <GrayBox title="Initial Idea" className="flex flex-col gap-8 p-8 md:p-12" t b>
                            <div className="flex flex-col gap-8 items-center justify-between">
                                <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-12">
                                    <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
                                        <ProConCard variant="insight" full>Many users expressed that they remember/judge a video by visual detail. So I decided to keep thumbnails to help them.</ProConCard>
                                        <ProConCard variant="insight" full>While showcasing the wireframes, many people asked, "How will I know what this is?" This feedback made me change my decision and include the section on the page.</ProConCard>
                                    </div>
                                    <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl bg-white">
                                        <Image src={`${A}/Decision1-01.png`} alt="Initial Wireframe" fill sizes="(max-width: 768px) 280px, 320px" quality={100} className="object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-12 pt-8">
                                    <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl bg-white">
                                        <Image src={`${A}/Decision1-02.png`} alt="Initial UI Mockup" fill sizes="(max-width: 768px) 280px, 320px" quality={100} className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
                                        <ProConCard variant="insight" full>Placing the option at the top made it easier for people to spot while scanning. F-shaped reading patterns increase the chances of noticing sections at the top.</ProConCard>
                                        <ProConCard variant="insight" full>Providing only 2-3 choices helps users to make decisions faster.</ProConCard>
                                        <ProConCard variant="insight" full>While talking to users, some mentioned they rely on past searches to find videos. I kept the section to ensure they wouldn't feel confused.</ProConCard>
                                    </div>
                                </div>
                            </div>
                            <p className="text-body text-text-primary text-center w-full max-w-[1024px] mx-auto mt-4 font-semibold">Initially I started with an assumption that users want to find new content</p>
                        </GrayBox>

                        <div className="flex flex-col px-6 py-6 gap-3 ">
                            <BodyText>
                                But when I spoke to multiple users, I found a pattern: users arrived on this page with an intent—to find something. While I expected the "Trending" section to help users, after understanding this, "Trending" seemed to severely distract them.
                            </BodyText>
                            <BodyText>
                                A few new ideas surfaced: "Continue Watching," "Live," and "Watch Later"
                            </BodyText>
                        </div>

                        <GrayBox title="First Iteration" className="flex flex-col gap-8 p-8 md:p-12 " t b>
                            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl bg-white">
                                    <Image src={`${A}/Decision1-03.png`} alt="First Iteration" fill sizes="(max-width: 768px) 280px, 320px" quality={100} className="object-cover" />
                                </div>
                                <div className="flex flex-col gap-6 max-w-[400px]">
                                    <ProConCard variant="insight" full>The system helps users find remaining tasks, supporting the "Recognition rather than recall" principle. People don't have to remember what they left incomplete.</ProConCard>
                                    <ProConCard variant="insight" full>Users mentioned that time was an important factor. I added a "Time Left" label to help them quickly decide which videos they could watch now.</ProConCard>
                                    <ProConCard variant="insight" full>Top 90% of videos have attractive thumbnails. Showing them helps users remember not just the video but "why" they were watching it.</ProConCard>
                                </div>
                            </div>
                        </GrayBox>

                        <div className="flex flex-col px-6 py-6 gap-3">
                            <BodyText>While conducting tests, users actively noticed and interacted with the new "Continue watching," which helped them reach their result faster.</BodyText>
                        </div>

                        <GrayBox title="Second Iteration" className="flex flex-col gap-6 p-8 md:p-12 " t b>
                            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl bg-white">
                                    <Image src={`${A}/Decision1-05.png`} alt="Second Iteration" fill sizes="(max-width: 768px) 280px, 320px" quality={100} className="object-cover" />
                                </div>
                                <div className="flex flex-col gap-6 max-w-[400px]">
                                    <ProConCard variant="insight" full>Showing History above was an assumption I made thinking users would be focused on the search bar, so keeping it close would help them notice it.</ProConCard>
                                    <ProConCard variant="insight" full>As people might have more history, I added a "Show More" option to see more videos related to the search from history.</ProConCard>
                                </div>
                            </div>
                        </GrayBox>

                        <div className="flex flex-col px-6 py-6 gap-5 ">
                            <p className="font-h4 text-text-primary w-full max-w-[1024px] mx-auto">
                                One day, I was talking to a user, and she asked two questions that changed my course:
                            </p>
                            <ul className="list-disc flex flex-col gap-3 w-full max-w-[1024px] mx-auto">
                                <BodyText>"What if I am a new user or I don't have history related to the topic?"</BodyText>
                                <BodyText>"Why place the history section on top when all other apps like Spotify have suggestions at the bottom?"</BodyText>
                            </ul>
                            <BodyText>So I visited Spotify and I found something very useful!</BodyText>
                        </div>

                        <GrayBox title="Music Platforms" className="flex flex-col gap-8 p-8 md:p-12 " t b>
                            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl bg-white">
                                    <Image src={`${A}/Decision1-06.png`} alt="Spotify Analysis" fill sizes="(max-width: 768px) 280px, 320px" quality={100} className="object-cover" />
                                </div>
                                <div className="flex flex-col gap-6 max-w-[400px]">
                                    <ProConCard variant="insight" full>Not only was the section below the text suggestions, but it shows video suggestions based on query, not just history!</ProConCard>
                                    <div className="flex flex-col gap-2">
                                        <p className="font-label-lg text-text-secondary font-bold">Why text suggestions on top?</p>
                                        <p className="font-body-sm text-text-primary"><span className="font-bold">User expectation</span>: Users expect text suggestions near the search bar as they type. It also <span className="font-bold">helps with query refinement</span>, finishing typing faster.</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="font-label-lg text-text-secondary font-bold">Why not history?</p>
                                        <p className="font-body-sm text-text-primary">Current user intent is stronger than past searches. Users are on the search page to find something "now" that might be different from history.</p>
                                    </div>
                                </div>
                            </div>
                        </GrayBox>

                        <div className="flex flex-col w-full pb-8">
                            <div className="flex flex-col px-6 pt-8 gap-5 pb-4">
                                <div className="flex flex-col gap-3">
                                    <div className="flex self-start">
                                        <Badge variant="success">Final Design</Badge>
                                    </div>
                                    <Heading>Translation to Youtube</Heading>
                                </div>
                            </div>
                            <GrayBox className="flex flex-col gap-8 p-8 md:p-12" t b>
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="flex flex-col gap-6 max-w-[400px]">
                                        <ProConCard variant="insight" full>The suggestion just below the search bar helps users understand relationship to the query, following the Law of Common Regions.</ProConCard>
                                        <ProConCard variant="insight" full>Video suggestions based on user query and preferences help users adjust their query accordingly.</ProConCard>
                                    </div>
                                    <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl bg-white">
                                        <Image src={`${A}/Decision1-07.png`} alt="Final Translated Design" fill sizes="(max-width: 768px) 280px, 320px" quality={100} className="object-cover" />
                                    </div>
                                </div>
                            </GrayBox>

                            <div className="flex flex-col px-6 pt-6 gap-3">
                                <BodyText>Choosing this new layout seemed to help users subconsciously. While my user testing couldn't reveal a significant effect immediately, I believe on a larger scale this pattern reflects a major shift in user thinking.</BodyText>
                            </div>
                        </div>
                    </section>

                    <Hatching />

                    {/* Decision 2 */}
                    <section className="flex flex-col border-x border-t border-b border-border-default w-full">
                        <div className="flex flex-col px-6 py-8 gap-6 w-full border-b border-border-default">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <div className="flex self-start">
                                        <Badge variant="info">Decision 2</Badge>
                                    </div>
                                    <Heading>Why I had to iterate on the video card more than 3 times.</Heading>
                                </div>
                                <BodyText>Before moving forward, let’s see what current YouTube offers.</BodyText>
                            </div>
                        </div>

                        <GrayBox title="Current Design" className="flex flex-col gap-8 p-8 md:p-12" t b>
                            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                <div className="flex flex-col gap-4 w-full lg:w-[400px]">
                                    <div className="relative aspect-400/42 rounded-lg overflow-hidden shadow-sm">
                                        <Image src={`${A}/Decision2-01.png`} alt="Current Search Card 1" fill sizes="(max-width: 768px) 100vw, 400px" quality={100} className="object-cover" />
                                    </div>
                                    <div className="relative aspect-400/42 rounded-lg overflow-hidden shadow-sm">
                                        <Image src={`${A}/Decision2-02.png`} alt="Current Search Card 2" fill sizes="(max-width: 768px) 100vw, 400px" quality={100} className="object-cover" />
                                    </div>
                                    <div className="relative aspect-400/42 rounded-lg overflow-hidden shadow-sm">
                                        <Image src={`${A}/Decision2-03.png`} alt="Current Search Card 3" fill sizes="(max-width: 768px) 100vw, 400px" quality={100} className="object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
                                    <ProConCard variant="insight" full>Text here shows what will be searched, the arrow indicates it leads to a new page, and the magnifying glass indicates that it is a suggestion.</ProConCard>
                                    <ProConCard variant="insight" full>The small thumbnail image helps users remember what they were searching for or even identify the specific video.</ProConCard>
                                </div>
                            </div>
                        </GrayBox>

                        <div className="flex flex-col px-6 py-6 gap-3">
                            <BodyText>
                                These cards are designed to help users find what they’re looking for while searching, but many people tend to overlook them. <span className="font-bold">I noticed that people often had a fixed mindset—if one card felt unhelpful, they assumed the rest would be too.</span> This was because the cards seemed too similar to each other.
                            </BodyText>
                            <BodyText>
                                If a user is trying to recall something from a past search and everything looks identical, it becomes overwhelming and frustrating because they can’t quickly find what they need.
                            </BodyText>
                        </div>

                        <GrayBox title="Wireframes" className="flex flex-col gap-8 p-8 md:p-12 " t b>
                            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
                                    <ProConCard variant="insight" full>Many users remembered a video by its thumbnail, so I decided to incorporate it more prominently in the card design.</ProConCard>
                                </div>
                                <div className="flex flex-col gap-6 w-full lg:w-[400px]">
                                    <div className="relative w-full aspect-400/100 rounded-lg overflow-hidden shadow-lg border border-border-default">
                                        <Image src={`${A}/Decision2-04.png`} alt="Wireframe 1" fill sizes="(max-width: 768px) 100vw, 400px" quality={100} className="object-cover" />
                                    </div>
                                    <div className="relative w-full aspect-400/150 rounded-lg overflow-hidden shadow-lg border border-border-default">
                                        <Image src={`${A}/Decision2-05.png`} alt="Wireframe 2" fill sizes="(max-width: 768px) 100vw, 400px" quality={100} className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </GrayBox>

                        <div className="flex flex-col px-6 py-6 gap-3">
                            <BodyText>After talking to users, I found they made judgments about watching a video based on various factors such as Views, Time Left, Creator, etc. The challenge was how to show all this information without overwhelming them!</BodyText>
                            <BodyText>Creator name, thumbnail, and title had to be there always; I decided to use other elements based on context!</BodyText>
                        </div>

                        <GrayBox title="First Iteration" className="flex flex-col gap-8 p-8 md:p-12 " t b>
                            <div className="flex flex-col gap-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
                                        <ProConCard variant="insight" full>Giving the video card a lighter background helped users understand it was clickable, like a button.</ProConCard>
                                    </div>
                                    <div className="relative w-full lg:w-[500px] aspect-500/170 rounded-xl overflow-hidden shadow-md border border-border-default bg-white">
                                        <Image src={`${A}/Decision2-06.png`} alt="First Iteration UI A" fill sizes="(max-width: 768px) 100vw, 500px" quality={100} className="object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
                                        <ProConCard variant="insight" full>Information on the card, such as "Live" and "New Video," changes based on the specific context of the video.</ProConCard>
                                    </div>
                                    <div className="relative w-full lg:w-[500px] aspect-500/170 rounded-xl overflow-hidden shadow-md border border-border-default bg-white">
                                        <Image src={`${A}/Decision2-07.png`} alt="First Iteration UI B" fill sizes="(max-width: 768px) 100vw, 500px" quality={100} className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </GrayBox>

                        <div className="flex flex-col w-full pb-8">
                            <div className="flex flex-col px-6 pt-6 gap-5 pb-4">
                                <BodyText>Space between the cards gave each of them their own identity and distinction. I presented these cards to users again, but they were still confused. Why? It took too much time to understand the card. The reason? All the information felt "scattered" according to users.</BodyText>
                            </div>

                            <Divider />

                            <div className="flex flex-col">
                            <div className="flex px-6 py-4 self-start">
                                    <Badge variant="success">Final Design</Badge>
                                </div>
                            
                            <GrayBox className="flex flex-col gap-8 p-8 md:p-12" t b>
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="relative w-full lg:w-[500px] aspect-500/100 rounded-xl overflow-hidden shadow-xl border border-border-default bg-white">
                                        <Image src={`${A}/Decision2-08.png`} alt="Final Video Card Design" fill sizes="(max-width: 768px) 100vw, 500px" quality={100} className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
                                        <ProConCard variant="insight" full>I dug deeper and found that users had to move their attention from left to right constantly. I changed the location of the thumbnail to align everything, and that fixed it!</ProConCard>
                                    </div>
                                </div>
                            </GrayBox>

                            <div className="flex flex-col px-6 py-4 gap-3">
                                <BodyText>While this card version didn’t show all information at once, it had enough to help users make a decision and move forward quickly.</BodyText>
                            </div>
                            </div>
                        </div>
                    </section>

                    <Hatching height="h-12"/>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 05. USER STORIES ──                                                         */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col border-x border-t border-b border-border-default w-full">
                        <div className="flex flex-col px-6 py-8 gap-6 w-full border-b border-border-default">
                            <Heading>How users search better using new experience.</Heading>
                        </div>

                        {/* Story 1 */}
                        <div className="flex flex-col gap-6 w-full pb-8 border-b border-border-default">
                            <div className="flex flex-col px-6 pt-6 gap-5">
                                <div className="flex self-start">
                                    <Badge variant="info">User Story 1</Badge>
                                </div>
                                <SubHeading>Yash can’t find the relevant results!</SubHeading>
                                <BodyText>Yash has been preparing for upcoming exams and wants to learn about python lists. He tries to search, but the results are either not video or too old. So he uses filters.</BodyText>
                            </div>

                            <GrayBox title="Applying Filters" className="flex flex-col p-8 md:p-12" t b>
                                <div className="flex flex-wrap items-center justify-center w-full">
                                    {[1, 2, 3, 4].map((i) => (
                                        <React.Fragment key={i}>
                                            <div className="relative w-[140px] md:w-[180px] aspect-218/485 rounded-xl overflow-hidden shadow-lg shrink-0 border border-border-default bg-white">
                                                <Image src={`${A}/Story1-0${i}.png`} alt={`Applying Filters Step ${i}`} fill sizes="(max-width: 768px) 140px, 180px" quality={100} className="object-cover" />
                                            </div>
                                            {i < 4 && (
                                                <div className="hidden lg:flex relative w-[28px] h-[19px] shrink-0 items-center justify-center">
                                                    <Image src={`${A}/arrow.svg`} alt="arrow" fill sizes="28px" quality={100} className="object-contain" />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </GrayBox>

                            <div className="px-6 py-2">
                                <BodyText>As he observes old videos, he is frustrated but he discovers “date” filter in filter bar.</BodyText>
                            </div>

                            <GrayBox title="Finding the video" className="flex flex-col p-8 md:p-12" t b>
                                <div className="flex flex-wrap items-center justify-center w-full">
                                    {[5, 6, 7, 8].map((i) => (
                                        <React.Fragment key={i}>
                                            <div className="relative w-[140px] md:w-[180px] aspect-218/485 rounded-xl overflow-hidden shadow-lg shrink-0 border border-border-default bg-white">
                                                <Image src={`${A}/Story1-0${i}.png`} alt={`Finding Video Step ${i}`} fill sizes="(max-width: 768px) 140px, 180px" quality={100} className="object-cover" />
                                            </div>
                                            {i < 8 && (
                                                <div className="hidden lg:flex relative w-[28px] h-[19px] shrink-0 items-center justify-center">
                                                    <Image src={`${A}/arrow.svg`} alt="arrow" fill sizes="28px" quality={100} className="object-contain" />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </GrayBox>
                        </div>

                        {/* Story 2 */}
                        <div className="flex flex-col gap-6 w-full pb-8">
                            <div className="flex flex-col px-6 pt-6 gap-5">
                                <div className="flex self-start">
                                    <Badge variant="info">User Story 2</Badge>
                                </div>
                                <SubHeading>Saving Laxmi from missing Livestreams</SubHeading>
                                <BodyText>Laxmi wanted to see Figma Config but forgot it was today. She opens YouTube to casually watch something. Let’s see what happens.</BodyText>
                            </div>

                            <GrayBox title="Live Stream Pills" className="flex flex-col gap-8 p-8 md:p-12" t b>
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="flex flex-col md:flex-row gap-6 shrink-0 items-center">
                                        <div className="relative w-[180px] md:w-[218px] aspect-218/485 rounded-xl overflow-hidden shadow-lg border border-border-default bg-white">
                                            <Image src={`${A}/Story2-01.png`} alt="Live Stream Pill 1" fill sizes="(max-width: 768px) 180px, 218px" quality={100} className="object-cover" />
                                        </div>
                                        <div className="relative w-[180px] md:w-[218px] aspect-218/485 rounded-xl overflow-hidden shadow-lg border border-border-default bg-white">
                                            <Image src={`${A}/Story2-02.png`} alt="Live Stream Pill 2" fill sizes="(max-width: 768px) 180px, 218px" quality={100} className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 flex-1 max-w-[500px]">
                                        <ProConCard variant="insight" full>Laxmi notices that the multiple channels are live and remembers about Figma Config.</ProConCard>
                                        <ProConCard variant="insight" full>She quickly clicks on the “Live streams for you” section and starts browsing through the list of live streams.</ProConCard>
                                        <ProConCard variant="insight" full>She finds Figma Config, taps on it, which directly leads her to the stream.</ProConCard>
                                    </div>
                                </div>
                            </GrayBox>

                            <div className="px-6 pt-2">
                                <BodyText>This way YouTube live stream helps user to find their favourite livestreams faster.</BodyText>
                            </div>
                        </div>
                    </section>

                    <Hatching height="h-12"/>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 06. FINAL REFLECTIONS ──                                                    */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col border-x border-t border-b border-border-default w-full">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-8 w-full max-w-[1024px] mx-auto">
                                <div className="flex flex-col px-6 py-4 gap-5 w-full">
                                    <Heading>Building Scalable UI using style guide</Heading>
                                    <BodyText>I created a small style guide that was accompanied by Google’s Material Design Library in order to build the UI that suites YouTube.</BodyText>
                                    <div className="relative w-full aspect-1078/640 rounded-2xl overflow-hidden shadow-xl border border-border-default bg-white mt-1">
                                        <Image src={`${A}/UI-01.png`} alt="UI Style Guide" fill sizes="100vw" quality={100} className="object-cover" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-8 items-center py-4 overflow-hidden ">
                                        <div className="relative w-full lg:w-[40vw] aspect-2156/228 rounded-xl">
                                            <Image src={`${A}/UI-05.png`} alt="Auto Layout Card Example" fill sizes="(max-width: 768px) 100vw, 400px" quality={100} className="object-contain" />
                                        </div>
                                        <div className="flex-1 px-6 py-4">
                                            <BodyText>I used auto layout extensively to ensure consistency throughout various screen sizes. Autolayout made sure that the overall structure of the card was maintained while giving it flexibility to change the size. Moreover, using limits for width in combination with trim text helped me to make all the cards look consistent even with varying degrees of text quantity.</BodyText>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col px-6 py-4 gap-8">
                                    <BodyText>As each pill button has various states, I used components to implement them, with clearly defined properties. Using components, I created various states in which the search bar and filter bar could exist.</BodyText>
                                    <div className="relative w-full aspect-1037/105 rounded-xl overflow-hidden shadow-sm border border-border-default bg-white flex items-center">
                                        <Image src={`${A}/UI-02.png`} alt="Pill States" fill sizes="100vw" quality={100} className="object-contain p-4" />
                                    </div>
                                    
                                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center pt-4">
                                        <div className="relative w-full lg:w-[450px] aspect-426/453 rounded-2xl overflow-hidden shadow-lg border border-border-default bg-white">
                                            <Image src={`${A}/UI-03.png`} alt="Component Properties A" fill sizes="(max-width: 768px) 100vw, 450px" quality={100} className="object-cover" />
                                        </div>
                                        <div className="relative w-full lg:w-[450px] aspect-429/456 rounded-2xl overflow-hidden shadow-lg border border-border-default bg-white">
                                            <Image src={`${A}/UI-04.png`} alt="Component Properties B" fill sizes="(max-width: 768px) 100vw, 450px" quality={100} className="object-cover" />
                                        </div>
                                    </div>
                                    <BodyText>Clear nomenclature in components allowed me to implement the same component in various scenarios, saving hours of duplicate work.</BodyText>
                                </div>
                            </div>

                            <div className="border-y border-border-default px-6 py-4 flex flex-col gap-5 w-full max-w-[1024px] mx-auto">
                                <Heading>Future Scope of improving search</Heading>
                                <div className="flex flex-col gap-3">
                                    <BodyText>AI-assisted search can make discovery faster and more intent-driven. Predictive suggestions could anticipate queries, while adaptive filters refine results using viewing behavior, preferences, and context.</BodyText>
                                    <BodyText>The current filter system can be strengthened with advanced options such as duration, creator type, language, and recency. This allows users to narrow results quickly when the goal is specific.</BodyText>
                                    <BodyText>For power users, rapid access to history would significantly improve retrieval. Keyboard shortcuts or search modifiers like “:h” could instantly surface past searches and watched videos, reducing repetition and accelerating repeat tasks.</BodyText>
                                </div>
                            </div>

                            <div className="border-y border-border-default px-6 py-4 flex flex-col gap-5 w-full max-w-[1024px] mx-auto">
                                <Heading>Main takeaways</Heading>
                                <div className="flex flex-col gap-3">
                                    <BodyText>Usually I found myself struggling to find the why’s behind the actions of the user, during this project I understood that the “Why” is always fuelled by user’s intent and need. Understanding intent was the key to effective problem solving for users.</BodyText>
                                    <BodyText>A big mindset shift for me was moving away from sticking rigidly to a set of questions. In the past, that approach rarely gave me deep insights. Here, by focusing on themes instead of fixed questions, I was able to uncover deeper pain points more naturally.</BodyText>
                                    <BodyText>I always thought jumping to UI directly will give me more ideas and various cases, but in this project when I clearly wrote my hypothesis and sketched my ideas, I understood their importance and how validating ideas as wireframe is more economical and efficient as a designer.</BodyText>
                                </div>
                                <div className="pt-8">
                                    <Heading>Thank you!</Heading>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Divider />

                    {/* ── Footer ── */}
                    <Footer />
                </div>
            </FadeIn>
        </div>
    );
}