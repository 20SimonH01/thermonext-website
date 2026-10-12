import { Flame, Droplets, Wind, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const SERVICES = [
  {
    icon: Flame,
    title: "Heizung",
    description:
      "Planung, Installation, Reparatur und Wartung moderner Heizsysteme — von der klassischen Gastherme bis zur Wärmepumpe.",
    points: ["Heizungsmodernisierung", "Wartung & Notdienst", "Förderfähige Systeme"],
  },
  {
    icon: Droplets,
    title: "Sanitär",
    description:
      "Badumbauten, Sanierungen und sanitärtechnische Installationen — sauber geplant und termingerecht umgesetzt.",
    points: ["Komplette Badumbauten", "Rohrsanierung", "Reparaturen & Service"],
  },
  {
    icon: Wind,
    title: "Klima",
    description:
      "Split-Klimaanlagen und Lüftungstechnik für ein angenehmes Raumklima — für Zuhause, Büro oder Gewerbe.",
    points: ["Split-Klimaanlagen", "Lüftungstechnik", "Wartung & Instandhaltung"],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
            LEISTUNGEN
          </span>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Alles aus einer Hand.
          </h2>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-neutral-600">
            Drei Gewerke, ein Ansprechpartner. Thermonext deckt den gesamten
            Lebenszyklus Ihrer Gebäudetechnik ab — von der Beratung bis zum
            Service danach.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="glass-panel group flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                  <service.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-neutral-700"
                    >
                      <span className="h-1 w-1 rounded-full bg-neutral-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-neutral-950"
                >
                  Anfragen
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
