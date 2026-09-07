import React from 'react';

const Global = () => {
  // Smooth scroll handler for the 1st button (Growing section)
  const scrollToGrowing = (e) => {
    e.preventDefault();
    const growingSection = document.getElementById('growing-section');
    if (growingSection) {
      growingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll handler for the 2nd button (GlobalJourney section)
  const scrollToJourney = (e) => {
    e.preventDefault();
    const journeySection = document.getElementById('global-journey-section');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#030712] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-white relative overflow-hidden flex items-center">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
            <span className="text-amber-400 text-xs">✨</span>
            <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase">YES TIME GLOBAL</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Global <span className="text-amber-400">Expansion</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
          </div>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl font-semibold text-amber-200/90 tracking-wide">
            Expanding Our Reach Beyond Borders
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
            YES TIME GLOBAL is expanding its presence across different countries, creating opportunities for wider international participation and building stronger global connections.
          </p>

          {/* Country Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>PK Pakistan</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>NP Nepal</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>ID Indonesia</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Future Countries</span>
            </div>
          </div>

          {/* Action Buttons with Smooth Scroll */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            
            {/* 1st Button: Scroll to Growing.jsx section */}
            <a
              href="#growing-section"
              onClick={scrollToGrowing}
              className="px-6 py-3.5 bg-amber-500 text-black rounded-full font-bold text-sm shadow-lg hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer text-center"
            >
              <span>Explore Global Presence</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* 2nd Button: Scroll to GlobalJourney.jsx section */}
            <a
              href="#global-journey-section"
              onClick={scrollToJourney}
              className="px-6 py-3.5 bg-neutral-900/90 text-white border border-neutral-800 rounded-full font-bold text-sm shadow-md hover:bg-neutral-800 hover:border-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center cursor-pointer text-center"
            >
              <span>Our Global Journey</span>
            </a>

          </div>

        </div>

        {/* Right Column: Animated Globe Widget */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[450px] sm:min-h-[520px]">
          
          {/* Globe Background Image / Atmosphere Simulation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none">
            <div className="w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-gradient-to-tr from-blue-950 via-neutral-900 to-amber-900/30 border border-neutral-800 shadow-[0_0_80px_rgba(245,158,11,0.15)] flex items-center justify-center relative overflow-hidden">
              
              {/* Spinning / Rotating Background Grid Lines */}
              <div className="absolute inset-0 border border-amber-500/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-dashed border-neutral-700/60 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 border border-neutral-800 rounded-full"></div>
            </div>
          </div>

          {/* Floating Rotating Center Radar/Wheel Container */}
          <div className="relative z-20 flex items-center justify-center animate-[bounce_4s_ease-in-out_infinite]">
            
            {/* Outer Orbiting Ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-amber-500/30 animate-[spin_15s_linear_infinite]">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
            </div>

            {/* Middle Orbiting Ring */}
            <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border border-dashed border-amber-500/40 animate-[spin_10s_linear_infinite_reverse]"></div>

            {/* Central Main Gold Wheel Element */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-neutral-900 to-black border-2 border-amber-500/80 shadow-[0_0_40px_rgba(245,158,11,0.3)] flex items-center justify-center animate-[spin_25s_linear_infinite]">
              <div className="w-28 h-28 sm:w-34 sm:h-34 rounded-full border border-amber-500/40 flex items-center justify-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>

          </div>

          {/* Floating Country Nodes / Tooltips */}
          <div className="absolute left-4 sm:left-8 top-1/3 z-30 bg-neutral-900/90 border border-neutral-700/80 px-3.5 py-2 rounded-xl shadow-xl flex items-center space-x-2.5 backdrop-blur-md animate-[pulse_3s_ease-in-out_infinite]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"></span>
            <span className="text-xs font-bold text-white tracking-wide">Pakistan</span>
          </div>

          <div className="absolute right-8 sm:right-16 top-1/4 z-30 bg-neutral-900/90 border border-neutral-700/80 px-3.5 py-2 rounded-xl shadow-xl flex items-center space-x-2.5 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"></span>
            <span className="text-xs font-bold text-white tracking-wide">Nepal</span>
          </div>

          <div className="absolute right-12 sm:right-20 bottom-1/4 z-30 bg-neutral-900/90 border border-neutral-700/80 px-3.5 py-2 rounded-xl shadow-xl flex items-center space-x-2.5 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
            <span className="text-xs font-bold text-white tracking-wide">Indonesia</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Global;