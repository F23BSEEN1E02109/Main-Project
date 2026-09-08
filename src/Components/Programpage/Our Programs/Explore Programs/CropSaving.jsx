import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CropSaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Smart Irrigation", "Pest Control", "Organic Fertilizers", "Crop Protection", "Harvesting Tech"];

  const cropSavingCards = [
    {
      id: 1,
      title: "Solar-Powered Automated Drip Irrigation Kit",
      category: "Smart Irrigation",
      discount: "30% OFF",
      price: "$210.00",
      originalPrice: "$300.00",
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
      description: "Precision soil-moisture responsive watering system designed to conserve water and maximize crop yield."
    },
    {
      id: 2,
      title: "Eco-Friendly Bio-Pesticide Concentrate",
      category: "Pest Control",
      discount: "25% OFF",
      price: "$45.00",
      originalPrice: "$60.00",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      description: "Non-toxic organic formula that protects crops from harmful insects while preserving beneficial soil microbes."
    },
    {
      id: 3,
      title: "Advanced Nitrogen-Rich Organic Fertilizer",
      category: "Organic Fertilizers",
      discount: "20% OFF",
      price: "$35.00",
      originalPrice: "$44.00",
      image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
      description: "Nutrient-dense compost blend engineered to restore depleted soil vitality and accelerate crop growth."
    },
    {
      id: 4,
      title: "Heavy-Duty Anti-Hail & UV Crop Protection Net",
      category: "Crop Protection",
      discount: "35% OFF",
      price: "$120.00",
      originalPrice: "$185.00",
      image: "https://images.unsplash.com/photo-1595974482597-4f6c4f0ab1a2?auto=format&fit=crop&w=800&q=80",
      description: "Durable HDPE shade mesh that shields delicate fields and orchards from extreme weather and bird damage."
    },
    {
      id: 5,
      title: "Digital Soil NPK & Moisture Meter",
      category: "Smart Irrigation",
      discount: "15% OFF",
      price: "$65.00",
      originalPrice: "$76.50",
      image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80",
      description: "Instant digital analyzer providing accurate real-time readings of soil fertility, pH, and moisture levels."
    },
    {
      id: 6,
      title: "Solar Agricultural Pest Trap Light",
      category: "Pest Control",
      discount: "40% OFF",
      price: "$28.00",
      originalPrice: "$47.00",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
      description: "Chemical-free insect light trap powered by solar energy to safely control nocturnal agricultural pests."
    },
    {
      id: 7,
      title: "Precision Agricultural Spray Drone Kit",
      category: "Harvesting Tech",
      discount: "Save $300",
      price: "$1,499.00",
      originalPrice: "$1,799.00",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      description: "Autonomous aerial crop sprayer designed for fast, even pesticide and liquid fertilizer distribution across large acreage."
    },
    {
      id: 8,
      title: "Mycorrhizal Inoculant Root Stimulator",
      category: "Organic Fertilizers",
      discount: "25% OFF",
      price: "$50.00",
      originalPrice: "$67.00",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      description: "Beneficial fungi treatment that expands root systems for superior nutrient and water absorption."
    },
    {
      id: 9,
      title: "Portable Grain & Crop Moisture Tester",
      category: "Harvesting Tech",
      discount: "20% OFF",
      price: "$85.00",
      originalPrice: "$106.00",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
      description: "High-accuracy digital testing device to determine optimal harvest and storage times for grains and seeds."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? cropSavingCards 
    : cropSavingCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              AGRICULTURAL YIELD & CROP PROTECTION
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Crop & <span className="text-amber-400">Yield Savings Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Enhance farm productivity and safeguard harvests with modern smart irrigation systems, organic fertilizers, and advanced crop protection technologies.
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
              COMMERCIAL FARMING & AGRONOMY CONSULTING
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Managing large acreage and looking for bulk agricultural solutions?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our agronomy specialists provide customized soil analysis, large-scale irrigation planning, and wholesale agricultural gear. Connect with our team for commercial farm contracts.
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

export default CropSaving;