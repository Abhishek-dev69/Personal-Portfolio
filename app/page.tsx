import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ExperienceList } from "@/components/experience-list";
import { FeaturedProjectsMarquee } from "@/components/featured-projects-marquee";
import { RecruiterSignalPanel } from "@/components/recruiter-signal-panel";
import { SectionHeading } from "@/components/section-heading";
import {
  experience,
  focusAreas,
  highlights,
  projects,
  proofPoints,
  siteConfig,
  skills,
  stats,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="section-space relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="reveal-up space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                Open to mobile + full-stack roles
              </div>

              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.24em] lg:whitespace-nowrap">
                  {siteConfig.heroLabel ?? siteConfig.title}
                </p>
                <div className="space-y-4">
                  <h1 className="font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                    {siteConfig.name}
                  </h1>
                  <p className="aurora-text max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                    Store-ready mobile apps. Fast web products. Real-world product thinking.
                  </p>
                  <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    {siteConfig.tagline}
                  </p>
                  <p className="max-w-xl text-base leading-7 text-slate-400">
                    {siteConfig.about}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/projects" className="sm:min-w-[168px]">
                  View projects
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.resumeHref}
                  variant="secondary"
                  download
                  className="sm:min-w-[168px]"
                >
                  Download resume
                </ButtonLink>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="hero-stat-card rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.06] xl:min-h-[168px]"
                  >
                    <p className="font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up">
              <RecruiterSignalPanel proofPoints={proofPoints} />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="What I Build"
            title="A focused mix of mobile apps, full-stack platforms, and intelligent product workflows."
            description="The portfolio is structured around real product capability: shipping store-ready apps, live web products, and backend-connected experiences."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="surface reveal-up relative overflow-hidden p-6 sm:p-7"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative space-y-5">
                  <p className="font-display text-5xl font-semibold text-white/10">
                    0{index + 1}
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                      {area.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-300">{area.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="About"
            title="Building calm, high-performing products across mobile and web."
            description="I blend mobile engineering, frontend polish, backend integration, and product thinking to create experiences that feel useful, credible, and ready to ship."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface p-6 sm:p-8">
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                My work blends product thinking, native mobile development, frontend polish,
                and practical backend architecture. I care about the small details that make
                interfaces feel trustworthy: rhythm, clarity, accessibility, performance, and
                smooth execution.
              </p>
            </div>
            <div className="surface p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Currently</p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Creating mobile apps, live web platforms, and product systems for teams that
                need reliable execution and premium presentation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work with real launches, product depth, and modern UX."
              description="A moving showcase of mobile apps, event-tech platforms, AI features, and live web products."
            />
            <ButtonLink href="/projects" variant="ghost">
              See all projects
            </ButtonLink>
          </div>

          <FeaturedProjectsMarquee projects={projects} />
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Skills"
            title="A stack focused on mobile polish, fast web delivery, and scalable backend-connected products."
            description="From native iOS to React Native and full-stack web, I use the tools that keep products clean, responsive, and maintainable."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                {skill}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Experience"
            title="Experience built through internships, iOS development, and product-focused mobile work."
            description="A timeline of hands-on roles across enterprise training, Apple-supported iOS development, and cross-platform application work."
          />
          <ExperienceList items={experience} />
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="surface relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Contact
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let&apos;s build something thoughtful and well-crafted.
                </h2>
                <p className="text-base leading-7 text-slate-300">
                  I&apos;m open to freelance work, full-time roles, and collaborative product
                  partnerships.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Start a conversation</ButtonLink>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary">
                  Email me
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
