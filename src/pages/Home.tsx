import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hero } from '../components/ui/Hero/Hero';
import { ProjectGrid } from '../components/ui/ProjectGrid/ProjectGrid';
import { SkillsGrid } from '../components/ui/Skills/SkillsGrid';
import { EducationTimeline } from '../components/ui/Education/EducationTimeline';
import { ExperienceSection } from '../components/ui/Experience/ExperienceSection';
import { AchievementsSection } from '../components/ui/Achievements/AchievementsSection';
import { SectionTitle } from '../components/common/SectionTitle/SectionTitle';
import { Button } from '../components/common/Button/Button';
import { NewsletterSection } from '../components/ui/Newsletter/NewsletterSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { FiArrowRight, FiGrid, FiBookOpen, FiBriefcase, FiAward } from 'react-icons/fi';

export const Home: React.FC = () => {
  usePageTitle('Home');

  return (
    <div className="space-y-24 pb-16">
      {/* 1. Fullscreen Hero Section */}
      <Hero />

      {/* 2. Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FEATURED WORK"
          title="Engineered Solutions & Applications"
          subtitle="Explore selected production-grade projects spanning AI/ML, Fullstack Web, and Computer Vision."
        />
        
        <ProjectGrid />
      </section>

      {/* 3. Technical Skills Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="TECHNICAL STACK"
          title="Languages, Frameworks & AI Tools"
          subtitle="Categorized proficiency built through production code and applied machine learning."
        />

        <SkillsGrid />
      </section>

      {/* 4. Experience & Education Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <FiBookOpen className="text-indigo-600 dark:text-indigo-400" />
              Education Timeline
            </h3>
            <EducationTimeline />
          </div>

          {/* Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <FiBriefcase className="text-cyan-600 dark:text-cyan-400" />
              Experience & Roles
            </h3>
            <ExperienceSection />
          </div>
        </div>
      </section>

      {/* 5. Achievements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="RECOGNITION"
          title="Achievements & Milestones"
          subtitle="Hackathon accolades, open-source contributions, and academic excellence."
        />

        <AchievementsSection />
      </section>

      {/* 6. Newsletter CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection />
      </section>
    </div>
  );
};

export default Home;
