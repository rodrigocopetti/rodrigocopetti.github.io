import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { TechStackSection } from "@/components/TechStackSection"
import { TimelineSection } from "@/components/TimelineSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { LayoutGrid, Rows } from "lucide-react"

export default function App() {
  const [activeSection, setActiveSection] = useState("home")
  // Modo de exibição: 'showcase' (3 colunas como na imagem de referência) ou 'linear' (página corrida)
  const [viewMode, setViewMode] = useState("showcase")

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Barra de Título Superior (Banner do Portfólio idêntico à imagem de referência) */}
      <div className="w-full bg-[#050810] border-b border-slate-800/80 py-4 px-4 sm:px-8 text-center sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <span>PORTFOLIO</span>
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf] inline-block animate-pulse" />
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                FULL STACK DEVELOPER
              </span>
            </h1>
          </div>

          {/* Seletor de Modo de Visualização */}
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-full p-1 text-xs">
            <button
              onClick={() => setViewMode("showcase")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer font-medium ${
                viewMode === "showcase"
                  ? "bg-teal-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Painel Showcase (3 Colunas)</span>
            </button>
            <button
              onClick={() => setViewMode("linear")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer font-medium ${
                viewMode === "linear"
                  ? "bg-teal-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Rows className="h-3.5 w-3.5" />
              <span>Fluxo Contínuo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Navegação do Portfólio */}
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full max-w-[1720px] mx-auto p-4 sm:p-6 lg:p-8">
        {viewMode === "showcase" ? (
          /* Visualização Showcase em 3 Colunas (fiel ao mockup anexo no desktop) */
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 items-start">
            {/* Coluna 1: Hero, Apresentação e Janelas de Código IDE */}
            <div className="space-y-6">
              <HeroSection />
              {/* No modo showcase, também exibimos a experiência como suporte na coluna 1 */}
              <div className="block 2xl:hidden">
                <TimelineSection />
              </div>
            </div>

            {/* Coluna 2: Habilidades, Tech Stack e Experiência/Timeline */}
            <div className="space-y-6">
              <TechStackSection />
              <div className="hidden 2xl:block">
                <TimelineSection />
              </div>
            </div>

            {/* Coluna 3: Repositórios GitHub e Seção de Contato */}
            <div className="space-y-6 lg:col-span-2 2xl:col-span-1">
              <ProjectsSection />
              <ContactSection />
            </div>
          </div>
        ) : (
          /* Visualização de Fluxo Contínuo / Linear */
          <div className="max-w-5xl mx-auto space-y-10">
            <HeroSection />
            <TechStackSection />
            <TimelineSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        )}
      </main>

      {/* Rodapé Moderno */}
      <footer className="w-full border-t border-slate-800/80 bg-[#060912] py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Rodrigo Copetti • Desenvolvedor Full-Stack</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Desenvolvido com <span className="text-teal-400 font-medium">React</span>,{" "}
            <span className="text-sky-400 font-medium">Tailwind CSS</span> e{" "}
            <span className="text-slate-200 font-medium">shadcn/ui</span>
          </p>
        </div>
      </footer>
    </div>
  )
}