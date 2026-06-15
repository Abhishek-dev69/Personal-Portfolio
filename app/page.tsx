import { AnimatedHeroTitle } from "@/components/animated-hero-title";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ExperienceList } from "@/components/experience-list";
import { FeaturedProjectsMarquee } from "@/components/featured-projects-marquee";
import { Hero3D } from "@/components/hero-3d";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { SkillsGrid } from "@/components/skills-grid";
import {
  experience,
  focusAreas,
  projects,
  siteConfig,
  stats,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <MotionSection id="home" className="hero-section scroll-mt-28">
        <div className="hero-orbits pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
        </div>
        <div className="performance-stripes pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
          <span className="performance-stripe performance-stripe-blue" />
          <span className="performance-stripe performance-stripe-red" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="min-w-0">
              <div className="hero-kicker">
                <span className="status-dot" />
                Open to mobile and full-stack roles
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-muted sm:text-sm">
                {siteConfig.heroLabel}
              </p>
              <div className="mt-5">
                <AnimatedHeroTitle
                  name={siteConfig.name}
                  headline="I turn product ideas into polished apps people can trust."
                />
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {siteConfig.tagline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#projects" className="sm:min-w-[168px]">
                  View projects
                  <span aria-hidden="true">↘</span>
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" className="sm:min-w-[168px]">
                  Contact me
                </ButtonLink>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Based in India
                </span>
                <a className="text-link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="hero-showcase min-w-0">
              <Hero3D />
              <div className="hero-showcase-copy">
                <div>
                  <p className="eyebrow">Product range</p>
                  <p className="mt-2 font-display text-xl font-semibold">
                    iOS · Android · Web
                  </p>
                </div>
                <p className="max-w-xs text-sm leading-6 text-muted">
                  Native mobile craft, cross-platform delivery, and backend-connected web
                  products in one focused portfolio.
                </p>
              </div>
            </div>
          </div>

          <dl className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt className="text-sm leading-6 text-muted">{stat.label}</dt>
                <dd className="order-first font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </MotionSection>

      <MotionSection id="projects" className="section-space scroll-mt-28">
        <Container className="space-y-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Products built for real users, not just portfolio screenshots."
              description="Published mobile apps, live web platforms, and focused engineering projects spanning event technology, fintech, AI, and product tooling."
            />
            <ButtonLink href="/projects" variant="ghost" className="self-start sm:self-auto">
              Explore all work
              <span aria-hidden="true">↗</span>
            </ButtonLink>
          </div>
          <FeaturedProjectsMarquee projects={projects.slice(0, 7)} />
        </Container>
      </MotionSection>

      <MotionSection className="section-space section-tint">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="What I build"
            title="One product mindset across mobile, web, and intelligent workflows."
            description="I choose the platform and architecture around the user problem, then bring the same attention to usability, reliability, and finish."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <article key={area.title} className="capability-card">
                <div className="flex items-start justify-between gap-5">
                  <span className="capability-index">0{index + 1}</span>
                  <span className="capability-arrow" aria-hidden="true">↗</span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{area.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${area.title} tools`}>
                  {area.tools.map((tool) => (
                    <li key={tool} className="tech-chip">{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection id="about" className="section-space scroll-mt-28">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Profile"
              title="A developer who cares about the product after the code compiles."
              description="I work across mobile engineering, frontend systems, and practical backend integrations, with a strong bias toward clarity and shipping quality."
            />
            <p className="mt-7 max-w-xl text-base leading-8 text-muted">
              {siteConfig.about} I care about the details that make software feel credible:
              hierarchy, feedback, accessibility, performance, and reliable execution.
            </p>
            <ButtonLink href="/about" variant="ghost" className="mt-7">
              More about my approach
              <span aria-hidden="true">↗</span>
            </ButtonLink>
          </div>
          <SkillsGrid />
        </Container>
      </MotionSection>

      <MotionSection id="experience" className="section-space section-tint scroll-mt-28">
        <Container className="space-y-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Experience"
              title="Learning in serious environments and applying it to real product work."
              description="Enterprise training, Apple-supported iOS development, and cross-platform application delivery have shaped how I collaborate and build."
            />
            <ButtonLink href="/experience" variant="ghost" className="self-start sm:self-auto">
              Full experience
              <span aria-hidden="true">↗</span>
            </ButtonLink>
          </div>
          <ExperienceList items={experience} compact />
        </Container>
      </MotionSection>

      <MotionSection id="contact" className="section-space scroll-mt-28">
        <Container>
          <div className="contact-cta">
            <div>
              <p className="eyebrow">Have a role or product in mind?</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Let&apos;s turn a good idea into a product people enjoy using.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={`mailto:${siteConfig.email}`} className="whitespace-nowrap">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </ButtonLink>
              <ButtonLink href={siteConfig.resumeHref} variant="secondary" download>
                Download resume
              </ButtonLink>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
