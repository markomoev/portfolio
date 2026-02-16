"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-white z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-30 w-full h-full pointer-events-none">{children}</div>
    </div>
  );
}
