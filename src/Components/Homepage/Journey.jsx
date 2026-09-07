import React from "react";
import { useNavigate } from "react-router-dom";

const Journey = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f8fafd] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main CTA Container Card */}
        <div className="relative bg-[#080b11] rounded-3xl p-8 sm:p-12 lg:p-14 border border-amber-500/20 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Top Subtle Amber Border Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/80 to-transparent" />

          {/* Left Text Content */}
          <div className="max-w-2xl z-10">
            
            {/* Top Tag Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-amber-400 text-xs">✨</span>
              <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
                START YOUR JOURNEY
              </span>
            </div>

            {/* Main Title Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Move forward with{" "}
              <span className="text-amber-400">confidence.</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-xl">
              Explore practical programs and trusted partnerships designed to connect
              your next opportunity with a bigger global community.
            </p>

            {/* Bottom Trust Badge */}
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400/90">
              <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>Built on transparency, trust, and shared progress.</span>
            </div>

          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto z-10 shrink-0">
            
            {/* Primary Filled Golden Button */}
            <button
              onClick={() => navigate('/our-programs', { state: { scrollToDesign: true } })}
              className="group px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Explore Programs</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Secondary Outlined Button */}
            <button 
              onClick={() => navigate('/contact-us')}
              className="px-6 py-3.5 rounded-xl bg-transparent border border-gray-700 hover:border-amber-400 text-white hover:text-amber-400 font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-amber-500/10 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Talk to Our Team</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;