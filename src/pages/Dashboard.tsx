import React, { useMemo } from 'react';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { generateDashboardMetrics } from '../utils/analytics';
import { SectionTitle } from '../components/common/SectionTitle/SectionTitle';
import { StatCard } from '../components/ui/Dashboard/StatCard';
import { TechDistributionChart } from '../components/ui/Dashboard/TechDistributionChart';
import { TimelineWidget } from '../components/ui/Dashboard/TimelineWidget';
import { RecentWorkWidget } from '../components/ui/Dashboard/RecentWorkWidget';
import { Card } from '../components/common/Card/Card';
import { usePageTitle } from '../hooks/usePageTitle';
import { FiGrid, FiCheckCircle, FiActivity, FiCpu, FiCode, FiLayers } from 'react-icons/fi';

export const Dashboard: React.FC = () => {
  usePageTitle('Engineering Dashboard');

  // Automatically calculate metrics from data files
  const metrics = useMemo(() => {
    return generateDashboardMetrics(projectsData, skillsData);
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <SectionTitle
        badge="LIVE TELEMETRY"
        title="Developer System Dashboard"
        subtitle="Automated real-time operational metrics generated dynamically from software projects and technical stack repositories."
      />

      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value={metrics.totalProjects}
          subtitle="Built & Published"
          icon={<FiGrid />}
          trend="+100% Active"
        />
        <StatCard
          title="Completed"
          value={metrics.completedProjects}
          subtitle="Production Deployed"
          icon={<FiCheckCircle />}
          badgeColor="emerald"
          trend="100% Success"
        />
        <StatCard
          title="Ongoing / Maintained"
          value={metrics.ongoingProjects || 0}
          subtitle="Active Repositories"
          icon={<FiActivity />}
          badgeColor="cyan"
          trend="Live Ops"
        />
        <StatCard
          title="Technologies Used"
          value={metrics.totalTechnologiesCount}
          subtitle="Languages, AI & Tools"
          icon={<FiCpu />}
          badgeColor="violet"
          trend="Multi-stack"
        />
      </div>

      {/* Tech Breakdown by Category Pills */}
      <Card variant="glass" className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <FiLayers className="text-indigo-400" />
            Stack Category Breakdown
          </h3>
          <span className="text-xs font-mono text-slate-400">Calculated from Skills Engine</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Object.entries(metrics.techCategoryBreakdown).map(([cat, count]) => (
            <div key={cat} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-xs font-mono text-slate-400 block truncate">{cat}</span>
              <span className="text-xl font-extrabold text-white font-mono mt-1 block">{count}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Middle Grid: Technology Distribution & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <TechDistributionChart
            distribution={metrics.technologyDistribution}
            skillsSummary={metrics.skillsSummary}
          />
        </div>
        <div className="lg:col-span-5">
          <TimelineWidget timeline={metrics.projectTimeline} />
        </div>
      </div>

      {/* Bottom Grid: Spotlight Release & Recent Work */}
      <RecentWorkWidget
        latestProject={metrics.latestProject}
        recentWork={metrics.recentWork}
      />
    </div>
  );
};

export default Dashboard;
