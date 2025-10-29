import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateBlurData = async () => {
  const jsonPath = path.join(__dirname, "../public/data/projects.json");
  const data = JSON.parse(await fs.readFile(jsonPath, "utf-8"));

  const newData = await Promise.all(
    data.map(async (item) => {
      const imagePath = path.join(__dirname, "../public", item.image3);
      const buffer = await fs.readFile(imagePath);
      const { base64 } = await getPlaiceholder(buffer);

      return {
        ...item,
        blurDataURL: base64,
      };
    })
  );

  const outputPath = path.join(
    __dirname,
    "../public/data/projects-with-blur.json"
  );
  await fs.writeFile(outputPath, JSON.stringify(newData, null, 2));
};

generateBlurData().catch((err) => {
  console.error(err);
});
