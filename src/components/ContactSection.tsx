import { motion } from 'motion/react';
import { socialLinks } from '../constants/data';

/**
 * "Contact" CTA section.
 * Glass-morphism card with a heading, subtitle, and social link icons.
 */
export default function ContactSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-center scroll-mt-24" id="contact">
      <motion.div
        className="glass-card rounded-[2rem] p-12 md:p-20 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Decorative blurred blobs */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 dark:bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-sky-500/10 dark:bg-secondary/10 blur-[100px] rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-label-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-primary mb-6 font-bold">
            Connect
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
            Ready to solve real world problems?
          </h3>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-1 leading-relaxed">
            If you're building something interesting or need a developer who can solve real problems then let's connect.
          </p>

          {/* Social icons */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white dark:hover:bg-zinc-800 transition-all text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-primary"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
