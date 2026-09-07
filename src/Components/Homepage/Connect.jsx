import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../i18n.js';
import Program from './Program'; // Pehle wale button ke liye jo niche khulega

const Connect = () => {
  const { t } = useLanguage();
  const navigate = useNavigate(); // Doosre button ke liye route change karne ke liye
  const [activeSection, setActiveSection] = useState(null);

  // Sirf pehle button ke scroll ke liye ref
  const programRef = useRef(null);

  useEffect(() => {
    if (activeSection === 'program' && programRef.current) {
      programRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  const featureCards = [
    {
      id: 1,
      title: 'Global Network',
      desc: 'Connect with verified partners worldwide.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Trusted Platform',
      desc: 'Secure, transparent & member-focused.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Real Impact',
      desc: 'Opportunities that create growth & change.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14a4 4 0 110-8 4 4 0 010 8z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Always With You',
      desc: '24/7 support for all our members.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <section className="relative w-full min-h-[90vh] bg-[#030914] text-white flex flex-col justify-between overflow-hidden px-6 py-12 lg:px-16 lg:py-20">
        
        {/* Background Globe Image with Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 pointer-events-none" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/80 to-transparent pointer-events-none" />

        {/* Hero Content Section */}
        <div className="relative z-10 max-w-2xl mt-8 lg:mt-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Connect to <br />
            <span className="text-amber-400">Global Opportunities.</span>
          </h1>

          <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
            YES TIME GLOBAL PRIVATE LIMITED creates accessible programs and partnerships that connect people, businesses, and opportunities across the world.
          </p>

          {/* Buttons Group */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* 1st Button: Pehle ki tarah click hone par scroll ho kar niche Program.jsx kholega */}
            <button
              onClick={() => setActiveSection(activeSection === 'program' ? null : 'program')}
              className="inline-flex items-center space-x-2 px-7 py-3.5 bg-amber-400 text-black font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:shadow-amber-400/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Programs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* 2nd Button: Click hote hi direct /how-it-works page (ProgramWork) par le jaye ga */}
            <button
              onClick={() => navigate('/how-it-works')}
              className="inline-flex items-center space-x-2 px-7 py-3.5 bg-black/40 border border-gray-600/80 text-white font-semibold text-sm sm:text-base rounded-full hover:border-amber-400 hover:text-amber-400 hover:bg-black/80 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <span>How It Works</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom 4 Feature Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-24">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="group flex items-start space-x-4 p-5 rounded-2xl bg-[#091528]/80 border border-gray-800/80 backdrop-blur-md hover:border-amber-400/50 hover:bg-[#0c1c36] hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 p-3 rounded-full bg-amber-400/10 border border-amber-400/20 group-hover:border-amber-400 group-hover:bg-amber-400/20 transition-colors duration-300">
                {card.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-base group-hover:text-amber-400 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-snug">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Program Section (Pehle button ke liye jo niche khule ga) */}
      {activeSection === 'program' && (
        <div ref={programRef} className="w-full bg-white">
          <Program />
        </div>
      )}
    </div>
  );
};

export default Connect;