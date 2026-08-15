import "../globals.css";
import type { Metadata } from "next";
import i18nConfig from "@/i18nConfig";
import { fontBody, fontDisplay, fontMono } from "@/lib/fonts";
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
    title: "Марко Моев — уебсайтове за локален бизнес",
    description:
      "Правя сайтове за локален бизнес в България — бързи, намираеми в Google и с панел за управление, който работи от телефона ти. Ловеч и страната.",
    siteName: "Марко Моев",
    keywords: [
      "Марко Моев",
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
    title: "Marko Moev — websites for local businesses",
    description:
      "I build websites for local businesses in Bulgaria — fast, findable on Google, with an admin panel that works from your phone. Lovech and nationwide.",
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
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body>
        <ProfessionalServiceJsonLd locale={locale} />
        <PersonJsonLd locale={locale} />
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={["default"]}
        >
          <Navbar />
          {children}
          <Footer locale={locale} />
        </TranslationsProvider>
      </body>
    </html>
  );
}
