import type { FC } from "react";
import {
  SpringIcon,
  SpringSecurityIcon,
  JpaHibernateIcon,
  RestApiIcon,
  MicroservicesIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NextjsIcon,
  ReduxIcon,
  PostgresIcon,
  MysqlIcon,
  DockerIcon,
  VueIcon,
  GithubActionsIcon,
  type IconProps,
} from "@/components/TechIcons";

interface SkillItem {
  name: string;
  icon: FC<IconProps>;
  level: number;
  color: string;
  url: string;
}

export function TechStackSection() {
  const backendSkills: SkillItem[] = [
    {
      name: "Spring Boot (Java)",
      icon: SpringIcon,
      level: 95,
      color: "from-emerald-500 to-teal-400",
      url: "https://spring.io/projects/spring-boot",
    },
    {
      name: "Spring Security",
      icon: SpringSecurityIcon,
      level: 88,
      color: "from-emerald-500 to-teal-400",
      url: "https://spring.io/projects/spring-security",
    },
    {
      name: "JPA / Hibernate",
      icon: JpaHibernateIcon,
      level: 90,
      color: "from-teal-500 to-cyan-400",
      url: "https://hibernate.org/orm/",
    },
    {
      name: "REST APIs",
      icon: RestApiIcon,
      level: 96,
      color: "from-cyan-500 to-blue-400",
      url: "https://restfulapi.net/",
    },
    {
      name: "Microservices",
      icon: MicroservicesIcon,
      level: 86,
      color: "from-teal-400 to-emerald-400",
      url: "https://microservices.io/",
    },
  ];

  const frontendSkills: SkillItem[] = [
    {
      name: "React",
      icon: ReactIcon,
      level: 94,
      color: "from-cyan-400 to-sky-500",
      url: "https://react.dev/",
    },
    {
      name: "Vue.js",
      icon: VueIcon,
      level: 85,
      color: "from-emerald-400 to-teal-500",
      url: "https://vuejs.org/",
    },
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
      level: 90,
      color: "from-blue-500 to-indigo-500",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
      level: 95,
      color: "from-teal-400 to-cyan-400",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Next.js",
      icon: NextjsIcon,
      level: 88,
      color: "from-slate-200 to-teal-400",
      url: "https://nextjs.org/",
    },
    {
      name: "Redux",
      icon: ReduxIcon,
      level: 85,
      color: "from-purple-500 to-indigo-500",
      url: "https://redux.js.org/",
    },
  ];

  const devopsSkills: SkillItem[] = [
    {
      name: "PostgreSQL",
      icon: PostgresIcon,
      level: 92,
      color: "from-sky-500 to-blue-600",
      url: "https://www.postgresql.org/",
    },
    {
      name: "MySQL",
      icon: MysqlIcon,
      level: 88,
      color: "from-cyan-600 to-teal-500",
      url: "https://www.mysql.com/",
    },
    {
      name: "Docker",
      icon: DockerIcon,
      level: 90,
      color: "from-blue-400 to-cyan-500",
      url: "https://www.docker.com/",
    },
    {
      name: "GitHub Actions",
      icon: GithubActionsIcon,
      level: 86,
      color: "from-blue-500 to-teal-400",
      url: "https://github.com/features/actions",
    },
  ];

  const renderSkillCard = (skill: SkillItem) => {
    const Icon = skill.icon;
    return (
      <a
        key={skill.name}
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Acessar site oficial do ${skill.name}`}
        className="group relative flex flex-col items-center justify-between rounded-xl border border-surface-border bg-surface-item p-3 text-center transition-all duration-300 hover:border-surface-border-hover hover:bg-surface-item-hover hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-0.5 cursor-pointer no-underline"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900/80 p-2 border border-slate-300 dark:border-slate-800 transition-transform group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <span className="mt-2 text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-primary line-clamp-1">
          {skill.name}
        </span>
        {/* Barra de progresso com gradiente e brilho */}
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800/80">
          <div
            className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 group-hover:opacity-100 opacity-90`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </a>
    );
  };

  return (
    <section className="space-y-6 rounded-2xl border border-surface-border bg-linear-to-b from-surface-card-from via-surface-card-via to-surface-card-to p-6 lg:p-8 shadow-2xl">
      {/* Cabeçalho da Seção */}
      <div className="text-center space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Habilidades &amp; Tech Stack
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-brand-primary uppercase tracking-wider">
          Minha Tech Stack
        </p>
      </div>

      {/* Categoria 1: Backend */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Backend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {backendSkills.map(renderSkillCard)}
        </div>
      </div>

      {/* Categoria 2: Frontend */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          Frontend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {frontendSkills.map(renderSkillCard)}
        </div>
      </div>

      {/* Categoria 3: Banco de Dados e DevOps */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          Banco de Dados e DevOps
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {devopsSkills.map(renderSkillCard)}
        </div>
      </div>
    </section>
  );
}
