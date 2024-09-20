"use client";

import styles from "@/styles/Home.module.css";
import { getContract, NFT } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { balanceOf, getNFT, nextTokenIdToMint, ownerOf } from "thirdweb/extensions/erc721";
import { useEffect, useState } from "react";
import { NFTCard } from "@/components/NFTCard";


export default function Home() {
  const address = useActiveAccount()?.address;
  const NFT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string;

  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);

  const contract = getContract({
    client: client,
    chain: sepolia,
    address: NFT_CONTRACT_ADDRESS,
  });

  const { data: nftBalance, isLoading: isLoadingBalance } = useReadContract(
    balanceOf,
    {
      contract: contract,
      owner: address as string,
    }
  );

  const { data: totalNFTs } = useReadContract(
    nextTokenIdToMint,
    {
      contract: contract
    }
  );

  useEffect(() => {
    const fetchNFTs = async () => {
      if (totalNFTs) {
        for (let i = 0; i < totalNFTs; i++) {
          const nft = await getNFT({
            contract: contract,
            tokenId: BigInt(i),
          });
          const isOwner = await ownerOf({
            contract: contract,
            tokenId: BigInt(i),
          });
          if (isOwner === address) {
            setOwnedNFTs((prev) => [...prev, nft]);
          }
        }
      }
    };

    fetchNFTs();
  }, [totalNFTs]);
  

  if (isLoadingBalance) {
    return (
      <div className={styles.loadingContainer}>
        <h1>Loading your assets...</h1>
        <div className={styles.loader}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Assets</h1>
      <h2>
        TOTAL ITEMS: <span>{nftBalance?.toString()}</span>
      </h2>

      {!address && <h1>Connect your wallet</h1>}
      {ownedNFTs && ownedNFTs.length > 0 ? (ownedNFTs.map((nft) => (
        <NFTCard key={nft.id} metadata={nft.metadata} />
      ))) : (
        <h1>No NFTs found</h1>
      )}
    </div>
  );
}
