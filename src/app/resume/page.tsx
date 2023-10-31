import Link from "next/link";

export default function Resume() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h2 className="uppercase text-2xl font-sans font-bold ">Resume</h2>
      <p className="space-x-8">
        <Link
          className="hover:underline"
          href={"SubhamBeuraResume.pdf"}
          download={true}
        >
          Download{" "}
        </Link>
        <Link href="/resume/view" className="hover:underline">
          View Online
        </Link>
      </p>
    </div>
  );
}
