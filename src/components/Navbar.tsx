import { motion } from 'motion/react';
import { navItems } from '../constants/data';

/**
 * Fixed top navigation bar.
 * Renders the logo, desktop nav links, and (commented-out) theme toggle / resume button.
 */
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 dark:bg-background/80 bg-white/80 transition-colors duration-500">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-bold tracking-tighter text-indigo-600 dark:text-primary"
          whileHover={{ scale: 1.05 }}
        >
          Kishan Kewal
        </motion.a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-primary transition-colors font-semibold tracking-tight text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side — placeholder for theme toggle / resume CTA */}
        <div className="flex items-center space-x-4">
          {/* Uncomment when ready:
            <ThemeToggle />
            <ResumeButton />
          */}
        </div>
      </div>
    </nav>
  );
}
