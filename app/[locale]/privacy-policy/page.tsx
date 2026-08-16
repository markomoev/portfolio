import type { Metadata } from "next";
import Link from "next/link";
import { PUBLIC_EMAIL } from "@/lib/public-contact";

const SITE_URL = "https://markomoev.com";
const PATH = "privacy-policy";

const copyByLocale = {
  bg: {
    title: "Политика за поверителност",
    description: "Какви данни събирам през контактната форма, защо и как можеш да ги поискаш или изтриеш.",
    lead: "Кратък текст за формата на сайта. Без бюлетин, без продаване на данни — само за да ти отговоря.",
    controller: "Администратор",
    controllerBody: "Марко Моев. Пиши ми на",
    collected: "Какво събирам",
    collectedLead: "Само това, което попълваш в контактната форма:",
    collectedItems: [
      "Име",
      "Имейл",
      "Телефон — по избор",
      "Тип бизнес",
      "Приблизителен бюджет",
      "Съобщение",
    ],
    purpose: "Защо",
    purposeBody:
      "За да ти върна отговор. Ако започнем работа, също за да подготвя оферта. Не продавам данните и не ги давам на трети страни, освен ако законът не го изисква.",
    retention: "Колко ги пазя",
    retentionBody:
      "До 24 месеца след последното съобщение между нас, освен ако законът не иска по-дълъг срок.",
    rights: "Твоите права",
    rightsLead: "По GDPR можеш да поискаш:",
    rightsItems: [
      "Достъп до данните",
      "Коригиране",
      "Изтриване",
      "Ограничаване на обработването",
      "Преносимост",
      "Възражение срещу обработването",
    ],
    complaint: "Жалба можеш да подадеш и до Комисията за защита на личните данни —",
    how: "Как се упражняват",
    howBody: "Пиши ми. Отговарям до 30 дни.",
    cta: "Към контакти",
  },
  en: {
    title: "Privacy policy",
    description: "What I collect through the contact form, why, and how you can ask for it or have it deleted.",
    lead: "A short note about the form on this site. No newsletter, no selling your data — I only use it to reply.",
    controller: "Who is responsible",
    controllerBody: "Marko Moev. Write to",
    collected: "What I collect",
    collectedLead: "Only what you type in the contact form:",
    collectedItems: [
      "Name",
      "Email",
      "Phone — optional",
      "Business type",
      "Approximate budget",
      "Message",
    ],
    purpose: "Why",
    purposeBody:
      "To reply. If we start working together, also to prepare an offer. I do not sell this data or hand it to third parties unless the law requires it.",
    retention: "How long I keep it",
    retentionBody:
      "Up to 24 months after our last message, unless the law requires a longer period.",
    rights: "Your rights",
    rightsLead: "Under GDPR you can ask for:",
    rightsItems: [
      "Access to your data",
      "Correction",
      "Deletion",
      "Restriction of processing",
      "Portability",
      "To object to processing",
    ],
    complaint: "You can also lodge a complaint with the Commission for Personal Data Protection —",
    how: "How to ask",
    howBody: "Email me. I reply within 30 days.",
    cta: "Go to contact",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = locale === "en" ? copyByLocale.en : copyByLocale.bg;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/${PATH}`,
      languages: {
        bg: `${SITE_URL}/bg/${PATH}`,
        en: `${SITE_URL}/en/${PATH}`,
        "x-default": `${SITE_URL}/bg/${PATH}`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${SITE_URL}/${locale}/${PATH}`,
    },
  };
}

function DiamondList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 mb-0 grid list-none gap-2.5 p-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-vinyl/80">
          <span aria-hidden="true" className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-sticker" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = locale === "en" ? copyByLocale.en : copyByLocale.bg;

  return (
    <main className="bg-paper px-[clamp(16px,3vw,36px)] pt-[clamp(120px,15vw,168px)] pb-[clamp(64px,9vw,112px)]">
      <article className="mx-auto max-w-[720px]">
        <h1 className="font-vinyl m-0 max-w-[12ch] text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-[-0.02em] text-vinyl">
          {copy.title}
        </h1>
        <p className="mt-5 mb-0 max-w-[46ch] text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-vinyl/80">
          {copy.lead}
        </p>

        <section className="mt-12 border-t border-vinyl/25 pt-6">
          <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
            {copy.controller}
          </h2>
          <p className="mt-3 mb-0 text-[15px] leading-[1.7] text-vinyl/80">
            {copy.controllerBody}{" "}
            <a
              href={`mailto:${PUBLIC_EMAIL}`}
              className="font-extrabold text-vinyl underline decoration-decal decoration-2 underline-offset-4 hover:text-decal"
            >
              {PUBLIC_EMAIL}
            </a>
            .
          </p>
        </section>

        <section className="mt-10 border-t border-vinyl/25 pt-6">
          <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
            {copy.collected}
          </h2>
          <p className="mt-3 mb-0 text-[15px] leading-[1.7] text-vinyl/80">{copy.collectedLead}</p>
          <DiamondList items={copy.collectedItems} />
        </section>

        <section className="mt-10 border-t border-vinyl/25 pt-6">
          <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
            {copy.purpose}
          </h2>
          <p className="mt-3 mb-0 text-[15px] leading-[1.7] text-vinyl/80">{copy.purposeBody}</p>
        </section>

        <section className="mt-10 border-t border-vinyl/25 pt-6">
          <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
            {copy.retention}
          </h2>
          <p className="mt-3 mb-0 text-[15px] leading-[1.7] text-vinyl/80">{copy.retentionBody}</p>
        </section>

        <section className="mt-10 border-t border-vinyl/25 pt-6">
          <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
            {copy.rights}
          </h2>
          <p className="mt-3 mb-0 text-[15px] leading-[1.7] text-vinyl/80">{copy.rightsLead}</p>
          <DiamondList items={copy.rightsItems} />
          <p className="mt-5 mb-0 text-[15px] leading-[1.7] text-vinyl/80">
            {copy.complaint}{" "}
            <a
              href="https://www.cpdp.bg/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-vinyl underline decoration-decal decoration-2 underline-offset-4 hover:text-decal"
            >
              cpdp.bg
            </a>
            .
          </p>
        </section>

        <section className="mt-10 border-t border-vinyl/25 pt-6">
          <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
            {copy.how}
          </h2>
          <p className="mt-3 mb-0 text-[15px] leading-[1.7] text-vinyl/80">
            {copy.howBody}{" "}
            <a
              href={`mailto:${PUBLIC_EMAIL}`}
              className="font-extrabold text-vinyl underline decoration-decal decoration-2 underline-offset-4 hover:text-decal"
            >
              {PUBLIC_EMAIL}
            </a>
            .
          </p>
        </section>

        <p className="mt-12 mb-0">
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center bg-vinyl px-6 py-[15px] text-[13px] font-extrabold tracking-[0.04em] text-white uppercase transition-transform hover:-translate-y-0.5"
          >
            {copy.cta}
          </Link>
        </p>
      </article>
    </main>
  );
}
