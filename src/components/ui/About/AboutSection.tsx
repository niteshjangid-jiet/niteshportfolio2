import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../common/SectionTitle/SectionTitle';
import { Card } from '../../common/Card/Card';
import { QUICK_STATS, CAREER_OBJECTIVE, CORE_STRENGTHS } from '../../../constants';
import { educationData } from '../../../data/education';
import { FiCheckCircle, FiAward, FiBookOpen, FiCpu, FiCode } from 'react-icons/fi';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#07090e] border-t border-slate-900" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle
          badge="ABOUT ME"
          title="Engineered for Scalability & Innovation"
          subtitle="A peek into my background, core engineering strengths, and career objectives."
        />

        {/* Top Grid: Profile & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Profile Photo & Quick Info Card */}
          <div className="lg:col-span-5">
            <Card variant="glass" className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md border border-indigo-400/30">
                  NJ
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-slate-900">Nitesh Jangid</h3>
                  <p className="text-sm font-mono text-indigo-400">Software Developer & AI Specialist</p>
                  <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-500 mt-1">JIET Jodhpur &bull; B.Tech CSE (AI & ML)</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 dark:border-slate-800 border-slate-200 space-y-3">
                <p className="text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500 uppercase tracking-wider">Career Objective</p>
                <p className="text-sm text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed italic bg-slate-950/60 dark:bg-slate-950/60 bg-slate-100 p-4 rounded-lg border border-slate-800/80 dark:border-slate-800/80 border-slate-200">
                  "{CAREER_OBJECTIVE}"
                </p>
              </div>
            </Card>
          </div>

          {/* Quick Stats & Detailed Intro */}
          <div className="lg:col-span-7 space-y-8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {QUICK_STATS.map((stat: { label: string; value: string }, idx: number) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 text-center hover:border-indigo-500/30 transition-colors"
                >
                  <p className="text-3xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-1 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Introduction paragraph */}
            <div className="prose prose-invert max-w-none text-slate-300 dark:text-slate-300 text-slate-700 space-y-4 text-base leading-relaxed">
              <p>
                I am a dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning at Jodhpur Institute of Engineering & Technology (JIET). My engineering philosophy blends linear minimalism with high-speed performance and robust fullstack architecture.
              </p>
              <p>
                Whether I am building computer vision facial-recognition microservices, real-time interactive SaaS platforms like <strong className="text-indigo-400 font-semibold">IRIS365</strong>, or luxury web ecosystems, my goal is always to write clean, maintainable, and type-safe TypeScript code.
              </p>
            </div>
          </div>

        </div>

        {/* Education Timeline Brief */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white dark:text-white text-slate-900 mb-6 flex items-center gap-2">
            <FiBookOpen className="text-indigo-400" />
            Education & Background
          </h3>

          {educationData.map((edu) => (
            <Card key={edu.id} variant="gradient" className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 dark:border-slate-800 border-slate-200 pb-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white dark:text-white text-slate-900">{edu.institution}</h4>
                  <p className="text-sm font-semibold text-indigo-400 mt-0.5">{edu.degree} &mdash; {edu.field}</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-indigo-950/80 dark:bg-indigo-950/80 bg-indigo-50 text-indigo-300 dark:text-indigo-300 text-indigo-700 border border-indigo-800/60 dark:border-indigo-800/60 border-indigo-200">
                    {edu.status}
                  </span>
                  <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-500 mt-1">{edu.startYear} - {edu.endYear} &bull; {edu.location}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500 uppercase tracking-wider">Key Highlights</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 text-slate-700 bg-slate-950/40 dark:bg-slate-950/40 bg-slate-50 p-3 rounded-lg border border-slate-800/60 dark:border-slate-800/60 border-slate-200">
                      <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Core Strengths */}
        <div>
          <h3 className="text-2xl font-bold text-white dark:text-white text-slate-900 mb-6 flex items-center gap-2">
            <FiAward className="text-cyan-400" />
            Core Technical Strengths
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_STRENGTHS.map((strength: { title: string; description: string }, idx: number) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card variant="glass" className="h-full p-6 hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-950/80 dark:bg-indigo-950/80 bg-indigo-50 border border-indigo-800/60 dark:border-indigo-800/60 border-indigo-200 flex items-center justify-center text-indigo-400 shrink-0">
                      {idx === 0 ? <FiCode className="w-5 h-5" /> : idx === 1 ? <FiCpu className="w-5 h-5" /> : <FiAward className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white dark:text-white text-slate-900">{strength.title}</h4>
                      <p className="text-sm text-slate-300 dark:text-slate-300 text-slate-600 mt-2 leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
