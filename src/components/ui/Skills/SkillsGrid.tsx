import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../../data/skills';
import { SkillCategory } from '../../../types/portfolio';
import { Card } from '../../common/Card/Card';
import { cn } from '../../../utils/cn';
import {
  SiPython,
  SiJavascript,
  SiC,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiGit,
  SiGithub,
  SiOpencv,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

export const SkillsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Languages',
    'Frontend',
    'Backend',
    'Database',
    'Tools',
    'Machine Learning',
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'SiPython': return <SiPython className="text-yellow-400" />;
      case 'FaJava': return <FaJava className="text-red-400" />;
      case 'SiJavascript': return <SiJavascript className="text-yellow-300" />;
      case 'SiC': return <SiC className="text-blue-400" />;
      case 'SiMysql': return <SiMysql className="text-blue-500" />;
      case 'SiReact': return <SiReact className="text-cyan-400" />;
      case 'SiHtml5': return <SiHtml5 className="text-orange-500" />;
      case 'SiCss3': return <SiCss className="text-blue-400" />;
      case 'SiTailwindcss': return <SiTailwindcss className="text-teal-400" />;
      case 'SiNodedotjs': return <SiNodedotjs className="text-emerald-500" />;
      case 'SiExpress': return <SiExpress className="text-gray-300" />;
      case 'SiSupabase': return <SiSupabase className="text-emerald-400" />;
      case 'SiGit': return <SiGit className="text-orange-600" />;
      case 'SiGithub': return <SiGithub className="text-slate-900 dark:text-white" />;
      case 'SiVisualstudiocode': return <FaCode className="text-blue-400" />;
      case 'SiOpencv': return <SiOpencv className="text-blue-600" />;
      case 'SiScikitlearn': return <SiScikitlearn className="text-orange-400" />;
      case 'SiTensorflow': return <SiTensorflow className="text-amber-500" />;
      default: return <SiReact className="text-indigo-500 dark:text-indigo-400" />;
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'px-4 py-2 text-xs font-mono rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
              selectedCategory === cat
                ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/25 border border-indigo-400/40'
                : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
          >
            <Card variant="glass" className="p-4 hover:border-indigo-500/40 group transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                  {getSkillIcon(skill.iconName)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{skill.name}</h4>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block truncate mt-0.5">
                    {skill.category}
                  </span>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-950 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-300/80 dark:border-slate-800/80">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
