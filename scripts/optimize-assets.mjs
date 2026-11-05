import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const output = "public/images/optimized";
await mkdir(output, { recursive: true });
const photos = [
  ["public/images/image-principal.jpeg", "rafaelly-hero", 1200],
  ["public/images/podem-ser-usadas/IMG_5563.JPG.jpeg", "rafaelly-sobre", 1100],
  ["public/images/image-adolescente.PNG", "rafaelly-adolescentes", 1000],
  ["public/images/podem-ser-usadas/IMG_5567.JPG.jpeg", "rafaelly-casais", 1000],
];
for (const [source, name, width] of photos) {
  await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(`${output}/${name}.webp`);
}
async function createWhiteBackgroundLogo({ extract, resize, format, path }) {
  const { data, info } = await sharp(
    "public/images/LOGOTIPO HORIZONTAL VARIAÇÃO 2.png",
  )
    .extract(extract)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let index = 0; index < data.length; index += info.channels) {
    if (
      data[index] === 237 &&
      data[index + 1] === 234 &&
      data[index + 2] === 223
    ) {
      data[index] = 255;
      data[index + 1] = 255;
      data[index + 2] = 255;
    }
  }

  const image = sharp(data, { raw: info }).resize(resize);
  if (format === "webp") {
    await image.webp({ quality: 95 }).toFile(path);
  } else {
    await image.png().toFile(path);
  }
}

await createWhiteBackgroundLogo({
  extract: { left: 760, top: 1770, width: 2870, height: 940 },
  resize: { width: 690 },
  format: "webp",
  path: `${output}/logo.webp`,
});
await createWhiteBackgroundLogo({
  extract: { left: 770, top: 1740, width: 1070, height: 1070 },
  resize: { width: 128, height: 128 },
  format: "png",
  path: `${output}/brand-icon.png`,
});
console.log("Imagens otimizadas; originais preservados.");
