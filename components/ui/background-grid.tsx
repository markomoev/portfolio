"use client";

import React from "react";
import { cn } from "@/lib/utils";

type BackgroundGridProps = {
  className?: string;
  intensity?: "subtle" | "medium";
};

export function BackgroundGrid({ className, intensity = "subtle" }: BackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute inset-0",
          intensity === "medium" ? "opacity-30" : "opacity-15"
        )}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(148 163 184 / 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.25) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(closest-side, black 55%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(700px circle at 15% 20%, rgb(99 102 241 / 0.08), transparent 60%), radial-gradient(700px circle at 85% 15%, rgb(139 92 246 / 0.06), transparent 55%)",
        }}
      />
    </div>
  );
}
