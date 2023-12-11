"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { History, LayoutDashboard, Radio, Settings, Vote } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Create Poll",
    icon: Vote,
    href: "/create-poll",
    color: "text-green-500",
  },
  {
    label: "Live Polls",
    icon: Radio,
    href: "/live-polls",
    color: "text-red-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-screen bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center justify-center mb-14"
        >
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Polling App
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:white hover:bg-white/10 rounded-lg transition ",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="p-4 flex justify-center mt-5">
          <UserButton afterSignOutUrl="/" />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
