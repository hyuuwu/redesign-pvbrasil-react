import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-grow items-center justify-center px-margin-mobile pb-20 pt-32 md:px-margin-desktop">
      <section className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-outline-variant bg-surface-dark px-6 py-16 text-center shadow-[0_4px_30px_rgba(0,0,0,0.35)] md:px-12 md:py-20">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-cyan/15 blur-[70px]" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-electric-cyan">
            Erro 404
          </span>
          <h1 className="mt-5 font-headline-xl text-4xl text-on-surface md:text-headline-xl">
            Página não encontrada
          </h1>
          <p className="mt-5 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            O endereço acessado não existe ou pode ter sido alterado. Use o botão abaixo para voltar ao início.
          </p>

          <Link
            to="/"
            className="mt-9 inline-flex items-center gap-2 rounded-DEFAULT bg-electric-cyan px-7 py-3.5 font-button text-button uppercase text-deep-navy transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,216,255,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-cyan"
          >
            <span
              className="material-symbols-outlined text-xl"
              aria-hidden="true"
            >
              home
            </span>
            Voltar ao início
          </Link>
        </div>
      </section>
    </main>
  );
}
