import Image from "next/image";
import Link from "next/link";

// Statischer Build-Zeitpunkt-Wert statt new Date() zur Laufzeit, damit die
// Seite vollständig statisch vorgerendert werden kann (Next.js Cache
// Components). Bei jedem Redeploy automatisch aktuell, da Build-Zeit = jetzt.
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Thermonext Gebäudetechnik GmbH"
            width={760}
            height={244}
            className="h-8 w-auto"
          />
        </div>

        <nav className="flex items-center gap-6 text-xs font-medium text-neutral-500">
          <Link href="/impressum" className="hover:text-neutral-900">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-neutral-900">
            Datenschutz
          </Link>
          <Link href="/#kontakt" className="hover:text-neutral-900">
            Kontakt
          </Link>
        </nav>

        <p className="text-xs text-neutral-400">
          © {CURRENT_YEAR} Thermonext Gebäudetechnik GmbH
        </p>
      </div>
    </footer>
  );
}
