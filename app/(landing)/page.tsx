import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="text-center">
      <div className=" bg-white rounded-full">
        <p className=" text-4xl text">landing page - unrestricted</p>
        <div className="p-8">
          <Link href="/sign-in" className="p-2">
            <Button size={"lg"}>Login</Button>
          </Link>
          <Link href="/sign-up" className="p-2">
            <Button size={"lg"}>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
