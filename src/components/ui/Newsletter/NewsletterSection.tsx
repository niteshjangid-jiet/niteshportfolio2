import React, { useState } from 'react';
import { Card } from '../../common/Card/Card';
import { Button } from '../../common/Button/Button';
import { FiMail, FiCheck } from 'react-icons/fi';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <Card variant="gradient" className="p-8 md:p-12 text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-cyan-100/80 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/60">
          // TECH UPDATES & RESEARCH
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Subscribe to Engineering Briefings
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Get occasional updates on AI/ML research, TypeScript fullstack patterns, and new open-source releases.
        </p>

        {subscribed ? (
          <div className="p-4 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-mono flex items-center justify-center gap-2">
            <FiCheck className="text-lg" /> Subscribed successfully to developer updates!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm"
            />
            <Button variant="primary" size="md" className="shrink-0 w-full sm:w-auto" icon={<FiMail />}>
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </Card>
  );
};
