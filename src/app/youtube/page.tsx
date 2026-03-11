"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import FadeIn from "../../components/FadeIn";
import YouTubeHero from "./components/YoutubeHero";
import YoutubeContextProblem from "./components/YoutubeContextProblem";
import UserFlowSection from "./components/UserFlowSection";
import UserStorySection from "./components/UserStorySection";
import YoutubeFinalReflections from "./components/YoutubeFinalReflections";
import DesignDecisionSection from "./components/DesignDecisionSection";

export default function YouTubeCaseStudy() {
    return (
        <div className="bg-bg-primary relative">
            {/* ── Hero Background ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn>
                <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-8 px-4 pb-32">
                    {/* ── Navbar ── */}
                    <Navbar />

                    <div className="flex flex-col gap-8 md:gap-12 w-full min-h-[50vh]">
                        {/* ── Hero Intro ── */}
                        <YouTubeHero />

                        {/* ── Context & Problem ── */}
                        <YoutubeContextProblem />

                        {/* ── User Flow Journey ── */}
                        <UserFlowSection />

                        {/* ── Design Decisions ── */}
                        <DesignDecisionSection />

                        {/* ── User Stories ── */}
                        <UserStorySection />

                        {/* ── Final Reflections ── */}
                        <YoutubeFinalReflections />
                    </div>

                    {/* ── Footer ── */}
                    <Footer />
                </div>
            </FadeIn>
        </div>
    );
}
