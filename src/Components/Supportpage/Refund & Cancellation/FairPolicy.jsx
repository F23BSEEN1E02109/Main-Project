import React from 'react';

const FairPolicy = () => {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* ================= SECTION 1: OUR COMMITMENT (THORA DIFFERENT BG JAISE IMAGE MEIN HAI) ================= */}
      <section className="max-w-7xl mx-auto mb-24 bg-[#f1f5f9] border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-3 block">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Fair Policy. Clear Process.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We aim to make refund and cancellation requests understandable, structured, and easy to submit.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Transparent Review
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every request is reviewed according to the applicable program terms and conditions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Timely Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our team aims to guide you through the request and review process.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Secure Handling
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Information submitted for verification is handled carefully during the review process.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Customer Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We aim to handle valid requests professionally and respectfully.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: HOW IT WORKS (GUIDELINES) ================= */}
      <section className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-3 block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Refund & Cancellation Guidelines
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Follow these steps when submitting a refund or cancellation request.
          </p>
        </div>

        {/* 6 Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Step 01 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold rounded-full">
                  01
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Check Program Terms
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Refund and cancellation requests are handled according to the terms and conditions of the selected program or service.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold rounded-full">
                  02
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Submit Your Request
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Submit your refund or cancellation request through the company's official support channel with complete and accurate information.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold rounded-full">
                  03
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Provide Required Information
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The company may require customer details, payment information, transaction records, and other supporting documents where necessary.
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold rounded-full">
                  04
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Verification
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The submitted request and supporting information are reviewed and verified before a decision is made.
              </p>
            </div>
          </div>

          {/* Step 05 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold rounded-full">
                  05
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Approval & Processing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If the request meets the applicable conditions, the refund or cancellation will be processed according to the relevant program terms.
              </p>
            </div>
          </div>

          {/* Step 06 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold rounded-full">
                  06
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Refund Processing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Where a refund is approved, it will be processed through the applicable payment or banking method, subject to processing requirements.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default FairPolicy;