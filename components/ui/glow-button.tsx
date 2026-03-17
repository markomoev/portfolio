"use client";

import React from "react";
import { cn } from "@/lib/utils";

type GlowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function GlowButton({
  className,
  variant = "primary",
  ...props
}: GlowButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base md:text-lg font-bold",
        "transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        variant === "primary" &&
          "text-white bg-slate-900 hover:bg-indigo-600 hover:-translate-y-0.5 shadow-sm",
        variant === "secondary" &&
          "text-slate-600 bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 hover:-translate-y-0.5",
        className
      )}
      {...props}
    />
  );
}
