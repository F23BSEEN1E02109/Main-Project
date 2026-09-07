import React from 'react';

const VisionMission = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-[#fafafa]">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fef6e6] text-[#d97706] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#fde68a]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Our Vision & Mission
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight">
          Our <span className="text-[#d97706]">Vision & Mission</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Guiding principles driving our ecosystem toward sustainable growth and shared success.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* CARD 1: OUR VISION (LIGHT CARD) */}
        <div className="group relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-transparent hover:border-t-4 hover:border-t-[#d97706] hover:shadow-2xl transition-all duration-300">
          
          {/* Left Image Section */}
          <div className="relative md:w-1/2 min-h-[260px] md:min-h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
              alt="Our Vision Building"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-[11px] font-bold text-gray-800 tracking-wider">
              01 / PURPOSE
            </div>
          </div>

          {/* Right Content Section */}
          <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1528] flex items-center justify-center text-[#d97706]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#d97706] transition-colors duration-300">
                      Our Vision
                    </h3>
                    {/* Hover line extension */}
                    <div className="h-0.5 bg-[#d97706] w-6 group-hover:w-12 transition-all duration-300 mt-1 rounded-full" />
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 group-hover:bg-[#d97706] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                To be a global leader in creating a reliable and innovative ecosystem where individuals and businesses can access life-changing opportunities that bring growth, security, and prosperity to all.
              </p>
            </div>

            {/* Bottom Highlight Box */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fefce8] border border-[#fef08a] group-hover:border-[#fde047] transition-colors duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#fef08a] flex items-center justify-center text-[#b45309] shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-[#854d0e]">
                A world of equal opportunities for everyone.
              </span>
            </div>
          </div>
        </div>


        {/* CARD 2: OUR MISSION (DARK CARD) */}
        <div className="group relative flex flex-col md:flex-row bg-[#081225] rounded-3xl overflow-hidden shadow-sm border border-transparent hover:border-t-4 hover:border-t-[#d97706] hover:shadow-2xl transition-all duration-300">
          
          {/* Left Image Section */}
          <div className="relative md:w-1/2 min-h-[260px] md:min-h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              alt="Our Mission World Digital Network"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#081225]/80 backdrop-blur-md border border-gray-700 text-[11px] font-bold text-[#d97706] tracking-wider">
              02 / ACTION
            </div>
          </div>

          {/* Right Content Section */}
          <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0f1d38] border border-gray-700 flex items-center justify-center text-[#d97706]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#d97706] transition-colors duration-300">
                      Our Mission
                    </h3>
                    {/* Hover line extension */}
                    <div className="h-0.5 bg-[#d97706] w-6 group-hover:w-12 transition-all duration-300 mt-1 rounded-full" />
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 group-hover:bg-[#d97706] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                To connect people, businesses, and opportunities through accessible programs, strategic partnerships, and transparent processes — empowering communities to grow, achieve, and succeed together.
              </p>
            </div>

            {/* Bottom Highlight Box */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0f1f3d] border border-gray-700/60 group-hover:border-gray-600 transition-colors duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#192b4d] flex items-center justify-center text-[#d97706] shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-200">
                Empower people. Build trust. Create lasting impact.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;