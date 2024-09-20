import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { ThirdwebProvider } from "thirdweb/react";

export const metadata: Metadata = {
  title: "Claim NFTs via qr codes | thirdweb Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>
          <Header />
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
