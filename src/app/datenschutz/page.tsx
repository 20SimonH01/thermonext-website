import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Thermonext Gebäudetechnik GmbH",
  robots: { index: false, follow: false },
};

// TODO: Bei inhaltlichen Änderungen an dieser Erklärung manuell aktualisieren.
const LAST_UPDATED = "Oktober 2026";

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <div className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <strong>Hinweis (nur für den internen Entwurf sichtbar):</strong>{" "}
        Dies ist ein Entwurf auf Basis der aktuell bekannten Verarbeitungen
        (Kontaktformular, Server-Logs, optionale Statistik-Cookies).
        Geschäftsadresse und konkrete Hosting-/Tool-Angaben fehlen noch und
        müssen ergänzt werden, sobald diese feststehen. Keine Rechtsberatung
        — bitte vor Veröffentlichung prüfen lassen.
      </div>

      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">
        Datenschutzerklärung
      </h1>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          1. Verantwortlicher
        </h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          Thermonext Gebäudetechnik GmbH
          <br />
          [Anschrift – folgt]
          <br />
          E-Mail: [folgt]
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          2. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer
          Person gespeicherten Daten, deren Herkunft und Empfänger sowie den
          Zweck der Datenverarbeitung (Art. 15 DSGVO). Ebenso haben Sie ein
          Recht auf Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
          Einschränkung der Verarbeitung (Art. 18 DSGVO), Widerspruch gegen
          die Verarbeitung (Art. 21 DSGVO) sowie auf Datenübertragbarkeit
          (Art. 20 DSGVO). Sie haben außerdem das Recht, sich bei einer
          Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer
          personenbezogenen Daten zu beschweren.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          3. Erhebung von Daten beim Besuch der Website
        </h2>
        <p>
          Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Logfiles, die Ihr
          Browser übermittelt (z. B. IP-Adresse, Datum und Uhrzeit der
          Anfrage, Browsertyp, verwendetes Betriebssystem, Referrer-URL).
          Diese Daten sind nicht bestimmten Personen zuordenbar und werden
          ausschließlich zur Sicherstellung eines störungsfreien Betriebs
          sowie zur Verbesserung des Angebots ausgewertet (Art. 6 Abs. 1
          lit. f DSGVO).
          <br />
          Hosting-Anbieter: [folgt, z. B. Vercel Inc. — Angaben zum
          Serverstandort und ggf. Drittlandtransfer werden ergänzt, sobald
          das Hosting final eingerichtet ist].
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          4. Cookies
        </h2>
        <p>
          Diese Website verwendet technisch notwendige Cookies, um
          grundlegende Funktionen sicherzustellen. Darüber hinaus setzen wir
          optionale Statistik-Cookies nur ein, wenn Sie dem über unser
          Cookie-Banner ausdrücklich zugestimmt haben (Art. 6 Abs. 1 lit. a
          DSGVO). Ihre Auswahl können Sie jederzeit über die
          Cookie-Einstellungen widerrufen oder anpassen.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          5. Kontaktformular
        </h2>
        <p>
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
          werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
          den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung
          dieser Daten erfolgt auf Grundlage unseres berechtigten Interesses
          an der Beantwortung Ihrer Anfrage (Art. 6 Abs. 1 lit. f DSGVO)
          bzw., sofern die Anfrage auf den Abschluss eines Vertrags
          abzielt, zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs.
          1 lit. b DSGVO). Die Angabe einer Einwilligung ist freiwillig,
          aber notwendig, damit wir Ihre Anfrage bearbeiten können. Die
          Daten werden gelöscht, sobald sie für die Zweckerreichung nicht
          mehr erforderlich sind.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          6. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald Änderungen an der
          Website oder den eingesetzten Diensten dies erforderlich machen.
          Stand: {LAST_UPDATED}.
        </p>
      </section>
    </main>
  );
}
