import Button from "@/components/Button";
import styles from "@/styles/Claim.module.css";
import { MediaRenderer } from "thirdweb/react";
import { client } from "../client";
import prisma from "scripts/prisma.mjs";

async function getData(id: string) {
  const nft = await prisma.nFT.findUnique({
    where: {
      id,
    },
  });

  if (!nft) {
    throw new Error("NFT does not exist");
  }

  return { nft: JSON.stringify(nft) };
}

export default async function ClaimPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const nft = JSON.parse((await getData(searchParams.id)).nft);

  return (
    <div className={styles.container}>
      {nft.minted ? (
        <h1 className={styles.title}>NFT has already been claimed</h1>
      ) : (
        <h1 className={styles.title}>
          You&apos;ve discovered a<br />
          <span className={styles.blue}>&apos;{nft.name}&apos; NFT</span>.
        </h1>
      )}
      <div className={styles.nft}>
        <MediaRenderer
          client={client}
          src={nft.image}
          alt={nft.name}
          width="250px"
          height="250px"
        />
        <h2>{nft.name}</h2>
        <p>{nft.description}</p>
        {/* @ts-ignore */}
        <div className={styles.attributes}>
          {Object.keys(nft.attributes).map((key) => (
            <div key={key} className={styles.attribute}>
              <p className={styles.attributeKey}>{key}</p>
              <p className={styles.attributeValue}>
                {/* @ts-ignore */}
                {nft.attributes[key]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {!nft.minted && <Button id={searchParams.id} />}
    </div>
  );
}
