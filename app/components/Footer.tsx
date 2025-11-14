"use client";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#57b33e] text-white py-15 px-6 md:px-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

        <div>
          <h2 className="text-2xl font-bold text-white pb-4">Solar Health</h2>
          <p className="text-gray-200 leading-relaxed pb-6">
            Plataforma para evaluar, simular y gestionar proyectos de energía solar
            en instituciones de salud con indicadores energéticos y financieros.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Navegación</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-gray-800 cursor-pointer transition">Inicio</li>
            <li className="hover:text-gray-800 cursor-pointer transition">Servicios</li>
            <li className="hover:text-gray-800 cursor-pointer transition">Evaluar</li>
            <li className="hover:text-gray-800 cursor-pointer transition">Contacto</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Contacto</h3>
          <ul className="space-y-3 text-gray-200">
            <li>Barranquilla, Colombia</li>
            <li className="hover:text-gray-800 cursor-pointer transition">
              info@solarhealth.com
            </li>
            <li className="hover:text-gray-800 cursor-pointer transition">
              +57 300 000 0000
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/30 pt-4  text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Solar Health — Todos los derechos reservados.
      </div>
    </footer>
  );
}
