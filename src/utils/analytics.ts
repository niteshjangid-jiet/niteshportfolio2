import { Project, Skill } from '../types/portfolio';

export interface DashboardStats {
  totalProjects: number;
  completedProjects: number;
  ongoingProjects: number;
  totalTechnologiesCount: number;
  techCategoryBreakdown: Record<string, number>;
  technologyDistribution: { name: string; percentage: number; count: number; category: string }[];
  latestProject: Project | null;
  recentWork: Project[];
  projectTimeline: { year: string; count: number; projects: string[] }[];
  skillsSummary: { category: string; averageLevel: number; skillCount: number }[];
}

export function generateDashboardMetrics(projects: Project[], skills: Skill[]): DashboardStats {
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed' || p.status === 'Featured' || p.status === 'Maintained').length;
  const ongoingProjects = projects.filter(p => p.status === 'In Progress').length;

  // Extract all unique technologies from projects
  const allProjectTechs = projects.flatMap(p => p.technologies);
  const techCounts: Record<string, number> = {};
  allProjectTechs.forEach(tech => {
    techCounts[tech] = (techCounts[tech] || 0) + 1;
  });

  const totalTechnologiesCount = Object.keys(techCounts).length;

  // Category breakdown using skills mapping or default matching
  const techCategoryBreakdown: Record<string, number> = {
    Frontend: 0,
    Backend: 0,
    Database: 0,
    'Machine Learning': 0,
    Languages: 0,
    Tools: 0,
  };

  skills.forEach(skill => {
    if (techCategoryBreakdown[skill.category] !== undefined) {
      techCategoryBreakdown[skill.category] += 1;
    }
  });

  // Calculate Technology Distribution %
  const totalSkillEntries = skills.length || 1;
  const technologyDistribution = Object.entries(techCategoryBreakdown).map(([category, count]) => ({
    name: category,
    count,
    percentage: Math.round((count / totalSkillEntries) * 100),
    category
  }));

  // Latest Project
  const sortedProjects = [...projects].sort((a, b) => b.date.localeCompare(a.date));
  const latestProject = sortedProjects[0] || null;
  const recentWork = sortedProjects.slice(0, 3);

  // Project Timeline grouping
  const timelineMap: Record<string, string[]> = {};
  projects.forEach(p => {
    const year = p.date.substring(0, 4);
    if (!timelineMap[year]) {
      timelineMap[year] = [];
    }
    timelineMap[year].push(p.title);
  });

  const projectTimeline = Object.entries(timelineMap)
    .map(([year, projs]) => ({
      year,
      count: projs.length,
      projects: projs
    }))
    .sort((a, b) => b.year.localeCompare(a.year));

  // Skills Summary
  const skillCategoryMap: Record<string, { totalLevel: number; count: number }> = {};
  skills.forEach(s => {
    if (!skillCategoryMap[s.category]) {
      skillCategoryMap[s.category] = { totalLevel: 0, count: 0 };
    }
    skillCategoryMap[s.category].totalLevel += s.level;
    skillCategoryMap[s.category].count += 1;
  });

  const skillsSummary = Object.entries(skillCategoryMap).map(([category, val]) => ({
    category,
    averageLevel: Math.round(val.totalLevel / val.count),
    skillCount: val.count
  }));

  return {
    totalProjects,
    completedProjects,
    ongoingProjects,
    totalTechnologiesCount,
    techCategoryBreakdown,
    technologyDistribution,
    latestProject,
    recentWork,
    projectTimeline,
    skillsSummary
  };
}
