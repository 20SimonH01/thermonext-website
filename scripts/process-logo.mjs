import sharp from "sharp";
import { existsSync } from "fs";

const SRC = "brand/thermonext-logo-original.png";

if (!existsSync(SRC)) {
  console.error(`Nicht gefunden: ${SRC}`);
  process.exit(1);
}

// Entfernt (nahezu) weiße Pixel und macht sie transparent, damit das Logo
// nahtlos auf Glass-Panels / getönten Hintergründen sitzt, statt mit einer
// sichtbaren weißen Box.
async function whiteToTransparent(input) {
  const img = sharp(input).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // je "weißer" das Pixel, desto transparenter
    const whiteness = Math.min(r, g, b);
    if (whiteness > 235) {
      data[i + 3] = 0;
    } else if (whiteness > 200) {
      // weicher Übergang an den Kanten, Anti-Aliasing bleibt sauber
      const alpha = Math.round(((235 - whiteness) / 35) * 255);
      data[i + 3] = Math.min(data[i + 3], alpha);
    }
  }

  return sharp(data, { raw: { width, height, channels } }).png();
}

// 1) Volles Logo (Icon + Wortmarke), auf Inhalt getrimmt, transparent, mit etwas Luft.
const transparentFull = await whiteToTransparent(SRC);
const trimmedBuffer = await transparentFull.trim({ threshold: 10 }).png().toBuffer();
const trimmedMeta = await sharp(trimmedBuffer).metadata();
console.log("Getrimmt (voll):", trimmedMeta.width, "x", trimmedMeta.height);

await sharp(trimmedBuffer)
  .extend({
    top: Math.round(trimmedMeta.height * 0.12),
    bottom: Math.round(trimmedMeta.height * 0.12),
    left: Math.round(trimmedMeta.height * 0.12),
    right: Math.round(trimmedMeta.height * 0.12),
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toFile("public/logo-full.png");

// 2) Nur das Icon (linkes Quadrat / Raute) für Navbar/Footer/Favicon, transparent.
const meta = await sharp(SRC).metadata();
const squareSize = Math.round(meta.height * 0.42);
const left = Math.round(meta.width * 0.15);
const top = Math.round(meta.height * 0.33);

const transparentIconSrc = await whiteToTransparent(SRC);
const iconBuffer = await transparentIconSrc.png().toBuffer();
const iconCropped = await sharp(iconBuffer)
  .extract({ left, top, width: squareSize, height: squareSize })
  .png()
  .toBuffer();

await sharp(iconCropped).trim({ threshold: 10 }).toFile("public/logo-icon-raw.png");

console.log("Fertig: public/logo-full.png, public/logo-icon-raw.png");
