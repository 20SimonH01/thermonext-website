"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CalendarClock, MessageSquare, Phone } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

const SERVICES = ["Heizung", "Sanitär", "Klima", "Sonstiges / Sanierung"];

type Status = "idle" | "loading" | "success" | "error";
type Tab = "formular" | "termin";

export default function Contact() {
  const [tab, setTab] = useState<Tab>("formular");
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
          consent: formData.get("consent") === "on",
          company: formData.get("company"), // honeypot
        }),
      });

      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
            KONTAKT
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Lassen Sie uns sprechen.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-base leading-relaxed text-neutral-600">
            Schildern Sie kurz Ihr Anliegen — wir melden uns zeitnah mit einer
            unverbindlichen Einschätzung zurück.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 flex justify-center">
          <div className="glass-panel inline-flex gap-1 rounded-full p-1.5">
            <button
              type="button"
              onClick={() => setTab("formular")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                tab === "formular"
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
              Formular
            </button>
            <button
              type="button"
              onClick={() => setTab("termin")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                tab === "termin"
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <CalendarClock className="h-4 w-4" strokeWidth={1.75} />
              Termin buchen
            </button>
          </div>
        </ScrollReveal>

        {tab === "termin" ? (
          <ScrollReveal delay={0.15} className="mt-8">
            <div className="glass-panel flex flex-col items-center gap-5 rounded-3xl p-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                <CalendarClock className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-950">
                  Online-Terminbuchung folgt in Kürze
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-balance text-sm leading-relaxed text-neutral-600">
                  Bald können Sie hier direkt einen freien Termin aus unserem
                  Kalender wählen. Bis dahin erreichen Sie uns am schnellsten
                  telefonisch oder über das Formular.
                </p>
              </div>
              <a
                href={PHONE_HREF}
                className="glass-btn mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {PHONE_DISPLAY}
              </a>
              <button
                type="button"
                onClick={() => setTab("formular")}
                className="text-sm font-medium text-neutral-600 underline underline-offset-2 hover:text-neutral-900"
              >
                Stattdessen Formular nutzen
              </button>
            </div>
          </ScrollReveal>
        ) : (
        <ScrollReveal delay={0.1} className="mt-8">
          <form
            onSubmit={handleSubmit}
            className="glass-panel rounded-3xl p-6 sm:p-10"
          >
            {/* Honeypot – für echte Nutzer unsichtbar */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-800">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  type="text"
                  className="rounded-xl border border-neutral-900/10 bg-white/70 px-4 py-3 text-sm text-neutral-900 outline-none ring-neutral-900/20 transition focus:ring-2"
                  placeholder="Ihr Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-800">
                  E-Mail *
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="rounded-xl border border-neutral-900/10 bg-white/70 px-4 py-3 text-sm text-neutral-900 outline-none ring-neutral-900/20 transition focus:ring-2"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-medium text-neutral-800">
                Bereich
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="rounded-xl border border-neutral-900/10 bg-white/70 px-4 py-3 text-sm text-neutral-900 outline-none ring-neutral-900/20 transition focus:ring-2"
              >
                <option value="" disabled>
                  Bitte wählen
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-800">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={5}
                rows={4}
                className="resize-none rounded-xl border border-neutral-900/10 bg-white/70 px-4 py-3 text-sm text-neutral-900 outline-none ring-neutral-900/20 transition focus:ring-2"
                placeholder="Wie können wir helfen?"
              />
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-neutral-950"
              />
              <span className="text-xs leading-relaxed text-neutral-600">
                Ich habe die{" "}
                <Link href="/datenschutz" className="underline underline-offset-2">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und bin damit einverstanden, dass meine Angaben zur
                Bearbeitung meiner Anfrage gespeichert und verarbeitet werden. *
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="glass-btn mt-7 w-full rounded-full px-6 py-3.5 text-sm font-medium disabled:opacity-60"
            >
              {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-center text-sm font-medium text-neutral-700">
                Danke! Ihre Anfrage ist eingegangen — wir melden uns zeitnah.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-sm font-medium text-red-600">
                Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
              </p>
            )}
          </form>
        </ScrollReveal>
        )}
      </div>
    </section>
  );
}
