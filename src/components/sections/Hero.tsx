"use client";

import { motion } from "framer-motion";
import GlassButton from "../GlassButton";

const TRUST_ITEMS = [
  "Meisterbetrieb SHK",
  "Privat · Gewerbe · Öffentlich",
  "Festpreis-Angebote",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* ambient liquid blobs — monochrome depth behind the glass */}
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <motion.div
        className="blob -left-40 top-10 h-[420px] w-[420px] bg-neutral-900/[0.07]"
        animate={{ y: [0, 24, 0], x: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob -right-32 top-48 h-[380px] w-[380px] bg-neutral-900/[0.05]"
        animate={{ y: [0, -20, 0], x: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
          Heizung · Sanitär · Klima
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl md:text-7xl"
        >
          Gebäudetechnik,
          <br />
          der Sie vertrauen können.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-neutral-600"
        >
          Thermonext plant, installiert und wartet Heizungs-, Sanitär- und
          Klimasysteme — für Privat, Gewerbe und öffentliche Auftraggeber.
          Meisterqualität, klare Kommunikation, saubere Ausführung.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <GlassButton href="/#kontakt">Jetzt Termin sichern</GlassButton>
          <GlassButton href="/#leistungen" variant="ghost">
            Leistungen ansehen
          </GlassButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="text-xs font-medium tracking-wide text-neutral-500">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-neutral-300 p-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
