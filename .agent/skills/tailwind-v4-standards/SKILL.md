---
name: tailwind-v4-standards
description: >-
  Diretrizes de sintaxe e padrões para Tailwind CSS v4 neste projeto. Use esta skill
  ao criar ou modificar classes Tailwind CSS, componentes React ou estilização.
---

# Padrões e Convenções Tailwind CSS v4

Este projeto utiliza Tailwind CSS versão 4 (`@tailwindcss/vite`). As seguintes regras devem ser sempre respeitadas para evitar warnings de depreciação do linter/extensão do Tailwind:

## 1. Gradientes Lineares

No Tailwind CSS v4, a sintaxe legada `bg-gradient-to-*` foi descontinuada em favor de **`bg-linear-to-*`**:

- ❌ **Evite (sintaxe legada v3):**
  - `bg-gradient-to-r`
  - `bg-gradient-to-b`
  - `bg-gradient-to-t`
  - `bg-gradient-to-l`
  - `bg-gradient-to-tr`
  - `bg-gradient-to-tl`
  - `bg-gradient-to-br`
  - `bg-gradient-to-bl`

- ✅ **Use sempre (sintaxe Tailwind v4):**
  - `bg-linear-to-r`
  - `bg-linear-to-b`
  - `bg-linear-to-t`
  - `bg-linear-to-l`
  - `bg-linear-to-tr`
  - `bg-linear-to-tl`
  - `bg-linear-to-br`
  - `bg-linear-to-bl`

### Exemplo de Uso:
```tsx
// Correto:
<div className="bg-linear-to-r from-teal-500 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
  Título com Gradiente
</div>

<section className="bg-linear-to-b from-surface-card-from via-surface-card-via to-surface-card-to">
  Conteúdo do Card
</section>
```

## 2. Verificação de Integridade

Sempre que adicionar ou alterar classes utilitárias de estilo:
1. Verifique se nenhuma classe legada do tipo `bg-gradient-to-*` foi introduzida.
2. Execute `pnpm run build` para garantir que os utilitários foram compilados corretamente pelo `@tailwindcss/vite`.
