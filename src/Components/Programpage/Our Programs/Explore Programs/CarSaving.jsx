import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarSaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Engine Diagnostics", "Fuel Economy", "Car Security", "Maintenance Kits", "Interior Accessories"];

  const carSavingCards = [
    {
      id: 1,
      title: "OBD-II Bluetooth Car Diagnostic Scanner",
      category: "Engine Diagnostics",
      discount: "35% OFF",
      price: "$29.00",
      originalPrice: "$45.00",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      description: "Wireless fault code reader that diagnoses engine trouble lights and monitors live sensor data on your smartphone."
    },
    {
      id: 2,
      title: "Ceramic Paint Protection & Sealant Kit",
      category: "Maintenance Kits",
      discount: "30% OFF",
      price: "$39.00",
      originalPrice: "$56.00",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      description: "Hydrophobic nano-coating shield that protects car paint from UV rays, water spots, and minor scratches."
    },
    {
      id: 3,
      title: "Smart GPS Anti-Theft Vehicle Tracker",
      category: "Car Security",
      discount: "25% OFF",
      price: "$55.00",
      originalPrice: "$75.00",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      description: "Real-time location tracking device with remote engine immobilization and instant tamper alert notifications."
    },
    {
      id: 4,
      title: "Fuel Atomizer & Combustion Catalyst",
      category: "Fuel Economy",
      discount: "40% OFF",
      price: "$21.00",
      originalPrice: "$35.00",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      description: "Advanced fuel additive designed to clean injectors, reduce carbon buildup, and boost overall miles per gallon."
    },
    {
      id: 5,
      title: "Heavy-Duty Digital Tire Inflator Pump",
      category: "Maintenance Kits",
      discount: "20% OFF",
      price: "$48.00",
      originalPrice: "$60.00",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      description: "Portable 12V automatic air compressor with digital pressure gauge and emergency LED work light."
    },
    {
      id: 6,
      title: "All-Weather Custom Fit Floor Liners",
      category: "Interior Accessories",
      discount: "Save $25",
      price: "$89.00",
      originalPrice: "$114.00",
      image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80",
      description: "Laser-measured heavy-duty TPE floor mats designed to trap mud, spills, and debris protecting car carpets."
    },
    {
      id: 7,
      title: "Dual Dash Cam Front & Rear 4K System",
      category: "Car Security",
      discount: "30% OFF",
      price: "$119.00",
      originalPrice: "$170.00",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
      description: "High-definition wide-angle driving recorder with night vision, G-sensor parking mode, and loop recording."
    },
    {
      id: 8,
      title: "High-Flow Air Intake Filter Element",
      category: "Fuel Economy",
      discount: "15% OFF",
      price: "$34.00",
      originalPrice: "$40.00",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80",
      description: "Washable performance air filter engineered to increase airflow for better throttle response and fuel savings."
    },
    {
      id: 9,
      title: "Wireless Fast-Charging Phone Mount",
      category: "Interior Accessories",
      discount: "50% OFF",
      price: "$24.00",
      originalPrice: "$48.00",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
      description: "Automatic clamping infrared sensor dash mount delivering quick 15W Qi wireless charging on the go."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? carSavingCards 
    : carSavingCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              AUTOMOTIVE CARE & SAVINGS PORTAL
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Car & <span className="text-amber-400">Vehicle Savings Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Enhance your driving experience, secure your vehicle against theft, and cut maintenance costs with verified automotive tools and accessories.
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

                  <button 
                    onClick={() => {}}
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
              COMMERCIAL FLEET & AUTO PARTNERSHIPS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Managing a car fleet or auto workshop looking for bulk supplies?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We provide wholesale vehicle tracking hardware, diagnostic equipment, and maintenance kits for car rental agencies and repair shops. Reach out to our team for enterprise packages.
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

export default CarSaving;