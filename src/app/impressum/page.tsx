import type { Metadata } from "next";
import {
  COMPANY_NAME,
  ADDRESS_STREET,
  ADDRESS_ZIP_CITY,
  MANAGING_DIRECTORS,
  PHONE_DISPLAY,
  EMAIL_DISPLAY,
  REGISTER_COURT,
  REGISTER_NUMBER,
  VAT_ID,
  CHAMBER,
  PROFESSION_TITLE,
  PROFESSION_AWARDED_IN,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum | Thermonext Gebäudetechnik GmbH",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <div className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <strong>Hinweis (nur für den internen Entwurf sichtbar):</strong>{" "}
        Diese Seite ist ein Platzhalter-Entwurf nach § 5 TMG / § 18 MStV. Alle
        noch offenen Angaben sind zentral in{" "}
        <code className="rounded bg-amber-100 px-1 py-0.5">
          src/lib/constants.ts
        </code>{" "}
        als TODO markiert und müssen nur dort eingetragen werden. Vor dem
        Go-Live bitte zusätzlich rechtlich prüfen lassen.
      </div>

      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">
        Impressum
      </h1>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Angaben gemäß § 5 TMG</p>
        <p>
          {COMPANY_NAME}
          <br />
          {ADDRESS_STREET}
          <br />
          {ADDRESS_ZIP_CITY}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Vertreten durch</p>
        <p>Geschäftsführer: {MANAGING_DIRECTORS.join(", ")}</p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Kontakt</p>
        <p>
          Telefon: {PHONE_DISPLAY}
          <br />
          E-Mail: {EMAIL_DISPLAY}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Registereintrag</p>
        <p>
          Eintragung im Handelsregister
          <br />
          Registergericht: {REGISTER_COURT}
          <br />
          Registernummer: {REGISTER_NUMBER}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Umsatzsteuer-ID</p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
          {VAT_ID}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Berufsbezeichnung</p>
        <p>
          {PROFESSION_TITLE}, verliehen in {PROFESSION_AWARDED_IN}.
          <br />
          Zuständige Kammer: {CHAMBER}
          <br />
          Es gelten die berufsrechtlichen Regelungen der Handwerksordnung
          (HwO), einsehbar unter{" "}
          <a
            href="https://www.gesetze-im-internet.de/hwo/"
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            gesetze-im-internet.de/hwo
          </a>
          .
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </p>
        <p>
          {MANAGING_DIRECTORS.join(", ")}
          <br />
          Anschrift wie oben
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">
          Haftung für Inhalte und Links
        </p>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
          Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Für die Inhalte externer, verlinkter Seiten sind
          ausschließlich deren Betreiber verantwortlich; eine permanente
          inhaltliche Kontrolle verlinkter Seiten erfolgt ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht. Bei Bekanntwerden von
          Rechtsverletzungen werden entsprechende Inhalte bzw. Links umgehend
          entfernt.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
        <p className="font-medium text-neutral-900">Urheberrecht</p>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
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
