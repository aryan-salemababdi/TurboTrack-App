import { forwardRef, TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-semibold text-gray-700">{label}</label>
        )}
        <textarea
          className={twMerge(
            "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm resize-none",
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

Textarea.displayName = "Textarea";
