import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Type test",
  robots: { index: false, follow: false },
};

const loclLetters = "б в г д ж з и к л п т ц ш щ";

export default function TypeTestPage() {
  return (
    <main className="min-h-screen bg-paper text-ink px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-16">
        <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
          Type test · locl BGR
        </p>

        <section className="space-y-4">
          <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
            Display · Unbounded 700
          </p>
          <h1 className="font-display text-52 font-bold tracking-[-0.02em]">
            Сайт, който после можеш сам да променяш.
          </h1>
          <p className="font-display text-38 font-semibold tracking-[-0.02em]">
            {loclLetters}
          </p>
        </section>

        <section className="space-y-4">
          <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
            Body · Onest 400 / 500 / 600
          </p>
          <p className="font-body text-18 font-normal max-w-[68ch]">
            Правя сайтове за Вашия бизнес — бързи, намираеми в Google и с панел
            за управление, който работи от телефона ти.
          </p>
          <p className="font-body text-18 font-medium">{loclLetters}</p>
          <p className="font-body text-16 font-semibold">{loclLetters}</p>
        </section>

        <section className="space-y-4">
          <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
            Utility · JetBrains Mono 500
          </p>
          <p className="font-mono text-14 uppercase tracking-[0.08em]">
            Уеб сайтове за Вашия бизнес · България
          </p>
          <p className="font-mono text-16 uppercase tracking-[0.08em]">
            {loclLetters}
          </p>
        </section>
      </div>
    </main>
  );
}
