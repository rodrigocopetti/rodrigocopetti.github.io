import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Sparkles, Check, ChevronDown } from "lucide-react";

export function ThemeToggle({ theme, onToggle, onSelectTheme, className = "" }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    {
      id: "dark",
      name: "Escuro",
      icon: Moon,
      color: "#2dd4bf",
      desc: "Clássico escuro",
    },
    {
      id: "light",
      name: "Claro",
      icon: Sun,
      color: "#0d9488",
      desc: "Clássico claro",
    },
    {
      id: "modern",
      name: "Moderno",
      icon: Sparkles,
      color: "#9956f6",
      desc: "Moderno claro",
    },
    {
      id: "modern-dark",
      name: "Moderno Escuro",
      icon: Sparkles,
      color: "#9956f6",
      desc: "Moderno escuro",
    },
  ];

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (tId) => {
    if (onSelectTheme) {
      onSelectTheme(tId);
    } else if (onToggle) {
      onToggle();
    }
    setOpen(false);
  };

  return (
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative inline-flex items-center gap-1.5 h-8 px-2.5 rounded-full border border-surface-border bg-surface-item text-slate-700 dark:text-slate-300 transition-all hover:border-surface-border-hover hover:text-slate-950 dark:hover:text-white hover:shadow-md hover:shadow-brand-primary/20 active:scale-95 cursor-pointer text-xs font-semibold"
        aria-label="Selecionar tema"
        title={`Tema atual: ${currentTheme.name}`}
      >
        <span
          className="h-2 w-2 rounded-full shrink-0"
          style={{ backgroundColor: currentTheme.color }}
        />
        <CurrentIcon
          className="h-3.5 w-3.5"
          style={{ color: currentTheme.color }}
        />
        <span className="hidden md:inline-block max-w-[85px] truncate">{currentTheme.name}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu com os 4 temas */}
      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-xl border border-surface-border bg-surface-card shadow-xl p-1.5 z-50 animate-in fade-in-0 zoom-in-95 duration-100">
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Temas</div>
          <div className="space-y-0.5">
            {themes.map((t) => {
              const Icon = t.icon;
              const isSelected = t.id === theme;

              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleSelect(t.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer text-left ${
                    isSelected
                      ? "bg-surface-item-hover text-brand-primary font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-surface-item hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full shrink-0 border border-black/10 dark:border-white/10"
                      style={{ backgroundColor: t.color }}
                    />
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{ color: t.color }}
                    />
                    <div className="flex flex-col">
                      <span>{t.name}</span>
                      <span className="text-[10px] text-slate-500 font-normal leading-tight">{t.desc}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 text-brand-primary shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
