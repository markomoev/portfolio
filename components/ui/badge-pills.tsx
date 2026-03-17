"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function BadgePills({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border border-slate-200 bg-slate-50 text-slate-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
