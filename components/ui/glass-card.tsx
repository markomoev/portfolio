"use client";

import React from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "elevated";
};

export function GlassCard({
  className,
  variant = "default",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-100 bg-slate-50 text-card-foreground",
        "transition-transform duration-200",
        "hover:-translate-y-0.5",
        variant === "elevated" && "bg-white border-slate-200 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
