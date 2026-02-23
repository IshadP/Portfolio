"use client";

import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
    fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number>(800);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const containerRef = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setContainerWidth(entry.contentRect.width);
                }
            });
            observer.observe(node);
            setContainerWidth(node.clientWidth);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full rounded-(--radius-card) border-2 border-border-primary overflow-hidden bg-white flex flex-col items-center gap-4 p-4 md:p-8"
        >
            <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                    <div className="flex items-center justify-center py-20">
                        <p className="font-(family-name:--font-geist-mono) text-lg text-text-tertiary animate-pulse">
                            Loading resume…
                        </p>
                    </div>
                }
                error={
                    <div className="flex items-center justify-center py-20">
                        <p className="font-(family-name:--font-geist-mono) text-lg text-text-tertiary">
                            Failed to load PDF. Please try downloading instead.
                        </p>
                    </div>
                }
            >
                {Array.from(new Array(numPages), (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={Math.min(containerWidth - 64, 900)}
                        className="mb-4 shadow-lg rounded-lg overflow-hidden"
                    />
                ))}
            </Document>
        </div>
    );
}
