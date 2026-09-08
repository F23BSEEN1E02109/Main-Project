import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WholesaleSaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Bulk Electronics", "Industrial Supply", "Global Apparel", "Raw Materials", "Commercial Goods"];

  const wholesaleCards = [
    {
      id: 1,
      title: "Bulk Industrial Grade Solar Panels",
      category: "Industrial Supply",
      minOrder: "MOQ: 50 Units",
      price: "$115.00 / unit",
      originalPrice: "$165.00",
      image: "https://images.unsplash.com/photo-1509391365360-80424597d3ba?auto=format&fit=crop&w=800&q=80",
      description: "High-efficiency monocrystalline photovoltaic panels engineered for commercial power installations."
    },
    {
      id: 2,
      title: "Commercial Wireless Earbuds Wholesale Pack",
      category: "Bulk Electronics",
      minOrder: "MOQ: 200 Units",
      price: "$14.50 / unit",
      originalPrice: "$28.00",
      image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",
      description: "Bluetooth 5.3 retail-ready packaged wireless earbuds with customizable branding options available."
    },
    {
      id: 3,
      title: "Premium Organic Cotton Fabric Rolls",
      category: "Raw Materials",
      minOrder: "MOQ: 500 Meters",
      price: "$3.20 / meter",
      originalPrice: "$5.50",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80",
      description: "Certified sustainable combed cotton textile rolls designed for high-end garment manufacturing."
    },
    {
      id: 4,
      title: "Export-Quality Denim Apparel Assortment",
      category: "Global Apparel",
      minOrder: "MOQ: 300 Pieces",
      price: "$12.00 / piece",
      originalPrice: "$22.00",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
      description: "Assorted sizes and washes of durable stretch denim jeans packed for international retail distribution."
    },
    {
      id: 5,
      title: "Heavy-Duty Stainless Steel Cookware Sets",
      category: "Commercial Goods",
      minOrder: "MOQ: 100 Sets",
      price: "$45.00 / set",
      originalPrice: "$75.00",
      image: "https://images.unsplash.com/photo-1584990347426-c585c641d743?auto=format&fit=crop&w=800&q=80",
      description: "Triple-layer clad stainless steel pots and pans built for restaurant and commercial kitchen standards."
    },
    {
      id: 6,
      title: "High-Capacity Power Bank Distribution Boxes",
      category: "Bulk Electronics",
      minOrder: "MOQ: 150 Units",
      price: "$18.90 / unit",
      originalPrice: "$32.00",
      image: "https://images.unsplash.com/photo-1609592424159-bc658f50465e?auto=format&fit=crop&w=800&q=80",
      description: "20,000mAh fast-charging portable power banks with digital LED indicator displays."
    },
    {
      id: 7,
      title: "Modular Office Workstation Components",
      category: "Industrial Supply",
      minOrder: "MOQ: 40 Kits",
      price: "$120.00 / kit",
      originalPrice: "$195.00",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      description: "Flat-packed modular desk frameworks with heavy-gauge steel supports and scratch-resistant surfaces."
    },
    {
      id: 8,
      title: "Eco-Friendly Biodegradable Packaging Cartons",
      category: "Raw Materials",
      minOrder: "MOQ: 1,000 Pcs",
      price: "$0.85 / piece",
      originalPrice: "$1.50",
      image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80",
      description: "Recyclable corrugated shipping boxes custom-designed for e-commerce merchant fulfillment."
    },
    {
      id: 9,
      title: "Luxury Hospitality Cotton Towel Bales",
      category: "Commercial Goods",
      minOrder: "MOQ: 80 Bales",
      price: "$65.00 / bale",
      originalPrice: "$110.00",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-absorbent 600 GSM hotel-grade ring-spun cotton bath towels packed in compressed export bales."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? wholesaleCards 
    : wholesaleCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              B2B & BULK PROCUREMENT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Wholesale & <span className="text-amber-400">Savings Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Access manufacturer-direct pricing, high-volume order tiers, and global B2B procurement networks customized for commercial enterprises.
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

        {/* Wholesale Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((item) => (
            <div 
              key={item.id}
              className="bg-[#0b1320] border border-neutral-800 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-500 shadow-xl"
            >
              {/* Image Container with MOQ Badge */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-xs font-extrabold tracking-wider shadow-md">
                    {item.minOrder}
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
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Wholesale Rate</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-extrabold text-amber-400">{item.price}</span>
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
                    Inquire Bulk
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
              ENTERPRISE PROCUREMENT PARTNERSHIP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need custom volume pricing or shipping logistics?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our trade division connects commercial buyers with verified international suppliers. Get in touch with our corporate procurement desk for customized fulfillment contracts.
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

export default WholesaleSaving;