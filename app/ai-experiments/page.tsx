import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FadeIn from "../components/FadeIn";
import PrototypeCard from "../components/ExperimentCard";


export default function AIExperiments() {
    return (
        <div className="bg-bg-primary relative">
            {/* ── Hero Section ── */}
            <Hero />

            {/* ── Main Content ── */}
            <FadeIn>
                <div className="relative z-10 mx-auto flex w-full bg-bg-primary max-w-(--max-content-width) flex-col gap-8 px-4 pb-32">

                    {/* ── Navbar ── */}
                    <Navbar />

                    {/* ── Content Grid ── */}
                    <div className="flex flex-wrap items-start content-start gap-y-[14px] gap-x-[24px] w-full mt-4">

                        {/* Prototype Cards */}
                        <div className="flex-[1_1_400px]">
                            <PrototypeCard
                                title="Prototype for testing (Printhub)"
                                imageSrc="/assets/printhub-screenshot.png"
                                href="https://printproto.vercel.app/"
                            />
                        </div>
                        <div className="flex-[1_1_400px]">
                            <PrototypeCard
                                title="PomDom"
                                imageSrc="/assets/pomdom-screenshot.png"
                                href="https://github.com/IshadP/Pomdom"
                            />
                        </div>

                        {/* How I Build With AI Card */}
                        <div className="w-full bg-bg-primary border-3 border-outline-primary rounded-4xl p-8 flex flex-col items-start gap-6">
                            <h2 className=" text-h3 text-text-primary tracking-[-1px] w-full">
                                How I build with AI?
                            </h2>

                            <div className="flex flex-col items-start gap-2 w-full">
                                <h3 className=" text-h4 text-text-primary tracking-[-0.5px]">
                                    1. The Foundation (10%)
                                </h3>
                                <p className=" text-body text-text-secondary leading-normal">
                                    Every project starts by writing a simple document (a Markdown file) that defines the goals and the technical rules. This gives the AI a clear set of instructions to follow and reduces hallucinations.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-2 w-full">
                                <h3 className=" text-h4 text-text-primary tracking-[-0.5px]">
                                    2. The Heavy Lifting (50%)
                                </h3>
                                <p className=" text-body text-text-secondary leading-normal">
                                    Using Figma MCP allows for quick translation of design to code. This allows the AI to build the main structure and the repetitive parts of the interface quickly.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-2 w-full">
                                <h3 className=" text-h4 text-text-primary tracking-[-0.5px]">
                                    3. The Final Polish (40%)
                                </h3>
                                <p className=" text-body text-text-secondary leading-normal">
                                    This stage involves prompting AI to break parts of the design into components to create a more scalable structure. I also hand-code most interactions here, fine-tuning values until the interaction matches the intended experience.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ── Page Specific Footer ── */}
                    <Footer />

                </div>
            </FadeIn>
        </div>
    );
}
