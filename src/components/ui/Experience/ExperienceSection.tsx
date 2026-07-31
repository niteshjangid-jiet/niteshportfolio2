import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../../data/achievements';
import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { FiBriefcase, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {experienceData.map((exp, idx) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <Card variant="glass" className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FiBriefcase className="text-indigo-600 dark:text-indigo-400" />
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 mt-0.5">{exp.company}</p>
              </div>
              <div className="text-left sm:text-right">
                <Badge variant="indigo">{exp.period}</Badge>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono flex items-center sm:justify-end gap-1">
                  <FiMapPin className="text-slate-400 dark:text-slate-500" />
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <FiCheckCircle className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0 mt-1" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
              {exp.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
