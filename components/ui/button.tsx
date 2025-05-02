import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        red: "bg-red-500 text-white shadow-xs hover:bg-red-600",
        redDark: "bg-red-700 text-white shadow-xs hover:bg-red-800",
        green: "bg-green-500 text-white shadow-xs hover:bg-green-600",
        greenDark: "bg-green-700 text-white shadow-xs hover:bg-green-800",
        blue: "bg-blue-500 text-white shadow-xs hover:bg-blue-600",
        blueDark: "bg-blue-700 text-white shadow-xs hover:bg-blue-800",
        yellow: "bg-yellow-500 text-white shadow-xs hover:bg-yellow-600",
        yellowDark: "bg-yellow-600 text-white shadow-xs hover:bg-yellow-700",
        purple: "bg-purple-500 text-white shadow-xs hover:bg-purple-600",
        purpleDark: "bg-purple-700 text-white shadow-xs hover:bg-purple-800",
        pink: "bg-pink-500 text-white shadow-xs hover:bg-pink-600",
        pinkDark: "bg-pink-700 text-white shadow-xs hover:bg-pink-800",
        indigo: "bg-indigo-500 text-white shadow-xs hover:bg-indigo-600",
        indigoDark: "bg-indigo-700 text-white shadow-xs hover:bg-indigo-800",
        cyan: "bg-cyan-500 text-white shadow-xs hover:bg-cyan-600",
        cyanDark: "bg-cyan-700 text-white shadow-xs hover:bg-cyan-800",
        emerald: "bg-emerald-500 text-white shadow-xs hover:bg-emerald-600",
        emeraldDark: "bg-emerald-700 text-white shadow-xs hover:bg-emerald-800",
        gray: "bg-gray-500 text-white shadow-xs hover:bg-gray-600",
        grayDark: "bg-gray-700 text-white shadow-xs hover:bg-gray-800",
        white: "bg-gray-100 text-black border shadow-xs hover:bg-gray-200",
        whiteBorder: "bg-gray-100 text-black border border-gray-700 shadow-xs hover:bg-gray-200"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
