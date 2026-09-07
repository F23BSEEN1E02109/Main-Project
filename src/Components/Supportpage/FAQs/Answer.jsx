import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Answer = () => {
  const navigate = useNavigate();
  const [viewAll, setViewAll] = useState(false);

  const categories = [
    {
      title: "About us",
      desc: "The company and its opportunity focused model.",
      icon: "📖",
      questions: [
        { q: "What is YES TIME GLOBAL?", a: "YES TIME GLOBAL is a platform dedicated to providing transparent and reliable financial and digital solutions." },
        { q: "How does the company operate?", a: "We collaborate with verified institutions to ensure secure and structured engagement for all members." }
      ]
    },
    {
      title: "Programs and plans",
      desc: "Available programs, terms, draw options, and duration.",
      icon: "💳",
      questions: [
        { q: "What types of programs are available?", a: "We offer multiple structured savings, financing, and business partnership programs." },
        { q: "How long do the plans last?", a: "Durations vary depending on the specific program or financial solution you choose." }
      ]
    },
    {
      title: "Participation",
      desc: "Registration, payments, tokens, and verification.",
      icon: "✅",
      questions: [
        { q: "How do I register for a program?", a: "Registration can be completed online through our secure membership portal with required information." },
        { q: "What are the token or payment requirements?", a: "Payments are processed securely via our partnered banking channels following verification." }
      ]
    },
    {
      title: "Benefits",
      desc: "Participation outcomes and important conditions.",
      icon: "💡",
      questions: [
        { q: "What benefits do members receive?", a: "Members gain access to prioritized services, exclusive financial planning tools, and robust support." },
        { q: "Are there any specific conditions?", a: "Yes, standard terms and conditions apply depending on the selected program or plan." }
      ]
    },
    {
      title: "Support and privacy",
      desc: "Information handling, complaints, and support.",
      icon: "🛡️",
      questions: [
        { q: "How is my personal data protected?", a: "We use advanced encryption and strict privacy frameworks to keep your information completely safe." },
        { q: "How can I raise a complaint or get help?", a: "Our support team is accessible 24/7 through the contact portal for any assistance." }
      ]
    }
  ];

  const quickOverviewItems = [
    "Clear plan options for every budget",
    "Simple registration and verification",
    "Dedicated support at every step"
  ];

  if (viewAll) {
    return (
      <div className="w-full min-h-screen bg-[#f4f7fa] font-sans py-16 px-4 sm:px-6 lg:px-8 text-gray-900">
        <div className="max-w-[1100px] mx-auto space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
                COMPLETE DIRECTORY
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-1">
                All Frequently Asked Questions
              </h2>
            </div>
            <button 
              onClick={() => setViewAll(false)}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-bold text-xs tracking-wider uppercase hover:bg-amber-400 hover:text-black transition-all duration-300 cursor-pointer shadow-md"
            >
              ← Back to Overview
            </button>
          </div>

          <div className="space-y-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
                </div>
                <div className="space-y-3 pt-2">
                  {cat.questions.map((item, qIdx) => (
                    <div key={qIdx} className="p-4 rounded-2xl bg-[#fafbfc] border border-gray-100 space-y-1">
                      <h4 className="text-sm font-bold text-gray-900">{item.q}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-sans">
      
      {/* Top Hero Section (Dark Background) */}
      <div className="w-full bg-[#050B14] py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Answers to help you <br />
              <span className="text-amber-400">move forward with confidence.</span>
            </h1>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Everything you need to know about YES TIME GLOBAL programs, participation, payments, and support all in one place.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => setViewAll(true)}
                className="px-7 py-4 rounded-full bg-amber-400 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                View Answers
              </button>

              <button 
                onClick={() => navigate('/contact-us')}
                className="px-7 py-4 rounded-full bg-neutral-900 text-white border border-neutral-800 font-bold text-xs tracking-wider uppercase backdrop-blur-md hover:bg-neutral-800 hover:border-amber-400/50 hover:text-amber-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Quick Overview Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b1320] border border-neutral-800 rounded-[32px] p-6 sm:p-8 shadow-2xl space-y-5">
              <div className="border-b border-neutral-800/80 pb-4 space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                  QUICK OVERVIEW
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Before you start
                </h3>
              </div>

              <div className="space-y-3">
                {quickOverviewItems.map((text, idx) => (
                  <div key={idx} className="group p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center space-x-3 transition-all duration-300 hover:border-amber-400 hover:bg-neutral-900">
                    <div className="w-6 h-6 rounded-lg bg-neutral-800 text-amber-400 flex items-center justify-center text-xs group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-300 group-hover:text-amber-400 transition-colors">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Category Cards Section (Light Background) */}
      <div className="w-full bg-[#f4f7fa] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1250px] mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
                BROWSE BY TOPIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                Find answers by category
              </h2>
            </div>

            <button 
              onClick={() => setViewAll(true)}
              className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <span>View all questions</span>
              <span>↓</span>
            </button>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200/80 rounded-[28px] p-6 shadow-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-900 text-amber-400 flex items-center justify-center text-xl shadow-md transition-all duration-300">
                  {cat.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Answer;