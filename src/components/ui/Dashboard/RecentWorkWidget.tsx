import React from 'react';
import { Project } from '../../../types/portfolio';
import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { FiExternalLink, FiGithub, FiZap } from 'react-icons/fi';

export interface RecentWorkWidgetProps {
  latestProject: Project | null;
  recentWork: Project[];
}

export const RecentWorkWidget: React.FC<RecentWorkWidgetProps> = ({
  latestProject,
  recentWork,
}) => {
  return (
    <div className="space-y-6">
      {/* Latest Project Spotlight Banner */}
      {latestProject && (
        <Card variant="gradient" className="p-6 md:p-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2">
                <Badge variant="indigo" icon={<FiZap className="text-amber-400" />}>
                  SPOTLIGHT RELEASE
                </Badge>
                <span className="text-xs font-mono text-slate-400">{latestProject.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {latestProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {latestProject.longDescription || latestProject.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {latestProject.technologies.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-slate-950/80 text-slate-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={latestProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-colors shadow-lg"
              >
                <FiExternalLink />
                Live Demo
              </a>
              <a
                href={latestProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-slate-200 font-semibold text-xs border border-slate-800 hover:bg-slate-800 transition-colors"
              >
                <FiGithub />
                Repository
              </a>
            </div>
          </div>
        </Card>
      )}

      {/* Recent Work Table / List */}
      <Card variant="glass" className="p-6">
        <h3 className="text-lg font-bold text-white mb-4">Recent Projects & Systems</h3>
        <div className="divide-y divide-slate-800">
          {recentWork.map((proj) => (
            <div key={proj.id} className="py-3 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-white truncate">{proj.title}</h4>
                <p className="text-xs text-slate-400 truncate">{proj.category} &bull; {proj.date}</p>
              </div>
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-indigo-400 hover:underline flex items-center gap-1 shrink-0"
              >
                View <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
