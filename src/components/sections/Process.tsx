import { MessageSquare, ClipboardList, FileCheck2, Wrench } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Anfrage",
    description:
      "Sie schildern kurz Ihr Anliegen — per Formular oder Telefon. Unverbindlich und ohne versteckte Kosten.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Beratung",
    description:
      "Wir sprechen über Ihre Situation, prüfen vor Ort oder telefonisch und klären offene Fragen.",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Festpreis-Angebot",
    description:
      "Sie erhalten ein klares, transparentes Angebot — ohne Überraschungen bei der Abrechnung.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Umsetzung",
    description:
      "Nach Ihrer Freigabe erledigen wir die Arbeiten termingerecht und mit sauberer Ausführung.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
            SO LÄUFT&apos;S AB
          </span>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            In vier Schritten zur fertigen Lösung.
          </h2>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-neutral-600">
            Kein Rätselraten, keine versteckten Kosten. Sie wissen jederzeit,
            was als Nächstes passiert.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.1}>
              <div className="glass-panel relative flex h-full flex-col rounded-3xl p-7">
                <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400">
                  {item.step}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
