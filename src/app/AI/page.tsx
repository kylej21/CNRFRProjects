"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AI() {
  const links = [
    { label: "Evan", href: "/Evan" },
    { label: "Joey", href: "/Joey" },
    { label: "Nikan", href: "/Nikan" },
    { label: "Ethan", href: "/Ethan" },
    { label: "Kirk", href: "/Kirk" },
  ];
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-200 text-stone-700 text-7xl">
            <div className="pt-4 w-full border-stone-700 border-3 rounded-xl pb-4 text-center">
                <p className="pb-12 text-5xl">
                    Clicking the link to take you to your child's computer vision model
                </p>
                <div className="flex flex-col space-y-4 items-center w-full"> {/* Remove 'items-center' and adjust width 'w-full' */}
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="w-full flex text-center">
                            <div className="w-1/4"></div>
                            <div className="flex w-1/2 px-4 py-2 rounded-md bg-white shadow-md hover:bg-green-200 text-center">
                                {link.label}
                            </div>
                            <div className="w-1/4"></div>
                        </Link>
                    ))}
                </div>
                <div className="flex h-1/2"></div>
            </div>
        </main>
  );
}
