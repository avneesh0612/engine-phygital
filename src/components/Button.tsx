"use client";

import { useState, type FC } from "react";
import axios from "axios";
import styles from "@/styles/Claim.module.css";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/app/client";

const Button: FC<{ id: string }> = ({ id }) => {
  const address = useActiveAccount()?.address;
  const [loading, setLoading] = useState(false);

  const claim = async () => {
    setLoading(true);
    try {
      await axios.post("/api/nft", {
        id: id,
        address,
      });

      alert("NFT claimed!");
    } catch (err) {
      alert(`Error claiming NFT: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {address ? (
        <button
          className={styles.claimButton}
          onClick={() => claim()}
          disabled={loading}
        >
          {loading ? "Claiming..." : "Claim"}
        </button>
      ) : (
        <ConnectButton
          client={client} 
        />
      )}
    </>
  );
};

export default Button;
