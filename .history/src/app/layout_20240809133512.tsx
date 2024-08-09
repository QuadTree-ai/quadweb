import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";
import Navbar from "@/app/Navbar/page";
import Footer from "@/app/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href={metadata.manifest} />
        {metadata.fonts.map((font, index) => (
          <link key={index} href={font} rel="stylesheet" />
        ))}
      </Head>
      <body className={`${inter.className} font-poppins`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </>
  );
}
