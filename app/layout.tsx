import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";

const jbm = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spikycat",
  description: "spikycat or fyescha website, about anything...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jbm.className}>{children}</body>
    </html>
  );
}

