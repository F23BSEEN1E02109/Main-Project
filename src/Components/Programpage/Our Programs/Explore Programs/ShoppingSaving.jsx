import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingSaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Multi-page categories tabs or filter state
  const categoriesList = ["All", "Electronics", "Fashion & Apparel", "Home & Living", "Global Travel", "Luxury Goods"];

  // Expanded high-end shopping cards with Unsplash professional shopping images
  const shoppingCards = [
    {
      id: 1,
      title: "Next-Gen 4K Smart OLED TV",
      category: "Electronics",
      discount: "40% OFF",
      price: "$699.00",
      originalPrice: "$1,165.00",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
      description: "Immersive cinematic color accuracy with ultra-slim bezels and built-in AI audio enhancement."
    },
    {
      id: 2,
      title: "Designer Executive Leather Jacket",
      category: "Fashion & Apparel",
      discount: "25% OFF",
      price: "$249.00",
      originalPrice: "$335.00",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      description: "Crafted from 100% genuine full-grain leather, tailored for timeless modern sophistication."
    },
    {
      id: 3,
      title: "Ergonomic Minimalist Office Desk",
      category: "Home & Living",
      discount: "30% OFF",
      price: "$185.00",
      originalPrice: "$265.00",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
      description: "Solid oak finish with integrated cable management and sturdy matte steel framing."
    },
    {
      id: 4,
      title: "VIP Global Resort Getaway Pass",
      category: "Global Travel",
      discount: "Save $500",
      price: "$1,299.00",
      originalPrice: "$1,799.00",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      description: "All-inclusive luxury resort accommodations across top-tier international destinations."
    },
    {
      id: 5,
      title: "Pro Noise-Canceling Headphones",
      category: "Electronics",
      discount: "35% OFF",
      price: "$199.00",
      originalPrice: "$306.00",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      description: "Studio-quality acoustic sound isolation with 40-hour continuous battery playback."
    },
    {
      id: 6,
      title: "Swiss Automatic Chronograph Watch",
      category: "Luxury Goods",
      discount: "20% OFF",
      price: "$850.00",
      originalPrice: "$1,062.00",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      description: "Water-resistant sapphire crystal glass housing precision mechanical movement."
    },
    {
      id: 7,
      title: "Urban Streetwear Oversized Hoodie",
      category: "Fashion & Apparel",
      discount: "50% OFF",
      price: "$45.00",
      originalPrice: "$90.00",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      description: "Heavyweight organic cotton fleece designed for maximum comfort and streetwear aesthetics."
    },
    {
      id: 8,
      title: "Smart Indoor Automated Garden",
      category: "Home & Living",
      discount: "15% OFF",
      price: "$120.00",
      originalPrice: "$141.00",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
      description: "Self-watering hydroponic system with automated LED growth lighting for fresh herbs at home."
    },
    {
      id: 9,
      title: "Ultra-Light Carbon Fiber Luggage",
      category: "Global Travel",
      discount: "25% OFF",
      price: "$299.00",
      originalPrice: "$399.00",
      image: "https://images.unsplash.com/photo-1581553680327-1ff028f24410?auto=format&fit=crop&w=800&q=80",
      description: "Aerospace-grade durability featuring 360-degree silent spinner wheels and TSA locks."
    }
  ];

  // Filter cards based on selected category tab
  const filteredCards = selectedCategory === "All" 
    ? shoppingCards 
    : shoppingCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              PREMIUM DISCOUNTS & DEALS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Shopping & <span className="text-amber-400">Savings Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Explore our curated catalog of elite global merchant deals, verified price cuts, and high-value savings designed exclusively for our members.
          </p>
        </div>

        {/* Multi-Page Category Tabs Simulation */}
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

        {/* Dynamic Cards Grid with Images */}
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

        {/* Additional Multi-Page Information Banner */}
        <div className="bg-gradient-to-br from-[#0b1320] via-[#09101a] to-[#111c3a] border border-neutral-800 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              SECURE GLOBAL SAVINGS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Want access to private merchant discounts?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our verified membership program unlocks direct access to manufacturer-direct pricing across global markets. Reach out to our executive support team for activation details.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button 
              onClick={() => navigate('/contact-us')}
              className="px-7 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-2xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-amber-400/20 cursor-pointer"
            >
              Contact Support
            </button>
            <button 
              onClick={() => navigate('/terms')}
              className="px-7 py-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold rounded-2xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              View Terms
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShoppingSaving;