"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function CaseStudyIndex() {
  const [sections, setSections] = useState<{ id: string; label: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll("section[id]");
    const items = Array.from(elements).map((el) => ({
      id: el.id,
      label: el.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    }));
    setSections(items);
    if (items.length > 0) {
      setActiveId(items[0].id);
    }

    // Track active section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }
    );
    elements.forEach((el) => sectionObserver.observe(el));

    // Track scroll position via a sentinel instead of a scroll listener —
    // no unthrottled JS running on every scroll frame.
    const sentinelObserver = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (sentinelRef.current) sentinelObserver.observe(sentinelRef.current);

    return () => {
      sectionObserver.disconnect();
      sentinelObserver.disconnect();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  };

  if (sections.length === 0) return null;

  return (
    <>
      {/* Invisible sentinel at ~80px scroll depth; add matching height/position in your layout */}
      <div ref={sentinelRef} className="absolute top-20 h-px w-px" aria-hidden="true" />

      <nav
        aria-label="Case study sections"
        className={`fixed left-[calc(50%+34rem)] ${
          isScrolled ? "top-24" : "top-48"
        } transition-[top] duration-300 ease-in-out hidden lg:flex flex-col pl-4 py-2 z-50`}
      >
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <Link
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              aria-current={isActive ? "true" : undefined}
              className={`font-label-sm-mono transition-colors duration-150 py-2 px-4 rounded-full ${
                isActive
                  ? "text-text-primary font-semibold"
                  : "text-text-muted hover:bg-bg-subtle hover:text-text-primary"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}