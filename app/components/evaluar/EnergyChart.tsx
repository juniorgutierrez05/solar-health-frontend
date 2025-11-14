"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

type Props = { data: Array<{ name: string; value: number }> };

export default function EnergyChart({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="h-60 flex items-center justify-center text-gray-400">
        Sin datos para graficar
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <h4 className="text-sm text-gray-600 mb-3">Proyección energía / ahorro</h4>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="kWh / $ ahorro" fill="#1e5aa8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
