"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();
  // to add more items to the Navbar simply add a dictionary entry, the Label is how it appears and the href is the local link
  // the href must match the folder name that the page.tsx exists in
  const links = [
    { label: "Home", href: "/" },
    { label: "AI", href: "/AI" },
    { label: "Roblox", href: "/Roblox" },
    { label: "Minecraft", href: "/Minecraft" },
  ];

  return (
    <div className="flex py-4 px-5 h-1/12 w-full justify-between bg-teal-500">
      <div className="flex items-center justify-center w-full">
        <ul className="flex space-x-4 md:space-x-8 text-lg md:text-2xl text-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${link.href === currentPath ? "text-black" : "text-slate-200"} hover:text-black transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;