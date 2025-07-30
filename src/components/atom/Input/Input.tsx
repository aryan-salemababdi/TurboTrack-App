import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={twMerge(
            "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm",
            "focus:border-[#A3E635] focus:ring-2 focus:ring-[#A3E635] focus:outline-none",
            error && "border-red-500 focus:ring-red-300",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";