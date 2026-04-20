import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExperienceList } from "@/components/experience-list";
import { SectionHeading } from "@/components/section-heading";
import { experience, highlights, siteConfig, skills } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}, their background, skills, and product-focused development approach.`,
};

export default function AboutPage() {
  return (
    <section className="section-space">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="About"
          title="A developer focused on clarity, product quality, and meaningful outcomes."
          description="This page is designed to be easy to customize later. Replace the placeholder copy with your own story, skills, and achievements."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface p-6 sm:p-8">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-semibold text-white">Introduction</h2>
              <p className="text-base leading-8 text-slate-300">
                {siteConfig.about} I enjoy translating complex ideas into intuitive
                experiences, building reliable systems, and creating interfaces that feel
                both polished and effortless to use.
              </p>
              <p className="text-base leading-8 text-slate-300">
                My workflow usually starts with understanding the product goals and user
                expectations, then shaping an implementation that stays fast, accessible, and
                maintainable. I care about the craft of software, from naming and structure
                to thoughtful interaction design.
              </p>
            </div>
          </div>

          <div className="surface p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">Personal Summary</h2>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Skills"
              title="Tools and capabilities"
              description="A practical mix of frontend, backend, product, and design strengths."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Experience"
            title="A timeline of growth through internships, iOS engineering, and product development."
            description="Current experience highlights across enterprise training, iOS development, and cross-platform app work."
          />
          <ExperienceList items={experience} />
        </div>
      </Container>
    </section>
  );
}
