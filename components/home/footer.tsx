import Link from "next/link";

export default function Footer({ locale }: { locale: string }) {
  const copy =
    locale === "en"
      ? {
          privacy: "Privacy policy",
          contact: "Contact",
          projects: "Projects",
          eik: "[ПОПЪЛНИ: ЕИК]",
        }
      : {
          privacy: "Поверителност",
          contact: "Контакт",
          projects: "Проекти",
          eik: "[ПОПЪЛНИ: ЕИК]",
        };

  return (
    <footer className="border-t border-edge mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-14 text-muted">
          Марко Моев · {copy.eik}
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-body text-14">
          <Link href={`/${locale}/proekti`} className="text-ink hover:text-accent">
            {copy.projects}
          </Link>
          <Link href={`/${locale}/kontakt`} className="text-ink hover:text-accent">
            {copy.contact}
          </Link>
          <Link href={`/${locale}/poveritelnost`} className="text-ink hover:text-accent">
            {copy.privacy}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
