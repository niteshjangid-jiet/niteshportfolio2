import { registerSW } from 'virtual:pwa-register';

export function setupSW() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    const updateSW = registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('[PWA] New version available, updating automatically...');
        updateSW(true);
      },
      onOfflineReady() {
        console.log('[PWA] Portfolio application ready to work offline.');
      },
      onRegisterError(error) {
        console.error('[PWA] Service Worker registration failed:', error);
      },
    });
  }
}
