import React from 'react';
import { useNavigate } from 'react-router-dom';

const SmoothPath = () => {
  const navigate = useNavigate();

  const stepCards = [
    {
      number: "01",
      title: "Tell us what you need",
      desc: "Share your question, membership detail, or program concern.",
      icon: "❓"
    },
    {
      number: "02",
      title: "Check your details",
      desc: "We confirm the right information and next actions required.",
      icon: "🛡️"
    },
    {
      number: "03",
      title: "Get guided help",
      desc: "Our team directs you to the best route for a clear answer.",
      icon: "💬"
    },
    {
      number: "04",
      title: "Move forward confidently",
      desc: "Continue with the right support, plan, or contact path.",
      icon: "✅"
    }
  ];

  const infoCards = [
    {
      tag: "BEFORE YOU CONTACT US",
      title: "Keep your member details close.",
      desc: "Having your membership information ready helps us respond faster and direct your question to the right team."
    },
    {
      tag: "NEED AN ANSWER NOW?",
      title: "Browse common questions.",
      desc: "Visit our FAQ section for quick answers to general questions about programs, membership, and the support available to you."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f4f7fa] font-sans py-20 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-[1250px] mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
            HOW SUPPORT WORKS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            A smooth path to the right answer
          </h1>
        </div>

        {/* Top 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200/80 rounded-[28px] p-6 shadow-sm flex flex-col justify-between h-[220px] transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
            >
              {/* Top Row: Number and Icon */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-extrabold text-xs flex items-center justify-center shadow-md">
                  {card.number}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gray-900 text-amber-400 flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                  {card.icon}
                </div>
              </div>

              {/* Bottom Text Content */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle 2 Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200/80 rounded-[28px] p-8 shadow-sm space-y-3 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
            >
              <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                {card.tag}
              </span>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Section */}
        <div className="bg-[#050B14] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              STILL HAVE A QUESTION?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              We’ll guide you to the right next step.
            </h3>
          </div>

          <button 
            onClick={() => navigate('/contact-us')}
            className="px-7 py-4 rounded-full bg-amber-400 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Contact support</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SmoothPath;