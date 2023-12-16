"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "../lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageCircle,
  Music,
  Settings2,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    color: "text-sky-500",
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    color: "text-violet-500",
    href: "/chat",
    icon: MessageCircle,
    label: "Chat",
  },
  {
    color: "text-pink-700",
    href: "/image",
    icon: ImageIcon,
    label: "Image Generation",
  },
  {
    color: "text-orange-700",
    href: "/video",
    icon: VideoIcon,
    label: "Image Generation",
  },
  {
    color: "text-emerald-500",
    href: "/music",
    icon: Music,
    label: "Music Generation",
  },
  {
    color: "text-green-700",
    href: "/code",
    icon: Code,
    label: "Code Generation",
  },
  {
    href: "/settings",
    icon: Settings2,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-3">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            MyGPT
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              className="text-sm group flex p-3 w-full justify-start font-medium
                cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              href={route.href}
              key={route.href}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-6 h-6 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
