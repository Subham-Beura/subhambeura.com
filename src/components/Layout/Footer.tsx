import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-[20vh]  md:mx-10 ">
      <div className="border-black border-t-4 h-[30vh] md:h-[40vh] font-sans px-4">
        <p className="mx-2">Contact Me</p>
        <div className="font-sans font-bold  mt-10 ">
          <p>Get In Touch</p>
          <Link
            href="#"
            className="hover:underline text-amber-600 my-10 w-full text-2xl h-fit break-words "
          >
            subhambeura20@gmail.com
          </Link>
        </div>
      </div>
      <div className="border-black md:border-t-4 flex flex-col md:flex-row justify-between h-fit text-center">
        <div className="pt-6 border-black md:w-[30vw] border-y-4 md:border-y-0 md:border-r-4 font-sans text-2xl font-semibold md:pt-10 h-24 ">
          Github
        </div>
        <div className="pt-6 md:w-[30vw] font-sans  text-2xl font-semibold md:pt-10 h-24 ">
          LinkedIn
        </div>
        <div className="pt-6 border-black border-t-4 md:border-t-0 md:border-l-4 md:w-[30vw] font-sans text-2xl font-semibold md:pt-10 h-24 ">
          Instagram
        </div>
      </div>
    </div>
  );
}
