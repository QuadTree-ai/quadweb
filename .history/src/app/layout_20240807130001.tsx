/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";

const inter = Inter({ subsets: ["latin"] });

type IconsType = { [key: string]: string };

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {renderIcons()}
        <link rel="manifest" href={metadata.manifest} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="background-color" content={metadata.backgroundColor} />
        {renderFonts()}
      </head>
      <body className={`${inter.className} font-poppins`}>{children}</body>
    </html>
  );
}
