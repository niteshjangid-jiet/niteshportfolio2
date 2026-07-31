import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode, FiGrid, FiUser, FiSend, FiLayout, FiSun, FiMoon } from 'react-icons/fi';
import { Button } from '../../common/Button/Button';
import { cn } from '../../../utils/cn';
import { useTheme } from '../../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FiCode /> },
    { name: 'Projects', path: '/projects', icon: <FiGrid /> },
    { name: 'Dashboard', path: '/dashboard', icon: <FiLayout /> },
    { name: 'About', path: '/about', icon: <FiUser /> },
    { name: 'Contact', path: '/contact', icon: <FiSend /> },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-[#07090e]/90 dark:bg-[#07090e]/90 light:bg-white/90 backdrop-blur-xl border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 py-3 shadow-2xl shadow-black/20'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#07090e] dark:bg-[#07090e] light:bg-slate-900 rounded-[7px] flex items-center justify-center font-mono font-bold text-white text-sm">
                NJ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white dark:text-white light:text-slate-900 tracking-tight text-base group-hover:text-indigo-300 dark:group-hover:text-indigo-300 light:group-hover:text-indigo-600 transition-colors">
                Nitesh Jangid
              </span>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 tracking-wider uppercase -mt-0.5">
                AI / Software Engineer
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 p-1.5 rounded-full border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none',
                    isActive
                      ? 'text-white dark:text-white light:text-slate-900 font-bold'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 hover:bg-slate-800/40 dark:hover:bg-slate-800/40 light:hover:bg-slate-200/60'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-slate-800 dark:bg-slate-800 light:bg-white rounded-full border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 shadow-inner"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span className="text-sm">{link.icon}</span>
                      {link.name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Button & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-400 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500/40 cursor-pointer flex items-center justify-center"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <FiSun className="w-4.5 h-4.5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <FiMoon className="w-4.5 h-4.5 text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex"
            >
              <Button variant="primary" size="sm" icon={<FiSend />}>
                Get in Touch
              </Button>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#090d16]/95 dark:bg-[#090d16]/95 light:bg-white/95 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 hover:text-white'
                    )
                  }
                >
                  <span className="text-lg text-indigo-400">{link.icon}</span>
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col gap-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    {theme === 'dark' ? <FiSun className="text-amber-400" /> : <FiMoon className="text-indigo-600" />}
                    {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  </span>
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {theme}
                  </span>
                </button>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm shadow-md"
                >
                  <FiSend />
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

