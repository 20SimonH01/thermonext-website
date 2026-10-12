import ScrollReveal from "../ScrollReveal";

const FOUNDERS = [
  {
    name: "Baha Sinan",
    role: "Geschäftsführer",
    qualification: "Meister des Sanitär-, Heizungs- und Klimatechniker-Handwerks (SHK)",
    initials: "BS",
  },
  {
    name: "Simon Heck",
    role: "Geschäftsführer",
    qualification:
      "Staatlich geprüfter Sanitärtechniker & Meister des SHK-Handwerks",
    initials: "SH",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
            ÜBER UNS
          </span>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Zwei Meister. Ein Versprechen.
          </h2>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-neutral-600">
            Thermonext wurde von zwei SHK-Meistern gegründet, die beide
            wissen, worauf es bei Gebäudetechnik wirklich ankommt: saubere
            Arbeit, ehrliche Beratung und Verlässlichkeit.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {FOUNDERS.map((person, i) => (
            <ScrollReveal key={person.name} delay={i * 0.1}>
              <div className="glass-panel flex h-full flex-col gap-5 rounded-3xl p-8 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-base font-semibold tracking-wide text-white">
                  {person.initials}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950">
                    {person.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-neutral-500">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {person.qualification}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
