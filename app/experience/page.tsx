import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExperienceList } from "@/components/experience-list";
import { SectionHeading } from "@/components/section-heading";
import { experience, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Explore ${siteConfig.name}'s internships, mobile development experience, and product-focused engineering work.`,
};

export default function ExperiencePage() {
  return (
    <section className="page-hero">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on work across enterprise training, iOS development, and mobile product delivery."
          description="A focused timeline of roles where I have built mobile applications, collaborated with teams, and shipped practical product work."
        />
        <ExperienceList items={experience} />
      </Container>
    </section>
  );
}
