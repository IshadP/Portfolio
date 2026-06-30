"use client"

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function AboutSection() {
    return (
        <div className="w-full bg-bg-default flex flex-col  justify-start items-start">

            <p className="px-4 pt-4 mb-4 pb-2 border-b border-outline font-label-md-mono text-text-muted w-full">About me</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
                {/* Content Area */}
                <div className="w-full px-4 col-span-1 flex flex-col justify-start items-start gap-4 md:gap-6">



                    <div className="flex flex-col gap-2 md:gap-4 text-text-muted font-body-sm">
                        <p>
                            My first introduction to design was in 6th grade when I wondered &quot;Why do these cars look so good?&quot;.
                        </p>
                        <p>
                            Fast forward to my second year, I picked up designing again to answer a single question &quot;How should this app look and feel?&quot;.
                        </p>
                        <p>
                            I have been designing ever since. But I go back to development once in a while just for fun.
                        </p>
                    </div>

                    {/* Action Link */}
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-1 text-primary font-body-sm hover:underline underline-offset-4 group mt-4"
                    >
                        <span>Learn more about me</span>
                        <ArrowRightIcon
                            size={16}
                            weight="bold"
                            className="transform transition-transform group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>

                {/* Image Block */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden col-span-1 relative">
                    <Image
                        fill
                        className="object-cover"
                        src="/Photo.jpg"
                        alt="Ishad Pande"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}