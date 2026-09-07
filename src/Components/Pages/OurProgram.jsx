import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Programs from '../Programpage/Our Programs/Programs';
import Design from '../Programpage/Our Programs/Design';
import Works from '../Homepage/Works';
import Journey from '../Homepage/Journey';

const OurProgram = () => {
  const location = useLocation();
  const designRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToDesign && designRef.current) {
      designRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Programs />
      
      <div ref={designRef}>
        <Design />
      </div>

      <Works />
      <Journey />
    </div>
  );
};

export default OurProgram;