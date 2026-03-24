import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from '../constants/animations';
import { skillCategories, learningSkills } from '../constants/data';

/**
 * "Skills" bento-grid section.
 * Renders skill categories as cards + a "Currently Learning" banner at the bottom.
 */
export default function SkillsSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto scroll-mt-24" id="skills">
      <h2 className="text-label-sm uppercase tracking-[0.2em] text-sky-600 dark:text-secondary mb-12 font-bold text-center">
        Technical Arsenal
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* ── Skill category cards ── */}
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={fadeInUp}
            className={`bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all group ${cat.gridClass ?? ''}`}
          >
            <div className={`${cat.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 bg-white dark:bg-zinc-950 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 ${cat.hoverBorder} transition-colors text-zinc-700 dark:text-zinc-300`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* ── Currently Learning banner ── */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-full lg:col-span-4 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2 text-zinc-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                Currently Learning
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                Expanding into mobile and advanced automated orchestration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {learningSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-xl text-xs font-bold text-sky-600 dark:text-secondary border border-zinc-200 dark:border-zinc-800 hover:bg-sky-500 hover:text-white dark:hover:bg-secondary dark:hover:text-zinc-950 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
