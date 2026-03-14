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
                        <Image src={`/printhub/${screen}`} alt={`Step ${id}`} fill sizes="320px" quality={90} className="object-cover" />
                    </div>
                </div>

                {/* Right Side: Composable Details / Insights */}
                <div className="flex flex-col gap-6 md:gap-4 lg:max-w-[320px] w-full justify-center lg:justify-start items-center lg:pt-12">
                    {children}
                </div>
            </div>

            {/* Vertical Connector */}
            {arrow && (
                <div className="flex flex-col items-center justify-center relative w-full h-20 md:h-[152px]">
                    <Image src={`${A}/${arrow}`} alt="Connector" fill quality={90} className="object-contain" />
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

                        <div className="bg-white border-3 border-outline-primary overflow-hidden p-0 rounded-[30px] w-full">
                            <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 md:p-12 overflow-hidden bg-bg-primary">
                                <div className="relative w-[280px] md:w-[320px] aspect-324/691 overflow-hidden ">
                                    <Image src={`${A}/Intro-01.png`} alt="PrintHub Screen 1" fill quality={90} className="object-cover" />
                                </div>
                                <div className="hidden md:block">
                                    <Image src={`${A}/arrow-Intro.svg`} alt="Arrow" width={200} height={20} quality={90} />
                                </div>
                                <div className="relative w-[280px] md:w-[320px] aspect-324/691  overflow-hidden ">
                                    <Image src={`${A}/Intro-02.png`} alt="PrintHub Screen 2" fill quality={90} className="object-cover" />
                                </div>
                            </div>
                        </div>

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
                                    <Image src={`${A}/Legacy-01.png`} alt="Old Design 1" fill sizes="200px" quality={90} className="object-cover" />
                                </div>
                                <div className="relative w-[200px] aspect-216/480 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white">
                                    <Image src={`${A}/Legacy-02.png`} alt="Old Design 2" fill sizes="200px" quality={90} className="object-cover" />
                                </div>
                                <div className="relative w-[200px] aspect-216/480 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white">
                                    <Image src={`${A}/Legacy-03.png`} alt="Old Design 3" fill sizes="200px" quality={90} className="object-cover" />
                                </div>
                                <div className="relative w-[200px] aspect-216/480 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white">
                                    <Image src={`${A}/Legacy-04.png`} alt="Old Design 4" fill sizes="200px" quality={90} className="object-cover" />
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

                        <div className="flex flex-col md:flex-row gap-2">
                            {/* --- Problem 1 --- */}
                            <div className="flex flex-col gap-6">
                                <GrayBox title="Unnecessary actions" className="flex w-full justify-center items-center">
                                    <div className="relative h-[200px] md:h-[320px] w-full">
                                        <Image src={`/printhub/Problem-01.png`} alt="Customisation Screen" fill quality={90} className="object-contain" />
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
                                        <Image src={`/printhub/Problem-02.png`} alt="Payment Screen" fill quality={90} className="object-contain" />
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
                    {/* ── 06. CALLOUT ──                                                              */}
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
                                <Image src={`/printhub/AnxietyMap-01.svg`} alt="AnxietyMap" fill quality={90} className="object-contain" />
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
                        <BodyText>
                            Yash felt relieved that he could print without standing in long queues outside the print shop, it was a quick scan → pay → grab for him.
                        </BodyText>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 07. DECISION STORIES ──                                     */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full">
                        <div className="flex flex-col gap-5 w-full">
                            <Heading>Decisions that shaped the experience</Heading>
                        </div>

                        {/* --- Decision 1 --- */}
                        <div className="flex flex-col gap-6 w-full"> {/* Parent container for 24px transitions */}
                            <div className="flex flex-col gap-5"> {/* Container for 20px transition (Title to Body) */}
                                <div className="flex flex-col gap-3"> {/* Container for 12px transition (Badge to Title) */}
                                    <div className="flex self-start">
                                        <Badge variant="info">Decision 1</Badge>
                                    </div>
                                    <Heading>Why I redesigned the card to help user complete printing 30% faster</Heading>
                                </div>
                                <BodyText>
                                    I realised that the problem wasn’t in UI but how people used it. Printing is irreversible. Wrong prints waste time and money. To avoid this, users repeatedly reopened customization settings to verify their own actions.
                                </BodyText>
                            </div>

                            <GrayBox title="Current Card Design" className="bg-bg-secondary p-8 md:p-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                                    <div className="relative w-full lg:w-[400px] aspect-400/136 rounded-xl overflow-hidden shadow-lg">
                                        <Image src={`${A}/Decision1-01.png`} alt="Current Design" fill quality={90} className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-4 max-w-[480px]">
                                        <ProConCard variant="con" full>“Customize” does not tell users what they can change</ProConCard>
                                        <ProConCard variant="con" full>Users only use preview when they are unsure about document</ProConCard>
                                        <ProConCard variant="con" full>Card doesn’t follow material standards</ProConCard>
                                    </div>
                                </div>
                            </GrayBox>

                            <div className="flex flex-col gap-3"> {/* Container for 12px gap between paragraphs */}
                                <BodyText>
                                    My initial assumption was that people were forced to recall previous action. To avoid monetary loss they reverified the settings. Following recognition rather than recall principle, the goal was to surface past actions in order to reduce uncertainty without increasing cognitive load.
                                </BodyText>
                                <BodyText>
                                    To support this, I explored two options:
                                </BodyText>
                            </div>

                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 w-full max-w-[1078px]">
                                <div className="flex flex-col gap-2">
                                    <GrayBox title="Visual indicators Only" className="aspect-video bg-bg-secondary p-8 flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image src={`${A}/Decision1-02.png`} alt="Option 1" fill quality={90} className="object-contain" />
                                        </div>
                                    </GrayBox>
                                    <div className="flex flex-col gap-2">
                                        <ProConCard variant="pro" full>Changes in a features are clearly visible.</ProConCard>
                                        <ProConCard variant="pro" full>Visuals are processed faster and reduces cognitive load.</ProConCard>
                                        <ProConCard variant="con" full>Can cause confusion due to different interpretation of icons.</ProConCard>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <GrayBox title="Textual Indicators" className="aspect-video bg-bg-secondary p-8 flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image src={`${A}/Decision1-03.png`} alt="Option 2" fill quality={90} className="object-contain" />
                                        </div>
                                    </GrayBox>
                                    <div className="flex flex-col gap-2">
                                        <ProConCard variant="pro" full>Clearly tell which options are used to print the item.</ProConCard>
                                        <ProConCard variant="pro" full>Removing guesswork on what is active and what’s not active.</ProConCard>
                                        <ProConCard variant="con" full>This becomes unnecessary for users who print only a few items and adds avoidable cognitive load.</ProConCard>
                                        <ProConCard variant="con" full>Excessive card height wastes screen space and forces unnecessary scrolling when multiple items are added.</ProConCard>
                                    </div>
                                </div>
                            </div>

                            {/* --- Main Card Interaction Ideas Section --- */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-3">
                                    <BodyText>
                                        When presented with two options, most users chose option one. Further talking showed that option two caused higher cognitive load as each option had to be read. Stakeholders reached the same conclusion, so we proceeded with option one.
                                    </BodyText>
                                    <BodyText>
                                        As I removed customise button, we needed a new interaction to enter customisaton mode. We also needed a clear way to show and select files.
                                    </BodyText>
                                    <BodyText>
                                        I explored two options:
                                    </BodyText>
                                </div>

                                <SectionLabel>Main Card Interaction Ideas</SectionLabel>
                            </div>

                            {/* --- Idea 1: Click and Hold --- */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex self-start">
                                            <Badge variant="error">Idea 1</Badge>
                                        </div>
                                        <Heading>Click and hold to customise while retaining the checkbox to preserve existing user habits.</Heading>
                                    </div>
                                    <BodyText>
                                        I kept the checkbox for selection and added a preview so users could see whether a file needed editing. Customisation was available through click and hold. This assumed that most users rarely need to customise files.
                                    </BodyText>
                                </div>
                                <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                    <div className="flex flex-col gap-8 items-center justify-center">
                                        <div className="relative w-full max-w-[614px] aspect-614/120 rounded-xl overflow-hidden shadow-lg">
                                            <Image src={`${A}/Decision1-04.png`} alt="Idea 1 Design" fill quality={90} className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full max-w-[614px]">
                                            <ProConCard variant="con" full>I was wrong. Users used customisation lot more.</ProConCard>
                                            <ProConCard variant="con" full>Interaction on hold remains unclear, and users do not understand how it works.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>
                            </div>

                            {/* --- Preview Dropped Notice --- */}
                            <div className="flex w-full flex-col rounded-[32px] bg-outline-primary px-0.5 pt-0.5 pb-2">
                                <div className="flex w-full flex-col overflow-hidden rounded-[30px] bg-bg-primary">
                                    <div className="flex w-full items-center gap-2 bg-outline-primary px-6 py-4">
                                        <p className="font-h3 text-text-primary">Preview Dropped!</p>
                                    </div>
                                    <div className="flex w-full flex-col gap-3 p-6 text-text-primary">
                                        <BodyText>It was technically complex to implement and did not fit within the project timeline.</BodyText>
                                    </div>
                                </div>
                            </div>

                            {/* --- Idea 2: Edit Icon --- */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex self-start">
                                            <Badge variant="error">Idea 2</Badge>
                                        </div>
                                        <Heading>Introduce edit icon instead of the preview.</Heading>
                                    </div>
                                    <BodyText>
                                        Following removal of preview, I added a Customize icon instead of using a hidden gesture. I kept the checkbox, even though it did not fully match Material 3. This decision was to preserve existing user behaviour.
                                    </BodyText>
                                </div>
                                <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                    <div className="flex flex-col gap-8 items-center justify-center">
                                        <div className="relative w-full max-w-[602px] aspect-602/107 rounded-xl overflow-hidden shadow-lg">
                                            <Image src={`${A}/Decision1-05.png`} alt="Idea 2 Design" fill quality={90} className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full max-w-[602px]">
                                            <ProConCard variant="con" full>Users had to stretch their thumbs to reach the customize icon, making it hard to tap.</ProConCard>
                                            <ProConCard variant="pro" full>Placing the Customize icon on the left helped users immediately understand how to change settings instead of experimenting to find the action.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>
                            </div>

                            {/* --- Research Insight Section --- */}
                            <div className="flex flex-col gap-6">
                                <BodyText>
                                    I was unsure how can we conserve user behaviour and follow design standards as well. I went to other apps to see how they tackled the the problem of keep selection and edit (secondary action) viable. When I saw Gmail it become very clear what I was missing out.
                                </BodyText>

                                <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                    <div className="flex flex-col gap-8 items-center justify-center">
                                        <div className="flex flex-col md:flex-row gap-6 w-full items-center justify-center">
                                            <div className="relative w-full max-w-[492px] aspect-492/106 rounded-xl overflow-hidden shadow-lg bg-white">
                                                <Image src={`${A}/Decision1-06.png`} alt="Gmail Example 1" fill quality={90} className="object-cover" />
                                            </div>
                                            <div className="relative w-full max-w-[487px] aspect-487/110 rounded-xl overflow-hidden shadow-lg bg-white">
                                                <Image src={`${A}/Decision1-07.png`} alt="Gmail Example 2" fill quality={90} className="object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full max-w-[552px]">
                                            <ProConCard variant="pro" full>One click on the item avatar selects it and UI enters selection mode.</ProConCard>
                                            <ProConCard variant="pro" full>Secondary action like starring was on right and still viable.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>

                                <BodyText>
                                    When I talked to users about Gmail, a comment similar to “it is how it is” came up in every conversation. This meant that they felt safe while interacting with card, so much so that it became second nature. This made me realise that following same pattern won’t cause much friction in users.
                                </BodyText>
                            </div>

                            {/* --- Final Design Section --- */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex self-start">
                                            <Badge variant="success">Final Design</Badge>
                                        </div>
                                        <Heading>By making applied settings visible, the final design removed reverification and reduced decision time during printing</Heading>
                                    </div>
                                    <BodyText>
                                        By prioritising recognition, user moved through flow much faster as they had higher confidence on their decision.
                                    </BodyText>
                                </div>
                                <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full max-w-[602px] aspect-602/253">
                                            <Image src={`${A}/Decision1-08.png`} alt="Final Card Design" fill quality={90} className="object-contain" />
                                        </div>
                                    </div>
                                </GrayBox>
                            </div>


                            <div className="flex flex-col gap-3">
                                <BodyText>
                                    In testing, we noticed most of the users already knew what to do, without much guidance.
                                </BodyText>
                                <BodyText>
                                    We conducted testing with 7 students. On average they were able to complete the flow faster by ~30% for more than 4 files.
                                </BodyText>
                            </div>
                        </div>

                        {/* --- Decision 2 --- */}
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <div className="flex self-start">
                                        <Badge variant="info">Decision 2</Badge>
                                    </div>
                                    <Heading>How I fixed two broken button to behave like user expected them to.</Heading>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <BodyText>
                                        The two button on home screen had were very integral to the whole flow, yet I myself found them to be a bit confusing on how they functioned as a new user.
                                    </BodyText>
                                    <BodyText>
                                        The interaction was more confusing, the print summary button only appeared if item was selected. Meaning if user had items and none of them were selected, there isn’t any clear way forward.
                                    </BodyText>
                                </div>
                            </div>

                            <GrayBox title="Current Design Analysis" >
                                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-6 items-center justify-center">
                                    <div className="flex items-center">
                                        <div className="relative w-[140px] md:w-[170px] aspect-170/378 rounded-xl overflow-hidden shadow-lg ">
                                            <Image src={`${A}/Decision2-01.png`} alt="Before" fill sizes="(max-width: 768px) 140px, 170px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative w-10 h-10">
                                            <Image src={`${A}/arrow-Intro.svg`} alt="Then" fill sizes="40px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[140px] md:w-[170px] aspect-170/378 rounded-xl overflow-hidden shadow-lg ">
                                            <Image src={`${A}/Decision2-02.png`} alt="After" fill sizes="(max-width: 768px) 140px, 170px" quality={90} className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <ProConCard variant="con" full>The path to final goal is unclear to users.</ProConCard>
                                        <ProConCard variant="con" full>Visual Feedback is very subtle after item selection causing change blindness</ProConCard>
                                        <ProConCard variant="con" full>Buttons doesn’t follow material standards</ProConCard>
                                    </div>
                                </div>
                            </GrayBox>

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <BodyText>
                                            Observation showed that many users missed the button change, and no one understood what “Print Summary” meant. New users were forced to click it just to learn its function.
                                        </BodyText>
                                        <BodyText>
                                            I realised the problem wasn’t the button itself but how the button behaved and meant to users.
                                        </BodyText>
                                        <BodyText>
                                            My initial assumption was to stick to material guidelines, this led me to two ideas:
                                        </BodyText>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex self-start">
                                            <Badge variant="error">Idea 1</Badge>
                                        </div>
                                        <Heading>Floating Action Buttons</Heading>
                                    </div>

                                    <BodyText>
                                        I decided to keep the “Add files” button as primary button and “Print Files” as secondary FAB as Printing was depended on adding file. This made adding files primary action.
                                    </BodyText>
                                </div>

                                <GrayBox>
                                    <div className="flex flex-col gap-6 items-center justify-center">
                                        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                                            <div className="relative w-[40cqw] max-w-[391px] aspect-391/151 rounded-xl overflow-hidden shadow-lg bg-white">
                                                <Image src={`${A}/Decision2-03.png`} alt="Idea 1 Design 1" fill sizes="(max-width: 768px) 40vw, 391px" quality={90} className="object-cover" />
                                            </div>
                                            <div className="relative w-[40cqw] max-w-[174px] aspect-174/152 rounded-xl overflow-hidden shadow-lg bg-white">
                                                <Image src={`${A}/Decision2-04.png`} alt="Idea 1 Design 2" fill sizes="(max-width: 768px) 40vw, 174px" quality={90} className="object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full max-w-[614px]">
                                            <ProConCard variant="con" full>This reduced importance of ”Print files” which is essential to completion of flow.</ProConCard>
                                            <ProConCard variant="con" full>Users where confused what button does because the print icon was associated with changing printer rather than printing itself.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <BodyText>
                                            This revealed a key insight. “Print Files” depends on “Add Files,” but printing is the primary action because it drives revenue. It cannot be deprioritized relative to adding files.
                                        </BodyText>
                                        <BodyText>
                                            Following insight, I mapped user journey and understood that one specific moments act as pivot i.e. when user selects file. So I decided to experiment with contextual buttons.
                                        </BodyText>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex self-start">
                                            <Badge variant="error">Idea 2</Badge>
                                        </div>
                                        <Heading>Contextual Buttons</Heading>
                                    </div>

                                    <BodyText>
                                        I noticed that user intent selected from adding files to printing files as soon they select a file. Following this, I decided to replace “Add file” button with “Print Files” on selection, similar to original pattern.
                                    </BodyText>
                                </div>

                                <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                    <div className="flex flex-col gap-6 items-center justify-center">
                                        <div className="relative w-full max-w-[610px] aspect-610/238 rounded-xl overflow-hidden shadow-lg">
                                            <Image src={`${A}/Decision2-05.png`} alt="Idea 2 Design" fill sizes="(max-width: 768px) 100vw, 610px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full max-w-[614px]">
                                            <ProConCard variant="pro" full>Screen now had one primary action effectively reducing the time to decide</ProConCard>
                                            <ProConCard variant="con" full>User still suffered with goal gradient problem as they didn’t know what to do once file was added (but not selected)</ProConCard>
                                            <ProConCard variant="con" full>In case of more than a 4-5 files, it would become tedious to select each and every file one by one because the user might have to scroll.</ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>
                            </div>

                            <div className="flex flex-col gap-6">
                                <BodyText>
                                    We tested this idea with users got the following feedback.
                                </BodyText>

                                <div className="flex flex-col gap-2">
                                    {/* Feedback 1 */}
                                    <div className="flex flex-row gap-4 items-start justify-center px-4">
                                        <div className="relative w-[100px] md:w-[156px] aspect-156/215">
                                            <Image src={`${A}/Person-01.png`} alt="User 1" fill sizes="(max-width: 768px) 100px, 156px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="bg-white border border-outline-primary rounded-lg px-6 py-4 max-w-[400px]">
                                            <p className="font-label-md text-text-primary">
                                                “How do I print file, I have added them already. At least in I knew what to do earlier”
                                            </p>
                                        </div>
                                    </div>
                                    {/* Feedback 2 */}
                                    <div className="flex flex-row-reverse gap-4 items-start justify-center px-4">
                                        <div className="relative w-[100px] md:w-[156px] aspect-156/215">
                                            <Image src={`${A}/Person-02.png`} alt="User 2" fill sizes="(max-width: 768px) 100px, 156px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="bg-white border border-outline-primary rounded-lg px-6 py-4 max-w-[400px] ">
                                            <p className="font-label-md text-text-primary text-right">
                                                “I have to select so many files 🥲”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">

                                <div className="flex flex-col gap-3">
                                    <BodyText>
                                        The comment “I knew what to do earlier” was a frequent. Stakeholders were concerned that this change would cause a lot of confusion between users so we reimplemented original logic.
                                    </BodyText>
                                    <BodyText>
                                        But then I realised something: Users where confused earlier as they weren't able to see the goal and in Idea 2 because the goal wasn’t visible. So I decided to tweak the current design slightly.
                                    </BodyText>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex self-start">
                                            <Badge variant="success">Final Design</Badge>
                                        </div>
                                        <Heading>Redesigning the process: Automatic Selection and Goal Visibility</Heading>
                                    </div>

                                    <BodyText>
                                        I decided to keep “Print Files” as disabled in case no files, provide user a glimpse of final goal. Another functionality was click on Print without selection will print all files to reduce hassle of selection.
                                    </BodyText>
                                </div>

                                <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                    <div className="flex flex-col gap-6 items-center justify-center">
                                        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                                            <div className="relative w-[40cqw] max-w-[286px] aspect-286/118 rounded-xl overflow-hidden shadow-lg bg-white">
                                                <Image src={`${A}/Decision2-06.png`} alt="Final Design 1" fill sizes="(max-width: 768px) 40vw, 286px" quality={90} className="object-cover" />
                                            </div>
                                            <div className="relative w-[40cqw] max-w-[286px] aspect-286/118 rounded-xl overflow-hidden shadow-lg bg-white">
                                                <Image src={`${A}/Decision2-07.png`} alt="Final Design 2" fill sizes="(max-width: 768px) 40vw, 286px" quality={90} className="object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full max-w-[552px]">
                                            <ProConCard variant="pro" full>This allows users to see what the next steps are.</ProConCard>
                                            <ProConCard variant="pro" full>New functionality allows user to print all files without selecting them, removing selection hassle entirely. </ProConCard>
                                        </div>
                                    </div>
                                </GrayBox>
                            </div>

                            <div className="flex flex-col gap-3">
                                <BodyText>
                                    As the deadline approached, we could not test this change and released it to users.
                                </BodyText>
                                <BodyText>
                                    Follow up conversations showed positive feedback, especially on removing the need for selection, allowing flexibility when wrong files were uploaded, and improving speed when printing many files.
                                </BodyText>
                            </div>
                        </div>

                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 08. HOW PEOPLE USE PRINTHUB ──                              */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full">
                        <Heading>How people use Printhub</Heading>

                        {/* --- Nina's Story --- */}
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-5">
                                <p className="font-h3 text-text-primary">Nina can’t remember her submission.</p>
                                <div className="flex flex-col gap-3">
                                    <BodyText>
                                        Nina, a daily Printhub user, can't remember if she submitted her coding assignment. Her friends mention the coding assignment that was due yesterday. She tries to recall whether she actually submitted it. To find out, she opens the app, to check if she printed it or not.
                                    </BodyText>
                                    <BodyText>
                                        She bypasses the main print functions, and heads directly to her past order history to see if a print job for it exists.
                                    </BodyText>
                                </div>
                            </div>

                            {/* Sequence 1: Nina opening history */}
                            <GrayBox>
                                <div className="flex w-full py-4 overflow-x-auto scrollbar-hide">
                                    <div className="flex items-center justify-center min-w-max mx-auto p-4">
                                        <div className="relative w-[140px] md:w-[320px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story1-01.png`} alt="Nina opens app" fill sizes="(max-width: 768px) 140px, 320px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-5 md:w-16 aspect-100/10">
                                            <Image src={`/printhub/Story1Arrow-01.svg`} alt="Then" fill sizes="(max-width: 768px) 20px, 64px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[140px] md:w-[320px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story1-02.png`} alt="Nina checks history" fill sizes="(max-width: 768px) 140px, 320px" quality={90} className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </GrayBox>

                            <BodyText>
                                She doesn’t remember the orderID, so she starts looking for all the prints from yesterday.
                            </BodyText>

                            {/* Sequence 2: Nina looking for prints */}
                            <GrayBox className="py-8">
                                <div className="flex items-center justify-center overflow-x-auto pb-4 scrollbar-hide">
                                    <div className="flex items-center px-4 min-w-max">
                                        <div className="relative w-[110px] md:w-[200px] shrink-0 aspect-200/427 rounded-[24px] md:rounded-[64px] shadow-xl">
                                            <Image src={`/printhub/Story1-03.png`} alt="Step 1" fill sizes="(max-width: 768px) 110px, 200px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-4 md:w-8 aspect-10/20">
                                            <Image src={`/printhub/Story1Arrow-02.svg`} alt="Next" fill sizes="(max-width: 768px) 16px, 32px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[110px] md:w-[200px] shrink-0 aspect-200/427 rounded-[24px] md:rounded-[64px]  shadow-xl">
                                            <Image src={`/printhub/Story1-04.png`} alt="Step 2" fill sizes="(max-width: 768px) 110px, 200px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-4 md:w-8 aspect-10/20">
                                            <Image src={`/printhub/Story1Arrow-02.svg`} alt="Next" fill quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[110px] md:w-[200px] shrink-0 aspect-200/427 rounded-[24px] md:rounded-[64px]  shadow-xl">
                                            <Image src={`/printhub/Story1-05.png`} alt="Step 3" fill sizes="(max-width: 768px) 110px, 200px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-6 md:w-8 aspect-10/20">
                                            <Image src={`/printhub/Story1Arrow-02.svg`} alt="Next" fill sizes="(max-width: 768px) 16px, 32px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[110px] md:w-[200px] shrink-0 aspect-200/427 rounded-[24px] md:rounded-[64px]  shadow-xl">
                                            <Image src={`/printhub/Story1-06.png`} alt="Step 4" fill sizes="(max-width: 768px) 110px, 200px" quality={90} className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </GrayBox>

                            <BodyText>
                                She found it: 'final_final_assignment.pdf' in yesterday's print history. A huge sigh of relief. Since it was printed, it should’ve been submitted.
                            </BodyText>
                        </div>

                        {/* --- Raju's Story --- */}
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-5">
                                <p className="font-h3 text-text-primary">Raju Is Too Busy to Wait for His Prints.</p>
                                <BodyText>
                                    Raju works at a government office. With an audit approaching, his workload is heavy. He needs some files printed. He opens PrintHub to get it done. He uploads the files to be printed and completes the process.
                                </BodyText>
                            </div>

                            {/* Sequence 1: Raju placing order */}
                            <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
                                    <div className="flex items-center px-2 min-w-max">
                                        <div className="relative w-[130px] md:w-[240px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story2-01.png`} alt="Start" fill sizes="(max-width: 768px) 130px, 240px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-4 md:w-12 aspect-square">
                                            <Image src={`/printhub/Story2Arrow.svg`} alt="Then" fill sizes="(max-width: 768px) 16px, 48px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[130px] md:w-[240px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story2-02.png`} alt="Placed" fill sizes="(max-width: 768px) 130px, 240px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-4 md:w-12 aspect-square">
                                            <Image src={`/printhub/Story2Arrow.svg`} alt="Then" fill sizes="(max-width: 768px) 16px, 48px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[130px] md:w-[240px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story2-03.png`} alt="Processing" fill sizes="(max-width: 768px) 130px, 240px" quality={90} className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </GrayBox>

                            <BodyText>
                                Once order is placed, he observes that the status is pending, so he goes back to work. After about 15 minutes, he checks in again.
                            </BodyText>

                            {/* Sequence 2: Raju collecting prints */}
                            <GrayBox className="bg-bg-secondary p-8 md:p-12">
                                <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
                                    <div className="flex items-center px-2 min-w-max">
                                        <div className="relative w-[130px] md:w-[240px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story2-04.png`} alt="Ready" fill sizes="(max-width: 768px) 130px, 240px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-4 md:w-12 aspect-square">
                                            <Image src={`/printhub/Story2Arrow.svg`} alt="Then" fill sizes="(max-width: 768px) 16px, 48px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[130px] md:w-[240px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story2-05.png`} alt="Collected" fill sizes="(max-width: 768px) 130px, 240px" quality={90} className="object-cover" />
                                        </div>
                                        <div className="relative shrink-0 w-6 md:w-12 aspect-square">
                                            <Image src={`/printhub/Story2Arrow.svg`} alt="Then" fill sizes="(max-width: 768px) 24px, 48px" quality={90} className="object-contain" />
                                        </div>
                                        <div className="relative w-[130px] md:w-[240px] shrink-0 aspect-300/640 rounded-[32px] md:rounded-[64px] shadow-2xl">
                                            <Image src={`/printhub/Story2-06.png`} alt="Back to history" fill sizes="(max-width: 768px) 130px, 240px" quality={90} className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </GrayBox>

                            <BodyText>
                                He notices his last order is still processing, so he walks to the printer to collect it. He was happy, that quick visual nudges show him the moment the prints are ready, letting him pick them up without losing time.
                            </BodyText>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 09. UI SYSTEM ──                                            */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full">
                        {/* Intro Block */}
                        <div className="flex flex-col gap-6">
                            <Heading>UI System I created for better handoff</Heading>
                            <div className="relative w-full aspect-1550/920 rounded-lg overflow-hidden shadow-sm border border-black/5">
                                <Image src={`/printhub/Comp-01.png`} alt="Full UI System" fill quality={90} className="object-contain" />
                            </div>
                        </div>

                        {/* Material Design Block */}
                        <div className="flex flex-col gap-6">
                            <BodyText>
                                The original app was based on Flutter, so I decided to use Material Design. Components from the new Material 3 Expressive system were used and selectively modified to fit the product.
                            </BodyText>

                            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-6">
                                {/* Left Column: Component Sheets */}
                                <div className="flex flex-col gap-4">
                                    <div className="relative w-full aspect-1013/310 rounded-lg overflow-hidden bg-bg-secondary ">
                                        <Image
                                            src={`/printhub/Comp-02.png`}
                                            alt="Component Sheet 1"
                                            fill
                                            quality={90}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="relative w-full aspect-1013/310 rounded-lg overflow-hidden bg-bg-secondary ">
                                        <Image
                                            src={`/printhub/Comp-06.png`}
                                            alt="Component Sheet 2"
                                            fill
                                            quality={90}
                                            className="object-contain"
                                            style={{ objectPosition: '5% 48%' }}
                                        />
                                    </div>
                                    <div className="relative w-full aspect-1013/310 rounded-lg overflow-hidden bg-bg-secondary ">
                                        <Image
                                            src={`/printhub/Comp-04.png`}
                                            alt="Component Sheet 3"
                                            fill
                                            quality={90}
                                            className="object-contain"
                                            style={{ objectPosition: '0% 5%' }}
                                        />
                                    </div>
                                </div>
                                {/* Right Column: Buttons & Icons */}
                                <div className="flex flex-col gap-6">
                                    <div className="relative w-full aspect-378/380 rounded-xl">
                                        <Image src={`/printhub/Comp-05.png`} alt="Primary Buttons" fill quality={90} className="object-contain" />
                                    </div>
                                    <div className="relative w-full aspect-387/384 rounded-xl">
                                        <Image src={`/printhub/Comp-03.png`} alt="App Icons" fill quality={90} className="object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Variable Tokens Section */}
                        <div className="flex flex-col gap-6">
                            <BodyText>
                                I used variables and a two-tiered token system to guarantee a clean, consistent build for development. This structure was designed to be scalable; with empty tokens ready for new colours. This ensured the new design met Material Design colour standards.
                            </BodyText>
                            <div className="relative w-full aspect-4096/2686 rounded-[32px] overflow-hidden bg-white shadow-sm border border-outline-primary">
                                <Image src={`/printhub/Comp-07.png`} alt="Token System Variables" fill quality={90} className="object-cover" />
                            </div>
                        </div>

                        {/* Atomic Components Section */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                                <div className="relative w-[180px] md:w-[226px] aspect-455/1000 rounded-xl overflow-hidden shadow-lg border border-black/5">
                                    <Image src={`/printhub/UI-09.png`} alt="Custom Component Structure" fill sizes="(max-width: 768px) 180px, 226px" quality={90} className="object-cover" />
                                </div>
                                <div className="flex flex-col gap-4 max-w-[420px] text-center">
                                    <BodyText>
                                        Clear nomenclature and mixture of various components allowed me to customise components to fit various situations and use cases.
                                    </BodyText>
                                </div>
                                <div className="relative w-[180px] md:w-[226px] aspect-224/248 rounded-xl overflow-hidden shadow-lg border border-black/5">
                                    <Image src={`/printhub/UI-08.png`} alt="Atomic Component Mix" fill sizes="(max-width: 768px) 180px, 226px" quality={90} className="object-cover" />
                                </div>
                            </div>
                            <BodyText>
                                I built bigger components as a mixture of smaller atomic components. Auto Layout was used in order to maintain a consistent spacing and arranged even when the size of component changes.
                            </BodyText>
                        </div>
                    </section>

                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    {/* ── 10. CONCLUSION ──                                           */}
                    {/* ────────────────────────────────────────────────────────────────────────────── */}
                    <section className="flex flex-col gap-12 w-full">
                        {/* Part 1: What if I had more time? */}
                        <div className="flex flex-col gap-5 max-w-[1024px]">
                            <SubHeading>What if I had more time?</SubHeading>
                            <div className="flex flex-col gap-3">
                                <BodyText>
                                    My next immediate focus will be the web platform ensuring every user experiences the same consistent, unified design.
                                </BodyText>
                                <BodyText>
                                    Moreover, some initial assumptions were green-lit quickly by stakeholders, we would like to conduct a thorough testing and make sure these really work.
                                </BodyText>
                                <BodyText>
                                    Future versions of Printhub could introduce features like user presets, deeper customization, and quick-print options tailored to individual needs.
                                </BodyText>
                            </div>
                        </div>

                        {/* Part 2: Main takeaway */}
                        <div className="flex flex-col gap-5 max-w-[1024px]">
                            <SubHeading>Main takeaway</SubHeading>
                            <div className="flex flex-col gap-3">
                                <BodyText>
                                    The main takeaway from this project was on my process. Just providing design wasn’t enough, designer and developers have to actively communicate in order to provide a experience as it is designed.
                                </BodyText>
                                <BodyText>
                                    Biggest change in my process is focusing on the bigger picture rather than just work as a designer.
                                </BodyText>
                                <BodyText>
                                    A great design that can scale is always better than a perfect one that can never be fully built.
                                </BodyText>
                            </div>
                        </div>
                        <SubHeading>Thank you!</SubHeading>
                    </section>


                    <Footer />
                </div>

            </FadeIn>

        </main>
    );
}
