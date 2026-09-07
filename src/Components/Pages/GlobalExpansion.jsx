import React from 'react';
import Global from '../Business Page/Global Expansion/Global';
import Growing from '../Business Page/Global Expansion/Growing';
import Oppurtunities from '../Business Page/Global Expansion/Oppurtunities';
import GlobalJourney from '../Business Page/Global Expansion/GlobalJourney';

const GlobalExpansion = () => {
  return (
    <div>
      <Global />
      
      <div id="growing-section">
        <Growing />
      </div>

      <Oppurtunities />

      <div id="global-journey-section">
        <GlobalJourney />
      </div>
    </div>
  );
}

export default GlobalExpansion;