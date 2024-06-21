"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Page() {
  const links = [
    { label: "AI", href: "/AI" },
    { label: "Roblox", href: "/Roblox" },
    { label: "Minecraft", href: "/Minecraft" },
];
  return (
    <main className="flex-col w-full min-h-screen items-center bg-gray-200 text-stone-700 text-7xl">
      <div className="flex-col items-center w-full justify-center space-y-8 pt-8">
        <div className="text-center">CodeNinjas Folsom Projects</div>
            <div className="flex flex-col space-y-4 items-center w-screen">
                    
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="w-full flex text-center">
                            <div className="w-1/4">
                            </div>
                            <div className="flex w-1/2 px-4 py-2 rounded-md bg-white shadow-md hover:bg-green-200 text-center">
                                {link.label}
                            </div>
                            <div className="w-1/4">
                            </div>
                        </Link>
                    ))}
                </div>
      </div>
    </main>
  );
}
