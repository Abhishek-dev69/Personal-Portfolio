import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container>
        <div className="surface flex flex-col items-start gap-6 p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">404</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            This page could not be found.
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            The route may have moved or does not exist yet. Head back home and continue
            exploring the portfolio.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#7bf0da] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
