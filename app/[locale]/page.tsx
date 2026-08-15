import Hero_01 from "@/components/home/hero_01";
import initTranslations from "../i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import Problem from "@/components/home/problem";
import FeaturedProjects from "@/components/home/featured-projects";
import Contact from "@/components/home/contact";
import Services from "@/components/home/services";
import Process from "@/components/home/process";
import Promises from "@/components/home/promises";
import Reviews from "@/components/home/reviews";
import FAQ from "@/components/home/faq";
import { FaqJsonLd } from "@/components/seo/json-ld";

const i18nNamespaces = ['default', 'problem', 'projects', 'promises', 'reviews', 'services', 'process', 'faq', 'contact'];

export default async function Home({params}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {resources} : any = await initTranslations(locale, i18nNamespaces) 

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <FaqJsonLd locale={locale} />
      <main>
          <Hero_01/>
          <Problem/>
          <FeaturedProjects locale={locale} />
          <Services/>
          <Process/>
          <Promises/>
          <Reviews/>
          <FAQ/>
          <Contact/>
      </main>
    </TranslationsProvider>
  );
}
