import Link from "next/link";

export default function Projects() {
  return (
    <div className=" h-fit  py-5 px-3">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-center">
        My Projects
      </h2>
      <ul className="h-full my-5">
        <li className="h-26  shadow-sm px-2 py-1">
          <div>
            <Link href={"/projects/psswebsite"}>
              <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                pssfinancial.com
              </h2>
            </Link>
            <h4 className="leading-7 [&:not(:first-child)]:mt-2">
              The main website for a fintech.
            </h4>
          </div>
        </li>
        <li className="h-26  shadow-sm px-2 py-1 ">
          <div>
            <Link href={"#"}>
              <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                NAV API
              </h2>
            </Link>
            <h4 className="leading-7 [&:not(:first-child)]:mt-2">
              Live and historical data for various mutual funds house in India.
            </h4>
          </div>
        </li>
        <li className="h-26  shadow-sm px-2 py-1 ">
          <div>
            <Link href={"#"}>
              <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                MyNewHome.com 
              </h2>
            </Link>
            <h4 className="leading-7 [&:not(:first-child)]:mt-2">
              A website to check out various properties under sale in your locality and connect with their sellers.
            </h4>
          </div>
        </li>
      </ul>
    </div>
  );
}
