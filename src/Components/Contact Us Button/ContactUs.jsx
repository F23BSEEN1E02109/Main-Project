import React, { useRef } from 'react';
import Contact from './Contact';
import InTouch from './InTouch';
import MapLocation from './MapLocation';

const ContactUs = () => {
  const inTouchRef = useRef(null);

  const handleScrollToInTouch = () => {
    inTouchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="contact" className="scroll-mt-20">
      <Contact scrollToInTouch={handleScrollToInTouch} />
      <div ref={inTouchRef}>
        <InTouch />
      </div>
      <MapLocation />
    </div>
  );
};

export default ContactUs;