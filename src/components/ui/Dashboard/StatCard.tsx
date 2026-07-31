import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

export interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: string;
  badgeColor?: 'emerald' | 'cyan' | 'indigo' | 'slate' | 'violet';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  badgeColor = 'indigo',
  className,
}) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        'p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-lg hover:border-slate-700/80 transition-all flex flex-col justify-between relative overflow-hidden',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
          {title}
        </span>
        {icon && (
          <div className="w-9 h-9 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-center text-indigo-400">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            {value}
          </span>
          {trend && (
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              {trend}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-xs text-slate-400 mt-1.5 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};
