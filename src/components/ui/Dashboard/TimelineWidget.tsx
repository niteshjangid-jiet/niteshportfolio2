import React from 'react';
import { Card } from '../../common/Card/Card';
import { FiClock, FiCheckCircle } from 'react-icons/fi';

export interface TimelineWidgetProps {
  timeline: { year: string; count: number; projects: string[] }[];
}

export const TimelineWidget: React.FC<TimelineWidgetProps> = ({ timeline }) => {
  return (
    <Card variant="glass" className="p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FiClock className="text-cyan-400" />
            Project Release Timeline
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Yearly distribution of delivered software solutions
          </p>
        </div>
      </div>

      <div className="space-y-6 relative pl-4 border-l border-slate-800">
        {timeline.map((item, idx) => (
          <div key={item.year} className="relative group">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#07090e] shadow-sm" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-mono font-bold text-white">{item.year}</span>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                {item.count} Release{item.count > 1 ? 's' : ''}
              </span>
            </div>
            
            <ul className="mt-2 space-y-1.5">
              {item.projects.map((proj) => (
                <li key={proj} className="flex items-center gap-2 text-xs text-slate-300">
                  <FiCheckCircle className="text-emerald-400 text-xs shrink-0" />
                  <span>{proj}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};
