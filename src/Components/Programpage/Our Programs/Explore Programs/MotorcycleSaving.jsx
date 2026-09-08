import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MotorcycleSaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Riding Gear", "Helmets & Vision", "Bike Parts", "Maintenance", "Touring & Luggage"];

  const motorcycleCards = [
    {
      id: 1,
      title: "Carbon Fiber Armored Riding Jacket",
      category: "Riding Gear",
      discount: "35% OFF",
      price: "$210.00",
      originalPrice: "$320.00",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      description: "All-weather breathable textile jacket equipped with CE-level 2 body armor and high-visibility reflective strips."
    },
    {
      id: 2,
      title: "Smart Bluetooth Full-Face Helmet",
      category: "Helmets & Vision",
      discount: "Save $150",
      price: "$349.00",
      originalPrice: "$499.00",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      description: "Aerodynamic fiberglass shell featuring integrated intercom, noise-canceling microphone, and drop-down sun visor."
    },
    {
      id: 3,
      title: "High-Flow Performance Exhaust System",
      category: "Bike Parts",
      discount: "30% OFF",
      price: "$420.00",
      originalPrice: "$600.00",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      description: "Lightweight titanium slip-on muffler designed for improved horsepower output and a deep rumble sound profile."
    },
    {
      id: 4,
      title: "Digital Tire Inflator & Emergency Repair Kit",
      category: "Maintenance",
      discount: "40% OFF",
      price: "$45.00",
      originalPrice: "$75.00",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      description: "Compact rechargeable cordless air pump equipped with precise PSI LED display and tubeless tire plug tools."
    },
    {
      id: 5,
      title: "Waterproof Heavy-Duty Saddlebag Pair",
      category: "Touring & Luggage",
      discount: "25% OFF",
      price: "$135.00",
      originalPrice: "$180.00",
      image: "https://images.unsplash.com/photo-1558981244-5307da65124b?auto=format&fit=crop&w=800&q=80",
      description: "Expandable 50L heat-resistant motorcycle side bags with quick-release mounting straps and roll-top seal."
    },
    {
      id: 6,
      title: "Reinforced Leather Biker Boots",
      category: "Riding Gear",
      discount: "40% OFF",
      price: "$129.00",
      originalPrice: "$215.00",
      image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80",
      description: "Full-grain waterproof cowhide boots engineered with ankle support guards and non-slip oil-resistant rubber soles."
    },
    {
      id: 7,
      title: "Photochromic Anti-Fog Riding Goggles",
      category: "Helmets & Vision",
      discount: "40% OFF",
      price: "$59.00",
      originalPrice: "$99.00",
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
      description: "UV400 self-tinting lenses that automatically adjust light transmission for seamless day and night riding."
    },
    {
      id: 8,
      title: "CNC Machined Adjustable Brake & Clutch Levers",
      category: "Bike Parts",
      discount: "28% OFF",
      price: "$79.00",
      originalPrice: "$110.00",
      image: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=800&q=80",
      description: "Anodized aluminum folding levers offering 6-position reach adjustment to prevent breakage during drops."
    },
    {
      id: 9,
      title: "Magnetic Tank Bag with GPS Touchscreen Window",
      category: "Touring & Luggage",
      discount: "30% OFF",
      price: "$65.00",
      originalPrice: "$95.00",
      image: "https://images.unsplash.com/photo-1558980664-2506fca6bfc2?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-strong neodymium magnet base featuring a clear top pocket for smartphone navigation and cable ports."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? motorcycleCards 
    : motorcycleCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              RIDER & MOTORCYCLE GEAR SAVINGS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Motorcycle & <span className="text-amber-400">Savings Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Discover exclusive discounts on high-performance motorcycle gear, riding apparel, safety equipment, and premium bike accessories.
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

        {/* Motorcycle Cards Grid */}
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
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Rider Special</span>
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
                    Claim Deal
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
              CUSTOM RIDER CONSULTING & CLUB DISCOUNTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need custom riding gear setup or club volume discounts?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our motorcycle specialists assist riders and motorcycle clubs with tailored gear configurations, bulk fleet discounts, and custom riding setups.
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

export default MotorcycleSaving;