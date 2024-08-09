// src/app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";
import Navbar from "@/app/Navbar/page"; // Ensure this path is correct
import Footer from "@/app/Footer/page"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>

        {/* Icons */}
        <link rel="shortcut icon" href={metadata.icons.shortcut} type="image/png" />
        <link rel="apple-touch-icon" href={metadata.icons.apple} sizes="180x180" type="image/png" />
        <link rel="icon" href={metadata.icons.android192} sizes="192x192" type="image/png" />
        <link rel="icon" href={metadata.icons.android512} sizes="512x512" type="image/png" />
        <link rel="manifest" href={metadata.manifest} />

        {/* Fonts */}
        {metadata.fonts.map((font, index) => (
          <link key={index} href={font} rel="stylesheet" />
        ))}
      </head>
      <body className={`${inter.className} font-poppins`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
