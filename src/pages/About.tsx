import React from 'react';
import { AboutSection } from '../components/ui/About/AboutSection';
import { usePageTitle } from '../hooks/usePageTitle';

export const About: React.FC = () => {
  usePageTitle('About Me');

  return (
    <div className="pt-16">
      <AboutSection />
    </div>
  );
};

export default About;
