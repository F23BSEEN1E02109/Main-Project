import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import kiya
import logoImg from "../../assets/logo.webp";

const Time = () => {
  const navigate = useNavigate(); // Hook initialize kiya

  const cardsData = [
    {
      id: "mission",
      title: "Mission",
      text: "Empowering lives through global access & shared opportunities.",
      icon: (
        <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      id: "vision",
      title: "Vision",
      text: "A connected world of transparent and equal opportunities for all.",
      icon: (
        <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: "core-values",
      title: "Core Values",
      text: "Built on trust, integrity, transparency, and sustainable growth.",
      icon: (
        <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4L15 9.5" />
          <path d="M13 14 9.5 10.5a1 1 0 0 0-1.4 0L3.8 14.8a1 1 0 0 0 0 1.4l2 2a1 1 0 0 0 1.4 0L11 14z" />
          <path d="m18 11 3-3a1 1 0 0 0 0-1.4l-2.5-2.5a1 1 0 0 0-1.4 0L14 7" />
          <path d="M6 11 3 8a1 1 0 0 1 0-1.4l2.5-2.5a1 1 0 0 1 1.4 0L10 7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      {/* Main Card Container */}
      <div className="max-w-6xl w-full min-h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-gray-100">
        
        {/* Left Section */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* Header / Brand */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">
                  Who We Are
                </span>
              </div>

              {/* Logo Image */}
              <div className="flex items-center gap-2">
                <img 
                  src={logoImg} 
                  alt="YES TIME GLOBAL Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <div className="w-10 h-1 bg-amber-500 rounded-full mb-6"></div>

            {/* Content Text */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              At <span className="font-bold text-slate-900 underline decoration-amber-500 underline-offset-4">YES TIME GLOBAL</span>, we are a trusted international platform bridging members to accessible vehicle schemes, real estate ventures, and automated savings programs.
            </p>

            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
              We create accessible programs and strategic partnerships that empower individuals and communities to grow, achieve, and succeed together.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-xs md:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Global Opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Transparent Process</span>
              </div>
            </div>

            {/* 3 Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className="group relative bg-slate-50 border border-gray-100 rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 hover:bg-amber-50/40 hover:border-amber-400/60 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-amber-400 group-hover:scale-110 shadow-sm">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 transition-colors duration-300 group-hover:text-amber-600">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Centered-Left Action Button - Click karne par About.jsx khulega */}
          <div className="flex justify-center sm:justify-center pt-2">
            <button 
              onClick={() => navigate('/about')} 
              className="group px-7 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Discover Full Story</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right High-Res Image Section */}
        <div className="md:col-span-5 relative min-h-[350px] md:min-h-full bg-slate-950 overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop"
            alt="Corporate Architecture"
            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-100 transition-transform duration-700 hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/90 via-transparent to-slate-950/60"></div>
          
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-8 right-8 text-white/20 font-extrabold text-5xl tracking-widest select-none pointer-events-none">
            GLOBAL
          </div>
        </div>

      </div>
    </div>
  );
};

export default Time;