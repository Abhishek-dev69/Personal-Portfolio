import { Project } from "@/data/site";
import { ProjectCard } from "@/components/project-card";

type FeaturedProjectsMarqueeProps = {
  projects: Project[];
};

export function FeaturedProjectsMarquee({ projects }: FeaturedProjectsMarqueeProps) {
  const marqueeProjects = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050816] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050816] to-transparent sm:w-24" />

      <div
        className="projects-marquee-track flex w-max gap-6 py-2 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
        aria-label="Featured projects marquee"
      >
        {marqueeProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="w-[320px] flex-none sm:w-[360px] xl:w-[390px]"
            aria-hidden={index >= projects.length}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
