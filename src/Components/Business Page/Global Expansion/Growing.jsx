import React from 'react';
import { Link } from 'react-router-dom';

const Growing = () => {
  const cardsData = [
    {
      metric: "3",
      title: "Current Countries",
      description: "Our growing international presence currently connects Pakistan, Nepal, and Indonesia.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      metric: "10",
      title: "Active Markets",
      description: "We are building stronger connections and exploring opportunities across multiple markets.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      metric: "Growing",
      title: "Global Network",
      description: "Our network continues to grow through new relationships, partnerships, and opportunities.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      metric: "Future",
      title: "Expansion",
      description: "We are continuously looking toward new countries and international opportunities.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-[11px] font-bold tracking-wider uppercase">OUR GLOBAL IMPACT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Growing Beyond <span className="text-amber-500">Borders</span>
          </h1>

          {/* Gold Divider Line with dot */}
          <div className="flex items-center justify-center space-x-2 py-1">
            <div className="w-16 h-[2px] bg-amber-400/60"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
            <div className="w-16 h-[2px] bg-amber-400/60"></div>
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Our international journey is built around meaningful connections, new opportunities, and a growing presence across different markets.
          </p>
        </div>

        {/* 4 Cards Grid (Black Cards with subtle hover animation / lift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="group bg-black text-white p-8 rounded-[28px] shadow-lg flex flex-col justify-between h-[360px] transition-transform duration-300 hover:-translate-y-2 cursor-pointer border border-neutral-800"
            >
              {/* Top Row: Icon */}
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Middle Section: Metric & Title */}
              <div className="space-y-2">
                <h3 className="text-4xl font-extrabold text-white tracking-tight">
                  {item.metric}
                </h3>
                <h4 className="text-sm font-bold text-amber-400 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Footer label & dash */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                <span>Global Growth</span>
                <span className="tracking-widest">—</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Card */}
        <div className="bg-white border border-gray-200/80 rounded-[32px] p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl font-extrabold text-gray-900">
              A growing international presence
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
              From our current markets to future destinations, YES TIME GLOBAL continues to build connections that create opportunities across borders.
            </p>
          </div>

          <Link
            to="/journey"
            className="px-6 py-3.5 bg-white border border-gray-300 text-gray-900 rounded-full font-bold text-sm shadow-sm hover:bg-amber-400 hover:border-amber-400 hover:text-black transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Explore Our Journey</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Growing;