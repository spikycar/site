import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Head from "next/head";

const jbm = Inter({ subsets: ["latin"] });

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
      <Head>
        <meta property="og:image" content="/shark.jpg" />
        <meta property="og:site_name" content="spikycat.com" />
        <meta property="og:title" content="spikycat" />
        <meta property="og:description" content="spikycat or fyescha website, about anything..." />
        <meta property="og:url" content="https://spikycat.com" />
      </Head>
      <body className={jbm.className}>
        <div className="app_stage">
          {children}
        </div>
      </body>
    </html>
  );
}

