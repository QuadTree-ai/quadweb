import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";
import Navbar from "@/app/Navbar/page";
import Footer from "@/app/Footer/page";

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
        {/* Example of preconnect for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} font-poppins`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow mt-24">{children}</main> {/* Adjusted margin */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
