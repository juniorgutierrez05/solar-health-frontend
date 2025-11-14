"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full">

      
      <div className="fixed left-4 top-0 md:left-20 md:top-0 z-50">
        <Image
          src="/logo.jpg"
          alt="Solar Health Logo"
          width={120}
          height={120}
          className="shadow-lg md:w-[150px] md:h-[150px]"
        />
      </div>

     
      <div
        className={`bg-[#57b33e] text-white text-sm font-semibold px-6 flex justify-center 
        transition-all duration-300
        ${hideTopBar ? "h-0 opacity-0 py-0 overflow-hidden" : "py-3 md:py-5 h-auto opacity-100"}
        `}
      >
        <span>Barranquilla, Colombia</span>
      </div>

     
      <nav
        className={`
          bg-white text-black p-4 md:p-8 px-6 md:px-20 shadow-md 
          fixed left-0 w-full z-40 transition-all duration-300
          ${hideTopBar ? "top-0" : "top-8 md:top-[60px]"}
        `}
      >
        
        <button className="md:hidden mr-4" onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        
        <ul className="hidden md:flex gap-20 font-bold text-xl justify-end text-[#003366]">
          <li className="hover:text-[#57b33e] cursor-pointer">Home</li>
          <li className="hover:text-[#57b33e] cursor-pointer">Servicio</li>
          <li className="hover:text-[#57b33e] cursor-pointer">Contacto</li>
        </ul>
      </nav>

     
      {open && (
        <div className={`md:hidden bg-white shadow-lg text-lg font-semibold flex flex-col items-center py-6 space-y-6 
          mt-[100px] transition-all`}>
          <span className="hover:text-[#57b33e] cursor-pointer">Home</span>
          <span className="hover:text-[#57b33e] cursor-pointer">Servicio</span>
          <span className="hover:text-[#57b33e] cursor-pointer">Contacto</span>
        </div>
      )}
    </header>
  );
}
