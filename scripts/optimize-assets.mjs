import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const output = "public/images/optimized";
await mkdir(output, { recursive: true });
const photos = [
  ["public/images/image-principal.jpeg", "rafaelly-hero", 1200],
  ["public/images/podem-ser-usadas/IMG_5563.JPG.jpeg", "rafaelly-sobre", 1100],
  ["public/images/image-adolescente.PNG", "rafaelly-adolescentes", 1000],
  ["public/images/podem-ser-usadas/IMG_5567.JPG.jpeg", "rafaelly-casais", 1000],
  ["public/images/IMG_5451.JPG.jpeg", "rafaelly-infantojuvenil", 1000],
  ["public/images/IMG_0916.jpg.jpeg", "sala-infantojuvenil", 1000],
  ["public/images/IMG_0926.jpg.jpeg", "ambiente-infantojuvenil", 1000],
];
for (const [source, name, width] of photos) {
  await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(`${output}/${name}.webp`);
}
async function createWhiteBackgroundMark({ extract, resize, path }) {
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

  await sharp(data, { raw: info }).resize(resize).png().toFile(path);
}

await sharp("public/images/MARCA D AGUA LOGOTIPO HORIZONTAL.png")
  .trim()
  .resize({ width: 690 })
  .webp({ quality: 95 })
  .toFile(`${output}/logo.webp`);
await createWhiteBackgroundMark({
  extract: { left: 770, top: 1740, width: 1070, height: 1070 },
  resize: { width: 128, height: 128 },
  path: `${output}/brand-icon.png`,
});
console.log("Imagens otimizadas; originais preservados.");
