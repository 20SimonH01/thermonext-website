// Zentrale Stammdaten der Website.
//
// Alle noch fehlenden Geschäftsangaben (Adresse, Register, USt-ID, Kammer,
// Hosting) sind hier als TODO-Platzhalter gesammelt. Sobald die echten
// Daten feststehen, müssen sie NUR HIER eingetragen werden — Impressum,
// Datenschutzerklärung, Navbar, Footer und Kontaktformular beziehen sich
// alle auf diese Konstanten und aktualisieren sich dadurch automatisch.

// --- Kontakt -----------------------------------------------------------

// TODO: Platzhalter durch echte Telefonnummer ersetzen, sobald verfügbar.
export const PHONE_DISPLAY = "0XXX / XXXXXXX";
export const PHONE_HREF = "tel:+49XXXXXXXXXX";

// TODO: Geschäfts-E-Mail-Adresse eintragen, sobald eingerichtet (hängt auch
// von der final gewählten Domain ab, z. B. tnxt.de).
export const EMAIL_DISPLAY = "[E-Mail-Adresse – folgt]";
export const EMAIL_HREF = "#";

// --- Unternehmen ---------------------------------------------------------

export const COMPANY_NAME = "Thermonext Gebäudetechnik GmbH";

// TODO: Echte Geschäftsadresse eintragen, sobald vorhanden.
export const ADDRESS_STREET = "[Straße, Hausnummer – folgt]";
export const ADDRESS_ZIP_CITY = "[PLZ, Ort – folgt]";
export const ADDRESS_COUNTRY = "Deutschland";

// Geschäftsführer (gleichzeitig verantwortlich für den Inhalt nach § 18
// Abs. 2 MStV).
export const MANAGING_DIRECTORS = ["Baha Sinan", "Simon Heck"];

// TODO: Handelsregisterdaten eintragen, sobald die GmbH eingetragen ist.
export const REGISTER_COURT = "[Registergericht – folgt]";
export const REGISTER_NUMBER = "[Registernummer – folgt]";

// TODO: USt-IdNr. eintragen, sobald vom Finanzamt vergeben.
export const VAT_ID = "[USt-IdNr. – folgt]";

// TODO: Zuständige Handwerkskammer eintragen (abhängig vom Firmensitz).
export const CHAMBER = "[Handwerkskammer – folgt]";
export const PROFESSION_TITLE =
  "Meister des Sanitär-, Heizungs- und Klimatechniker-Handwerks (SHK)";
export const PROFESSION_AWARDED_IN = "Deutschland";

// --- Hosting / Dienstleister ---------------------------------------------

// TODO: Hosting-Anbieter final eintragen, sobald das Hosting feststeht
// (z. B. Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA –
// in dem Fall: Drittlandtransfer-Hinweis in der Datenschutzerklärung prüfen
// und ggf. Standardvertragsklauseln/Auftragsverarbeitungsvertrag ergänzen).
export const HOSTING_PROVIDER = "[Hosting-Anbieter – folgt]";

// --- Sonstiges -------------------------------------------------------------

// Stand der Datenschutzerklärung. Statischer Wert statt new Date() zur
// Laufzeit, damit die Seite vollständig statisch vorgerendert werden kann
// (Next.js Cache Components). Bei inhaltlichen Änderungen manuell
// aktualisieren.
export const DATENSCHUTZ_LAST_UPDATED = "Oktober 2026";
