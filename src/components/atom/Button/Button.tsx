import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "solid", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center cursor-pointer font-bold justify-center rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";

    const variantClasses = {
      solid: "bg-[#A3E635] text-black hover:bg-lime-400 focus:ring-[#A3E635]",
      outline:
        "border border-[#A3E635] text-[#A3E635] bg-transparent hover:bg-[#A3E635]/10 focus:ring-[#A3E635]",
    };

    return (
      <button
        ref={ref}
        className={twMerge(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";