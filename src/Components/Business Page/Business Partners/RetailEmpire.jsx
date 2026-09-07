import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RetailEmpire = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cardsData = [
    {
      id: 0,
      title: "Retail Shop Owners",
      badge: "MERCHANT HUB",
      description: "Retail merchants seamlessly plug into our high volume merchant system, scaling local visibility.",
      footerText: "Fully Verified Service",
      icon: (
        <svg className="w-6 h-6 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Strategic Partnership",
      badge: "LONG TERM",
      description: "We forge institutional grade bonds focused on mutual equity expansion and commercial stability.",
      footerText: "Fully Verified Service",
      icon: (
        <svg className="w-6 h-6 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Accelerated Growth",
      badge: "HIGH YIELD",
      description: "Harness shared pipelines and dynamic market traction engineered to compound your enterprise footprint.",
      footerText: "Fully Verified Service",
      icon: (
        <svg className="w-6 h-6 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Secure Compliance",
      badge: "TRUSTED",
      description: "Operations run securely under strict regulatory frameworks, verified regulatory transparency, and legal alignment.",
      footerText: "Fully Verified Service",
      icon: (
        <svg className="w-6 h-6 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1280px] mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50/50">
            <span className="text-amber-600 text-xs">✨</span>
            <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">Retail Network Initiative</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Scale Your Retail Empire <br />
            <span className="text-amber-600">Through Our Ecosystem</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Empower your physical storefront with institutional infrastructure, structured partnership models, and continuous commercial expansion avenues.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dark Featured Card */}
          <div className="lg:col-span-5 relative bg-[#121212] p-8 rounded-[32px] border border-neutral-800 shadow-2xl overflow-hidden text-white space-y-6">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent z-0" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-2xl flex items-center justify-center text-amber-400 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="px-3 py-1 bg-neutral-900/90 border border-neutral-800 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-neutral-300 uppercase">
                  Verified Portal
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Become an Approved <br />
                  <span className="text-amber-500">Shop Partner</span>
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Submit your storefront profile for multi tier enterprise review. Approved partners gain instant admission into structured resource channels.
                </p>
              </div>

              {/* Workflow Box */}
              <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-2">
                <div className="text-[10px] font-extrabold tracking-widest text-amber-500 uppercase">Streamlined Integration Workflow</div>
                <div className="text-[11px] text-neutral-300 font-medium leading-relaxed">
                  Submit Profile → Metric Review → Compliance Audit → Formal Agreement
                </div>
              </div>

              {/* Updated Button Routing to /contact-us */}
              <Link
                to="/contact-us"
                className="w-full py-3.5 bg-amber-500 text-black rounded-full font-bold text-sm shadow-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Join Our Shop Network</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cardsData.map((card) => (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                className="group p-6 bg-white border border-gray-200 rounded-[28px] shadow-sm hover:bg-black hover:border-black transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors">
                    {card.icon}
                  </div>
                  <span className="px-3 py-1 bg-amber-50 border border-amber-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 rounded-full text-[10px] font-extrabold tracking-widest text-amber-800 group-hover:text-amber-400 transition-colors uppercase">
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-xs text-gray-600 group-hover:text-neutral-400 leading-relaxed transition-colors">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 group-hover:border-neutral-800 flex items-center space-x-2 text-xs font-semibold text-amber-700 group-hover:text-amber-400 transition-colors">
                  <span>✓</span>
                  <span>{card.footerText}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Banner Section */}
        <div className="p-6 sm:p-8 bg-white border border-gray-200 rounded-[32px] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center space-x-4">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shrink-0 shadow-md text-amber-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-gray-900">Building Long Term Commercial Synergies</h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
                Yestime Global engineers reliable, elite enterprise relationships built to withstand market evolution. Approved partners unlock priority access to high tier commercial tools and sustained cross collaboration opportunities.
              </p>
            </div>
          </div>
          <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold tracking-wider text-amber-800 shrink-0 uppercase">
            ✨ Professional Alliance
          </div>
        </div>

      </div>
    </div>
  );
};

export default RetailEmpire;