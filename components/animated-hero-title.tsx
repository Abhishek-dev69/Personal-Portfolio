"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

type AnimatedHeroTitleProps = {
  name: string;
  headline: string;
};

const heroEase = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.12,
    },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: heroEase },
  },
};

export function AnimatedHeroTitle({ name, headline }: AnimatedHeroTitleProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="space-y-5">
        <h1 className="max-w-full font-display text-[3.3rem] font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[5.6rem]">
          {name}
        </h1>
        <p className="aurora-text max-w-3xl font-display text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]">
          {headline}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <motion.h1
        initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: heroEase }}
        className="max-w-full font-display text-[3.3rem] font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[5.6rem]"
      >
        {name}
      </motion.h1>
      <motion.p
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl font-display text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]"
      >
        {headline.split(" ").map((item, index) => (
          <motion.span
            key={`${item}-${index}`}
            variants={word}
            className="aurora-text inline-block"
          >
            {item}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
