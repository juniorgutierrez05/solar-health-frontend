"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  onSubmit: (payload: Record<string, any>) => Promise<void>;
  loading: boolean;
};

export default function EvaluarForm({ onSubmit, loading }: Props) {
  const [form, setForm] = useState({
    nombre_ips: "",
    tipo_ips: "",
    num_consultorios: 5,
    num_equipos: 10,
    id_ciudad: 1,
    mes_consumo: "Enero",
    año_consumo: new Date().getFullYear(),
    consumo_kwh: 1000,
  });

  const [ciudades, setCiudades] = useState<{ id: number; nombre: string }[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/ciudades")
      .then(res => setCiudades(res.data))
      .catch(err => console.error("Error cargando ciudades:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: isNaN(Number(value)) ? value : Number(value) }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre_ips) return alert("Ingresa el nombre de la institución");
    if (!form.consumo_kwh || form.consumo_kwh <= 0) return alert("Consumo inválido");
    onSubmit(form);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <h3 className="text-lg font-semibold text-[#1d3b31] mb-2">Datos de la institución</h3>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Nombre IPS</label>
        <input
          name="nombre_ips"
          value={form.nombre_ips}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#57b33e]"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Tipo de IPS</label>
        <input
          name="tipo_ips"
          value={form.tipo_ips}
          onChange={handleChange}
          placeholder="Hospital, Clínica, Centro de salud..."
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1"># Consultorios</label>
          <input
            type="number"
            name="num_consultorios"
            value={form.num_consultorios as number}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1"># Equipos</label>
          <input
            type="number"
            name="num_equipos"
            value={form.num_equipos as number}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Ciudad</label>
        <select
          name="id_ciudad"
          value={form.id_ciudad}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        >
          {ciudades.map(c => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>
      </div>

      <h3 className="text-lg font-semibold text-[#1d3b31] mt-4">Consumo</h3>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Mes</label>
          <select
            name="mes_consumo"
            value={form.mes_consumo}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            {["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Año</label>
          <input
            type="number"
            name="año_consumo"
            value={form.año_consumo as number}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Consumo (kWh / mes)</label>
        <input
          type="number"
          name="consumo_kwh"
          value={form.consumo_kwh as number}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#57b33e] hover:bg-[#479530] text-white font-semibold py-3 rounded-lg shadow"
        >
          {loading ? "Evaluando..." : "Evaluar proyecto"}
        </button>
      </div>
    </form>
  );
}
