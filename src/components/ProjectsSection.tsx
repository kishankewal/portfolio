import { motion } from 'motion/react';
import { Construction, ArrowRight } from 'lucide-react';
import { projects } from '../constants/data';

/**
 * "Projects" gallery section.
 * Renders project cards with images (or a WIP placeholder) and metadata.
 */
export default function ProjectsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8 scroll-mt-24" id="projects">
      <h2 className="text-label-sm uppercase tracking-[0.2em] text-amber-600 dark:text-tertiary mb-12 font-bold text-center">
        Selected Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="group relative overflow-hidden rounded-2xl glass-card transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* ── Image / WIP placeholder ── */}
            <div className="h-48 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden flex items-center justify-center">
              {project.isWip ? (
                <Construction size={48} className="text-indigo-600 dark:text-primary animate-pulse mx-auto" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 dark:opacity-50 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </>
              )}
            </div>

            {/* ── Card body ── */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-2 py-0.5 rounded ${project.tagColor} text-[10px] font-bold uppercase tracking-wider`}>
                  {project.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">{project.desc}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-primary group-hover:text-sky-600 dark:group-hover:text-secondary transition-colors">
                {project.linkText}
                {!project.isWip && <ArrowRight size={14} />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
