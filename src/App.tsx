import { useState, useEffect, ReactElement } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Moon, 
  Sun, 
  Download, 
  Database, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Construction, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface SocialLink {
  label: string;
  href: string;
  icon: ReactElement;
}

const socialLinks: SocialLink[] = [
  // { label: 'GitHub',   href: 'https://github.com/kishankewal',          icon: <Github   size={20} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kishankewal',     icon: <Linkedin size={20} /> },
  { label: 'Twitter',  href: 'https://twitter.com/ikishankewal',         icon: <Twitter  size={20} /> },
  // { label: 'YouTube',  href: 'https://youtube.com/@kishankewal',        icon: <Youtube  size={20} /> },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-background text-on-surface' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 dark:bg-background/80 bg-white/80 transition-colors duration-500">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <motion.a 
            href="#" 
            className="text-xl font-bold tracking-tighter text-indigo-600 dark:text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Kishan Kewal
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-primary transition-colors font-semibold tracking-tight text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-primary border border-zinc-200 dark:border-zinc-800"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <motion.a 
              href="#" 
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-indigo-600 dark:bg-primary text-white dark:text-zinc-950 text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 dark:shadow-primary/20"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} />
              Resume
            </motion.a> */}
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <motion.div 
              className="lg:col-span-8 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-secondary text-[10px] font-bold tracking-widest uppercase rounded-full border border-zinc-200 dark:border-zinc-800">
                  Open to Remote Opportunities
                </span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-amber-600 dark:text-tertiary text-[10px] font-bold tracking-widest uppercase rounded-full border border-zinc-200 dark:border-zinc-800">
                  React Native & DevOps
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-900 dark:text-white">
                I don’t just build applications <span className="hero-gradient">I solve the problems behind them.</span>
              </h1>
              
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                Full Stack Developer focused on performance, security, and real-world scalability. 6+ years of experience building production-grade applications using Laravel, React, and AWS.
              </p>
              
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

            <motion.div 
              className="hidden lg:block lg:col-span-4 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="aspect-square rounded-full bg-indigo-500/10 dark:from-primary/20 dark:to-secondary/10 blur-3xl absolute -inset-4"></div>
              <div className="relative glass-card aspect-square rounded-2xl flex items-center justify-center p-8">
                <div className="space-y-4 w-full">
                  <motion.div 
                    className="h-2 w-1/2 bg-indigo-500/20 dark:bg-primary/20 rounded"
                    animate={{ width: ["20%", "50%", "20%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div 
                    className="h-2 w-3/4 bg-sky-500/20 dark:bg-secondary/20 rounded"
                    animate={{ width: ["30%", "75%", "30%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="h-2 w-2/3 bg-amber-500/20 dark:bg-tertiary/20 rounded"
                    animate={{ width: ["40%", "66%", "40%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  
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

        {/* About Section */}
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 scroll-mt-24" id="about">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-label-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-primary mb-4 font-bold">The Philosophy</h2>
                <h3 className="text-4xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">Building with Intent</h3>
                <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  <p>I didn’t start coding just to write code, I started because I wanted to build something meaningful. Over time, I realized what I enjoy most isn’t just development, it’s solving complex problems, debugging critical issues, and making systems faster, more secure, and more reliable.</p>
                  <p>I’ve spent over 6 years working on real world production systems, improving performance from seconds to milliseconds, and building features that users actually rely on.</p>
                </div>
              </motion.div>
            
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Zap className="text-amber-500" />, title: "Performance Optimization", desc: "Translating 8-second query bottlenecks into sub-millisecond responses through architectural precision." },
                  { icon: <ShieldCheck className="text-sky-500" />, title: "Platform Security", desc: "Designed multi-layered security systems — including rate limiting, content moderation, CSRF protection, and authentication hardening — built to handle real world attack patterns." },
                  { icon: <Code2 className="text-indigo-500" />, title: "Full-Stack Ownership", desc: "Built complete applications from scratch — from database schema and API design to frontend UI with security baked in at every layer." }
                ].map((item, idx) => (
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

        {/* Skills Bento */}
        <section className="py-24 px-8 max-w-7xl mx-auto scroll-mt-24" id="skills">
          <h2 className="text-label-sm uppercase tracking-[0.2em] text-sky-600 dark:text-secondary mb-12 font-bold text-center">Technical Arsenal</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Backend */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:bg-white dark:hover:bg-zinc-900 transition-all group"
            >
              <div>
                <div className="text-indigo-600 dark:text-primary mb-4 group-hover:scale-110 transition-transform"><Database size={32} /></div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Backend Architecture</h3>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Redis', 'Elasticsearch'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-950 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-primary/50 transition-colors text-zinc-700 dark:text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div 
              variants={fadeInUp}
              className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all group"
            >
              <div className="text-sky-600 dark:text-secondary mb-4 group-hover:scale-110 transition-transform"><Layers size={32} /></div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'Framer Motion'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-950 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 hover:border-sky-500 dark:hover:border-secondary/50 transition-colors text-zinc-700 dark:text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure */}
            <motion.div 
              variants={fadeInUp}
              className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all group"
            >
              <div className="text-amber-600 dark:text-tertiary mb-4 group-hover:scale-110 transition-transform"><Terminal size={32} /></div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Linux', 'CI/CD'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-950 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 hover:border-amber-500 dark:hover:border-tertiary/50 transition-colors text-zinc-700 dark:text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Learning */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-full lg:col-span-4 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2 text-zinc-900 dark:text-white">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                    Currently Learning
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">Expanding into mobile and advanced automated orchestration.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['React Native', 'Jenkins', 'Advanced DevOps'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-xl text-xs font-bold text-sky-600 dark:text-secondary border border-zinc-200 dark:border-zinc-800 hover:bg-sky-500 hover:text-white dark:hover:bg-secondary dark:hover:text-zinc-950 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 scroll-mt-24" id="experience">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-label-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-primary mb-4 font-bold">Career Path</h2>
                <h3 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Professional Experience</h3>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <motion.div 
                  className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-zinc-200 dark:before:bg-zinc-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-indigo-600 dark:bg-primary ring-4 ring-indigo-500/20 dark:ring-primary/20"></div>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">AA Marketing</h4>
                      <p className="text-indigo-600 dark:text-primary font-medium">Senior Full Stack Developer</p>
                    </div>
                    <span className="px-3 py-1 bg-white dark:bg-zinc-900 rounded text-xs font-bold text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">Sep 2020 – Present</span>
                  </div>
                  <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                    {[
                      "Optimized slow database queries from 8–10 seconds down to milliseconds.",
                      "Built and implemented security systems including rate limiting, content monitoring, and IP protection.",
                      "Developed scalable REST APIs with authentication and authorization systems.",
                      "Created real-time features like chat systems and TikTok-style content flows."
                    ].map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 size={18} className="text-indigo-600 dark:text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 max-w-7xl mx-auto px-8 scroll-mt-24" id="projects">
          <h2 className="text-label-sm uppercase tracking-[0.2em] text-amber-600 dark:text-tertiary mb-12 font-bold text-center">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advertising Platform",
                desc: "Denmark-based high-performance ad-tech solution focusing on real-time bidding and analytics.",
                tag: "Private / NDA",
                tagColor: "bg-red-500/10 text-red-600 dark:text-red-400",
                linkText: "Case Study coming soon",
                img: "https://picsum.photos/seed/ads/800/600"
              },
              {
                title: "Spa & Massage Platform",
                desc: "Dubai-based luxury booking engine with real-time availability and dynamic scheduling.",
                tag: "Private / NDA",
                tagColor: "bg-red-500/10 text-red-600 dark:text-red-400",
                linkText: "Architecture details on request",
                img: "https://picsum.photos/seed/spa/800/600"
              },
              {
                title: "Fitness App",
                desc: "A personal project to build a React Native fitness app with workout tracking, progress analytics, and social features.",
                tag: "In Progress",
                tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                linkText: "Personal Project",
                isWip: true
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl glass-card transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                  {project.isWip ? (
                    <div className="text-center">
                      <Construction size={48} className="text-indigo-600 dark:text-primary animate-pulse mx-auto" />
                    </div>
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

        {/* Contact Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto text-center scroll-mt-24" id="contact">
          <motion.div 
            className="glass-card rounded-[2rem] p-12 md:p-20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 dark:bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-sky-500/10 dark:bg-secondary/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-label-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-primary mb-6 font-bold">Connect</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
                Ready to solve real world problems?
              </h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-1 leading-relaxed">
                If you're building something interesting or need a developer who can solve real problems then let's connect.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                {/* <motion.a 
                  href="mailto:kishan@example.com"
                  className="text-3xl font-bold text-indigo-600 dark:text-primary hover:text-sky-600 dark:hover:text-secondary transition-colors underline decoration-zinc-200 dark:decoration-zinc-800 underline-offset-8"
                  whileHover={{ scale: 1.05 }}
                >
                  kishan@example.com
                </motion.a> */}
                
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
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-950 w-full py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
          <div>
            <span className="text-lg font-bold text-indigo-600 dark:text-primary">Kishan Kewal</span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">© {new Date().getFullYear()} Kishan Kewal. Built with focus and consistency.</p>
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
    </div>
  );
}
