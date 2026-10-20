import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-teal-500/15 text-teal-300 border-teal-500/30 hover:bg-teal-500/25",
        secondary:
          "border-transparent bg-slate-800 text-slate-300 hover:bg-slate-700",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-slate-700",
        java: "border-amber-500/30 bg-amber-500/10 text-amber-300",
        spring: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        postgres: "border-sky-500/30 bg-sky-500/10 text-sky-300",
        react: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
        typescript: "border-blue-500/30 bg-blue-500/10 text-blue-300",
        docker: "border-blue-400/30 bg-blue-400/10 text-blue-300",
        tailwind: "border-teal-400/30 bg-teal-400/10 text-teal-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
