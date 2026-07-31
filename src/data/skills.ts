import { Skill } from '../types/portfolio';

export const skillsData: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', level: 92, iconName: 'SiPython', featured: true },
  { name: 'Java', category: 'Languages', level: 85, iconName: 'FaJava', featured: true },
  { name: 'JavaScript', category: 'Languages', level: 95, iconName: 'SiJavascript', featured: true },
  { name: 'C', category: 'Languages', level: 80, iconName: 'SiC', featured: false },
  { name: 'SQL', category: 'Languages', level: 88, iconName: 'SiMysql', featured: true },

  // Frontend
  { name: 'React', category: 'Frontend', level: 94, iconName: 'SiReact', featured: true },
  { name: 'HTML', category: 'Frontend', level: 98, iconName: 'SiHtml5', featured: false },
  { name: 'CSS', category: 'Frontend', level: 95, iconName: 'SiCss3', featured: false },
  { name: 'Tailwind', category: 'Frontend', level: 92, iconName: 'SiTailwindcss', featured: true },

  // Backend
  { name: 'Node', category: 'Backend', level: 88, iconName: 'SiNodedotjs', featured: true },
  { name: 'Express', category: 'Backend', level: 86, iconName: 'SiExpress', featured: true },
  { name: 'Supabase', category: 'Backend', level: 90, iconName: 'SiSupabase', featured: true },

  // Database
  { name: 'MySQL', category: 'Database', level: 85, iconName: 'SiMysql', featured: true },
  { name: 'Supabase DB', category: 'Database', level: 90, iconName: 'SiSupabase', featured: false },

  // Tools
  { name: 'Git', category: 'Tools', level: 90, iconName: 'SiGit', featured: true },
  { name: 'GitHub', category: 'Tools', level: 94, iconName: 'SiGithub', featured: true },
  { name: 'VS Code', category: 'Tools', level: 96, iconName: 'SiVisualstudiocode', featured: false },

  // Machine Learning
  { name: 'OpenCV', category: 'Machine Learning', level: 88, iconName: 'SiOpencv', featured: true },
  { name: 'Scikit Learn', category: 'Machine Learning', level: 86, iconName: 'SiScikitlearn', featured: true },
  { name: 'TensorFlow', category: 'Machine Learning', level: 82, iconName: 'SiTensorflow', featured: true }
];
