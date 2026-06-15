import { skillGroups } from "@/data/site";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group, index) => (
        <article key={group.title} className="skill-group">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {group.title}
              </h3>
            </div>
            <span className="skill-group-mark" aria-hidden="true" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">{group.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
            {group.skills.map((skill) => (
              <li key={skill} className="tech-chip">
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

