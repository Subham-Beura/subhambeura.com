import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-14 flex items-center justify-between ">
      <div className="">
        <Link href="/">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Subham Beura
          </h3>
        </Link>
      </div>
      <div className=" flex items-center space-x-14">
        <Button asChild variant={"outline"}>
          <Link href="/about">About</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href="/resume">Resume</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href="/projects">Projects</Link>
        </Button>
        <Button asChild variant={"default"} className="w-36">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
