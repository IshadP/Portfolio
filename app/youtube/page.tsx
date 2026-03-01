import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FadeIn from "../components/FadeIn";
import Badge from "../components/case-study/Badge";
import AnnotationCard from "../components/case-study/AnnotationCard";
import ProConCard from "../components/case-study/ProConCard";

/* ── Asset paths ── */
const A = "/assets/youtube";

/* ── Reusable sub-components ── */

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-(family-name:--font-geist-mono) font-semibold leading-[1.16] text-text-tertiary text-xl tracking-[-0.24px]">
            {children}
        </p>
    );
}

function BodyText({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-(family-name:--font-geist) font-medium text-text-primary text-xl  w-full">
            {children}
        </p>
    );
}

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-(family-name:--font-geist) font-bold text-text-primary text-2xl md:text-3xl w-full">
            {children}
        </p>
    );
}

function Title({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-(family-name:--font-geist) font-bold text-text-primary text-3xl md:text-4xl w-full">
            {children}
        </p>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-(family-name:--font-geist) font-bold text-text-primary text-xl md:text-2xl w-full">
            {children}
        </p>
    );
}

function GrayShowcase({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-[#f5f5f5] overflow-hidden rounded-3xl md:rounded-4xl w-full ${className}`}>
            {children}
        </div>
    );
}

function ActionIndicator({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white border-2 border-(--cs-red-main) px-4 py-2 rounded-full inline-flex self-center">
            <p className="font-(family-name:--font-geist) font-medium text-(--cs-red-main) text-sm md:text-base">
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
                <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-8 px-4 pt-8 pb-32">
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
                                <div className="bg-white border-2 md:border-4 border-[#ddd] overflow-hidden flex items-center justify-center p-4 md:p-10 rounded-[20px] md:rounded-[30.8px] w-full min-h-[300px] md:min-h-[600px] relative">
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
                                <div className="flex flex-col sm:flex-row gap-4 md:gap-12 w-full text-base md:text-[24px] leading-normal pt-4">
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-(family-name:--font-geist) font-bold text-[#b7b7b7]">Role</p>
                                        <p className="font-(family-name:--font-geist) font-medium text-[#333]">Product Designer</p>
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-(family-name:--font-geist) font-bold text-[#b7b7b7]">Duration</p>
                                        <p className="font-(family-name:--font-geist) font-medium text-[#333]">5-6 weeks</p>
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="font-(family-name:--font-geist) font-bold text-[#b7b7b7]">Type</p>
                                        <p className="font-(family-name:--font-geist) font-medium text-[#333]">Conceptual Project</p>
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
                            <GrayShowcase className="flex flex-col md:flex-row p-4 md:p-12 gap-8 md:gap-16">
                                {/* Left Screenshot (Initial Search) */}
                                <div className="flex flex-col gap-6  items-center w-full h-full">
                                    <div className="relative w-[180px] md:w-[245px] left-[0%] aspect-245/544 rounded-lg overflow-hidden border border-[#8e8e8e] shadow-lg">
                                        <Image src={`${A}/problem-1.png`} alt="Initial Search UI" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2">

                                        <AnnotationCard>System forces user to search a query in order to see results</AnnotationCard>
                                        <AnnotationCard>No feedback is provided by system, in form of videos, to user for typing the correct query</AnnotationCard>
                                        <AnnotationCard>With the mic icon relocated, users may feel locked into typing and unaware that voice input is still an option.</AnnotationCard>

                                    </div>
                                </div>

                                {/* Right Screenshot (Search results with hidden filters) */}
                                <div className="flex flex-col gap-6  items-center w-full h-full">
                                    <div className="relative w-[180px] md:w-[245px] left-[0%] aspect-245/544 rounded-lg overflow-hidden border border-[#8e8e8e] shadow-lg">
                                        <Image src={`${A}/problem-2.png`} alt="Search Results UI" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <AnnotationCard>Filters are hidden deep inside the UI, resulting in many people not knowing about them.</AnnotationCard>

                                        <AnnotationCard>System doesn’t recognise the user’s choices of filters, thus frustrating them</AnnotationCard>
                                    </div>

                                </div>
                            </GrayShowcase>
                        </section>

                        {/* ── User Flow Journey ── */}
                        <section className="flex flex-col gap-8 md:gap-12 w-full pt-16">
                            <div className="flex flex-col gap-4 w-full">
                                <Heading>How new YouTube search helps users to find a video with less effort</Heading>
                                <BodyText>
                                    Aman, a product designer, was leaving his office when he overheard his friends talking about a new Figma feature. It sounded exciting, but during his ride home he forgot what it was about. Later that evening, when he finally sat down to relax, he opened the YouTube to wind down. Let’s follow his journey of discovering through YouTube Search.
                                </BodyText>
                            </div>

                            <GrayShowcase className="flex flex-col items-center py-12 md:py-24 px-4 md:px-12 gap-16 md:gap-24 bg-white border-2 border-[#ddd]">
                                {/* Step 1: Banner */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="flex flex-col gap-6 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            Aman opens YouTube. He notices a banner on top, which indicates that Figma is streaming. This reminds him of the buzz his friends where talking about. Curious he clicks on search to find what the new feature is.
                                        </p>
                                        <ProConCard variant="insight">
                                            According to survey, 14 out of 20 people’s algorithm didn’t surface live streams in there feed which frustrated them if they wanted to catch it live.
                                        </ProConCard>
                                    </div>
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl shrink-0">
                                        <Image src={`${A}/FlowImg-10.png`} alt="Discovery Banner" fill className="object-cover" />
                                    </div>
                                </div>

                                <ActionIndicator>User taps on Search Icon</ActionIndicator>

                                {/* Step 2: Search Page Sections */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl shrink-0">
                                        <Image src={`${A}/FlowImg-09.png`} alt="Search Options" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            Aman opens the search page, pauses for a moment and glances down to see if anything is useful
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <AnnotationCard>Aman can view what he left incomplete, saving him pain to find it later.</AnnotationCard>
                                            <AnnotationCard>Sections help him to understand what he might find in that section allowing him to focus on task at hand.</AnnotationCard>
                                            <AnnotationCard>Many user did use previous searches for quick access to past queries.</AnnotationCard>
                                        </div>
                                    </div>
                                </div>

                                <ActionIndicator>Aman starts typing the phrase</ActionIndicator>

                                {/* Step 3: Predictive Suggestions */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="flex flex-col gap-6 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            Focused on typing the phrase, he is unsure whether it will provide correct result or not. So he glances down....
                                        </p>
                                        <ProConCard variant="insight">
                                            While suggestion weren’t much helpful on face value, according to users they helped them remember what they already have seen!
                                        </ProConCard>
                                        <ProConCard variant="insight">
                                            During user testing, a side effect of this card was that user were using it to evaluate their current query and modify it as per needed.
                                        </ProConCard>
                                    </div>
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl shrink-0">
                                        <Image src={`${A}/FlowImg-08.png`} alt="Predictive Suggestions" fill className="object-cover" />
                                    </div>
                                </div>

                                <ActionIndicator>User starts typing the new phrase</ActionIndicator>

                                {/* Step 4: Refining Query */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl shrink-0">
                                        <Image src={`${A}/FlowImg-07.png`} alt="Refining Query" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-6 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            He notices the results aren’t what he required, so he start to type a more specific query until he gets the right results.
                                        </p>
                                        <ProConCard variant="insight">
                                            Only 2-3 videos ensure that the users don’t get too overwhelmed while scanning for results. This avoid choice overload in users mind, reducing cognitive load and helping user to make choices faster.
                                        </ProConCard>
                                    </div>
                                </div>

                                <ActionIndicator>Aman clicks Enter</ActionIndicator>

                                {/* Step 5: Filter Bar Visibility */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="flex flex-col gap-6 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            As soon as he clicks the search button, a list of shorts appear. He is quickly frustrated as he wants to watch a deep dive. So he attempt to change the query, just then he notices “Type” filter below search bar...
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <AnnotationCard>Some part of next filter is visible, which conveys that more options are avaliable.</AnnotationCard>
                                            <AnnotationCard>If users couldn’t find what they require, they are mostly likely to click on search bar again. Having filter close helps them gain more visibility.</AnnotationCard>
                                            <AnnotationCard>Filters might have multiple options, a arrow indicates that more than one option are present.</AnnotationCard>
                                        </div>
                                    </div>
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl shrink-0">
                                        <Image src={`${A}/FlowImg-06.png`} alt="Filter Entry" fill className="object-cover" />
                                    </div>
                                </div>

                                <ActionIndicator>Aman clicks on “Type” Filter</ActionIndicator>

                                {/* Step 6: Bottom Sheet Filter */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="relative w-[360px] md:w-[480px] aspect-480/544 flex items-center justify-center shrink-0">
                                        <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl z-10 translate-x-[-20%]">
                                            <Image src={`${A}/FlowImg-04.png`} alt="Filter Selection" fill className="object-cover" />
                                        </div>
                                        <div className="absolute right-0 bottom-0 w-[120px] md:w-[200px] aspect-200/400 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-2xl z-20">
                                            <Image src={`${A}/FlowImg-05.png`} alt="Filter Bottom Sheet" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            He clicks on “Type,” and a bottom sheet appears; it has many options. He scans from top to bottom & finds “Videos.” Happy, he chooses to apply the filter.
                                        </p>
                                        <ProConCard variant="insight">
                                            Bottom sheet ensure that choosing a option is near the thumb of the user and keeps the UI predictable.
                                        </ProConCard>
                                        <ProConCard variant="insight">
                                            Colour of button changes to help user understand that the state of the filter has changed.
                                        </ProConCard>
                                    </div>
                                </div>

                                <ActionIndicator>Aman sees results and decides to swipe for “unwatched” Filter</ActionIndicator>

                                {/* Step 7: Scrollable & Visual Filters */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="flex flex-col gap-6 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            He has searched for glass effects before, so he only wants to see videos that he hasn’t seen yet. He notices that filters are scrollable, so he scrolls and finds “Unwatched.”
                                        </p>
                                        <ProConCard variant="insight">
                                            During user interviews, I noticed that many people often forgot which filters they had applied, or whether those filters were still active. To make sure the system clearly reflects user actions, filters are now shown in a different state when applied.
                                        </ProConCard>
                                        <AnnotationCard>Changing appearance of option ensures user knows that it is active.</AnnotationCard>
                                        <AnnotationCard>The “More” button keeps the interface simple by showing only the most important filters upfront.</AnnotationCard>
                                    </div>
                                    <div className="relative w-[360px] md:w-[480px] aspect-480/544 flex items-center justify-center shrink-0">
                                        <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl z-20 translate-x-[20%]">
                                            <Image src={`${A}/FlowImg-02.png`} alt="Filtered Results" fill className="object-cover" />
                                        </div>
                                        <div className="absolute left-0 bottom-0 w-[120px] md:w-[200px] aspect-200/400 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-2xl z-10 scale-90 opacity-80">
                                            <Image src={`${A}/FlowImg-03.png`} alt="Previous View" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <ActionIndicator>Aman clicks on unwatched</ActionIndicator>

                                {/* Step 8: Final Results */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1000px]">
                                    <div className="relative w-[180px] md:w-[245px] aspect-245/544 rounded-[13px] overflow-hidden border border-[#8e8e8e] shadow-xl shrink-0">
                                        <Image src={`${A}/FlowImg-01.png`} alt="Final Satisfaction" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-6 flex-1">
                                        <p className="font-bold text-(--cs-blue-main) text-xl md:text-2xl leading-snug">
                                            Finally, Aman has the result he wants, satisfied he open the second video to watch it!
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <AnnotationCard>The label shows which option is active, so users do not have to remember their last choice.</AnnotationCard>
                                            <AnnotationCard>The ‘x’ button signals that tapping it will remove the applied filter.</AnnotationCard>
                                        </div>
                                    </div>
                                </div>
                            </GrayShowcase>
                        </section>
                    </div>

                    {/* ── Footer ── */}
                    <Footer />
                </div>
            </FadeIn>
        </div>
    );
}
