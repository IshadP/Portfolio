import CopyEmailButton from "./CopyEmailButton";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-18 py-6 sm:py-0 w-full gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4 px-4 font-(family-name:--font-geist) text-[20px] text-[#222]">
                <a href="https://x.com/ishadpande" className="hover:opacity-80 transition-opacity">
                    <span className="flex h-10 w-10 md:h-auto md:w-auto items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/assets/X.png" alt="X" width={40} height={40} className="block" />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/ishadpande" className="hover:opacity-80 transition-opacity">
                    <span className="flex h-10 w-10 md:h-auto md:w-auto items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/assets/LinkedIn.png" alt="LinkedIn" width={40} height={40} className="block" />
                    </span>
                </a>
                <a href="https://www.behance.net/ishadpande" className="hover:opacity-80 transition-opacity">
                    <span className="flex h-10 w-10 md:h-auto md:w-auto items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/assets/Behance.png" alt="Behance" width={40} height={40} className="block" />
                    </span>
                </a>
            </div>

            {/* Email CTA */}
            <div className="flex items-center overflow-hidden px-4 py-4 ">
                <div className="flex items-center gap-2 justify-center overflow-hidden p-2 flex-wrap">
                    <span className="font-(family-name:--font-geist) font-medium leading-normal text-[#b7b7b7] text-[16px] md:text-[20px]">
                        Let’s Talk
                    </span>
                    <span className="font-(family-name:--font-geist) font-medium leading-normal text-[#b7b7b7] text-[16px] md:text-[20px]">
                        →
                    </span>
                    <a
                        href="mailto:ispande16@gmail.com"
                        className="font-(family-name:--font-geist) font-medium leading-normal decoration-[10%] decoration-dotted text-[#333] text-[16px] md:text-[20px] underline underline-offset-[20%]"
                    >
                        ispande16@gmail.com
                    </a>
                    <CopyEmailButton
                        iconSize={24}
                    />
                </div>
            </div>
        </footer>
    );
}
