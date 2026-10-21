import { useState } from "react"
import { Menu, X, LogIn } from "lucide-react"
import { GithubIcon } from "@/components/TechIcons"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Navbar({ onNavigate, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ]

  const handleScroll = (href) => {
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(href.replace("#", ""))
    }
    const elem = document.querySelector(href)
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-page-header/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Ícone do GitHub à esquerda */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rodrigocopetti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-200 transition-colors hover:text-teal-400"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </div>

        {/* Links de navegação centrais */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className={`cursor-pointer transition-colors hover:text-white ${
                activeSection === link.href.replace("#", "")
                  ? "text-teal-400 font-semibold"
                  : "text-slate-300"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Ações à direita: Log in e Contato */}
        <div className="hidden sm:flex items-center gap-4">
          <Dialog open={loginModalOpen} onOpenChange={setLoginModalOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                Log in
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] border-surface-border bg-surface-card text-slate-100">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
                  <LogIn className="h-5 w-5 text-brand-primary" />
                  Área do Desenvolvedor
                </DialogTitle>
                <DialogDescription className="text-slate-400 text-sm">
                  Entre com suas credenciais ou autentique com o GitHub.
                </DialogDescription>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setLoginModalOpen(false)
                }}
                className="space-y-4 pt-2"
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs text-slate-300">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="dev@exemplo.com"
                    className="border-surface-border bg-surface-item text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-xs text-slate-300">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="border-surface-border bg-surface-item text-white placeholder:text-slate-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brand-primary font-semibold text-slate-950 hover:bg-brand-primary-hover transition-colors cursor-pointer"
                >
                  Entrar
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Button
            onClick={() => handleScroll("#contato")}
            className="rounded-full bg-brand-primary px-5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-brand-primary-hover transition-all shadow-md shadow-brand-primary/10 cursor-pointer"
          >
            Contato
          </Button>
        </div>

        {/* Botão de menu mobile */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white hover:bg-slate-800/60"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Menu dropdown mobile */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-surface-border bg-page-header px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className="block w-full text-left py-2 text-sm text-slate-300 hover:text-teal-400 font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                setLoginModalOpen(true)
              }}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Log in
            </button>
            <Button
              onClick={() => handleScroll("#contato")}
              className="rounded-full bg-teal-400 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-teal-300"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
