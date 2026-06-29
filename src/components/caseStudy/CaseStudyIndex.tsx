"use client";

import { useEffect, useState } from "react";

export function CaseStudyIndex() {
  const [sections, setSections] = useState<{ id: string; label: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const elements = document.querySelectorAll("section[id]");
    const items = Array.from(elements).map((el) => ({
      id: el.id,
      label: el.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    }));
    setSections(items);

    // Set initial active section if elements exist
    if (items.length > 0) {
      setActiveId(items[0].id);
    }

    // IntersectionObserver to detect active section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    // Handle scroll positions to slide index up/down
    const handleWindowScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const topOffset = window.scrollY + rect.top;
      const offset = 200; // Scroll target is 100px below the top of the screen
      window.scrollTo({
        top: topOffset - offset,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav className={`fixed left-[calc(50%+34rem)] ${isScrolled ? "top-24" : "top-48"} transition-[top] duration-300 ease-in-out hidden lg:flex flex-col pl-4 py-2 z-50`}>
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleScroll(e, id)}
            className={`font-label-sm-mono transition-colors duration-150 py-2 px-4  rounded-full ${isActive ? "text-text-primary font-semibold" : "text-text-muted hover:bg-bg-subtle hover:text-text-primary"
              }`}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
