import { CANONICAL_PROJECTS, validateProjectCardData } from './securityLedger';

const SEC_TAMPER_FLAG = 'portfolio_sec_tamper_flag';
const SEC_TAMPER_COUNT = 'portfolio_sec_tamper_count';
const SEC_RELOAD_FLAG = 'portfolio_sec_reload_flag';

export interface IntegrityViolationHandler {
  (reason: string, isLockdownRequired: boolean): void;
}

/**
 * Gets current tamper attempt count in this session
 */
export function getTamperCount(): number {
  try {
    const val = sessionStorage.getItem(SEC_TAMPER_COUNT);
    return val ? parseInt(val, 10) : 0;
  } catch {
    return 0;
  }
}

/**
 * Checks if the page was previously reloaded due to a security violation
 */
export function wasReloadedDueToTamper(): boolean {
  try {
    return sessionStorage.getItem(SEC_RELOAD_FLAG) === 'true';
  } catch {
    return false;
  }
}

/**
 * Resets tamper tracking state (used on manual lockdown reset)
 */
export function resetSecuritySession(): void {
  try {
    sessionStorage.removeItem(SEC_TAMPER_FLAG);
    sessionStorage.removeItem(SEC_TAMPER_COUNT);
    sessionStorage.removeItem(SEC_RELOAD_FLAG);
  } catch (err) {
    console.error('Failed to reset security session:', err);
  }
}

/**
 * Record a security violation event
 */
function recordTamperEvent(): { count: number; isLockdownRequired: boolean } {
  let count = 1;
  let wasReloaded = false;
  try {
    const existingCount = getTamperCount();
    wasReloaded = sessionStorage.getItem(SEC_RELOAD_FLAG) === 'true';
    count = existingCount + 1;

    sessionStorage.setItem(SEC_TAMPER_COUNT, count.toString());
    sessionStorage.setItem(SEC_TAMPER_FLAG, 'true');
    sessionStorage.setItem(SEC_RELOAD_FLAG, 'true');
  } catch (e) {
    console.error('Storage error during security tracking:', e);
  }

  // Lockdown if tampered twice or if reloading didn't fix persistent failure
  const isLockdownRequired = count >= 2 || wasReloaded;
  return { count, isLockdownRequired };
}

/**
 * Perform audit scan on rendered DOM elements
 */
export function auditDOMIntegrity(): { isValid: boolean; reason?: string } {
  if (typeof document === 'undefined') return { isValid: true };

  // 1. Audit Project Cards & Links
  const projectCards = document.querySelectorAll('[data-project-id]');
  for (let i = 0; i < projectCards.length; i++) {
    const card = projectCards[i] as HTMLElement;
    const projectId = card.getAttribute('data-project-id');
    if (!projectId || !CANONICAL_PROJECTS[projectId]) {
      return { isValid: false, reason: `Unrecognized or modified project card ID: ${projectId}` };
    }

    const canonical = CANONICAL_PROJECTS[projectId];

    // Audit live link
    const liveLink = card.querySelector<HTMLAnchorElement>('[data-security-link="project-live"]');
    if (liveLink) {
      const href = liveLink.getAttribute('href');
      if (href !== canonical.liveUrl) {
        return {
          isValid: false,
          reason: `Project link altered for [${projectId}]. Expected '${canonical.liveUrl}', found '${href}'`,
        };
      }
    }

    // Audit github link
    const githubLink = card.querySelector<HTMLAnchorElement>('[data-security-link="project-github"]');
    if (githubLink) {
      const href = githubLink.getAttribute('href');
      if (canonical.githubUrl && href !== canonical.githubUrl) {
        return {
          isValid: false,
          reason: `GitHub link altered for [${projectId}]. Expected '${canonical.githubUrl}', found '${href}'`,
        };
      }
    }
  }

  // 2. Audit standalone social or project links tagged with expected hrefs
  const securityLinks = document.querySelectorAll<HTMLAnchorElement>('[data-security-link][data-expected-href]');
  for (let i = 0; i < securityLinks.length; i++) {
    const link = securityLinks[i];
    const expected = link.getAttribute('data-expected-href');
    const actual = link.getAttribute('href');
    if (expected && actual !== expected) {
      return {
        isValid: false,
        reason: `Protected link modified. Expected '${expected}', found '${actual}'`,
      };
    }
  }

  return { isValid: true };
}

/**
 * Main initialization for runtime integrity observer
 */
export function initSecurityObserver(onViolation: IntegrityViolationHandler): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  let isTriggered = false;

  const triggerViolation = (reason: string) => {
    if (isTriggered) return;
    isTriggered = true;

    const { count, isLockdownRequired } = recordTamperEvent();
    console.warn(`[Security Guard Alert] DOM Tampering Detected: ${reason} (Attempt #${count})`);
    
    onViolation(reason, isLockdownRequired);
  };

  // 1. Initial boot audit
  const initialAudit = auditDOMIntegrity();
  if (!initialAudit.isValid && initialAudit.reason) {
    triggerViolation(initialAudit.reason);
  }

  // 2. Setup MutationObserver for DevTools element / attribute modification
  const observer = new MutationObserver((mutations) => {
    if (isTriggered) return;

    for (const mutation of mutations) {
      const target = mutation.target as HTMLElement;

      // Check if mutation targets a protected card or link or their subtrees
      const protectedCard = target.closest ? target.closest('[data-project-id]') : null;
      const protectedLink = target.closest ? target.closest('[data-security-link]') : null;

      if (protectedCard || protectedLink || target.getAttribute?.('data-project-id') || target.getAttribute?.('data-security-link')) {
        // Run detailed audit
        const audit = auditDOMIntegrity();
        if (!audit.isValid && audit.reason) {
          triggerViolation(audit.reason);
          break;
        }

        // Also check if critical attributes were modified directly
        if (mutation.type === 'attributes') {
          const attr = mutation.attributeName;
          if (attr === 'href' || attr === 'data-project-id' || attr === 'data-expected-href' || attr === 'target' || attr === 'style' || attr === 'class') {
            const auditRes = auditDOMIntegrity();
            if (!auditRes.isValid && auditRes.reason) {
              triggerViolation(auditRes.reason);
              break;
            }
          }
        }

        // Check if nodes were deleted or replaced
        if (mutation.type === 'childList') {
          const auditRes = auditDOMIntegrity();
          if (!auditRes.isValid && auditRes.reason) {
            triggerViolation(auditRes.reason);
            break;
          }
        }

        // Check if character text was edited via DevTools text node inspector
        if (mutation.type === 'characterData') {
          const auditRes = auditDOMIntegrity();
          if (!auditRes.isValid && auditRes.reason) {
            triggerViolation(auditRes.reason);
            break;
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
    attributeFilter: ['href', 'target', 'data-project-id', 'data-security-link', 'data-expected-href', 'class', 'style', 'id'],
  });

  // 3. Periodic Audit Interval (scans for out-of-band modifications or bypassed observers)
  const auditInterval = setInterval(() => {
    if (isTriggered) return;
    const audit = auditDOMIntegrity();
    if (!audit.isValid && audit.reason) {
      triggerViolation(audit.reason);
    }
  }, 600);

  // 4. Capture Click Handler (Interception before navigation)
  const handleGlobalClick = (e: MouseEvent) => {
    if (isTriggered) return;

    let target = e.target as HTMLElement | null;
    while (target && target !== document.body) {
      if (target.tagName === 'A') {
        const anchor = target as HTMLAnchorElement;
        const projectId = anchor.getAttribute('data-project-id') || anchor.closest('[data-project-id]')?.getAttribute('data-project-id');
        
        if (projectId && CANONICAL_PROJECTS[projectId]) {
          const canonical = CANONICAL_PROJECTS[projectId];
          const isGithub = anchor.getAttribute('data-security-link') === 'project-github';
          const expectedUrl = isGithub ? canonical.githubUrl : canonical.liveUrl;
          const currentHref = anchor.getAttribute('href');

          if (expectedUrl && currentHref !== expectedUrl) {
            e.preventDefault();
            e.stopPropagation();
            triggerViolation(`Altered link destination intercepted on click for project '${projectId}'`);
            return;
          }
        }

        const expectedHref = anchor.getAttribute('data-expected-href');
        const currentHref = anchor.getAttribute('href');
        if (expectedHref && currentHref !== expectedHref) {
          e.preventDefault();
          e.stopPropagation();
          triggerViolation(`Altered link destination intercepted on click. Expected '${expectedHref}', found '${currentHref}'`);
          return;
        }
      }
      target = target.parentElement;
    }
  };

  window.addEventListener('click', handleGlobalClick, { capture: true });

  // Return cleanup function
  return () => {
    observer.disconnect();
    clearInterval(auditInterval);
    window.removeEventListener('click', handleGlobalClick, { capture: true });
  };
}
