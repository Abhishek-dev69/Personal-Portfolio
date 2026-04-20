import { ExperienceItem } from "@/data/site";

type ExperienceListProps = {
  items: ExperienceItem[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <article key={`${item.organization}-${item.period}`} className="surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                {item.organization}
                {item.headlineRole ? (
                  <span className="text-slate-400"> {" - "} {item.headlineRole}</span>
                ) : null}
              </h3>
              <p className="text-lg text-accent">{item.role}</p>
            </div>

            <div className="space-y-1 text-left lg:text-right">
              <p className="font-display text-xl font-semibold text-white">{item.period}</p>
              {item.location ? <p className="text-sm text-slate-300">{item.location}</p> : null}
              {item.workMode ? <p className="text-sm italic text-slate-400">{item.workMode}</p> : null}
            </div>
          </div>

          <ul className="mt-6 grid gap-3 pl-5 text-sm leading-7 text-slate-300 marker:text-accent">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
