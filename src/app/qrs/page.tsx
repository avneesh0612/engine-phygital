import { QR } from "@/components/QR";
import prisma from "scripts/prisma.mjs";
import styles from "@/styles/Home.module.css";

export const revalidate = 3600;

async function getData() {
  const nfts = await prisma.nFT.findMany({
    where: {
      minted: false,
    },
    take: 30,
  });

  if (!nfts) {
    throw new Error("Error");
  }

  return { nfts: JSON.stringify(nfts) };
}

export default async function QrsPage() {
  const nfts = JSON.parse((await getData()).nfts);

  return (
    <div className={styles.container}>
      <div className={styles.blur} />
      <h1 className={styles.title}>Claim an NFT</h1>
      <p className={styles.desc}>Scan any QR Code to claim an NFT</p>
      <div className={styles.grid}>
        {nfts.map((nft: { id: string }) => (
          <QR
            url={`http://localhost:3000/claim?id=${nft.id}`}
            key={nft.id}
          />
        ))}
      </div>
    </div>
  );
}
