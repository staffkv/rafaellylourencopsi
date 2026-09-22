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
await sharp("public/images/LOGOTIPO HORIZONTAL VARIAÇÃO 2.png")
  .extract({ left: 760, top: 1770, width: 2870, height: 940 })
  .resize({ width: 690 })
  .webp({ quality: 95 })
  .toFile(`${output}/logo.webp`);
await sharp("public/images/LOGOTIPO HORIZONTAL VARIAÇÃO 2.png")
  .extract({ left: 770, top: 1740, width: 1070, height: 1070 })
  .resize(128, 128)
  .png()
  .toFile(`${output}/brand-icon.png`);
console.log("Imagens otimizadas; originais preservados.");
