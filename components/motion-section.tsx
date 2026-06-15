"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type MotionSectionProps = Omit<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  delay?: number;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MotionSection({
  children,
  delay = 0,
  ...props
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: "-80px" }}
      transition={{ duration: 0.72, delay, ease: easeOut }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
