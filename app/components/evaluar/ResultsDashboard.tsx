"use client";

import KpiCard from "./KpiCard";
import EnergyChart from "./EnergyChart";

export default function ResultsDashboard({ results, loading }: { results: any | null; loading: boolean }) {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-24 bg-gray-200 rounded" />
            <div className="h-24 bg-gray-200 rounded" />
            <div className="h-24 bg-gray-200 rounded" />
            <div className="h-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="text-gray-600">Aquí aparecerán los resultados después de evaluar el proyecto.</div>
      </div>
    );
  }

  // Map results (defensivo)
  const res = results.resultados_financieros || results;
  // Some endpoints may return numbers as strings — normalize
  const toNumber = (v: any) => {
    if (v === null || v === undefined) return 0;
    if (typeof v === "number") return v;
    const n = Number(v.toString().replace(/[^0-9.-]+/g, ""));
    return isNaN(n) ? 0 : n;
  };

  const chartData = [
    { name: "Ahorro anual ($)", value: toNumber(res.ahorro_anual ?? res.ahorro_anual ?? 0) },
    { name: "CAPEX ($)", value: toNumber(res.capex ?? res.inversion ?? 0) / 1000 }, // scaled
    { name: "OPEX ($/año)", value: toNumber(res.opex ?? 0) },
  ];

  return (
    <div className="space-y-6">
      {/* Summary header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#1d3b31]">Resultados</h3>
          <p className="text-sm text-gray-500">Resumen técnico y financiero del proyecto evaluado</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-600">Viable:</div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${results.es_viable ? "bg-green-100 text-green-800" : "bg-rose-100 text-rose-800"}`}>
            {results.es_viable ? "Sí" : "No"}
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard title="CAPEX" value={`$ ${res.capex ?? res.inversion ?? "0"}`} subtitle="Inversión inicial" />
        <KpiCard title="OPEX (anual)" value={`$ ${res.opex ?? 0}`} subtitle="Costos operativos" />
        <KpiCard title="VPN" value={`$ ${res.vpn ?? 0}`} subtitle="Valor presente neto" />
        <KpiCard title="TIR" value={`${res.tir ?? 0} %`} subtitle="Tasa interna de retorno" />
      </div>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard title="Ahorro anual" value={`$ ${res.ahorro_anual ?? 0}`} />
        <KpiCard title="Periodo retorno (años)" value={`${res.periodo_retorno ?? "-"}`} />
        <KpiCard title="# Paneles" value={`${res.num_paneles ?? 0}`} />
        <KpiCard title="Potencia instalada (kW)" value={`${res.potencia_instalada_kw ?? 0}`} />
      </div>

      {/* Chart + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EnergyChart data={chartData} />
        </div>

        <div className="space-y-4 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <h4 className="text-sm text-gray-600 mb-2">Detalles técnicos</h4>
          <div className="text-sm text-gray-700">
            <div><strong>Área utilizada (m²):</strong> {res.area_utilizada_m2 ?? "-"}</div>
            <div><strong>Irradiación (kWh/m²):</strong> {res.irradiacion_kwh_m2 ?? "-"}</div>
            <div><strong>Inversión estimada:</strong> $ {res.inversion ?? res.capex ?? "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
