import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PetrolSaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Fleet Fuel Cards", "Fuel Additives", "Hybrid Conversion", "Eco Lubricants", "Mileage Trackers"];

  const petrolSavingCards = [
    {
      id: 1,
      title: "Commercial Fleet Fuel Discount Card",
      category: "Fleet Fuel Cards",
      discount: "Save 15% / Liter",
      price: "Free Access",
      originalPrice: "Enterprise Tier",
      image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80",
      description: "Nationwide fuel rebate card providing immediate cost deductions at partner petroleum stations for commercial fleets."
    },
    {
      id: 2,
      title: "Nano-Tech Engine Fuel Optimizer Additive",
      category: "Fuel Additives",
      discount: "25% OFF",
      price: "$24.99",
      originalPrice: "$35.00",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      description: "Advanced combustion catalyst designed to clean fuel injectors, reduce emissions, and increase miles per gallon."
    },
    {
      id: 3,
      title: "Synthetic Fuel-Economy Motor Oil (5W-30)",
      category: "Eco Lubricants",
      discount: "30% OFF",
      price: "$42.00",
      originalPrice: "$60.00",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      description: "Full synthetic low-friction formula engineered to minimize internal engine drag and maximize fuel efficiency."
    },
    {
      id: 4,
      title: "OBD-II Real-Time Fuel & Mileage Tracker",
      category: "Mileage Trackers",
      discount: "Save $20",
      price: "$59.00",
      originalPrice: "$79.00",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      description: "Smart diagnostic plug-in that monitors driving habits, fuel consumption rates, and idling waste via mobile app."
    },
    {
      id: 5,
      title: "Hydrogen Booster Kit for Petrol Engines",
      category: "Hybrid Conversion",
      discount: "20% OFF",
      price: "$299.00",
      originalPrice: "$375.00",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
      description: "Supplemental HHO generator system designed to significantly boost fuel mileage and clean carbon deposits."
    },
    {
      id: 6,
      title: "High-Flow Air Induction Filter System",
      category: "Fuel Additives",
      discount: "35% OFF",
      price: "$48.00",
      originalPrice: "$75.00",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      description: "Washable high-performance air intake filter that improves oxygen flow for cleaner combustion and better mileage."
    },
    {
      id: 7,
      title: "Commercial Logistics Fuel Management Pass",
      category: "Fleet Fuel Cards",
      discount: "Save 12%",
      price: "Corporate Tier",
      originalPrice: "Custom Quote",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      description: "Centralized billing and automated mileage accounting software for freight and distribution fleets."
    },
    {
      id: 8,
      title: "Ceramic Engine Coating Treatment",
      category: "Eco Lubricants",
      discount: "25% OFF",
      price: "$65.00",
      originalPrice: "$88.00",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80",
      description: "Micro-ceramic surface shield that lowers piston friction, protecting the engine while extending fuel mileage."
    },
    {
      id: 9,
      title: "Smart Tire Pressure & Fuel Saver Sensor Set",
      category: "Mileage Trackers",
      discount: "40% OFF",
      price: "$35.00",
      originalPrice: "$59.00",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      description: "Wireless TPMS caps that prevent under-inflation drag to ensure optimal fuel economy on every journey."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? petrolSavingCards 
    : petrolSavingCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              FUEL EFFICIENCY & SAVINGS PORTAL
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Petrol & <span className="text-amber-400">Fuel Savings Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Maximize your mileage and cut fuel expenses with verified commercial fleet cards, engine optimization additives, and fuel-saving technologies.
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

        {/* Petrol Saving Cards Grid */}
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
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Special Pricing</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-extrabold text-amber-400">{item.price}</span>
                      <span className="text-xs text-neutral-500 line-through">{item.originalPrice}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate('/contact-us')}
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
              CORPORATE FUEL PARTNERSHIPS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Manage a transport fleet and looking for bulk fuel rebates?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our energy desk coordinates custom corporate fuel card programs and mileage reduction audits for logistics enterprises. Reach out to our team to optimize your fuel overheads.
            </p>
          </div>

          <div className="shrink-0">
            <button 
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

export default PetrolSaving;