'use client'
import React from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Minecraft() {
    const currentPath = usePathname();
    const links = [
        { label: "June 17 - June 21 8:30-11:30", href: "https://padlet.com/codeninjasrfr/folsom-minecraft-modding-masters-6-21-24-c1s75ev17mns0z24" },
    ];

    return (
        <main className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-200 text-stone-700 text-7xl">
            <div className="pt-4 w-full border-stone-700 border-3 rounded-xl pb-4 text-center">
                <p className="pb-12 text-5xl">
                    Clicking these links will take you to the mods your child developed on Mcreator
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
