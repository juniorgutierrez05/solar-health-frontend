"use client";

import { useState } from "react";
import EvaluarForm from "../components/evaluar/EvaluarForm";
import ResultsDashboard from "../components/evaluar/ResultsDashboard";

export default function EvaluarPage() {
  const [results, setResults] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (payload: Record<string, any>) => {
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch("http://localhost:8080/api/registro/completo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Error en la petición");
      }

      const data = await res.json();
      if (data.success === false) {
        throw new Error(data.error || "Error en el backend");
      }

      setResults(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9f9]">
      <div className="max-w-7xl mx-auto pt-40 px-6 md:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1d3b31] pb-10">
          Evaluar proyecto solar
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR FORM (col 1) */}
          <aside className="lg:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <EvaluarForm onSubmit={handleSubmit} loading={loading} />
            {error && (
              <div className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded">
                {error}
              </div>
            )}
          </aside>

          {/* RESULTS (col 2..4) */}
          <main className="lg:col-span-3">
            <ResultsDashboard results={results} loading={loading} />
          </main>
        </div>
      </div>
    </div>
  );
}
