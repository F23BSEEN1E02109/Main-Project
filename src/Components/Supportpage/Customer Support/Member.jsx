import React from 'react';

const Member = () => {
  const topCards = [
    {
      title: "Programs & payments",
      desc: "Understand each program, payment steps, and what is required before you proceed.",
      icon: "💳"
    },
    {
      title: "Member guidance",
      desc: "Access useful details about membership, updates, and how your benefits work.",
      icon: "👤"
    },
    {
      title: "Need assistance?",
      desc: "Our support team can guide you to the right next step based on your situation.",
      icon: "🎧"
    }
  ];

  const bottomCards = [
    {
      title: "Secure information",
      desc: "Your details are reviewed safely and handled with care.",
      icon: "🛡️"
    },
    {
      title: "Clear communication",
      desc: "We help you understand the process before you take action.",
      icon: "💬"
    },
    {
      title: "Helpful guidance",
      desc: "Get the right direction for payments, membership, and plan questions.",
      icon: "✔️"
    },
    {
      title: "Faster response",
      desc: "Prepared information helps our team support you more efficiently.",
      icon: "⏱️"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans py-20 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-[1250px] mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="space-y-3">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
            MEMBER SUPPORT
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Simple answers for everyday needs.
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Use these quick guides to find the information that matters most to you.
          </p>
        </div>

        {/* Top 3 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200/80 rounded-[28px] p-8 shadow-sm flex flex-col justify-between space-y-8 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-[#0b1320] text-amber-400 flex items-center justify-center text-2xl shadow-md transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Small Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomCards.map((card, index) => (
            <div 
              key={index}
              className="bg-[#fafbfc] border border-gray-200/80 rounded-[24px] p-6 shadow-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:bg-white hover:border-amber-400 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
            >
              {/* Small Icon Box */}
              <div className="w-10 h-10 rounded-xl bg-amber-100/60 text-amber-600 flex items-center justify-center text-base transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Member;