import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../../utils/cn';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'gradient' | 'bordered';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  hoverEffect = true,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
  
  const variants = {
    glass: 'bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 shadow-xl shadow-slate-200/50 dark:shadow-black/40',
    solid: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-slate-900 dark:text-white',
    gradient: 'bg-gradient-to-b from-slate-50 to-indigo-50/50 dark:from-slate-900/90 dark:to-slate-950/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800/60',
    bordered: 'bg-transparent border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-slate-700',
  };

  const hoverStyles = hoverEffect ? 'hover:border-slate-700/80 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1' : '';

  return (
    <motion.div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
