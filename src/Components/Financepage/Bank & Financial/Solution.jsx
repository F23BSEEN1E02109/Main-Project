import React from 'react';

const Solution = () => {
  const reliableSolutions = [
    {
      title: "Trusted Network",
      desc: "Partnership with leading banks",
      icon: "🛡️"
    },
    {
      title: "100% Secure",
      desc: "Advanced security measures",
      icon: "💲"
    },
    {
      title: "Wide Coverage",
      desc: "Access across regions",
      icon: "🏢"
    },
    {
      title: "Member Benefits",
      desc: "Special opportunities for members",
      icon: "📈"
    },
    {
      title: "Fast & Convenient",
      desc: "Modern and easy process",
      icon: "✅"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Explore Options",
      desc: "Choose the service you need",
      icon: "🤝"
    },
    {
      step: "02",
      title: "Submit Details",
      desc: "Share required information",
      icon: "💲"
    },
    {
      step: "03",
      title: "Bank Verification",
      desc: "Processed with trusted partners",
      icon: "🛡️"
    },
    {
      step: "04",
      title: "Get Started",
      desc: "Enjoy secure and smooth banking",
      icon: "🏢"
    }
  ];

  return (
    <div className="w-full font-sans">
      
      {/* Top Section: Reliable Solutions Tailored For You (Light Background) */}
      <div className="w-full bg-[#f4f7fa] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
              WHY CHOOSE OUR FINANCIAL PARTNERS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Reliable Solutions Tailored For You
            </h2>
          </div>

          {/* 5 Cards Grid with 2nd Image Hover Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {reliableSolutions.map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm flex flex-col items-start space-y-6 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
              >
                {/* Top Icon Box with Hover State */}
                <div className="w-12 h-12 rounded-2xl bg-black text-amber-400 flex items-center justify-center text-xl shadow-md transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                  {item.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Section: Simple & Transparent Process (Dark Background) */}
      <div className="w-full bg-[#050B14] py-24 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-[1300px] mx-auto space-y-14">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Simple & Transparent Process
            </h2>
          </div>

          {/* 4 Cards Grid with 3rd Image Hover Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-[#0b1320] border border-neutral-800 rounded-3xl p-7 shadow-lg flex flex-col justify-between h-[220px] transition-all duration-300 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1.5 group cursor-pointer relative"
              >
                {/* Top Row: Number and Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-extrabold text-xs flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400 flex items-center justify-center text-sm transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                    {step.icon}
                  </div>
                </div>

                {/* Bottom Text Content */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-amber-400">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Solution;