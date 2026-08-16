import type { CaseStudy, Localized } from "@/types/case-study";

const fill: Localized = { bg: "[ПОПЪЛНИ]", en: "[ПОПЪЛНИ]" };

export const caseStudies: CaseStudy[] = [
  {
    slug: "stoykovmed",
    client: {
      name: "Stoykovmed",
      city: "[ПОПЪЛНИ]",
      industry: {
        bg: "Хранителна добавка",
        en: "Dietary supplement",
      },
      url: "https://drstoykov.net/",
    },
    year: 0,
    duration: fill,
    headline: {
      bg: "Сайт, който продава една добавка.",
      en: "A site that sells one supplement.",
    },
    context: {
      bg: "Сайтът на Stoykovmed продава една хранителна добавка — Deflamax, формулирана от д-р Мартин Стойков. Няма услуги, няма процедури, няма записване на час. Посетителят трябва да разбере какъв е продуктът и да стигне до поръчка.\n\nД-р Стойков е пластичен хирург, но този домейн не е сайт на клиника. Ако първият екран изглежда като болничен портал, хората търсят час, който го няма. Ако изглежда като общ витаминен магазин, губят защо да купят точно тази добавка.",
      en: "The Stoykovmed site sells one supplement — Deflamax, formulated by Dr. Martin Stoykov. There are no services, procedures, or appointment booking. The visitor has to understand the product and reach an order.\n\nDr. Stoykov is a plastic surgeon, but this domain is not a clinic site. If the first screen reads like a hospital portal, people look for an appointment that does not exist. If it reads like a generic vitamin shop, they lose the reason to buy this supplement.",
    },
    problem: {
      bg: "Един продукт, продаван от лекар, има нужда от две неща наведнъж: място за поръчка и причина за доверие. Клинично меню обърква. Празен магазин без глас също. Сайтът трябва да държи Deflamax в центъра и името на лекаря като източник — без да обещава процедури.",
      en: "One product sold by a doctor needs two things at once: a place to order, and a reason to trust. A clinic menu confuses people. An empty shop with no voice does too. The site has to keep Deflamax at the centre and the doctor's name as the source — without promising procedures.",
    },
    decisions: [
      {
        what: {
          bg: "Един продукт от първия екран — Deflamax.",
          en: "One product from the first screen — Deflamax.",
        },
        why: {
          bg: "Единствената оферта е добавката. Меню за клиника би пращало хора да търсят час, който го няма. Цялата страница води към една поръчка.",
          en: "The only offer is the supplement. A clinic menu would send people looking for an appointment that does not exist. The whole page leads to one order.",
        },
      },
      {
        what: {
          bg: "Магазин в Shopify, не записване по телефона.",
          en: "A Shopify shop, not a phone booking.",
        },
        why: {
          bg: "Целта е поръчка. Кошница, доставка и езици са част от продажбата. Сайтът е на български, английски, нидерландски и немски.",
          en: "The goal is an order. Cart, shipping and languages are part of the sale. The site runs in Bulgarian, English, Dutch and German.",
        },
      },
      {
        what: {
          bg: "Доверие през името на лекаря — не през тон на обикновен магазин.",
          en: "Trust through the doctor's name — not a generic shop tone.",
        },
        why: {
          bg: "Хората купуват добавка от лекар, защото вярват на източника. Формулата и съставките имат място на сайта, за да се четат преди поръчка — без да се превръща страницата в клиника.",
          en: "People buy a supplement from a doctor because they trust the source. The formula and ingredients have a place on the site so they can be read before an order — without turning the page into a clinic.",
        },
      },
    ],
    outcome: {
      bg: "Сайтът държи една оферта: Deflamax. Посетителят вижда продукта, разбира от кого е и може да поръча, без да търси час за процедура. Д-р Стойков казва, че хората лесно намират продукта и как да поръчат.",
      en: "The site holds one offer: Deflamax. Visitors see the product, understand who it is from, and can order without looking for an appointment. Dr. Stoykov says people can easily find the product and how to order.",
    },
    facts: [
      {
        label: { bg: "Продукт", en: "Product" },
        value: { bg: "Deflamax", en: "Deflamax" },
      },
      {
        label: { bg: "Езици", en: "Languages" },
        value: { bg: "BG · EN · NL · DE", en: "BG · EN · NL · DE" },
      },
      {
        label: { bg: "Поръчка", en: "Checkout" },
        value: { bg: "Shopify", en: "Shopify" },
      },
    ],
    onSite: [
      {
        bg: "Deflamax още от първия екран, с път към поръчка",
        en: "Deflamax from the first screen, with a path to order",
      },
      {
        bg: "Кошница и доставка — не записване на час",
        en: "A cart and shipping — not appointment booking",
      },
      {
        bg: "Страници за формулата и съставките",
        en: "Pages for the formula and the ingredients",
      },
      {
        bg: "Гласът на д-р Стойков като източник на доверие",
        en: "Dr. Stoykov's voice as the source of trust",
      },
    ],
    media: [
      {
        src: "/work/stoykovmed-site.png",
        alt: {
          bg: "Началният екран на сайта на Stoykovmed с продукта Deflamax",
          en: "Stoykovmed homepage with the Deflamax product",
        },
        caption: {
          bg: "Начален екран — Deflamax.",
          en: "Homepage — Deflamax.",
        },
      },
    ],
    stack: ["Shopify", "E-commerce"],
    testimonial: {
      quote: {
        bg: "Марко изгради сайта за Deflamax от нулата и резултатът надмина очакванията ми. Изглежда изчистено, зарежда бързо и хората лесно намират продукта и как да поръчат. Беше професионален и комуникативен през целия процес.",
        en: "Marko built the Deflamax site from scratch and the result was beyond what I expected. It's clean, fast, and people can easily find the product and how to order. He was professional and communicative throughout the entire process.",
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
      bg: "Plenty е физически магазин за мъжко и дамско облекло в Ловеч, на ул. Търговска 60. Работи с хора на място шест дни в седмицата: понеделник–петък 10:00–18:30, събота 10:00–16:00, неделя затворено.\n\nСайтът няма онлайн магазин и няма да има. Няма кошница, няма профили, няма бутон „купи“. Той е витрина: показва какво има в момента — нова колекция, намаление, конкретна дреха — и казва къде да я пробваш. Успех е някой да влезе в магазина, защото е видял нещо онлайн.",
      en: "Plenty is a physical shop for men's and women's clothing in Lovech, at 60 Targovska Street. It serves people in person six days a week: Monday–Friday 10:00–18:30, Saturday 10:00–16:00, closed on Sunday.\n\nThe site has no online shop and will not have one. No cart, no accounts, no buy button. It is a storefront: it shows what is in the shop now — a new collection, a sale, a specific piece — and says where to try it on. Success is someone walking in because they saw something online.",
    },
    problem: {
      bg: "Магазинът се променя всяка седмица. Сайт, който чака програмист за всяка нова дреха, остарява. Кошница и бутон „купи“ биха вървели срещу бизнеса: продажбата е на адреса, не в телефона. Собственикът не е технически човек — ако обновяването е трудно, витрината замръзва.",
      en: "The shop changes every week. A site that needs a developer for every new piece goes stale. A cart and a buy button would work against the business: the sale happens at the address, not on the phone. The owner is not a technical person — if updating is hard, the window freezes.",
    },
    decisions: [
      {
        what: {
          bg: "Без кошница, без профили, без „купи“.",
          en: "No cart, no accounts, no buy button.",
        },
        why: {
          bg: "Единствената задача е човек да стигне до вратата. Пробваш на място, виждаш как стои, решаваш там. Цени с бутон за покупка само разсейват.",
          en: "The only job is to get someone to the door. You try it on in the shop, see how it sits, and decide there. Prices with a buy button only distract.",
        },
      },
      {
        what: {
          bg: "Какво има сега, кои марки държим, къде сме и кога сме отворени.",
          en: "What is in the shop now, which brands we carry, where we are, and when we are open.",
        },
        why: {
          bg: "Това са въпросите, с които влиза всеки. Адресът, картата и работното време са част от пътя към магазина, не дребен шрифт в края.",
          en: "Those are the questions every visitor arrives with. The address, the map and the hours are part of the path to the shop, not small type at the end.",
        },
      },
      {
        what: {
          bg: "Акцент върху една дреха и съобщение за седмицата.",
          en: "A spotlight on one garment and a notice for the week.",
        },
        why: {
          bg: "Витрината се сменя. Сайтът трябва да каже „само тази седмица“ или да сложи една рокля напред, без да чака програмист.",
          en: "The window changes. The site has to say “this week only” or put one dress forward without waiting for a developer.",
        },
      },
      {
        what: {
          bg: "Админ панел на български — готови шаблони и ограничения, които не чупят сайта.",
          en: "An admin panel in Bulgarian — ready-made templates and limits that keep the site from breaking.",
        },
        why: {
          bg: "Собственикът сменя колекции, намаления, кратки съобщения и акцента върху една дреха сам. Панелът е на български, с граници, за да не се счупи оформлението.",
          en: "The owner updates collections, sales, short notices and the spotlight on one garment himself. The panel is in Bulgarian, with limits so the layout cannot break.",
        },
      },
    ],
    outcome: {
      bg: "Сайтът стои като витрина: какво има в момента, адреса, работното време и снимки на магазина. Собственикът обновява секциите сам. Клиентите виждат къде е Plenty и какво ще намерят, преди да тръгнат към Търговска 60.",
      en: "The site stands as a storefront: what is in the shop now, the address, the hours, and photos of the shop. The owner updates the sections himself. Customers can see where Plenty is and what they will find before they set off for Targovska 60.",
    },
    facts: [
      {
        label: { bg: "Адрес", en: "Address" },
        value: { bg: "Търговска 60, Ловеч", en: "60 Targovska St, Lovech" },
      },
      {
        label: { bg: "Работно време", en: "Hours" },
        value: {
          bg: "Пн–Пт 10:00–18:30 · Сб 10:00–16:00",
          en: "Mon–Fri 10:00–18:30 · Sat 10:00–16:00",
        },
      },
      {
        label: { bg: "Задача", en: "Job" },
        value: { bg: "Посещение, не поръчка", en: "A visit, not an order" },
      },
    ],
    onSite: [
      {
        bg: "Акцент върху една дреха, която може да се смени",
        en: "A spotlight on one garment that can be swapped",
      },
      {
        bg: "Седмично съобщение — нова колекция или намаление",
        en: "A weekly notice — new collection or a sale",
      },
      {
        bg: "Снимки на фасадата, входа и интериора, плюс карта",
        en: "Photos of the facade, entrance and interior, plus a map",
      },
      {
        bg: "Адрес, часове и как се работи: пробваш на място",
        en: "Address, hours, and how it works: you try it on in the shop",
      },
    ],
    media: [
      {
        src: "/work/plenty-site.png",
        alt: {
          bg: "Началният екран на сайта на Plenty — магазин за дрехи в Ловеч",
          en: "Plenty homepage — clothing store in Lovech",
        },
        caption: {
          bg: "Начален екран — витрина към магазина на Търговска 60.",
          en: "Homepage — a storefront for the shop on Targovska 60.",
        },
      },
    ],
    stack: ["Next.js", "Admin panel", "Local SEO"],
    testimonial: {
      quote: {
        bg: "На Plenty му трябваше сайт, който да води хора до магазина, не да продава през телефона. Марко го разбра още на първия разговор. Сега клиентите виждат къде сме, кога сме отворени и какво ще намерят, а снимките и колекциите ги сменям сам. Чисто, ясно и без да му пиша за всяка нова дреха.",
        en: "Plenty needed a site that brings people to the shop, not one that tries to sell from the phone. Marko got that from the first conversation. Customers can now see where we are, when we're open and what they'll find, and I update the photos and collections myself. Clean, clear, and I don't have to message him for every new piece.",
      },
      author: "Момчил",
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
