import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marko Moev | Portfolio",
    description: "I help ambitious founders and brands build digital products that people actually believe in. Fast, SEO-ready, mobile-first websites for local businesses, creators & startups.",
    keywords: ["Marko Moev", "web developer", "web design", "Next.js", "SEO", "websites for startups", "freelance web developer"],
    authors: [{ name: "Marko Moev" }],
    creator: "Marko Moev",
    openGraph: {
        type: "website",
        title: "Marko Moev | Portfolio",
        description: "I help ambitious founders and brands build digital products that people actually believe in.",
        siteName: "Marko Moev",
    },
    twitter: {
        card: "summary_large_image",
        title: "Marko Moev | Portfolio",
        description: "I help ambitious founders and brands build digital products that people actually believe in.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body>
            {children}
        </body>
        </html>
    )
}