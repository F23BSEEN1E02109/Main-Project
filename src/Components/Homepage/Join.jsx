import React from "react";

const Join = () => {
  const cardsData = [
    {
      id: 1,
      title: "Secure & Reliable",
      description: "Your security and operational safety are always our top priority.",
      imgUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "A Place for Everyone",
      description: "A welcoming space where everyone has an equal place to grow.",
      imgUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Modern Solutions",
      description: "Continuous technological improvements for a better experience.",
      imgUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Creating Real Change",
      description: "Accessible opportunities that create real, sustainable change.",
      imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Your Success Comes First",
      description: "We are committed to your growth, progress, and long term success.",
      imgUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8fafd] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Tag Header */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 text-amber-800 border border-amber-200/60 text-xs font-bold uppercase tracking-wider">
            <span className="text-amber-600 text-sm">✨</span>
            WHY CHOOSE US
          </div>
        </div>

        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Why Join <span className="text-[#d97706]">YES TIME GLOBAL?</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We are committed to building a transparent platform focused on your security, long-term growth, and financial empowerment.
          </p>
        </div>

        {/* 5 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch justify-center">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Section with Zoom Effect */}
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={card.imgUrl}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Text Content */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-amber-600 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Bottom Line (Expands on Hover) */}
              <div className="px-5 pb-5 pt-2">
                <div className="w-6 h-[3px] bg-slate-200 rounded-full transition-all duration-300 group-hover:w-full group-hover:bg-amber-500" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Join;