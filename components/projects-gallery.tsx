"use client";

import { useMemo, useState } from "react";
import { Project } from "@/data/site";
import { ProjectCard } from "@/components/project-card";

type ProjectsGalleryProps = {
  projects: Project[];
};

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                active
                  ? "bg-accent text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/8 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
