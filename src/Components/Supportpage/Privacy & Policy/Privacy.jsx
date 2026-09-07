import React from 'react';

const Privacy = () => {
  return (
    <div className="w-full bg-[#0a0d14] text-white min-h-[40vh] py-20 px-4 sm:px-8 lg:px-16 font-sans relative overflow-hidden flex items-center">
      
      {/* Background Subtle Golden Glow Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Legal Information Tag */}
        <div className="inline-block mb-4">
          <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            LEGAL INFORMATION
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
          Privacy <span className="text-amber-400">Policy.</span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
          How YES TIME GLOBAL may collect, use, review, protect, and disclose information provided through its programs and communication channels.
        </p>

      </div>

    </div>
  );
};

export default Privacy;