import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QA = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Which banks are partnered with YES TIME GLOBAL?",
      answer: "We collaborate with premier institutions including HBL, Meezan Bank, MCB, UBL, Bank Alfalah, Allied Bank, and JS Bank to deliver robust financial services."
    },
    {
      question: "Can I open a bank account through YES TIME GLOBAL?",
      answer: "Yes, you can easily initiate and process your bank account applications through our secure platform with the guidance of our partner institutions."
    },
    {
      question: "Is my financial information secure?",
      answer: "We utilize advanced bank-grade encryption and strict security protocols to ensure all your financial data and transactions remain completely protected."
    },
    {
      question: "Can businesses also avail banking services?",
      answer: "Yes, we offer comprehensive corporate and business banking solutions tailored to support transactions, payroll, and trade requirements."
    },
    {
      question: "How can I contact the financial support team?",
      answer: "You can reach out to our dedicated financial advisory and support team anytime via the contact options provided below or through our portal."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleExploreClick = () => {
    navigate('/banks');
    setTimeout(() => {
      const element = document.getElementById('ecosystems-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans py-16 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* Main Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            FAQs Banks & Financial
          </h2>
        </div>

        {/* Top Grid: Accordions on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`transition-all duration-300 rounded-2xl border ${
                    isOpen 
                      ? 'bg-white border-amber-400 shadow-lg ring-1 ring-amber-400/20' 
                      : 'bg-[#fafbfc] border-gray-200/80 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-amber-400 text-black rotate-180 shadow-sm' : 'bg-gray-100 text-gray-600'
                    }`}>
                      ⌄
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Image with Zoom Hover & Overlay Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000" 
                alt="Banking & Investment" 
                className="w-full h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Bottom Overlay Info Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 p-4 rounded-2xl space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                  NEED IMMEDIATE ASSISTANCE?
                </span>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Our financial advisory team is available to assist you with custom solutions.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner Section */}
        <div className="bg-[#050B14] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
                TAKE THE NEXT STEP
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Take the Next Step Toward a <br />
                <span className="text-amber-400">Smarter Financial Future.</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Secure, transparent and reliable financial solutions with our trusted banking partners.
              </p>
            </div>

            {/* Buttons with Hover Effects */}
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <button 
                onClick={handleExploreClick}
                className="px-6 py-3.5 rounded-full bg-amber-400 text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <span>→</span>
              </button>

              <Link 
                to="/contact-us"
                className="px-6 py-3.5 rounded-full bg-neutral-900 text-white border border-neutral-700 font-semibold text-xs tracking-wider uppercase backdrop-blur-md hover:bg-neutral-800 hover:border-amber-400/50 hover:text-amber-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer no-underline inline-flex items-center"
              >
                Contact Finance Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QA;