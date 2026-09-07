import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApproveRefund = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* ================= SECTION 1: HOW AN APPROVED REFUND IS PROCESSED ================= */}
      <section className="max-w-5xl mx-auto mb-16 bg-[#0B132B] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-3 block">
              REFUND PROCESSING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              How an Approved Refund Is Processed
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Once a request has been reviewed and approved, processing follows the applicable program, payment, or banking requirements.
            </p>
          </div>

          {/* Right 3 Steps Cards */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Step 1 */}
            <div className="bg-[#111C3A] border border-slate-700/60 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Request Review</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Your request and supporting information are reviewed against the applicable program conditions.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#111C3A] border border-slate-700/60 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Approval</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Eligible requests proceed according to the relevant terms and conditions.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#111C3A] border border-slate-700/60 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Payment Processing</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Where applicable, the approved refund is processed through the relevant payment or banking channel.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SECTION 2: WHAT TO KEEP IN MIND + NEED HELP ================= */}
      <section className="max-w-5xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: What to Keep in Mind (8 Points List) */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2 block">
            IMPORTANT NOTES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            What to Keep in Mind
          </h2>

          <div className="space-y-4">
            {[
              "Refund and cancellation requests are subject to the applicable terms and conditions of the selected program or service.",
              "The requester may be required to provide accurate personal, payment, transaction, or supporting information.",
              "The company may verify submitted information and request additional documentation where necessary.",
              "Approval of a request is not automatic and depends on the applicable eligibility and program conditions.",
              "Refund processing may depend on the relevant payment provider, bank, or other applicable service provider.",
              "Certain payments, charges, services, or transactions may not be eligible for refund according to the applicable terms.",
              "Requests involving property, vehicles, banking, or other specific services may be subject to additional requirements.",
              "For disputes or clarification, please contact the official support team for review."
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                {/* Hover sirf number par */}
                <span className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xs font-bold flex items-center justify-center shrink-0 transition-all duration-300 hover:bg-amber-500 hover:text-white cursor-pointer shadow-sm">
                  {index + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-0.5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Need Help Box */}
        <div className="lg:col-span-5 bg-[#0B132B] border border-slate-800 rounded-3xl p-8 text-white shadow-xl sticky top-8">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636l3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Our support team can guide you through eligibility, documentation, and request submission.
          </p>

          <div className="space-y-3 mb-6">
            <div className="w-full bg-[#111C3A] border border-slate-700/60 rounded-xl p-4 text-sm font-semibold text-gray-200 flex items-center justify-between">
              <span>0300 3180300</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </div>
            <div className="w-full bg-[#111C3A] border border-slate-700/60 rounded-xl p-4 text-sm font-semibold text-gray-200 flex items-center justify-between">
              <span>0303 3723030</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>

          {/* Hover on Button */}
          <button 
            onClick={() => navigate('/contact-us')}
            className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Support
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

      </section>


      {/* ================= SECTION 3: IMPORTANT POLICY NOTICE ================= */}
      <section className="max-w-5xl mx-auto mb-16 bg-[#FFFBEB] border border-amber-200 rounded-3xl p-8 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-600 font-bold block">
              LEGAL CLARIFICATION
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Important Policy Notice
            </h2>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
          <p>Refund and cancellation requests are considered according to the terms and conditions applicable to the relevant program, service, agreement, or transaction.</p>
          <p>Submission of a request does not by itself guarantee approval. Requests may require verification of the information and supporting documents provided.</p>
          <p>Where a request involves a bank, property, vehicle, or another third party service, additional terms, documentation, or procedures may apply.</p>
          <p>If you have a question regarding the interpretation or application of this policy, please contact our support team before proceeding.</p>
        </div>
      </section>


      {/* ================= SECTION 4: FOOTER BANNER ================= */}
      <section className="max-w-5xl mx-auto bg-[#0B132B] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2 block">
            STILL HAVE QUESTIONS?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Let our team help you with your request.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
            Contact YES TIME GLOBAL if you need clarification about refund eligibility, cancellation, or the required process.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Hover on Buttons */}
          <button 
            onClick={() => navigate('/contact-us')}
            className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-md cursor-pointer"
          >
            Call Now
          </button>
          <button 
            onClick={() => navigate('/contact-us')}
            className="px-5 py-3 bg-[#111C3A] hover:bg-[#1a2952] border border-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            Contact Us <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

    </div>
  );
};

export default ApproveRefund;