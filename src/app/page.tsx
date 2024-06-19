"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function page(){
  const router = useRouter();

  return(
<main className="flex-col w-full min-h-screen items-center bg-gray-200 text-stone-700 text-7xl">
  <div className="flex-col items-center w-full justify-center space-y-8 pt-8">
    <div className="text-center">CodeNinjas Folsom 6/17-6/22</div>
    <div className="text-center text-2xl">Navigate below to see your child's trained Computer Vision Model at AI camp</div>
    <div className="justify-center flex space-x-40">
      <button className="bg-white rounded-lg h-40 w-60 border-lg border-stone-700 border-2" onClick={()=>router.push('/Kirk')}>Kirk</button>
      <button className="bg-white rounded-lg h-40 w-60 border-lg border-stone-700 border-2" onClick={()=>router.push('/Joey')}>Joey</button>
      <button className="bg-white rounded-lg h-40 w-60 border-lg border-stone-700 border-2" onClick={()=>router.push('/Ethan')}>Ethan</button>
    </div>
    <div className="justify-center flex space-x-40">
    <button className="bg-white rounded-lg h-40 w-60 border-lg border-stone-700 border-2" onClick={()=>router.push('/Evan')}>Evan</button>
    <button className="bg-white rounded-lg h-40 w-60 border-lg border-stone-700 border-2" onClick={()=>router.push('/Nikan')}>Nikan</button>
    </div>      
  </div>
</main>
    )  
}