"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Snowflake, Flame, Wrench, Bath, Hammer } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const PROJECTS = [
  { icon: Snowflake, title: "Split-Klimaanlagen", tag: "Klima" },
  { icon: Flame, title: "Heizungswartung", tag: "Heizung" },
  { icon: Wrench, title: "Reparaturen & Notdienst", tag: "Service" },
  { icon: Bath, title: "Badumbauten", tag: "Sanitär" },
  { icon: Hammer, title: "Sanierungen", tag: "Umbau" },
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="referenzen" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
              REFERENZEN
            </span>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Projekte, auf die wir stolz sind.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Zurück"
              className="glass-btn-ghost flex h-11 w-11 items-center justify-center rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Weiter"
              className="glass-btn-ghost flex h-11 w-11 items-center justify-center rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} className="mt-12">
        <div
          ref={trackRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="shrink-0 sm:basis-[calc((100vw-72rem)/2-1.25rem)]" />
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="relative flex h-80 w-[280px] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-3xl bg-neutral-950 p-7 sm:w-[320px]"
            >
              <div className="mesh-bg absolute inset-0 opacity-40" />
              <project.icon
                className="absolute right-6 top-6 h-8 w-8 text-white/20"
                strokeWidth={1.25}
              />
              <span className="relative text-xs font-medium tracking-wide text-white/50">
                {project.tag}
              </span>
              <h3 className="relative mt-2 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="relative mt-2 text-sm text-white/50">
                Projektfotos folgen in Kürze
              </p>
            </div>
          ))}
          <div className="shrink-0 sm:basis-[calc((100vw-72rem)/2-1.25rem)]" />
        </div>
      </ScrollReveal>
    </section>
  );
}
