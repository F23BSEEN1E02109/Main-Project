import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Benefits = () => {
  const navigate = useNavigate();

  const cards = [
    {
      num: '01',
      title: 'Community based program',
      desc: 'Members join as one connected group, creating a shared cycle of savings, rewards, and participation.',
      icon: '👥'
    },
    {
      num: '02',
      title: 'Transparent process',
      desc: 'The flow is designed to be clear and easy to understand, from membership to accumulation and final result.',
      icon: '🛡️'
    },
    {
      num: '03',
      title: 'Rewards are meaningful',
      desc: 'With each purchase and savings contribution, members move closer to the final lucky draw and benefit outcome.',
      icon: '🎁'
    },
    {
      num: '04',
      title: 'Built for growth',
      desc: 'The structure encourages repeat participation while keeping the experience simple, rewarding, and professional.',
      icon: '✨'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 py-20 px-4 sm:px-6">
      
      {/* Top Header Section */}
      <div className="max-w-[1300px] mx-auto text-center mb-16">
        <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase">
          • BENEFITS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-slate-900">
          Why members choose this <span className="text-amber-600">process</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Empowering your journey with clarity, security, and proven value every step of the way.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {cards.map((item, idx) => (
          <div 
            key={idx}
            className="bg-white border border-amber-500/30 rounded-3xl p-6 shadow-lg flex flex-col justify-between transition-all duration-500 group hover:bg-black hover:border-amber-500 hover:shadow-2xl hover:-translate-y-2"
          >
            <div>
              {/* Top Row: Icon Box & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 text-amber-600 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
                  {item.icon}
                </div>
                <span className="text-amber-600 font-bold text-sm tracking-wider group-hover:text-amber-400">
                  {item.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-amber-400">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Box */}
      <div className="max-w-[1300px] mx-auto bg-white border border-amber-500/40 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
        <span className="text-[10px] font-extrabold tracking-widest text-amber-600 uppercase">
          READY TO BEGIN
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2 mb-4 max-w-2xl mx-auto leading-tight">
          Join the process and keep moving toward the final opening
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          The model is simple: pay membership, purchase, save, participate in the draw, and unlock the final reward moment when the last coupon opens.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={() => navigate('/contact-us')}
            className="px-7 py-3.5 bg-amber-500 text-white font-bold rounded-full text-sm transition-all duration-300 hover:bg-amber-600 hover:shadow-lg cursor-pointer"
          >
            Join Now ›
          </button>
          <Link
            to="/our-programs"
            className="px-7 py-3.5 bg-transparent text-slate-700 border border-slate-300 rounded-full text-sm font-bold transition-all duration-300 hover:border-amber-500 hover:text-amber-600 hover:bg-slate-50 cursor-pointer"
          >
            View Programs
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Benefits;