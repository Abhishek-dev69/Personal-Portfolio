"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ExperienceItem } from "@/data/site";

type ExperienceListProps = {
  items: ExperienceItem[];
  compact?: boolean;
};

export function ExperienceList({ items, compact = false }: ExperienceListProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="experience-timeline">
      {items.map((item, index) => (
        <motion.article
          key={`${item.organization}-${item.period}`}
          className="experience-entry"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.58, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="experience-node" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="experience-card">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="eyebrow">{item.role}</p>
                <h3 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-tight">
                  {item.organization}
                </h3>
                {item.headlineRole ? (
                  <p className="mt-2 text-sm font-medium text-muted">{item.headlineRole}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted lg:max-w-[13rem] lg:justify-end lg:text-right">
                <p className="font-semibold text-foreground">{item.period}</p>
                {item.location ? <p>{item.location}</p> : null}
                {item.workMode ? <p>{item.workMode}</p> : null}
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted">
              {item.bullets.slice(0, compact ? 2 : undefined).map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-[0.68rem] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
