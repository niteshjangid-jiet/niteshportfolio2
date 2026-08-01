import React from 'react';
import { NavLink } from 'react-router-dom';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/80 dark:bg-[#07090e] text-slate-600 dark:text-slate-400 py-10 relative z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <NavLink to="/" className="font-bold text-slate-900 dark:text-white tracking-tight text-lg">
              Nitesh Jangid
            </NavLink>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Computer Science (AI/ML) & Software Developer
            </p>
          </div>

          {/* Center text */}
          <div className="text-center">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono flex items-center justify-center gap-1.5">
              <span>Made with</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">React 19</span>
              <span>+</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">TypeScript</span>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-1">
              &copy; {currentYear} Nitesh Jangid. All rights reserved.
            </p>
          </div>

          {/* Right Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/niteshjangid-jiet"
              data-security-link="social"
              data-expected-href="https://github.com/niteshjangid-jiet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/niteshjangid0403"
              data-security-link="social"
              data-expected-href="https://www.linkedin.com/in/niteshjangid0403"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/_niteshjangid_"
              data-security-link="social"
              data-expected-href="https://www.instagram.com/_niteshjangid_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all hover:scale-110"
              aria-label="Instagram Profile"
            >
              <SiInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
