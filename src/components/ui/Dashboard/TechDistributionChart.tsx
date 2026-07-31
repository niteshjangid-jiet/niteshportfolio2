import React from 'react';
import { Card } from '../../common/Card/Card';
import { FiPieChart } from 'react-icons/fi';

export interface TechDistributionChartProps {
  distribution: { name: string; percentage: number; count: number; category: string }[];
  skillsSummary: { category: string; averageLevel: number; skillCount: number }[];
}

export const TechDistributionChart: React.FC<TechDistributionChartProps> = ({
  distribution,
  skillsSummary,
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'frontend': return 'from-cyan-500 to-blue-500';
      case 'backend': return 'from-indigo-500 to-violet-500';
      case 'database': return 'from-emerald-500 to-teal-500';
      case 'machine learning': return 'from-purple-500 to-pink-500';
      case 'languages': return 'from-amber-400 to-orange-500';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  return (
    <Card variant="glass" className="p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FiPieChart className="text-indigo-400" />
            Technology Distribution & Skill Level
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Automatically aggregated across active technical competencies
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-indigo-300 border border-slate-800">
          Vite + React System
        </span>
      </div>

      {/* Distribution Progress Bars */}
      <div className="space-y-4">
        {skillsSummary.map((item) => (
          <div key={item.category} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-200 font-semibold">{item.category}</span>
              <div className="flex items-center gap-3">
                <span className="text-slate-400">{item.skillCount} Skills</span>
                <span className="text-emerald-400 font-bold">{item.averageLevel}% Avg Proficiency</span>
              </div>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} transition-all duration-700`}
                style={{ width: `${item.averageLevel}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
