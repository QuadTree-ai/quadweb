/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'; // Best practice to use Next.js Head
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Helper function to render icons dynamically
  const renderIcons = () => {
    return Object.entries(metadata.icons).map(([key, href], index) => (
      <link key={index} rel="icon" sizes={key === 'apple' ? '180x180' : undefined} href={href} />
    ));
  };

  const renderFonts = () => {
    return metadata.fonts.map((font, index) => (
      <link key={index} href={font} rel="stylesheet" />
    ));
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {renderIcons()}
        <link rel="manifest" href={metadata.manifest} />
        {renderFonts()}
        <style>{`
          body { font-family: ${inter.className}, Poppins, sans-serif; }
        `}</style>
      </Head>
      <body>{children}</body>
    </>
  );
}
