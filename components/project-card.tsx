import { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/80 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(66,219,191,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.12),transparent_28%)] opacity-60 transition duration-300 group-hover:opacity-90" />
      <div className="relative p-4 sm:p-5">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-300">
              {project.category}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-sm leading-7 text-slate-300">{project.description}</p>
          </div>

          <ul className="flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/8 bg-white/6 px-3 py-1.5 text-xs text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#7bf0da] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {project.liveLabel ?? "Live demo"}
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-400">
                Code project
              </span>
            )}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {project.githubLabel ?? "GitHub"}
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-400">
                {project.githubLabel ?? "Private case study"}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
