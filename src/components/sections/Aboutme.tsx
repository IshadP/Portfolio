"use client"

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { DotPattern } from "../ui/DotPattern";
import { ImageFrame } from "../ui/ImageFrame";

export default function AboutSection() {
    return (
        <div className="w-full bg-bg-default flex flex-col justify-center items-start">
            <div className="w-full flex justify-center">
                <div className="w-full md:w-content flex flex-row gap-2 px-4 pb-2 border-b border-outline font-mono-md  text-text-muted">
                    <p> &gt; </p>
                    <p className="">About me</p>
                </div>
            </div>
            <div className="w-full">
          {/* Content Area */}

          <div className="w-full relative overflow-hidden h-100 p-8">
            <DotPattern className="absolute opacity-50 [mask-image:linear-gradient(to_bottom,_transparent,_black,_black,_black,_transparent)] [webkit-mask-image:linear-gradient(to_bottom,_transparent,_black,_black,_black,_transparent)]" />
            <div id="image-container" className="w-full flex justify-center">
              <ImageFrame src="/Photo.jpg" alt="Ishad Pande" size={6} className="absolute z-10 hover:scale-105 hover:-translate-y-2  transition-all duration-300" />
              <ImageFrame src="/about/trip1.webp" alt="Ishad Pande" size={6} className="absolute -translate-x-56 translate-y-8 -rotate-6 hover:scale-105 hover:translate-y-6 hover:-tranlate-x-52 transition-all duration-300" />
              <ImageFrame src="/about/CSMT.webp" alt="Ishad Pande" size={6} className="absolute translate-x-56 translate-y-8 rotate-6 hover:scale-105 hover:translate-y-6 hover:tranlate-x-52 transition-all duration-300" />
            </div>

          </div>
          <div className="w-full flex justify-center">
                <div className="w-full md:w-content px-4 col-span-1 flex flex-col justify-start items-start gap-4 md:gap-6">
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
                        className="inline-flex items-center gap-1 text-primary font-body-sm hover:underline underline-offset-4 group"
                    >
                        <span>Learn more about me</span>
                        <Icon
                            name="arrow_forward"
                            size={16}
                            className="transform transition-transform group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>
          </div>
            </div>
        </div>
    );
}
