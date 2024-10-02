import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const isBrowser = typeof window !== 'undefined';

  const [isMobile, setIsMobile] = useState(
    isBrowser ? window.matchMedia('(any-pointer:coarse)').matches : undefined
  );
  const [antiSkillsBoxCollision, setAntiSkillsBoxCollision] = useState(
    isBrowser ? window.matchMedia('(any-pointer:coarse)').matches : undefined
  );

  useEffect(() => {
    const handleResize = () => {
      let heightOrWidthMobile = false
      if ((window.innerHeight < 1050 || window.innerWidth < 1050) && window.matchMedia('(any-pointer:coarse)').matches) {
        setAntiSkillsBoxCollision(true);
        heightOrWidthMobile = true
      } else {
        setAntiSkillsBoxCollision(false);
      }
      setIsMobile(heightOrWidthMobile ? true : window.matchMedia('(any-pointer:coarse)').matches);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    antiSkillsBoxCollision
  };
};
