import { useState, useEffect } from 'react';

const usePrefersDarkMode = (): boolean => {
  const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersDarkMode(event.matches);
    };

    // Set initial mode correctly
    setPrefersDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange); // Listen for changes

    return () => {
      mediaQuery.removeEventListener('change', handleChange); // Cleanup listener on unmount
    };
  }, []);

  return prefersDarkMode;
};

export default usePrefersDarkMode;
