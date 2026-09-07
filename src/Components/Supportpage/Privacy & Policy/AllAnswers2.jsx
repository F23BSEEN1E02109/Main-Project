import React, { useState } from 'react';

const AllAnswers2 = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  // Content data for all 3 sections based on the screenshots
  const contentData = {
    terms: {
      title: "Terms & Conditions",
      items: [
        {
          title: "1. Agreement to these terms",
          desc: "By accessing company information or proceeding with a program, a customer agrees to review and follow the applicable terms, eligibility requirements, verification steps, payment conditions, and program rules."
        },
        {
          title: "2. Programs and plan terms",
          desc: "YES TIME GLOBAL may offer Shop & Savings, vehicle related programs such as car and motorcycle or scooter, property related opportunities, and other approved programs. Each program may have its own plan amount, duration, eligibility requirements, draw or non draw structure, and benefit conditions."
        },
        {
          title: "3. Registration and customer information",
          desc: "Customers must provide accurate, complete, and current personal and program related information. The company may request additional information or supporting records where required for registration, review, verification, or compliance."
        },
        {
          title: "4. Participation process",
          desc: "The general participation journey is registration, plan selection, purchase or payment, token issuance, verification, participation, and applicable benefit processing. A token or payment does not remove the requirement to complete verification or satisfy the selected plan terms."
        },
        {
          title: "5. Payments and obligations",
          desc: "Customers must complete the required purchase, payment, or contribution according to the approved terms of the selected plan. Payment amounts, schedules, methods, and completion conditions may vary by program and market."
        },
        {
          title: "6. Verification and review",
          desc: "The company may review submitted information before allowing further participation. Incomplete, inaccurate, inconsistent, or misleading information may require correction, additional review, delay, or rejection of the submission."
        },
        {
          title: "7. Draw and non draw plans",
          desc: "Some plans may include a draw and others may not. Draw schedules, selection methods, eligibility, outcomes, and related conditions are governed by the specific approved plan terms and must not be assumed from general website information."
        },
        {
          title: "8. Benefits and limitations",
          desc: "Benefits depend on successful participation and compliance with the applicable program requirements. Registration, payment, or token issuance should not be understood as an unconditional guarantee of a particular benefit or delivery date."
        },
        {
          title: "9. Customer responsibility",
          desc: "Customers are responsible for reading the applicable terms, providing correct information, completing required steps, meeting payment and verification requirements, and keeping their records current."
        },
        {
          title: "10. Changes and policy confirmation",
          desc: "The latest approved terms and any plan specific conditions should be read before participation or reliance. Cancellation, refunds, transfers, late payment consequences, dispute resolution, governing law, and liability provisions depend on the applicable terms."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      items: [
        {
          title: "1. Information we may collect",
          desc: "The company material refers to information needed for registration, customer support, verification, program administration, and record keeping. This may include personal details, contact information, identity or verification information, program details, payment related information, and other records submitted by a customer."
        },
        {
          title: "2. How information may be used",
          desc: "Information may be used to register customers, process selected plans, issue or manage tokens, complete verification, administer participation, communicate with customers, provide support, maintain records, and meet legal or compliance requirements."
        },
        {
          title: "3. Verification and accuracy",
          desc: "Submitted information may be reviewed to confirm identity, eligibility, accuracy, and compliance with applicable program requirements. Customers should promptly correct information that is incomplete, inaccurate, or no longer current."
        },
        {
          title: "4. Information protection",
          desc: "YES TIME GLOBAL is expected to handle customer information responsibly and apply reasonable safeguards. Specific technical, organizational, encryption, and security standards should be added only after confirmation in the company's approved privacy policy."
        },
        {
          title: "5. Disclosure of information",
          desc: "Information may be disclosed where required by law, regulation, legal process, compliance obligations, or legitimate program operations described in the approved policy. Any disclosure to service providers, financial institutions, partners, or other third parties should follow the current approved privacy terms."
        },
        {
          title: "6. Retention and deletion",
          desc: "The PDF does not establish a definite retention period or universal deletion process. The final policy should state how long different records are retained and how a customer can submit an applicable access, correction, or deletion request."
        },
        {
          title: "7. Customer requests and complaints",
          desc: "Customers should be given an approved channel for privacy questions, correction requests, and complaints. Official contact details and response timelines must be confirmed before publication."
        },
        {
          title: "8. Policy updates",
          desc: "The company may update this policy when its programs, processes, legal requirements, or information practices change. The effective date and the method used to notify customers should be confirmed for the final version."
        },
        {
          title: "9. Policy information",
          desc: "Questions about privacy, corrections, or complaints should be directed through the company's approved contact channel."
        }
      ]
    },
    disclaimer: {
      title: "Disclaimer",
      items: [
        {
          title: "1. General information",
          desc: "Information on this website is provided to help visitors understand YES TIME GLOBAL, its programs, its participation process, and its opportunities. Website information may not contain every term, condition, exception, or requirement that applies to a specific plan."
        },
        {
          title: "2. Program availability and terms",
          desc: "Programs, plans, amounts, durations, eligibility rules, payment methods, draw or non draw structures, and availability may vary by program and market, including Pakistan, Nepal, and Indonesia. Visitors should review the approved terms for the relevant program."
        },
        {
          title: "3. No automatic entitlement",
          desc: "Registration, payment, purchase, or token issuance does not by itself guarantee participation approval, a draw outcome, a particular benefit, or a specific delivery date. Progress remains subject to eligibility verification, compliance, and the applicable plan terms."
        },
        {
          title: "4. Customer provided information",
          desc: "Customers are responsible for providing accurate, complete, and current information. The company may request correction, additional records, or further review and may delay or reject information that is incomplete, inaccurate, inconsistent, or misleading."
        },
        {
          title: "5. Draw related information",
          desc: "Any draw related outcome, schedule, selection method, and condition is governed by the specific approved plan terms. General website descriptions should not be treated as a substitute for those terms."
        },
        {
          title: "6. Third party Information and links",
          desc: "References to partners, dealers, shops, showrooms, property partners, banks, financial institutions, or external services do not automatically mean that every third party statement, service, availability, or outcome is controlled or guaranteed by YES TIME GLOBAL."
        },
        {
          title: "7. Limitation of responsibility",
          desc: "The company should not be treated as responsible for consequences caused by incorrect customer information, failure to follow the required process, payment failure, unauthorized use of an account, or circumstances outside the company's reasonable control. Exact limitation language requires legal approval."
        },
        {
          title: "8. Independent review",
          desc: "Visitors should read the applicable program terms carefully and obtain independent professional advice where they need legal, financial, tax, or other specialized guidance."
        },
        {
          title: "9. Applicable terms",
          desc: "The applicable program terms take priority over general website information when a specific plan or participation decision is being considered."
        }
      ]
    }
  };

  const currentContent = contentData[activeTab];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* ================= NAVIGATION TABS HEADER ================= */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-wrap items-center justify-center sm:justify-start gap-3">
        <button 
          onClick={() => setActiveTab('terms')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-sm cursor-pointer ${
            activeTab === 'terms' 
              ? 'bg-[#0B132B] text-white shadow-md' 
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          Terms & Conditions
        </button>
        <button 
          onClick={() => setActiveTab('privacy')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-sm cursor-pointer ${
            activeTab === 'privacy' 
              ? 'bg-[#0B132B] text-white shadow-md' 
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          Privacy Policy
        </button>
        <button 
          onClick={() => setActiveTab('disclaimer')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-sm cursor-pointer ${
            activeTab === 'disclaimer' 
              ? 'bg-[#0B132B] text-white shadow-md' 
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          Disclaimer
        </button>
      </div>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sticky Note Box */}
        <div className="lg:col-span-4 lg:sticky lg:top-8">
          <div className="bg-[#0B132B] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] font-extrabold tracking-widest uppercase mb-4">
              PLEASE NOTE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug">
              Review the details carefully.
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Program terms may differ by plan and market. The latest approved policy and plan specific terms take priority over general website information.
            </p>
          </div>
        </div>

        {/* Right Dynamic List Box */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          <div className="space-y-8">
            {currentContent.items.map((item, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default AllAnswers2;