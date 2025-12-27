"use client";

import Image from "next/image";

// Replace this with your actual map image path
// Make sure your location is EXACTLY in the center of this image file.
import map1 from "../../public/map1.png";

export default function LocationMap() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden min-h-">

            {/* 1. The Map Image */}
            {/* object-cover: Fills the space */}
            {/* object-center: Keeps the center of the image (your location) locked to the center of the div */}
            <Image
                src={map1}
                alt="Map location"
                fill
                className="object-cover object-center"
                priority
            />

            {/* 2. The Pulsing Dot */}
            {/* Positioned absolutely in the center */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center">
                <div className="absolute inline-flex h-full w-full animate-[ping_3s_ease-out_infinite] rounded-full bg-blue-400 opacity-75 duration-[3s] ease-in-out"></div>
                <div className="relative inline-flex h-6 w-6 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
            </div>

            <div className="absolute z-20 flex bottom-3 left-3 text-black font-medium p-2 bg-white/70 rounded-2xl tracking-tight">Nagpur, India</div>

        </div>
    );
}