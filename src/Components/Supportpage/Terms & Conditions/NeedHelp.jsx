import React from 'react';
import { useNavigate } from 'react-router-dom';

const NeedHelp = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      
      {/* Main Banner Card */}
      <div className="w-full max-w-6xl bg-gradient-to-br from-slate-50 via-slate-100 to-amber-50/30 border border-slate-200/80 rounded-3xl p-8 sm:p-14 shadow-sm relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-8">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300/60 bg-white shadow-xs text-slate-800 text-xs font-semibold mb-6">
              <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>Need clarification?</span>
            </div>

            {/* Main Heading with Italic Golden Styling */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              Need help understanding <span className="text-amber-500 italic font-serif font-normal">a</span> <br />
              <span className="text-amber-500 italic font-serif font-normal">program term?</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
              Discover our programs, connect with partners, and learn how YES TIME GLOBAL PRIVATE LIMITED connects opportunities worldwide.
            </p>

          </div>

          {/* Right Action Button */}
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <button 
              onClick={() => navigate('/contact-us')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <span>CONTACT US</span>
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default NeedHelp;