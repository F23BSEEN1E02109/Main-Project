import React from 'react';

const Membership = () => {
  const steps = [
    {
      num: '01',
      title: '1. Pay the membership fee',
      desc: 'Every member starts by paying a RS:100 membership fee, which gives access to the program and activates participation in the savings and prize draw system.',
      icon: '👛'
    },
    {
      num: '02',
      title: '2. Purchase and save',
      desc: 'When a member purchases through the program, their savings begin to build automatically. Every purchase adds positive value to the member journey.',
      icon: '📈'
    },
    {
      num: '03',
      title: '3. Business coupon / draw participation',
      desc: 'Across all programs, business and purchase based coupons are issued so that each member remains connected to the draw structure and reward cycle.',
      icon: '🏷️'
    },
    {
      num: '04',
      title: '4. Savings keep growing',
      desc: 'The cumulative savings are tracked and reinforced as members continue purchasing, creating a stronger pool of value for the next stage.',
      icon: '🐷'
    },
    {
      num: '05',
      title: '5. Final coupon opens',
      desc: 'Once the collection phase is complete, the final coupon or draw is opened, giving the member a chance to win the final reward or prize result.',
      icon: '🎫'
    },
    {
      num: '06',
      title: '6. Reward is announced',
      desc: 'The final result is announced, and the winning member receives the reward, closing the cycle with a clear and rewarding conclusion.',
      icon: '🎁'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 py-20 px-4 sm:px-6">
      
      {/* Header Section */}
      <div className="max-w-[1300px] mx-auto text-center mb-16">
        <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase">
          THE FLOW
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 text-slate-900">
          From membership to final <span className="text-amber-600">reward draw</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((item, idx) => (
          <div 
            key={idx}
            className="relative bg-white border border-amber-500/30 rounded-3xl p-8 shadow-lg flex flex-col justify-between transition-all duration-500 group hover:bg-black hover:border-amber-500 hover:shadow-2xl hover:-translate-y-2"
          >
            <div>
              {/* Top Row: Icon Box & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-md transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-amber-600 font-bold text-lg tracking-wider group-hover:text-amber-400">
                  {item.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-amber-400">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Membership;