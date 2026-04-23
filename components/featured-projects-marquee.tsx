import { Project } from "@/data/site";
import { ProjectCard } from "@/components/project-card";

type FeaturedProjectsMarqueeProps = {
  projects: Project[];
};

export function FeaturedProjectsMarquee({ projects }: FeaturedProjectsMarqueeProps) {
  const marqueeProjects = [...projects, ...projects];

  return (
    <div className="projects-marquee-mask relative overflow-hidden py-2">
      <div
        className="projects-marquee-track flex w-max gap-6 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
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
