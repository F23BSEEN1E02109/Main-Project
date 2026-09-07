import React from 'react';

const Oppurtunities = () => {
  const topCards = [
    {
      number: "01",
      title: "Business Expansion",
      description: "We explore new markets and help create opportunities for businesses looking to grow beyond their local boundaries.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Global Partnerships",
      description: "We build meaningful relationships with organizations, businesses, and individuals across different countries.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      number: "03",
      title: "International Networking",
      description: "Our growing network connects people and opportunities across borders, creating stronger international relationships.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Market Opportunities",
      description: "We identify emerging opportunities and support connections that can contribute to sustainable international growth.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const bottomCards = [
    {
      title: "Connecting Markets",
      description: "We aim to connect different markets by creating pathways for communication, collaboration, and future growth.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Building Relationships",
      description: "Strong relationships are at the heart of our international journey and long term global vision.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* Top Header & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50/50">
              <span className="text-amber-600 text-xs">✨</span>
              <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">WHAT WE DO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Creating <br />
              <span className="text-amber-600">Opportunities</span> Across <br />
              Borders
            </h1>

            <div className="flex items-center space-x-2 py-1">
              <div className="w-12 h-[2px] bg-amber-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
              We create meaningful international connections, develop strategic partnerships, and explore opportunities that help people and businesses move beyond borders.
            </p>
          </div>

          {/* Right Image Card with Zoom Hover */}
          <div className="lg:col-span-6">
            <div className="group relative rounded-[32px] overflow-hidden shadow-xl h-[340px] sm:h-[400px] border border-gray-200 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Creating Global Opportunities" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="text-[11px] font-bold tracking-wider text-amber-400 uppercase mb-1">
                  YES TIME GLOBAL
                </div>
                <h3 className="text-2xl font-extrabold mb-2">
                  Creating Global Opportunities.
                </h3>
                <p className="text-xs text-gray-300 max-w-md leading-relaxed">
                  Connecting people, businesses, and markets through meaningful international relationships.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Top 4 Cards Grid (Cards remain dark as requested) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCards.map((card) => {
            return (
              <div
                key={card.number}
                className="group rounded-[28px] p-7 flex flex-col justify-between h-[400px] bg-black border border-neutral-800 text-white hover:bg-[#0a192f] hover:border-blue-900/50 transition-all duration-300 cursor-pointer shadow-lg"
              >
                {/* Top Icon & Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-md">
                    {card.icon}
                  </div>
                  <span className="text-xl font-extrabold text-neutral-600 group-hover:text-neutral-400 transition-colors">
                    {card.number}
                  </span>
                </div>

                {/* Middle Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] font-semibold text-neutral-400">
                  <span className="tracking-wider uppercase">YES TIME GLOBAL</span>
                  <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all">
                    ↗
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 Wide Cards (Cards remain dark as requested) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bottomCards.map((card, index) => (
            <div
              key={index}
              className="bg-black border border-neutral-800 rounded-[28px] p-8 text-white flex items-start space-x-5 shadow-md"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 shadow-md">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Oppurtunities;