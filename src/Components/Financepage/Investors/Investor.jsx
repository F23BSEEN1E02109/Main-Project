import React from "react";
import { Link } from "react-router-dom";

const Investor = () => {
  const highlights = [
    {
      icon: "📈",
      title: "LONG TERM FOCUS",
      desc: "Sustainable growth",
    },
    {
      icon: "🤝",
      title: "STRATEGIC FIT",
      desc: "Shared vision",
    },
    {
      icon: "🛡️",
      title: "TRUST",
      desc: "Clear accountability",
    },
    {
      icon: "✨",
      title: "GLOBAL REACH",
      desc: "Cross market value",
    },
  ];

  return (
    <section 
      className="relative w-full min-h-screen bg-[#03070f] bg-cover bg-center bg-no-repeat bg-blend-overlay p-10 sm:px-10 sm:py-[60px] box-border font-sans text-white overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage: `radial-gradient(circle at 80% 50%, rgba(26, 45, 75, 0.4) 0%, transparent 50%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')`
      }}
    >
      {/* Investor Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#03070f_45%,rgba(3,7,15,0.85)_70%,rgba(3,7,15,0.4)_100%)] z-[1]" />

      {/* Content Wrapper */}
      <div className="relative z-[2] max-w-[1200px] mx-auto w-full flex flex-col gap-[50px]">
        
        {/* Main Content */}
        <div className="max-w-[600px] flex flex-col items-start">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-[20px] bg-[rgba(10,18,30,0.8)] border border-[rgba(225,173,24,0.4)] text-[#e5b322] text-[10px] font-bold tracking-[0.8px] mb-6 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
            INVESTORS & STRATEGIC PARTNERS
          </div>

          {/* Title */}
          <h1 className="m-0 mb-5 text-[clamp(36px,5vw,56px)] leading-[1.1] font-bold text-white tracking-[-0.5px]">
            Build lasting value with <br />
            <span className="text-[#f0be19] inline-block">Yes Time Global.</span>
          </h1>

          {/* Description */}
          <p className="m-0 mb-[35px] text-[#94a3b8] text-[14px] leading-[1.6] max-w-[480px]">
            We welcome investors and established businesses who share our vision for accessible, responsible growth across global markets.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
            <Link 
              to="/contact-us"
              className="w-full sm:w-auto bg-[#e1ab09] text-[#03070f] border-none outline-none px-6 py-3.5 rounded-lg text-[11px] font-bold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-[0_4px_15px_rgba(225,171,9,0.3)] hover:-translate-y-[3px] hover:scale-[1.02] hover:bg-[#f4be1a] hover:shadow-[0_8px_25px_rgba(225,171,9,0.5)] active:-translate-y-[1px] active:scale-[0.98] no-underline text-center"
            >
              START A CONVERSATION →
            </Link>

            <Link 
              to="/contact-us"
              className="w-full sm:w-auto bg-[rgba(10,18,30,0.6)] text-white border border-[rgba(255,255,255,0.15)] outline-none px-6 py-3.5 rounded-lg text-[11px] font-bold cursor-pointer tracking-[0.5px] backdrop-blur-[5px] flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[3px] hover:scale-[1.02] hover:bg-[rgba(225,171,9,0.1)] hover:border-[rgba(225,171,9,0.6)] hover:text-[#f0be19] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] active:-translate-y-[1px] active:scale-[0.98] no-underline text-center"
            >
              CONTACT US
            </Link>
          </div>

        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {highlights.map((item, index) => (
            <div 
              className="bg-[rgba(6,14,26,0.75)] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 flex items-center gap-4 backdrop-blur-[8px] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-[5px] hover:border-[rgba(225,171,9,0.5)] hover:bg-[rgba(10,22,38,0.85)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              key={index}
            >
              <div className="w-10 h-10 rounded-full border border-[rgba(225,171,9,0.4)] grid place-items-center text-[14px] bg-[rgba(225,171,9,0.05)] shrink-0 text-[#f0be19]">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9.5px] font-bold tracking-[0.8px] text-[#8a99ad]">
                  {item.title}
                </span>
                <span className="text-[13px] font-semibold text-white">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Investor;