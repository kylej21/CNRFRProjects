"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Page() {
  return (
    <main className="flex-col w-full min-h-screen items-center bg-gray-200 text-stone-700 text-7xl">
      <div className="flex-col items-center w-full justify-center space-y-8 pt-8">
        <div className="text-center">CodeNinjas Folsom 6/17-6/22</div>
        <div className="text-center text-2xl">For AI camp, Navigate below to see your child&apos;s trained Computer Vision Model</div>
        <div className="justify-center flex space-x-40 text-center">
          <Link className="bg-white rounded-lg h-20 w-60 border-lg border-stone-700 border-2 hover:bg-green-300" href="/Kirk">Kirk</Link>
          <Link className="bg-white rounded-lg h-20 w-60 border-lg border-stone-700 border-2 hover:bg-green-300" href="/Joey">Joey</Link>
          <Link className="bg-white rounded-lg h-20 w-60 border-lg border-stone-700 border-2 hover:bg-green-300" href="/Ethan">Ethan</Link>
        </div>
        <div className="justify-center flex space-x-40 text-center">
          <Link className="bg-white rounded-lg h-20 w-60 border-lg border-stone-700 border-2 hover:bg-green-300" href="/Evan">Evan</Link>
          <Link className="bg-white rounded-lg h-20 w-60 border-lg border-stone-700 border-2 hover:bg-green-300" href="/Nikan">Nikan</Link>
        </div>
        <div className="text-center text-2xl pt-8">For Roblox camp, click below to find a link to your childs game:</div>
        <div className="justify-center flex space-x-40 text-center">
        <Link className="bg-white rounded-lg h-20 w-60 border-lg border-stone-700 border-2 hover:bg-green-300" href="/Roblox">Roblox</Link>

        </div>
      </div>
    </main>
  );
}
