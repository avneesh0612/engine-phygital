"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { usePathname } from "next/navigation";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";

export const Header: FC = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav
      className={`${pathname === "/qrs" ? styles.transparent : styles.header}`}
    >
      <div style={{ width: "200px" }}>
        <Link href="/">
          <Image
            src="/thirdweb.svg"
            alt="thirdweb"
            width={52}
            height={32}
            className={styles.logo}
          />
        </Link>
      </div>

      <div style={{ width: "200px" }}>
        <ConnectButton client={client} />
      </div>
    </nav>
  );
};
