import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'iris365',
    title: 'IRIS365',
    description: 'AI-driven operational analytics and enterprise intelligence platform designed for seamless automated data workflows.',
    longDescription: 'IRIS365 is a high-performance intelligence suite providing real-time data insights, machine learning anomaly detection, and unified telemetry for modern web applications.',
    image: '/images/projects/iris365.webp',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Node', 'Supabase', 'Python', 'OpenCV'],
    category: 'AI/ML',
    status: 'Completed',
    liveUrl: 'https://iris365.netlify.app/',
    githubUrl: 'https://github.com/niteshjangid-jiet',
    featured: true,
    date: '2026-05',
    metrics: {
      users: '1.2k+',
      accuracy: '99.4%',
      speedup: '3.2x'
    }
  },
  {
    id: 'gymfinder',
    title: 'Gym Finder',
    description: 'Interactive fitness ecosystem enabling users to discover nearby gyms, compare membership plans, and track workout schedules.',
    longDescription: 'Location-aware fullstack application with real-time mapping, membership booking integration, and custom gym owner management dashboard.',
    image: '/images/projects/gymfinder.webp',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Node', 'Express', 'Supabase', 'MySQL'],
    category: 'Fullstack',
    status: 'Completed',
    liveUrl: 'https://gyymfind.netlify.app/',
    githubUrl: 'https://github.com/niteshjangid-jiet',
    featured: true,
    date: '2026-04',
    metrics: {
      users: '2.5k+',
      speedup: '150ms latency'
    }
  },
  {
    id: 'hotelbooking',
    title: 'Hotel Booking Platform',
    description: 'Sleek luxury hotel reservation engine featuring real-time room availability, filterable amenities, and secure guest checkout.',
    longDescription: 'Production-grade hospitality booking web portal built with role-based access control, booking confirmation workflows, and payment handling.',
    image: '/images/projects/hotelbooking.webp',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Node', 'Supabase', 'Express'],
    category: 'Frontend',
    status: 'Completed',
    liveUrl: 'https://allhotelbooking.netlify.app/',
    githubUrl: 'https://github.com/niteshjangid-jiet',
    featured: true,
    date: '2026-03',
    metrics: {
      users: '3.8k+',
      speedup: '98% Lighthouse'
    }
  },
  {
    id: 'smartattendance',
    title: 'Smart Attendance System',
    description: 'Biometric facial-recognition automated attendance tracking tool leveraging computer vision models for fast non-intrusive logging.',
    longDescription: 'AI-powered computer vision system capable of real-time multi-face identification, liveness verification, and instant attendance report exports.',
    image: '/images/projects/smartattendance.webp',
    technologies: ['Python', 'OpenCV', 'Scikit Learn', 'TensorFlow', 'React', 'Tailwind', 'SQL'],
    category: 'AI/ML',
    status: 'Completed',
    liveUrl: 'https://smartattendancesyste.netlify.app/',
    githubUrl: 'https://github.com/niteshjangid-jiet',
    featured: true,
    date: '2026-02',
    metrics: {
      accuracy: '98.7%',
      speedup: '0.2s detection'
    }
  },
  {
    id: 'stockshare',
    title: 'Stock Share Prediction',
    description: 'Machine Learning powered financial forecasting tool offering time-series predictive modeling for equity market trends.',
    longDescription: 'Financial analytics workspace incorporating LSTM neural networks and Streamlit visualizer to deliver actionable stock trajectory forecasts.',
    image: '/images/projects/stockshare.webp',
    technologies: ['Python', 'TensorFlow', 'Scikit Learn', 'Streamlit', 'SQL'],
    category: 'AI/ML',
    status: 'Completed',
    liveUrl: 'https://stockshare.streamlit.app/',
    githubUrl: 'https://github.com/niteshjangid-jiet',
    featured: false,
    date: '2026-01',
    metrics: {
      accuracy: '94.2% MSE',
      users: '800+'
    }
  },
  {
    id: 'mobileauth',
    title: 'Mobile Authentication Portal',
    description: 'Zero-trust biometric & OTP mobile authentication security platform built with strict token validation and session protection.',
    longDescription: 'High-security multi-factor authentication web gateway engineered for cross-device authentication, JWT key rotation, and encrypted token storage.',
    image: '/images/projects/mobileauth.webp',
    technologies: ['React', 'TypeScript', 'Node', 'Express', 'Supabase', 'Tailwind'],
    category: 'Backend',
    status: 'Completed',
    liveUrl: 'https://mobileauth.netlify.app/',
    githubUrl: 'https://github.com/niteshjangid-jiet',
    featured: false,
    date: '2025-11',
    metrics: {
      users: '5.0k+',
      speedup: '100% Secure'
    }
  }
];
