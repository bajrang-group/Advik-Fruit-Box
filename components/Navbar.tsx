"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const  pathname = usePathname();

  const isHome = pathname === "/"

  return (
    <header className="w-full border-b bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/next.svg" // replace with your Advik logo
            alt="logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-2xl text-black">
            Advik Fruit Box
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-[17px] font-medium text-black">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">Products</a>
          <a href="#" className="hover:text-orange-500">Corporate</a>
          <a href="#" className="hover:text-orange-500">Blogs</a>
          <a href="#" className="hover:text-orange-500">Contact Us</a>
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="border border-black rounded-full px-5 py-2 text-[16px] hover:bg-gray-100">
            Schedule Meet
          </button>

          <button className="bg-orange-500 text-white rounded-full px-6 py-2 text-[16px] hover:bg-orange-600">
            Order Online
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">Products</a>
            <a href="#" className="hover:text-orange-500">Corporate</a>
            <a href="#" className="hover:text-orange-500">Blogs</a>
            <a href="#" className="hover:text-orange-500">Contact Us</a>

            <button className="border border-black rounded-full px-5 py-2 text-[16px] hover:bg-gray-100">
              Schedule Meet
            </button>

            <button className="bg-orange-500 text-white rounded-full px-6 py-2 text-[16px] hover:bg-orange-600">
              Order Online
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
