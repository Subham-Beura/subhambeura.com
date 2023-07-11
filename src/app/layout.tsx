import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <div className="left-margin w-[2.5vw] "></div>
        <div className="flex flex-col w-[95vw] h-full">
          <Navbar />
          <div className={inter.className + " min-h-[90vh] "}>{children}</div>
          <Footer />
        </div>
        <div className="left-margin w-[2.5vw] "></div>
      </body>
    </html>
  );
}
