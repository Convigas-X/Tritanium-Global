import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow-sm hover:bg-primary-glow hover:shadow-glow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
        // Material You Hero Variants
        hero: 
          "bg-primary text-primary-foreground font-semibold shadow-glow hover:bg-primary-glow hover:shadow-[0_0_60px_-10px_hsl(222_98%_49%_/_0.6)] hover:-translate-y-0.5",
        "hero-outline":
          "border-2 border-foreground/30 bg-transparent text-foreground font-semibold hover:bg-foreground/5 hover:border-foreground/50 hover:-translate-y-0.5",
        // Tonal (Material You)
        tonal:
          "bg-primary-subtle text-accent-foreground hover:bg-accent hover:shadow-glow-sm",
      },
      size: {
        default: "h-10 px-6 py-2 rounded-pill",
        sm: "h-9 px-4 rounded-pill",
        lg: "h-12 px-8 rounded-pill text-base",
        xl: "h-14 px-10 rounded-pill text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
