import { Achievement, Experience } from '../types/portfolio';

export const achievementsData: Achievement[] = [
  {
    id: '1',
    title: 'AI Innovation Hackathon Finalist',
    organization: 'JIET Tech Summit',
    date: '2025',
    description: 'Engineered an AI-driven Smart Attendance system with 98%+ facial recognition precision in real-time edge environments.',
    badge: 'Hackathon Award'
  },
  {
    id: '2',
    title: 'Open Source Fullstack Contributor',
    organization: 'GitHub Tech Community',
    date: '2025 - Present',
    description: 'Built 6 production-grade public fullstack and computer vision applications deployed across Vercel, Netlify, and Streamlit.',
    badge: 'Community'
  },
  {
    id: '3',
    title: 'Academic Excellence in AI & Machine Learning',
    organization: 'JIET Jodhpur',
    date: '2024 - 2028',
    description: 'Consistently maintained top percentile academic performance with specialization in Deep Learning, Data Structures, and Algorithms.',
    badge: 'Academic'
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack & AI Engineer Intern',
    company: 'NextGen Tech Solutions',
    period: '2025 - Present',
    location: 'Remote / India',
    description: [
      'Architected scalable React + TypeScript frontends integrated with Node/Supabase backends.',
      'Developed automated computer vision workflows using OpenCV & Python microservices.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    role: 'Software Developer Developer',
    company: 'JIET AI Labs',
    period: '2024 - 2025',
    location: 'Jodhpur, India',
    description: [
      'Built financial prediction algorithms using LSTM neural networks and time-series statistical models.',
      'Designed responsive dashboard UIs adhering to accessibility (WCAG 2.1) standards.'
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-Learn', 'React', 'MySQL']
  }
];
