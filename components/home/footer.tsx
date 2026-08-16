import Link from "next/link";
import { Github, Send } from "lucide-react";

const PUBLIC_EMAIL = "marko.moev.business@gmail.com";
const GITHUB_URL = "https://github.com/markomoev";

const copyByLocale = {
  bg: {
    tagline:
      "Уебсайтове, дизайн и малки системи за Вашия бизнес. Базиран в България, работя с клиенти навсякъде.",
    sections: "Секции",
    elsewhere: "Другаде",
    services: "Услуги",
    work: "Проекти",
    about: "За мен",
    process: "Процес",
    faq: "Въпроси",
    projects: "Всички проекти",
    contact: "Контакт",
    privacy: "Поверителност",
    cta: "Да работим заедно",
    rights: "© 2026 Marko Moev · България",
    available: "Свободен за проекти",
    github: "GitHub",
    email: "Имейл",
  },
  en: {
    tagline:
      "Websites, design and small systems for your business. Based in Bulgaria, working with clients anywhere.",
    sections: "Sections",
    elsewhere: "Elsewhere",
    services: "Services",
    work: "Work",
    about: "About",
    process: "Process",
    faq: "FAQ",
    projects: "All projects",
    contact: "Contact",
    privacy: "Privacy policy",
    cta: "Let's work together",
    rights: "© 2026 Marko Moev · Bulgaria",
    available: "Available for freelance projects",
    github: "GitHub",
    email: "Email",
  },
} as const;

export default function Footer({ locale }: { locale: string }) {
  const copy = locale === "en" ? copyByLocale.en : copyByLocale.bg;
  const home = `/${locale}`;

  const anchors = [
    { href: `${home}#services`, label: copy.services },
    { href: `${home}#work`, label: copy.work },
    { href: `${home}#about`, label: copy.about },
    { href: `${home}#process`, label: copy.process },
    { href: `${home}#faq`, label: copy.faq },
  ];

  const pages = [
    { href: `${home}/proekti`, label: copy.projects },
    { href: `${home}/kontakt`, label: copy.contact },
    { href: `${home}/poveritelnost`, label: copy.privacy },
  ];

  return (
    <footer className="bg-[var(--vinyl)] px-[clamp(16px,3vw,36px)] pb-7 pt-[clamp(40px,5vw,64px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-8 border-b border-white/20 pb-8">
          <div>
            <div className="font-vinyl text-[clamp(22px,2.2vw,30px)] text-white">Marko Moev</div>
            <p className="mb-0 mt-3 max-w-[34ch] text-[15px] leading-relaxed text-white/80">
              {copy.tagline}
            </p>
          </div>

          <nav aria-label={copy.sections} className="flex flex-col gap-2.5">
            <span className="font-hand text-[15px] text-[var(--sticker)]">{copy.sections}</span>
            {anchors.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-white/90 hover:text-[var(--sticker)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label={copy.projects} className="flex flex-col gap-2.5">
            <span className="font-hand text-[15px] text-[var(--sticker)]">
              {locale === "en" ? "Pages" : "Страници"}
            </span>
            {pages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-white/90 hover:text-[var(--sticker)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-hand text-[15px] text-[var(--sticker)]">{copy.elsewhere}</span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.github}
                className="flex h-11 w-11 items-center justify-center border-2 border-white/40 text-white hover:border-[var(--sticker)] hover:text-[var(--sticker)]"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${PUBLIC_EMAIL}`}
                aria-label={copy.email}
                className="flex h-11 w-11 items-center justify-center border-2 border-white/40 text-white hover:border-[var(--sticker)] hover:text-[var(--sticker)]"
              >
                <Send size={18} />
              </a>
            </div>
            <a
              href={`${home}#contact`}
              className="mt-1 inline-flex items-center justify-center bg-[var(--decal)] px-5 py-3.5 text-[15px] font-extrabold uppercase text-white"
            >
              {copy.cta}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-5 text-[13px] font-semibold text-white/70">
          <span>{copy.rights}</span>
          <span>{copy.available}</span>
        </div>
      </div>
    </footer>
  );
}
