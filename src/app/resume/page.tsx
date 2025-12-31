"use client";

import Button from "@/components/button";
import NavBar from "@/components/nav-bar";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-background flex flex-col items-center w-full">
            {/* <div className="sticky top-0 z-50 w-full flex justify-center sm:py-4">
                <NavBar />
            </div> */}

            <div className="max-w-5xl w-full flex flex-col items-center p-4 md:p-8 gap-8">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-4">
                        <Button variant="secondary" href="/" leftIcon="CaretLeftIcon" isOnlyIcon> </Button>
                        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
                    </div>
                    <div className="sm:flex hidden ">
                        <Button
                            variant="primary"
                            href="/Ishad_Pande_Resume.pdf"
                            // @ts-ignore - download is not in common Button props but we want it for the anchor
                            download="Ishad_Pande_Resume.pdf"
                            leftIcon="DownloadIcon"

                        >
                            Download Resume
                        </Button>
                    </div>
                </div>

                <div className="w-full bg-white rounded-2xl shadow-sm border border-border p-4 sm:p-8 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/resume.svg"
                        alt="Ishad Pande Resume"
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:hidden flex">
                    <Button
                        variant="primary"
                        href="/Ishad_Pande_Resume.pdf"
                        // @ts-ignore - download is not in common Button props but we want it for the anchor
                        download="Ishad_Pande_Resume.pdf"
                        leftIcon="DownloadIcon"

                    >
                        Download Resume
                    </Button>
                </div>
            </div>
        </main>
    );
}
