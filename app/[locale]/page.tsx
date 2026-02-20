import Navbar from "@/components/navbar";
import Hero_01 from "@/components/hero_01";
import initTranslations from "../i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Hero_02 from "@/components/hero_02";

const i18nNamespaces = ['default', 'skills', 'projects', 'hero_02'];

export default async function Home({params}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const {resources} : any = await initTranslations(locale, i18nNamespaces) 

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <main>
          <Navbar/>
          <Hero_01/>
          <Skills/>
          <Projects/>
          <Hero_02/>
      </main>
    </TranslationsProvider>
  );
}
