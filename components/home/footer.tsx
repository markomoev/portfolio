import Link from "next/link";
import { Facebook, Github, Instagram, Mail, Phone } from "lucide-react";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  PUBLIC_EMAIL,
  PUBLIC_PHONE_E164,
  VIBER_URL,
} from "@/lib/public-contact";

const copyByLocale = {
  bg: {
    tagline: "Сайтове за местен бизнес. София, България — и за клиенти на английски.",
    pages: "Страници",
    contact: "Контакт",
    services: "Услуги",
    work: "Проекти",
    about: "За мен",
    faq: "Въпроси",
    privacy: "Политика за поверителност",
    rights: "© 2026 Marko Moev",
    email: "Имейл",
    phone: "Телефон",
    viber: "Viber",
    instagram: "Instagram",
    facebook: "Facebook",
    github: "GitHub",
  },
  en: {
    tagline: "Websites for local business. Sofia, Bulgaria — and for clients in English.",
    pages: "Pages",
    contact: "Contact",
    services: "Services",
    work: "Work",
    about: "About",
    faq: "FAQ",
    privacy: "Privacy policy",
    rights: "© 2026 Marko Moev",
    email: "Email",
    phone: "Phone",
    viber: "Viber",
    instagram: "Instagram",
    facebook: "Facebook",
    github: "GitHub",
  },
} as const;

function ViberIcon({ size = 18 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 3.5h11A4.5 4.5 0 0 1 22 8v6.2A5.8 5.8 0 0 1 16.2 20H12l-4.5 2.4V20A5.8 5.8 0 0 1 2 14.2V8a4.5 4.5 0 0 1 4.5-4.5Z" />
      <path d="M8.5 9.2c2.4-1 4.6-1 7 0" />
      <path d="M9.2 12.4c1.8-.6 3.8-.6 5.6 0" />
    </svg>
  );
}

const iconBtn =
  "inline-flex h-11 w-11 items-center justify-center text-white/82 transition-colors hover:text-white";

export default function Footer({ locale }: { locale: string }) {
  const copy = locale === "en" ? copyByLocale.en : copyByLocale.bg;
  const home = `/${locale}`;

  const pages = [
    { href: `${home}#services`, label: copy.services },
    { href: `${home}#work`, label: copy.work },
    { href: `${home}#about`, label: copy.about },
    { href: `${home}#faq`, label: copy.faq },
  ];

  const contacts = [
    { href: `mailto:${PUBLIC_EMAIL}`, label: copy.email, icon: Mail, external: false },
    { href: `tel:${PUBLIC_PHONE_E164}`, label: copy.phone, icon: Phone, external: false },
    { href: VIBER_URL, label: copy.viber, icon: ViberIcon, external: false },
    { href: INSTAGRAM_URL, label: copy.instagram, icon: Instagram, external: true },
    { href: FACEBOOK_URL, label: copy.facebook, icon: Facebook, external: true },
    { href: GITHUB_URL, label: copy.github, icon: Github, external: true },
  ];

  return (
    <footer className="bg-vinyl px-[clamp(16px,3vw,36px)] pt-[clamp(48px,7vw,72px)] pb-10 text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-8 min-[700px]:grid-cols-3">
        <div>
          <p className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-none tracking-[-0.02em] text-white">
            Marko Moev
          </p>
          <p className="mt-3 mb-0 max-w-[30ch] text-[15px] leading-relaxed text-white/70">{copy.tagline}</p>
        </div>
        <div>
          <p className="m-0 text-[13px] font-extrabold tracking-[0.08em] text-white/55 uppercase">{copy.pages}</p>
          <ul className="mt-3.5 mb-0 grid list-none gap-2 p-0">
            {pages.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[15px] text-white/82 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="m-0 text-[13px] font-extrabold tracking-[0.08em] text-white/55 uppercase">{copy.contact}</p>
          <ul className="mt-3.5 mb-0 flex list-none flex-wrap gap-2 p-0">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={iconBtn}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1280px] border-t border-white/15 pt-5 text-[13px] tracking-[0.04em] text-white/50">
        {copy.rights} ·{" "}
        <Link href={`${home}/privacy-policy`} className="text-white/50 hover:text-white">
          {copy.privacy}
        </Link>
      </p>
    </footer>
  );
}
