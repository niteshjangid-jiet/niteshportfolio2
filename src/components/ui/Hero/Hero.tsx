import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiTerminal,
  FiZap,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhone,
  FiCode,
  FiCpu,
  FiCheckCircle,
} from 'react-icons/fi';
import { Button } from '../../common/Button/Button';
import { Badge } from '../../common/Badge/Badge';
import {
  HERO_TYPING_ROLES,
  PORTFOLIO_EMAIL,
  PORTFOLIO_PHONE,
  PORTFOLIO_LINKEDIN,
  PORTFOLIO_INSTAGRAM,
} from '../../../constants';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = HERO_TYPING_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % HERO_TYPING_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Ambient lighting - Dark & Light mode compatible */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-400/20 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-cyan-300/20 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="indigo" icon={<FiZap className="animate-pulse text-indigo-500 dark:text-indigo-400" />}>
              Available for Fullstack & AI Engineering Roles
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-xl sm:text-2xl font-mono text-slate-600 dark:text-slate-400">
              Hello,
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              I'm <span className="text-gradient">Nitesh Jangid</span>
            </h1>
            
            {/* Animated Typing Subhead */}
            <div className="h-14 flex items-center justify-center pt-2">
              <span className="font-mono text-xl sm:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-2">
                <FiTerminal className="text-slate-400 dark:text-slate-500 shrink-0" />
                <span>{displayedText}</span>
                <span className="w-2.5 h-7 bg-cyan-500 dark:bg-cyan-400 animate-pulse ml-0.5" />
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
          >
            Building high-performance web applications and AI-powered intelligence systems with React, TypeScript, Python, and modern cloud architecture.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a href="#projects">
              <Button size="lg" icon={<FiArrowRight />}>
                Explore Projects
              </Button>
            </a>

            <a href="#contact">
              <Button variant="secondary" size="lg" icon={<FiMail />}>
                Get in Touch
              </Button>
            </a>
          </motion.div>

          {/* Prominent Workable Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href={PORTFOLIO_LINKEDIN}
              data-security-link="social"
              data-expected-href={PORTFOLIO_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-md font-mono text-xs font-semibold"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_INSTAGRAM}
              data-security-link="social"
              data-expected-href={PORTFOLIO_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/50 transition-all shadow-md font-mono text-xs font-semibold"
              aria-label="Instagram Profile"
              title="Instagram Profile"
            >
              <FiInstagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              <span>Instagram</span>
            </a>

            <a
              href={`mailto:${PORTFOLIO_EMAIL}`}
              data-security-link="email"
              data-expected-href={`mailto:${PORTFOLIO_EMAIL}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-md font-mono text-xs font-semibold"
              aria-label="Send Email"
              title={`Email: ${PORTFOLIO_EMAIL}`}
            >
              <FiMail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{PORTFOLIO_EMAIL}</span>
            </a>

            <a
              href={`tel:${PORTFOLIO_PHONE.replace(/\s+/g, '')}`}
              data-security-link="phone"
              data-expected-href={`tel:${PORTFOLIO_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-md font-mono text-xs font-semibold"
              aria-label="Call Phone"
              title={`Phone: ${PORTFOLIO_PHONE}`}
            >
              <FiPhone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{PORTFOLIO_PHONE}</span>
            </a>
          </motion.div>

          {/* Quick Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono"
          >
            <span className="uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mr-2">Core Tech:</span>
            {['React 19', 'TypeScript', 'Python', 'Tailwind CSS', 'OpenCV', 'Supabase', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

