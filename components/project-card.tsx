"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/site";
import { ProjectVisual } from "@/components/project-visual";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="project-card group"
    >
      <ProjectVisual project={project} index={index} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow">{project.category}</span>
          {project.liveUrl ? <span className="project-status">Live</span> : null}
        </div>

        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-7 text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.stack.slice(0, 4).map((item) => (
            <li key={item} className="tech-chip">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-primary">
              {project.liveLabel ?? "Live demo"}
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-secondary">
              {project.githubLabel ?? "GitHub"}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-link-disabled">
              {project.githubLabel ?? "Private case study"}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
