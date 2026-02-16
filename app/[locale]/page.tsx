import { BackgroundBoxesDemo } from "../../components/ui/background";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import initTranslations from "../i18next";
import TranslationsProvider from "@/components/TranslationProvider";

const i18nNamespaces = ['default'];

export default async function Home({params}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const {t, resources} : any = await initTranslations(locale, i18nNamespaces) 

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <main>
        <BackgroundBoxesDemo>
          <Navbar />
          <Hero/>
        </BackgroundBoxesDemo>
      </main>
    </TranslationsProvider>
  );
}
