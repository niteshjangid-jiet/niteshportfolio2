import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../../types/portfolio';
import { Badge } from '../../common/Badge/Badge';
import { FiCheckCircle, FiActivity, FiCode, FiLayers, FiExternalLink, FiGithub } from 'react-icons/fi';

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div
      data-project-id={project.id}
      data-security-card="true"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800/90 hover:border-indigo-500/50 dark:hover:border-indigo-500/40 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden"
    >
      {/* Code-Centric Visual Card Header */}
      <div className="relative p-6 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <Badge
              variant={project.status === 'Completed' ? 'emerald' : 'indigo'}
              icon={project.status === 'Completed' ? <FiCheckCircle /> : <FiActivity />}
              size="sm"
            >
              {project.status}
            </Badge>
            <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-slate-200 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              {project.category}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{project.date}</span>
        </div>

        {/* Monospace Code Preview Header */}
        <div className="flex items-center gap-3 pt-1 relative z-10">
          <div className="p-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/90 text-indigo-600 dark:text-indigo-400 shadow-sm">
            {project.category === 'AI/ML' ? (
              <FiActivity className="w-6 h-6" />
            ) : project.category === 'Fullstack' ? (
              <FiCheckCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            ) : project.category === 'Frontend' ? (
              <FiLayers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <FiCode className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            )}
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">// project_spec</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white font-mono tracking-tight">{project.id}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Key Metrics / Highlights if present */}
        {project.metrics && (
          <div className="flex items-center gap-4 py-2.5 px-3 rounded-lg bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-700 dark:text-slate-300">
            {project.metrics.accuracy && (
              <div>
                <span className="text-slate-500">Acc:</span> <span className="text-emerald-600 dark:text-emerald-400 font-bold">{project.metrics.accuracy}</span>
              </div>
            )}
            {project.metrics.users && (
              <div>
                <span className="text-slate-500">Users:</span> <span className="text-cyan-600 dark:text-cyan-400 font-bold">{project.metrics.users}</span>
              </div>
            )}
            {project.metrics.speedup && (
              <div>
                <span className="text-slate-500">Speed:</span> <span className="text-indigo-600 dark:text-indigo-300 font-bold">{project.metrics.speedup}</span>
              </div>
            )}
          </div>
        )}

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons with Deploy Link */}
        <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-200/80 dark:border-slate-800/80">
          <a
            href={project.liveUrl}
            data-security-link="project-live"
            data-project-id={project.id}
            data-expected-href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-mono text-xs font-bold transition-all shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 group/btn"
          >
            <span>Visit Site</span>
            <FiExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              data-security-link="project-github"
              data-project-id={project.id}
              data-expected-href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};


