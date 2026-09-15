import React from 'react';
import heroImg from "../../assets/hero-yes.webp";
const Contact = ({ scrollToInTouch }) => {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[550px] bg-[#030712] text-white flex items-center overflow-hidden font-sans">
      {/* Background Globe Image & Dark Overlay Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-right lg:bg-right-center bg-no-repeat transition-all duration-700 opacity-90 scale-105 hover:scale-100"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        {/* Dark radial and horizontal gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 w-full">
        <div className="max-w-2xl flex flex-col items-start gap-4">
          
          {/* Top Pill Badge */}
          <div className="group inline-flex items-center px-4 py-1 rounded-full border border-amber-500/40 bg-black/30 backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-black/50 cursor-pointer shadow-lg shadow-amber-500/5">
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-amber-200/90 group-hover:text-amber-300 transition-colors uppercase">
              Contact Yes Time Global
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-left">
            <span className="text-white">Let’s connect and </span>
            <span className="text-[#F5B027] drop-shadow-[0_2px_10px_rgba(245,176,39,0.2)]">
              move opportunities forward.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mt-1">
            Contact us about programs, participation, customer support, partnerships, investment, and global opportunities.
          </p>

          {/* Call to Action Button */}
          <div className="mt-2">
            <button 
              onClick={scrollToInTouch}
              className="relative group inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-xs tracking-wider uppercase text-slate-950 bg-gradient-to-r from-[#F5B027] via-[#ECA013] to-[#DF9107] shadow-[0_4px_20px_rgba(245,176,39,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_30px_rgba(245,176,39,0.6)] hover:from-[#FFBA35] hover:to-[#ECA013] active:scale-95 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              
              {/* Button Shine / Hover Flare Effect */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;