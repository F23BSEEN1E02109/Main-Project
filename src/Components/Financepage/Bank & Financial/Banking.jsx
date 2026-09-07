import React from 'react';
import { Link } from 'react-router-dom';

const Banking = () => {
  const financialPartners = [
    { 
      name: "HBL", 
      color: "text-emerald-700",
      icon: (
        <div className="flex items-center space-x-1.5">
          <div className="bg-emerald-700 text-white font-black text-xs px-1.5 py-0.5 rounded tracking-tighter">IH</div>
          <span className="font-extrabold text-lg tracking-tight text-emerald-800">HBL</span>
        </div>
      )
    },
    { 
      name: "Meezan Bank", 
      color: "text-purple-800",
      icon: (
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full border-2 border-purple-800 flex items-center justify-center bg-purple-50 text-[10px] font-bold text-purple-900">🏦</div>
          <span className="font-extrabold text-sm tracking-tight text-purple-900">Meezan Bank</span>
        </div>
      )
    },
    { 
      name: "MCB", 
      color: "text-emerald-600",
      icon: (
        <div className="flex flex-col items-center">
          <div className="text-emerald-600 font-black text-xs tracking-widest">MCB</div>
          <div className="text-[9px] text-gray-500 font-medium">Bank for Life</div>
        </div>
      )
    },
    { 
      name: "UBL", 
      color: "text-blue-900",
      icon: (
        <div className="flex items-center space-x-1.5">
          <div className="bg-blue-900 text-white font-black text-[10px] px-1 py-0.5 rounded">UB</div>
          <span className="font-extrabold text-lg tracking-tight text-blue-900">UBL</span>
        </div>
      )
    },
    { 
      name: "Bank Alfalah", 
      color: "text-red-600",
      icon: (
        <div className="flex items-center space-x-2">
          <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
          <span className="font-bold text-sm tracking-tight text-gray-900">Bank Alfalah</span>
        </div>
      )
    },
    { 
      name: "Allied Bank", 
      color: "text-amber-600",
      icon: (
        <div className="flex items-center space-x-2">
          <div className="w-3.5 h-3.5 bg-amber-600 rotate-45"></div>
          <span className="font-bold text-sm tracking-tight text-blue-950">Allied Bank</span>
        </div>
      )
    },
    { 
      name: "JS Bank", 
      color: "text-amber-500",
      icon: (
        <div className="flex items-center space-x-1">
          <span className="font-black text-xl italic text-amber-500 tracking-tighter">JS</span>
          <span className="text-[10px] font-semibold text-gray-600">BANK</span>
        </div>
      )
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 selection:bg-amber-500 selection:text-black">
      
      {/* Top Dark Hero Section */}
      <div className="relative bg-[#050B14] text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background City/Bank Imagery Overlay with dark gradient */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/90 to-transparent"></div>

        <div className="max-w-[1200px] mx-auto relative z-10 space-y-10">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
            <span className="text-amber-400 text-xs">✦</span>
            <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">BANKS & FINANCIAL PARTNERS</span>
          </div>

          {/* Title & Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Trusted Banking & <br />
                <span className="text-amber-400">Financial Partnerships</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Connecting you with trusted banks and financial institutions for secure transactions, smart savings and a stronger financial future.
              </p>

              {/* Action Buttons with Interactive Hover Effects */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link 
                  to="/contact-us"
                  className="px-6 py-3.5 rounded-full bg-amber-400 text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer no-underline text-center"
                >
                  <span>EXPLORE FINANCIAL PARTNERS</span>
                  <span>→</span>
                </Link>

                <Link 
                  to="/contact-us"
                  className="px-6 py-3.5 rounded-full bg-neutral-900/80 text-white border border-neutral-700 font-semibold text-xs tracking-wider uppercase backdrop-blur-md hover:bg-neutral-800 hover:border-amber-400/50 hover:text-amber-400 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer no-underline text-center"
                >
                  <span>CONTACT FINANCE TEAM</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Feature Cards Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="bg-[#0b1320]/90 border border-neutral-800/80 backdrop-blur-md rounded-2xl p-5 flex items-center space-x-4 shadow-xl hover:border-amber-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 shrink-0">
                🛡️
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wider">SECURE BANKING</h4>
                <p className="text-[11px] text-neutral-400">Your money, always safe.</p>
              </div>
            </div>

            <div className="bg-[#0b1320]/90 border border-neutral-800/80 backdrop-blur-md rounded-2xl p-5 flex items-center space-x-4 shadow-xl hover:border-amber-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 shrink-0">
                🤝
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wider">TRUSTED PARTNERS</h4>
                <p className="text-[11px] text-neutral-400">Working with leading banks.</p>
              </div>
            </div>

            <div className="bg-[#0b1320]/90 border border-neutral-800/80 backdrop-blur-md rounded-2xl p-5 flex items-center space-x-4 shadow-xl hover:border-amber-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 shrink-0">
                ⚡
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wider">TRANSPARENT PROCESS</h4>
                <p className="text-[11px] text-neutral-400">Clear and reliable system.</p>
              </div>
            </div>

            <div className="bg-[#0b1320]/90 border border-neutral-800/80 backdrop-blur-md rounded-2xl p-5 flex items-center space-x-4 shadow-xl hover:border-amber-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 shrink-0">
                💡
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wider">SMART SOLUTIONS</h4>
                <p className="text-[11px] text-neutral-400">For a better financial future.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section with Encompassing Container Box */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Encompassing Outer Box */}
        <div className="bg-[#fafbfc] border border-gray-200/80 rounded-[32px] p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Header inside the box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/60 pb-6">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold tracking-widest text-gray-700 uppercase">OUR FINANCIAL PARTNERS</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>We collaborate with leading banks</span>
            </div>
          </div>

          {/* Continuous Scrolling Marquee Container */}
          <div className="relative w-full overflow-hidden py-2">
            
            {/* Gradient fade borders for smooth look inside the box */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fafbfc] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fafbfc] to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Track */}
            <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
              {[...financialPartners, ...financialPartners, ...financialPartners].map((partner, index) => (
                <div
                  key={index}
                  className="w-[220px] h-[90px] bg-white border border-gray-200/90 rounded-2xl shadow-xs flex items-center justify-center px-6 transition-all duration-300 hover:shadow-md hover:border-amber-400 hover:-translate-y-1 cursor-pointer shrink-0"
                >
                  {partner.icon}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Embedded CSS for Infinite Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default Banking;