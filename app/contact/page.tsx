import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for freelance work, collaborations, or full-time roles.`,
};

export default function ContactPage() {
  return (
    <section className="section-space">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project, role, or idea in mind?"
          description="Reach out directly through email, phone, LinkedIn, or GitHub for opportunities, collaborations, and project discussions."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="surface p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Direct contact</p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block text-base text-white transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a
                    href="tel:+917046833865"
                    className="mt-1 inline-block text-base text-white transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 text-base text-white">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="surface p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Social links</p>
              <div className="mt-6 grid gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-500">Open</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="surface relative overflow-hidden p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative space-y-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Best way to reach me
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
                  Let&apos;s connect directly.
                </h2>
                <p className="max-w-xl text-base leading-7 text-slate-300">
                  I&apos;m open to internships, full-time roles, freelance projects, and
                  product collaborations. If you have something interesting in mind, send a
                  message and I&apos;ll get back to you.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-2 text-base font-medium text-white">{siteConfig.email}</p>
                </a>
                <a
                  href="tel:+917046833865"
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-2 text-base font-medium text-white">{siteConfig.phone}</p>
                </a>
              </div>

              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Availability</p>
                <p className="mt-2 text-base leading-7 text-slate-300">
                  Available for mobile development roles, React Native projects, iOS
                  development opportunities, and full stack product work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
