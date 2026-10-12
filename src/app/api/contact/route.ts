import { NextResponse } from "next/server";

// TODO: Sobald die Geschäfts-E-Mail-Adresse von Thermonext existiert, hier
// einen echten Versand einbauen (z. B. über Resend, Postmark oder SMTP).
// Aktuell wird die Anfrage nur serverseitig geloggt, damit das Formular im
// Prototyp testbar ist, ohne bereits personenbezogene Daten zu versenden
// oder dauerhaft zu speichern.

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name, email, service, message, consent, company } = data as Record<
    string,
    unknown
  >;

  // Honeypot: Bots füllen oft verborgene Felder aus.
  if (typeof company === "string" && company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    message.trim().length < 5 ||
    consent !== true
  ) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder korrekt ausfüllen." },
      { status: 400 }
    );
  }

  console.log("[Kontaktanfrage]", {
    name,
    email,
    service,
    messageLength: (message as string).length,
    consent,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
