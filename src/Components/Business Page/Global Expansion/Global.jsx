import React from 'react';

// hero-yes.webp ko src/assets se direct import kiya gaya hai
import heroYesBg from '/src/assets/hero-yes.webp';

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
    <div className="relative w-full min-h-[550px] lg:min-h-[650px] bg-[#010711] text-white overflow-hidden flex items-center py-16">
      
      {/* Background World Map Image / Globe effect on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none opacity-40 lg:opacity-70">
        <div className="absolute inset-0 bg-gradient-to-r from-[#010711] via-[#010711]/60 to-transparent z-10" />
        <img 
          src={heroYesBg} 
          alt="World Globe Background" 
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 w-full">
        <div className="max-w-2xl space-y-6">
          
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
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
          </div>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl font-semibold text-amber-200/90 tracking-wide">
            Expanding Our Reach Beyond Borders
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
            YES TIME GLOBAL is expanding its presence across different countries, creating opportunities for wider international participation and building stronger global connections.
          </p>

          {/* Country Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>PK Pakistan</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>NP Nepal</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>ID Indonesia</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-gray-300 hover:border-amber-500/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Future Countries</span>
            </div>
          </div>

          {/* Action Buttons with Smooth Scroll */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            
            {/* 1st Button */}
            <a
              href="#growing-section"
              onClick={scrollToGrowing}
              className="px-6 py-3.5 bg-amber-500 text-black rounded-full font-bold text-sm shadow-lg hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer text-center"
            >
              <span>Explore Global Presence</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* 2nd Button */}
            <a
              href="#global-journey-section"
              onClick={scrollToJourney}
              className="px-6 py-3.5 bg-neutral-900/90 text-white border border-neutral-800 rounded-full font-bold text-sm shadow-md hover:bg-neutral-800 hover:border-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center cursor-pointer text-center"
            >
              <span>Our Global Journey</span>
            </a>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Global;