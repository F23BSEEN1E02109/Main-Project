import React from 'react';

const Events = () => {
  const scrollToFeatured = () => {
    const element = document.getElementById('featured-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToWhyAttend = () => {
    const element = document.getElementById('why-attend-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#030712] text-white py-20 px-6 lg:px-16 overflow-hidden flex flex-col justify-center font-sans select-none">
      
      {/* Background Globe Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
          alt="Global Network Globe"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
          <span>✨</span>
          <span>GLOBAL EVENTS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-2xl leading-tight mb-6">
          Connect, Learn &amp; <br />
          <span className="text-amber-500">Grow Together.</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed mb-12">
          Join exclusive events where like-minded entrepreneurs, investors, and partners gather to build meaningful connections and unlock global opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mb-12">
          <div className="bg-[#091121]/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-5 shadow-lg">
            <h3 className="text-2xl font-black text-amber-500 mb-1">50+</h3>
            <p className="text-xs text-gray-400 font-medium">Annual Events</p>
          </div>

          <div className="bg-[#091121]/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-5 shadow-lg">
            <h3 className="text-2xl font-black text-amber-500 mb-1">2000+</h3>
            <p className="text-xs text-gray-400 font-medium">Attendees</p>
          </div>

          <div className="bg-[#091121]/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-5 shadow-lg">
            <h3 className="text-2xl font-black text-amber-500 mb-1">30+</h3>
            <p className="text-xs text-gray-400 font-medium">Countries</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={scrollToFeatured}
            className="group flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
          >
            <span>Explore Events</span>
            <svg 
              className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 shrink-0" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <button 
            onClick={scrollToWhyAttend}
            className="group flex items-center gap-2 bg-[#081021]/90 hover:bg-[#0e1a32] border border-gray-700/80 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span>Learn More</span>
            <svg 
              className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 text-amber-500 transition-all duration-300 transform group-hover:translate-x-1 shrink-0" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <button 
          onClick={scrollToFeatured}
          aria-label="Scroll Down"
          className="text-amber-500 hover:text-amber-400 transition-colors duration-300 animate-bounce p-2 cursor-pointer bg-transparent border-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default Events;