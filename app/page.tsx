"use client";
export default function Home() {
  return (
    <>
      {/* SECCIÓN HERO */}
      <section
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/fondo-home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-3xl px-6 md:px-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a Solar Health
          </h1>

          <p className="text-lg md:text-2xl pb-8">
            Evalúa, simula y gestiona proyectos de energía solar para
            instituciones de salud, integrando indicadores energéticos y
            financieros para una toma de decisiones inteligente.
          </p>

          <button
            className="bg-[#57b33e] hover:bg-[#4a9c34] transition text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg"
            onClick={() => console.log("Ir a evaluar")}
          >
            Evaluar
          </button>
        </div>
      </section>

      {/* SECCIÓN BENEFICIOS  */}
      <section className="w-full bg-white py-24 px-6 md:px-20">
        <div className="pb-10">  
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#57b33e]">
      ¿Por qué usar Solar Health?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 ">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold pb-4 text-[#57b33e]">
              Evaluación rápida y precisa
            </h3>
            <p className="text-gray-700">
              Evalúa el potencial energético de la institución sin conocimientos avanzados. El sistema analiza consumo, radiación solar y configuración del sistema fotovoltaico automáticamente.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold pb-4 text-[#57b33e]">
              Indicadores financieros inteligentes
            </h3>
            <p className="text-gray-700">
              El sistema calcula CAPEX, OPEX, VPN, TIR e inversión total, permitiendo comparar la rentabilidad del proyecto y su viabilidad financiera antes de ejecutarlo.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold pb-4 text-[#57b33e]">
              Simulaciones optimizadas
            </h3>
            <p className="text-gray-700">
              Prueba múltiples configuraciones de paneles, inversores y capacidades instaladas para encontrar la opción más eficiente según energía, inversión y retorno esperado.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#003366] py-24 px-6 md:px-24">
  <h2 className="text-4xl md:text-5xl font-bold text-center pb-16 text-white">
    ¿Cómo funciona Solar Health?
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

    {/* PASO 1 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all">
      <div className="w-16 h-16 rounded-xl bg-[#e8f5e8] flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-[#57b33e]">1</span>
      </div>

      <h3 className="text-2xl font-semibold pt-4 pb-4 text-[#1d3b31]">
        Registra los datos del proyecto
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Ingresa los datos básicos de la institución de salud y su consumo energético.
      </p>
    </div>

    {/* PASO 2 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all">
      <div className="w-16 h-16 rounded-xl bg-[#e8f5e8] flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-[#57b33e]">2</span>
      </div>

      <h3 className="text-2xl font-semibold pt-4 pb-4 text-[#1d3b31]">
        Procesamiento automático
      </h3>
      <p className="text-gray-600 leading-relaxed">
        El sistema realiza cálculos energéticos y financieros de forma precisa e instantánea.
      </p>
    </div>

    {/* PASO 3 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all">
      <div className="w-16 h-16 rounded-xl bg-[#e8f5e8] flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-[#57b33e]">3</span>
      </div>

      <h3 className="text-2xl font-semibold pt-4 pb-4 text-[#1d3b31]">
        Indicadores financieros + Informe
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Obtén resultados claros: CAPEX, OPEX, TIR, VPN e inversión total.  
        Descarga un informe profesional en PDF listo para presentar.
      </p>
    </div>

  </div>
</section>

    </>
  );
}

