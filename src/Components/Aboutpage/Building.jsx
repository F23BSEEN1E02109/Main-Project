import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../i18n.js';

const Building = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-[#030712] text-white flex flex-col justify-between overflow-hidden px-6 py-12 lg:px-20 lg:py-16 font-sans">
      
      {/* Background Globe Graphic with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-right pointer-events-none opacity-40"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          backgroundPosition: 'center right'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-3xl mt-8 lg:mt-12">
        
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-amber-500/30 text-amber-500 text-xs font-semibold tracking-wide uppercase mb-8">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-black text-[10px] font-bold">
            Y
          </span>
          <span>ABOUT YES TIME GLOBAL</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Building Connections. <br />
          <span className="text-amber-500">Creating Opportunities.</span> <br />
          Changing Futures.
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
          <strong className="text-white font-semibold">YES TIME GLOBAL</strong> is a trusted ecosystem that connects people, businesses, and opportunities through transparent programs, strategic partnerships, and accessible solutions.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          
          {/* Primary Button (Discover Our Story - No Hover Effect) */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-black font-semibold text-sm rounded-full shadow-md cursor-pointer"
          >
            <span>Discover Our Story</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Secondary Button (Explore Programs - Navigates to OurProgram.jsx) */}
          <button
            onClick={() => navigate('/our-programs', { state: { scrollToDesign: true } })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-black/50 border border-gray-700 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:border-amber-500 hover:text-amber-500 hover:bg-black/80 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Programs</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>

      {/* Bottom Key Metrics Bar (4 Cards Layout) */}
      <div className="relative z-10 w-full max-w-6xl mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-6 rounded-2xl bg-black/40 border border-gray-800/80 backdrop-blur-md">
          
          {/* Metric 1: Founded Year */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white leading-none">2023</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">Founded</div>
            </div>
          </div>

          {/* Metric 2: Powerful Programs */}
          <div className="flex items-center gap-4 lg:border-l lg:border-gray-800 lg:pl-6">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white leading-none">8+</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">Powerful Programs</div>
            </div>
          </div>

          {/* Metric 3: Transparent Rate */}
          <div className="flex items-center gap-4 lg:border-l lg:border-gray-800 lg:pl-6">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white leading-none">100%</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">Transparent</div>
            </div>
          </div>

          {/* Metric 4: Global Opportunities */}
          <div className="flex items-center gap-4 lg:border-l lg:border-gray-800 lg:pl-6">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-amber-500 leading-none">Global</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">Opportunities</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Building;