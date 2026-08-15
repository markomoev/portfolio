import { JetBrains_Mono, Onest, Unbounded } from "next/font/google";

export const fontDisplay = Unbounded({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Onest({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});
