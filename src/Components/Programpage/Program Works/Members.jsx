import React from 'react';

const Members = () => {
  return (
    <div className="relative w-full min-h-[500px] lg:min-h-[600px] bg-[#010711] text-white overflow-hidden flex items-center">
      
      {/* Background World Map Image / Globe effect on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none opacity-40 lg:opacity-70">
        <div className="absolute inset-0 bg-gradient-to-r from-[#010711] via-[#010711]/60 to-transparent z-10" />
        <img 
          src="/src/assets/hero.png" 
          alt="World Globe Background" 
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 py-16 w-full text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          
          {/* Top Tag Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-[#0c0d0e]/80 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">HOW IT WORKS</span>
          </div>

          {/* Main Headings */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            How members save, <br className="hidden sm:inline" />
            participate, and <span className="text-amber-400">win</span>
          </h1>

          {/* Description Text */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            A simple step by step process where every member pay a 100 rupee membership, keeps building savings through purchase activity, and moves closer to the final draw or coupon opening.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Members;