import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ExperienceList } from "@/components/experience-list";
import { FeaturedProjectsMarquee } from "@/components/featured-projects-marquee";
import { SectionHeading } from "@/components/section-heading";
import { experience, highlights, projects, siteConfig, skills, stats } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="section-space pt-10 sm:pt-14 lg:pt-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                Available for select projects
              </div>

              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  {siteConfig.title}
                </p>
                <div className="space-y-4">
                  <h1 className="font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                    {siteConfig.name}
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
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
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 xl:min-h-[184px]"
                  >
                    <p className="font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface relative overflow-hidden p-6 sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative space-y-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Profile snapshot
                  </p>
                  <div className="mt-5 space-y-4">
                    {highlights.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {skills.slice(0, 6).map((skill) => (
                    <div
                      key={skill}
                      className="rounded-[1.25rem] border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="About"
            title="Building calm, high-performing digital products."
            description="I partner with teams to shape product direction, design clean user experiences, and ship scalable web apps with attention to detail."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface p-6 sm:p-8">
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                My work blends product thinking, frontend polish, and practical backend
                architecture. I care about the small details that make interfaces feel
                trustworthy: rhythm, clarity, accessibility, and speed.
              </p>
            </div>
            <div className="surface p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Currently</p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Creating premium digital experiences for ambitious founders, startups, and
                product teams.
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
              title="Selected work with modern UX and real product thinking."
              description="A few recent concepts showing product depth, thoughtful interfaces, and maintainable engineering."
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
            title="A stack focused on speed, maintainability, and great user experience."
            description="From product strategy to implementation, I enjoy building thoughtful systems that scale without getting messy."
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
