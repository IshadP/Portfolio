import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import FadeIn from "@/components/ui/FadeIn";
import Divider from "@/components/ui/Divider";
import ResumeViewer from "@/components/ResumeViewer";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center w-full relative bg-bg-default">
      <div className="w-content flex flex-col gap-0 bg-bg-default">
        <Hero />
        <FadeIn className="relative w-content z-10 bg-bg-default">
          
          <div className="border border-outline rounded-2xl overflow-hidden mt-4 bg-bg-default flex flex-col">
            
            {/* 1. Header & Quick Actions Bento Grid */}
            <div className="w-full flex flex-col md:flex-row justify-start items-stretch border-b border-outline">
              
              {/* Left Column: Professional Summary */}
              <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 border-b md:border-b-0 md:border-r border-outline">
                <h2 className="text-text-primary font-h3">
                  My Resume
                </h2>
        
                </div>
            </div>

            {/* 2. Interactive Resume Viewer */}
            <div className="w-full">
              <ResumeViewer />
            </div>

            <Divider />
            <Footer />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

