import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertySaving = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", "Commercial Real Estate", "Residential Plots", "Luxury Villas", "Industrial Warehousing", "Land Investments"];

  const propertyCards = [
    {
      id: 1,
      title: "Prime Commercial Plaza Unit",
      category: "Commercial Real Estate",
      discount: "Save $25,000",
      price: "$185,000",
      originalPrice: "$210,000",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "High-footfall downtown retail and office space offering guaranteed annual rental yields for investors."
    },
    {
      id: 2,
      title: "Gated Community Residential Plot",
      category: "Residential Plots",
      discount: "15% OFF",
      price: "$65,000",
      originalPrice: "$76,500",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      description: "Fully developed freehold land parcel situated within a master-planned luxury suburban community."
    },
    {
      id: 3,
      title: "Contemporary Waterfront Luxury Villa",
      category: "Luxury Villas",
      discount: "Save $75,000",
      price: "$650,000",
      originalPrice: "$725,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      description: "Architecturally designed 5-bed estate featuring private infinity pool, smart automation, and panoramic views."
    },
    {
      id: 4,
      title: "Logistics Hub Industrial Warehouse",
      category: "Industrial Warehousing",
      discount: "20% OFF",
      price: "$420,000",
      originalPrice: "$525,000",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      description: "High-ceiling commercial storage facility equipped with loading docks and direct highway corridor access."
    },
    {
      id: 5,
      title: "Agricultural Growth Land Tract",
      category: "Land Investments",
      discount: "Save $40,000",
      price: "$210,000",
      originalPrice: "$250,000",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      description: "Fertile acreage featuring established irrigation systems and high future zoning appreciation potential."
    },
    {
      id: 6,
      title: "Urban Skyline Luxury Penthouse",
      category: "Luxury Villas",
      discount: "10% OFF",
      price: "$890,000",
      originalPrice: "$990,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      description: "Top-floor duplex apartment with private elevator entry, wrap-around terrace, and concierge services."
    },
    {
      id: 7,
      title: "Suburban Retail Strip Shop",
      category: "Commercial Real Estate",
      discount: "Save $15,000",
      price: "$130,000",
      originalPrice: "$145,000",
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
      description: "Corner-facing retail storefront positioned in a densely populated and rapidly expanding commercial district."
    },
    {
      id: 8,
      title: "Eco-Friendly Golf Course Villa Plot",
      category: "Residential Plots",
      discount: "18% OFF",
      price: "$95,000",
      originalPrice: "$115,800",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Scenic green-facing plot designed for custom sustainable architectural construction."
    },
    {
      id: 9,
      title: "Multi-Unit Industrial Park Shed",
      category: "Industrial Warehousing",
      discount: "Save $60,000",
      price: "$340,000",
      originalPrice: "$400,000",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
      description: "Versatile industrial manufacturing workshop layout with three-phase power supply and office block."
    }
  ];

  const filteredCards = selectedCategory === "All" 
    ? propertyCards 
    : propertyCards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#050B14] font-sans py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-[1300px] mx-auto space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              REAL ESTATE & PROPERTY PORTFOLIO
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Property & <span className="text-amber-400">Investment Portal</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Discover vetted real estate opportunities, high-yield commercial assets, and premium residential land packages tailored for institutional and private investors.
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

        {/* Property Cards Grid */}
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
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Investment Value</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-extrabold text-amber-400">{item.price}</span>
                      <span className="text-xs text-neutral-500 line-through">{item.originalPrice}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate('/contact-us')}
                    className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-bold text-xs tracking-wider uppercase hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 cursor-pointer"
                  >
                    Inquire Property
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
              REAL ESTATE ADVISORY SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Looking for custom real estate portfolios or site visits?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our property acquisition consultants provide legal verification, valuation analysis, and guided site tours. Connect with our real estate desk for personalized investment allocations.
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

export default PropertySaving;