"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/site";
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
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
              className={`project-filter ${active ? "project-filter-active" : ""}`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
