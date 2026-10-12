import sharp from "sharp";
import { existsSync } from "fs";

const SRC = "LOGO ORIGINAL.png";

if (!existsSync(SRC)) {
  console.error(`Nicht gefunden: ${SRC}`);
  process.exit(1);
}

const img = sharp(SRC);
const meta = await img.metadata();
console.log("Original:", meta.width, "x", meta.height, meta.format, meta.hasAlpha);

// 1) Volles Logo (Icon + Wortmarke), auf Inhalt getrimmt, mit etwas Luft.
const trimmed = sharp(SRC).trim({ background: "#ffffff", threshold: 10 });
const trimmedBuffer = await trimmed.png().toBuffer();
const trimmedMeta = await sharp(trimmedBuffer).metadata();
console.log("Getrimmt:", trimmedMeta.width, "x", trimmedMeta.height);

await sharp(trimmedBuffer)
  .extend({
    top: Math.round(trimmedMeta.height * 0.12),
    bottom: Math.round(trimmedMeta.height * 0.12),
    left: Math.round(trimmedMeta.height * 0.12),
    right: Math.round(trimmedMeta.height * 0.12),
    background: "#ffffff",
  })
  .toFile("public/logo-full.png");

// 2) Nur das Icon (linkes Quadrat) für Favicon / App-Icon.
// Das Icon liegt im linken Bereich des Originals — wir schneiden ein
// Quadrat heraus, das die Raute inkl. etwas Rand enthält.
const squareSize = Math.round(meta.height * 0.42);
const left = Math.round(meta.width * 0.15);
const top = Math.round(meta.height * 0.33);

await sharp(SRC)
  .extract({ left, top, width: squareSize, height: squareSize })
  .trim({ background: "#ffffff", threshold: 10 })
  .toFile("public/logo-icon-raw.png");

console.log("Fertig: public/logo-full.png, public/logo-icon-raw.png");
