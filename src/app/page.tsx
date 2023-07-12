import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <div className="w-[45%] bg-black h-[88vh]"></div>
      <div className="w-[5%] bg-white h-[88vh]"></div>

      <div className="w-[50%]  h-[88vh] flex flex-col justify-center space-y-8">
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
      </div>
    </div>
  );
}
