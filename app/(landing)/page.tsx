"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <section>
      <div className="bg-slate-900">
        <div className="flex items-center justify-center p-8">
          <h1 className=" text-2xl text-white pr-6">
            {"Scan or click to view my GitHub"}
          </h1>
          <button
            onClick={() =>
              window.open(
                "https://github.com/adambroughton/PollingApp",
                "_blank"
              )
            }
          >
            <img
              src="images/adobe-express-qr-code.jpeg"
              className=" max-h-28 max-w-28"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center text-center pt-10">
        <div className="rounded-lg bg-white border-4 w-3/4 p-10">
          <p className=" text-4xl pb-2 font-semibold">Polling App</p>
          <p className="text-muted-foreground">by Adam Broughton</p>
          <div className="flex justify-center p-8 pb-0">
            <Link href="/sign-in" className="p-2">
              <Button size={"lg"}>Login</Button>
            </Link>
            <div className="p-2"></div>
            <Link href="/sign-up" className="p-2">
              <Button size={"lg"}>Register</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center pt-10">
        <div className="rounded-lg bg-white border-4 w-3/4 p-10">
          <p className="text-3xl pb-2 font-semibold">Technologies used:</p>
          <ul className="flex flex-wrap gap-4 items-center pt-10 justify-center">
            <li className="flex items-center">
              <img src="images/react.png" className=" h-16" alt="React" />
            </li>
            <li className="flex items-center">
              <img src="images/nextjs.png" className=" h-16" alt="Next.js" />
            </li>
            <li className="flex items-center">
              <img src="images/nodejs.png" className=" h-16" alt="Nodejs" />
            </li>
            <li className="flex items-center p-1">
              <img
                src="images/tailwind.png"
                className=" h-16 pl-2 pr-2"
                alt="Tailwind CSS"
              />
            </li>
            <li className="flex items-center">
              <img
                src="images/typescript.png"
                className="h-16"
                alt="TypeScript"
              />
            </li>
            <li className="flex items-center">
              <img src="/images/csharp.jpg" className="h-16 pl-2 " alt="C#" />
            </li>
            <li className="flex items-center">
              <img
                src="/images/dotnet.png"
                className="h-16 pr-2"
                alt="DotNet"
              />
            </li>
            <li className="flex items-center">
              <img src="images/SQLite.png" className="h-16 mt-4" alt="AWS" />
            </li>
            <li className="flex items-center">
              <img src="images/aws.png" className="h-16 mt-4" alt="AWS" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
