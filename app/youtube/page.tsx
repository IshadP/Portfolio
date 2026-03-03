"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FadeIn from "../components/FadeIn";
import Badge from "../components/case-study/Badge"
import ProConCard from "../components/case-study/ProConCard";
import GrayBox from "../components/case-study/GrayBox";

/* ── Asset paths ── */
const A = "/assets/youtube";

/* ── Reusable sub-components ── */

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-geist-mono text-label-lg-mobile sm:text-label-lg text-text-tertiary">
            {children}
        </p>
    );
}

function BodyText({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-body-mobile sm:text-body text-text-primary w-full">
            {children}
        </p>
    );
}

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h3-mobile sm:text-h3 text-text-primary w-full">
            {children}
        </p>
    );
}

function Title({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h2-mobile sm:text-h2 text-text-primary w-full">
            {children}
        </p>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-h4-mobile sm:text-h4 text-text-primary w-full">
            {children}
        </p>
    );
}



function ActionIndicator({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white border-2 border-(--cs-red-main) px-4 py-2 rounded-full inline-flex self-center">
            <p className="font-geist font-medium text-(--cs-red-main) text-label-md-mobile sm:text-label-md">
                {children}
            </p>
        </div>
    );
}

export default function YouTubeCaseStudy() {
    return (
        <div className="bg-bg-primary relative">
            {/* ── Hero Section ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn>
                <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-8 px-4 pb-32">
                    {/* ── Navbar ── */}
                    <Navbar />

                    {/* ── YouTube Case Study Content Will Go Here ── */}
                    <div className="flex flex-col gap-8 md:gap-12 w-full min-h-[50vh]">
                        {/* ── Top Intro ── */}
                        <section className="flex flex-col gap-12 w-full">
                            {/* Headline */}
                            <Title>
                                Enhancing YouTube Search for Intent based search results.
                            </Title>

                            {/* Images Container */}
                            <div className="flex flex-col gap-6 w-full">
                                <div className="bg-white border-2 md:border-4 border-border-primary overflow-hidden flex items-center justify-center p-4 md:p-10 rounded-[20px] md:rounded-[30.8px] w-full min-h-[300px] md:min-h-[600px] relative">
                                    <div className="relative w-full max-w-[850px] aspect-850/500 flex items-center justify-center">
                                        {/* Images arranged with absolute positioning and rotations to match the design */}

                                        {/* Far Left (TitleImg-01) */}
                                        <div className="absolute left-[2%] md:left-[5%] top-[12%] w-[25%] md:w-[24.7%] aspect-[1/2.25] -rotate-[18.15deg] origin-center shadow-[0px_4px_32px_rgba(0,0,0,0.15)] rounded-[8px] md:rounded-[13px] overflow-hidden z-10 transition-transform hover:scale-105 duration-300">
                                            <Image src={`${A}/TitleImg-01.png`} alt="UI Screenshot 1" fill className="object-cover" />
                                        </div>

                                        {/* Center Left (TitleImg-03) */}
                                        <div className="absolute left-[23%] md:left-[28%] top-[2%] w-[28%] md:w-[27.8%] aspect-[1/2.27] -rotate-[4.17deg] origin-center shadow-[0px_4px_40px_rgba(0,0,0,0.2)] rounded-[8px] md:rounded-[13px] overflow-hidden z-30 transition-transform hover:scale-105 duration-300">
                                            <Image src={`${A}/TitleImg-03.png`} alt="UI Screenshot 3" fill className="object-cover" />
                                        </div>

                                        {/* Center Right (TitleImg-04) */}
                                        <div className="absolute right-[23%] md:right-[28%] top-[2%] w-[28%] md:w-[27.8%] aspect-[1/2.27] rotate-[4.98deg] origin-center shadow-[0px_4px_40px_rgba(0,0,0,0.2)] rounded-[8px] md:rounded-[13px] overflow-hidden z-20 transition-transform hover:scale-105 duration-300">
                                            <Image src={`${A}/TitleImg-04.png`} alt="UI Screenshot 4" fill className="object-cover" />
                                        </div>

                                        {/* Far Right (TitleImg-02) */}
                                        <div className="absolute right-[2%] md:right-[5%] top-[12%] w-[24%] md:w-[23%] aspect-[1/2.4] rotate-[18.15deg] origin-center shadow-[0px_4px_32px_rgba(0,0,0,0.15)] rounded-[8px] md:rounded-[13px] overflow-hidden z-10 transition-transform hover:scale-105 duration-300">
                                            <Image src={`${A}/TitleImg-02.png`} alt="UI Screenshot 2" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Metadata */}
                                <div className="flex flex-col sm:flex-row gap-4 md:gap-12 w-full text-body-mobile sm:text-body leading-normal pt-4">
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-geist font-bold text-text-tertiary text-label-md-mobile sm:text-label-md">Role</p>
                                        <p className="font-geist font-medium text-text-primary text-label-lg-mobile sm:text-label-lg">Product Designer</p>
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-geist font-bold text-text-tertiary text-label-md-mobile sm:text-label-md">Duration</p>
                                        <p className="font-geist font-medium text-text-primary text-label-lg-mobile sm:text-label-lg">5-6 weeks</p>
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-geist font-bold text-text-tertiary text-label-md-mobile sm:text-label-md">Type</p>
                                        <p className="font-geist font-medium text-text-primary text-label-lg-mobile sm:text-label-lg">Conceptual Project</p>
                                    </div>
                                </div>
                            </div>
                        </section>

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
                                    <div className="relative w-[180px] md:w-[245px] left-[0%] aspect-245/544 rounded-lg overflow-hidden border border-border-primary shadow-lg">
                                        <Image src={`${A}/problem-1.png`} alt="Initial Search UI" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2">

                                        <ProConCard variant="con">System forces user to search a query in order to see results</ProConCard>
                                        <ProConCard variant="con">No feedback is provided by system, in form of videos, to user for typing the correct query</ProConCard>
                                        <ProConCard variant="con">With the mic icon relocated, users may feel locked into typing and unaware that voice input is still an option.</ProConCard>

                                    </div>
                                </div>

                                {/* Right Screenshot (Search results with hidden filters) */}
                                <div className="flex flex-col gap-6  items-center w-full h-full">
                                    <div className="relative w-[180px] md:w-[245px] left-[0%] aspect-245/544 rounded-lg overflow-hidden border border-border-primary shadow-lg">
                                        <Image src={`${A}/problem-2.png`} alt="Search Results UI" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <ProConCard variant="con">Filters are hidden deep inside the UI, resulting in many people not knowing about them.</ProConCard>

                                        <ProConCard variant="con">System doesn’t recognise the user’s choices of filters, thus frustrating them</ProConCard>
                                    </div>

                                </div>
                            </GrayBox>
                        </section>

                        {/* ── User Flow Journey ── */}
                        <section className="flex flex-col gap-8 md:gap-12 w-full pt-16">
                            <div className="flex flex-col gap-[16px] w-full items-start" data-node-id="792:10726">
                                <p className="font-geist font-bold text-text-primary text-h2-mobile sm:text-h2 leading-tight w-full" data-node-id="792:10724">
                                    How new YouTube search helps users to find a video with less effort
                                </p>
                                <p className="font-geist font-medium text-text-primary text-body-mobile sm:text-body leading-relaxed w-full" data-node-id="792:10725">
                                    Aman, a product designer, was leaving his office when he overheard his friends talking about a new Figma feature. It sounded exciting, but during his ride home he forgot what it was about. Later that evening, when he finally sat down to relax, he opened the YouTube to wind down. Let’s follow his journey of discovering through YouTube Search.
                                </p>
                            </div>

                            <div className="border-2 border-border-primary rounded-3xl md:rounded-[32px] w-full flex justify-center py-[40px] md:py-[60px] px-4 md:px-8 bg-white" data-node-id="792:10361">
                                <div className="flex flex-col items-center w-full max-w-[1000px] gap-0 relative" data-node-id="792:10728">
                                    {/* --- Step 1 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10912">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10789">
                                                Aman opens YouTube. He notices a banner on top, which indicates that Figma is streaming. This reminds him of the buzz his friends where talking about. Curious he clicks on search to find what the new feature is.
                                            </p>
                                        </div>

                                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden shrink-0 shadow-lg" data-node-id="792:10788">
                                            <Image src={`${A}/FlowImg-10.png`} alt="Discovery Banner" fill className="object-cover" />
                                        </div>

                                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="820:3553">
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10790">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    If Aman wants to watch Live Stream, he can just open the video with a single click.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 rounded-xl p-4 w-full self-start" data-node-id="792:10796">
                                                <p className="font-geist font-medium text-text-primary text-label-md-mobile sm:text-label-md leading-relaxed">
                                                    According to survey, 14 out of 20 people’s algorithm didn’t surface live streams in there feed due to which they missed it, causing frustration and sense of loss in users.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action 1 */}
                                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]" data-node-id="793:10927">
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                                            <Image src={`${A}/Vector3.svg`} alt="" fill className="object-cover" />
                                        </div>
                                        <div className="bg-white border-[2.5px] border-(--cs-red-main) rounded-full px-4 py-1 z-10" data-node-id="792:10781">
                                            <p className="font-geist font-medium text-black text-label-sm-mobile sm:text-label-sm">User taps on Search Icon</p>
                                        </div>
                                    </div>

                                    {/* --- Step 2 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10913">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10768">
                                                Aman opens the search page, pauses for a moment and glances down to see if anything is useful
                                            </p>
                                        </div>

                                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden shrink-0 shadow-lg" data-node-id="792:10730">
                                            <Image src={`${A}/FlowImg-09.png`} alt="Search Options" fill className="object-cover" />
                                        </div>

                                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="810:11888">
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10744">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Continue watching allows Aman to view video he left without explicitly going to history to see them or recall their titles.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 rounded-xl p-4 w-full self-start" data-node-id="820:3558">
                                                <p className="font-geist font-medium text-text-primary text-[14px] leading-relaxed">
                                                    A high percentage of “history” visits are due as people want to watch something they left earlier.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start mt-4" data-node-id="792:10742">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Sections such as “Continue watching” and “Past searches” allow him to skim sections without wasting time reading content, if not required.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10743">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    I decided keep the “Past searches” a part of new experience as many users still used it to find videos from a few searches ago.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action 2 */}
                                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]" data-node-id="793:10926">
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                                            <Image src={`${A}/Vector4.svg`} alt="" fill className="object-cover" />
                                        </div>
                                        <div className="bg-white border-[2.5px] border-(--cs-red-main) rounded-full px-4 py-1 z-10" data-node-id="792:10782">
                                            <p className="font-geist font-medium text-black text-label-sm-mobile sm:text-label-sm">Aman starts typing the phrase</p>
                                        </div>
                                    </div>

                                    {/* --- Step 3 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10914">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10769">
                                                Focused on typing the phrase, he is unsure whether it will provide correct result or not. So he glances down....
                                            </p>
                                        </div>

                                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden shrink-0 shadow-lg" data-node-id="792:10732">
                                            <Image src={`${A}/FlowImg-08.png`} alt="Predictive Suggestions" fill className="object-cover" />
                                        </div>

                                        <div className="flex flex-col gap-8 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="820:3564">
                                            <div className="flex flex-col gap-4">
                                                <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10745">
                                                    <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                        While typing, Aman can go through suggestion to see if they can be of many help.
                                                    </p>
                                                </div>
                                                <div className="bg-grey-10 rounded-xl p-4 w-full self-start" data-node-id="792:10904">
                                                    <p className="font-geist font-medium text-text-primary text-[14px] leading-relaxed">
                                                        While suggestion weren’t much helpful on face value, according to users they helped them remember what they already have seen!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10746">
                                                    <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                        Video cards can provide quick access to that video, if users find what they require.
                                                    </p>
                                                </div>
                                                <div className="bg-grey-10 rounded-xl p-4 w-full self-start" data-node-id="792:10906">
                                                    <p className="font-geist font-medium text-text-primary text-[14px] leading-relaxed">
                                                        During user testing, a side effect of this card was that user were using it to evaluate their current query and modify it as per needed.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action 3 */}
                                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]" data-node-id="793:10925">
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                                            <Image src={`${A}/Vector5.svg`} alt="" fill className="object-cover" />
                                        </div>
                                        <div className="bg-white border-[2.5px] border-(--cs-red-main) rounded-full px-4 py-1 z-10" data-node-id="792:10783">
                                            <p className="font-geist font-medium text-black text-label-sm-mobile sm:text-label-sm">User starts typing the new phrase</p>
                                        </div>
                                    </div>

                                    {/* --- Step 4 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10915">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10770">
                                                He notices the results aren’t what he required, so he start to type a more specific query until he gets the right results.
                                            </p>
                                        </div>

                                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden shrink-0 shadow-lg" data-node-id="792:10741">
                                            <Image src={`${A}/FlowImg-07.png`} alt="Refining Query" fill className="object-cover" />
                                        </div>

                                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="820:3566">
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10747">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Only 2-3 videos ensure that the users don’t get too overwhelmed while scanning for results.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 rounded-xl p-4 w-full self-start" data-node-id="792:10908">
                                                <p className="font-geist font-medium text-text-primary text-[14px] leading-relaxed">
                                                    This avoid choice overload in users mind, reducing cognitive load and helping user to make choices faster.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action 4 */}
                                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]" data-node-id="793:10924">
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                                            <Image src={`${A}/Vector6.svg`} alt="" fill className="object-cover" />
                                        </div>
                                        <div className="bg-white border-[2.5px] border-(--cs-red-main) rounded-full px-4 py-1 z-10" data-node-id="792:10784">
                                            <p className="font-geist font-medium text-black text-label-sm-mobile sm:text-label-sm">Aman clicks Enter</p>
                                        </div>
                                    </div>

                                    {/* --- Step 5 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10916">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10792">
                                                As soon as he clicks the search button, a list of shorts appear. He is quickly frustrated as he wants to watch a deep dive. So he attempt to change the query, just then he notices “Type” filter below search bar...
                                            </p>
                                        </div>

                                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden shrink-0 shadow-lg" data-node-id="792:10735">
                                            <Image src={`${A}/FlowImg-06.png`} alt="Filter bar" fill className="object-cover" />
                                        </div>

                                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="820:3568">
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10754">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Filters have arrow to indicate multiple options are present, this is inline with Jakob’s law.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10749">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Allowing the other filter to bleed in was a choice to indicate that the list is horizontally scrollable.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10748">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Placing filters close to search helps user understand that they help in searching subconsciously due to Law of common Regions induced by Law of Proximity.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action 5 */}
                                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]" data-node-id="793:10923">
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[85px]">
                                            <Image src={`${A}/Vector7.svg`} alt="" fill className="object-contain" />
                                        </div>
                                        <div className="bg-white border-[2.5px] border-(--cs-red-main) rounded-full px-4 py-1 z-10" data-node-id="792:10785">
                                            <p className="font-geist font-medium text-black text-label-sm-mobile sm:text-label-sm">Aman clicks on “Type” Filter</p>
                                        </div>
                                    </div>

                                    {/* --- Step 6 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10917">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10793">
                                                He clicks on “Type,” and a bottom sheet appears; it has many options. He scans from top to bottom & finds “Videos.” Happy, he chooses to apply the filter.
                                            </p>
                                        </div>

                                        <div className="relative w-[280px] md:w-[480px] h-auto aspect-480/545 flex items-center justify-center shrink-0" data-node-id="820:3570">
                                            <div className="relative w-[140px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden border border-border-primary shadow-xl z-10 -translate-x-[20%]" data-node-id="792:10737">
                                                <Image src={`${A}/FlowImg-04.png`} alt="Filter Selection" fill className="object-cover" />
                                            </div>
                                            <div className="absolute z-15 w-[24px] h-[24px] right-[40%] hidden lg:block">
                                                <Image src={`${A}/Vector11.svg`} alt="" fill className="object-contain" />
                                            </div>
                                            <div className="absolute right-0 bottom-0 w-[100px] md:w-[166px] aspect-166/370 rounded-[13px] overflow-hidden border border-border-primary shadow-2xl z-20" data-node-id="792:10738">
                                                <Image src={`${A}/FlowImg-05.png`} alt="Filter Bottom Sheet" fill className="object-cover" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="820:3571">
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10794">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Bottom sheet ensure that choosing a option is near the thumb of the user and keeps the UI predictable
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10795">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Colour of button changes to help user understand that the state of the filter has changed.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action 6 */}
                                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]" data-node-id="793:10922">
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[39px]">
                                            <Image src={`${A}/Vector8.svg`} alt="" fill className="object-contain" />
                                        </div>
                                        <div className="bg-white border-[2.5px] border-(--cs-red-main) rounded-full px-4 py-1 z-10" data-node-id="792:10786">
                                            <p className="font-geist font-medium text-black text-label-sm-mobile sm:text-label-sm">Aman sees results and decides to swipe for “unwatched” Filter</p>
                                        </div>
                                    </div>

                                    {/* --- Step 7 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10918">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10771">
                                                He has searched for glass effects before, so he only wants to see videos that he hasn’t seen yet. He notices that filters are scrollable, so he scrolls and finds “Unwatched.”
                                            </p>
                                        </div>

                                        <div className="relative w-[280px] md:w-[480px] h-auto aspect-480/545 flex items-center justify-center shrink-0" data-node-id="820:3573">
                                            <div className="relative w-[140px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden border border-border-primary shadow-xl z-20 translate-x-[20%]" data-node-id="792:10736">
                                                <Image src={`${A}/FlowImg-02.png`} alt="Filtered Results" fill className="object-cover" />
                                            </div>
                                            <div className="absolute z-15 w-[47px] h-[47px] left-[35%] hidden lg:block">
                                                <Image src={`${A}/Vector10.svg`} alt="" fill className="object-contain" />
                                            </div>
                                            <div className="absolute left-0 bottom-0 w-[100px] md:w-[166px] aspect-166/370 rounded-[13px] overflow-hidden border border-border-primary shadow-2xl z-10 scale-90 opacity-80" data-node-id="792:10739">
                                                <Image src={`${A}/FlowImg-03.png`} alt="Previous View" fill className="object-cover" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="820:3575">
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10750">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    Changing appearance of option ensures user knows that it is active.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 rounded-xl p-4 w-full self-start" data-node-id="792:10910">
                                                <p className="font-geist font-medium text-text-primary text-[14px] leading-relaxed">
                                                    During user interviews, I noticed that many people often forgot which filters they had applied, or whether those filters were still active. To make sure the system clearly reflects user actions, filters are now shown in a different state when applied.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start mt-4" data-node-id="792:10753">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    The “Filter” button hides, advance filters, allowing user to only user filter that are most important. This hides complexity allowing faster decision making.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action 7 */}
                                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]" data-node-id="793:10920">
                                        <div className="absolute top-0 bottom-0 left-[60%] -translate-x-1/2 -z-10 w-[147px]">
                                            <Image src={`${A}/Vector12.svg`} alt="" fill className="object-contain" />
                                        </div>
                                        <div className="bg-white border-[2.5px] border-(--cs-red-main) rounded-full px-4 py-1 z-10" data-node-id="792:10787">
                                            <p className="font-geist font-medium text-black text-label-sm-mobile sm:text-label-sm">Aman clicks on unwatched</p>
                                        </div>
                                    </div>

                                    {/* --- Step 8 --- */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative" data-node-id="793:10919">
                                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]" data-node-id="792:10772">
                                                Finally, Aman has the result he wants, satisfied he open the second video to watch it!
                                            </p>
                                        </div>

                                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-[13px] overflow-hidden shrink-0 shadow-lg" data-node-id="792:10740">
                                            <Image src={`${A}/FlowImg-01.png`} alt="Final Satisfaction" fill className="object-cover" />
                                        </div>

                                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]" data-node-id="820:3576">
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10751">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    The label shows which option is active, so users do not have to remember their last choice and can stay aware of the system state.
                                                </p>
                                            </div>
                                            <div className="bg-grey-10 border-2 border-border-primary rounded-lg p-3 w-full self-start" data-node-id="792:10752">
                                                <p className="font-geist font-medium text-text-primary text-label-sm-mobile sm:text-label-sm">
                                                    The ‘x’ button signals that tapping it will remove the applied filter, changing the state back to inactive.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ── Design Decisions Section ── */}
                        <section className="flex flex-col">

                        </section>

                    </div>

                    {/* ── Footer ── */}

                    <Footer />
                </div>
            </FadeIn>
        </div>
    );
}
