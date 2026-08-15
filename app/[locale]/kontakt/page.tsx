import Contact from "@/components/home/contact";
import initTranslations from "../../i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import type { Metadata } from "next";

const SITE_URL = "https://markomoev.com";
const namespaces = ["contact"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "en" ? "Contact" : "Контакт";
  const description =
    locale === "en"
      ? "Book a free consultation. Reply within 24 hours on working days."
      : "Заяви безплатна консултация. Отговор до 24 часа в работни дни.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/kontakt`,
      languages: {
        bg: `${SITE_URL}/bg/kontakt`,
        en: `${SITE_URL}/en/kontakt`,
        "x-default": `${SITE_URL}/bg/kontakt`,
      },
    },
    openGraph: { title, description, url: `${SITE_URL}/${locale}/kontakt` },
  };
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespaces}>
      <main className="pt-16">
        <Contact />
      </main>
    </TranslationsProvider>
  );
}
