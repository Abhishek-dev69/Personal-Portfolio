import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
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
          description="This page includes a polished contact form UI and direct links for email and social profiles."
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

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
