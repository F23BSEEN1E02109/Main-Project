import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Programs = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/our-programs', { state: { scrollToDesign: true } });
  };

  return (
    <div className="relative w-full min-h-[550px] lg:min-h-[650px] bg-[#010711] text-white overflow-hidden flex items-center">
      
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
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 py-16 w-full">
        <div className="max-w-2xl">
          
          {/* Top Tag Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-[#0c0d0e]/80 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-white uppercase">OUR PROGRAMS</span>
          </div>

          {/* Main Headings */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Programs & <br />
            <span className="text-amber-400">Opportunities</span>
          </h1>

          {/* Description Text */}
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
            Explore our diverse programs designed to provide savings, benefits and practical opportunities for a better tomorrow.
          </p>

          {/* Action Buttons with Hover Effects */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleExploreClick}
              className="px-7 py-3.5 bg-amber-400 text-black font-bold rounded-full text-sm sm:text-base transition-all duration-300 hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center space-x-2 cursor-pointer"
            >
              <span>Explore Programs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <Link
              to="/how-it-works"
              className="px-7 py-3.5 bg-transparent text-white border border-amber-400/60 rounded-full text-sm sm:text-base font-bold transition-all duration-300 hover:bg-amber-400 hover:text-black hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center space-x-2 cursor-pointer"
            >
              <span>How It Works</span>
              <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs">▶</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Programs;