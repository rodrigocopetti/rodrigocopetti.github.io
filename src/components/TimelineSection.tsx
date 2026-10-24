// Componente de Linha do Tempo e Experiência Profissional

interface ExperienceItem {
  title: string;
  period: string;
  side: "left" | "right";
  items: string[];
}

export function TimelineSection() {
  const experiences: ExperienceItem[] = [
    {
      title: "Desenvolvedor Full-Stack Master",
      period: "2022 - Presente",
      side: "left",
      items: [
        "Otimização de consultas de banco de dados e queries complexas",
        "Construção de APIs RESTful e microsserviços escaláveis",
        "Desenvolvimento frontend em vue/quasar com Spring Boot",
      ],
    },
    {
      title: "Arquiteto de Software / Desenvolvedor Full-Stack Sênior",
      period: "2001 - 2020",
      side: "right",
      items: [
        "Construção de APIs RESTful",
        "Desenvolvimento frontend em react com Spring Boot",
        "Implementação de novas funcionalidades em sistemas legados",
        "Otimização de consultas de banco de dados e queries complexas",
      ],
    },
    {
      title: "Desenvolvedor Sênior",
      period: "1997 - 2001",
      side: "left",
      items: [
        "Desenvolvimento e manutenção de sistemas comerciais utilizando Java e Delphi",
      ],
    },
    {
      title: "Desenvolvedor Pleno",
      period: "1996 - 1997",
      side: "right",
      items: [
        "Desenvolvimento e manutenção de sistemas comerciais utilizando Clipper",
      ],
    },
  ];

  return (
    <section className="space-y-6 rounded-2xl border border-surface-border bg-linear-to-b from-surface-card-from via-surface-card-via to-surface-card-to p-6 lg:p-8 shadow-2xl">
      {/* Cabeçalho com Título e Badge Professional */}
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Experiência &amp; Timeline
        </h2>
        <div className="inline-flex items-center rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary shadow-xs shadow-brand-primary/20">
          Professional
        </div>
      </div>

      {/* Linha do tempo visual com árvore de nós */}
      <div className="relative mt-6">
        {/* Linha vertical central */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-linear-to-b from-teal-500 via-emerald-500 to-slate-400 dark:to-slate-800" />

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isLeft = exp.side === "left";
            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Ponto / Nó na linha do tempo */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-primary bg-white dark:bg-slate-950 shadow-md shadow-brand-primary/40 z-10">
                  <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
                </div>

                {/* Conteúdo do cartão: posicionado na esquerda ou direita em desktop */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    isLeft
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:ml-auto md:text-left"
                  }`}
                >
                  <div className="group rounded-xl border border-surface-border bg-surface-item p-4 transition-all duration-300 hover:border-surface-border-hover hover:bg-surface-item-hover hover:shadow-lg hover:shadow-brand-primary/10">
                    <div className="flex flex-wrap items-center gap-2 justify-start md:justify-start">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                    <span className="mt-0.5 inline-block text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {exp.items.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-brand-primary shrink-0 mt-0.5 font-bold">
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
