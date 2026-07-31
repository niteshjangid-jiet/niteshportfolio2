import React from 'react';
import { ProjectGrid } from '../components/ui/ProjectGrid/ProjectGrid';
import { SectionTitle } from '../components/common/SectionTitle/SectionTitle';
import { usePageTitle } from '../hooks/usePageTitle';

export const Projects: React.FC = () => {
  usePageTitle('Projects');

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionTitle
        badge="PORTFOLIO ARCHIVE"
        title="Featured Software & AI Projects"
        subtitle="A collection of web applications, AI models, and computer vision systems built with React, TypeScript, Python, and Supabase."
      />

      <ProjectGrid />
    </div>
  );
};

export default Projects;
