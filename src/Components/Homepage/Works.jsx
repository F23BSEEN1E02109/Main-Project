import React from "react";

const Works = () => {
  const steps = [
    {
      id: "01",
      title: "Explore Programs",
      description: "Browse our wide range of approved programs and opportunities that match your goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
          <path d="M10 7a3 3 0 0 1 3 3" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Choose Your Program",
      description: "Select the program that suits your needs and future plans.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Complete the Process",
      description: "Follow our simple, transparent and secure membership process.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "Start Your Journey",
      description: "Gain access to your program and step forward toward a better future.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center bg-no-repeat bg-fixed font-sans"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 12, 18, 0.92), rgba(15, 18, 26, 0.88)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Tag Header */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="text-amber-400 text-xs">⚙</span>
            HOW IT WORKS
          </div>
        </div>

        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Getting Started is <span className="text-amber-500">Simple</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-relaxed">
            Follow these easy steps and start your journey with{" "}
            <span className="underline decoration-amber-500 underline-offset-4 font-semibold text-white">
              YES TIME GLOBAL
            </span>{" "}
            today.
          </p>
        </div>

        {/* 4 Steps Section */}
        <div className="relative">
          
          {/* Horizontal Dotted Line (Desktop Grid) */}
          <div className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] border-t-2 border-dashed border-amber-500/40 z-0" />

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="group flex flex-col items-center cursor-pointer">
                
                {/* Step Circle Container */}
                <div className="relative mb-6 flex flex-col items-center">
                  
                  {/* Step Number Badge */}
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center shadow-md z-20 mb-[-12px]">
                    {step.id}
                  </div>

                  {/* Icon Circle (Glows on Hover as per 2nd Screenshot) */}
                  <div className="w-20 h-20 rounded-full bg-[#0d1829] border-2 border-amber-500/50 flex items-center justify-center text-amber-400 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400 group-hover:bg-[#12233b] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] z-10">
                    {step.icon}
                  </div>

                  {/* Connecting Small Dot for Mobile/Tablet */}
                  <div className="hidden sm:block lg:hidden w-2 h-2 rounded-full bg-amber-500 mt-2" />
                </div>

                {/* Dark Glassmorphism Card */}
                <div className="w-full bg-[#0a0f19]/80 backdrop-blur-md rounded-2xl p-6 border border-gray-800/80 shadow-lg text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:border-amber-500/60 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-base font-bold text-white mb-3 transition-colors duration-300 group-hover:text-amber-400">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Works;