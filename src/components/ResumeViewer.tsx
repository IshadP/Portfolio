"use client";

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { DownloadSimpleIcon } from "@phosphor-icons/react";

// Set worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

export default function ResumeViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let renderTask: pdfjsLib.RenderTask | null = null;
    let isMounted = true;

    const renderPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument("/resume.pdf");
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
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex justify-center items-center w-full">
        <a
          href="/resume.pdf"
          download="Ishad_Pande_Resume.pdf"
          className="flex items-center gap-2 hover:bg-text-primary hover:text-bg-primary bg-bg-primary text-text-primary duration-300 px-6 py-3 rounded-full font-label-md transition-all"
        >
          <DownloadSimpleIcon size={20} weight="bold" />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="w-full bg-bg-secondary rounded-2xl p-4 md:p-8 flex justify-center overflow-auto border-2 border-outline-primary shadow-sm min-h-[600px] relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-secondary z-10">
            <div className="w-8 h-8 border-4 border-text-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center py-20">
            <p className="font-body text-text-secondary">{error}</p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline font-body"
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