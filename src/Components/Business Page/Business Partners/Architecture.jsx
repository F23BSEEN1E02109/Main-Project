import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Architecture = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const cardsData = [
    {
      id: 0,
      title: "Retail Shops",
      badge: "HIGH GROWTH",
      description: "Expand your local reach and drive revenue by integrating into our high demand merchant network.",
      bgImage: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Strategic Enterprises",
      badge: "CORE ALLIANCE",
      description: "Forge high impact alliances designed to scale operations, maximize market share, and ensure long term stability.",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Venture Investors",
      badge: "HIGH ROI",
      description: "Unlock high yield opportunities backed by robust metrics within our accelerating, scalable digital ecosystem.",
      bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Authorized Dealers",
      badge: "TRUSTED HUB",
      description: "Leverage reliable supply chains, priority support, and dedicated regional distribution channels.",
      bgImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading, Description, 4 Feature Boxes, and Buttons */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50/50 shadow-2xs">
            <span className="text-amber-600 text-xs">✨</span>
            <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">Elite Ecosystem Partnership</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Architecting <br />
            <span className="text-amber-600">Future</span> <br />
            Alliances.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
            YES TIME GLOBAL PRIVATE LIMITED cultivates high performance ecosystems uniting retail leaders, strategic investors, dealers, and specialized enterprises. Scale your capabilities and unlock unprecedented commercial momentum through curated collaboration.
          </p>

          {/* 4 Feature Boxes (Hover effect: turns black) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Box 1 */}
            <div className="group p-4 bg-white border border-gray-200 rounded-2xl shadow-xs transition-all duration-300 hover:bg-black hover:border-black cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors">
                  <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-white transition-colors">Long Term Equity</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="group p-4 bg-white border border-gray-200 rounded-2xl shadow-xs transition-all duration-300 hover:bg-black hover:border-black cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors">
                  <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-white transition-colors">Accelerated Growth</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="group p-4 bg-white border border-gray-200 rounded-2xl shadow-xs transition-all duration-300 hover:bg-black hover:border-black cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors">
                  <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-white transition-colors">Exclusive Access</span>
              </div>
            </div>

            {/* Box 4 */}
            <div className="group p-4 bg-white border border-gray-200 rounded-2xl shadow-xs transition-all duration-300 hover:bg-black hover:border-black cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors">
                  <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-white transition-colors">Enterprise Tech Stack</span>
              </div>
            </div>

          </div>

          {/* Action Buttons with hover effects */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-7 py-3.5 bg-black text-white rounded-full font-semibold text-sm shadow-lg hover:bg-amber-400 hover:text-black transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Become a Partner</span>
              <span>⚡</span>
            </button>

            <button
              onClick={() => navigate('/global-expansion')}
              className="px-7 py-3.5 bg-white text-gray-900 border border-gray-300 rounded-full font-semibold text-sm hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 cursor-pointer shadow-xs"
            >
              Explore Framework
            </button>
          </div>

        </div>

        {/* Right Column: Main Interactive Grid Card Container */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[32px] border border-gray-200 shadow-xl space-y-6">
          
          {/* Header Inside Card */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-6">
            <div className="space-y-1">
              <div className="text-[11px] font-bold tracking-wider text-amber-600 uppercase">YESTIME GLOBAL</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Who Can Partner With Us</h2>
            </div>
            <div className="px-3.5 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold text-gray-700">
              4 Active Categories
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cardsData.map((card, idx) => {
              const isSelected = activeCard === card.id;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-md transition-all duration-500 border ${
                    isSelected ? 'border-amber-400 ring-2 ring-amber-400/20 scale-[1.02]' : 'border-gray-200 opacity-90'
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={card.bgImage}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Gradient Overlay (Visible only on hover or when selected) */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                  {/* Top Elements inside Card (Hidden by default, shown on hover/active) */}
                  <div className={`absolute top-4 left-4 right-4 flex items-center justify-between z-10 transition-all duration-300 ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                    {/* Icon Box */}
                    <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                      {card.icon}
                    </div>
                    {/* Badge */}
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-bold tracking-wider text-black shadow-sm">
                      {card.badge}
                    </div>
                  </div>

                  {/* Bottom Content inside Card (Hidden by default, shown on hover/active) */}
                  <div className={`absolute bottom-4 left-4 right-4 z-10 space-y-2 transition-all duration-300 ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>
                    <div className="pt-1 flex items-center space-x-1 text-xs font-semibold text-amber-400">
                      <span>Apply Now</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Bar inside Container */}
          <div className="p-4 bg-amber-50/40 border border-amber-100/80 rounded-2xl flex items-center space-x-4">
            <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Custom Corporate & Enterprise Synergies</h4>
              <p className="text-xs text-gray-600">Are you a specialized service provider, corporate entity, or institutional body? We tailor custom collaborative pathways strictly to your organizational metrics.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Architecture;