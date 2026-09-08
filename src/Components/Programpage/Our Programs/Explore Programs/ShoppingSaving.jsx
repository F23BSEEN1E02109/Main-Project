import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelfSaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Personal Security", "Emergency Prep", "Smart Insurance", "Wealth Protection", "Asset Backup"];

  const selfSavingCards = [
    {
      id: 1,
      title: "Emergency Personal Go-Bag & Kit",
      category: "Emergency Prep",
      discount: "35% OFF",
      price: "$89.00",
      originalPrice: "$135.00",
      image: "https://images.unsplash.com/photo-1499540633129-6f94e1078753?auto=format&fit=crop&w=800&q=80",
      description: "Military-grade weatherproof emergency backpack fully equipped with survival gear, water filtration, and first aid tools."
    },
    {
      id: 2,
      title: "Encrypted Hardware Crypto Wallet",
      category: "Wealth Protection",
      discount: "20% OFF",
      price: "$119.00",
      originalPrice: "$149.00",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
      description: "Offline cold-storage security device designed to protect your digital assets and self-sovereign wealth."
    },
    {
      id: 3,
      title: "Biometric Smart Home Safe Box",
      category: "Asset Backup",
      discount: "30% OFF",
      price: "$210.00",
      originalPrice: "$300.00",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      description: "Heavy-gauge steel security vault featuring fingerprint recognition and digital keypad backup for vital documents."
    },
    {
      id: 4,
      title: "Personal GPS Satellite Messenger",
      category: "Personal Security",
      discount: "Save $60",
      price: "$239.00",
      originalPrice: "$299.00",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      description: "Global two-way satellite communicator enabling SOS rescue signaling and live tracking anywhere on earth."
    },
    {
      id: 5,
      title: "Solar-Powered Emergency Weather Radio",
      category: "Emergency Prep",
      discount: "45% OFF",
      price: "$39.00",
      originalPrice: "$70.00",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      description: "Hand-crank and solar-charged NOAA broadcast receiver with built-in LED flashlight and mobile power bank."
    },
    {
      id: 6,
      title: "Cyber Identity Theft Protection Suite",
      category: "Smart Insurance",
      discount: "25% OFF",
      price: "$12.99 / mo",
      originalPrice: "$17.50 / mo",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      description: "Real-time dark web surveillance, social security monitoring, and full financial recovery insurance coverage."
    },
    {
      id: 7,
      title: "Heavy-Duty Fireproof Document Bag",
      category: "Asset Backup",
      discount: "40% OFF",
      price: "$29.00",
      originalPrice: "$48.00",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "Silicone-coated fiberglass organizer tested to withstand up to 2000°F to safeguard passports, cash, and deeds."
    },
    {
      id: 8,
      title: "Portable Water Purification Gravity System",
      category: "Emergency Prep",
      discount: "15% OFF",
      price: "$75.00",
      originalPrice: "$88.00",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
      description: "Hollow-fiber membrane filter that removes 99.9999% of waterborne bacteria for safe drinking in any crisis."
    },
    {
      id: 9,
      title: "Self-Defense Personal Safety Alarm",
      category: "Personal Security",
      discount: "50% OFF",
      price: "$19.00",
      originalPrice: "$38.00",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      description: "High-decibel keychain siren with flashing strobe light designed to deter threats and alert bystanders instantly."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? selfSavingCards 
    : selfSavingCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              AUTONOMOUS SECURITY & PREPAREDNESS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Self-Saving & <span className="text-amber-400">Security Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Equip yourself with elite personal preparedness tools, asset backups, and self-reliance gear engineered for total peace of mind.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-neutral-800/80 pb-6">
          {categoriesList.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20' 
                  : 'bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((item) => (
            <div 
              key={item.id}
              className="bg-[#0b1320] border border-neutral-800 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-500 shadow-xl"
            >
              {/* Image Container with Discount Badge */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-xs font-extrabold tracking-wider shadow-md">
                    {item.discount}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300 text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Special Price</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-extrabold text-amber-400">{item.price}</span>
                      <span className="text-xs text-neutral-500 line-through">{item.originalPrice}</span>
                    </div>
                  </div>

                  {/* Non-functional button */}
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-bold text-xs tracking-wider uppercase hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 cursor-pointer"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Single Contact Button */}
        <div className="bg-gradient-to-br from-[#0b1320] via-[#09101a] to-[#111c3a] border border-neutral-800 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              INDIVIDUAL PREPAREDNESS CONSULTING
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need custom emergency planning or security advice?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our safety consultants help design tailored self-reliance portfolios, asset redundancy frameworks, and emergency strategies. Reach out to our team to secure your tailored setup.
            </p>
          </div>

          <div className="shrink-0">
            <button 
              type="button"
              onClick={() => navigate('/contact-us')}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-2xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-amber-400/20 cursor-pointer flex items-center gap-2"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SelfSaving;