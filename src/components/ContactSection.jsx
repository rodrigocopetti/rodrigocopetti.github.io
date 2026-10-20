import { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GithubIcon, LinkedinIcon } from "@/components/TechIcons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section
      id="contato"
      className="rounded-2xl border border-slate-800/80 bg-gradient-to-b from-[#0f172a]/90 via-[#0b1120] to-[#090d16] p-6 lg:p-8 shadow-2xl"
    >
      <div className="border-b border-slate-800/80 pb-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Seção de Contato</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Vamos conversar sobre novos projetos, oportunidades ou parcerias técnicas!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Formulário de Contato à esquerda */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 space-y-4"
        >
          <div className="space-y-1.5">
            <Label
              htmlFor="contact-name"
              className="text-xs text-slate-300"
            >
              Nome
            </Label>
            <Input
              id="contact-name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-slate-800 bg-[#0d1527] text-white placeholder:text-slate-500 focus-visible:border-teal-500"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="contact-email"
              className="text-xs text-slate-300"
            >
              E-mail
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-slate-800 bg-[#0d1527] text-white placeholder:text-slate-500 focus-visible:border-teal-500"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="contact-message"
              className="text-xs text-slate-300"
            >
              Mensagem
            </Label>
            <Textarea
              id="contact-message"
              placeholder="Escreva sua mensagem aqui..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="border-slate-800 bg-[#0d1527] text-white placeholder:text-slate-500 focus-visible:border-teal-500"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto rounded-full bg-teal-400 px-6 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-500/20 active:scale-95 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              "Enviando..."
            ) : isSubmitted ? (
              <span className="flex items-center gap-1.5 text-slate-950">
                <CheckCircle2 className="h-4 w-4" /> Mensagem Enviada!
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Send className="h-3.5 w-3.5" /> Enviar Mensagem
              </span>
            )}
          </Button>

          {isSubmitted && (
            <div className="mt-2 text-xs text-teal-400 font-medium">
              ✓ Obrigado pelo contato! Retornarei o mais rápido possível.
            </div>
          )}
        </form>

        {/* Links Sociais à direita */}
        <div className="flex flex-col gap-3 rounded-xl border border-slate-800/90 bg-[#0d1527]/90 p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Conecte-se</span>

          <a
            href="https://linkedin.com/in/copetti"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-slate-800/80 bg-slate-900/60 p-3 text-slate-200 transition-all hover:border-teal-500/50 hover:bg-slate-800/80 hover:text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/20 text-blue-400 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold">LinkedIn</div>
              <div className="text-[11px] text-slate-400">/in/copetti</div>
            </div>
          </a>

          <a
            href="https://github.com/rodrigocopetti"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-slate-800/80 bg-slate-900/60 p-3 text-slate-200 transition-all hover:border-teal-500/50 hover:bg-slate-800/80 hover:text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-teal-400 group-hover:scale-110 transition-transform">
              <GithubIcon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold">GitHub</div>
              <div className="text-[11px] text-slate-400">@rodrigocopetti</div>
            </div>
          </a>

          <a
            href="mailto:rodrigocopetti.dev@gmail.com"
            className="group flex items-center gap-3 rounded-lg border border-slate-800/80 bg-slate-900/60 p-3 text-slate-200 transition-all hover:border-teal-500/50 hover:bg-slate-800/80 hover:text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-500/20 text-teal-400 group-hover:scale-110 transition-transform">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold">E-mail</div>
              <div className="text-[11px] text-slate-400">rodrigocopetti.dev@gmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
