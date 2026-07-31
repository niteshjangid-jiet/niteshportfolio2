import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Nitesh Jangid - Software Developer & AI Specialist`;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
