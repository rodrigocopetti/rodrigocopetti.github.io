import { useMemo } from "react"

// Componente de gráfico Donut SVG para demonstrar as linguagens usadas no repositório
export function LanguageDonutChart({ data, size = 68, strokeWidth = 9 }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  // Pré-calcular offsets acumulados para cada fatia circular sem mutar variáveis
  const segments = useMemo(() => {
    return data.map((item, index) => {
      const prevSum = data
        .slice(0, index)
        .reduce((sum, curr) => sum + curr.percent, 0)
      const strokeDasharray = `${(item.percent / 100) * circumference} ${circumference}`
      const strokeDashoffset = -((prevSum / 100) * circumference)
      return {
        ...item,
        strokeDasharray,
        strokeDashoffset,
      }
    })
  }, [data, circumference])

  return (
    <div className="flex items-center gap-3">
      {/* Círculo Donut em SVG */}
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90 transform"
        >
          {/* Círculo de fundo */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="var(--color-chart-track)"
            strokeWidth={strokeWidth}
          />
          {segments.map((item, index) => (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={item.strokeDasharray}
              strokeDashoffset={item.strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 hover:opacity-80"
            />
          ))}
        </svg>
      </div>

      {/* Legenda com as linguagens e porcentagens */}
      <div className="flex flex-col gap-1 text-[11px] text-slate-700 dark:text-slate-300">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5 leading-tight">
            <span
              className="inline-block h-2 w-2 rounded-full shrink-0 shadow-xs"
              style={{ backgroundColor: item.color }}
            />
            <span className="font-medium text-slate-800 dark:text-slate-300">{item.name}</span>
            <span className="text-slate-500 dark:text-slate-400 font-semibold ml-auto pl-1">
              {item.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
