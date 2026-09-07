import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Design = () => {
  const [activeTab, setActiveTab] = useState('all');

  const programsData = [
    {
      id: 'shopping-saving',
      category: 'shopping',
      title: 'SHOPPING SAVING',
      urduTitle: 'شاپنگ سیونگ',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
      features: [
        'Daily Essentials',
        'Registered shops + customers connect shop',
        '→ record → savings eligibility token + lucky draw',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    },
    {
      id: 'wholesale-saving',
      category: 'shopping',
      title: 'WHOLESALE SAVING',
      urduTitle: 'ہول سیل سیونگ',
      image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=600&q=80',
      features: [
        'Bulk Purchases',
        'Better value on wholesale essentials and business stock ups',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    },
    {
      id: 'petrol-saving',
      category: 'vehicles',
      title: 'PETROL & DIESEL SAVING',
      urduTitle: 'پیٹرول و ڈیزل سیونگ',
      image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=600&q=80',
      features: [
        'Fuel Purchases',
        'Smart savings for daily travel, commuting, and business transport',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    },
    {
      id: 'motorcycle-saving',
      category: 'vehicles',
      title: 'MOTORCYCLE & SCOOTY SAVING',
      urduTitle: 'موٹر سائیکل و سکوٗٹی سیونگ',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      features: [
        'New or Used',
        'Buy/sell motorcycles & scooters search by need/budget, verify vehicle + papers yourself',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    },
    {
      id: 'car-saving',
      category: 'vehicles',
      title: 'CAR SAVING',
      urduTitle: 'کار سیونگ',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
      features: [
        'New or Used Cars marketplace buy/sell with verification',
        'After purchase, eligible amount may enter auto saving / lucky draw',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    },
    {
      id: 'car-plan',
      category: 'vehicles',
      title: 'CAR PLAN',
      urduTitle: 'کار پلان',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      features: [
        'Structured plans for your future car select → apply → pay → track → complete',
        'Example tiers: 30L→ 36k → 210Cr→ 252k monthly + dashboard + optional draw + bank flow',
        'Join → pay → track → complete • جوائن → پے → ٹریک → کمپلیٹ'
      ]
    },
    {
      id: 'property-saving',
      category: 'property',
      title: 'PROPERTY SAVING',
      urduTitle: 'جائیداد کا منصوبہ',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      features: [
        'Residential / commercial / agri land / future projects search → verify docs → legal transfer',
        'Sellers after company verify + offer transfer example 2% • auto saving after purchase',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    },
    {
      id: 'crop-saving',
      category: 'agriculture',
      title: 'CROP SAVING',
      urduTitle: 'فصل سیونگ',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
      features: [
        'Buy / Sell Crops',
        'Support for agriculture value, crop planning, and better farm decisions',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    },
    {
      id: 'self-saving',
      category: 'self',
      title: 'SELF SERVICE SAVING',
      urduTitle: 'سیلف سروس سیونگ',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
      features: [
        'Buy or Sell by Yourself!',
        'Flexible self service saving for direct buying, selling, and value growth',
        '⏱ Every 1 Minute • ہر 1 منٹ'
      ]
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programsData 
    : programsData.filter(item => item.category === activeTab);

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 py-16 px-4 sm:px-6">
      
      {/* Top Header Section */}
      <div className="max-w-[1300px] mx-auto text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-white mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">DISCOVER OUR PROGRAMS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
          Programs Designed for <span className="text-amber-600">Your Better Future</span>
        </h2>
        
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          YES TIME GLOBAL offers 9 powerful programs to help you save more, spend smartly and create a better future for yourself and your family.
        </p>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-16 mt-8 py-4 px-6 bg-white border border-slate-200 rounded-2xl max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="text-amber-600 font-bold text-xl">9</span>
            <span className="text-xs text-slate-700 text-left uppercase tracking-wider font-medium">Powerful Programs</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-amber-600 font-bold text-xl">🌍</span>
            <span className="text-xs text-slate-700 text-left uppercase tracking-wider font-medium">Global Opportunities</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-amber-600 font-bold text-xl">🛡️</span>
            <span className="text-xs text-slate-700 text-left uppercase tracking-wider font-medium">Trusted Platform</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-amber-600 font-bold text-xl">👤</span>
            <span className="text-xs text-slate-700 text-left uppercase tracking-wider font-medium">Member Focused</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-10">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'shopping', label: 'Shopping' },
            { id: 'vehicles', label: 'Vehicles' },
            { id: 'property', label: 'Property' },
            { id: 'agriculture', label: 'Agriculture' },
            { id: 'self', label: 'Self Service' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-500/50 hover:text-amber-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map(item => (
          <div 
            key={item.id} 
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group transition-all duration-500 hover:border-amber-500 hover:shadow-2xl hover:-translate-y-1.5"
          >
            <div>
              {/* Card Image with Zoom Effect */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Titles */}
              <div className="p-6 pb-2 text-center">
                <h3 className="text-lg font-bold text-slate-900 tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-amber-600 mt-1">
                  {item.urduTitle}
                </p>
              </div>

              {/* Features List */}
              <div className="px-6 py-3 space-y-2.5 min-h-[140px]">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 space-x-2">
                    <span className="text-amber-600 font-bold mt-0.5">›</span>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="p-6 pt-4">
              <Link
                to={`/programs/${item.id}`}
                className="w-full py-3 bg-amber-500 text-white font-bold rounded-xl text-sm transition-all duration-300 hover:bg-amber-600 hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>View Program</span>
                <span className="text-base">›</span>
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Design;