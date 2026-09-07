  import React from "react";
  import  Connect  from "../Homepage/Connect";
  import  Time  from "../Homepage/Time";
  import  Program  from "../Homepage/Program";
  import  Join  from "../Homepage/Join";
  import  People  from "../Homepage/People";
  import  Works  from "../Homepage/Works";
  import  Journey  from "../Homepage/Journey";


  const Homepage = () => {
    return (
      <div>
        <Connect />
        <Time/>
        <Program/>
        <Join/>
        <People/>
        <Works/>
        <Journey/>
      </div>
    );
  };

  export default Homepage;