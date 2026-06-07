import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import Hatching from "@/components/Hatching";
import ResumeViewer from "@/components/ResumeViewer";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen items-center relative bg-bg-subtle px-2">
      <div className="w-full flex flex-col justify-center max-w-5xl z-1 @container">
        {/* Hero Background */}
        <Hero />

        {/* Content wrapper */}
        <FadeIn className="w-full flex justify-center ">
          <div className="flex max-w-5xl w-full flex-col bg-bg-subtle rounded-lg  relative">
            {/* Top Gradient Fade Overlay */}
            <div className="sticky top-0 inset-x-0 w-full h-32 bg-linear-to-b from-bg-subtle from-20% to-transparent to-100% pointer-events-none z-40 -mb-32"></div>

            <Navbar />

            <Hatching />

            <div className="w-full border-x border-t border-border-default overflow-hidden flex flex-col items-center">
              <ResumeViewer />
            </div>

            <Hatching />

            <Footer />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
