/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";
import Navbar from "@/app/Navbar/page"; // Ensure this path is correct
import Footer from "@/app/Footer/page"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        {renderFonts()}
        <meta name="facebook-domain-verification" content="fycynjzw9on9oubmfcsgyp818zpyt9" />
      </head>
      <body className={`${inter.className} font-poppins`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}