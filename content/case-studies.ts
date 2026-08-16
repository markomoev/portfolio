import type { CaseStudy, Localized } from "@/types/case-study";

const fill: Localized = { bg: "[ПОПЪЛНИ]", en: "[ПОПЪЛНИ]" };

const placeholderMedia = (src: string) => ({
  src,
  alt: fill,
  caption: fill,
});

export const caseStudies: CaseStudy[] = [
  {
    slug: "stoykovmed",
    client: {
      name: "Stoykovmed",
      city: "[ПОПЪЛНИ]",
      industry: {
        bg: "Пластична хирургия и естетика",
        en: "Plastic surgery and aesthetics",
      },
      url: "https://drstoykov.net/",
    },
    year: 0,
    duration: fill,
    headline: {
      bg: "Два бизнеса в един сайт — практика и продукти.",
      en: "Two businesses in one site — clinic and products.",
    },
    context: {
      bg: "Практика по пластична хирургия и естетика, плюс отделна продуктова линия (Deflamax). Два различни типа посетител на един домейн: пациент, който търси процедура, и купувач на продукт.",
      en: "A plastic surgery and aesthetics practice, plus a separate product line (Deflamax). Two different visitor types on one domain: a patient looking for a procedure, and a product buyer.",
    },
    problem: fill,
    decisions: [
      {
        what: {
          bg: "Разделих потоците още от началния екран.",
          en: "I split the visitor flows from the first screen.",
        },
        why: {
          bg: "Пациент и купувач търсят различни неща; общ вход обърква и двамата.",
          en: "A patient and a buyer are looking for different things; a shared entry point confuses both.",
        },
      },
      {
        what: {
          bg: "Записване на час онлайн.",
          en: "Online appointment booking.",
        },
        why: {
          bg: "Сваля обажданията и хваща заявките извън работно време.",
          en: "It reduces phone calls and captures requests outside working hours.",
        },
      },
      {
        what: {
          bg: "Магазин за продуктите.",
          en: "A shop for the products.",
        },
        why: fill,
      },
      {
        what: {
          bg: "Сигнали за доверие в медицински контекст — квалификации, реални снимки, ясни цени/условия.",
          en: "Trust signals in a medical context — qualifications, real photos, clear prices/terms.",
        },
        why: {
          bg: "В здравеопазването решението е емоционално и се взема бавно.",
          en: "In healthcare the decision is emotional and taken slowly.",
        },
      },
    ],
    outcome: fill,
    media: [placeholderMedia("/case-studies/placeholder.svg")],
    stack: ["Shopify", "Booking", "E-commerce"],
    testimonial: {
      quote: {
        bg: "Марко изгради сайта на нашата клиника от нулата и резултатът надмина очакванията ми. Изглежда изчистено, зарежда бързо и пациентите ни лесно намират всичко необходимо. Беше професионален и комуникативен през целия процес.",
        en: "Marko built our clinic's website from scratch and the result was beyond what I expected. It's clean, fast, and our patients can easily find everything they need. He was professional and communicative throughout the entire process.",
      },
      author: "Д-р Мартин Стойков",
      role: {
        bg: "Собственик, Stoykovmed",
        en: "Business owner, Stoykovmed",
      },
    },
    featured: true,
  },
  {
    slug: "plenty",
    client: {
      name: "Plenty",
      city: "Ловеч",
      industry: {
        bg: "Магазин за дрехи",
        en: "Clothing store",
      },
      url: "https://www.plenty.bg/",
    },
    year: 0,
    duration: fill,
    headline: {
      bg: "Сайт, който води хора до вратата на магазина.",
      en: "A site that brings people to the store door.",
    },
    context: {
      bg: "Plenty е магазин за дрехи в Ловеч. Бизнесът се случва във физическия магазин — сайтът трябва да води хора до вратата, не да продава онлайн.",
      en: "Plenty is a clothing store in Lovech. The business happens in the physical shop — the site should bring people to the door, not sell online.",
    },
    problem: fill,
    decisions: [
      {
        what: {
          bg: "Една страница, фокусирана върху едно действие: човекът да разбере какво ще намери и къде е магазинът.",
          en: "A single page focused on one action: understand what you will find and where the store is.",
        },
        why: {
          bg: "За физически магазин целта е посещение, не сесия.",
          en: "For a physical store the goal is a visit, not a session.",
        },
      },
      {
        what: {
          bg: "Работно време, локация и карта — най-видимите елементи след първия екран.",
          en: "Opening hours, location and a map — the most visible elements after the first screen.",
        },
        why: {
          bg: "Това са двата въпроса, с които всеки клиент влиза.",
          en: "These are the two questions every visitor arrives with.",
        },
      },
      {
        what: {
          bg: "Секции, които собственикът сменя сам от панел — колекции, снимки, съобщения.",
          en: "Sections the owner updates from a panel — collections, photos, messages.",
        },
        why: {
          bg: "Магазинът се променя всяка седмица; сайт, който изисква разработчик за всяка промяна, замръзва след месец.",
          en: "The store changes every week; a site that needs a developer for every change freezes after a month.",
        },
      },
      {
        what: fill,
        why: fill,
      },
    ],
    outcome: fill,
    media: [placeholderMedia("/case-studies/placeholder.svg")],
    stack: ["Next.js", "Admin panel", "Local SEO"],
    testimonial: {
      quote: {
        bg: "На Plenty му трябваше сайт, който да води хора до магазина, не да продава през телефона. Марко го разбра още на първия разговор. Сега клиентите виждат къде сме, кога сме отворени и какво ще намерят, а снимките и колекциите ги сменям сам. Чисто, ясно и без да му пиша за всяка нова дреха.",
        en: "Plenty needed a site that brings people to the shop, not one that tries to sell from the phone. Marko got that from the first conversation. Customers can now see where we are, when we're open and what they'll find, and I update the photos and collections myself. Clean, clear, and I don't have to message him for every new piece.",
      },
      author: "Момчил Моев",
      role: {
        bg: "Собственик, Plenty",
        en: "Owner, Plenty",
      },
    },
    featured: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
