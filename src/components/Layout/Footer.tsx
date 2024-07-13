import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-[20vh]   ">
      <div className="border-black border-t-4 h-[30vh] md:h-[40vh] font-sans px-4">
        <div className="font-sans font-bold  mt-10 ">
          <p>Get In Touch</p>
          <Link
            href="#"
            className="hover:underline text-amber-600 my-18 w-full text-2xl h-fit break-words "
          >
            subhambeura20@gmail.com
          </Link>
        </div>
      </div>
      <div className="border-black md:border-t-4 flex flex-col md:flex-row justify-between h-fit text-center">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/Subham-Beura"}
          className="pt-6 flex-col items-center justify-center border-black md:w-[33vw] border-y-4 md:border-y-0 md:border-r-4 font-sans text-2xl font-semibold md:pt-10 h-24 hover:bg-amber-500"
        >
          <p>Github</p>
        </Link>
        <Link
          className="pt-6 md:w-[33vw] font-sans  text-2xl font-semibold md:pt-10 h-24 hover:bg-amber-500"
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/subham-beura-aa5213231/"}
        >
          LinkedIn
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://instagram.com/subham_beura15/?igsh=a3BpaXJpZmM4OGZr"}
          className="pt-6 border-black border-t-4 md:border-t-0 md:border-l-4 md:w-[33vw] font-sans text-2xl font-semibold md:pt-10 h-24 hover:bg-amber-500"
        >
          Instagram
        </Link>
      </div>
    </div>
  );
}
