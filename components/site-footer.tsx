import { contactLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">Abhishek Singh</p>
            <p className="mt-4 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Building mobile and web products that feel considered from the first interaction.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
            {contactLinks.filter((link) => link.label !== "Phone").map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-link"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-border py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p>Designed and built with Next.js, TypeScript, and care.</p>
        </div>
      </Container>
    </footer>
  );
}
