import React, { useState, useTransition } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GithubIcon, LinkedinIcon } from "@/components/TechIcons";
import { Mail } from "lucide-react";

export interface ContactSectionProps {
  layoutMode?: "auto" | "showcase-column";
}

export function ContactSection({ layoutMode = "auto" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      startTransition(() => {
        setLoading(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  // No modo showcase em múltiplas colunas (layoutMode="showcase-column"), os links ficam abaixo
  const isShowcaseColumn = layoutMode === "showcase-column";

  return (
    <section
      id="contato"
      className="rounded-2xl border border-surface-border bg-linear-to-b from-surface-card-from via-surface-card-via to-surface-card-to p-6 lg:p-8 shadow-2xl"
    >
      <div className="border-b border-surface-border pb-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Seção de Contato
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
          Vamos conversar sobre novos projetos, oportunidades ou parcerias
          técnicas!
        </p>
      </div>

      <div
        className={
          isShowcaseColumn
            ? "flex flex-col gap-6"
            : "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        }
      >
        {/* Formulário de Contato */}
        <form
          onSubmit={handleSubmit}
          className={
            isShowcaseColumn ? "w-full space-y-4" : "lg:col-span-2 space-y-4"
          }
        >
          <div className="space-y-1.5">
            <Label
              htmlFor="contact-name"
              className="text-xs text-slate-700 dark:text-slate-300 font-medium"
            >
              Nome
            </Label>
            <Input
              id="contact-name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="border-surface-border bg-surface-item text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:border-brand-primary"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="contact-email"
              className="text-xs text-slate-700 dark:text-slate-300 font-medium"
            >
              E-mail
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="border-surface-border bg-surface-item text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:border-brand-primary"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="contact-message"
              className="text-xs text-slate-700 dark:text-slate-300 font-medium"
            >
              Mensagem
            </Label>
            <Textarea
              id="contact-message"
              placeholder="Escreva sua mensagem aqui..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={4}
              className="border-surface-border bg-surface-item text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:border-brand-primary"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto rounded-full bg-brand-primary px-6 py-2.5 text-xs font-bold text-white dark:text-slate-950 transition-all hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              "Enviando..."
            ) : isSubmitted ? (
              <span className="flex items-center gap-1.5 text-white dark:text-slate-950">
                <CheckCircle2 className="h-4 w-4" /> Mensagem Enviada!
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Send className="h-3.5 w-3.5" /> Enviar Mensagem
              </span>
            )}
          </Button>

          {isSubmitted && (
            <div className="mt-2 text-xs text-emerald-600 dark:text-teal-400 font-medium">
              ✓ Obrigado pelo contato! Retornarei o mais rápido possível.
            </div>
          )}
        </form>

        {/* Links Sociais */}
        <div
          className={`flex flex-col gap-3 rounded-xl border border-surface-border bg-surface-item p-5 ${
            isShowcaseColumn ? "w-full" : ""
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
            Conecte-se
          </span>

          <div className="flex flex-col gap-3">
            <a
              href="https://linkedin.com/in/copetti"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-surface-border bg-slate-100 dark:bg-slate-900/60 p-3 text-slate-800 dark:text-slate-200 transition-all hover:border-surface-border-hover hover:bg-surface-item-hover hover:text-brand-primary dark:hover:text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  LinkedIn
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  /in/copetti
                </div>
              </div>
            </a>

            <a
              href="https://github.com/rodrigocopetti"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-surface-border bg-slate-100 dark:bg-slate-900/60 p-3 text-slate-800 dark:text-slate-200 transition-all hover:border-surface-border-hover hover:bg-surface-item-hover hover:text-brand-primary dark:hover:text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-200 dark:bg-slate-800 text-brand-primary group-hover:scale-110 transition-transform">
                <GithubIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  GitHub
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  @rodrigocopetti
                </div>
              </div>
            </a>

            <a
              href="mailto:rodrigocopetti.dev@gmail.com"
              className="group flex items-center gap-3 rounded-lg border border-surface-border bg-slate-100 dark:bg-slate-900/60 p-3 text-slate-800 dark:text-slate-200 transition-all hover:border-surface-border-hover hover:bg-surface-item-hover hover:text-brand-primary dark:hover:text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-500/10 dark:bg-brand-primary/20 text-teal-600 dark:text-brand-primary group-hover:scale-110 transition-transform">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  E-mail
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  rodrigocopetti.dev@gmail.com
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
