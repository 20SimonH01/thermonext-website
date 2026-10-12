"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlassButton from "./GlassButton";

const LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#team", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt="Thermonext Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-[16px] font-semibold tracking-[0.06em] text-neutral-950">
              THERMONEXT
            </span>
            <span className="hidden text-[10px] font-medium tracking-wide text-neutral-500 sm:inline">
              Gebäudetechnik
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <GlassButton href="#kontakt" className="!px-5 !py-2.5 !text-[13px]">
            Termin anfragen
          </GlassButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="glass-btn-ghost flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label="Menü öffnen"
        >
          <div className="flex flex-col gap-[5px]">
            <span className="h-[1.5px] w-4 bg-neutral-900" />
            <span className="h-[1.5px] w-4 bg-neutral-900" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="glass-nav mx-4 mt-3 rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-black/[0.03]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
