"use client"

import Image from "next/image";
import Badge from "../../components/case-study/Badge";
import GrayBox from "../../components/case-study/GrayBox";
import ProConCard from "../../components/case-study/ProConCard";
import { Heading, BodyText } from "./YoutubeCaseStudyUI";

const A = "/assets/youtube";

export default function DesignDecisionSection() {
    return (
        <section className="flex flex-col gap-4 md:gap-12 w-full pt-16">
            <Heading>Decisions that reshaped the YouTube experience.</Heading>
            {/* --- Decision 1 --- */}
            <div className="flex flex-col gap-4 md:gap-12 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex self-start">
                        <Badge variant="blue" icon="target">Decision 1</Badge>
                    </div>
                    <Heading>How I accounted for user intent in order to customise search for them</Heading>
                    <BodyText>
                        I noticed something interesting: people spent less than two seconds on this page. Why? Because they start typing as soon as they enter the page. There are two actions that users perform—either they type the phrase to search or they select from past searches. But this page was the effective start of a journey, yet it lacked basic assistance to help users.
                    </BodyText>
                </div>

                {/* Iteration: Initial Idea */}
                <GrayBox title="Initial Idea" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        <div className="flex flex-col gap-6 w-full lg:w-[220px]">
                            <ProConCard variant="insight">
                                Many users expressed that they remember/judge a video by visual detail. So I decided to keep thumbnails to help them.
                            </ProConCard>
                            <ProConCard variant="insight">
                                While showcasing the wireframes, many people asked, "How will I know what this is?" This feedback made me change my decision and include the section on the page.
                            </ProConCard>
                        </div>
                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                            <Image src={`${A}/Decision1-01.png`} alt="Initial Wireframe" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                        </div>
                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                            <Image src={`${A}/Decision1-02.png`} alt="Initial UI Mockup" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-6 w-full lg:w-[220px]">
                            <ProConCard variant="insight">
                                Placing the option at the top made it easier for people to spot while scanning. F-shaped reading patterns increase the chances of noticing sections at the top.
                            </ProConCard>
                            <ProConCard variant="insight">
                                Providing only 2-3 choices helps users to make decisions faster.
                            </ProConCard>
                            <ProConCard variant="insight">
                                While talking to users, some mentioned they rely on past searches to find videos. I kept the section to ensure they wouldn't feel confused.
                            </ProConCard>
                        </div>
                    </div>
                    <p className="text-label-md text-text-secondary text-center">
                        Initially I started with an assumption that users want to find new content
                    </p>
                </GrayBox>

                <div className="flex flex-col gap-6 w-full">
                    <BodyText>
                        But when I spoke to multiple users, I found a pattern: users arrived on this page with an intent—to find something. While I expected the "Trending" section to help users, after understanding this, "Trending" seemed to severely distract them.
                    </BodyText>
                    <BodyText>
                        A few new ideas surfaced: "Continue Watching," "Live," and "Watch Later"
                    </BodyText>
                </div>

                {/* Iteration: First Iteration */}
                <GrayBox title="First Iteration" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                            <Image src={`${A}/Decision1-03.png`} alt="First Iteration" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-6 max-w-[400px]">
                            <ProConCard variant="insight">
                                The system helps users find remaining tasks, supporting the "Recognition rather than recall" principle. People don't have to remember what they left incomplete.
                            </ProConCard>
                            <ProConCard variant="insight">
                                Users mentioned that time was an important factor. I added a "Time Left" label to help them quickly decide which videos they could watch now.
                            </ProConCard>
                            <ProConCard variant="insight">
                                Top 90% of videos have attractive thumbnails. Showing them helps users remember not just the video but "why" they were watching it.
                            </ProConCard>
                        </div>
                    </div>
                </GrayBox>

                <div className="flex flex-col gap-6 w-full">
                    <BodyText>
                        While conducting tests, users actively noticed and interacted with the new "Continue watching," which helped them reach their result faster.
                    </BodyText>
                </div>

                {/* Iteration: Second Iteration */}
                <GrayBox title="Second Iteration" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                            <Image src={`${A}/Decision1-05.png`} alt="Second Iteration" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-6 max-w-[400px]">
                            <ProConCard variant="insight">
                                Showing History above was an assumption I made thinking users would be focused on the search bar, so keeping it close would help them notice it.
                            </ProConCard>
                            <ProConCard variant="insight">
                                As people might have more history, I added a "Show More" option to see more videos related to the search from history.
                            </ProConCard>
                        </div>
                    </div>
                </GrayBox>

                <div className="flex flex-col gap-6 w-full">
                    <p className="text-body font-medium text-text-primary">
                        One day, I was talking to a user, and she asked two questions that changed my course:
                    </p>
                    <ul className="list-disc pl-6 flex flex-col gap-3">
                        <li className="text-body text-text-primary">"What if I am a new user or I don't have history related to the topic?"</li>
                        <li className="text-body text-text-primary">"Why place the history section on top when all other apps like Spotify have suggestions at the bottom?"</li>
                    </ul>
                    <BodyText>So I visited Spotify and I found something very useful!</BodyText>
                </div>

                <div className="flex self-start">
                    <Badge variant="green" icon="check">Final Design</Badge>
                </div>

                {/* Iteration: Music Platforms */}
                <GrayBox title="Music Platforms" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-cente justify-center">
                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                            <Image src={`${A}/Decision1-06.png`} alt="Spotify Analysis" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-6 max-w-[400px]">
                            <ProConCard variant="insight">
                                Not only was the section below the text suggestions, but it shows video suggestions based on query, not just history!
                            </ProConCard>
                            <div className="flex flex-col gap-4">
                                <p className="text-label-lg font-bold text-text-secondary">Why text suggestions on top?</p>
                                <BodyText>
                                    <span className="font-bold">User expectation</span>: Users expect text suggestions near the search bar as they type. It also <span className="font-bold">helps with query refinement</span>, finishing typing faster.
                                </BodyText>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-label-lg font-bold text-text-secondary">Why not history?</p>
                                <BodyText>
                                    Current user intent is stronger than past searches. Users are on the search page to find something "now" that might be different from history.
                                </BodyText>
                            </div>
                        </div>
                    </div>
                </GrayBox>

                {/* Iteration: Translation to Youtube */}
                <GrayBox title="Translation to Youtube" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        <div className="flex flex-col gap-6 max-w-[400px]">
                            <ProConCard variant="insight">
                                The suggestion just below the search bar helps users understand relationship to the query, following the Law of Common Regions.
                            </ProConCard>
                            <ProConCard variant="insight">
                                Video suggestions based on user query and preferences help users adjust their query accordingly.
                            </ProConCard>
                        </div>
                        <div className="relative w-[280px] md:w-[320px] aspect-100/222 rounded-xl overflow-hidden shadow-xl">
                            <Image src={`${A}/Decision1-07.png`} alt="Final Translated Design" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                        </div>
                    </div>
                </GrayBox>

                <BodyText>
                    Choosing this new layout seemed to help users subconsciously. While my user testing couldn't reveal a significant effect immediately, I believe on a larger scale this pattern reflects a major shift in user thinking.
                </BodyText>
            </div>

            {/* --- Decision 2 --- */}
            <div className="flex flex-col gap-8 md:gap-12 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex self-start">
                        <Badge variant="blue" icon="target">Decision 2</Badge>
                    </div>
                    <Heading>Why I had to iterate on video card more than 3 times.</Heading>
                    <BodyText>
                        Before moving forward, let’s see what current YouTube offers.
                    </BodyText>
                </div>

                {/* Iteration: Current Design */}
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
                            <ProConCard variant="insight">
                                Text here shows what will be searched, the arrow indicates it leads to a new page, and the magnifying glass indicates that it is a suggestion.
                            </ProConCard>
                            <ProConCard variant="insight">
                                The small thumbnail image helps users remember what they were searching for or even identify the specific video.
                            </ProConCard>
                        </div>
                    </div>
                </GrayBox>

                <BodyText>
                    These cards are designed to help users find what they’re looking for while searching, but many people tend to overlook them. <span className="font-bold">I noticed that people often had a fixed mindset—if one card felt unhelpful, they assumed the rest would be too.</span> This was because the cards seemed too similar to each other.
                </BodyText>
                <BodyText>
                    If a user is trying to recall something from a past search and everything looks identical, it becomes overwhelming and frustrating because they can’t quickly find what they need.
                </BodyText>

                {/* Iteration: Wireframes */}
                <GrayBox title="Wireframes" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        <div className="flex flex-col gap-6 max-w-[400px]">
                            <ProConCard variant="insight">
                                Many users remembered a video by its thumbnail, so I decided to incorporate it more prominently in the card design.
                            </ProConCard>
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

                <div className="flex flex-col gap-6 w-full">
                    <BodyText>
                        After talking to users, I found they made judgments about watching a video based on various factors such as Views, Time Left, Creator, etc. The challenge was how to show all this information without overwhelming them!
                    </BodyText>
                    <BodyText>
                        Creator name, thumbnail, and title had to be there always; I decided to use other elements based on context!
                    </BodyText>
                </div>

                {/* Iteration: First Iteration */}
                <GrayBox title="First Iteration" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                            <div className="flex flex-col gap-6 max-w-[400px]">
                                <ProConCard variant="insight">
                                    Giving the video card a lighter background helped users understand it was clickable, like a button.
                                </ProConCard>
                            </div>
                            <div className="relative w-full lg:w-[500px] aspect-500/170 rounded-xl overflow-hidden shadow-md">
                                <Image src={`${A}/Decision2-06.png`} alt="First Iteration UI A" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                            <div className="flex flex-col gap-6 max-w-[400px]">
                                <ProConCard variant="insight">
                                    Information on the card, such as "Live" and "New Video," changes based on the specific context of the video.
                                </ProConCard>
                            </div>
                            <div className="relative w-full lg:w-[500px] aspect-500/170 rounded-xl overflow-hidden shadow-md">
                                <Image src={`${A}/Decision2-07.png`} alt="First Iteration UI B" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
                            </div>
                        </div>
                    </div>
                </GrayBox>

                <BodyText>
                    Space between the cards gave each of them their own identity and distinction. I presented these cards to users again, but they were still confused. Why? It took too much time to understand the card. The reason? All the information felt "scattered" according to users.
                </BodyText>

                <div className="flex self-start">
                    <Badge variant="green" icon="check">Final Design</Badge>
                </div>

                {/* Iteration: Final Design */}
                <GrayBox title="Final Design" className="flex flex-col gap-8 p-8 md:p-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        <div className="relative w-full lg:w-[500px] aspect-500/100 rounded-xl overflow-hidden shadow-xl">
                            <Image src={`${A}/Decision2-08.png`} alt="Final Video Card Design" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-6 max-w-[400px]">
                            <ProConCard variant="insight">
                                I dug deeper and found that users had to move their attention from left to right constantly. I changed the location of the thumbnail to align everything, and that fixed it!
                            </ProConCard>
                        </div>
                    </div>
                </GrayBox>

                <BodyText>
                    While this card version didn’t show all information at once, it had enough to help users make a decision and move forward quickly.
                </BodyText>
            </div>
        </section>
    );
}
