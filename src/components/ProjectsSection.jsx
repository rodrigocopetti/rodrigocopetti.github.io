import { ExternalLink, Star, GitFork, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { LanguageDonutChart } from "@/components/LanguageDonutChart"
import { GithubIcon } from "@/components/TechIcons"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce API (Spring Boot)",
      description:
        "API REST robusta para e-commerce com Spring Security, JWT, PostgreSQL e testes com JUnit/Mockito",
      githubUrl: "https://github.com/rodrigocopetti/ecommerce-api",
      demoUrl: "https://demo.rodrigocopetti.dev/ecommerce",
      tags: [
        { name: "Java", variant: "java" },
        { name: "Spring Boot", variant: "spring" },
        { name: "PostgreSQL", variant: "postgres" },
      ],
      stats: { stars: 186, forks: 0, watchers: 195 },
      languages: [
        { name: "Java", percent: 85, color: "#10b981" },
        { name: "HTML", percent: 5, color: "#f97316" },
        { name: "Outras", percent: 10, color: "#8b5cf6" },
      ],
    },
    {
      title: "Admin Dashboard (React)",
      description:
        "Painel de controle para gestão de vendas integrado à API Spring Boot, com gráficos interativos e autenticação segura",
      githubUrl: "https://github.com/rodrigocopetti/admin-dashboard",
      demoUrl: "https://demo.rodrigocopetti.dev/dashboard",
      tags: [
        { name: "React", variant: "react" },
        { name: "TypeScript", variant: "typescript" },
        { name: "Tailwind", variant: "tailwind" },
        { name: "Recharts", variant: "secondary" },
      ],
      stats: { stars: 92, forks: 14, watchers: 110 },
      languages: [
        { name: "TypeScript", percent: 65, color: "#38bdf8" },
        { name: "CSS", percent: 25, color: "#14b8a6" },
        { name: "HTML", percent: 10, color: "#fb923c" },
      ],
    },
    {
      title: "Task Management System",
      description:
        "Arquitetura de microsserviços para desenvolvimento de tarefas; serviços desacoplados, mensageria assíncrona, experiência moderna com TypeScript e automação de containers.",
      githubUrl: "https://github.com/rodrigocopetti/task-management",
      demoUrl: "https://demo.rodrigocopetti.dev/tasks",
      tags: [
        { name: "Java", variant: "java" },
        { name: "Spring Boot", variant: "spring" },
        { name: "Docker", variant: "docker" },
      ],
      stats: { stars: 142, forks: 23, watchers: 160 },
      languages: [
        { name: "Java", percent: 65, color: "#10b981" },
        { name: "TypeScript", percent: 25, color: "#38bdf8" },
        { name: "Docker", percent: 10, color: "#6366f1" },
      ],
    },
  ]

  return (
    <section id="projetos" className="space-y-5 rounded-2xl border border-slate-800/80 bg-gradient-to-b from-[#0f172a]/90 via-[#0b1120] to-[#090d16] p-6 lg:p-8 shadow-2xl">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <GithubIcon className="h-6 w-6 text-teal-400" />
            Repositórios e Projetos GitHub
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Projetos reais com código limpo, arquitetura em microsserviços e full-stack
          </p>
        </div>
      </div>

      {/* Lista de Projetos */}
      <div className="space-y-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl border border-slate-800/90 bg-[#0d1527]/90 p-5 transition-all duration-300 hover:border-teal-500/50 hover:bg-[#111c34] hover:shadow-xl hover:shadow-teal-500/10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Informações do Projeto à esquerda */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="h-5 w-5 text-teal-400 shrink-0" />
                  <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {proj.description}
                </p>

                {/* Tags de tecnologias */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag, tIdx) => (
                    <Badge key={tIdx} variant={tag.variant} className="text-[11px] font-medium">
                      {tag.name}
                    </Badge>
                  ))}
                </div>

                {/* Links e Estatísticas do GitHub */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-teal-400 transition-colors font-medium"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Repositório GitHub</span>
                  </a>

                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </a>

                  {/* Badges de métricas: stars, forks, watchers */}
                  <div className="flex items-center gap-3 pl-2 border-l border-slate-800 text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                      <Star className="h-3.5 w-3.5 text-amber-400" />
                      {proj.stats.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-sky-300 transition-colors">
                      <GitFork className="h-3.5 w-3.5 text-sky-400" />
                      {proj.stats.forks}
                    </span>
                    <span className="flex items-center gap-1 hover:text-teal-300 transition-colors">
                      <Eye className="h-3.5 w-3.5 text-teal-400" />
                      {proj.stats.watchers}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lado direito: Linguagens Usadas com gráfico Donut */}
              <div className="shrink-0 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-center">
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
                  Linguagens Usadas
                </span>
                <LanguageDonutChart data={proj.languages} size={64} strokeWidth={8} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
