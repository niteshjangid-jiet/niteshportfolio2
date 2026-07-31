import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail, FiExternalLink } from 'react-icons/fi';
import { cn } from '../../../utils/cn';

export interface SocialButtonProps {
  platform: 'GitHub' | 'LinkedIn' | 'Instagram' | 'Email' | string;
  url: string;
  label?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  platform,
  url,
  label,
  iconOnly = false,
  size = 'md',
  className,
}) => {
  const getIcon = () => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <SiGithub />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'instagram':
        return <SiInstagram />;
      case 'email':
      case 'mail':
        return <FiMail />;
      default:
        return <FiExternalLink />;
    }
  };

  const sizes = {
    sm: 'p-2 text-sm',
    md: 'p-2.5 text-base',
    lg: 'px-4 py-2.5 text-sm gap-2',
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${platform} Profile - Nitesh Jangid`}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center justify-center rounded-lg bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
        sizes[size],
        className
      )}
    >
      <span className="text-current text-lg">{getIcon()}</span>
      {!iconOnly && (
        <span className="font-medium">{label || platform}</span>
      )}
    </motion.a>
  );
};
