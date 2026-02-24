import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Badge from "../components/case-study/Badge";
import ProConCard from "../components/case-study/ProConCard";
import AnnotationCard from "../components/case-study/AnnotationCard";

/* ── Asset paths ── */
const A = "/assets/printhub";

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
        <p className="font-(family-name:--font-geist) font-medium text-text-primary text-lg  w-full">
            {children}
        </p>
    );
}

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-(family-name:--font-geist) font-bold  text-text-primary text-2xl md:text-3xl w-full">
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
        <div className={`bg-[var(--cs-gray-bg)] overflow-hidden rounded-[24px] md:rounded-[32px] w-full ${className}`}>
            {children}
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════════════════ */

export default function PrintHubCaseStudy() {
    return (
        <div className="bg-bg-primary relative">
            {/* ── Hero Section ── */}
            <Hero />

            {/* ── Main Content ── */}
            <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-8 px-4 pt-8 pb-32">

                {/* ── Navbar ── */}
                <Navbar />

                {/* ── Printhub Hero ── */}


                {/* ════════════════════════════════════════════════════
                   CASE STUDY CONTENT
                   ════════════════════════════════════════════════════ */}
                <div className="flex flex-col gap-8 md:gap-12 w-full">

                    {/* ── Top Intro ── */}
                    <section className="flex flex-col gap-12 w-full">
                        {/* Headline */}
                        <p className="font-(family-name:--font-geist) font-semibold leading-[1.35] text-text-primary text-3xl md:text-4xl tracking-[-1.6px]">
                            How refined components and better flows saved PrintHub users 30% of their time.
                        </p>

                        {/* Phone Screenshots Comparison */}
                        <div className="flex flex-col gap-6 w-full">
                            <div className="bg-bg-primary border-2 md:border-4 border-(--border-card) flex flex-col md:flex-row items-center gap-4 overflow-hidden px-4 md:px-[76px] py-6 md:py-10 rounded-2xl md:rounded-4xl w-full">
                                <div className="relative w-full max-w-[358px] aspect-358/692">
                                    <Image src={`${A}/phone-before.png`} alt="Before redesign" fill className="object-contain" />
                                </div>
                                <div className="hidden md:flex items-center justify-center w-[200px] shrink-0">
                                    <Image src={`${A}/arrow-before-after.svg`} alt="" width={200} height={37} className="object-contain" />
                                </div>
                                <div className="flex md:hidden items-center justify-center py-2">
                                    <span className="text-text-secondary text-4xl">↓</span>
                                </div>
                                <div className="relative w-full max-w-[327px] aspect-327/692">
                                    <Image src={`${A}/phone-after.png`} alt="After redesign" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Project Metadata */}
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-12 w-full text-base md:text-2xl leading-normal">
                                <div className="flex flex-col gap-1 flex-1">
                                    <p className="font-(family-name:--font-geist) font-bold text-text-secondary">Role</p>
                                    <p className="font-(family-name:--font-geist) font-medium text-text-primary">Product Designer</p>
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <p className="font-(family-name:--font-geist) font-bold text-text-secondary">Team</p>
                                    <p className="font-(family-name:--font-geist) font-medium text-text-primary">3 Developers</p>
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <p className="font-(family-name:--font-geist) font-bold text-text-secondary">Duration</p>
                                    <p className="font-(family-name:--font-geist) font-medium text-text-primary">5-6 weeks</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Context ── */}
                    <section className="flex flex-col gap-6 md:gap-12 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <SectionLabel>Context</SectionLabel>
                            <SubHeading>Printhub wants to improve speed</SubHeading>
                            <BodyText>
                                <span className="font-bold">Traditional printing is slow and disruptive</span>. The Printhub redesign aimed to make printing fast and routine. Printing should not involve uploading, switching, and double checking files. Users should be able to print two or three files in minutes and return to work.
                            </BodyText>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <SubHeading>What is Printhub?</SubHeading>
                            <BodyText>
                                Printhub is a kiosk based printing solution that works through a mobile app and proprietary devices. Users upload files to the cloud and print them from any location. The system shows live print status and notifies users when prints are ready for pickup.
                            </BodyText>
                        </div>

                        {/* Impact */}
                        <div className="flex flex-col gap-4 w-full">
                            <SectionLabel>Impact</SectionLabel>
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                {/* Stat Card 1 */}
                                <div className="bg-[var(--cs-green-light)] flex flex-col gap-2 md:gap-4 items-center justify-center overflow-hidden px-4 md:px-8 py-8 md:py-12 rounded-2xl md:rounded-[46px] flex-1">
                                    <p className="font-(family-name:--font-geist) font-semibold text-[var(--cs-green-dark)] text-xl md:text-2xl tracking-[-0.24px] text-center">
                                        Reduced task completion time by
                                    </p>
                                    <p className="font-(family-name:--font-geist) font-semibold text-[var(--cs-green-dark)] text-5xl md:text-8xl tracking-[-0.96px] leading-[1]">
                                        ~30%
                                    </p>
                                </div>
                                {/* Stat Card 2 */}
                                <div className="bg-[var(--cs-green-light)] flex flex-col gap-2 md:gap-4 items-center justify-center overflow-hidden px-2 py-6 md:py-8 rounded-2xl md:rounded-[46px] flex-1">
                                    <p className="font-(family-name:--font-geist) font-semibold text-[var(--cs-green-dark)] text-xl md:text-2xl tracking-[-0.24px] text-center">
                                        Reduced task completion time from
                                    </p>
                                    <div className="flex items-center justify-center gap-4">
                                        <p className="font-(family-name:--font-geist) font-semibold text-[var(--cs-green-dark)] text-5xl md:text-8xl tracking-[-0.96px] leading-[1]">
                                            45s
                                        </p>
                                        <p className="font-(family-name:--font-geist) font-semibold text-[var(--cs-green-dark)] text-3xl md:text-4xl tracking-[-0.4px]">
                                            →
                                        </p>
                                        <p className="font-(family-name:--font-geist) font-semibold text-[var(--cs-green-dark)] text-5xl md:text-8xl tracking-[-0.96px] leading-[1]">
                                            30s
                                        </p>
                                    </div>
                                    <p className="font-(family-name:--font-geist) font-semibold text-[var(--cs-green-dark)] text-xl md:text-2xl tracking-[-0.24px]">
                                        for 5 files
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Problem ── */}
                    <section className="flex flex-col gap-4 items-start w-full">
                        <Badge variant="red" icon="warning">Problem</Badge>
                        <Heading>Current Experience is causing users to doubt their decisions.</Heading>
                        <BodyText>
                            Printing is irreversible. Wrong prints waste time and money. As real stakes are involved user tend to spend more time re-verifying everything as the system doesn&apos;t surface enough details for them. This is causing increase in time to completion of main flow.
                        </BodyText>
                    </section>

                    {/* ── Experience New Design Live ── */}
                    <section className="flex flex-col gap-4 w-full">
                        <Heading>Experience new design live</Heading>
                        <div className="border-2 border-(--border-card) rounded-2xl md:rounded-[32px] w-full h-screen overflow-hidden">
                            <iframe
                                src="https://printproto.vercel.app/"
                                title="Printhub Prototype"
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                            />
                        </div>
                    </section>

                    {/* ══════════════════════════════════════════════════
                       DECISION 1
                       ══════════════════════════════════════════════════ */}
                    <section className="flex flex-col gap-6 md:gap-12 items-start pb-8 md:pb-16 border-b border-text-primary w-full">
                        <Badge variant="blue" icon="target">Decision 1</Badge>

                        <div className="flex flex-col gap-4 w-full">
                            <Heading>Why I redesigned the card to help user complete printing 30% faster</Heading>
                            <BodyText>
                                I realised that the problem wasn&apos;t in UI but how people used it. Printing is irreversible. Wrong prints waste time and money. To avoid this, users repeatedly reopened customization settings to verify their own actions.
                            </BodyText>
                        </div>

                        {/* Annotated Current Card */}
                        <GrayShowcase className="relative p-2 md:p-0 min-h-[250px] md:min-h-[288px]">
                            <p className="font-(family-name:--font-geist) font-semibold leading-normal text-text-tertiary text-base md:text-xl tracking-[-0.2px] p-4">
                                Current Card Design
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8">
                                <div className="relative w-full max-w-[405px] h-[100px] md:h-[137px] rounded">
                                    <Image src={`${A}/old-card.png`} alt="Current card design" fill className="object-cover rounded" />
                                </div>
                                <div className="flex flex-col gap-4 w-full md:max-w-[484px]">
                                    <AnnotationCard>&ldquo;Customize&rdquo; does not tell users what they can change</AnnotationCard>
                                    <AnnotationCard>Users only use preview when they are unsure about document</AnnotationCard>
                                    <AnnotationCard>Card doesn&apos;t follow material standards</AnnotationCard>
                                </div>
                            </div>
                        </GrayShowcase>

                        {/* Recognition vs Recall */}
                        <div className="flex flex-col items-start w-full">
                            <BodyText>
                                My initial assumption was that people were forced to recall previous action. To avoid monetary loss they reverified the settings. Following recognition rather than recall principle, the goal was to surface past actions in order to reduce uncertainty without increasing cognitive load.
                            </BodyText>
                            <br />
                            <BodyText>To support this, I explored two options:</BodyText>
                        </div>

                        {/* Two Options Comparison */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* Option 1: Visual Indicators */}
                            <div className="flex flex-col gap-2 flex-1">
                                <GrayShowcase className="relative h-[220px] md:h-[417px]">
                                    <p className="absolute font-(family-name:--font-geist) font-semibold leading-normal text-text-tertiary text-base md:text-xl left-5 top-5 tracking-[-0.2px]">
                                        Visual indicators Only
                                    </p>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[453px] h-[80px] md:h-[116px]">
                                        <Image src={`${A}/card-visual-indicators.png`} alt="Visual indicators" fill className="object-contain" />
                                    </div>
                                </GrayShowcase>
                                <ProConCard variant="pro">Changes in a features are clearly visible.</ProConCard>
                                <ProConCard variant="pro">Visuals are processed faster and reduces cognitive load.</ProConCard>
                                <ProConCard variant="con">Can cause confusion due to different interpretation of icons.</ProConCard>
                            </div>
                            {/* Option 2: Textual Indicators */}
                            <div className="flex flex-col gap-2 flex-1">
                                <GrayShowcase className="relative h-[220px] md:h-[417px]">
                                    <p className="absolute font-(family-name:--font-geist) font-semibold leading-normal text-text-tertiary text-base md:text-xl left-5 top-5 tracking-[-0.2px]">
                                        Textual Indicators
                                    </p>
                                    <div className="absolute top-[80px] md:top-[117px] left-[16px] md:left-[35px] w-[90%] max-w-[457px] h-[120px] md:h-[184px]">
                                        <Image src={`${A}/card-textual-indicators.png`} alt="Textual indicators" fill className="object-contain" />
                                    </div>
                                </GrayShowcase>
                                <ProConCard variant="pro">Clearly tell which options are used to print the item.</ProConCard>
                                <ProConCard variant="pro">Removing guesswork on what is active and what&apos;s not active.</ProConCard>
                                <ProConCard variant="con">This becomes unnecessary for users who print only a few items and adds avoidable cognitive load.</ProConCard>
                                <ProConCard variant="con">Excessive card height wastes screen space and forces unnecessary scrolling when multiple items are added.</ProConCard>
                            </div>
                        </div>

                        <BodyText>
                            When presented with two options, most users chose option one. Further talking showed that option two caused higher cognitive load as each option had to be read.. Stakeholders reached the same conclusion, so we proceeded with option one.
                        </BodyText>
                        <BodyText>
                            As I removed customise button, we needed a new interaction to enter customisation mode. We also needed a clear way to show and select files.
                        </BodyText>

                        <SectionLabel>Main Card Interaction Ideas</SectionLabel>

                        <BodyText>
                            Initially I considered 2 paths based on how I experienced card designs in different apps:{"\n"}
                            1. Conserve user behaviour and disregard Material Guidelines.{"\n"}
                            2. Follow Material Guidelines to build a better experience.
                        </BodyText>

                        {/* Idea 1 */}
                        <div className="inline-flex flex-col gap-4 w-full items-start">
                            <Badge variant="red" icon="close">Idea 1</Badge>
                            <SubHeading>Click and hold to customise while retaining the checkbox to preserve existing user habits.</SubHeading>
                            <BodyText>
                                I kept the checkbox for selection and added a preview so users could see whether a file needed editing. Customisation was available through click and hold. This assumed that most users rarely need to customise files.
                            </BodyText>
                        </div>

                        <GrayShowcase className="flex flex-col gap-8 items-center py-12">
                            <div className="relative w-[90%] max-w-[614px] h-[80px] md:h-[121px]">
                                <Image src={`${A}/card-idea1-checkbox.png`} alt="Idea 1 card" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col gap-2 items-start w-[90%] max-w-[614px]">
                                <ProConCard variant="con">I was wrong. Users used customisation lot more.</ProConCard>
                                <ProConCard variant="con">Interaction on hold remains unclear, and users do not understand how it works.</ProConCard>
                            </div>
                        </GrayShowcase>

                        {/* Preview Dropped Note */}
                        <div className="bg-(--border-card) flex flex-col items-start pb-1.5 md:pb-2 pt-0.5 px-0.5 rounded-2xl md:rounded-4xl w-full">
                            <div className="bg-bg-primary flex flex-col items-start justify-center rounded-2xl md:rounded-[32px] w-full overflow-hidden">
                                <div className="bg-(--border-card) flex items-center px-4 md:px-6 py-3 md:py-4  w-full">
                                    <p className="font-(family-name:--font-geist) font-medium leading-normal text-text-primary text-2xl md:text-3xl tracking-[-1.6px]">
                                        Preview Dropped!
                                    </p>
                                </div>
                                <div className="flex items-center justify-center p-4 md:p-6 rounded-b-[12px] md:rounded-b-[28px]">
                                    <p className="font-(family-name:--font-geist) font-medium leading-normal text-text-primary text-lg md:text-2xl tracking-[-0.24px]">
                                        It was technically complex to implement and did not fit within the project timeline.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Idea 2 */}
                        <div className="inline-flex items-start flex-col gap-4 w-full">
                            <Badge variant="red" icon="close">Idea 2</Badge>
                            <SubHeading>Introduce edit icon instead of the preview.</SubHeading>
                            <BodyText>
                                Following removal of preview, I added a Customize icon instead of using a hidden gesture. I kept the checkbox, even though it did not fully match Material 3. This decision was to preserve existing user behaviour.
                            </BodyText>
                        </div>

                        <GrayShowcase className="flex flex-col gap-8 items-center py-12">
                            <div className="relative w-[90%] max-w-[602px] h-[70px] md:h-[107px]">
                                <Image src={`${A}/card-idea2-edit-icon.png`} alt="Idea 2 card" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col gap-2 items-start w-[90%] max-w-[602px]">
                                <ProConCard variant="pro">Placing the Customize icon on the left helped users immediately understand how to change settings instead of experimenting to find the action.</ProConCard>
                                <ProConCard variant="con">Users had to stretch their thumbs to reach the customize icon, making it hard to tap.</ProConCard>
                            </div>
                        </GrayShowcase>

                        <BodyText>
                            I was unsure how can we conserve user behaviour and follow design standards as well. I went to other apps to see how they tackled the the problem of keep selection and edit (secondary action) viable. When I saw Gmail it become very clear what I was missing out.
                        </BodyText>

                        {/* Gmail Reference */}
                        <GrayShowcase className="flex flex-col gap-8 items-center py-12">
                            <div className="flex flex-col md:flex-row items-start justify-center w-full  md:gap-6">
                                <div className="relative w-full aspect-4/1 ">
                                    <Image src={`${A}/gmail-select.png`} alt="Gmail selection" fill className="object-contain" />
                                </div>
                                <div className="relative w-full aspect-4/1">
                                    <Image src={`${A}/gmail-star.png`} alt="Gmail starring" fill className="object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-center w-[90%] max-w-[552px]">
                                <ProConCard variant="pro">One click on the item avatar selects it and UI enters selection mode.</ProConCard>
                                <ProConCard variant="pro">Secondary action like starring was on right and still viable.</ProConCard>
                            </div>
                        </GrayShowcase>

                        <BodyText>
                            When I talked to users about Gmail, a comment similar to &ldquo;it is how it is&rdquo; came up in every conversation. This meant that they felt safe while interacting with card, so much so that it became second nature. This made me realise that following same pattern won&apos;t cause much friction in users.
                        </BodyText>

                        {/* Final Design */}
                        <div className="flex flex-col items-start gap-4 w-full">
                            <Badge variant="green" icon="check">Final Design</Badge>
                            <SubHeading>By making applied settings visible, the final design removed reverification and reduced decision time during printing</SubHeading>
                            <BodyText>
                                By prioritising recognition, user moved through flow much faster as they had higher confidence on their decision.
                            </BodyText>
                            <GrayShowcase className="flex flex-col items-center justify-center py-12">
                                <div className="relative w-[90%] max-w-[602px] h-[140px] md:h-[253px]">
                                    <Image src={`${A}/card-final-design.png`} alt="Final card design" fill className="object-contain" />
                                </div>
                            </GrayShowcase>
                            <BodyText>
                                In testing, we noticed most of the users already knew what to do, without much guidance.
                            </BodyText>
                            <BodyText>
                                We conducted testing with 7 students. On average they were able to complete the flow faster by ~30% for more than 4 files.
                            </BodyText>
                        </div>
                    </section>

                    {/* ══════════════════════════════════════════════════
                       DECISION 2
                       ══════════════════════════════════════════════════ */}
                    <section className="flex flex-col gap-6 md:gap-12 items-start pb-8 md:pb-16 border-b border-text-primary w-full">
                        <Badge variant="blue" icon="target">Decision 2</Badge>

                        <div className="flex flex-col gap-4 w-full">
                            <Heading>How I fixed two broken button to behave like user expected them to.</Heading>
                            <BodyText>
                                The two button on home screen had were very integral to the whole flow, yet I myself found them to be a bit confusing on how they functioned as a new user.
                            </BodyText>
                            <BodyText>
                                The interaction was more confusing, the print summary button only appeared if item was selected. Meaning if user had items and none of them were selected, there isn&apos;t any clear way forward.
                            </BodyText>
                        </div>

                        {/* Current Design Annotated */}
                        <GrayShowcase className="relative min-h-[300px] md:min-h-[515px] p-2 md:p-4">
                            <p className="font-(family-name:--font-geist) font-semibold leading-normal text-text-tertiary text-base md:text-xl tracking-[-0.2px] p-4">
                                Current Design
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8">
                                <div className="flex items-center gap-2 md:gap-4">
                                    <div className="relative w-[120px] md:w-[170px] h-[267px] md:h-[378px]">
                                        <Image src={`${A}/phone-wireframe.png`} alt="Before button" fill className="object-contain" />
                                    </div>
                                    <div className=" block relative w-[44px] h-[28px]">
                                        <Image src={`${A}/arrow-decision2.svg`} alt="" fill className="object-contain" />
                                    </div>
                                    <div className="relative w-[120px] md:w-[170px] h-[267px] md:h-[378px] rounded-sm">
                                        <Image src={`${A}/phone-screenshot.png`} alt="After button" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-full md:max-w-[484px]">
                                    <AnnotationCard>The path to final goal is unclear to users.</AnnotationCard>
                                    <AnnotationCard>Visual Feedback is very subtle after item selection causing change blindness</AnnotationCard>
                                    <AnnotationCard>Buttons doesn&apos;t follow material standards</AnnotationCard>
                                </div>
                            </div>
                        </GrayShowcase>

                        <div className="flex flex-col gap-4 w-full">
                            <BodyText>
                                Observation showed that many users missed the button change, and no one understood what &ldquo;Print Summary&rdquo; meant. New users were forced to click it just to learn its function.
                            </BodyText>
                            <BodyText>
                                I realised the problem wasn&apos;t the button itself but how the button behaved and meant to users.
                            </BodyText>
                            <BodyText>
                                My initial assumption was to stick to material guidelines, this led me to two ideas:
                            </BodyText>
                        </div>

                        {/* Idea 1: FABs */}
                        <div className="flex flex-col gap-4 items-start w-full">
                            <Badge variant="red" icon="close">Idea 1</Badge>
                            <SubHeading>Floating Action Buttons</SubHeading>
                            <BodyText>
                                I decided to keep the &ldquo;Add files&rdquo; button as primary button and &ldquo;Print Files&rdquo; as secondary FAB as Printing was depended on adding file. This made adding files primary action.
                            </BodyText>
                        </div>

                        <GrayShowcase className="flex flex-col gap-8 items-center py-12">
                            <div className="flex flex-col md:flex-row items nd:items-start items-center w-full justify-center gap-8">
                                <div className="relative w-full max-w-[391px] h-[151px]">
                                    <Image src={`${A}/fab1.png`} alt="FAB option 1" fill className="object-contain" />
                                </div>
                                <div className="relative w-full max-w-[175px] h-[152px]">
                                    <Image src={`${A}/fab2.png`} alt="FAB option 2" fill className="object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-start w-[90%] max-w-[614px]">
                                <ProConCard variant="con">This reduced importance of &ldquo;Print files&rdquo; which is essential to completion of flow.</ProConCard>
                                <ProConCard variant="con">Users where confused what button does because the print icon was associated with changing printer rather than printing itself.</ProConCard>
                            </div>
                        </GrayShowcase>

                        <BodyText>
                            This revealed a key insight. &ldquo;Print Files&rdquo; depends on &ldquo;Add Files,&rdquo; but printing is the primary action because it drives revenue. It cannot be deprioritized relative to adding files.
                        </BodyText>
                        <BodyText>
                            Following insight, I mapped user journey and understood that one specific moments act as pivot i.e. when user selects file. So I decided to experiment with contextual buttons.
                        </BodyText>

                        {/* Idea 2: Contextual Buttons */}
                        <div className="flex flex-col gap-4 items-start w-full">
                            <Badge variant="red" icon="close">Idea 2</Badge>
                            <SubHeading>Contextual Buttons</SubHeading>
                            <BodyText>
                                I noticed that user intent selected from adding files to printing files as soon they select a file. Following this, I decided to replace &ldquo;Add file&rdquo; button with &ldquo;Print Files&rdquo; on selection, similar to original pattern.
                            </BodyText>
                        </div>

                        <GrayShowcase className="flex flex-col gap-8 items-center py-12">
                            <div className="relative w-[90%] max-w-[610px] h-[120px] md:h-[238px]">
                                <Image src={`/assets/printhub/context-buttons.png`} alt="Contextual buttons" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col gap-2 items-start w-[90%] max-w-[614px]">
                                <ProConCard variant="pro">Screen now had one primary action effectively reducing the time to decide</ProConCard>
                                <ProConCard variant="con">User still suffered with goal gradient problem as they didn&apos;t know what to do once file was added (but not selected)</ProConCard>
                                <ProConCard variant="con">In case of more than a 4-5 files, it would become tedious to select each and every file one by one because the user might have to scroll.</ProConCard>
                            </div>
                        </GrayShowcase>

                        <BodyText>
                            We tested this idea with users and got the following feedback.
                        </BodyText>

                        {/* User Quotes */}
                        <div className="flex flex-col gap-8 items-center w-full rounded-[32px]">
                            <div className="flex items-start justify-center gap-4">
                                <div className="relative w-[80px] md:w-[156px] h-[110px] md:h-[213px] shrink-0">
                                    <Image src={`${A}/user-quote-1.png`} alt="User 1" fill className="object-contain" />
                                </div>
                                <div className="bg-white flex items-start overflow-hidden px-4 py-2 rounded-3xl border-2 border-border-primary">
                                    <p className="font-(family-name:--font-geist) font-medium  text-text-primary text-base md:text-xl max-w-[349px]">
                                        &ldquo;How do I print file, I have added them already. At least in I knew what to do earlier&rdquo;
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start justify-center gap-4">
                                <div className="bg-white flex items-start overflow-hidden px-4 py-2 rounded-3xl border-2 border-border-primary">
                                    <p className="font-(family-name:--font-geist) font-medium text-text-primary text-base md:text-xl">
                                        &ldquo;I have to select so many files 🥲&rdquo;
                                    </p>
                                </div>
                                <div className="relative w-[80px] md:w-[156px] h-[110px] md:h-[215px] shrink-0 -scale-x-100">
                                    <Image src={`${A}/user-quote-2.png`} alt="User 2" fill className="object-contain" />
                                </div>
                            </div>
                        </div>

                        <BodyText>
                            The comment &ldquo;I knew what to do earlier&rdquo; was a frequent. Stakeholders were concerned that this change would cause a lot of confusion between users so we reimplemented original logic.
                        </BodyText>
                        <BodyText>
                            But then I realised something: Users where confused earlier and in Idea 2 because the goal wasn&apos;t visible. So I decided to only change the design slightly.
                        </BodyText>

                        {/* Final Design */}
                        <div className="flex flex-col items-start gap-4 w-full">
                            <Badge variant="green" icon="check">Final Design</Badge>
                            <SubHeading>By making applied settings visible, the final design removed reverification and reduced decision time during printing</SubHeading>
                            <BodyText>
                                I decided to keep &ldquo;Print Files&rdquo; as disabled in case no files, provide user a glimpse of final goal. Another functionality was click on Print without selection will print all files to reduce hassle of selection.
                            </BodyText>
                        </div>

                        <GrayShowcase className="flex flex-col gap-8 items-center py-12">
                            <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4">
                                <div className="relative w-full max-w-[286px] h-[118px]">
                                    <Image src={`${A}/final-dis.png`} alt="Final button before" fill className="object-contain" />
                                </div>
                                <div className="relative w-full max-w-[286px] h-[118px]">
                                    <Image src={`${A}/final-act.png`} alt="Final button after" fill className="object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-center w-[90%] max-w-[552px]">
                                <ProConCard variant="pro">This allows users to see what the next steps are.</ProConCard>
                                <ProConCard variant="pro">New functionality allows user to print all files without selecting them, removing selection hassle entirely.</ProConCard>
                            </div>
                        </GrayShowcase>

                        <BodyText>
                            As the deadline approached, we could not test this change and released it to users.
                        </BodyText>
                        <BodyText>
                            Follow up conversations showed positive feedback, especially on removing the need for selection, allowing flexibility when wrong files were uploaded, and improving speed when printing many files.
                        </BodyText>
                    </section>

                    {/* ══════════════════════════════════════════════════
                       UI SYSTEM
                       ══════════════════════════════════════════════════ */}
                    <section className="flex flex-col gap-6 md:gap-12 items-start w-full">
                        <SectionLabel>UI System</SectionLabel>

                        <div className="relative w-full aspect-[1071/636]">
                            <Image src={`${A}/ui-system-overview.png`} alt="UI System overview" fill className="object-contain" />
                        </div>

                        <BodyText>
                            The original app was based on Flutter, so I decided to use Material Design. Components from the new Material 3 Expressive system were used and selectively modified to fit the product.
                        </BodyText>

                        {/* Token System Images */}
                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-8">
                            <div className="flex flex-col gap-4 items-start justify-center flex-1 w-full">
                                <div className="relative w-full h-[100px] md:h-[160px]">
                                    <Image src={`${A}/image 9.png`} alt="Color tokens" fill className="object-contain" />
                                </div>
                                <div className="relative w-full h-[100px] md:h-[168px]">
                                    <Image src={`${A}/image 10.png`} alt="Typography tokens" fill className="object-contain" />
                                </div>
                                <div className="relative w-full h-[100px] md:h-[166px]">
                                    <Image src={`${A}/image 11.png`} alt="Spacing tokens" fill className="object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:gap-8 items-center flex-1 w-full">
                                <div className="relative w-full max-w-[378px] h-[240px] md:h-[383px]">
                                    <Image src={`${A}/component-tokens.png`} alt="Component tokens" fill className="object-contain" />
                                </div>
                                <div className="relative w-full max-w-[388px] h-[240px] md:h-[384px]">
                                    <Image src={`${A}/component-states.png`} alt="Component states" fill className="object-contain" />
                                </div>
                            </div>
                        </div>

                        <BodyText>
                            I used variables and a two-tiered token system to guarantee a clean, consistent build for development. This structure was designed to be scalable; with empty tokens ready for new colours. This ensured the new design met Material Design colour standards.
                        </BodyText>

                        {/* Full Token System Screenshot */}
                        <div className="bg-bg-primary overflow-hidden rounded-2xl md:rounded-[32px] shadow-[0px_3.8px_31.54px_0px_rgba(0,0,0,0.25),0px_2.85px_9.88px_0px_rgba(0,0,0,0.25)] w-full">
                            <div className="relative w-full aspect-[4096/2686]">
                                <Image src={`${A}/token-system-full.png`} alt="Full token system" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Component Nomenclature */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
                            <div className="relative w-[160px] md:w-[226px] h-[280px] md:h-[497px] shrink-0">
                                <Image src={`${A}/component-nomenclature.png`} alt="Component nomenclature" fill className="object-contain" />
                            </div>
                            <p className="font-(family-name:--font-geist) font-medium leading-normal text-text-primary text-base md:text-2xl text-center flex-1">
                                Clear nomenclature and mixture of various components allowed me to customise components to fit various situations and use cases.
                            </p>
                            <div className="relative w-[160px] md:w-[224px] h-[140px] md:h-[248px] shrink-0">
                                <Image src={`${A}/component-customisation.png`} alt="Component customisation" fill className="object-contain" />
                            </div>
                        </div>

                        <BodyText>
                            I built bigger components as a mixture of smaller atomic components. Auto Layout was used in order to maintain a consistent spacing and arranged even when the size of component changes.
                        </BodyText>

                        {/* What if more time / Main Takeaway */}
                        <div className="flex flex-col gap-4 w-full">
                            <Heading>What if I had more time?</Heading>
                            <div className="font-(family-name:--font-geist) font-medium leading-normal text-text-primary text-lg md:text-2xl w-full">
                                <p>My next immediate focus will be the web platform ensuring every user experiences the same consistent, unified design.</p>
                                <br />
                                <p>
                                    Moreover, some initial assumptions were green-lit quickly by stakeholders, we would like to conduct a thorough testing and make sure these really work.
                                </p>
                                <br />
                                <p>
                                    Future versions of Printhub could introduce features like user presets, deeper customization, and quick-print options tailored to individual needs.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <Heading>Main takeaway</Heading>
                            <div className="font-(family-name:--font-geist) font-medium leading-normal text-text-primary text-lg md:text-2xl w-full">
                                <p>
                                    The main takeaway from this project was on my process. Just providing design wasn&apos;t enough, designer and developers have to actively communicate in order to provide a experience as it is designed.
                                </p>
                                <br />
                                <p>
                                    Biggest change in my process is focusing on the bigger picture rather than just work as a designer.
                                </p>
                                <br />
                                <p>A great design that can scale is always better than a perfect one that can never be fully built.</p>
                            </div>
                        </div>
                    </section>

                    {/* ── Thank You ── */}
                    <Heading>Thank you!</Heading>
                </div>

                {/* ── Footer ── */}
                <Footer />
            </div>
        </div>
    );
}
