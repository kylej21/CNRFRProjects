'use client'
import React from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Roblox() {
    const currentPath = usePathname();
    const links = [
        { label: "Mr. Kyle", href: "https://www.roblox.com/games/10470130773/Color-Switcher-IMPOSSIBLE-100-PERCENT-FAIL" },
        { label: "Michael", href: "https://www.roblox.com/games/18147164613/Find-Huggy" },
        { label: "Isaac", href: "https://www.roblox.com/games/18147478845/Car-City" },
        { label: "Sullivan", href: "https://www.roblox.com/games/18147154266/Fortnite" },
        { label: "Clovis", href: "https://www.roblox.com/games/18147138237/Scary-city" },
        { label: "Jayce", href: "https://www.roblox.com/games/18147151703/Lasers" },
        { label: "Shay", href: "https://www.roblox.com/games/18147147528/2-Obby-2-Bosses" },
        { label: "Cooper", href: "https://www.roblox.com/games/18147148212/Scary-City" },
    ];

    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-200 text-stone-700 text-7xl">
            <div className="pt-4 w-full border-stone-700 border-3 rounded-xl pb-4 text-center">
                <p className="pb-12 text-5xl">
                    Click the link to the game your child developed on Roblox
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
