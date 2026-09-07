import React, { useState } from "react";

const PartnerShip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const steps = [
    {
      number: "01",
      icon: "🤝",
      title: "Connect",
      description: "Share your goals and the strengths you bring to a partnership.",
    },
    {
      number: "02",
      icon: "🧭",
      title: "Explore",
      description: "Together, we identify a practical opportunity for collaboration.",
    },
    {
      number: "03",
      icon: "📈",
      title: "Grow",
      description: "Build a clear relationship designed to create lasting value.",
    },
  ];

  return (
    <section 
      className="w-full min-h-screen bg-[#03070f] bg-cover bg-center py-20 px-5 box-border font-sans text-white overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 20%, rgba(26, 45, 75, 0.3) 0%, transparent 60%)`
      }}
    >
      <div className="w-[min(1200px,100%)] mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[20px] bg-[rgba(10,18,30,0.9)] border border-[rgba(225,173,24,0.4)] text-[#e5b322] text-[10px] font-bold tracking-[0.8px] mb-6 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
          <span>🧭</span> PARTNERSHIP PROCESS
        </div>

        {/* Title */}
        <h2 className="m-0 mb-[50px] text-[clamp(32px,5vw,52px)] leading-[1.15] font-bold text-center text-white tracking-[-0.5px]">
          How we build <span className="text-[#f0be19]">meaningful partnerships</span>
        </h2>

        {/* Timeline Flow Wrapper */}
        <div className="relative w-full flex flex-col items-center mb-5">
          {/* Connecting dashed line behind nodes (Hidden on max-width 900px using md:block) */}
          <div className="hidden md:block absolute top-[35px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[rgba(225,173,24,0.3)] z-[1]" />

          <div className="relative z-[2] w-full grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {steps.map((item, index) => (
              <div className="flex flex-col items-center relative" key={index}>
                <div
                  className={`relative flex flex-col items-center transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    hoveredIndex === index ? "-translate-y-2" : ""
                  }`}
                >
                  <div 
                    className={`text-[11px] font-bold px-3 py-1 rounded-xl mb-3 shadow-[0_4px_12px_rgba(240,190,25,0.3)] transition-all duration-300 ${
                      hoveredIndex === index 
                        ? "bg-[#ffdb4d] text-[#03070f] shadow-[0_4px_15px_rgba(240,190,25,0.6)]" 
                        : "bg-[#f0be19] text-[#03070f]"
                    }`}
                  >
                    {item.number}
                  </div>

                  <div 
                    className={`w-[75px] h-[75px] rounded-full bg-[#071120] border grid place-items-center text-2xl transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)] ${
                      hoveredIndex === index 
                        ? "bg-[rgba(225,173,24,0.15)] border-[rgba(225,173,24,0.9)] text-[#f0be19] shadow-[0_10px_25px_rgba(225,173,24,0.3)]" 
                        : "border-[rgba(225,173,24,0.3)] text-[#f0be19]"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {steps.map((item, index) => (
            <div
              className={`rounded-2xl p-[35px_25px] text-center backdrop-blur-[10px] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer ${
                hoveredIndex === index
                  ? "bg-[rgba(10,22,38,0.95)] border border-[rgba(225,173,24,0.6)] -translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(225,173,24,0.1)]"
                  : "bg-[rgba(7,15,28,0.6)] border border-[rgba(255,255,255,0.08)]"
              }`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 
                className={`m-0 mb-3.5 text-[20px] font-bold transition-colors duration-300 ${
                  hoveredIndex === index ? "text-[#f0be19]" : "text-white"
                }`}
              >
                {item.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.6] text-[#94a3b8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnerShip;