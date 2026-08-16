import "../globals.css";
import type { Metadata } from "next";
import i18nConfig from "@/i18nConfig";
import { fontBody, fontDisplay, fontHand, fontMono } from "@/lib/fonts";
import initTranslations from "../i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { PersonJsonLd, ProfessionalServiceJsonLd } from "@/components/seo/json-ld";

const SITE_URL = "https://markomoev.com";

const metaByLocale: Record<
  string,
  { title: string; description: string; siteName: string; keywords: string[]; ogLocale: string }
> = {
  bg: {
    title: "Marko Moev — уебсайтове за твоя бизнес",
    description:
      "Правя сайтове за твоя бизнес в България — бързи, намираеми в Google, с фиксирана цена, и с код на твое име. София и страната.",
    siteName: "Marko Moev",
    keywords: [
      "Marko Moev",
      "уеб разработчик",
      "уеб дизайн",
      "Next.js",
      "SEO",
      "сайтове за стартъпи",
      "фриланс уеб разработчик",
    ],
    ogLocale: "bg_BG",
  },
  en: {
    title: "Marko Moev — websites for your business",
    description:
      "I build websites for your business in Bulgaria — fast, findable on Google, at a fixed price, with the code in your name. Sofia and nationwide.",
    siteName: "Marko Moev",
    keywords: [
      "Marko Moev",
      "web developer",
      "web design",
      "Next.js",
      "SEO",
      "websites for startups",
      "freelance web developer",
    ],
    ogLocale: "en_US",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale] ?? metaByLocale.bg;
  const alternateLocale = locale === "bg" ? "en_US" : "bg_BG";

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Marko Moev" }],
    creator: "Marko Moev",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        bg: `${SITE_URL}/bg`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/bg`,
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${locale}`,
      title: meta.title,
      description: meta.description,
      siteName: meta.siteName,
      locale: meta.ogLocale,
      alternateLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, ["default"]);

  return (
    <html
      lang={locale}
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontHand.variable} ${fontMono.variable}`}
    >
      <body>
        {/*
          THESIS: The homepage is a type-led offer on sky paper. The Plenty phone is the proof; yellow and red stay accents, never fields.
          OWN-WORLD: Daylight sky (#CFE6F8), navy ink (#0B1F3A), indigo action and atmosphere (#1F5FD6). Yellow and red only as marks — underlines, dots, a stripe. Extra-condensed grotesque.
          STORY: A business owner sees a site for them, believes Marko launches fast at a fixed price with code they own, and books a free call.
          FIRST VIEWPORT: Sky paper, indigo wash, indigo grid. Available·Sofia pill. Stacked vinyl headline with weight animation and indigo “твоя/your”. Subhead. Two pill buttons. Promise chips. Plenty phone floating on the right.
          FORM: Type-led paper with product proof (middle path).
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        <ProfessionalServiceJsonLd locale={locale} />
        <PersonJsonLd locale={locale} />
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={["default"]}
        >
          <Navbar />
        </TranslationsProvider>
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
