"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // To hide the mouse animation on scroll down
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 1;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        isVisible && // to limit setting state only the first time
          setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisible]);

  return (
    <div>
      <div className="flex w-full h-full">
        <div className="w-[45%] bg-black h-[88vh]"></div>
        <div className="w-[5%] h-[88vh]"></div>

        <div className="w-[50%]  h-[88vh] flex flex-col justify-center space-y-8">
          <div className="">
            Hi <span className="h-4">👋</span>, I am
          </div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            SUBHAM BEURA
          </h1>
          <h2 className="from-gray-700 scroll-m-20 border-b pb-2 text-2xl font-light tracking-tight transition-colors first:mt-0">
            Full Stack Web Developer
          </h2>
          <Button
            variant="default"
            className="min-w-max w-fit px-10 py-6"
            asChild
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
          {isVisible && <div className="mouse mt-[10vh]" />}
        </div>
      </div>
      {/* About ME Section */}
      <div className="w-full pt-[25vh]  h-screen flex flex-col justify-between items-center ">
        <h3 className="font-bold text-2xl  uppercase font-sans">About Me</h3>
        <div className="flex flex-col items-center space-y-8">
          <p>
            I am from the temple city of
            <span className="font-semibold font-sans text-xl">
              {" "}
              Bhubaneswar{" "}
            </span>
            located in Odisha,India.
          </p>
          <p>
            But I mostly grew up in{" "}
            <span className="font-semibold font-sans text-xl">Puri</span>, a
            beautiful costal town
          </p>
          <p>I first tried programing when I was 18,</p>
        </div>
        <h5 className="font-light italic mt-[10vh]">
          It was love at first sight
        </h5>
      </div>
      <div className="w-full pt-[20vh]  h-screen flex flex-col justify-between items-center">
        <h3 className="font-bold text-2xl  uppercase font-sans">
          What Do I Do??
        </h3>
        <div className="flex flex-col items-center space-y-8">
          <p>
            I am a Full Stack Web Developer with a particular interest in
            working with innovative projects.
          </p>
          <p>
            I am currently pursueing my Bachelors in Computer Engineering in
            IIIT BBSR
          </p>
        </div>
        <h5 className="font-light italic mt-[10vh]">
          I build websites.I build apps.I build Software
        </h5>
      </div>
    </div>
  );
}
