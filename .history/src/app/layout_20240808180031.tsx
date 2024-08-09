import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";
import Navbar from "@/app/Navbar/page";
import Footer from "@/app/Footer/page";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons && Object.entries(metadata.icons).map(([key, href], index) => (
          <link
            key={index}
            rel="icon"
            sizes={key === 'apple' ? '180x180' : undefined}
            href={href}
          />
        ))}
        {metadata.manifest && <link rel="manifest" href={metadata.manifest} />}
        {metadata.fonts && metadata.fonts.map((font, index) => (
          <link key={index} href={font} rel="stylesheet" />
        ))}
        {/* Example of preconnect for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className={`${inter.className} font-poppins`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
