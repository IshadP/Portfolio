"use client"

import Image from "next/image";
import { Title, SectionLabel, BodyText } from "./YoutubeCaseStudyUI";

const A = "/assets/youtube";

export default function YouTubeHero() {
    return (
        <section className="flex flex-col gap-12 w-full text-left">
            {/* Headline */}
            <Title>
                Enhancing YouTube Search for Intent based search results.
            </Title>

            {/* Images Container */}
            <div className="flex flex-col gap-6 w-full max-w-max-width-content">
                <div className="relative w-full aspect-850/500 flex gap-4 p-12 rounded-4xl items-center justify-center border-3 border-outline-primary overflow-hidden bg-bg-primary ">
                    {/* Images arranged with absolute positioning and rotations to match the design */}

                    {/* Far Left (TitleImg-01) */}
                    <div className="relative w-[25%] aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                        <Image src={`${A}/TitleImg-01.png`} alt="UI Screenshot 1" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                    </div>

                    {/* Center Left (TitleImg-03) */}
                    <div className="relative w-[25%]  aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                        <Image src={`${A}/TitleImg-03.png`} alt="UI Screenshot 3" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                    </div>

                    {/* Center Right (TitleImg-04) */}
                    <div className="relative w-[25%] aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                        <Image src={`${A}/TitleImg-04.png`} alt="UI Screenshot 4" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                    </div>

                    {/* Far Right (TitleImg-02) */}
                    <div className="relative w-[25%] aspect-[1/2.27] rounded-lg md:rounded-xl overflow-hidden">
                        <Image src={`${A}/TitleImg-02.png`} alt="UI Screenshot 2" fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 300px" className="object-cover" />
                    </div>
                </div>


                {/* Project Metadata */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-12 w-full pt-4">
                    <div className="flex flex-col gap-1 flex-1">
                        <SectionLabel>Role</SectionLabel>
                        <BodyText>Product Designer</BodyText>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                        <SectionLabel>Duration</SectionLabel>
                        <BodyText>5-6 weeks</BodyText>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                        <SectionLabel>Type</SectionLabel>
                        <BodyText>Conceptual Project</BodyText>
                    </div>
                </div>
            </div>
        </section>
    );
}
