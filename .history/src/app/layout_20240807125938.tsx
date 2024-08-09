/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";
import Head from 'next/head';  // Importing Next.js Head for better head management

const inter = Inter({ subsets: ["latin"] });

type IconsType = { [key: string]: string };

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  // Function to render multiple icons dynamically
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {renderIcons()}
        <link rel="manifest" href={metadata.manifest} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="background-color" content={metadata.backgroundColor} />
        {renderFonts()}
      </Head>
      <body className={`${inter.className} font-poppins`}>
        {children}
      </body>
    </>
  );
}

export default RootLayout;
