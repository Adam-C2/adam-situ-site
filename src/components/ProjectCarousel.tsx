"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/content/siteContent";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  projects: Project[];
};

/** Pick the card whose visual center is closest to the carousel strip’s on-screen center (not scrollLeft math, which disagrees with scaled/layout boxes). */
function indexClosestToVisualCenter(
  container: HTMLDivElement,
  cards: (HTMLDivElement | null)[],
): number {
  const cr = container.getBoundingClientRect();
  const midX = cr.left + cr.width / 2;
  let best = 0;
  let bestDist = Infinity;
  let fallback = 0;
  let fallbackDist = Infinity;

  cards.forEach((card, i) => {
    if (!card) return;
    const r = card.getBoundingClientRect();
    const cardMidX = r.left + r.width / 2;
    const dist = Math.abs(cardMidX - midX);

    if (dist < fallbackDist) {
      fallbackDist = dist;
      fallback = i;
    }

    // Prefer cards that are actually on-screen enough (avoids early highlight while scrolling in).
    const visibleWidth =
      Math.min(r.right, cr.right) - Math.max(r.left, cr.left);
    if (visibleWidth < r.width * 0.35) return;

    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  });

  return bestDist === Infinity ? fallback : best;
}

export function ProjectCarousel({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const syncActiveFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || projects.length === 0) return;

    const best = indexClosestToVisualCenter(container, cardRefs.current);
    setActiveIndex((prev) => (prev === best ? prev : best));
  }, [projects.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scheduleSync = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(syncActiveFromScroll);
    };

    container.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);

    const ro = new ResizeObserver(scheduleSync);
    ro.observe(container);

    // Two frames: layout + transforms settled (images, snap).
    requestAnimationFrame(() => {
      requestAnimationFrame(syncActiveFromScroll);
    });

    return () => {
      container.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      ro.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [syncActiveFromScroll]);

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="-mx-6 md:mx-0">
        <div
          ref={scrollRef}
          role="region"
          aria-label="Projects carousel"
          className="projects-carousel flex gap-6 overflow-x-auto overscroll-x-contain px-6 py-10 md:px-0 snap-x snap-mandatory"
        >
          {projects.map((project, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={`${project.title}-${i}`}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`shrink-0 snap-center transition-[transform,opacity] duration-300 ease-out will-change-transform w-[min(85vw,22rem)] sm:w-96 ${
                  isActive
                    ? "z-10 scale-[1.04] opacity-100"
                    : "z-0 scale-[0.96] opacity-90"
                }`}
              >
                <ProjectCard project={project} className="w-full shadow-sm" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
