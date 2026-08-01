import React from 'react';
import { FiShieldOff, FiRefreshCw, FiAlertTriangle, FiLock } from 'react-icons/fi';
import { resetSecuritySession } from '../../../utils/integrityObserver';

export const SecurityErrorPage: React.FC<{ reason?: string }> = ({ reason }) => {
  const handleReset = () => {
    resetSecuritySession();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-lg w-full bg-slate-900/90 backdrop-blur-2xl border border-red-500/30 rounded-2xl p-8 shadow-2xl space-y-6 relative z-10 text-center">
        {/* Icon Header */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-500 shadow-lg shadow-red-950/50">
            <FiShieldOff className="w-10 h-10 animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 p-1.5 rounded-full bg-red-600 text-white text-xs">
            <FiLock className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <span className="px-3 py-1 text-xs font-mono rounded-full bg-red-950/80 border border-red-800/80 text-red-400 font-semibold tracking-wider uppercase inline-block">
            Security Lockdown Mode
          </span>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Security Validation Failed
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Unauthorized client-side modification or DevTools tampering was detected on critical elements. Access has been restricted to enforce application integrity and data security.
          </p>
        </div>

        {/* Technical Error Details */}
        {reason && (
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-semibold mb-1">
              <FiAlertTriangle className="shrink-0" />
              <span>Violation Specification:</span>
            </div>
            <p className="text-xs font-mono text-slate-400 break-all leading-normal">
              {reason}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={handleReset}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95"
          >
            <FiRefreshCw className="w-4 h-4" />
            <span>Reset Session & Restore Application</span>
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] font-mono text-slate-500">
          Client Runtime Guard &bull; Integrity Hash Engine
        </p>
      </div>
    </div>
  );
};
