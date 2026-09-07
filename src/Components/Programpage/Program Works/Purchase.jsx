import React from 'react';

const Purchase = () => {
  const steps = [
    { num: '1', text: 'RS:100 membership entry' },
    { num: '2', text: 'Member purchase is made under the active program' },
    { num: '3', text: 'Savings begin to accumulate for the member' },
    { num: '4', text: 'Business draw / coupon system remains active across all programs' },
    { num: '5', text: 'The final prize in rupees is announced when the last coupon opens' }
  ];

  return (
    <div className="w-full bg-[#010711] text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Header & Steps */}
        <div className="lg:col-span-7">
          <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">
            WHY THIS WORKS
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-6 leading-tight">
            Every purchase supports member <span className="text-amber-400">saving growth</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
            The structure is built around a straightforward idea: a small membership creates entry, purchases drive value, and the savings process keeps moving forward until the last draw or final coupon is opened.
          </p>

          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#0c0d0e] border border-gray-800 rounded-xl p-4 flex items-center space-x-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-sm shrink-0">
                  {item.num}
                </div>
                <span className="text-gray-200 text-sm sm:text-base font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Program Overview Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#0c0d0e] border border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            
            {/* Card Top Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-400 uppercase">
                  PROGRAM OVERVIEW
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Member Journey
                </h3>
              </div>
              <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-[10px] tracking-wider rounded-full uppercase">
                ACTIVE
              </span>
            </div>

            {/* Entry Box */}
            <div className="bg-[#121418] border border-gray-800 rounded-2xl p-5 mb-4">
              <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                ENTRY
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 mb-1">
                RS:100
              </div>
              <p className="text-xs text-gray-300">
                Membership contribution to begin participation.
              </p>
            </div>

            {/* Bottom Two Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#121418] border border-gray-800 rounded-2xl p-5">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  SAVINGS
                </span>
                <div className="text-lg font-bold text-amber-400 mt-1 mb-1">
                  Growing
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Each purchase adds to the value created for the member.
                </p>
              </div>

              <div className="bg-[#121418] border border-gray-800 rounded-2xl p-5">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  DRAW
                </span>
                <div className="text-lg font-bold text-amber-400 mt-1 mb-1">
                  Final Coupon
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  The last opening delivers the final opportunity for the reward.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Purchase;