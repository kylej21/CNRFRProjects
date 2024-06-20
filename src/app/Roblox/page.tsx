'use client'
import React from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Roblox() {
    const currentPath = usePathname();
    const links = [
        { label: "Mr. Kyle", href: "https://www.roblox.com/games/10470130773/Color-Switcher-IMPOSSIBLE-100-PERCENT-FAIL" },
        { label: "Michael", href: "/" },
        { label: "Isaac", href: "/" },
        { label: "Sullivan", href: "/" },
        { label: "Clovis", href: "/" },
        { label: "Jayce", href: "/" },
        { label: "Shay", href: "/" },
        { label: "Cooper", href: "/" },
    ];

    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-200 text-stone-700 text-7xl">
            <div className="pt-4 w-full border-stone-700 border-3 rounded-xl pb-4 text-center">
                <p className="pb-12">
                    Clicking these links will take you to the game your child developed on Roblox
                </p>
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
