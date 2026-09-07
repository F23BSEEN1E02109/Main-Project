import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section className="w-full py-10 bg-slate-50 flex items-center justify-center p-5 font-sans">
      <div className="relative w-full max-w-[1000px] bg-gradient-to-br from-white to-slate-100 border border-slate-200 rounded-3xl p-10 md:p-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden">
        
        {/* Left Content */}
        <div className="max-w-[550px] flex flex-col items-start">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e5ad15] text-[#b8860b] text-[11px] font-bold tracking-wide mb-6 shadow-[0_2px_8px_rgba(229,173,21,0.15)]">
            <span>⭐</span> Ready to explore?
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] leading-[1.15] font-extrabold text-slate-900 tracking-tight m-0 mb-4">
            Ready to explore a <br />
            <span className="text-[#d4a017] italic font-bold">partnership?</span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-[14.5px] leading-relaxed m-0">
            Tell us what you are building and where you see an opportunity to work together.
          </p>
        </div>

        {/* Right Button Action */}
        <div className="w-full md:w-auto shrink-0">
          <Link
            to="/contact-us"
            className="w-full md:w-auto bg-gradient-to-br from-[#e5ad15] to-[#d4a017] text-slate-900 border-none outline-none px-8 py-4 rounded-full text-sm font-bold cursor-pointer inline-flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(229,173,21,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:from-[#f3be24] hover:to-[#e5ad15] hover:shadow-[0_12px_28px_rgba(229,173,21,0.5)] active:-translate-y-0.5 active:scale-[0.98] no-underline text-center"
          >
            Contact our team ↗
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Explore;