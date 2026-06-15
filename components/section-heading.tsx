"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
      className={`flex max-w-3xl flex-col gap-5 ${alignment}`}
    >
      <motion.span
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.span>
      <div className="space-y-4">
        <h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
      </div>
    </motion.div>
  );
}
