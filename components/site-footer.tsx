import { contactLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-display text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Built for clarity, speed, and easy customization. Replace the placeholder
            content with your work and deploy when you are ready.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
