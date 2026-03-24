/**
 * Shared animation variants used across multiple components.
 * Keep all reusable Framer Motion presets here to stay DRY.
 */

/** Fade-in from below — great for scroll-reveal elements */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

/** Stagger children one after another with a 100ms gap */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
