import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import initTranslations from "../i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

const i18nNamespaces = ['default', 'skills', 'projects'];

export default async function Home({params}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const {resources} : any = await initTranslations(locale, i18nNamespaces) 

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <main>
          <Navbar/>
          <Hero/>
          <Skills/>
          <Projects/>
      </main>
    </TranslationsProvider>
  );
}
