import React, { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import useViewportOrientation from '../../hooks/useViewportOrientation';
import SimpleSlider from './SimpleSlider';
import RotateScreen from '../RotateScreen';

const About = () => {
  const { value: bestScore, setValue: setBestScore } = useLocalStorage('bestscore', null);
  const isLandscape = useViewportOrientation();

  // You will be redirect to this page if you play for the first time (bestscore is null).
  // To avoid being redirect here again, set bestScore to 0.
  useEffect(() => {
    if (bestScore === null) {
      setBestScore(0);
    }
  });

  return <>{isLandscape ? <RotateScreen /> : <SimpleSlider />}</>;
};

export default About;
