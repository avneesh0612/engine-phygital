import qrcode from "qrcode";
import prisma from "./prisma.mjs";
import fs from "fs/promises";
import path from "path";

const main = async () => {
  try {
    // Ensure the qrs directory exists
    const qrsDir = "./qrs";
    await fs.mkdir(qrsDir, { recursive: true });

    const nfts = await prisma.nFT.findMany({
      where: {
        minted: false,
      },
    });

    for (const nft of nfts) {
      const qrPath = path.join(qrsDir, `${nft.id}.png`);
      await qrcode.toFile(
        qrPath,
        `http://localhost:3000/claim?id=${nft.id}`
      );
    }

    console.log(`Generated QR codes for ${nfts.length} unminted NFTs.`);
  } catch (e) {
    console.error("Error generating QR codes:", e);
  }
};

main();
