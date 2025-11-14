"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative w-full shadow">
        <div className="absolute  left-20 z-50">
        <Image
          src="/logo.jpg"  
          alt="Solar Health Logo"
          width={150}
          height={150}
          className=" shadow-lg"
        />
      </div>

      <div className="bg-[#57b33e] text-white text-sm font-semibold py-5 px-6 flex justify-center ">
        <span> Barranquilla, Colombia</span>
      </div>

      <nav className="bg-white text-black p-8 px-20 flex justify-end items-center space-x-20">

        <ul className="flex gap-20 font-bold text-xl">
          <li className="hover:text-[#57b33e]  cursor-pointer">Home</li>
          <li className="hover:text-[#57b33e] cursor-pointer">Servicio</li>
          <li className="hover:text-[#57b33e] cursor-pointer">Contacto</li>
        </ul>
      </nav>
    </header>
  );
}
