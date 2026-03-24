import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { experiences } from '../constants/data';

/**
 * "Experience" timeline section.
 * Left column: heading. Right column: timeline entries with bullet points.
 */
export default function ExperienceSection() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 scroll-mt-24" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ── Section heading ── */}
          <div className="lg:col-span-4">
            <h2 className="text-label-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-primary mb-4 font-bold">
              Career Path
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Professional Experience
            </h3>
          </div>

          {/* ── Timeline entries ── */}
          <div className="lg:col-span-8 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-zinc-200 dark:before:bg-zinc-800"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-indigo-600 dark:bg-primary ring-4 ring-indigo-500/20 dark:ring-primary/20" />

                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">{exp.company}</h4>
                    <p className="text-indigo-600 dark:text-primary font-medium">{exp.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-white dark:bg-zinc-900 rounded text-xs font-bold text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-indigo-600 dark:text-primary shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
