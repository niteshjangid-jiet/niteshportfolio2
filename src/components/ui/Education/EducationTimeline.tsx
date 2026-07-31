import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../../data/education';
import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { FiCalendar, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi';

export const EducationTimeline: React.FC = () => {
  return (
    <div className="relative pl-6 md:pl-8 border-l border-indigo-500/30 space-y-12">
      {educationData.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          {/* Timeline Node Icon */}
          <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#07090e] border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-125 transition-transform duration-300">
            <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
          </div>

          <Card variant="glass" className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <Badge variant="indigo" icon={<FiCalendar />}>
                {edu.startYear} &mdash; {edu.endYear}
              </Badge>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30">
                {edu.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {edu.institution}
            </h3>

            <p className="text-base font-semibold text-indigo-600 dark:text-indigo-300 mt-1">
              {edu.degree} &mdash; <span className="text-cyan-600 dark:text-cyan-300">{edu.field}</span>
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <FiMapPin className="text-slate-400 dark:text-slate-500" />
                {edu.location}
              </span>
              {edu.gpa && (
                <span className="flex items-center gap-1">
                  <FiAward className="text-amber-500 dark:text-amber-400" />
                  GPA: {edu.gpa}
                </span>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Specialization & Highlights
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {edu.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100/70 dark:bg-slate-950/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80">
                    <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
