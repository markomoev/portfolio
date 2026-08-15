# Текущо състояние на репозитория

Дата на инвентаризация: 15.08.2026

Само констатации. Без предложения.

---

## 1. Дърво на `app/` и `components/`

```
app/
├── globals.css                          Глобални стилове, Tailwind v4 @theme, CSS променливи, шрифтове
├── i18next.ts                           Сървърен init на i18next + зареждане на JSON namespace-и по локал
├── icon.svg                             Favicon (Next.js App Router icon)
├── not-found.tsx                        Глобална 404 страница (английски текст)
├── robots.ts                            robots.txt генератор
├── sitemap.ts                           sitemap.xml генератор (един URL)
├── [locale]/
│   ├── layout.tsx                       Root layout за локализираните страници: <html>/<body>, статични meta
│   ├── page.tsx                         Начална страница: композира секциите на home
│   └── not-found.tsx                    404 в locale сегмента (английски текст, дубликат на app/not-found.tsx)
└── api/
    └── contact/
        └── route.ts                     POST handler за контактната форма (nodemailer → Gmail)

components/
├── TranslationProvider.tsx              Client I18nextProvider; инициализира i18n инстанция с подадените resources
└── home/
    ├── navbar.tsx                       Фиксирана навигация, езиков превключвател, мобилно меню
    ├── hero_01.tsx                      Hero секция (заглавие, CTA, badge pills, стрелка за скрол)
    ├── services.tsx                     Три услуги от i18n namespace `services`
    ├── skills.tsx                       Секция „Business mindset“ с 4 карти и портрет
    ├── projects.tsx                     Клиентски проекти + лични проекти (Coinwise, Hustly, Portfolio) в един файл
    ├── process.tsx                      4 стъпки на процеса от i18n namespace `process`
    ├── hero_02.tsx                      Секция „Why Businesses Trust Me“ със снимка и 3 твърдения
    ├── reviews.tsx                      Отзиви от i18n namespace `reviews`
    ├── faq.tsx                          FAQ акордеон от i18n namespace `faq`
    ├── contact.tsx                      Контактна форма: мобилен stepper + десктоп форма
    └── packages.tsx                     Ценови пакети (не се рендерира никъде)
└── ui/
    ├── background-grid.tsx              Декоративна мрежа + радиален градиент за фон
    ├── badge-pills.tsx                  Ред от pill етикети (приема `items: string[]`)
    ├── glass-card.tsx                   Карта с рамка, фон и hover translate
    └── glow-button.tsx                  Бутон primary/secondary със focus ring
```

Няма отделни компонентни файлове за Coinwise, Hustly или Portfolio картите — те са inline в `components/home/projects.tsx`.

Други свързани файлове извън `app/` и `components/` (за контекст на точки 2–5):

- `middleware.ts` — locale routing чрез `next-i18n-router`
- `i18nConfig.ts` — локали и дефолт
- `locales/en/*.json`, `locales/bg/*.json` — преводи
- `hooks/use-audio.ts` — възпроизвеждане на клик звук в навбара
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge)

---

## 2. i18n

**Библиотеки:** `i18next`, `react-i18next`, `i18next-resources-to-backend`, `next-i18n-router`. CLI `i18nexus-cli` се вика в `npm run dev` (`i18nexus pull`).

**Къде живеят преводите:** JSON файлове в `locales/{en,bg}/`.

| Namespace     | Файлове                         | Използва се от                          |
|---------------|---------------------------------|-----------------------------------------|
| `default`     | `locales/{en,bg}/default.json`  | Navbar, Hero_01                         |
| `skills`      | `locales/{en,bg}/skills.json`   | Skills                                  |
| `projects`    | `locales/{en,bg}/projects.json` | Projects                                |
| `hero_02`     | `locales/{en,bg}/hero_02.json`  | Hero_02                                 |
| `reviews`     | `locales/{en,bg}/reviews.json`  | Reviews                                 |
| `services`    | `locales/{en,bg}/services.json` | Services                                |
| `process`     | `locales/{en,bg}/process.json`  | Process                                 |
| `faq`         | `locales/{en,bg}/faq.json`      | FAQ                                     |
| `contact`     | `locales/{en,bg}/contact.json`  | Contact                                 |
| `packages`    | `locales/{en,bg}/packages.json` | Packages (компонентът не е на страницата) |

`app/i18next.ts` зарежда всеки namespace с явен `import()` switch по език и име. `packages` е в loader-а, но не е в `i18nNamespaces` на началната страница.

**Как се определя локалът:**

1. `middleware.ts` вика `i18nRouter(request, i18nConfig)` за всички пътища освен `api`, `static`, файлове с точка и `_next`.
2. URL префикс: `/{locale}/...`. `prefixDefault: true` — и дефолтният локал е с префикс.
3. Cookie `NEXT_LOCALE` се записва от навбара при смяна на език (срок ~60 часа; коментарът казва 30 дни, кодът е `days * 2 * 60 * 60 * 1000`).
4. `app/[locale]/page.tsx` чете `params.locale`, вика `initTranslations(locale, i18nNamespaces)` и подава `locale` + `resources` на `TranslationsProvider`.
5. Client компонентите четат чрез `useTranslation()` / `useTranslation(namespace)`.

**Дефолтен локал:** `'en'` в `i18nConfig.ts`. `fallbackLng` е същият. `locales: ['en', 'bg']`.

**`<html lang>`:** в `app/[locale]/layout.tsx` е `<html>` без атрибут `lang`. Не следва текущия локал.

**Meta / OG:** `export const metadata` в layout е статичен английски обект. Няма `generateMetadata`. Няма `hreflang`. Title съдържа „Portfolio“.

**Превключвател:** в навбара. Заменя `/${currentLocale}` с `/${newLocale}` в текущия pathname и вика `router.refresh()`. При текущата конфигурация (`prefixDefault: true`) клонът за непрефиксиран дефолт не се използва.

---

## 3. Компоненти на началната страница (ред на рендер)

Източник: `app/[locale]/page.tsx`.

1. `Navbar` — `components/home/navbar.tsx`
2. `Hero_01` — `components/home/hero_01.tsx`
3. `Services` — `components/home/services.tsx`
4. `Skills` — `components/home/skills.tsx`
5. `Projects` — `components/home/projects.tsx`
6. `Process` — `components/home/process.tsx`
7. `Hero_02` — `components/home/hero_02.tsx`
8. `Reviews` — `components/home/reviews.tsx`
9. `FAQ` — `components/home/faq.tsx`
10. `Contact` — `components/home/contact.tsx`

Обвивка: `TranslationsProvider`.

`Packages` (`components/home/packages.tsx`) не се импортира и не се рендерира.

Подкомпоненти, използвани от горните:

| Родител   | UI / hooks                                              |
|-----------|---------------------------------------------------------|
| Navbar    | `useAudio`, lucide `Menu`/`X`, motion                   |
| Hero_01   | `BackgroundGrid`, `GlowButton`, `BadgePills`, `Image`   |
| Services  | `GlassCard`                                             |
| Skills    | `Image`, lucide икони                                   |
| Projects  | `GlassCard`, `Image`, lucide                            |
| Process   | `GlassCard`                                             |
| Hero_02   | `Image`                                                 |
| Reviews   | `GlassCard`, lucide `Star`/`Quote`                      |
| FAQ       | `GlassCard`                                             |
| Contact   | `GlowButton`, lucide икони                              |

---

## 4. Стилизиране

**Tailwind:** v4 (`tailwindcss` `^4`, `@tailwindcss/postcss` `^4`). Няма `tailwind.config.js`. PostCSS: само `@tailwindcss/postcss`.

**Токени / CSS променливи:** в `app/globals.css`.

- `@theme inline` мапва shadcn токени към Tailwind цветове (`--color-background`, `--color-primary`, `--color-accent`, `--radius-*` и т.н.).
- `:root` дефинира: `--radius`, `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`, `--destructive`, `--border`, `--input`, `--ring`, `--sidebar-*`, плюс `--accent-a` и `--accent-b` (oklch indigo/violet).
- `.dark` презаписва същите променливи.
- Utility `.text-gradient` използва `--accent-a` / `--accent-b`.

Стойностите са oklch, не hex. Няма `--paper`, `--ink`, `--edge`, `--ok`. Съществуващият `--accent` е неутрален фон (oklch 0.97), не син интерактивен цвят. Компонентите използват предимно Tailwind palette класове (`slate-*`, `indigo-*`), не CSS променливите `--paper` / `--ink`.

**Шрифтове:** Google Fonts чрез CSS `@import` в `globals.css`: Inter (body) и JetBrains Mono (code/pre/kbd/samp). Не се използва `next/font`. Няма Unbounded, Onest, кирилски subset, нито `font-feature-settings: "locl"`.

**Други:** `tw-animate-css`, `shadcn/tailwind.css`. shadcn: style `new-york`, baseColor `neutral`, `cssVariables: true`. Компонентите ползват `cn()` от `lib/utils.ts`.

---

## 5. Контактна форма

**UI:** `components/home/contact.tsx`. Два отделни интерфейса:

- Мобилен (`md:hidden`): 3-стъпков stepper (име → имейл → съобщение). Полетата нямат `<label htmlFor>`. Навигация: „← Back“, „Continue“.
- Десктоп (`hidden md:block`): една форма с име, имейл, съобщение. Има `<label>` свързани с `id`.

Полета: `name`, `email`, `message`. Няма телефон, тип бизнес, бюджет, чекбокс за поверителност, honeypot.

**Къде отива заявката:** `POST /api/contact` (`fetch` от клиента). Handler: `app/api/contact/route.ts`.

- Транспорт: `nodemailer`, `service: "gmail"`.
- Credentials: `process.env.GMAIL_USER`, `process.env.GMAIL_APP_PASSWORD`.
- Получател: `marko.moev.business@gmail.com`.
- From: `"Portfolio Contact" <${user}>`.
- `replyTo`: имейлът на подателя.
- Тяло: HTML с name, email, message (интерполирани директно, без escape).

`@emailjs/browser` и `resend` са в `package.json`; не се използват в route-а.

**Валидация:**

- Клиент, мобилен: `name.trim().length > 0`; `email.trim().length > 0 && email.includes("@")`; `message.trim().length > 0`.
- Клиент, десктоп: HTML `required` на трите полета; email `type="email"`.
- Сървър: ако липсва `name`, `email` или `message` → 400 `"All fields are required."`. Няма проверка на формат, няма zod.

**Защита от спам:** няма honeypot, няма rate limit, няма CAPTCHA.

Публичният имейл `marko.moev.business@gmail.com` е и в навбара (мобилно меню), и в контактната секция (mailto fallback).

---

## 6. Компоненти с hardcoded (непреведен) текст

Текст, който не минава през `t()`, или е fallback/defaultValue на английски.

### `app/[locale]/layout.tsx`
- `title`: `"Marko Moev | Portfolio"`
- `description`, OG и Twitter текстове — английски
- `keywords` — английски масив
- `siteName`: `"Marko Moev"`

### `components/home/navbar.tsx`
- `"Language"`
- `"Switch to Bulgarian"` / `"Switch to English"`
- `"Get in touch"`
- `"Menu"` (`aria-label`, `aria-label` на dialog)
- `"marko.moev.business@gmail.com"`
- Лого букви: `"M"`, `"arko"`, `"oev"`
- `"BG"` / `"EN"`

### `components/home/hero_01.tsx`
- `"Marko Moev — Websites for local businesses, creators & startups"`
- Badge pills: `"Fast"`, `"SEO-ready"`, `"Mobile-first"`, `"Accessible"`, `"Modern UI"`
- `alt="Scroll down arrow"`

### `components/home/hero_02.tsx`
- `alt="Why businesses trust me"`
- `"100%"`

### `components/home/skills.tsx`
- `alt="Marko Moev"`

### `components/home/projects.tsx`
- `"View live"` (Stoykovmed и Plenty)
- `"PLENTY"`
- `"Coinwise"`, `"Hustly"`, `"Marko Moev | Portfolio"`
- `"Snapshot"`
- Coinwise snapshot: `"Problem → messy personal finance tracking"`, `"Solution → budgets + insights UI"`, `"Result → clearer decisions (demo)"`
- Hustly snapshot: `"Problem → scattered tasks and projects"`, `"Solution → clean dashboard flow"`, `"Result → faster planning (demo)"`
- Portfolio snapshot: `"Problem → show skills + trust fast"`, `"Solution → tech-forward landing layout"`, `"Result → clear services + CTA"`
- Tech tags: `"React"`, `"Supabase"`, `"Next.js"`, `"Tailwind"`
- `alt="Stoykovmed logo"`, `alt="Coinwise logo"`
- `title="View Code"`, `title="Live Demo"`
- Линк към Vercel preview на същото портфолио (премахнат в Prompt 3)

### `components/home/process.tsx`
- `"Step {n}"` (`Step 1` … `Step 4`)

### `components/home/reviews.tsx`
- `defaultValue: 'What Clients Say'`
- `defaultValue: "Feedback from people I've had the pleasure of working with."`

### `components/home/contact.tsx`
- `"← Back"`
- `"Continue"`
- `"marko.moev.business@gmail.com"`

### `components/home/packages.tsx`
- `"Popular"`

### `app/not-found.tsx` и `app/[locale]/not-found.tsx`
- `"404"`
- `"Page not found"`
- `"The link you followed doesn't exist (or it may have moved)."`
- `"Go home"`

`BadgePills`, `GlowButton`, `GlassCard`, `BackgroundGrid`, `TranslationProvider` нямат собствен user-facing copy (BadgePills показва подадените `items`).

---

## 7. Изображения в `public/`

| Файл | Размер | Размери (px) |
|------|--------|----------------|
| `public/photos/portrait.JPG` | 686 KB (702 628 B) | 2880 × 1920 |
| `public/photos/wide.JPG` | 649 KB (664 187 B) | 2877 × 1829 |
| `public/logos/coinwise.png` | 1.4 MB (1 504 154 B) | 1024 × 1024 |
| `public/logos/stoykovmed.png` | 47 KB (48 477 B) | 437 × 123 |
| `public/icons/arrow-down.svg` | 258 B | вектор |

Други файлове в `public/` (не изображения): `public/sounds/click-navbar.mp3` — 33 KB (33 792 B).

`app/icon.svg` е извън `public/` — 411 B.

`portrait.JPG` се ползва в Skills с `next/image`, `fill`, `sizes="(max-width: 1024px) 100vw, 50vw"`. Изходният файл е 2880 px ширина.
