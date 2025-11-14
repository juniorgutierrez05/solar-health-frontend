"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full">
      {/* Logo */}
      <div className="fixed left-4 top-0 md:left-20 md:top-0 z-50">
        <Image
          src="/logo.jpg"
          alt="Solar Health Logo"
          width={120}
          height={120}
          className="shadow-lg md:w-[150px] md:h-[150px]"
        />
      </div>

      {/* Top bar */}
      <div
        className={`bg-[#57b33e] text-white text-sm font-semibold px-6 flex justify-center transition-all duration-300
        ${hideTopBar ? "h-0 opacity-0 py-0 overflow-hidden" : "py-3 md:py-5 h-auto opacity-100"}`}
      >
        <span>Barranquilla, Colombia</span>
      </div>

      {/* Navbar */}
      <nav
        className={`bg-white text-black p-4 md:p-8 px-6 md:px-20 shadow-md fixed left-0 w-full z-40 transition-all duration-300
        ${hideTopBar ? "top-0" : "top-8 md:top-[60px]"}`}
      >
        {/* Mobile menu button */}
        <button className="md:hidden mr-4" onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-20 font-bold text-xl justify-end text-[#003366]">
          <li className="hover:text-[#57b33e] cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#57b33e] cursor-pointer">
            <Link href="/evaluar">Servicios</Link>
          </li>
          <li className="hover:text-[#57b33e] cursor-pointer">
            <a href="#footer">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg text-lg font-semibold flex flex-col items-center py-6 space-y-6 mt-[100px] transition-all">
          <Link href="/" onClick={() => setOpen(false)}>
            <span className="hover:text-[#57b33e] cursor-pointer">Home</span>
          </Link>
          <Link href="/evaluar" onClick={() => setOpen(false)}>
            <span className="hover:text-[#57b33e] cursor-pointer">Servicios</span>
          </Link>
          <a href="#footer" onClick={() => setOpen(false)}>
            <span className="hover:text-[#57b33e] cursor-pointer">Contacto</span>
          </a>
        </div>
      )}
    </header>
  );
}

