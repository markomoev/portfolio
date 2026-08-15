import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://markomoev.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "en" ? "Privacy policy" : "Политика за поверителност";
  const description =
    locale === "en"
      ? "How Marko Moev collects and uses personal data from the contact form."
      : "Как Марко Моев събира и използва лични данни от контактната форма.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/poveritelnost`,
      languages: {
        bg: `${SITE_URL}/bg/poveritelnost`,
        en: `${SITE_URL}/en/poveritelnost`,
        "x-default": `${SITE_URL}/bg/poveritelnost`,
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <main className="w-full px-4 sm:px-10 lg:px-20 py-28 md:py-32">
      {/*
        This privacy policy is a template, not legal advice.
        Review the text before publishing.
      */}
      <article className="max-w-[68ch] mx-auto">
        <h1 className="font-display font-bold tracking-[-0.02em] text-ink text-[clamp(28px,5vw,52px)]">
          {isEn ? "Privacy policy" : "Политика за поверителност"}
        </h1>
        <p className="mt-6 font-body text-16 text-ink leading-relaxed">
          {isEn
            ? "This text is a template and must be reviewed before it is published."
            : "Този текст е шаблон и трябва да бъде прегледан преди публикуване."}
        </p>

        <h2 className="mt-10 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
          {isEn ? "Data controller" : "Администратор на данните"}
        </h2>
        <p className="mt-3 font-body text-16 text-ink leading-relaxed">
          {isEn ? "Name: Marko Moev" : "Име: Марко Моев"}
          <br />
          {isEn ? "Email: " : "Имейл: "}
          <a className="text-accent underline-offset-2 hover:underline" href="mailto:marko.moev.business@gmail.com">
            marko.moev.business@gmail.com
          </a>
        </p>

        <h2 className="mt-10 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
          {isEn ? "What data is collected" : "Какви данни се събират"}
        </h2>
        <p className="mt-3 font-body text-16 text-ink leading-relaxed">
          {isEn
            ? "Through the contact form: name, email, phone (optional), business type, approximate budget, and message."
            : "През контактната форма: име, имейл, телефон (по избор), тип бизнес, приблизителен бюджет и съобщение."}
        </p>

        <h2 className="mt-10 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
          {isEn ? "Purpose" : "Цел"}
        </h2>
        <p className="mt-3 font-body text-16 text-ink leading-relaxed">
          {isEn
            ? "The data is used only to reply to your enquiry and, if we work together, to prepare an offer."
            : "Данните се използват само за отговор на запитването и, ако работим заедно, за подготовка на оферта."}
        </p>

        <h2 className="mt-10 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
          {isEn ? "Retention" : "Срок на съхранение"}
        </h2>
        <p className="mt-3 font-body text-16 text-ink leading-relaxed">
          {isEn
            ? "Messages are kept for up to 24 months after the last correspondence, unless a longer period is required by law."
            : "Съобщенията се пазят до 24 месеца след последната кореспонденция, освен ако законът не изисква по-дълъг срок."}
        </p>

        <h2 className="mt-10 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
          {isEn ? "Your rights under GDPR" : "Права по GDPR"}
        </h2>
        <p className="mt-3 font-body text-16 text-ink leading-relaxed">
          {isEn
            ? "You can request access, correction, deletion, restriction of processing, and data portability. You can also object to processing and lodge a complaint with the Commission for Personal Data Protection (cpdp.bg)."
            : "Можеш да поискаш достъп, коригиране, изтриване, ограничаване на обработването и преносимост на данните. Можеш също да възразиш срещу обработването и да подадеш жалба до Комисията за защита на личните данни (cpdp.bg)."}
        </p>

        <h2 className="mt-10 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
          {isEn ? "How to exercise your rights" : "Как се упражняват правата"}
        </h2>
        <p className="mt-3 font-body text-16 text-ink leading-relaxed">
          {isEn
            ? "Write to marko.moev.business@gmail.com. I will respond within 30 days."
            : "Пиши на marko.moev.business@gmail.com. Ще отговоря в срок до 30 дни."}
        </p>

        <p className="mt-10 font-body text-16">
          <Link href={`/${locale}/kontakt`} className="text-accent underline-offset-2 hover:underline">
            {isEn ? "Back to contact" : "Към контакт"}
          </Link>
        </p>
      </article>
    </main>
  );
}
