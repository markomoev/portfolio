export default function LabPage() {
  return (
    <main className="min-h-screen bg-paper text-ink px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">Lab</p>
        <h1 className="mt-3 font-display text-38 font-bold tracking-[-0.02em]">
          Лични проекти
        </h1>
        <p className="mt-4 font-body text-18 leading-relaxed max-w-[68ch]">
          Странични експерименти. Не са клиентска работа.
        </p>
        <ul className="mt-10 space-y-8">
          <li className="border-t border-edge pt-6">
            <h2 className="font-display text-22 font-semibold">Coinwise</h2>
            <p className="mt-2 font-body text-16 leading-relaxed">
              Уебсайт за следене на разходи и бюджети.
            </p>
            <a className="mt-3 inline-block text-accent" href="https://github.com/markomoev/Coinwise">
              GitHub →
            </a>
          </li>
          <li className="border-t border-edge pt-6">
            <h2 className="font-display text-22 font-semibold">Hustly</h2>
            <p className="mt-2 font-body text-16 leading-relaxed">
              Табло за задачи и странични проекти.
            </p>
            <a className="mt-3 inline-block text-accent" href="https://github.com/markomoev/Hustly">
              GitHub →
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
