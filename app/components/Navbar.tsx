"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full shadow">
      
      <div className="absolute left-4 top-2 md:left-20 md:top-0 z-50">
        <Image
          src="/logo.jpg"
          alt="Solar Health Logo"
          width={120}
          height={120}
          className="shadow-lg md:w-[150px] md:h-[150px]"
        />
      </div>

      <div className="bg-[#57b33e] text-white text-sm font-semibold py-3 md:py-5 px-6 flex justify-center">
        <span>Barranquilla, Colombia</span>
      </div>

      <nav className="bg-white text-black p-4 md:p-8 px-6 md:px-20 flex justify-end items-center">

        <button 
          className="md:hidden mr-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        <ul className="hidden md:flex gap-20 font-bold text-xl">
          <li className="hover:text-[#57b33e] cursor-pointer">Home</li>
          <li className="hover:text-[#57b33e] cursor-pointer">Servicio</li>
          <li className="hover:text-[#57b33e] cursor-pointer">Contacto</li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden bg-white text-black shadow-lg text-lg font-semibold flex flex-col items-center py-6 space-y-6">
          <span className="hover:text-[#57b33e] cursor-pointer">Home</span>
          <span className="hover:text-[#57b33e] cursor-pointer">Servicio</span>
          <span className="hover:text-[#57b33e] cursor-pointer">Contacto</span>
        </div>
      )}
    </header>
  );
}

