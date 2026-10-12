"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const SERVICES = ["Heizung", "Sanitär", "Klima", "Sonstiges / Sanierung"];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
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

        <ScrollReveal delay={0.1} className="mt-12">
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
      </div>
    </section>
  );
}
