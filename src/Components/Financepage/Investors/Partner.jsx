import React from "react";

const Partner = () => {
  const partners = [
    {
      icon: "📈",
      title: "Shared growth",
      description:
        "Partner with a business focused on sustainable expansion and meaningful economic participation.",
    },
    {
      icon: "🤝",
      title: "Strategic collaboration",
      description:
        "Bring your network, expertise, or market access to opportunities built for mutual success.",
    },
    {
      icon: "🛡️",
      title: "Trust and clarity",
      description:
        "Explore a transparent relationship with clear communication and long term accountability.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-[70px] px-10 box-border font-sans text-[#0c172b]">
      <div className="w-[min(1200px,100%)] mx-auto">
        
        {/* Header */}
        <div className="max-w-[700px] mb-[60px]">
          <div className="flex items-center gap-[10px] mb-4">
            <div className="w-[30px] h-[2px] bg-[#e1ad18]" />
            <span className="text-[#d99f00] text-[11px] font-bold tracking-[1px] uppercase">
              Why Partner With Us
            </span>
          </div>

          <h2 className="m-0 mb-5 text-[clamp(32px,4.5vw,48px)] leading-[1.15] font-extrabold text-black tracking-[-0.5px]">
            A relationship built for the <span className="text-[#d99f00]">long term.</span>
          </h2>

          <p className="m-0 text-[#4b5563] text-[15px] leading-[1.6]">
            Our strongest partnerships begin with shared values, clear expectations, and a practical view of the opportunity ahead.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {partners.map((item, index) => (
            <div 
              className="group relative bg-white border border-[#e5e7eb] rounded-2xl p-8 flex flex-col justify-between min-h-[280px] box-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-[350ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.08)] hover:border-[#f3c638]"
              key={index}
            >
              <div className="flex flex-col items-start">
                <div className="w-[45px] h-[45px] rounded-[10px] bg-[#0b0f19] text-white grid place-items-center text-[18px] mb-6 transition-all duration-[350ms] ease-in-out group-hover:bg-[#fdf6cc] group-hover:text-[#d99f00] group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="m-0 mb-3 text-[18px] font-bold text-black">
                  {item.title}
                </h3>
                <p className="m-0 mb-[25px] text-[13.5px] leading-[1.6] text-[#4b5563]">
                  {item.description}
                </p>
              </div>

              {/* Bottom sliding yellow line */}
              <div className="absolute bottom-0 left-8 w-[35px] h-[3px] bg-[#e1ad18] rounded-t-[2px] transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:w-[calc(100%-64px)]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partner;