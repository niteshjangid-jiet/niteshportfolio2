import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../../data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { cn } from '../../../utils/cn';

export interface ProjectGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ limit, featuredOnly = false }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = ['All', 'AI/ML', 'Fullstack', 'Frontend', 'Backend'];

  let displayedProjects = featuredOnly
    ? projectsData.filter((p) => p.featured)
    : projectsData;

  if (activeFilter !== 'All') {
    displayedProjects = displayedProjects.filter((p) => p.category === activeFilter);
  }

  if (limit) {
    displayedProjects = displayedProjects.slice(0, limit);
  }

  return (
    <div className="space-y-8">
      {/* Filter Tabs if not limited */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'px-4 py-2 text-xs font-mono rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
                activeFilter === cat
                  ? 'bg-white text-slate-950 font-bold shadow-lg shadow-white/10'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </div>

      {displayedProjects.length === 0 && (
        <div className="py-12 text-center text-slate-500 font-mono text-sm">
          No projects found under category "{activeFilter}".
        </div>
      )}
    </div>
  );
};
