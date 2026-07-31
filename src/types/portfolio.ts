export type ProjectStatus = 'Completed' | 'In Progress' | 'Featured' | 'Maintained';
export type SkillCategory = 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Machine Learning';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: 'Frontend' | 'Fullstack' | 'AI/ML' | 'Mobile' | 'Backend';
  status: ProjectStatus;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  date: string; // ISO or YYYY-MM
  metrics?: {
    users?: string;
    accuracy?: string;
    speedup?: string;
    stars?: number;
  };
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0 - 100 percentage
  iconName: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  status: string;
  gpa?: string;
  highlights: string[];
  location: string;
  logo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badge?: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}
