"use client";

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { m, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import Footer from "@/components/ui/Footer";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function ResumePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<pdfjsLib.RenderTask | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { y:20, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  useEffect(() => {
    let loadingTask: pdfjsLib.PDFDocumentLoadingTask | null = null;
    let isMounted = true;

    const ignoreCancelledRender = (err: unknown) => {
      if (err instanceof Error && err.name === "RenderingCancelledException") {
        return;
      }
      throw err;
    };

    const cancelActiveRender = async () => {
      const activeRenderTask = renderTaskRef.current;
      if (!activeRenderTask) return;

      activeRenderTask.cancel();

      try {
        await activeRenderTask.promise;
      } catch (err: unknown) {
        ignoreCancelledRender(err);
      } finally {
        if (renderTaskRef.current === activeRenderTask) {
          renderTaskRef.current = null;
        }
      }
    };

    const renderPDF = async () => {
      try {
        await cancelActiveRender();

        loadingTask = pdfjsLib.getDocument("/Ishad_Pande.pdf");
        const pdf = await loadingTask.promise;
        if (!isMounted) return;

        const page = await pdf.getPage(1);
        if (!isMounted) return;

        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        if (!canvas || !isMounted) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
          canvas: canvas,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;

        await renderTask.promise;

        if (renderTaskRef.current === renderTask) {
          renderTaskRef.current = null;
        }

        if (isMounted) {
          setLoading(false);
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "RenderingCancelledException") {
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

    return () => {
      isMounted = false;
      loadingTask?.destroy();

      const activeRenderTask = renderTaskRef.current;
      if (activeRenderTask) {
        activeRenderTask.cancel();
        activeRenderTask.promise.catch((err: unknown) => {
          if (err instanceof Error && err.name === "RenderingCancelledException") {
            return;
          }
          console.error("Error cancelling PDF render:", err);
        });
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative bg-bg-default">
      <div className="w-full md:w-content flex flex-col gap-0 px-4 md:px-0 bg-bg-default">
        <m.div
          className="relative flex flex-col w-full md:w-content z-10 bg-bg-default gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mt-8 bg-bg-default flex flex-col gap-6">
            {/* Header */}
            <m.div
              className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3"
              variants={itemVariants}
            >
              <h2 className="text-text-primary font-h3">
                My Resume
              </h2>
              <a
                href="/Ishad_Pande.pdf"
                download="Ishad_Pande.pdf"
                className="inline-flex items-center justify-center py-2 gap-2 px-4 text-text-primary bg-transparent hover:bg-primary-muted hover:text-primary rounded-full transition-colors outline-none border-none"
                title="Download Resume"
                aria-label="Download Resume"
              >
                <Icon name="download" size={20} />
                <p className="font-body-sm">Download Resume</p>
              </a>
            </m.div>

            {/* Canvas PDF Viewer */}
            <m.div
              className="w-full bg-bg-subtle flex justify-center overflow-auto min-h-[600px] relative"
              variants={itemVariants}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-bg-subtle z-10">
                  <m.div
                    className="w-8 h-8 border-4 border-text-primary border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
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
                <canvas ref={canvasRef} className="max-w-full h-auto bg-bg-subtle p-4 rounded-2xl" />
              )}
            </m.div>
          </div>
          <m.div variants={itemVariants}>
            <Footer />
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
