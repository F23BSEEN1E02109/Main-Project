import React from 'react';

const Information = () => {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* ================= SECTION 1: REQUEST REQUIREMENTS ================= */}
      <section className="max-w-7xl mx-auto mb-24 bg-[#f1f5f9] border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-3 block">
            REQUEST REQUIREMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Information You May Need
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Keeping the relevant information and supporting records ready can help make the review process easier.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Customer Information
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Provide your name and relevant contact details associated with your program or transaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Payment Details
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Payment or transaction information may be required to identify and verify the relevant payment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Transaction Record
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Where applicable, provide the receipt, payment record, reference number, or other transaction evidence.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              Reason for Request
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clearly explain the reason for your refund or cancellation request so it can be reviewed properly.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: PROGRAM SPECIFIC TERMS ================= */}
      <section className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-3 block">
            PROGRAM SPECIFIC TERMS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Different Programs, Different Requirements
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Certain refund, cancellation, and transaction matters may require additional verification depending on the program.
          </p>
        </div>

        {/* 4 Cards Grid (2x2 layout like image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 01 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Bank Related Matters
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Refunds or payment related matters involving banking services may require transaction verification and compliance with the applicable banking process and terms.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Property Related Matters
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Property related requests may require verification of the relevant agreement, transaction records, supporting documents, and applicable program conditions.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6 -1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Vehicle Related Matters
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vehicle related requests may be reviewed against the relevant agreement, payment records, registration or transaction information, and applicable terms.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-300 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-xl relative group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-6 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Payment & Transaction Matters
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Payment related requests may require transaction verification and supporting records before any refund or adjustment can be considered.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Information;