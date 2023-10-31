import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiTwotoneMail,
} from "react-icons/ai";
import Link from "next/link";

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
      <body className={"flex bg-[#F0F0F0] " + inter.className}>
        <div className="left-margin w-[2.5vw] "></div>
        <div className="flex flex-col w-[95vw] h-full">
          <Navbar />
          <div className={"min-h-[16vh] h-fit "}>{children}</div>
          <Footer />
        </div>
        <div className="left-margin w-[2.5vw]  flex flex-col items-center justify-end space-y-10 pb-6 fixed right-0 bottom-6">
          <Link href={"https://github.com/Subham-Beura"} target="_blank">
            <AiFillGithub size={25} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/subham-beura-aa5213231/"}
            target="_blank"
          >
            <AiFillLinkedin size={25} />
          </Link>
          <Link href={"mailto:subhambeura20@gmail.com"}>
            <AiTwotoneMail size={25} />
          </Link>
        </div>
      </body>
    </html>
  );
}
