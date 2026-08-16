import initTranslations from "../i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import Hero_01 from "@/components/home/hero_01";
import Marquee from "@/components/home/marquee";
import Services from "@/components/home/services";
import Stats from "@/components/home/stats";
import Work from "@/components/home/work";
import Reviews from "@/components/home/reviews";
import About from "@/components/home/about";
import Process from "@/components/home/process";
import FAQ from "@/components/home/faq";
import Contact from "@/components/home/contact";
import { FaqJsonLd } from "@/components/seo/json-ld";

const i18nNamespaces = [
  "default",
  "services",
  "projects",
  "about",
  "process",
  "promises",
  "reviews",
  "faq",
  "contact",
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <FaqJsonLd locale={locale} />
      <main className="relative w-full overflow-x-clip">
        <Hero_01 />
        <Marquee />
        <Services />
        <Stats />
        <Work />
        <Reviews />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
    </TranslationsProvider>
  );
}
