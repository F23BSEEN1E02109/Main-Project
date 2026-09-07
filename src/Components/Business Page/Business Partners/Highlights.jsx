import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = () => {
  const highlightsData = [
    {
      title: "Business Expansion",
      description: "Build stronger business connections and support wider market development.",
      icon: (
        <svg className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Long Term Relations",
      description: "Develop professional relationships focused on sustainable business cooperation.",
      icon: (
        <svg className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Mutual Success",
      description: "Create opportunities through collaboration, trust and shared business objectives.",
      icon: (
        <svg className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Future Opportunities",
      description: "As the business grows, new opportunities for collaboration and development may arise.",
      icon: (
        <svg className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Top Dark Banner Section */}
        <div className="bg-[#0A0A0A] rounded-[32px] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Header Inside Dark Banner */}
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16 relative z-10">
            <div className="text-xs font-bold tracking-widest text-amber-500 uppercase">
              PARTNERSHIP HIGHLIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Building Business Together
            </h2>
          </div>

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {highlightsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 px-2">
                {/* Circular Icon with Yellow Hover */}
                <div className="w-14 h-14 rounded-full border border-amber-500/30 flex items-center justify-center bg-neutral-900/50 hover:bg-amber-500 transition-all duration-300 group cursor-pointer shadow-md">
                  {item.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-[240px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom White Card Section */}
        <div className="bg-white border border-gray-200/80 rounded-[32px] p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-amber-400 shrink-0 shadow-md">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-bold tracking-wider text-amber-600 uppercase">
                START A PARTNERSHIP
              </div>
              <h3 className="text-xl font-extrabold text-gray-900">
                Become Our Business Partner
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
                Join our growing business network and explore suitable opportunities for professional and long term collaboration.
              </p>
            </div>
          </div>

          {/* Updated Button Routing to /contact-us */}
          <Link
            to="/contact-us"
            className="px-6 py-3.5 bg-amber-500 text-black rounded-full font-bold text-sm shadow-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Get Started</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Highlights;