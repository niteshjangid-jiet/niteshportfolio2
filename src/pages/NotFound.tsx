import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/common/Card/Card';
import { Button } from '../components/common/Button/Button';
import { usePageTitle } from '../hooks/usePageTitle';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';

export const NotFound: React.FC = () => {
  usePageTitle('404 Not Found');

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <Card variant="glass" className="max-w-md w-full text-center p-8 space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto text-3xl">
          <FiAlertTriangle />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-red-400 tracking-widest uppercase">
            // ERROR 404
          </span>
          <h1 className="text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The route you are trying to access does not exist or has been relocated.
          </p>
        </div>

        <NavLink to="/" className="inline-block">
          <Button variant="primary" size="md" icon={<FiHome />}>
            Back to Home
          </Button>
        </NavLink>
      </Card>
    </div>
  );
};

export default NotFound;
