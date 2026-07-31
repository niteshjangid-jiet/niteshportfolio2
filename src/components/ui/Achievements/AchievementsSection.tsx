import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../../data/achievements';
import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { FiAward } from 'react-icons/fi';

export const AchievementsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {achievementsData.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <Card variant="glass" className="h-full p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="emerald" icon={<FiAward />}>
                  {item.badge || 'Achievement'}
                </Badge>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{item.date}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
              <p className="text-xs font-mono text-indigo-600 dark:text-indigo-300">{item.organization}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
