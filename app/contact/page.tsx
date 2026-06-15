import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for mobile development, full-stack roles, freelance work, or collaborations.`,
};

export default function ContactPage() {
  return (
    <MotionSection className="page-hero">
      <Container>
        <div className="contact-page-grid">
          <div>
            <SectionHeading
              eyebrow="Let’s work together"
              title="Have a role, product, or difficult workflow worth solving?"
              description="I’m open to mobile development roles, full-stack opportunities, freelance projects, and thoughtful product collaborations."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${siteConfig.email}`}>
                Send an email
                <span aria-hidden="true">↗</span>
              </ButtonLink>
              <ButtonLink href={siteConfig.resumeHref} variant="secondary" download>
                Download resume
              </ButtonLink>
            </div>
          </div>

          <div className="contact-details">
            <div className="contact-primary">
              <p className="eyebrow">Best way to reach me</p>
              <a href={`mailto:${siteConfig.email}`} className="contact-email">
                {siteConfig.email}
              </a>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                Include a little context about the role or project, your timeline, and what
                you would like me to help build.
              </p>
            </div>

            <dl className="contact-meta">
              <div>
                <dt>Phone</dt>
                <dd><a href="tel:+917046833865">{siteConfig.phone}</a></dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>India · Open to remote</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Mobile + full-stack opportunities</dd>
              </div>
            </dl>

            <div className="contact-socials" aria-label="Social links">
              {contactLinks
                .filter((link) => ["GitHub", "LinkedIn"].includes(link.label))
                .map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
