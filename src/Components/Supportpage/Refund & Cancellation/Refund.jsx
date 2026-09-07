import React from 'react';
import { useNavigate } from 'react-router-dom';

const Refund = () => {
  const navigate = useNavigate();

  const featureCards = [
    { title: "Transparent Review", icon: "🛡️" },
    { title: "Timely Support", icon: "⏱️" },
    { title: "Secure Handling", icon: "🔒" },
    { title: "Customer Support", icon: "💛" }
  ];

  const reviewSteps = [
    { num: "01", text: "Submit a valid request" },
    { num: "02", text: "Provide required information" },
    { num: "03", text: "Verification by our team" },
    { num: "04", text: "Receive review outcome" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-20 px-4 sm:px-6 lg:px-8 text-white flex items-center">
      <div className="max-w-[1250px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Area */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              POLICY OVERVIEW
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Refund & <br />
            <span className="text-amber-400">Cancellation</span>
          </h1>

          {/* Description */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
            At YES TIME GLOBAL, we value transparency, fairness, and customer trust. Please review the applicable terms before submitting a refund or cancellation request.
          </p>

          {/* Buttons with Hover Effects */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => navigate('/contact-us')}
              className="px-7 py-4 rounded-full bg-amber-400 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>📞 Call Support</span>
            </button>

            <button 
              onClick={() => navigate('/terms')}
              className="px-7 py-4 rounded-full bg-neutral-900 text-white border border-neutral-800 font-bold text-xs tracking-wider uppercase backdrop-blur-md hover:bg-neutral-800 hover:border-amber-400/50 hover:text-amber-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center space-x-2"
            >
              <span>View Terms</span>
              <span>›</span>
            </button>
          </div>

          {/* 4 Bottom Feature Cards (Static - No Hover) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {featureCards.map((item, index) => (
              <div 
                key={index}
                className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center text-xs">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-neutral-300 tracking-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Policy Process Card Area */}
        <div className="lg:col-span-6">
          <div className="bg-[#0b1320] border border-neutral-800 rounded-[32px] p-6 sm:p-8 shadow-2xl relative space-y-5">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                  POLICY PROCESS
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Request Review
                </h3>
              </div>

              {/* Shield Icon */}
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 text-amber-400 flex items-center justify-center text-sm shadow-inner">
                🛡️
              </div>
            </div>

            {/* 4 Steps Rows (Static - No Hover) */}
            <div className="space-y-3">
              {reviewSteps.map((step, index) => (
                <div 
                  key={index}
                  className="px-4 py-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/70 flex items-center space-x-4"
                >
                  <div className="w-7 h-7 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-neutral-300">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Transparent Process Box */}
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 flex items-start space-x-3 mt-2">
              <div className="w-6 h-6 rounded-lg bg-neutral-800 text-amber-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-white">Transparent Process</h4>
                <p className="text-[11px] text-neutral-400">Requests are reviewed according to applicable terms.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Refund;