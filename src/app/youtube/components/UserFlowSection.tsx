"use client"

import Image from "next/image";
import ProConCard from "../../components/case-study/ProConCard";
import { BodyText, ActionIndicator } from "./YoutubeCaseStudyUI";

const A = "/assets/youtube";

export default function UserFlowSection() {
    return (
        <section className="flex flex-col gap-8 md:gap-12 w-full pt-16">
            <div className="flex flex-col gap-[16px] w-full items-start">
                <p className="font-geist font-bold text-text-primary text-h2-mobile sm:text-h2 leading-tight w-full">
                    How new YouTube search helps users to find a video with less effort
                </p>
                <p className="font-geist font-medium text-text-primary text-body-mobile sm:text-body leading-relaxed w-full">
                    Aman, a product designer, was leaving his office when he overheard his friends talking about a new Figma feature. It sounded exciting, but during his ride home he forgot what it was about. Later that evening, when he finally sat down to relax, he opened the YouTube to wind down. Let’s follow his journey of discovering through YouTube Search.
                </p>
            </div>

            <div className="border-3 border-outline-primary rounded-3xl md:rounded-[32px] w-full flex justify-center py-[40px] md:py-[60px] px-4 md:px-8 bg-white">
                <div className="flex flex-col items-center w-full max-w-[1000px] gap-0 relative">
                    {/* --- Step 1 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-text-blue text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                Aman opens YouTube. He notices a banner on top, which indicates that Figma is streaming. This reminds him of the buzz his friends where talking about. Curious he clicks on search to find what the new feature is.
                            </p>
                        </div>

                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-lg">
                            <Image src={`${A}/FlowImg-10.png`} alt="Discovery Banner" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>

                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <ProConCard variant="insight">
                                If Aman wants to watch Live Stream, he can just open the video with a single click.
                            </ProConCard>
                            <ProConCard variant="fact">
                                According to survey, 14 out of 20 people’s algorithm didn’t surface live streams in there feed due to which they missed it, causing frustration and sense of loss in users.
                            </ProConCard>
                        </div>
                    </div>

                    {/* Action 1 */}
                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                            <Image src={`${A}/Vector3.svg`} alt="" fill sizes="2px" className="object-cover" />
                        </div>
                        <ActionIndicator>User taps on Search Icon</ActionIndicator>
                    </div>

                    {/* --- Step 2 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-text-blue text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                Aman opens the search page, pauses for a moment and glances down to see if anything is useful
                            </p>
                        </div>

                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-lg">
                            <Image src={`${A}/FlowImg-09.png`} alt="Search Options" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>

                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <ProConCard variant="insight">
                                Continue watching allows Aman to view video he left without explicitly going to history to see them or recall their titles.
                            </ProConCard>
                            <ProConCard variant="fact">
                                A high percentage of “history” visits are due as people want to watch something they left earlier.
                            </ProConCard>
                            <ProConCard variant="insight">
                                Sections such as “Continue watching” and “Past searches” allow him to skim sections without wasting time reading content, if not required.
                            </ProConCard>
                            <ProConCard variant="insight">
                                I decided keep the “Past searches” a part of new experience as many users still used it to find videos from a few searches ago.
                            </ProConCard>
                        </div>
                    </div>

                    {/* Action 2 */}
                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                            <Image src={`${A}/Vector4.svg`} alt="" fill sizes="2px" className="object-cover" />
                        </div>
                        <ActionIndicator>Aman starts typing the phrase</ActionIndicator>
                    </div>

                    {/* --- Step 3 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                Focused on typing the phrase, he is unsure whether it will provide correct result or not. So he glances down....
                            </p>
                        </div>

                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-lg">
                            <Image src={`${A}/FlowImg-08.png`} alt="Predictive Suggestions" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>

                        <div className="flex flex-col gap-8 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <div className="flex flex-col gap-4">
                                <ProConCard variant="insight">
                                    While typing, Aman can go through suggestion to see if they can be of many help.
                                </ProConCard>
                                <ProConCard variant="fact">
                                    While suggestion weren’t much helpful on face value, according to users they helped them remember what they already have seen!
                                </ProConCard>
                            </div>
                            <div className="flex flex-col gap-4">
                                <ProConCard variant="insight">
                                    Video cards can provide quick access to that video, if users find what they require.
                                </ProConCard>
                                <ProConCard variant="fact">
                                    During user testing, a side effect of this card was that user were using it to evaluate their current query and modify it as per needed.
                                </ProConCard>
                            </div>
                        </div>
                    </div>

                    {/* Action 3 */}
                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                            <Image src={`${A}/Vector5.svg`} alt="" fill sizes="2px" className="object-cover" />
                        </div>
                        <ActionIndicator>User starts typing the new phrase</ActionIndicator>
                    </div>

                    {/* --- Step 4 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                He notices the results aren’t what he required, so he start to type a more specific query until he gets the right results.
                            </p>
                        </div>

                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-lg">
                            <Image src={`${A}/FlowImg-07.png`} alt="Refining Query" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>

                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <ProConCard variant="insight">
                                Only 2-3 videos ensure that the users don’t get too overwhelmed while scanning for results.
                            </ProConCard>
                            <ProConCard variant="insight">
                                This avoid choice overload in users mind, reducing cognitive load and helping user to make choices faster.
                            </ProConCard>
                        </div>
                    </div>

                    {/* Action 4 */}
                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px]">
                            <Image src={`${A}/Vector6.svg`} alt="" fill sizes="2px" className="object-cover" />
                        </div>
                        <ActionIndicator>Aman clicks Enter</ActionIndicator>
                    </div>

                    {/* --- Step 5 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                As soon as he clicks the search button, a list of shorts appear. He is quickly frustrated as he wants to watch a deep dive. So he attempt to change the query, just then he notices “Type” filter below search bar...
                            </p>
                        </div>

                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-lg">
                            <Image src={`${A}/FlowImg-06.png`} alt="Filter bar" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>

                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <ProConCard variant="insight">
                                Filters have arrow to indicate multiple options are present, this is inline with Jakob’s law.
                            </ProConCard>
                            <ProConCard variant="insight">
                                Allowing the other filter to bleed in was a choice to indicate that the list is horizontally scrollable.
                            </ProConCard>
                            <ProConCard variant="insight">
                                Placing filters close to search helps user understand that they help in searching subconsciously due to Law of common Regions induced by Law of Proximity.
                            </ProConCard>
                        </div>
                    </div>

                    {/* Action 5 */}
                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[85px]">
                            <Image src={`${A}/Vector7.svg`} alt="" fill sizes="85px" className="object-contain" />
                        </div>
                        <ActionIndicator>Aman clicks on “Type” Filter</ActionIndicator>
                    </div>

                    {/* --- Step 6 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                He clicks on “Type,” and a bottom sheet appears; it has many options. He scans from top to bottom & finds “Videos.” Happy, he chooses to apply the filter.
                            </p>
                        </div>

                        <div className="relative w-[280px] md:w-[480px] h-auto aspect-480/545 flex items-center justify-center  shrink-0">
                            <div className="relative w-[140px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden">
                                <Image src={`${A}/FlowImg-04.png`} alt="Filter Selection" fill sizes="(max-width: 768px) 140px, 245px" className="object-cover" />
                            </div>
                            <div className="relative w-[49px] h-[19px]">
                                <Image src={`${A}/arrow.svg`} alt="Filter Selection" fill sizes="49px" className="object-contain" />
                            </div>
                            <div className="relative w-[140px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden">
                                <Image src={`${A}/FlowImg-05.png`} alt="Filter Bottom Sheet" fill sizes="(max-width: 768px) 140px, 245px" className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <ProConCard variant="insight">
                                Bottom sheet ensure that choosing a option is near the thumb of the user and keeps the UI predictable
                            </ProConCard>
                            <ProConCard variant="insight">
                                Colour of button changes to help user understand that the state of the filter has changed.
                            </ProConCard>
                        </div>
                    </div>

                    {/* Action 6 */}
                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[39px]">
                            <Image src={`${A}/Vector8.svg`} alt="" fill sizes="39px" className="object-contain" />
                        </div>
                        <ActionIndicator>Aman sees results and decides to swipe for “unwatched” Filter</ActionIndicator>
                    </div>

                    {/* --- Step 7 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                He has searched for glass effects before, so he only wants to see videos that he hasn’t seen yet. He notices that filters are scrollable, so he scrolls and finds “Unwatched.”
                            </p>
                        </div>

                        <div className="relative w-[280px] md:w-[480px] h-auto aspect-480/545 flex flex-row items-center justify-center">
                            <div className="relative w-[140px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden">
                                <Image src={`${A}/FlowImg-03.png`} alt="Previous View" fill sizes="(max-width: 768px) 140px, 245px" className="object-cover" />
                            </div>
                            <div className="relative w-[49px] h-[19px]">
                                <Image src={`${A}/arrow.svg`} alt="Filter Selection" fill sizes="49px" className="object-contain" />
                            </div>
                            <div className="relative w-[140px] md:w-[245px] aspect-245/545 rounded-xl ">
                                <Image src={`${A}/FlowImg-02.png`} alt="Filtered Results" fill sizes="(max-width: 768px) 140px, 245px" className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <ProConCard variant="insight">
                                Changing appearance of option ensures user knows that it is active.
                            </ProConCard>
                            <ProConCard variant="fact">
                                During user interviews, I noticed that many people often forgot which filters they had applied, or whether those filters were still active. To make sure the system clearly reflects user actions, filters are now shown in a different state when applied.
                            </ProConCard>
                            <ProConCard variant="insight">
                                The “Filter” button hides, advance filters, allowing user to only user filter that are most important. This hides complexity allowing faster decision making.
                            </ProConCard>
                        </div>
                    </div>

                    {/* Action 7 */}
                    <div className="flex flex-col items-center justify-center py-8 relative w-full h-[120px] lg:h-[160px]">
                        <div className="absolute top-0 bottom-0 left-[60%] -translate-x-1/2 -z-10 w-[147px]">
                            <Image src={`${A}/Vector12.svg`} alt="" fill sizes="147px" className="object-contain" />
                        </div>
                        <ActionIndicator>Aman clicks on unwatched</ActionIndicator>
                    </div>

                    {/* --- Step 8 --- */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center lg:items-start gap-8 lg:gap-16 relative">
                        <div className="flex w-full justify-center lg:justify-end lg:max-w-[320px]">
                            <p className="font-geist font-semibold text-[#306192] text-label-lg-mobile sm:text-label-lg leading-snug w-full max-w-[283px]">
                                Finally, Aman has the result he wants, satisfied he open the second video to watch it!
                            </p>
                        </div>

                        <div className="relative w-[180px] md:w-[245px] aspect-245/545 rounded-xl overflow-hidden shrink-0 shadow-lg">
                            <Image src={`${A}/FlowImg-01.png`} alt="Final Satisfaction" fill sizes="(max-width: 768px) 180px, 245px" className="object-cover" />
                        </div>

                        <div className="flex flex-col gap-4 w-full justify-center lg:justify-start lg:max-w-[320px]">
                            <ProConCard variant="insight">
                                The label shows which option is active, so users do not have to remember their last choice and can stay aware of the system state.
                            </ProConCard>
                            <ProConCard variant="insight">
                                The ‘x’ button signals that tapping it will remove the applied filter, changing the state back to inactive.
                            </ProConCard>
                        </div>
                    </div>
                </div>
            </div>

            <BodyText>
                The new design helped Aman to find the content he required without need of extensive scrolling. Redesigning this journey was riddled with lot of questions and based on deep understanding of user behaviour. Many decision were taken based on what users said and did, Let’s view some of them below.
            </BodyText>
        </section>
    );
}
