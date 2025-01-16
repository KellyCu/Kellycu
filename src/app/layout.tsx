import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Nav from "./nav";
import Foot from './footer';
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "KellyCu",
  description: "Web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-14 flex justify-end items-center fixed sm:bg-black z-20 " >
          <Nav />
        </div>
        {children}
        <div id="Contacts" className="w-full h-60" >
          <Foot />
        </div>
        <Analytics />
        </body>
    </html>
  );
}
