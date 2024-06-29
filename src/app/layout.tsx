import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "../components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEPPEI UCHIDA | Portfolio",
  description:
    "フロントエンドエンジニアとして活動中。Jamstackを採用したサイト制作を得意とする。その他WordPressサイトの開発も可"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </Head>
      <body
        className={`${inter.className} bg-zinc-800 overflow-hidden relative h-screen w-full`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
