import Navbar from "@/components/home/navbar";
import Hero_01 from "@/components/home/hero_01";
import initTranslations from "../i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Hero_02 from "@/components/home/hero_02";
import Reviews from "@/components/home/reviews";
import Contact from "@/components/home/contact";
import Services from "@/components/home/services";
import Process from "@/components/home/process";
import FAQ from "@/components/home/faq";

const i18nNamespaces = ['default', 'skills', 'projects', 'hero_02', 'reviews', 'services', 'process', 'faq'];

export default async function Home({params}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {resources} : any = await initTranslations(locale, i18nNamespaces) 

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <main>
          <Navbar/>
          <Hero_01/>
          <Services/>
          <Skills/>
          <Projects/>
          <Process/>
          <Hero_02/>
          <Reviews/>
          <FAQ/>
          <Contact/>
      </main>
    </TranslationsProvider>
  );
}
