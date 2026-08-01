import React, { useEffect, useState } from 'react';
import {
  initSecurityObserver,
  wasReloadedDueToTamper,
  auditDOMIntegrity,
} from '../../../utils/integrityObserver';
import { SecurityErrorPage } from './SecurityErrorPage';
import { SecurityTamperOverlay } from './SecurityTamperOverlay';

export interface SecurityGuardProps {
  children: React.ReactNode;
}

export const SecurityGuard: React.FC<SecurityGuardProps> = ({ children }) => {
  const [isLockdown, setIsLockdown] = useState<boolean>(false);
  const [isTampered, setIsTampered] = useState<boolean>(false);
  const [violationReason, setViolationReason] = useState<string>('');

  useEffect(() => {
    // Check if the page reloaded after a previous tamper attempt
    const wasReloaded = wasReloadedDueToTamper();

    // Perform an immediate initial check on load
    const initialCheck = auditDOMIntegrity();
    if (!initialCheck.isValid && initialCheck.reason) {
      setViolationReason(initialCheck.reason);
      if (wasReloaded) {
        // If check fails immediately after reload, show Security Error Page
        setIsLockdown(true);
        return;
      }
    }

    // Initialize observers & event listeners
    const cleanup = initSecurityObserver((reason, isLockdownRequired) => {
      setViolationReason(reason);

      if (isLockdownRequired || wasReloaded) {
        setIsLockdown(true);
      } else {
        setIsTampered(true);
        // Freeze pointer interactions
        document.body.style.pointerEvents = 'none';
        document.body.style.userSelect = 'none';

        // Auto reload after 1.5 seconds
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });

    return () => {
      cleanup();
    };
  }, []);

  if (isLockdown) {
    return <SecurityErrorPage reason={violationReason} />;
  }

  return (
    <>
      {isTampered && <SecurityTamperOverlay message="Security validation failed. Reloading..." />}
      {children}
    </>
  );
};
