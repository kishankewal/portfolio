import { motion } from 'motion/react';

/**
 * Hero / landing section.
 * Contains the headline, subtitle, CTA buttons, and a decorative stats card.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* ── Left column: text content ── */}
        <motion.div
          className="lg:col-span-8 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability tags */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-secondary text-[10px] font-bold tracking-widest uppercase rounded-full border border-zinc-200 dark:border-zinc-800">
              Open to Remote Opportunities
            </span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-amber-600 dark:text-tertiary text-[10px] font-bold tracking-widest uppercase rounded-full border border-zinc-200 dark:border-zinc-800">
              React Native & DevOps
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-900 dark:text-white">
            I don't just build applications{' '}
            <span className="hero-gradient">I solve the problems behind them.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Full Stack Developer focused on performance, security, and real-world scalability.
            6+ years of experience building production-grade applications using Laravel, React, and AWS.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-indigo-600 dark:bg-primary text-white dark:text-zinc-950 font-bold rounded-xl shadow-xl shadow-indigo-500/20 dark:shadow-primary/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* ── Right column: decorative animated card (desktop only) ── */}
        <motion.div
          className="hidden lg:block lg:col-span-4 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Glow background */}
          <div className="aspect-square rounded-full bg-indigo-500/10 dark:from-primary/20 dark:to-secondary/10 blur-3xl absolute -inset-4" />

          <div className="relative glass-card aspect-square rounded-2xl flex items-center justify-center p-8">
            <div className="space-y-4 w-full">
              {/* Animated "code" bars */}
              <motion.div
                className="h-2 w-1/2 bg-indigo-500/20 dark:bg-primary/20 rounded"
                animate={{ width: ['20%', '50%', '20%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="h-2 w-3/4 bg-sky-500/20 dark:bg-secondary/20 rounded"
                animate={{ width: ['30%', '75%', '30%'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="h-2 w-2/3 bg-amber-500/20 dark:bg-tertiary/20 rounded"
                animate={{ width: ['40%', '66%', '40%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Quick stats */}
              <div className="pt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-primary">6+</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Years Exp</div>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="text-2xl font-bold text-sky-600 dark:text-secondary">5+</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Products Built</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
