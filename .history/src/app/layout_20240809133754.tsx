import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import { metadata } from "./Metadata";
import Navbar from "@/app/Navbar/page";
import Footer from "@/app/Footer/page";
import { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });

// Define a type for your component's props
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${inter.className} font-poppins flex flex-col min-h-screen`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>

        {/* Icons */}
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href={metadata.manifest} />

        {/* Fonts */}
        {metadata.fonts.map((font, index) => (
          <link key={index} href={font} rel="stylesheet" />
        ))}
      </Head>
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
