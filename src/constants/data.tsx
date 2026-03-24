/**
 * All static content/data for the portfolio lives here.
 * Update this single file when you want to change text, links, or skills.
 */

import { ReactElement } from 'react';
import {
  Linkedin,
  Twitter,
  Zap,
  ShieldCheck,
  Code2,
  Database,
  Layers,
  Terminal,
} from 'lucide-react';

// ─── Types ──────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactElement;
}

export interface PhilosophyCard {
  icon: ReactElement;
  title: string;
  desc: string;
}

export interface SkillCategory {
  icon: ReactElement;
  title: string;
  skills: string[];
  /** Tailwind colour classes for the icon */
  iconColor: string;
  /** Border-hover colour for individual skill chips */
  hoverBorder: string;
  /** Extra grid classes (e.g. col-span) */
  gridClass?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
  linkText: string;
  img?: string;
  isWip?: boolean;
}

// ─── Social Links ───────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kishankewal', icon: <Linkedin size={20} /> },
  { label: 'Twitter', href: 'https://twitter.com/ikishankewal', icon: <Twitter size={20} /> },
];

// ─── Navigation Items ───────────────────────────────────

export const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

// ─── About / Philosophy Cards ───────────────────────────

export const philosophyCards: PhilosophyCard[] = [
  {
    icon: <Zap className="text-amber-500" />,
    title: 'Performance Optimization',
    desc: 'Translating 8-second query bottlenecks into sub-millisecond responses through architectural precision.',
  },
  {
    icon: <ShieldCheck className="text-sky-500" />,
    title: 'Platform Security',
    desc: 'Designed multi-layered security systems — including rate limiting, content moderation, CSRF protection, and authentication hardening — built to handle real world attack patterns.',
  },
  {
    icon: <Code2 className="text-indigo-500" />,
    title: 'Full-Stack Ownership',
    desc: 'Built complete applications from scratch — from database schema and API design to frontend UI with security baked in at every layer.',
  },
];

// ─── Skills ─────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    icon: <Database size={32} />,
    title: 'Backend Architecture',
    skills: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Redis', 'Elasticsearch'],
    iconColor: 'text-indigo-600 dark:text-primary',
    hoverBorder: 'hover:border-indigo-500 dark:hover:border-primary/50',
    gridClass: 'md:col-span-2',
  },
  {
    icon: <Layers size={32} />,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    iconColor: 'text-sky-600 dark:text-secondary',
    hoverBorder: 'hover:border-sky-500 dark:hover:border-secondary/50',
  },
  {
    icon: <Terminal size={32} />,
    title: 'Infrastructure',
    skills: ['AWS', 'Docker', 'Linux', 'CI/CD'],
    iconColor: 'text-amber-600 dark:text-tertiary',
    hoverBorder: 'hover:border-amber-500 dark:hover:border-tertiary/50',
  },
];

export const learningSkills = ['React Native', 'Jenkins', 'Advanced DevOps'];

// ─── Experience ─────────────────────────────────────────

export const experiences: Experience[] = [
  {
    company: 'AA Marketing',
    role: 'Senior Full Stack Developer',
    period: 'Sep 2020 – Present',
    bullets: [
      'Optimized slow database queries from 8–10 seconds down to milliseconds.',
      'Built and implemented security systems including rate limiting, content monitoring, and IP protection.',
      'Developed scalable REST APIs with authentication and authorization systems.',
      'Created real-time features like chat systems and TikTok-style content flows.',
    ],
  },
];

// ─── Projects ───────────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Advertising Platform',
    desc: 'Denmark-based high-performance ad-tech solution focusing on real-time bidding and analytics.',
    tag: 'Private / NDA',
    tagColor: 'bg-red-500/10 text-red-600 dark:text-red-400',
    linkText: 'Case Study coming soon',
    img: 'https://picsum.photos/seed/ads/800/600',
  },
  {
    title: 'Spa & Massage Platform',
    desc: 'Dubai-based luxury booking engine with real-time availability and dynamic scheduling.',
    tag: 'Private / NDA',
    tagColor: 'bg-red-500/10 text-red-600 dark:text-red-400',
    linkText: 'Architecture details on request',
    img: 'https://picsum.photos/seed/spa/800/600',
  },
  {
    title: 'Fitness App',
    desc: 'A personal project to build a React Native fitness app with workout tracking, progress analytics, and social features.',
    tag: 'In Progress',
    tagColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    linkText: 'Personal Project',
    isWip: true,
  },
];
