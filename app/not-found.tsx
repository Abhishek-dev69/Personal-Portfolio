import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container>
        <div className="surface flex flex-col items-start gap-6 p-8 sm:p-12">
          <p className="eyebrow">404</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            This page could not be found.
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted">
            The route may have moved or does not exist yet. Head back home and continue
            exploring the portfolio.
          </p>
          <Link
            href="/"
            className="button-primary inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
