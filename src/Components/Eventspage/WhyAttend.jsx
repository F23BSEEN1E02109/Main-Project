import React from 'react';

const WhyAttend = () => {
  const cardsData = [
    {
      id: "01",
      title: "Global Networking",
      description: "Connect directly with visionary entrepreneurs, experienced investors, and strategic industry partners hailing from over 30 countries worldwide to expand your international reach.",
      imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Expert Insights",
      description: "Learn from seasoned industry leaders and successful entrepreneurs who have scaled empires, sharing proven frameworks, hard-earned wisdom, and actionable market strategies.",
      imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 18h6m-5 3h4M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Secure & Inclusive",
      description: "Experience a welcoming, professionally managed environment where diverse backgrounds are celebrated, ensuring everyone receives an equal opportunity to thrive and succeed securely.",
      imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "Business Growth",
      description: "Discover real, high-impact business opportunities, funding channels, and disruptive ideas specifically curated to dramatically accelerate your personal trajectory and corporate expansion.",
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: "05",
      title: "Lasting Partnerships",
      description: "Build deep, meaningful professional relationships that effortlessly evolve past casual networking events into long-term, profitable business collaborations and joint ventures.",
      imgUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      id: "06",
      title: "Exclusive Resources",
      description: "Gain privileged entry to premium downloadable toolkits, proprietary strategic templates, and comprehensive market research reports designed to give your venture a competitive edge.",
      imgUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-attend-section" className="w-full bg-[#f8fafc] py-20 px-6 sm:px-10 lg:px-16 font-sans text-slate-800">
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-bold uppercase tracking-wider mb-4">
          <span>✨</span>
          <span>WHY ATTEND</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a1128] tracking-tight mb-4">
          Why Join Our <span className="text-amber-500">Events?</span>
        </h2>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Our events are carefully designed to create meaningful connections and provide actionable insights that transform your business and personal growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-[#0f172a]/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-500/30">
                  {card.id}
                </div>

                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-[#0f172a]/90 text-amber-400 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 shadow-lg">
                  {card.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a1128] mb-3 transition-colors duration-300 group-hover:text-amber-500">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyAttend;