"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
        <p className="font-body-mono text-text-tertiary w-full max-w-[1024px]">
            {children}
        </p>
    );
}

function BodyText({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-body text-text-primary w-full max-w-[1024px]">
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
        <p className="font-h1 text-text-primary w-full max-w-[1024px]">
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

const A = "/printhub";

/* ── Custom Cursor Component ── */
function CustomCursor({ text, active }: { text: string; active: boolean }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!active) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-9999 px-4 py-2 bg-white rounded-full shadow-2xl border border-black/10 flex items-center gap-2"
            animate={{ x: mousePos.x + 20, y: mousePos.y + 20, scale: 1 }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
            <div className="w-2 h-2 rounded-full bg-[#306192]" />
            <p className="font-card-mono text-sm uppercase tracking-wider text-text-primary whitespace-nowrap">{text}</p>
        </motion.div>
    );
}

/* ── Journey Step Component ── */
function JourneyStep({
    id,
    narrative,
    screen,
    arrow,
    children
}: {
    id: number;
    narrative: string;
    screen: string;
    arrow?: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-center w-full group">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_320px_1fr] w-full items-center lg:items-start gap-8 lg:gap-20 relative max-w-[1078px]">
                {/* Left Side: Narrative */}
                <div className="flex w-full justify-center lg:justify-end lg:pt-12 max-w-[600px]">
                    <div className="flex flex-col gap-4 w-full lg:max-w-[320px]">
                        <p className="font-h4 text-[#306192] leading-tight text-center lg:text-right">
                            {narrative}
                        </p>
                    </div>
                </div>

                {/* Center: Mobile Screen */}
                <div className="relative z-10">
                    <div className="relative w-[240px] md:w-[320px] aspect-324/691 rounded-[52px] shadow-2xl">
                        <Image src={`/printhub/${screen}`} alt={`Step ${id}`} fill sizes="320px" className="object-cover" />
                    </div>
                </div>

                {/* Right Side: Composable Details / Insights */}
                    <div className="flex flex-col gap-6 md:gap-4 lg:max-w-[320px] w-full justify-center lg:justify-start items-center lg:pt-12">
                        {children}
                    </div>
            </div>

            {/* Vertical Connector */}
            {arrow && (
                <div className="flex flex-col items-center justify-center relative w-full h-[152px]">
                    <Image src={`${A}/${arrow}`} alt="Connector" fill className="object-contain" />
                </div>
            )}
        </div>
    );
}

export default function PrinthubPage() {
    return (
        <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-text-primary selection:text-bg-primary">
            {/* ── Hero section ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn className="w-full flex flex-col gap-12 justify-center mt-[40vh] z-10">

                <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-[1024px] flex-col gap-12 px-4">
                    <Navbar />
                    {/* ── 01. INTRO / HERO CONTENT ──                                 */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-8 w-full">
                        <Title>How refined components and better flows saved PrintHub users 30% of their time.</Title>

                        <GrayBox className="bg-white border-3 border-outline-primary overflow-hidden p-0 rounded-[30px] w-full">
                            <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 md:p-12 overflow-hidden bg-bg-primary">
                                <div className="relative w-[280px] md:w-[320px] aspect-324/691 overflow-hidden ">
                                    <Image src={`${A}/Intro-01.png`} alt="PrintHub Screen 1" fill className="object-cover" />
                                </div>
                                <div className="hidden md:block">
                                    <Image src={`${A}/arrow-Intro.svg`} alt="Arrow" width={200} height={20} />
                                </div>
                                <div className="relative w-[280px] md:w-[320px] aspect-324/691  overflow-hidden ">
                                    <Image src={`${A}/Intro-02.png`} alt="PrintHub Screen 2" fill className="object-cover" />
                                </div>
                            </div>
                        </GrayBox>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 px-8 md:px-12">
                            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                                <p className="font-geist font-medium text-[#b7b7b7] text-lg uppercase tracking-tight">Role</p>
                                <p className="font-geist font-medium text-text-primary text-xl">Product Designer</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                                <p className="font-geist font-medium text-[#b7b7b7] text-lg uppercase tracking-tight">Team</p>
                                <p className="font-geist font-medium text-text-primary text-xl">3 Developers</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                                <p className="font-geist font-medium text-[#b7b7b7] text-lg uppercase tracking-tight">Duration</p>
                                <p className="font-geist font-medium text-text-primary text-xl">5-6 weeks</p>
                            </div>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 02. WHAT IS PRINTHUB ──                                     */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-5 w-full ">
                        <SubHeading>What is Printhub?</SubHeading>
                        <BodyText>
                            Printhub is a kiosk based printing solution that works through a mobile app and proprietary devices. Users upload files to the cloud and print them from any location. The system shows live print status and notifies users when prints are ready for pickup.
                        </BodyText>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 03. DESIGNING FOR USERS ──                                  */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-6 w-full ">
                        <div className="flex flex-col gap-5 w-full">
                            <SubHeading>Designing for Users</SubHeading>
                            <div className="flex flex-col gap-3">
                                <BodyText>Traditional printing is slow and disruptive. The Printhub redesign aimed to make printing fast and routine. Going into this project we had 2 high level goals:</BodyText>
                                <ul className="list-decimal pl-6 flex flex-col gap-3 font-body w-full text-text-primary max-w-[1024px] mx-auto">
                                    <li>Implement Material 3 to standardise app design.</li>
                                    <li>Improve usability wherever possible.</li>
                                </ul>
                            </div>
                        </div>

                        <GrayBox title="Current Design" className="p-4">
                            <div className="flex flex-wrap gap-6 items-center justify-center">
                                <div className="relative w-[200px] aspect-216/480 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white">
                                    <Image src={`${A}/Legacy-01.png`} alt="Old Design 1" fill className="object-cover" />
                                </div>
                                <div className="relative w-[200px] aspect-216/480 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white">
                                    <Image src={`${A}/Legacy-02.png`} alt="Old Design 2" fill className="object-cover" />
                                </div>
                                <div className="relative w-[200px] aspect-216/480 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white">
                                    <Image src={`${A}/Legacy-03.png`} alt="Old Design 3" fill className="object-cover" />
                                </div>
                                <div className="relative w-[200px] aspect-216/480 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white">
                                    <Image src={`${A}/Legacy-04.png`} alt="Old Design 4" fill className="object-cover" />
                                </div>
                            </div>
                        </GrayBox>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 04. STARTING WITHOUT DIRECTION ──                            */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-6 w-full ">
                        <div className="flex flex-col gap-5 w-full">
                            <Heading>Starting Without Direction</Heading>
                            <div className="flex flex-col gap-3">
                                <BodyText>
                                    At the start of project, we didn’t have specific problem to solve. This was due to fact that we  had no insights on how users used the app. I started observing users and how they use Printhub.
                                </BodyText>
                                <BodyText>
                                    Two things were clear:
                                </BodyText>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2">
                            {/* --- Problem 1 --- */}
                            <div className="flex flex-col gap-6">
                                <GrayBox title="Unnecessary actions" className="flex w-full justify-center items-center">
                                    <div className="relative h-[200px] md:h-[320px] w-full">
                                        <Image src={`/printhub/Problem-01.png`} alt="Customisation Screen" fill className="object-contain" />
                                    </div>
                                </GrayBox>
                                <div className="flex flex-col gap-3 px-4">
                                    <div className="flex flex-col gap-3">
                                        <p className="font-h4">Frequent reverification resulted in slow checkout.</p>
                                        <p className="font-label-lg text-grey-60">
                                            Users opened customisation settings multiple times during checkout to verify if the configurations were correct. This significantly increased the time to print and confused them.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* --- Problem 2 --- */}
                            <div className="flex flex-col gap-6">
                                <GrayBox title="Goal Failure" className="flex w-full justify-center items-center">
                                    <div className="relative h-[200px] md:h-[320px] w-full">
                                        <Image src={`/printhub/Problem-02.png`} alt="Payment Screen" fill className="object-contain" />
                                    </div>
                                </GrayBox>
                                <div className="flex flex-col gap-3 px-4">
                                    <div className="flex flex-col gap-3">
                                        <p className="font-h4">Failure to reach the goal in new users</p>
                                        <p className="font-label-lg text-grey-60">
                                            New users weren’t able to complete process and needed human guidance to get their print. New users took 2-3 tries before getting the acquainted with flow.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 05. USERS EXPECTED CLARITY ──                                */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full ">
                        <div className=" flex flex-row gap-6">
                            <div className="flex flex-col gap-5 w-full">
                                <SubHeading>Users Expected Clarity</SubHeading>
                                <div className="flex flex-col gap-3 w-full">
                                    <BodyText>
                                        When I went through the flow, it felt pretty clear to me. This surprised me a bit, and made me ask - “why are users performing repetitive actions?”
                                    </BodyText>
                                    <BodyText>
                                        After bit of thinking, it become a clearer why users reverified their setting before printing.
                                    </BodyText>
                                </div>
                                {/* Custom callout. not ot be touched */}
                                <div className="flex flex-col py-4 sm:px-20 lg:px-40 px-4 text-text-primary border-b border-t">
                                    <div className="font-h2 text-center">Printing was a irreversible process that costs money and time.</div>
                                </div>

                                <BodyText>
                                    Printing was a irreversible process that costs money and time. Getting wrong print means wastage of money. Users have to know clearly what they will get and how will it look.
                                </BodyText>
                            </div>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 06. CALLOUT ──                                */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section>
                        <div className="flex w-full flex-col rounded-[32px] bg-[#97C882] px-0.5 pt-0.5 pb-2">
                            <div className="flex w-full flex-col overflow-hidden rounded-[30px] bg-bg-primary">
                                <div className="flex w-full items-center gap-2 bg-bg-green px-6 py-6 ">
                                    <h3 className="font-h3 text-text-green">
                                        User’s mental model🧠
                                    </h3>
                                </div>
                                <div className="flex w-full flex-col gap-3 p-6">
                                    <BodyText>
                                        An interesting insight while observing and talking to user that I came across was:
                                    </BodyText>
                                    <BodyText>
                                        People usually are very anxious until the document queued to be printed. Once the printing commences they loosen up a bit. This anxiety occurs due to uncertainty of output.
                                    </BodyText>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 07. IT SHOULD JUST WORK ──                                */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-5 w-full">
                        <SubHeading>It should just work</SubHeading>
                        <BodyText>
                            In an ideal world, Printhub experience should just work. It should be there when it’s needed, does the printing without wasting time and get out of the picture as soon as that’s done.
                        </BodyText>
                        <BodyText>
                            While talking with founders, they said - “The material 3 facelift will optimise user experience.”
                        </BodyText>
                        <BodyText>
                            It was pretty clear the goal was on optimisation. So we decided that the “task-completion-time” was ideal metric for us.
                        </BodyText>
                    </section>


                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 08. REFRAMING THE PROBLEM ──                                */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col w-full gap-3">
                                <SectionLabel>Reframing the Problem</SectionLabel>
                                <SubHeading>Invisible feedback on action cause increase in task completion time.</SubHeading>
                            </div>
                            <BodyText>
                                The current PrintHub experience creates a 'verification tax.' Because the system hides critical settings and provides no visual feedback, users are forced into a repetitive loop of manual re-verification to soothe anxiety. This psychological friction directly increases task completion time and leads to self-doubt during a high-stakes, irreversible process.
                            </BodyText>
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <div className="relative w-full aspect-1024/600">
                                <Image src={`/printhub/AnxietyMap-01.svg`} alt="AnxietyMap" fill className="object-contain" />
                            </div>
                            <p className="font-body-mono text-grey-30">
                                Based on talking to few users and our assumptions.
                            </p>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 09. USER FLOW JOURNEY ──                                    */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-16 w-full pt-8 border-t border-grey-30">
                        <div className="flex flex-col gap-8 w-full">
                            <Heading>How redesigned Printhub reduces user anxiety</Heading>
                            <BodyText>
                                Yash, a college student, needs to print his practical before submission. He has used Printhub for a long time. He heard the app just got a major refresh. Let’s see how this app refresh helps Yash to print his files faster.
                            </BodyText>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* --- Step 1 --- */}
                            <JourneyStep
                                id={1}
                                narrative="Yash opens the new app. He needs this to be fast. He wants to print his files and submit the practical."
                                screen="Flow-01.png"
                                arrow="arrow-Journey-01.svg"
                            >
                                <ProConCard variant="insight">Quick Print’s elevated button signal that it can be clicked and “+” icon strengths this intent.</ProConCard>
                                <ProConCard variant="insight">Copy guides user to goal, enabling them to perform immediate next step.</ProConCard>
                                <ProConCard variant="insight">Users notice grey button and know what that means as every app has taught it.</ProConCard>
                            </JourneyStep>

                            {/* --- Step 2 --- */}
                            <JourneyStep
                                id={2}
                                narrative="Users Choose file from their system to upload and print"
                                screen="Flow-02.png"
                                arrow="arrow-Journey-02.svg"
                            />

                            {/* --- Step 3 --- */}
                            <JourneyStep
                                id={3}
                                narrative="He chooses his files. Now, he knows that he needs the “Assessment Files” in landscape and double-sided format."
                                screen="Flow-03.png"
                                arrow="arrow-Journey-03.svg"
                            >
                                <ProConCard variant="insight">Yash notices pencil icon, and instantly knows its used to edit file. This happens due to Jakob’s Law.</ProConCard>
                                <div className="flex flex-col gap-2">
                                    <ProConCard variant="insight">Users can swipe the file to left or right to remove it.</ProConCard>
                                    <ProConCard variant="fact">This interaction allows users to remove unnecessary files quickly.</ProConCard>
                                </div>
                            </JourneyStep>

                            {/* --- Step 4 --- */}
                            <JourneyStep
                                id={4}
                                narrative="With two taps, he applies his preferences of customisation. He's relieved that they are clearly visible."
                                screen="Flow-04.png"
                                arrow="arrow-Journey-04.svg"
                            >
                                <ProConCard variant="insight">Clear choices allow Yash to scan the choices and decide, saving both time and cognitive power.</ProConCard>
                                <div className="flex flex-col gap-2">
                                    <ProConCard variant="insight">Preview is hidden to keep the screen load fast.</ProConCard>
                                    <ProConCard variant="fact">At this stage, users are ready to choose their choices and print. Slow page loading might break their flow.</ProConCard>
                                </div>
                            </JourneyStep>

                            {/* --- Step 5 --- */}
                            <JourneyStep
                                id={5}
                                narrative="A quick glance to card confirms his settings have been applied."
                                screen="Flow-05.png"
                                arrow="arrow-Journey-05.svg"
                            >
                                <ProConCard variant="insight">Icons provide instant visual feedback, letting users confirm changes at a glance without extra effort.</ProConCard>
                            </JourneyStep>

                            {/* --- Step 6 --- */}
                            <JourneyStep
                                id={6}
                                narrative="He's ready to print all files. He's in a rush and, out of habit, his eyes go straight to the files he just added, not the “Print File” button at the bottom."
                                screen="Flow-06.png"
                                arrow="arrow-Journey-06.svg"
                            >
                               <div className="flex flex-col gap-2">
                                    <ProConCard variant="insight">User can click on Print Files button to print all files in inventory directly.</ProConCard>
                                    <ProConCard variant="fact">Selecting more than 4-5 files manually adds lot of unnecessary load on user.</ProConCard>
                                </div>
                                <ProConCard variant="insight">The button displays the file count, confirming the user's selection without requiring them to recall the number.</ProConCard>
                            </JourneyStep>

                            {/* --- Step 7 --- */}
                            <JourneyStep
                                id={7}
                                narrative="Like before, with just two taps he selects the file. He is relieved to notice that familiar way still works."
                                screen="Flow-07.png"
                                arrow="arrow-Journey-07.svg"
                            >
                                <div className="flex flex-col gap-2">
                                    <ProConCard variant="insight">Even when in select mode, user are allowed to add new items</ProConCard>
                                    <ProConCard variant="fact">I noticed, users often forgot to add some files when in a rush. Keeping the "Add files" button active during selection mode eliminates the  need to exit and restart the process.</ProConCard>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <ProConCard variant="insight">The number on button updates to show number of files selected.</ProConCard>
                                    <ProConCard variant="fact">Displaying the expected file count validates the user’s mental model and reduces uncertainty.</ProConCard>
                                </div>
                            </JourneyStep>

                            {/* --- Step 8 --- */}
                            <JourneyStep
                                id={8}
                                narrative="Yash finds the QR code of the Printer and lines it up with his phone."
                                screen="Flow-08.png"
                                arrow="arrow-Journey-08.svg"
                            >
                                <ProConCard variant="insight">Bottom sheet provides a clear, highly visible Call to Action (CTA) while maintaining a minimal presence.</ProConCard>
                            </JourneyStep>

                            {/* --- Step 9 --- */}
                            <JourneyStep
                                id={9}
                                narrative="The app shows a final summary. He gives it a quick scan. Everything seems in order. He clicks on “Pay”."
                                screen="Flow-09.png"
                                arrow="arrow-Journey-09.svg"
                            >
                                <ProConCard variant="insight">The printer status (online/offline) confirms immediate print availability, reinforcing the user's intent to print quickly.</ProConCard>
                                <ProConCard variant="insight">Users can visually confirm and modify their current selections, recognizing their applied preferences instantly.</ProConCard>
                                <ProConCard variant="insight">Displaying the final price clearly builds trust and removes doubt. Putting that amount directly on the button tells users exactly what they’re spending before they click.</ProConCard>
                            </JourneyStep>

                            {/* --- Step 10 --- */}
                            <JourneyStep
                                id={10}
                                narrative="After payment, he feels happy that his order was confirmed. App redirects him to “orders page”, to see live status of his order."
                                screen="Flow-10.png"
                                arrow="arrow-Journey-10.svg"
                            >
                                <ProConCard variant="insight">Displaying a clear result eliminates user anxiety about receiving their print.</ProConCard>
                                <ProConCard variant="insight">Telling user rather than automatically redirecting helps to reduce the disconnect between user expectation and result.</ProConCard>
                            </JourneyStep>

                            {/* --- Step 11 (Final Container) --- */}
                            <JourneyStep
                                id={11}
                                narrative="After payment, he feels happy that his order was confirmed. App redirects him to “orders page”, to see live status of his order."
                                screen="Flow-11.png"
                            >
                                <ProConCard variant="insight">Status updates allow users to determine the approximate waiting time.</ProConCard>
                                <div className="flex flex-col gap-2">
                                    <ProConCard variant="insight">The file costs helps users associate a specific order with the prints they requested. </ProConCard>
                                    <ProConCard variant="fact">User interviews indicated three primary ways people identify their print jobs: by date, file count, or cost.</ProConCard>
                                </div>
                            </JourneyStep>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 07. DECISION STORIES ──                                     */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full pt-24">
                        <div className="flex flex-col gap-5 w-full">
                            <Heading>Decisions that shaped the experience</Heading>
                        </div>

                        {/* --- Decision 1 --- */}
                        <div className="flex flex-col gap-12 w-full">
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex self-start">
                                    <Badge variant="info">Decision 1</Badge>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <Heading>Why I redesigned the card to help user complete printing 30% faster</Heading>
                                    <BodyText>
                                        I realised that the problem wasn’t in UI but how people used it. Printing is irreversible. Wrong prints waste time and money. To avoid this, users repeatedly reopened customization settings to verify their own actions.
                                    </BodyText>
                                </div>
                            </div>

                            <GrayBox title="Current Card Design" className="bg-[#f5f5f5] p-8 md:p-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="relative w-full lg:w-[400px] aspect-400/136 rounded-xl overflow-hidden shadow-lg">
                                        <Image src={`${A}/Decision1-01.png`} alt="Current Design" fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 max-w-[480px]">
                                        <ProConCard variant="con">“Customize” does not tell users what they can change</ProConCard>
                                        <ProConCard variant="con">Users only use preview when they are unsure about document</ProConCard>
                                        <ProConCard variant="con">Card doesn’t follow material standards</ProConCard>
                                    </div>
                                </div>
                            </GrayBox>

                            <div className="flex flex-col gap-3">
                                <BodyText>
                                    My initial assumption was that people were forced to recall previous action. To avoid monetary loss they reverified the settings. Following recognition rather than recall principle, the goal was to surface past actions in order to reduce uncertainty without increasing cognitive load.
                                </BodyText>
                                <p className="font-body text-text-primary max-w-[1024px] mx-auto">To support this, I explored two options:</p>
                            </div>

                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 w-full max-w-[1078px] mx-auto">
                                <div className="flex flex-col gap-4">
                                    <GrayBox title="Visual indicators Only" className="aspect-video bg-[#f6f6f6] p-8 flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image src={`${A}/Decision1-02.png`} alt="Option 1" fill className="object-contain" />
                                        </div>
                                    </GrayBox>
                                    <ProConCard variant="pro">Changes in a features are clearly visible.</ProConCard>
                                    <ProConCard variant="pro">Visuals are processed faster and reduces cognitive load.</ProConCard>
                                    <ProConCard variant="con">Can cause confusion due to different interpretation of icons.</ProConCard>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <GrayBox title="Textual Indicators" className="aspect-video bg-[#f6f6f6] p-8 flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image src={`${A}/Decision1-03.png`} alt="Option 2" fill className="object-contain" />
                                        </div>
                                    </GrayBox>
                                    <ProConCard variant="pro">Clearly tell which options are used to print the item.</ProConCard>
                                    <ProConCard variant="pro">Removing guesswork on what is active and what’s not active.</ProConCard>
                                    <ProConCard variant="con">This becomes unnecessary for users who print only a few items and adds avoidable cognitive load.</ProConCard>
                                </div>
                            </div>
                        </div>

                        {/* --- Decision 2 --- */}
                        <div className="flex flex-col gap-12 w-full ">
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex self-start">
                                    <Badge variant="info">Decision 2</Badge>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <Heading>How I fixed two broken buttons to behave like users expected them to</Heading>
                                    <BodyText>
                                        The two buttons on home screen were very integral to the whole flow, yet I myself found them to be a bit confusing on how they functioned as a new user. The print summary button only appeared if an item was selected, leaving users confused if they had items but none selected.
                                    </BodyText>
                                </div>
                            </div>

                            <GrayBox title="Current Design Analysis" className="bg-[#f6f6f6] p-8 md:p-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="flex flex-col gap-4 items-center">
                                        <div className="flex gap-4">
                                            <div className="relative w-[140px] aspect-324/691 rounded-xl overflow-hidden shadow-lg border border-black/5">
                                                <Image src={`${A}/Decision2-01.png`} alt="Before" fill className="object-cover" />
                                            </div>
                                            <div className="relative w-[140px] aspect-324/691 rounded-xl overflow-hidden shadow-lg border-2 border-primary-default">
                                                <Image src={`${A}/Decision2-02.png`} alt="After Selection" fill className="object-cover" />
                                            </div>
                                        </div>
                                        <p className="text-label-sm text-text-tertiary">Button state change on selection</p>
                                    </div>
                                    <div className="flex flex-col gap-4 max-w-[400px]">
                                        <ProConCard variant="con">The path to final goal is unclear to users.</ProConCard>
                                        <ProConCard variant="con">Visual Feedback is very subtle after item selection causing change blindness.</ProConCard>
                                        <ProConCard variant="con">Buttons don't follow material standards.</ProConCard>
                                    </div>
                                </div>
                            </GrayBox>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 08. HOW PEOPLE USE PRINTHUB ──                              */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full pt-24">
                        <Heading>How people use Printhub</Heading>

                        {/* --- Nina's Story --- */}
                        <div className="flex flex-col gap-5 w-full">
                            <p className="font-h3 text-text-primary">Nina can’t remember her submission.</p>
                            <BodyText>
                                Nina, a daily Printhub user, can't remember if she submitted her coding assignment. She opens the app to check if she actually printed it or not. She bypasses the main print functions and heads directly to her past order history.
                            </BodyText>
                            <GrayBox className="bg-[#f6f6f6] p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                                    <div className="relative w-[280px] aspect-324/691 rounded-xl overflow-hidden shadow-2xl">
                                        <Image src={`${A}/UserStory1-01.png`} alt="Nina opens history" fill className="object-cover" />
                                    </div>
                                    <div className="relative w-[100px] h-10">
                                        <Image src={`${A}/arrow-UserStory1.svg`} alt="Then" fill className="object-contain" />
                                    </div>
                                    <div className="relative w-[280px] aspect-324/691 rounded-xl overflow-hidden shadow-2xl">
                                        <Image src={`${A}/UserStory1-02.png`} alt="Nina finds order" fill className="object-cover" />
                                    </div>
                                </div>
                            </GrayBox>
                            <p className="font-h4 text-text-secondary text-center max-w-[800px] mx-auto">
                                She found it: 'final_final_assignment.pdf' in yesterday's print history. A huge sigh of relief.
                            </p>
                        </div>

                        {/* --- Raju's Story --- */}
                        <div className="flex flex-col gap-5 w-full ">
                            <p className="font-h3 text-text-primary">Raju is too busy to wait for his prints.</p>
                            <BodyText>
                                Raju works at a government office where workload is heavy. He uploads his audit files and goes back to work. He checks in periodically to see the status. Quick visual nudges show him the moment the prints are ready.
                            </BodyText>
                            <GrayBox className="bg-[#f6f6f6] p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                                    <div className="relative w-[240px] aspect-324/691 rounded-xl overflow-hidden shadow-xl opacity-70">
                                        <Image src={`${A}/UserStory2-01.png`} alt="Order Pending" fill className="object-cover" />
                                    </div>
                                    <div className="relative w-[240px] aspect-324/691 rounded-xl overflow-hidden shadow-2xl ring-4 ring-green-100">
                                        <Image src={`${A}/UserStory2-02.png`} alt="Order Ready" fill className="object-cover" />
                                    </div>
                                </div>
                            </GrayBox>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 09. UI SYSTEM ──                                            */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full pt-24">
                        <div className="flex flex-col gap-5 w-full">
                            <Heading>UI System I created for better handoff</Heading>
                            <BodyText>
                                The original app was based on Flutter, so I decided to use Material Design. Components from the new Material 3 Expressive system were used and selectively modified to fit the product.
                            </BodyText>
                        </div>

                        <div className="relative w-full aspect-1550/920 rounded-[32px] overflow-hidden shadow-sm">
                            <Image src={`${A}/UISystem-01.png`} alt="Full UI System" fill className="object-cover" />
                        </div>

                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 w-full">
                            <div className="flex flex-col gap-8">
                                <div className="relative w-full aspect-543/168 rounded-2xl overflow-hidden border border-black/5">
                                    <Image src={`${A}/UISystem-02.png`} alt="Colors" fill className="object-cover" />
                                </div>
                                <div className="relative w-full aspect-545/166 rounded-2xl overflow-hidden border border-black/5">
                                    <Image src={`${A}/UISystem-03.png`} alt="Typography" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="relative w-full aspect-378/382 rounded-2xl overflow-hidden border border-black/5">
                                    <Image src={`${A}/UISystem-04.png`} alt="Components" fill className="object-cover" />
                                </div>
                                <p className="font-body text-text-secondary">
                                    I used variables and a two-tiered token system to guarantee a clean, consistent build for development. This structure was designed to be scalable.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 10. CONCLUSION ──                                           */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full pt-24 pb-32">
                        <div className="flex flex-col gap-5 max-w-[800px] mx-auto text-center">
                            <Heading>Beyond Pixels: A System of Confidence</Heading>
                            <BodyText>
                                Redesigning Printhub wasn't just about updating icons or moving buttons. It was about understanding the human anxiety behind a "Print" button. By surfacing the system state and providing clarity at every step, we didn't just make a faster app—we made a more trustworthy one.
                            </BodyText>
                        </div>
                    </section>


                </div>
            </FadeIn>
            <Footer />
        </main>
    );
}
