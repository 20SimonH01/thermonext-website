import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Steuert, wie die Seite auf jedem Endgerät skaliert wird (iPhone, Android,
// Tablet, Desktop). Nutzer können weiterhin per Pinch-Zoom vergrößern
// (maximumScale bewusst nicht eingeschränkt — Barrierefreiheit).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Thermonext Gebäudetechnik GmbH | Heizung · Sanitär · Klima",
  description:
    "Thermonext plant, installiert und wartet Heizungs-, Sanitär- und Klimasysteme für Privat, Gewerbe und öffentliche Auftraggeber. Meisterqualität, klare Kommunikation, saubere Ausführung.",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Thermonext",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
