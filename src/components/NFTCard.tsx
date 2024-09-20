"use client";

import type { FC } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { MediaRenderer } from "thirdweb/react";
import { client } from "@/app/client";
import { NFT } from "thirdweb";

interface NFTCardProps {
  metadata: NFT["metadata"];
}

export const NFTCard: FC<NFTCardProps> = ({ metadata }) => {
  return (
    <Link
      href={`https://thirdweb.com/goerli/${process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS}/nfts/0/${metadata.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div key={metadata.id as string} className={styles.nft}>
        <MediaRenderer client={client} src={metadata.image}/>
        <h2>{metadata.name}</h2>
      </div>
    </Link>
  );
};
