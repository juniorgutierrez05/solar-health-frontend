"use client";

type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
  className?: string;
};

export default function KpiCard({ title, value, subtitle, className = "" }: Props) {
  return (
    <div className={`bg-white border border-gray-100 rounded-xl p-6 shadow-sm ${className}`}>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-bold text-[#1d3b31]">{value}</div>
      {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
    </div>
  );
}
