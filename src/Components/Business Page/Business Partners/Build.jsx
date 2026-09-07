import React from 'react';
import { Link } from 'react-router-dom';

const Build = () => {
  const cardsData = [
    {
      id: 0,
      title: "Business Collaboration",
      number: "01",
      description: "Showrooms can work with the company as business partners and build a professional, long term relationship.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Market Reach",
      number: "02",
      description: "Suitable showrooms can help strengthen market presence and improve customer access.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Growth Opportunities",
      number: "03",
      description: "Partnership can create opportunities for business development and market expansion.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Approved Partnership",
      number: "04",
      description: "Showroom partnerships are considered based on company requirements and agreed terms.",
      icon: (
        <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50/50">
            <span className="text-amber-600 text-xs">✨</span>
            <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">Showroom Partnership</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Build Your <span className="text-amber-600">Business With Our</span> <br />
            Partnership
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Join our showroom network to build strong partnerships, expand market reach, and support long term business growth.
          </p>
        </div>

        {/* Main Grid Layout - Centered Vertically */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Info Card + Image Card with Zoom Hover */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Light Info Card */}
            <div className="bg-[#FAF8F5] border border-amber-200/60 p-8 rounded-[32px] shadow-sm space-y-6">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-amber-400 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Become a Showroom Partner
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Showroom owners can submit their business information for review and become part of our growing partnership network.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Approved partnerships are established through mutually agreed terms and conditions.
                </p>
              </div>

              {/* Process Box */}
              <div className="p-4 bg-white border border-amber-200/80 rounded-2xl space-y-2">
                <div className="text-[11px] font-bold tracking-wider text-gray-900 uppercase">
                  Partnership Process
                </div>
                <div className="text-[11px] text-gray-600 font-medium leading-relaxed">
                  Submit details → review → approval → agreed terms → partnership.
                </div>
              </div>

              {/* Updated Button Routing to /contact-us */}
              <Link
                to="/contact-us"
                className="w-full py-3.5 bg-black text-white rounded-full font-bold text-sm shadow-lg hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Become a Showroom Partner</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Bottom Image Card with Zoom Hover */}
            <div className="group relative rounded-[32px] overflow-hidden shadow-md h-[280px] border border-gray-200 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
                alt="Showroom Meeting" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>

          </div>

          {/* Right Column: 4 Cards + Bottom Banner */}
          <div className="lg:col-span-7 space-y-5">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="group p-6 bg-white border border-gray-200 rounded-[24px] shadow-sm hover:bg-black hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors shrink-0">
                    {card.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-neutral-400 leading-relaxed transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-300 group-hover:text-neutral-600 transition-colors shrink-0">
                  {card.number}
                </span>
              </div>
            ))}

            {/* Bottom Wide Banner inside Right Column */}
            <div className="p-6 bg-white border border-gray-200 rounded-[24px] shadow-sm flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">A Partnership Built for Growth</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We seek professional showroom partners who can contribute to business development and network growth.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Build;