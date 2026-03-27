"use client";

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { motion, useAnimation } from "framer-motion";
import { DownloadSimpleIcon } from "@phosphor-icons/react";

// Set worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

/* ── Motion config ── */
const spring = { type: "spring", stiffness: 300, damping: 25 } as const;

const ctaWrapperVariants = {
  rest: {
    paddingBottom: "0.375rem",
    marginTop: "0rem"
  },
  tap: {
    paddingBottom: "0rem",
    marginTop: "0.300rem"
  },
};

export default function ResumeViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent triggering if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key.toLowerCase() === 'v') {
        controls.start("tap");
        linkRef.current?.click();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'v') {
        controls.start("rest");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [controls]);

  useEffect(() => {
    let renderTask: pdfjsLib.RenderTask | null = null;
    let isMounted = true;

    const renderPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument("/Ishad_Pande.pdf");
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        if (!canvas || !isMounted) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render context including the required canvas property
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
          canvas: canvas,
        };

        // Assign the task to our variable so we can cancel it if the component unmounts
        renderTask = page.render(renderContext);

        await renderTask.promise;

        if (isMounted) {
          setLoading(false);
        }
      } catch (err: any) {
        // Ignore errors caused by us explicitly cancelling the render task
        if (err?.name === "RenderingCancelledException") {
          return;
        }

        console.error("Error rendering PDF:", err);
        if (isMounted) {
          setError("Failed to load PDF. Please try downloading it directly.");
          setLoading(false);
        }
      }
    };

    renderPDF();

    // Cleanup function: Cancel the render task if the component unmounts or re-renders
    return () => {
      isMounted = false;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 my-8 w-full">
      <div className="flex justify-center items-center w-full">
        <motion.a
          ref={linkRef}
          href="/Ishad_Pande.pdf"
          download="Ishad_Pande.pdf"
          className="w-full max-w-[280px]"
          initial="rest"
          animate={controls}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            variants={ctaWrapperVariants}
            transition={spring}
            className="w-full px-0.5 pt-0.5 bg-blue-950 rounded-sm flex"
          >
            <motion.div
              transition={spring}
              className="self-stretch w-full p-3 bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2 overflow-hidden"
            >
              <DownloadSimpleIcon size={20} weight="bold" className="text-active-fg" />
              <span className="font-label-sm-mono text-active-fg">DOWNLOAD PDF</span>
              <div className="h-6 w-6 bg-blue-900 rounded-sm flex justify-center items-center">
                <span className="font-label-sm-mono text-active-fg">V</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.a>
      </div>

      <div className="w-full bg-bg-subtle p-4 md:p-8 flex justify-center overflow-auto border-y border-border-default shadow-sm min-h-[600px] relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-subtle z-10">
            <div className="w-8 h-8 border-4 border-text-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center py-20">
            <p className="text-body text-text-secondary">{error}</p>
            <a
              href="/Ishad_Pande.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline text-body"
            >
              Open PDF in new tab
            </a>
          </div>
        ) : (
          <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg shadow-md bg-white" />
        )}
      </div>
    </div>
  );
}