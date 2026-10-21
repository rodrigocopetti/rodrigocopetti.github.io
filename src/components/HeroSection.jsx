import { Terminal, Code2 } from "lucide-react";
import {
  ReactIcon,
  SpringIcon,
  JavaIcon,
  TypeScriptIcon,
  DockerIcon,
  PostgresIcon,
  GithubIcon,
} from "@/components/TechIcons";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-2xl border border-surface-border bg-gradient-to-b from-surface-card-from via-surface-card-via to-surface-card-to p-6 lg:p-8 shadow-2xl"
    >
      {/* Luz ambiente de fundo */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid superior do Hero: Informações à esquerda e Avatar/Status à direita */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Lado esquerdo: Textos, Tech Stack e Botões */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-sm font-semibold tracking-wide text-brand-primary uppercase">Olá, eu sou um</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Desenvolvedor <br />
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 dark:from-teal-300 dark:via-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Full-Stack
              </span>
            </h1>
            {/* <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium pt-1">
              especializado em <span className="text-slate-900 dark:text-white font-semibold">React</span> &amp;{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Spring Boot</span>
            </p> */}
          </div>

          {/* Ícones de tecnologias em destaque */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/60 shadow-xs hover:scale-110 transition-transform duration-200">
              <ReactIcon className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/60 shadow-xs hover:scale-110 transition-transform duration-200">
              <SpringIcon className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/60 shadow-xs hover:scale-110 transition-transform duration-200">
              <JavaIcon className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/60 shadow-xs hover:scale-110 transition-transform duration-200">
              <TypeScriptIcon className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/60 shadow-xs hover:scale-110 transition-transform duration-200">
              <DockerIcon className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/60 shadow-xs hover:scale-110 transition-transform duration-200">
              <PostgresIcon className="h-5 w-5" />
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-xs font-bold text-white dark:text-slate-950 transition-all hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-surface-border bg-slate-100 dark:bg-slate-900/60 px-6 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white hover:border-surface-border-hover active:scale-95"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Lado direito: Foto de Perfil com halo de brilho e Cartão de Status */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative">
            {/* Halo de luz ciano/esmeralda em volta do avatar */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-teal-500 via-cyan-400 to-emerald-500 opacity-80 blur-sm animate-pulse" />
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-2 border-brand-primary/80 bg-slate-900 shadow-xl">
              <img
                src="/avatar.jpg"
                alt="Desenvolvedor Full-Stack"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Badge de status no GitHub com LED verde pulsante */}
          <div className="mt-4 flex flex-col items-center gap-1.5 rounded-xl border border-surface-border bg-slate-100 dark:bg-slate-900/80 px-4 py-2 shadow-sm dark:shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Status atividade</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-500" />
              </span>
            </div>
            <a
              href="https://github.com/rodrigocopetti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] text-brand-primary hover:text-brand-primary-hover font-medium transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Status no GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Snippets de Código / Janelas IDE flutuantes no Hero */}
      <div className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Editor 1: Backend Spring Boot */}
        <div className="overflow-hidden rounded-xl border border-surface-border bg-[#0b1120] shadow-xl font-mono text-[11px] leading-relaxed">
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-3 py-1.5 text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Terminal className="h-3 w-3 text-emerald-400" />
              SpringBootController.java
            </span>
          </div>
          <div className="p-3.5 text-slate-200 space-y-0.5 overflow-x-auto">
            <div>
              <span className="text-emerald-400 font-medium">@RestController</span>
            </div>
            <div>
              <span className="text-teal-400 font-medium">@RequestMapping</span>(
              <span className="text-amber-300">"/api/v1/projects"</span>)
            </div>
            <div>
              <span className="text-purple-400 font-medium">public class</span>{" "}
              <span className="text-yellow-300">ProjectController</span> &#123;
            </div>
            <div className="pl-3">
              <span className="text-emerald-400 font-medium">@Autowired</span>
            </div>
            <div className="pl-3">
              <span className="text-purple-400 font-medium">private</span>{" "}
              <span className="text-cyan-300">ProjectService</span> projectService;
            </div>
            <div className="pl-3 pt-1">
              <span className="text-teal-400 font-medium">@GetMapping</span>
            </div>
            <div className="pl-3">
              <span className="text-purple-400 font-medium">public</span>{" "}
              <span className="text-cyan-300">ResponseEntity</span>&lt;
              <span className="text-cyan-300">List</span>&lt;<span className="text-cyan-300">Project</span>&gt;&gt;{" "}
              <span className="text-blue-400">getAll</span>() &#123;
            </div>
            <div className="pl-6">
              <span className="text-purple-400 font-medium">return</span>{" "}
              <span className="text-cyan-300">ResponseEntity</span>
              .ok(projectService.findAll());
            </div>
            <div className="pl-3">&#125;</div>
            <div>&#125;</div>
          </div>
        </div>

        {/* Editor 2: Frontend React & TypeScript */}
        <div className="overflow-hidden rounded-xl border border-surface-border bg-[#0b1120] shadow-xl font-mono text-[11px] leading-relaxed">
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-3 py-1.5 text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Code2 className="h-3 w-3 text-cyan-400" />
              FullStackDeveloper.ts
            </span>
          </div>
          <div className="p-3.5 text-slate-300 space-y-0.5 overflow-x-auto">
            <div>
              <span className="text-purple-400">export const</span>{" "}
              <span className="text-yellow-300">developerProfile</span> = &#123;
            </div>
            <div className="pl-3">
              <span className="text-cyan-300">role</span>:{" "}
              <span className="text-amber-300">"Full-Stack Specialist"</span>,
            </div>
            <div className="pl-3">
              <span className="text-cyan-300">frontend</span>: [<span className="text-amber-300">"React"</span>,{" "}
              <span className="text-amber-300">"TypeScript"</span>, <span className="text-amber-300">"Tailwind"</span>],
            </div>
            <div className="pl-3">
              <span className="text-cyan-300">backend</span>: [<span className="text-amber-300">"Spring Boot"</span>,{" "}
              <span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"PostgreSQL"</span>],
            </div>
            <div className="pl-3">
              <span className="text-cyan-300">architecture</span>:{" "}
              <span className="text-amber-300">"Microservices &amp; RESTful APIs"</span>,
            </div>
            <div className="pl-3">
              <span className="text-cyan-300">availableForHire</span>: <span className="text-teal-400">true</span>,
            </div>
            <div>&#125;;</div>
          </div>
        </div>
      </div>
    </section>
  );
}
