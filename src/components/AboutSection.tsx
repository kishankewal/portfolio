import { motion } from 'motion/react';
import { fadeInUp } from '../constants/animations';
import { philosophyCards } from '../constants/data';

/**
 * "About / Philosophy" section.
 * Two-column layout: narrative text on the left, philosophy cards on the right.
 */
export default function AboutSection() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 scroll-mt-24" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* ── Narrative column ── */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-label-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-primary mb-4 font-bold">
              The Philosophy
            </h2>
            <h3 className="text-4xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
              Building with Intent
            </h3>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              <p>
                I didn't start coding just to write code, I started because I wanted to build something meaningful.
                Over time, I realized what I enjoy most isn't just development, it's solving complex problems,
                debugging critical issues, and making systems faster, more secure, and more reliable.
              </p>
              <p>
                I've spent over 6 years working on real world production systems, improving performance from
                seconds to milliseconds, and building features that users actually rely on.
              </p>
            </div>
          </motion.div>

          {/* ── Philosophy cards column ── */}
          <div className="grid grid-cols-1 gap-6">
            {philosophyCards.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-8 rounded-2xl hover:bg-white dark:hover:bg-zinc-900 transition-all cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{item.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
