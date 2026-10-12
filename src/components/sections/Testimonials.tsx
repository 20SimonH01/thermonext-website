"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// Platzhalter — vor dem Go-Live durch echte Kundenstimmen ersetzen
// (z. B. aus Google-Bewertungen) und ggf. mit Einverständnis verlinken.
const TESTIMONIALS = [
  { service: "Heizungswartung", name: "Privatkunde" },
  { service: "Split-Klimaanlage", name: "Gewerbekunde" },
  { service: "Badumbau", name: "Privatkunde" },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
              STIMMEN
            </span>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Was unsere Kunden sagen.
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
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="shrink-0 sm:basis-[calc((100vw-72rem)/2-1.25rem)]" />
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-panel flex w-[300px] shrink-0 snap-center flex-col rounded-3xl p-7 sm:w-[340px]"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-neutral-900 text-neutral-900" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                Hier erscheint in Kürze eine echte Kundenstimme zum Thema{" "}
                {t.service.toLowerCase()}.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-neutral-200" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="shrink-0 sm:basis-[calc((100vw-72rem)/2-1.25rem)]" />
        </div>
      </ScrollReveal>
    </section>
  );
}
