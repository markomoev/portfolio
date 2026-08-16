import faqBg from "@/locales/bg/faq.json";
import faqEn from "@/locales/en/faq.json";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  PUBLIC_EMAIL,
  PUBLIC_PHONE_E164,
} from "@/lib/public-contact";

const SITE_URL = "https://markomoev.com";
const SAME_AS = [GITHUB_URL, INSTAGRAM_URL, FACEBOOK_URL];

type FaqFile = { headline: string; items: { q: string; a: string }[] };

export function ProfessionalServiceJsonLd({ locale }: { locale: string }) {
  const name = "Marko Moev";
  const description =
    locale === "en"
      ? "Websites for your business in Bulgaria — fast, findable on Google, at a fixed price."
      : "Уебсайтове за твоя бизнес в България — бързи, намираеми в Google, с фиксирана цена.";

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    url: `${SITE_URL}/${locale}`,
    email: PUBLIC_EMAIL,
    telephone: PUBLIC_PHONE_E164,
    areaServed: { "@type": "Country", name: "BG" },
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "en" ? "Sofia" : "София",
      addressCountry: "BG",
    },
    sameAs: SAME_AS,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marko Moev",
    url: `${SITE_URL}/${locale}`,
    email: PUBLIC_EMAIL,
    jobTitle: locale === "en" ? "Web developer" : "Уеб разработчик",
    sameAs: SAME_AS,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ locale }: { locale: string }) {
  const faq = (locale === "en" ? faqEn : faqBg) as FaqFile;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
