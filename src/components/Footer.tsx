import { socialLinks } from '../constants/data';

/**
 * Site footer with branding and social links.
 */
export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 w-full py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div>
          <span className="text-lg font-bold text-indigo-600 dark:text-primary">Kishan Kewal</span>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            © {new Date().getFullYear()} Kishan Kewal. Built with focus and consistency.
          </p>
        </div>

        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-tertiary transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
