"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "thermonext-consent";

export type Consent = {
  necessary: true;
  analytics: boolean;
  timestamp: string;
};

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean) {
  const value: Consent = {
    necessary: true,
    analytics,
    timestamp: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("consentchange", { detail: value }));
  return value;
}

function subscribe(callback: () => void) {
  window.addEventListener("consentchange", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("consentchange", callback);
    window.removeEventListener("storage", callback);
  };
}

// Liest den Consent-Status synchron über den externen Store (localStorage).
// Auf dem Server (und beim ersten Client-Render vor der Hydration) gilt
// "noch keine Entscheidung getroffen" als sicherer, konsistenter Default.
function useHasConsent() {
  return useSyncExternalStore(
    subscribe,
    () => getConsent() !== null,
    () => false
  );
}

export default function CookieConsent() {
  const hasConsent = useHasConsent();
  const [dismissed, setDismissed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const visible = !hasConsent && !dismissed;

  if (!visible) return null;

  const acceptAll = () => {
    saveConsent(true);
    setDismissed(true);
  };

  const rejectAll = () => {
    saveConsent(false);
    setDismissed(true);
  };

  const saveSelection = () => {
    saveConsent(analytics);
    setDismissed(true);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="glass-panel mx-auto max-w-2xl rounded-3xl p-6">
        <p className="text-sm font-semibold text-neutral-900">
          Diese Website respektiert Ihre Privatsphäre
        </p>
        <p className="mt-2 text-xs leading-relaxed text-neutral-600">
          Wir verwenden nur technisch notwendige Cookies, um die Website
          sicher und funktionsfähig zu betreiben. Mit Ihrer Einwilligung
          nutzen wir zusätzlich anonymisierte Statistik-Cookies, um die Seite
          zu verbessern. Details finden Sie in unserer{" "}
          <Link href="/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>

        {settingsOpen && (
          <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-white/60 p-4">
            <label className="flex items-center justify-between gap-4 text-xs text-neutral-700">
              <span>
                <span className="font-medium text-neutral-900">Notwendig</span>
                <br />
                Erforderlich für den Betrieb der Website.
              </span>
              <input type="checkbox" checked disabled className="h-4 w-4 accent-neutral-950" />
            </label>
            <label className="flex items-center justify-between gap-4 text-xs text-neutral-700">
              <span>
                <span className="font-medium text-neutral-900">Statistik</span>
                <br />
                Hilft uns zu verstehen, wie die Website genutzt wird.
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4 accent-neutral-950"
              />
            </label>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {settingsOpen ? (
            <button
              onClick={saveSelection}
              className="glass-btn rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={acceptAll}
              className="glass-btn rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Alle akzeptieren
            </button>
          )}
          <button
            onClick={rejectAll}
            className="glass-btn-ghost rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Nur notwendige
          </button>
          {!settingsOpen && (
            <button
              onClick={() => setSettingsOpen(true)}
              className="text-sm font-medium text-neutral-500 underline-offset-2 hover:underline sm:ml-auto"
            >
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
