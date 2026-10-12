import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Thermonext Gebäudetechnik GmbH",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <div className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <strong>Hinweis (nur für den internen Entwurf sichtbar):</strong>{" "}
        Diese Seite ist ein Platzhalter-Entwurf nach § 5 TMG / § 18 MStV.
        Geschäftsadresse, Handelsregisterdaten, Kontaktinformationen und
        Kammerangaben fehlen noch und sind durch die echten Angaben zu
        ersetzen. Vor dem Go-Live bitte rechtlich prüfen lassen.
      </div>

      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">
        Impressum
      </h1>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Angaben gemäß § 5 TMG</p>
        <p>
          Thermonext Gebäudetechnik GmbH
          <br />
          [Straße, Hausnummer – folgt]
          <br />
          [PLZ, Ort – folgt]
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Vertreten durch</p>
        <p>Geschäftsführer: Baha Sinan, Simon Heck</p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Kontakt</p>
        <p>
          Telefon: [folgt]
          <br />
          E-Mail: [folgt]
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Registereintrag</p>
        <p>
          Eintragung im Handelsregister
          <br />
          Registergericht: [folgt]
          <br />
          Registernummer: [folgt]
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Umsatzsteuer-ID</p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          [folgt]
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Berufsbezeichnung</p>
        <p>
          Meister des Sanitär-, Heizungs- und Klimatechniker-Handwerks (SHK),
          verliehen in Deutschland.
          <br />
          Zuständige Kammer: [Handwerkskammer – folgt]
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </p>
        <p>
          Baha Sinan, Simon Heck
          <br />
          Anschrift wie oben
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">
          EU-Streitschlichtung
        </p>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben. Wir sind nicht
          verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </main>
  );
}
