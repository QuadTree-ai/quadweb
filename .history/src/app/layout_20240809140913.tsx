// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";
import Navbar from "@/app/Navbar/page";
import Footer from "@/app/Footer/page";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} flex flex-col min-h-screen font-poppins`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
