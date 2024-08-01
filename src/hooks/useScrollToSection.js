import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.split('#')[1];
    if (sectionId) {
      document.getElementById(sectionId).scrollIntoView();
    }
  }, []);
};
