import { useState, useEffect } from 'react';

const isLandscapeOrientation = () => {
  // return true if the viewport is in a landscape orientation
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
    window.matchMedia('(orientation: landscape)').matches
  ) {
    return true;
  }
  return false;
};

export default function useViewportOrientation() {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation());

  function handleResize() {
    setIsLandscape(isLandscapeOrientation());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isLandscape;
}
