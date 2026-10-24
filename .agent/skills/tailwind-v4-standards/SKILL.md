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

## 2. Conflito de Display (`flex` vs `block` / `inline`)

Evite declarar mais de uma classe que defina a mesma propriedade de exibição (`display`) no mesmo elemento, pois geram avisos de redundância e conflito de CSS:
- ❌ **Evite:** `className="... flex ... block ..."`
- ✅ **Use apenas a desejada:** `className="... flex ..."` (ou apenas `block`)

## 3. Modificadores Pseudo e Seletores Arbitrários (`has`)

No Tailwind CSS v4, modificadores de pseudo-classes como `:has()` possuem sintaxe direta com variantes nativas:
- ❌ **Evite:** `[&:has([role=checkbox])]:pr-0`
- ✅ **Use:** `has-[[role=checkbox]]:pr-0`

## 4. Dimensões Numéricas / Escalares

O Tailwind v4 aceita valores numéricos nativos e decimais na escala de espaçamento (cada `1` equivale a `0.25rem` / `4px`), dispensando colchetes arbitrários em muitos casos:
- ❌ **Evite:** `max-w-[400px]` ➔ ✅ **Use:** `max-w-100` (`100 * 4px = 400px`)
- ❌ **Evite:** `max-w-[85px]` ➔ ✅ **Use:** `max-w-21.25` (`21.25 * 4px = 85px`)

## 5. Diretivas e At-Rules do Tailwind v4 (`@theme`, `@custom-variant`, `@apply`)

No Tailwind CSS v4, as seguintes diretivas são nativas e oficiais:
- `@theme` / `@theme inline`: para declaração de tokens de tema e fontes.
- `@custom-variant`: para declaração de variantes customizadas (ex: modo dark `(& :is(.dark *))`).
- `@apply`: para aplicação de classes utilitárias em seletores CSS.

> **Aviso de Linter da IDE:** Como essas diretivas `@...` são extensões da sintaxe CSS introduzidas pelo Tailwind v4, o validador nativo de CSS do VS Code/IDE pode sinalizar `Unknown at rule`. Para evitar esses falsos positivos sem comprometer o CSS, o arquivo [.vscode/settings.json](file:///Users/cops/dev/rc/rodrigocopetti.github.io/.vscode/settings.json) define `"css.lint.unknownAtRules": "ignore"`.

## 6. Verificação de Integridade

Sempre que adicionar ou alterar classes utilitárias de estilo:
1. Verifique se nenhuma classe legada do tipo `bg-gradient-to-*` foi introduzida.
2. Certifique-se de que não há propriedades conflitantes de display (ex.: `flex` e `block`).
3. Execute `pnpm run build` para garantir que os utilitários foram compilados corretamente pelo `@tailwindcss/vite`.
