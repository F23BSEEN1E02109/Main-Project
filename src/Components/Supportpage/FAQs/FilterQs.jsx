import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FilterQs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Change state from an object to a single value (number or null) so only one accordion stays open at a time
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["All", "Programs and plans", "About us", "Participation", "Benefits", "Support and privacy"];

  const allQuestions = [
    {
      category: "About us",
      question: "What is YES TIME GLOBAL?",
      answer: "YES TIME GLOBAL connects customers, programs, partners, and opportunities through structured participation plans and clear program steps."
    },
    {
      category: "About us",
      question: "Where is YES TIME GLOBAL expanding?",
      answer: "We are continually expanding our network across key regions to provide accessible financial and partnership opportunities."
    },
    {
      category: "Programs and plans",
      question: "What programs are available?",
      answer: "We offer tailored financial participation plans, savings structures, and structured roadmap solutions."
    },
    {
      category: "Programs and plans",
      question: "What types of plans are offered?",
      answer: "We offer both short-term and long-term participation plans with flexible options to suit individual needs."
    },
    {
      category: "Programs and plans",
      question: "What is the difference between draw and non draw plans?",
      answer: "Draw plans offer periodic allocation opportunities, whereas non-draw plans focus on steady, structured progression."
    },
    {
      category: "Programs and plans",
      question: "Are 12-month plans available?",
      answer: "Yes, 12-month structured plans are among our most popular options for members."
    },
    {
      category: "Participation",
      question: "How does participation work?",
      answer: "You choose a plan, complete verification, register securely, and follow the guided roadmap steps."
    },
    {
      category: "Participation",
      question: "What information is needed during registration?",
      answer: "Basic identification details, contact info, and preferred plan selection details are required."
    },
    {
      category: "Participation",
      question: "Who can participate?",
      answer: "Any eligible individual or corporate entity meeting our standard verification guidelines can participate."
    },
    {
      category: "Participation",
      question: "How are payments or purchases handled?",
      answer: "All transactions are processed securely through our authorized banking and payment partners."
    },
    {
      category: "Participation",
      question: "What is a token?",
      answer: "A token represents your registered entry or verification status within a specific program cycle."
    },
    {
      category: "Participation",
      question: "Why is verification required?",
      answer: "Verification ensures security, transparency, and compliance with institutional standards."
    },
    {
      category: "Benefits",
      question: "When does a participant receive a benefit?",
      answer: "Benefits are distributed according to the milestone completion schedule of your chosen plan."
    },
    {
      category: "Benefits",
      question: "What are the participant's responsibilities?",
      answer: "Participants are expected to maintain accurate information and follow scheduled milestone guidelines."
    },
    {
      category: "Benefits",
      question: "Can a plan be cancelled or refunded?",
      answer: "Cancellation and refund policies follow strict terms outlined in our user agreement framework."
    },
    {
      category: "Support and privacy",
      question: "How is customer information handled?",
      answer: "We employ robust encryption and strict privacy protocols to keep your personal data secure."
    },
    {
      category: "Support and privacy",
      question: "How can I request support or submit a complaint?",
      answer: "You can reach out to our dedicated support team anytime via our portal or contact channels."
    }
  ];

  const filteredQuestions = selectedCategory === "All" 
    ? allQuestions 
    : allQuestions.filter(q => q.category === selectedCategory);

  const toggleAccordion = (index) => {
    // If the clicked item is already open, close it (set to null). Otherwise, open it and automatically close the other one.
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full min-h-screen bg-[#f4f7fa] font-sans py-16 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-[1000px] mx-auto space-y-12">

        {/* Top Header & Filter Bar Card */}
        <div className="bg-white border border-gray-200/80 rounded-[28px] p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-amber-600 text-sm">🔻</span>
            <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
              FILTER QUESTIONS
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(null); // Reset open state on tab change
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl border bg-white ${
                  isOpen
                    ? 'border-amber-400 shadow-lg ring-1 ring-amber-400/20'
                    : 'border-gray-200/80 hover:border-gray-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-800'}`}>
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 text-xs ${
                    isOpen ? 'bg-amber-400 text-black rotate-180 shadow-sm' : 'bg-gray-100 text-gray-600'
                  }`}>
                    ⌄
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/80">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Section */}
        <div className="bg-[#050B14] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              STILL HAVE QUESTIONS?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Our team is ready to help you decide.
            </h3>
            <p className="text-xs text-neutral-400 max-w-md">
              Can't find the answer you're looking for? Reach out to our support team and we'll walk you through your options.
            </p>
          </div>

          <button 
            onClick={() => navigate('/contact-us')}
            className="px-7 py-3.5 rounded-full bg-amber-400 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Contact us</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FilterQs;