import type { Metadata } from "next";
import {
  COMPANY_NAME,
  ADDRESS_STREET,
  ADDRESS_ZIP_CITY,
  EMAIL_DISPLAY,
  HOSTING_PROVIDER,
  DATENSCHUTZ_LAST_UPDATED,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Thermonext Gebäudetechnik GmbH",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <div className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <strong>Hinweis (nur für den internen Entwurf sichtbar):</strong>{" "}
        Dies ist ein Entwurf auf Basis der aktuell bekannten Verarbeitungen
        (Kontaktformular, Server-Logs, optionale Statistik-Cookies). Alle
        noch offenen Angaben (Adresse, E-Mail, Hosting-Anbieter) sind
        zentral in{" "}
        <code className="rounded bg-amber-100 px-1 py-0.5">
          src/lib/constants.ts
        </code>{" "}
        als TODO markiert. Sobald ein Statistik-/Analyse-Tool konkret
        ausgewählt wird, muss Abschnitt 4 um dessen Namen, Zweck und
        Anbietersitz ergänzt werden. Keine Rechtsberatung — bitte vor
        Veröffentlichung anwaltlich prüfen lassen.
      </div>

      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">
        Datenschutzerklärung
      </h1>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          1. Verantwortlicher
        </h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im
          Sinne der DSGVO ist:
          <br />
          {COMPANY_NAME}
          <br />
          {ADDRESS_STREET}
          <br />
          {ADDRESS_ZIP_CITY}
          <br />
          E-Mail: {EMAIL_DISPLAY}
        </p>
        <p>
          Ein Datenschutzbeauftragter ist nach aktuellem Stand (Anzahl der
          mit der Datenverarbeitung ständig beschäftigten Personen, § 38
          BDSG) nicht gesetzlich vorgeschrieben. Sollte sich dies ändern,
          wird diese Erklärung entsprechend ergänzt.
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
          (Art. 20 DSGVO). Eine erteilte Einwilligung können Sie jederzeit
          mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Sie
          haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde
          über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren,
          insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts.
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
          lit. f DSGVO). Eine Zusammenführung mit anderen Datenquellen
          findet nicht statt. Die Logfiles werden aus Sicherheitsgründen
          (z. B. zur Aufklärung von Missbrauchsfällen) für einen begrenzten
          Zeitraum gespeichert und anschließend gelöscht bzw. anonymisiert.
          <br />
          <br />
          Hosting-Anbieter: {HOSTING_PROVIDER}. Sofern der Hosting-Anbieter
          seinen Sitz außerhalb der EU/des EWR hat (z. B. in den USA), erfolgt
          die Datenübermittlung auf Grundlage von EU-Standardvertragsklauseln
          bzw. eines gleichwertigen Garantieinstruments nach Art. 44 ff.
          DSGVO; mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag
          nach Art. 28 DSGVO. Genaue Angaben zum Serverstandort und einem
          möglichen Drittlandtransfer werden ergänzt, sobald das Hosting
          final eingerichtet ist.
          <br />
          <br />
          Diese Website wird verschlüsselt per SSL/TLS übertragen (erkennbar
          am Schloss-Symbol und &bdquo;https://&ldquo; in der Adresszeile
          Ihres Browsers), um die Übertragung vertraulicher Inhalte, wie
          z. B. Anfragen über das Kontaktformular, zu schützen.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          4. Cookies &amp; Statistik
        </h2>
        <p>
          Diese Website verwendet technisch notwendige Cookies, um
          grundlegende Funktionen sicherzustellen (z. B. Speicherung Ihrer
          Cookie-Auswahl, Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO bzw.
          § 25 Abs. 2 TTDSG). Darüber hinaus setzen wir optionale
          Statistik-Cookies nur ein, wenn Sie dem über unser Cookie-Banner
          ausdrücklich zugestimmt haben (Art. 6 Abs. 1 lit. a DSGVO, § 25
          Abs. 1 TTDSG). Ein konkretes Statistik-Tool ist aktuell noch nicht
          im Einsatz; sobald eines ausgewählt wird, werden hier Name, Zweck,
          Speicherdauer und ggf. Drittlandtransfer des eingesetzten Dienstes
          ergänzt. Ihre Auswahl können Sie jederzeit über die
          Cookie-Einstellungen (Button am unteren Seitenrand bzw. erneuter
          Aufruf des Banners) widerrufen oder anpassen.
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
          mehr erforderlich sind — in der Regel, wenn die jeweilige Anfrage
          abschließend bearbeitet wurde und keine gesetzlichen
          Aufbewahrungspflichten (z. B. aus dem Handels- oder Steuerrecht,
          typischerweise 6–10 Jahre bei Geschäftskorrespondenz mit
          steuerlicher Relevanz) entgegenstehen.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          6. Keine automatisierte Entscheidungsfindung
        </h2>
        <p>
          Wir setzen auf dieser Website keine automatisierte
          Entscheidungsfindung oder ein Profiling im Sinne von Art. 22 DSGVO
          ein.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
        <h2 className="text-lg font-semibold text-neutral-900">
          7. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald Änderungen an der
          Website oder den eingesetzten Diensten dies erforderlich machen.
          Stand: {DATENSCHUTZ_LAST_UPDATED}.
        </p>
      </section>
    </main>
  );
}
