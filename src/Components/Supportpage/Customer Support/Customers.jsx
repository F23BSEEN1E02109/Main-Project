import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customers = () => {
  const navigate = useNavigate();

  const supportItems = [
    "Program questions and guidance",
    "Membership and payment details",
    "Support for members and customers",
    "Next step assistance from our team",
    "General inquiry & account help"
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
              CUSTOMER / MEMBER INFORMATION
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Everything you need, <br />
            <span className="text-amber-400">in one clear place.</span>
          </h1>

          {/* Description */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
            Find straightforward guidance about programs, payments, membership, and the support available to you.
          </p>

          {/* Buttons with Hover Effects & Navigation */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => navigate('/contact-us')}
              className="px-7 py-4 rounded-full bg-amber-400 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Contact support</span>
              <span>→</span>
            </button>

            <button 
              onClick={() => navigate('/faqs')}
              className="px-7 py-4 rounded-full bg-neutral-900 text-white border border-neutral-800 font-bold text-xs tracking-wider uppercase backdrop-blur-md hover:bg-neutral-800 hover:border-amber-400/50 hover:text-amber-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Browse FAQs
            </button>
          </div>

        </div>

        {/* Right Card Snapshot Area */}
        <div className="lg:col-span-6">
          <div className="bg-[#0b1320] border border-neutral-800 rounded-[32px] p-6 sm:p-8 shadow-2xl relative space-y-6">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-5">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                  SUPPORT SNAPSHOT
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  We're here to help
                </h3>
              </div>

              {/* Headphone / Support Icon */}
              <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 text-amber-400 flex items-center justify-center text-lg shadow-inner">
                🎧
              </div>
            </div>

            {/* 5 Support Items with Hover Effects */}
            <div className="space-y-3">
              {supportItems.map((item, index) => (
                <div 
                  key={index}
                  className="group px-4 py-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/70 flex items-center justify-between transition-all duration-300 hover:bg-neutral-900 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/5 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    {/* Check / Icon box */}
                    <div className="w-7 h-7 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center text-xs transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-300 transition-colors duration-300 group-hover:text-amber-400">
                      {item}
                    </span>
                  </div>

                  {/* Arrow icon on hover */}
                  <span className="text-amber-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-xs font-bold">
                    →
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Customers;