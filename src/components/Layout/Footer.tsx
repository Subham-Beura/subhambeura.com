import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-[20vh] mx-10 ">
      <div className="border-black border-t-4 h-[40vh] font-sans">
        <p className="mx-2">Contact Me</p>
        <div className="font-sans font-bold text-7xl mt-10">
          <p>Get In Touch</p>
          <Link href="#" className="hover:underline text-amber-600 my-10">
            subhambeura20@gmail.com
          </Link>
        </div>
      </div>
      <div className="border-black border-t-4 flex justify-between h-40 text-center">
        <div className="border-black w-[30vw] border-r-4 font-sans text-5xl font-semibold pt-10">
          Github
        </div>
        <div className="w-[30vw] font-sans text-5xl font-semibold pt-10">
          LinkedIn
        </div>
        <div className="border-black border-l-4 w-[30vw] font-sans text-5xl font-semibold pt-10">
          Instagram
        </div>
      </div>
    </div>
  );
}
