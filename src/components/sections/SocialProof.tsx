import { ShieldCheck, Clock, Banknote, Users } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const PROOF_POINTS = [
  { icon: ShieldCheck, label: "SHK-Meisterqualifikation" },
  { icon: Users, label: "Privat · Gewerbe · Öffentlich" },
  { icon: Banknote, label: "Transparente Festpreise" },
  { icon: Clock, label: "Schnelle Reaktionszeit" },
];

export default function SocialProof() {
  return (
    <section className="relative border-y border-neutral-900/[0.06] bg-mist/40 py-10">
      <ScrollReveal className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {PROOF_POINTS.map((point) => (
            <div
              key={point.label}
              className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-900/[0.06]">
                <point.icon className="h-4.5 w-4.5 text-neutral-800" strokeWidth={1.75} />
              </div>
              <span className="text-sm font-medium text-neutral-700">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
