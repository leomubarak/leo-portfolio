import type { Transition, Variants } from 'framer-motion';

type Bezier = [number, number, number, number];

export const easing = {
  soft: [0.22, 1, 0.36, 1] as Bezier,
  inOut: [0.65, 0, 0.35, 1] as Bezier,
};

export const duration = {
  fast: 0.18,
  base: 0.35,
  slow: 0.55,
} as const;

export const transitions = {
  entrance: { duration: duration.slow, ease: easing.soft } satisfies Transition,
  hover: { duration: duration.fast, ease: easing.soft } satisfies Transition,
};

export const REVEAL_OFFSET = 20;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  visible: { opacity: 1, y: 0, transition: transitions.entrance },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const revealViewport = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' };
