import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ExperienceList } from "@/components/experience-list";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { SkillsGrid } from "@/components/skills-grid";
import { experience, highlights, siteConfig, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}, his mobile and full-stack development experience, skills, and product approach.`,
};

export default function AboutPage() {
  return (
    <>
      <MotionSection className="page-hero">
        <Container className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <SectionHeading
            eyebrow="About me"
            title="Engineering discipline, product curiosity, and a strong eye for the finish."
            description="I build native and cross-platform mobile apps alongside full-stack web products, connecting thoughtful interfaces to dependable backend workflows."
          />
          <p className="max-w-xl text-base leading-8 text-muted lg:justify-self-end">
            {siteConfig.about} I enjoy the moment when a complex workflow becomes simple,
            understandable, and useful for the person holding the device.
          </p>
        </Container>
      </MotionSection>

      <MotionSection className="section-space pt-0">
        <Container className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="about-story">
            <p className="eyebrow">How I work</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Start with the user journey. Make the architecture support it. Polish the
              moments people notice.
            </h2>
            <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-muted">
              <p>
                My workflow begins by understanding the product goal, the user&apos;s context,
                and what success should feel like. From there, I shape a maintainable
                implementation with clear states, responsive behavior, and accessible
                interactions.
              </p>
              <p>
                I&apos;m especially interested in products where mobile, realtime data, and
                operational workflows meet. That includes event platforms, finance tools,
                dashboards, and AI-assisted experiences.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects">See my work</ButtonLink>
              <ButtonLink href={siteConfig.resumeHref} variant="secondary" download>
                Download resume
              </ButtonLink>
            </div>
          </article>

          <aside className="about-highlights">
            <p className="eyebrow">Working principles</p>
            <div className="mt-6 space-y-5">
              {highlights.map((item, index) => (
                <div key={item} className="highlight-row">
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-7">
              {stats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs leading-5 text-muted">{stat.label}</dt>
                  <dd className="order-first font-display text-2xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </MotionSection>

      <MotionSection className="section-space section-tint">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <SectionHeading
            eyebrow="Skills"
            title="A practical stack organized around shipping."
            description="The tools matter, but how they work together matters more. These are the areas I use to take products from interface to reliable delivery."
          />
          <SkillsGrid />
        </Container>
      </MotionSection>

      <MotionSection className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Experience"
            title="A growing track record across mobile development and product engineering."
            description="Hands-on roles in enterprise training, Apple-supported iOS development, and cross-platform application work."
          />
          <ExperienceList items={experience} />
        </Container>
      </MotionSection>
    </>
  );
}
