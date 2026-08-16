import {
  JetBrains_Mono,
  Sofia_Sans,
  Sofia_Sans_Extra_Condensed,
  Shantell_Sans,
} from "next/font/google";

/**
 * Vinyl on glass: Sofia Sans Extra Condensed (Lettersoup, full Cyrillic).
 * Body: Sofia Sans. Shop-handwriting on stickers: Shantell Sans.
 */
export const fontDisplay = Sofia_Sans_Extra_Condensed({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Sofia_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const fontHand = Shantell_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});
