import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <div className="text-center max-w-md">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          404
        </p>
        <h1 className="mt-3 text-2xl md:text-3xl font-black text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-sm md:text-base text-slate-600">
          The link you followed doesn&apos;t exist (or it may have moved).
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-bold bg-slate-900 text-white hover:bg-indigo-600 transition-colors"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}

