import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        // SaladVerse Custom Variants - Sharp edges
        hero: 
          "bg-gradient-to-r from-[hsl(142,71%,45%)] to-[hsl(142,80%,55%)] text-[hsl(150,45%,8%)] font-semibold shadow-[0_0_40px_hsl(142,71%,45%,0.3)] hover:shadow-[0_0_60px_hsl(142,71%,45%,0.4)] hover:scale-105 active:scale-95",
        "hero-outline":
          "border-2 border-[hsl(60,30%,96%,0.3)] bg-transparent text-[hsl(60,30%,96%)] hover:bg-[hsl(60,30%,96%,0.1)] hover:border-[hsl(60,30%,96%,0.5)] backdrop-blur-sm",
        saffron:
          "bg-gradient-to-r from-[hsl(38,95%,55%)] to-[hsl(38,100%,65%)] text-[hsl(150,45%,8%)] font-semibold shadow-[0_0_30px_hsl(38,95%,55%,0.4)] hover:scale-105 active:scale-95",
        glass:
          "bg-[hsl(150,30%,20%,0.6)] backdrop-blur-[20px] text-[hsl(60,30%,96%)] hover:bg-[hsl(60,30%,96%,0.1)] border border-[hsl(60,30%,96%,0.2)]",
        whatsapp:
          "bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] hover:scale-105 active:scale-95 shadow-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "h-12 w-12",
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
