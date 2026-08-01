import React from 'react';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';

export interface SecurityTamperOverlayProps {
  message?: string;
}

export const SecurityTamperOverlay: React.FC<SecurityTamperOverlayProps> = ({
  message = 'Security validation failed. Reloading...',
}) => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none pointer-events-auto">
      <div className="max-w-md w-full bg-slate-900 border border-rose-500/40 rounded-2xl p-6 shadow-2xl space-y-4 text-center animate-in fade-in zoom-in duration-200">
        <div className="w-14 h-14 rounded-full bg-rose-950/80 border border-rose-500/50 flex items-center justify-center text-rose-500 mx-auto text-2xl shadow-lg shadow-rose-950/50">
          <FiAlertTriangle className="animate-bounce" />
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg font-bold text-white tracking-tight">
            Tamper Detection Triggered
          </h2>
          <p className="text-sm font-mono text-rose-300 font-medium">
            {message}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 pt-2">
          <FiRefreshCw className="animate-spin text-indigo-400" />
          <span>Restoring verified state...</span>
        </div>
      </div>
    </div>
  );
};
