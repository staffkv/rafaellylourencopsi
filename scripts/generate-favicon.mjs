import { writeFile } from "node:fs/promises";
import sharp from "sharp";

// ICO com versões da marca para diferentes densidades de tela.
const sizes = [16, 32, 48, 128];
const images = await Promise.all(
  sizes.map((size) =>
    sharp("public/images/optimized/brand-icon.png")
      .resize(size, size)
      .png()
      .toBuffer(),
  ),
);
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [index, size] of sizes.entries()) {
  const entry = 6 + index * 16;
  header[entry] = size;
  header[entry + 1] = size;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[index].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[index].length;
}
await writeFile("src/app/favicon.ico", Buffer.concat([header, ...images]));
console.log("Favicon da marca gerado em 16, 32, 48 e 128 pixels.");
