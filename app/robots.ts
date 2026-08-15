import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/bg/type-test", "/en/type-test"],
        },
        sitemap: "https://markomoev.com/sitemap.xml",
    };
}
