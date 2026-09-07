import React from 'react';
import { Link } from 'react-router-dom';

const Dealer = () => {
  const cardsData = [
    {
      id: 0,
      title: "Dealer Network",
      badge: "NETWORK",
      description: "Become part of our growing dealer network and establish a professional business relationship with the company.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Business Opportunities",
      badge: "GROWTH",
      description: "Explore opportunities to expand your market presence and develop your business through partnership.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Trusted Partnership",
      badge: "RELIABLE",
      description: "Build a reliable and long term partnership based on agreed business terms, company policies and mutual understanding.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Formal Process",
      badge: "VERIFIED",
      description: "Dealer applications and business information are reviewed according to company requirements before partnership approval.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#F8F9FA] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1280px] mx-auto space-y-12">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              DEALER PARTNERSHIP
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Grow Through a Strong <br />
              <span className="text-amber-600">Dealer Partnership</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We welcome suitable dealers who can establish a professional business relationship with the company. Our partnership approach focuses on business development, market expansion and long term cooperation according to mutually agreed terms.
            </p>
          </div>
        </div>

        {/* Main Wrapper Box */}
        <div className="bg-white border border-gray-200/80 rounded-[32px] p-6 sm:p-10 shadow-xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main Content Block */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-amber-400 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Become Our Dealer
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Dealers can partner with us to expand our network and drive sustainable business growth.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Interested dealers can submit their business details for review and approval under agreed terms.
                </p>
              </div>

              {/* Process Box */}
              <div className="p-4 bg-[#FAF9F5] border border-amber-200/60 rounded-2xl space-y-2">
                <div className="text-[11px] font-bold tracking-wider text-gray-900 uppercase">
                  Dealer Partnership Process
                </div>
                <div className="text-[11px] text-gray-600 font-medium leading-relaxed">
                  Business information submission → company review → approval → agreed terms → formal business partnership.
                </div>
              </div>

              {/* Updated Button Routing to /contact-us */}
              <Link
                to="/contact-us"
                className="w-full py-3.5 bg-black text-white rounded-full font-bold text-sm shadow-lg hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Become a Dealer</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Right Cards Grid with Zoom Hover */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className="group relative h-[260px] rounded-[24px] overflow-hidden shadow-md cursor-pointer flex flex-col justify-between p-6 border border-neutral-800"
                >
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                  </div>

                  {/* Top content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-2.5 bg-black/60 backdrop-blur-md border border-neutral-700/60 rounded-xl">
                      {card.icon}
                    </div>
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-neutral-700/60 rounded-full text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                      {card.badge}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 space-y-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-neutral-300 line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Footer Info Bar */}
          <div className="pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <span className="text-amber-600 font-bold mt-0.5">✓</span>
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Mutual Cooperation</h4>
                <p className="text-[11px] text-gray-600 mt-1">Partnership based on mutual understanding and cooperation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-600 font-bold mt-0.5">↗</span>
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Market Expansion</h4>
                <p className="text-[11px] text-gray-600 mt-1">Support business reach and future market opportunities.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-600 font-bold mt-0.5">🛡️</span>
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Long Term Growth</h4>
                <p className="text-[11px] text-gray-600 mt-1">Develop sustainable and professional business relations.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dealer;